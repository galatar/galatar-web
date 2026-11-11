---
serie: opencode
orden: 2
titulo: "Tus primeros comandos: @, ! y sesiones"
resumen: Aprendes a darle archivos al agente, a ejecutar comandos de la terminal sin salir de OpenCode y a empezar de cero cuando cambias de tarea.
minutos: 20
nivel: Principiante
---

## Antes de empezar

Abre la terminal **dentro de la carpeta de tu proyecto** y arranca OpenCode allí. El agente trabaja con los archivos de la carpeta donde lo abres, así que el sitio importa.

```bash
cd ruta/a/tu-proyecto
opencode
```

En Windows, la ruta será algo como `cd C:\Users\tu-nombre\Documents\mi-proyecto`. Un truco: en el Explorador de archivos, abre la carpeta, escribe `powershell` en la barra de direcciones y pulsa Intro. Se abre PowerShell ya situada allí.

Cualquier proyecto vale para practicar: una carpeta con scripts de Python, una web o un programa de tu trabajo. Si no tienes ninguno a mano, crea una carpeta con un par de archivos de texto.

## @ para darle un archivo

Escribe `@` seguido del nombre de un archivo y OpenCode lo mete en la conversación. Mientras escribes te va sugiriendo nombres.

```text
Resume en tres líneas qué hay en @README.md
```

Puedes poner varios en la misma petición, y también carpetas (`@src/`). Es la forma más directa de decirle *mira esto*.

Si solo te interesa un trozo, añade las líneas detrás de una almohadilla:

```text
Explica qué hace @src/informe.py#20-45
```

## ! para ejecutar un comando

Si escribes `!` al principio de una petición vacía, entras en el modo terminal. Escribe el comando, pulsa Intro y el resultado queda en la sesión:

```text
!ls -la
```

En Windows, si `ls -la` da error, usa `!dir`, que hace lo mismo: lista los archivos de la carpeta. Si cambias de idea antes de pulsar Intro, `Esc` te saca del modo terminal sin ejecutar nada.

Ahora pregúntale algo sobre lo que acaba de ver, por ejemplo *¿qué archivo es el más grande?* Ya tiene esa lista delante.

## /new para empezar desde cero

Cada sesión acumula lo que has hablado, los archivos que ha leído y los resultados de los comandos. Cuando cambias de tarea, todo eso estorba: el agente se distrae y gastas más tokens.

```text
/new
```

`/new` (o `/clear`) abre una sesión nueva y vacía. La regla es sencilla: **tarea nueva, sesión nueva**.

## /exit para salir

```text
/exit
```

También valen `/quit` y `/q`.

## Ctrl+P para todo lo demás

No hace falta memorizar nada más. Escribe `/` y verás la lista de comandos, que se filtra según escribes. `Ctrl+P` abre la paleta con todas las acciones disponibles.

## Practica

Haz estas cuatro cosas seguidas, en este orden:

1. `!ls -la` (o `!dir` en Windows) y pregúntale qué ve.
2. `Hola, ¿qué contiene @` y el nombre de un archivo de tu proyecto.
3. `/new`, y comprueba que ya no recuerda lo anterior.
4. `/exit`.
