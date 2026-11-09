# Optimización del Consumo de Tokens y Configuración Eficiente en Claude Code

**Resumen Ejecutivo:** Guía práctica y de referencia rápida para mitigar el consumo excesivo de tokens en Claude Code. Incluye técnicas de gestión de contexto, uso de comandos CLI, delegación a subagentes/skills y la integración de la habilidad `caveman` para reducir los tokens de salida (*output tokens*).

---

## 📋 Tabla de Contenidos
1. [Conceptos Fundamentales](#1-conceptos-fundamentales)
2. [Principios, Implementación o Metodología](#2-principios-implementación-o-metodología)
3. [Buenas Prácticas y Trade-offs](#3-buenas-prácticas-y-trade-offs)
4. [Cheat Sheet / Referencia Rápida](#4-cheat-sheet--referencia-rápida)
5. [Pros y Contras](#5-pros-y-contras)

---

## 1. Conceptos Fundamentales

### Dinámica del Consumo de Tokens
- **Definición de Token:** Unidad mínima de procesamiento de información en el modelo (aproximadamente una palabra o fracción de palabra).
- **Asimetría de Costos:** Los tokens de entrada (*input tokens*) y los tokens de salida (*output tokens*) tienen costos significativamente dispares. En modelos actuales, los tokens de salida suelen ser considerablemente más costosos (hasta 5x más que los de entrada).
- **Acumulación de Contexto:** Cada mensaje enviado vuelve a transmitir toda la ventana de contexto acumulada (System Prompts, herramientas MCP, skills, historial de chat y archivos de memoria), aumentando linealmente el consumo de tokens de entrada en cada interacción.

---

## 2. Principios, Implementación o Metodología

### 2.1. Gestión de Contexto e Historial
- **Purga Periódica:** Uso del comando `/clear` para resetear la ventana de contexto y reiniciar sesiones limpias cuando la tarea actual ha finalizado.
- **Compactación:** Aplicación de `/compact` para condensar el historial de conversación cuando es necesario mantener la sesión activa, aceptando un proceso de resumen automático por parte del modelo.
- **Persistencia y Etiquetado:** Uso de `/rename` para asignar identificadores semánticos a las sesiones. Esto permite cerrar la terminal con `Escape x3` y reanudar el trabajo posteriormente mediante `claude resume <session-name>`.

### 2.2. Optimización de Arquitectura y Herramientas (MCP vs. CLI)
- **Reducción de Overhead por MCP:** Los servidores Model Context Protocol (MCP) inyectan definiciones extensas en el *context window*. Se deben deshabilitar interactiva o globalmente los MCPs no esenciales (vía comando `/mcp`).
- **Preferencia por CLI:** Se prioriza el uso de CLI nativos (como AWS CLI, GitHub CLI o gcloud) o Skills dedicadas sobre servidores MCP de gran escala para tareas operativas comunes.

### 2.3. Herramientas de Análisis de Código y Plugins Nativos
- **Plugins de Lenguaje (Strict Typing):** Instalación de plugins de inteligencia de código oficiales para que Claude realice navegación directa hacia definiciones sin necesidad de enviar archivos completos al contexto.
- **Hooks de Entrada/Salida:** Descarga de procesamiento mediante scripts ejecutables antes o después de la interacción para filtrar logs, códigos de error o fragmentos irrelevantes antes de enviarlos al LLM.

### 2.4. Reducción de Output Tokens vía Skill `caveman`
- **Mecanismo:** Inyecta instrucciones en el contexto de entrada para forzar respuestas directas, concisas y sin florituras verbales.
- **Balance E/S:** Incrementa ligeramente los tokens de entrada (por la especificación de la skill), pero reduce drásticamente los tokens de salida (los más costosos).
- **Niveles de Concisión:** `light`, `full` (balance recomendado) y `ultra`.

---

## 3. Buenas Prácticas y Trade-offs

### Do's (Prácticas Recomendadas)
- **Establecer `CLAUDE.md` Conciso:** Mantener reglas de proyecto globales e instrucciones macro dentro de `CLAUDE.md` sin sobrecargarlo; delegar tareas complejas a subagentes o skills especializadas.
- **Selección Estratégica de Modelos:** Emplear la combinación `opusplan` (Opus para planificación y diseño técnico) y Sonnet para la ejecución/codificación.
- **Plugins Oficiales y Auditados:** Instalar exclusivamente plugins y skills desde repositorios verificados u oficiales (p. ej., `mattpocock` o `julius` para `caveman`).
- **Verificación Incremental:** Avanzar en pasos pequeños y definidos, solicitando al modelo planes preliminares antes de permitir la edición masiva de código.

### Don'ts (Prácticas a Evitar)
- **Evitar Scraping Directo de Web:** No enviar URLs completas de sitios web con HTML/CSS/JS denso; preprocesar el contenido a formato Markdown limpio antes de pasarlo al modelo.
- **Evitar Sesiones "Ómnibus":** No acumular tareas dispares en un mismo hilo de chat sin aplicar `/clear` o `/compact`.
- **No abusar del pensamiento extendido (Reasoning):** Limitar el uso de niveles de esfuerzo alto o razonamiento profundo a tareas críticas de arquitectura, ya que incrementa exponencialmente el consumo.

---

## 4. Cheat Sheet / Referencia Rápida

### Comandos de Claude Code CLI

```bash
# Inspección y Control de Contexto
/context                      # Muestra el estado actual del contexto y distribución de tokens
/cost                         # Muestra el costo actual de la sesión (solo planes API/Enterprise)
/clear                        # Purga por completo el historial de la sesión actual
/compact                      # Compacta el contexto actual manteniendo los puntos clave

# Gestión de Sesiones
/rename                       # Asigna un nombre automático o personalizado a la sesión
/rename <nombre-sesion>       # Renombra manualmente la sesión actual
claude resume <nombre-sesion> # Reanuda una sesión guardada desde la terminal

# Configuración de Servidores y Modelos
/mcp                          # Abre el menú interactivo para habilitar/deshabilitar servidores MCP
/model                        # Permite alternar o configurar el modelo activo
opusplan                      # Configuración: Opus para plan + Sonnet para ejecución
```

### Instalación Global de la Skill `caveman`

```bash
# Ejecución vía npx (requiere Node.js)
npx skills.sh add julius/caveman # o mattpocock/caveman

# Pasos del asistente interactivo:
# 1. Seleccionar entorno: Claude Code (usar Barra Espaciadora)
# 2. Alcance (Scope): Global (Recomendado para caveman) o Project
# 3. Método de enlace: Symlink (Recomendado)
```

---

## 5. Pros y Contras

| Estrategia / Técnica | Ventajas | Desventajas / Trade-offs |
| :--- | :--- | :--- |
| **Purgado con `/clear`** | Elimina al 100% el arrastre de tokens innecesarios; optimiza la velocidad. | Se pierde la memoria inmediata de la conversación previa. |
| **Uso de `/compact`** | Retiene la continuidad del hilo de trabajo sin reiniciar todo el contexto. | La selección de información retenida la decide el modelo; se pueden perder detalles sutiles. |
| **Skill `caveman`** | Reduce notablemente el costo de tokens de salida; respuestas más ágiles y leíbles. | Aumenta ligeramente el consumo de tokens de entrada; puede resultar demasiado telegráfico en modo `ultra`. |
| **Modelo Combinado (`opusplan`)** | Maximiza el nivel de razonamiento arquitectónico controlando el costo en ejecución. | Cambiar manualmente o depender del modo plan requiere disciplina operativa. |
| **Sustitución de MCP por CLI** | Drástica reducción en el System Prompt y definiciones globales del contexto. | Requiere que el entorno local tenga configuradas y autenticadas las herramientas CLI de manera nativa. |