---
serie: opencode
orden: 7
titulo: Conecta GitHub y tu base de datos con MCP
resumen: Añades servidores MCP para que el agente consulte las issues de tu repositorio y lea tu base de datos de desarrollo, con permisos de solo lectura.
minutos: 40
nivel: Avanzado
---

## Qué es un MCP

MCP (Model Context Protocol) es una forma estándar de darle herramientas nuevas a un agente. Un servidor MCP de GitHub le permite leer issues y pull requests; uno de bases de datos le permite consultar tablas.

**Cada MCP que activas añade herramientas al contexto**, y eso tiene un coste: más tokens y más ocasiones de que el agente se líe. Activa solo los que vayas a usar en esa tarea.

## Dónde se configuran

En `opencode.json`, bajo la clave `mcp`. Puede ser el de la raíz de tu proyecto o el general, en `~/.config/opencode/`. Después de editarlo, cierra opencode y vuelve a abrirlo.

## Paso 1. GitHub

Necesitas un token de acceso personal de GitHub (**Settings → Developer settings → Personal access tokens**) con permiso de lectura sobre tus repositorios. Dale el mínimo permiso posible.

Añade esto a `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "github": {
      "type": "local",
      "command": ["npx", "-y", "@modelcontextprotocol/server-github"],
      "environment": { "GITHUB_PERSONAL_ACCESS_TOKEN": "{env:GITHUB_TOKEN}" }
    }
  }
}
```

Fíjate en `{env:GITHUB_TOKEN}`: el token no se escribe en el archivo, se lee de una variable de entorno. Así puedes subir `opencode.json` al repositorio sin regalar tu token. Defínela antes de arrancar:

```bash
export GITHUB_TOKEN="pega-aquí-tu-token"
opencode
```

Pruébalo:

```text
Usando github, lista las 5 últimas issues abiertas de tu-usuario/tu-repositorio.
```

> Hay varios servidores MCP de GitHub y cambian con frecuencia. Si este no arranca, consulta en la documentación de GitHub cuál recomiendan ahora; la forma de configurarlo en opencode es la misma.

El servidor de GitHub trae muchas herramientas. Cuando termines, desactívalo para que no ocupe contexto en las demás sesiones:

```json
"github": { "type": "local", "command": ["..."], "enabled": false }
```

## Paso 2. Tu base de datos

El ejemplo es para MySQL o MariaDB. Hay servidores MCP para casi todas las bases de datos; cambia el nombre del paquete por el que uses.

> **Usa siempre una cuenta de solo lectura y una base de datos de desarrollo.** Nunca la de producción ni una cuenta que pueda escribir. Si el agente se equivoca, que no pueda romper nada.

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "mi-bd": {
      "type": "local",
      "command": ["npx", "-y", "@benborla/mcp-server-mysql"],
      "environment": {
        "MYSQL_HOST": "127.0.0.1",
        "MYSQL_PORT": "3306",
        "MYSQL_USER": "solo_lectura",
        "MYSQL_PASSWORD": "{env:MI_BD_PASSWORD}",
        "MYSQL_DATABASE": "mi_base_de_datos"
      }
    }
  }
}
```

Igual que con GitHub, la contraseña va en una variable de entorno:

```bash
export MI_BD_PASSWORD="la-contraseña-de-solo-lectura"
```

Pruébalo con una petición prudente:

```text
Usando mi-bd, dime cuántas tablas hay y describe una de ellas. Solo SELECT, no modifiques nada.
```

## Paso 3. Limita quién lo usa

Puedes desactivar las herramientas de un MCP para todo el mundo y activarlas solo para un agente concreto. En `opencode.json`:

```json
{
  "tools": { "mi-bd_*": false },
  "agent": {
    "consultas": { "tools": { "mi-bd_*": true } }
  }
}
```

Así, la base de datos solo está al alcance cuando trabajas con el agente `consultas`.
