---
serie: opencode
orden: 8
titulo: Del plan al cambio, con red de seguridad
resumen: Usas el modo plan para que el agente proponga antes de tocar nada, apruebas, dejas que lo haga y deshaces si no te convence.
minutos: 20
nivel: Intermedio
---

## Dos modos de trabajo

OpenCode tiene dos agentes principales y pasas de uno a otro con `Shift+Tab` (o eligiéndolo en `/agents`):

- **plan**: lee, investiga y propone. No cambia los archivos de tu proyecto.
- **build**: hace los cambios.

El flujo profesional es siempre el mismo: primero plan, lo revisas, y después build.

## Paso 1. Pide un plan

Pulsa `Shift+Tab` hasta que veas que estás en modo plan y pide el cambio con todo el contexto que tengas:

```text
Quiero añadir una columna «fecha» al informe que genera el proyecto. Mira @src/ y propón qué archivos hay que tocar, en qué orden y cómo lo probaríamos. No escribas código todavía.
```

Usa una variante alta (`Ctrl+T` hasta `high`): planificar es donde más rinde que el modelo piense.

## Paso 2. Revisa el plan

Léelo con calma y pregunta lo que no entiendas. Algunas preguntas que conviene hacerse:

- ¿Toca solo lo necesario?
- ¿Dice cómo se va a comprobar que funciona?
- ¿Hay algún archivo que no quieres que toque?

Si algo no te convence, díselo y que rehaga el plan. Es mucho más barato corregir aquí que después.

## Paso 3. Que lo haga

Cuando el plan te guste, pulsa `Shift+Tab` para pasar a build y escribe:

```text
Adelante con el plan.
```

Revisa los cambios conforme los hace. Si el proyecto está en git, `!git diff` te enseña exactamente qué ha cambiado.

## Paso 4. Si no te gusta, deshaz

```text
/undo
```

Deshace tu última petición y los cambios que trajo, y te devuelve la petición a la caja de texto. Puedes corregirla y enviarla otra vez, o escribir `/redo` antes de enviar nada para recuperar lo que habías deshecho. Recuerda que los archivos solo vuelven atrás si el proyecto está en git.

## Chuleta de la serie

```text
/models      cambiar de modelo        Ctrl+T      más o menos potencia
/new         sesión limpia            Shift+Tab   plan ⇄ build
/compact     resumir y seguir         /btw        pregunta al margen
@archivo     darle un archivo         !comando    ejecutar en la terminal
@skill       cargar una skill         /undo       deshacer (necesita git)
/exit        salir                    Ctrl+P      todo lo demás
```

Y las cinco costumbres que más ayudan:

1. Una sesión nueva por tarea.
2. `@` para señalar los archivos en vez de describirlos.
3. Variante baja para explorar y alta para razonar.
4. MCP solo cuando la tarea lo pide.
5. Plan antes que cambio, y git siempre debajo.
