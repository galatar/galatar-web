---
serie: opencode
orden: 8
titulo: Del plan al cambio, con red de seguridad
resumen: Usas el modo plan para que el agente proponga antes de tocar nada, apruebas, dejas que lo haga y deshaces si no te convence.
minutos: 20
nivel: Intermedio
---

## Dos modos de trabajo

OpenCode tiene dos agentes principales y pasas de uno a otro con la tecla `Tab`:

- **plan**: lee, investiga y propone. No cambia archivos.
- **build**: hace los cambios.

El flujo profesional es siempre el mismo: primero plan, lo revisas, y después build.

## Paso 1. Pide un plan

Pulsa `Tab` hasta que veas que estás en modo plan y pide el cambio con todo el contexto que tengas:

```text
Quiero añadir una columna «fecha» al informe que genera el proyecto. Mira @src/ y propón qué archivos hay que tocar, en qué orden y cómo lo probaríamos. No escribas código todavía.
```

Usa una variante alta (`ctrl+t` hasta `high`): planificar es donde más rinde que el modelo piense.

## Paso 2. Revisa el plan

Léelo con calma y pregunta lo que no entiendas. Algunas preguntas que conviene hacerse:

- ¿Toca solo lo necesario?
- ¿Dice cómo se va a comprobar que funciona?
- ¿Hay algún archivo que no quieres que toque?

Si algo no te convence, díselo y que rehaga el plan. Es mucho más barato corregir aquí que después.

## Paso 3. Que lo haga

Cuando el plan te guste, pulsa `Tab` para pasar a build y escribe:

```text
Adelante con el plan.
```

Revisa los cambios conforme los hace. Si el proyecto está en git, `!git diff` te enseña exactamente qué ha cambiado.

## Paso 4. Si no te gusta, deshaz

```text
/undo
```

Vuelve todo a como estaba antes del último cambio. `/redo` lo recupera si te arrepientes. Recuerda que necesitan que el proyecto esté en git.

## Chuleta de la serie

```text
/models      cambiar de modelo        ctrl+t     más o menos potencia
/thinking    ver el razonamiento      Tab        plan ⇄ build
/new         sesión limpia            /compact   resumir y seguir
@archivo     darle un archivo         !comando   ejecutar en la terminal
/init        crear AGENTS.md          /undo      deshacer (necesita git)
/exit        salir                    /help      todo lo demás
```

Y las cinco costumbres que más ayudan:

1. Una sesión nueva por tarea.
2. `@` para señalar los archivos en vez de describirlos.
3. Variante baja para explorar y alta para razonar.
4. MCP solo cuando la tarea lo pide.
5. Plan antes que cambio, y git siempre debajo.
