---
serie: opencode
orden: 5
titulo: Preséntale tu proyecto con AGENTS.md y siete preguntas
resumen: Generas el archivo AGENTS.md para que el agente entienda tu proyecto y lo pones a prueba con preguntas de menos a más difíciles, sin tocar el código.
minutos: 30
nivel: Intermedio
---

## Paso 1. Genera AGENTS.md

`AGENTS.md` es un archivo en la raíz del proyecto donde se explica cómo es: el lenguaje y las librerías que usas, cómo están organizadas las carpetas, cómo se arranca y cómo se prueba. OpenCode lo lee al empezar cada sesión, así que no tienes que explicarle tu proyecto cada vez.

No hace falta que lo escribas tú. Arranca OpenCode en la raíz del proyecto y pídeselo:

```text
Recorre este proyecto y escribe un AGENTS.md en la raíz para que otro agente lo entienda: qué hace, lenguaje y librerías, organización de carpetas, cómo se arranca, cómo se prueba y las convenciones que veas en el código. Sé breve y no inventes nada que no puedas comprobar en los archivos.
```

Ábrelo y léelo. Si algo está mal o falta, corrígelo a mano: es tu archivo. Si el proyecto está en git, súbelo al repositorio para que lo aproveche todo el equipo.

Basta con hacerlo **una vez por proyecto**. Si el proyecto cambia mucho, pídele que lo actualice.

> En OpenCode 1 esto se hacía con el comando `/init`, que en la versión 2 ya no existe. Y si en tu proyecto hay un `CLAUDE.md` de otro agente, OpenCode 2 no lo lee: pídele que pase su contenido a `AGENTS.md`.

## Paso 2. Ponlo a prueba

Las preguntas siguientes van de menos a más contexto. Sirven para comprobar que el agente entiende tu proyecto y llega a cualquier archivo, y ninguna cambia nada. Haz cada una en una sesión nueva (`/new` entre una y otra) para ver de verdad lo que es capaz de encontrar por su cuenta.

Las rutas son de ejemplo: cámbialas por las de tu proyecto.

### 1. Orientación

```text
Resume qué es este proyecto y cómo está organizado. Usa @README.md y los archivos de configuración de la raíz. No cambies nada.
```

Combina documentación y configuración en una sola respuesta.

### 2. El mapa de una carpeta

```text
Lista las subcarpetas de @src/ y dime de qué se encarga cada una. Solo lectura, no propongas cambios.
```

El agente recorre directorios reales y relaciona unos archivos con otros por su nombre y su contenido.

### 3. Un recorrido de punta a punta

```text
Traza qué pasa desde que ejecuto el programa principal hasta que se genera el resultado. Dime qué archivo hace qué y dónde se rompería si falta un dato de entrada.
```

Sigue las llamadas de un archivo a otro. Es la pregunta que mejor muestra para qué sirve encadenar varias `@`.

### 4. Seguridad

```text
Revisa dónde se leen contraseñas, claves o datos personales en este proyecto. ¿Hay alguno escrito directamente en el código? Solo informe, no toques nada.
```

Una revisión sin riesgo. Da pie a algo importante: **revisa lo que te dice antes de fiarte**.

### 5. Los datos

```text
Explica qué datos usa este proyecto, de dónde los lee y qué forma tienen. No ejecutes nada.
```

Entiende la estructura de los datos solo leyendo el código.

### 6. Diagnóstico de un error

```text
Al ejecutar el programa me da este error: (pega aquí el error). Dime por dónde empezarías a buscar, qué comando ejecutarías con ! y qué archivos mirarías. No cambies código todavía.
```

Primero diagnóstico, después cambios. Así entiendes el problema antes de que nadie lo toque.

### 7. Un cambio, solo planificado

```text
Quiero añadir una columna «fecha» al informe que genera el proyecto. Propón qué archivos habría que tocar y en qué orden. No escribas código hasta que te lo diga.
```

Lo terminarás en el último tutorial de la serie, con el modo plan.

## Consejos

- Usa la variante `low` para las preguntas 1 y 2 y `high` para la 4 y la 7 (`Ctrl+T`). Notarás la diferencia en el razonamiento.
- Si se inventa un archivo, díselo: `Ese archivo no existe, vuelve a mirar @src/`. Suele corregirse a la primera.
