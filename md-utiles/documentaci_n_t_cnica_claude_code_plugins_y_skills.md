# Claude Code: Gestión, Arquitectura y Seguridad de Plugins y Skills

> **Resumen Ejecutivo:** Guía de referencia técnica sobre el ecosistema de extensiones en Claude Code. Detalla la arquitectura subyacente, protocolos de seguridad, configuración de herramientas clave (TypeScript LSP, Code Simplifier, Security Guidance, Superpowers) y habilitación de entornos de acceso remoto nativo.

---

## 📋 Tabla de Contenidos
- [1. Conceptos Fundamentales](#1-conceptos-fundamentales)
- [2. Principios, Implementación o Metodología](#2-principios-implementación-o-metodología)
- [3. Buenas Prácticas y Trade-offs](#3-buenas-prácticas-y-trade-offs)
- [4. Cheat Sheet / Referencia Rápida](#4-cheat-sheet--referencia-rápida)

---

## 1. Conceptos Fundamentales

Para extender las capacidades de Claude Code, el ecosistema se divide en primitivas de extensibilidad y control de entorno:

*   **Skills:** Habilidades personalizadas definidas a través de archivos Markdown. Actúan como contexto, plantillas o código base inicial (referencias) para modificar el comportamiento del modelo. Una Skill puede componerse de múltiples archivos.
*   **Plugins:** Son *Skills empaquetadas* y preparadas para su distribución e instalación a través del Marketplace de Claude Code. Incorporan configuraciones internas (reglas de ejecución, dependencias y flujos de trabajo predefinidos).
*   **Scopes de Instalación (Ámbitos):** Global, Proyecto (Colaborativo) o Proyecto (Personal/Local - `settings.local.json`).
*   **Contexto de Ejecución Remota:** Capacidad de exponer el proceso terminal de Claude interactivo hacia interfaces externas (web, móvil) manteniendo el estado y contexto local del repositorio.

---

## 2. Principios, Implementación o Metodología

### 2.1. Gestión Base mediante el CLI
La administración de plugins se realiza mediante el comando interactivo `/plugins`. La métrica de relevancia en el marketplace oficial está basada en **volumen de instalaciones**, no en estrellas de repositorios externos. Todo cambio de dependencias requiere la ejecución de `/reload-plugins`.

### 2.2. Validaciones de Código: TypeScript LSP
El plugin oficial `typescript-lsp` dota a Claude Code de validación estática e introspección de código TypeScript/JavaScript (LSP). Permite a la IA realizar `documentSymbol`, `hover`, y `goToDefinition`.
*   *Requisito:* Requiere instalación global del servidor: `sudo npm install -g typescript-language-server`.

### 2.3. Refactorización: Code Simplifier
Agente orientado a la refactorización arquitectónica. Elimina código inactivo (dead code), reduce redundancias y disminuye la complejidad ciclomática. Se invoca directamente en el prompt referenciando el archivo a refactorizar.

### 2.4. Auditoría de Seguridad: Security Guidance
Plugin crítico para mitigar vulnerabilidades generadas por el propio LLM (ej. código heredado de otros datasets con fallos de seguridad).
*   **Vulnerabilidades detectadas típicamente:** Inyecciones, XSS, validaciones débiles de auth (ej. permitir bypass en reset de password), uso peligroso de `window.location.origin` (falla en iframes), y el uso de "non-null assertions" (`!`) en variables de entorno (`process.env.API_KEY!`) sin validación explícita previa en runtime.
*   **Flujo de trabajo recomendado (Spec-Driven Security):**
    Una vez el plugin audita y encuentra errores, no aplicar parches directos. Es mejor pedir a Claude que documente las fallas en un archivo de especificaciones:
    ```text
    "Necesito que revises la autenticación con Security Guidance. 
    Con los resultados, crea un archivo de especificación para implementar 
    estas medidas siguiendo los lineamientos de mi skill /spec."
    ```

### 2.5. Metodologías Guiadas: Superpowers
Plugin integral enfocado en **Test-Driven Development (TDD)** y **Spec-Driven Design**. Ideal para fases de planificación y *brainstorming*.
*   **Capacidades:** Creación de árboles de directorios, Code Review algorítmico, ejecución estricta de planes (fase roja -> verde -> refactor), e ideación.
*   **Interacción:** Trabaja a través de preguntas interactivas y contextuales para eliminar ambigüedades (ej. modelos de monetización, nivel de fricción UX). Exige respuestas directas y concretas del desarrollador.

### 2.6. Acceso Remoto Nativo (Remote Control)
Claude Code integra capacidades nativas para compartir la sesión de terminal a otros dispositivos (ej. móvil) sin depender de plugins de terceros (como Telegram) o terminales de pago (como Warp).
*   **Implementación Manual (Por Sesión):**
    Ejecutar `/remote-control` en la terminal. Genera una sesión accesible desde `claude.ai/code`.
*   **Implementación Global (Persistente):**
    Para habilitarlo por defecto en toda nueva sesión:
    1. Ejecutar `/config`.
    2. Buscar `Enable Remote Control for all sessions`.
    3. Cambiar a `true`.
    4. Reiniciar la instancia de Claude Code.

---

## 3. Buenas Prácticas y Trade-offs

| Aspectos Positivos / Recomendados | Riesgos / Errores Comunes |
| :--- | :--- |
| **Auditoría Sistemática:** Someter módulos críticos (Autenticación, Pagos) al plugin `Security Guidance` iterativamente. | **Conformismo Funcional:** Aceptar el primer código generado por la IA que "funcione", ignorando validaciones de entorno o vulnerabilidades silenciosas. |
| **Respuestas Concretas (Prompting):** Al usar herramientas de *brainstorming* como `Superpowers`, dar respuestas directas a las preguntas del agente para evitar código "tibio" o genérico. | **Pérdida de Control Arquitectónico:** Delegar totalmente el flujo TDD a `Superpowers` si el equipo prefiere un control más granular mediante `skills` personalizadas (ej. `/spec`). |
| **Control de Sesiones Remotas:** Usar el acceso nativo `/remote-control` y cambiar el nombre de las sesiones en la interfaz web para identificarlas correctamente (ej. "Proyecto ArcadeVault"). | **Exposición Innecesaria:** Mantener la configuración global de acceso remoto en `true` (`/config`) en entornos compartidos o si no se requiere movilidad constante. |

> 💡 **Punto Clave:** No parchees vulnerabilidades al vuelo descubiertas por *Security Guidance*. Genera primero un archivo de especificación (`/spec`) con los hallazgos y luego implementa la solución; esto mantiene la integridad de la arquitectura y la documentación del proyecto.

---

## 4. Cheat Sheet / Referencia Rápida

**Comandos CLI Nativos y Configuraciones:**
*   `/plugins` o `/plugin` : Abre la interfaz interactiva del Marketplace.
*   `/reload-plugins` : Recarga la caché y aplica dependencias de plugins recién instalados.
*   `/config` : Abre los ajustes globales. Útil para activar *Remote Control* de forma persistente.
*   `/remote-control` : Habilita el acceso remoto de la sesión actual (URL: `claude.ai/code`).

**Checklist de Seguridad (Tras generación de código LLM):**
- [ ] Variables de entorno ( `.env`) validadas en runtime (evitar `process.env.VAR!`).
- [ ] RegEx de validación de contraseñas consistentes entre Front-end (Registro y Reset) y Back-end.
- [ ] Formularios de Auth contienen atributos de autocompletado para gestores de contraseñas.
- [ ] Redirecciones o fallos emiten mensajes de error explícitos (no silenciosos).

**Flujo Superpowers (TDD/Brainstorming):**
1. Instalar y cargar (`/reload-plugins`).
2. Invocar: *"Usa superpowers para hacer un brainstorming sobre [TEMA]"*.
3. Responder asertivamente a las variables de contexto solicitadas por el agente.