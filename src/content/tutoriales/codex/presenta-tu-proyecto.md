---
serie: codex
orden: 6
titulo: Preséntale tu proyecto con AGENTS.md y siete preguntas
resumen: Generas el archivo AGENTS.md, le añades tus normas para que el agente las siga siempre y lo pones a prueba con preguntas de menos a más difíciles.
minutos: 35
nivel: Intermedio
---

## Paso 1. Genera AGENTS.md

Arranca Codex en la raíz del proyecto y escribe:

```text
/init
```

El agente recorre el proyecto y escribe un archivo `AGENTS.md` con lo que ha entendido: el lenguaje y las librerías que usas, cómo están organizadas las carpetas, cómo se arranca y cómo se prueba. A partir de ahí lo lee al empezar cada conversación, así que no tienes que explicarle tu proyecto cada vez.

Ábrelo y léelo. Si algo está mal o falta, corrígelo a mano: es tu archivo. Si el proyecto está en git, súbelo al repositorio para que lo aproveche todo el equipo.

## Paso 2. Añade tus normas

`AGENTS.md` no es solo una descripción. Es el sitio para las reglas que le explicarías a alguien que llega nuevo al equipo. Añade una sección al final, por ejemplo para un proyecto de scripts de Python de oficina:

```markdown
## Normas

- Código sencillo, con comentarios en español.
- Los datos se leen con openpyxl y el Excel original no se modifica nunca.
- Cada cambio se prueba con datos/ejemplo.xlsx antes de darlo por bueno.
- Nunca se usan datos reales de personas en las pruebas.
```

Pruébalo en una conversación nueva:

```text
Añade al script de informes una columna con la fecha de hoy, siguiendo las normas de AGENTS.md.
```

## Cómo lee Codex estos archivos

Codex no lee un único `AGENTS.md`, sino varios, y los junta:

1. **El tuyo personal**, en `~/.codex/AGENTS.md`. Para costumbres que quieres en todos tus proyectos, como *responde siempre en español*.
2. **El de la raíz del proyecto.**
3. **Los de las subcarpetas**, desde la raíz hasta la carpeta donde arrancas Codex. Si una parte del proyecto tiene reglas propias, ponle su `AGENTS.md` dentro.

Los lee de lo general a lo concreto, así que el de la carpeta más cercana tiene la última palabra. Si en una carpeta quieres sustituir las instrucciones en lugar de añadirlas, el archivo se llama `AGENTS.override.md`.

Mantenlos cortos: Codex solo lee hasta 32 KB en total.

## Paso 3. Ponlo a prueba

Las preguntas siguientes van de menos a más contexto. Sirven para comprobar que el agente entiende tu proyecto y llega a cualquier archivo, y ninguna cambia nada. Haz cada una en una conversación nueva (`/new` entre una y otra) para ver de verdad lo que es capaz de encontrar por su cuenta.

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

Una revisión sin riesgo, ideal para hacerla con la caja de arena en `read-only`. Da pie a algo importante: **revisa lo que te dice antes de fiarte**.

### 5. Los datos

```text
Explica qué datos usa este proyecto, de dónde los lee y qué forma tienen. No ejecutes nada.
```

Entiende la estructura de los datos solo leyendo el código.

### 6. Diagnóstico de un error

```text
Al ejecutar el programa me da este error: (pega aquí el error o una captura). Dime por dónde empezarías a buscar, qué comando ejecutarías con ! y qué archivos mirarías. No cambies código todavía.
```

Primero diagnóstico, después cambios. Si ejecutas algo con `!` que necesite más permisos, Codex te lo preguntará.

### 7. Un cambio, solo planificado

```text
Quiero añadir una columna «fecha» al informe que genera el proyecto. Propón qué archivos habría que tocar y en qué orden. No escribas código hasta que te lo diga.
```

Lo terminarás en el tutorial «Del plan al cambio».

## Consejos

- Usa esfuerzo `low` para las preguntas 1 y 2 y `high` para la 4 y la 7 (con `/model`). Notarás la diferencia en el razonamiento.
- Si se inventa un archivo, díselo: `Ese archivo no existe, vuelve a mirar @src/`. Suele corregirse a la primera.
