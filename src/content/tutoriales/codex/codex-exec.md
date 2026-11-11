---
serie: codex
orden: 9
titulo: Codex sin interfaz con codex exec
resumen: Lanzas Codex con una sola orden desde la terminal, sin abrir la interfaz, y lo usas dentro de tus propios scripts.
minutos: 15
nivel: Intermedio
---

## Para qué sirve

Hasta ahora has trabajado conversando. Pero muchas veces quieres algo más sencillo: lanzar una petición, que la haga y que termine. Eso es `codex exec`. Escribe el resultado en la terminal y sale, así que puedes meterlo en un script o encadenarlo con otros comandos.

## Paso 1. La primera orden

Desde la carpeta de tu proyecto:

```bash
codex exec "Resume qué hace este proyecto según README.md. No cambies nada."
```

No se abre la interfaz: verás cómo trabaja y al final su respuesta.

## Paso 2. Con permisos claros

Aquí no hay nadie para aprobar nada, así que los permisos tienen que quedar decididos de antemano. Para una consulta, solo lectura:

```bash
codex exec -s read-only "Lista los scripts de la carpeta scripts/ y di en una línea qué hace cada uno."
```

Si quieres que cambie archivos, dale `workspace-write`, y hazlo solo en un proyecto con git y sin cambios pendientes:

```bash
codex exec -s workspace-write "Añade comentarios en español a las funciones de scripts/informe.py que no los tengan."
```

Después, `git diff` para ver qué ha hecho.

## Paso 3. Guarda el resultado

Como escribe en la terminal, puedes mandarlo a un archivo:

```bash
codex exec -s read-only "Haz un inventario de los archivos de configuración del proyecto en Markdown." > inventario.md
```

## Ideas para usarlo

- Un resumen de los cambios de la semana: `codex exec -s read-only "Resume en español los commits de los últimos 7 días."`
- Una revisión rápida antes de subir cambios.
- Tareas repetitivas que hoy haces a mano en varios proyectos: un bucle de la terminal que entra en cada carpeta y lanza la misma orden.

> Empieza siempre con `read-only`. Cuando una orden te dé buenos resultados varias veces seguidas, ya puedes plantearte darle permiso para escribir.
