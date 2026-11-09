# Worktrees en paralelo con Claude Code

> **Resumen Ejecutivo:** Cuando varias funcionalidades tocan los mismos archivos, lanzar agentes de Claude Code sobre la misma rama produce sobrescrituras y conflictos. El vídeo muestra tres formas de aislar ese trabajo con Git worktrees —`/batch`, comandos manuales y un slash command propio— y desarrolla la tercera sobre un Tetris en JavaScript: una rama y un directorio por requisito, commits separados, fusión en una rama destino y limpieza posterior.

---

## 📋 Tabla de Contenidos
- [1. Conceptos Fundamentales](#1-conceptos-fundamentales)
- [2. Principios, Implementación o Metodología](#2-principios-implementación-o-metodología)
- [3. Buenas Prácticas y Trade-offs](#3-buenas-prácticas-y-trade-offs)
- [4. Cheat Sheet / Referencia Rápida](#4-cheat-sheet--referencia-rápida)

---

## 1. Conceptos Fundamentales

El problema no es el tamaño del proyecto. El ejemplo es un Tetris mínimo (`03-tetris`, arrancable con doble clic en `index.html`), pero el patrón aplica igual a un codebase grande: varias features que deben modificar el mismo archivo —aquí `game.js`— no pueden ejecutarse a la vez sobre el mismo working tree.

Si se abren varias terminales en la misma rama, cada agente escribe, detecta errores ajenos y pisa el trabajo del anterior. El resultado es un conflicto continuo, no un avance paralelo.

**Git worktree** resuelve el aislamiento. Cada worktree es una copia completa e independiente del código base, asociada a su propia rama. Las copias parten del mismo commit y a partir de ahí divergen sin verse. Cuando las tres features están listas, se integran en una rama destino (`main`, `main-4` o la que corresponda) y los conflictos de esa unión se resuelven una sola vez.

Esa unión es el punto difícil, igual que si cada worktree fuera un programador distinto: el estilo es parecido, pero los pushes chocan. Claude Code puede hacer el merge y resolver los conflictos para dejar las funcionalidades conviviendo en la rama principal.

Hay tres maneras de llegar al mismo sitio:

| Vía | Qué hace | Control durante la ejecución |
| :--- | :--- | :--- |
| `/batch` | Orquesta cambios masivos en paralelo o en secuencia. Crea los worktrees dentro de `.claude`. | Bajo. El proceso queda opaco hasta que termina. |
| `git worktree add` a mano | El desarrollador crea ramas, worktrees y sesiones. | Total. También es el más tedioso. |
| Slash command `/worktree` | Crea la rama y el worktree, ejecuta el requisito ahí y reporta al terminar. | Intermedio: semiautomático, con ramas visibles y depurables. |

`/batch` y el flujo manual son las vías oficiales que el ponente contrasta. El comando personalizado es la vía que desarrolla en clase y la que prefiere: el control de ver y depurar cada rama, sin teclear toda la secuencia de Git.

El worktree del comando propio vive en `.trees/<nombre>`, no dentro de `.claude`. `.trees` (como `.claude`) es un directorio oculto; en el editor se muestra con el atajo de archivos ocultos.

## 2. Principios, Implementación o Metodología

### Preparar una base limpia

El ejercicio parte del Tetris de la sección anterior. Si no está en local, vale el material adjunto, un fork o un clone. No hace falta arrastrar cambios previos.

La base de trabajo es `main` **sin** pausa, tabla de records ni skins. Se comprueba abriendo `03-tetris/index.html`: esas tres piezas no deben existir. Si la rama se perdió, se vuelve a descargar el fuente o se rehace el requisito.

```bash
git checkout main
git checkout -b main-4
```

`main-4` es la rama donde se repetirá el flujo de forma más automática y donde, al final, deben convivir las tres features. Tras cambiar de rama, `/clear` descarga el contexto anterior. El ponente lo trata como hábito: cuando el contexto previo ya no aporta, se limpia.

Los comandos de ejemplo que ya no sirven para la lección (el del clima y la tarea recurrente con `loop`) se ignoran. Si falta el Markdown de Claude en el repo, `/init` lo regenera; no es requisito para este flujo.

### Crear el slash command

Un slash command es una instrucción fija que entra en contexto al invocarla. En esta versión de Claude Code `/worktree` no existe. Si en otra versión el nombre ya estuviera ocupado, se usa otro (`/worktree2`, `/custom-worktree`): el nombre es irrelevante.

El encargo que se le da a Claude, en sustancia:

- El comando se llama `/worktree`.
- Crea el worktree con `git worktree add .trees/[nombre]`.
- El nombre sale del requisito (Claude lo decide).
- Al invocarlo, recibe las instrucciones y las ejecuta dentro de ese worktree, aisladas del código principal.

Claude materializa eso como un Markdown de comando. Lo descrito en clase incluye:

- Crear un worktree aislado y ejecutar ahí la tarea.
- Determinar el nombre extrayendo 2–4 palabras del requisito, en `kebab-case` (el formato se puede cambiar editando el Markdown).
- Trabajar aislado mediante el agent tool (`subagent_type`).
- Informar al usuario del worktree creado.
- Recibir el requisito por `$ARGUMENTS`.

Ámbito del archivo:

- **Usuario (sistema operativo):** tiene sentido si el comando se va a reutilizar en otros repos para features simultáneas que tocan los mismos archivos. Es la opción elegida en clase. La ruta cae en el directorio global de Claude (en la sesión se ve como el home del usuario).
- **Proyecto:** el Markdown queda en `commands/` del repo (`worktree.md`) y aparece en Source Control. También es válido; se edita como cualquier otro archivo.

El comando no aparece en la sesión actual. Hay que salir (`exit` o `Ctrl+C`) y volver a lanzar `claude`. La descripción que muestra el autocompletado sale de las primeras líneas del Markdown: esas líneas son el blueprint para otros comandos.

El comando **no hace commit**. Cada rama queda con cambios sin consolidar hasta que se pide el commit.

### Disparar tres features a la vez

Los requisitos salen de la tabla o del Markdown de requirements. Se copia el bloque entero: eso es `$ARGUMENTS`. Da igual si las instrucciones del comando quedan antes o después del bloque; Claude resuelve el requisito igual.

Tres invocaciones, cada una en su sesión de Claude Code:

1. Pausa → worktree/rama tipo `pause-menu` (overlay de pausa, cambio de nivel, restart).
2. Records locales → `local-records` (leaderboard; en la prueba se introduce un nombre y se reinicia).
3. Skins → `visual-skins`.

Mientras una sesión trabaja y pide permiso para editar (`index.html` y el resto), se abre otra terminal y se lanza la siguiente. En Warp: `Cmd+T` / `Ctrl+T` para pestaña nueva, `Cmd+D` / `Ctrl+D` para dividir y ver dos a la vez. Los permisos se conceden sobre los archivos **de esa rama**, no sobre el árbol principal.

Comprobar el resultado no es leer el diff a ciegas. En el repo (`ClaudeCode/03-tetris`), mostrar ocultos (`Cmd+Shift+.`), entrar en `.trees/<nombre>` y abrir su `index.html`. `git branch` confirma que la rama existe. Sin un diseño explícito en el requisito, el resultado se parece al esperado, no lo replica.

### Cuando una feature falla dentro de su worktree

En clase los skins compilan y la sesión llega a “el trabajo ya está completo en el worktree `visual-skins`”, pero las fichas salen invisibles. El arreglo es el de siempre: describir el fallo, pegar captura (`Ctrl+V`) y dar contexto. Claude localiza el bug en ese worktree; tras recargar, los skins responden (en la demo, estilo neon). Si se quiere un aspecto concreto, se sigue iterando dentro de esa sesión.

Un extra útil, no implementado en el Markdown de clase: pedir que el comando haga `/rename` de la sesión con el nombre de la tarea, para no perder de vista qué agente es cuál. También se menciona un hook que reproduce un sonido al terminar una tarea; en el vídeo no se configura.

### Consolidar, fusionar y borrar

Contexto todavía abierto: `/rename` para etiquetar la sesión (`menú de pausa`, `leaderboard`, `fix-skin-rendering`) y pedir el commit de los cambios de esa rama.

Sesión cerrada por accidente: una terminal nueva cae en la raíz del repo, no en el worktree. Hay que situarse en el directorio concreto —clic derecho y terminal integrada sobre la carpeta, o `cd` arrastrando `.trees/<nombre>`— y lanzar `claude` ahí. El prompt es local: crear el commit con los cambios de esta rama o de este worktree. Claude pedirá permiso para los comandos de Git.

Con los tres commits hechos, desde `main-4` y tras `/clear`:

```text
Necesito que unas todos estos worktrees
manteniendo las funcionalidades y los unas a la rama main-4.
```

Se pegan las rutas o nombres que devuelve `git worktree list` (`local-records`, pausa, `visual-skins`). Se autorizan los comandos de Git, se deja que resuelva conflictos y se verifica el `index.html` de la **raíz**, no el de un `.trees`: scores, pausa con `P`, cambio de nivel y skins.

La fusión también puede hacerse de uno en uno. El valor del patrón no es usarlo siempre, sino cuando una tarea es larga: se deja en background en su worktree y se arranca otra feature en paralelo.

Limpieza, porque `git worktree list` y `git branch` siguen mostrando lo ya fusionado. Se le pide a Claude que borre ramas y worktrees, o a mano:

```bash
git worktree remove .trees/<nombre>   # una vez por worktree
git branch -d <rama>                  # una vez por rama
git worktree list                     # solo debe quedar el árbol actual
git branch                            # sin las ramas de feature
```

`.trees` queda vacío. El árbol de `main` (o de la rama en la que se está) permanece.

## 3. Buenas Prácticas y Trade-offs

| Aspectos Positivos / Recomendados | Riesgos / Errores Comunes |
| :--- | :--- |
| Un worktree por requisito cuando varias features tocan los mismos archivos. | Varios agentes en la misma rama: se pisan y cada uno interpreta como error el diff del otro. |
| Partir de una base verificada (`main` limpio, `index.html` sin las features nuevas). | Fusionar worktrees creados encima de cambios distintos y asumir que la base era la misma. |
| Comando reutilizable a nivel de usuario si el flujo se va a repetir en otros repos. | Esperar ver `/worktree` sin reiniciar la sesión de Claude Code. |
| Probar el `index.html` de cada `.trees/<nombre>`, no solo el de la raíz. | Dar por buena la frase de “trabajo completo” sin ejecutar el juego. |
| Pasar el requisito completo como `$ARGUMENTS`. El diseño visual, si importa, va dentro de ese texto. | Esperar el mismo UI en cada ejecución si el requisito no fija el diseño. |
| `/rename` de cada sesión con el nombre de la feature. | Perder la sesión de skins (u otra), abrir `claude` en la raíz y commitear en el árbol equivocado. |
| Commit explícito por rama antes de fusionar. El comando no commitea solo. | Unificar worktrees con cambios sin commit y mezclar estado sucio. |
| Pedir la fusión manteniendo funcionalidades y nombrando la rama destino. | Resolver el merge a ojo, sin volver a probar pausa, records y skins en el `index.html` raíz. |
| Borrar worktrees y ramas al terminar (`git worktree remove`, `git branch -d`). | Dejar `.trees` y ramas vivas; el siguiente ciclo reutiliza nombres o ensucia `git worktree list`. |
| Reservar el paralelo para trabajo largo. El coste en tokens sube con cada agente simultáneo. | Lanzar tres agentes por defecto en tareas cortas que caben en una sola sesión. |
| `/clear` al cambiar de fase (rama nueva, justo antes del merge). | Arrastrar el contexto de creación del comando o de otra feature a la fusión. |
| Si el nombre `/worktree` ya existe, usar otro. El Markdown generado se puede editar (p. ej. el `kebab-case`). | Tratar el blueprint generado como intocable o como si hiciera commit y limpieza. |

> 💡 **Punto Clave:** De las tres vías, el ponente se queda con el slash command. `/batch` evita teclear Git pero deja el proceso a ciegas; el `git worktree add` manual da control total a cambio de repetir comandos; `/worktree` crea la rama, aísla el trabajo y deja cada sesión inspeccionable. El paralelo ahorra tiempo de espera y multiplica el consumo de tokens. No sustituye la verificación ni el commit: la unión en `main-4` y el borrado de worktrees siguen siendo un paso aparte.

## 4. Cheat Sheet / Referencia Rápida

**Reglas de oro**

- Misma rama + mismos archivos + varios agentes = sobrescritura.
- Un requisito → un worktree en `.trees/<kebab-case>` → una rama → un commit.
- Probar dentro del worktree. Fusionar en la rama destino. Probar otra vez en la raíz. Borrar worktrees y ramas.
- El comando no commitea, no fusiona y no limpia.
- Varios agentes a la vez cuestan muchos más tokens. Usarlo cuando la tarea es larga.

**Secuencia**

```bash
git checkout main
git checkout -b main-4
# /clear  →  reiniciar claude si el slash command es nuevo
```

```text
/worktree <requisito completo>
```

```bash
git worktree add .trees/<nombre>     # forma que debe encapsular el comando
git branch
git worktree list
```

```text
Crea un commit con los cambios realizados en este worktree.
```

```text
Necesito que unas todos estos worktrees manteniendo las funcionalidades
y los unas a la rama main-4.
<pegar salida relevante de git worktree list>
```

```bash
git worktree remove .trees/<nombre>
git branch -d <rama>
git worktree list
git branch
```

**Operativa de Claude Code**

| Acción | Cómo |
| :--- | :--- |
| Limpiar contexto | `/clear` |
| Nueva sesión tras crear el comando | `exit` o `Ctrl+C`, luego `claude` |
| Etiquetar la sesión | `/rename` |
| Argumentos del comando | `$ARGUMENTS` |
| Ocultos (`.trees`, `.claude`) | `Cmd+Shift+.` |
| Otra sesión en paralelo | pestaña nueva o split (`Cmd+T` / `Cmd+D`, o `Ctrl` en Windows) |
| Retomar un worktree cerrado | terminal con cwd en `.trees/<nombre>`, luego `claude` |
| Bug visual | texto + captura (`Ctrl+V`) en la sesión de ese worktree |
| Worktrees de `/batch` | bajo `.claude`, no bajo `.trees` |

**Checklist de cierre**

- [ ] Cada feature corre en su propio `index.html` bajo `.trees`.
- [ ] Hay un commit por rama.
- [ ] `main-4` tiene pausa, records y skins a la vez.
- [ ] `git worktree list` solo muestra el árbol en uso.
- [ ] `git branch` ya no lista las ramas de feature.
- [ ] `.trees` está vacío.
