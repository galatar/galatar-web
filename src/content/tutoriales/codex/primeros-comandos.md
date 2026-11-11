---
serie: codex
orden: 2
titulo: "Tus primeros comandos: @, ! y sesiones"
resumen: Aprendes a darle archivos e imágenes al agente, a ejecutar comandos de la terminal sin salir de Codex y a empezar de cero cuando cambias de tarea.
minutos: 20
nivel: Principiante
---

## Antes de empezar

Abre la terminal **dentro de la carpeta de tu proyecto** y arranca Codex allí. El agente trabaja con los archivos de la carpeta donde lo abres, así que el sitio importa.

```bash
cd ruta/a/tu-proyecto
codex
```

La primera vez que lo abres en una carpeta te pregunta si confías en ella. Di que sí solo en proyectos tuyos o de tu equipo.

Cualquier proyecto vale para practicar: una carpeta con scripts de Python, una web o un programa de tu trabajo. Si no tienes ninguno a mano, crea una carpeta con un par de archivos de texto.

## @ para darle un archivo

Escribe `@` y Codex busca entre los archivos del proyecto mientras escribes. Elige uno y su ruta pasa a la petición.

```text
Resume en tres líneas qué hay en @README.md
```

Puedes poner varios en la misma petición. Es la forma más directa de decirle *mira esto*.

## Pégale una imagen

Codex entiende imágenes. Si tienes una captura de un error o de una pantalla, pégala en la petición y la usa como contexto. También puedes pasarla al arrancar:

```bash
codex -i captura-del-error.png "¿Qué significa este error?"
```

## ! para ejecutar un comando

Si empiezas con `!`, lo que escribes se ejecuta en la terminal y el resultado pasa a la conversación:

```text
!ls -la
```

Ahora pregúntale algo sobre lo que acaba de ver, por ejemplo *¿qué archivo es el más grande?* Ya tiene esa lista delante.

> En Codex, los comandos con `!` respetan los mismos permisos que el agente. Si un comando necesita algo que no le has dado, te pedirá aprobación. Lo verás con calma en el tutorial de permisos.

## /new para empezar desde cero

Cada conversación acumula lo que has hablado, los archivos que ha leído y los resultados de los comandos. Cuando cambias de tarea, todo eso estorba: el agente se distrae y gastas más uso de tu plan.

```text
/new
```

`/new` abre una conversación nueva y vacía sin salir de Codex. La regla es sencilla: **tarea nueva, conversación nueva**.

## /exit para salir

```text
/exit
```

También vale `/quit`.

## Practica

Haz estas cuatro cosas seguidas, en este orden:

1. `!ls -la` y pregúntale qué ve.
2. `Hola, ¿qué contiene @` y el nombre de un archivo de tu proyecto.
3. `/new`, y comprueba que ya no recuerda lo anterior.
4. `/exit`.
