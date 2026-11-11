---
serie: opencode
orden: 6
titulo: Enséñale tus normas con una skill
resumen: Escribes una skill, un archivo con instrucciones que el agente carga cuando la tarea lo pide, y compruebas que la usa.
minutos: 30
nivel: Intermedio
---

## Qué es una skill

Una skill es una carpeta con un archivo `SKILL.md` dentro. Ese archivo explica cómo hacer un tipo de tarea: tus convenciones, los pasos que sigues siempre, lo que no hay que tocar.

La diferencia con `AGENTS.md` es cuándo se lee. `AGENTS.md` se carga en todas las sesiones. Una skill solo se carga cuando la tarea encaja con su descripción. Así puedes tener muchas sin llenar el contexto.

## Dónde se guardan

OpenCode busca skills en estas carpetas:

- `.opencode/skills/<nombre>/SKILL.md`, dentro del proyecto.
- `~/.config/opencode/skills/`, para las que quieras en todos tus proyectos.
- `.claude/skills/` y `.agents/skills/`, las mismas carpetas que usan otros agentes, tanto en el proyecto como en tu carpeta de usuario. Si ya tienes skills hechas para ellos, OpenCode también las aprovecha.

## El formato

```markdown
---
name: Nombre para mostrar
description: Qué hace y cuándo usarla. Sé concreto, porque el agente decide por esta frase.
---

## Qué hago
...

## Cuándo usarme
...
```

Tres reglas para que funcione:

- El nombre de la **carpeta** es el identificador de la skill. Escríbelo en minúsculas y con guiones, sin espacios ni tildes: `scripts-oficina`. El campo `name` es solo el nombre que se muestra.
- Sin `description`, el agente no sabe que la skill existe y nunca la usará por su cuenta.
- El archivo se llama `SKILL.md`, en mayúsculas.

## Paso 1. Instala una que ya exista

La forma más rápida de ver cómo funciona es copiar una carpeta de skill que alguien ya haya escrito dentro de `.opencode/skills/` de tu proyecto. Arranca OpenCode y escribe `/skills`: deberías verla en la lista. Después pídele algo que encaje con su descripción.

## Paso 2. Escribe la tuya

Vamos a crear una para un proyecto de scripts de Python de oficina. Crea el archivo `.opencode/skills/scripts-oficina/SKILL.md`:

```markdown
---
name: Scripts de oficina
description: Normas para crear o modificar los scripts de Python de este proyecto que leen Excel y generan documentos
---

## Qué hago
- Escribo código sencillo, con comentarios en español.
- Antes de cambiar un script, guardo una copia en versiones/.
- Leo los datos con openpyxl y nunca modifico el Excel original.
- Pruebo cada cambio con datos/ejemplo.xlsx antes de darlo por bueno.

## Cuándo usarme
Cuando haya que crear, cambiar o arreglar un script de la carpeta scripts/.
```

Adáptala a tu proyecto. Si trabajas con otro lenguaje o framework, escribe las convenciones que le explicarías a alguien que llega nuevo al equipo.

## Paso 3. Pruébala

Abre una sesión nueva y pide algo que encaje:

```text
Añade al script de informes una columna con la fecha de hoy, siguiendo scripts-oficina.
```

Si no la usa, cárgala tú escribiendo `@` y su identificador, igual que con un archivo:

```text
@scripts-oficina Añade al script de informes una columna con la fecha de hoy.
```

Si tienes que hacerlo a menudo, la descripción es demasiado vaga: hazla más concreta.

## Permisos

Si confías en todas las skills de tu proyecto, puedes darle permiso general para usarlas en `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "permissions": [
    { "action": "skill", "resource": "*", "effect": "allow" }
  ]
}
```

Cada regla dice qué acción (`skill`), sobre qué (`*`, todas) y qué hacer: `allow` la carga sin preguntar, `ask` te pide permiso y `deny` la esconde. Si una regla contradice a otra, gana la que está más abajo.
