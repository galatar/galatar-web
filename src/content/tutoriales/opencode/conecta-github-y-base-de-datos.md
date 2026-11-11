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

En `opencode.json`, bajo `mcp` → `servers`. Puede ser el de la raíz de tu proyecto o el general, en `~/.config/opencode/`. Después de editarlo, escribe `/reload` dentro de OpenCode para que lea los cambios.

Para ver cómo están tus servidores, escribe `/mcps` dentro de OpenCode o `opencode mcp list` en la terminal.

## Las claves no van en el archivo

OpenCode 2 funciona con un servicio en segundo plano, y es ese servicio el que arranca los servidores MCP. Por eso, las claves y contraseñas que necesiten se le dan al servicio, no a la terminal. El comando es el mismo en Windows, Mac y Linux:

```bash
opencode service set env NOMBRE_DE_LA_VARIABLE "el-valor"
```

El valor se queda guardado en la configuración privada de OpenCode, en tu carpeta de usuario y fuera del proyecto. En `opencode.json` solo escribes `{env:NOMBRE_DE_LA_VARIABLE}`, así que puedes subirlo al repositorio sin regalar nada.

## Paso 1. GitHub

Necesitas un token de acceso personal de GitHub (**Settings → Developer settings → Personal access tokens**) con permiso de lectura sobre tus repositorios. Dale el mínimo permiso posible.

Guárdalo en el servicio:

```bash
opencode service set env GITHUB_TOKEN "pega-aquí-tu-token"
```

GitHub ofrece su propio servidor MCP en internet, así que no hay que instalar nada. Añade esto a `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "servers": {
      "github": {
        "type": "remote",
        "url": "https://api.githubcopilot.com/mcp/readonly",
        "oauth": false,
        "headers": { "Authorization": "Bearer {env:GITHUB_TOKEN}" }
      }
    }
  }
}
```

Fíjate en dos detalles. La dirección termina en `/readonly`: GitHub solo le da herramientas de lectura, así que el agente no puede crear ni cerrar nada aunque se equivoque. Y `"oauth": false` le dice a OpenCode que entras con el token y no con una ventana de inicio de sesión.

Pruébalo:

```text
Usando github, lista las 5 últimas issues abiertas de tu-usuario/tu-repositorio.
```

> Los servidores MCP cambian con frecuencia. Si este no responde, consulta en el repositorio `github/github-mcp-server` qué dirección recomiendan ahora; la forma de configurarlo en OpenCode es la misma.

El servidor de GitHub trae muchas herramientas. Cuando termines, desactívalo para que no ocupe contexto en las demás sesiones, añadiendo `"disabled": true`:

```json
"github": { "type": "remote", "url": "...", "disabled": true }
```

## Paso 2. Tu base de datos

El ejemplo es para MySQL o MariaDB. Hay servidores MCP para casi todas las bases de datos; cambia el nombre del paquete por el que uses.

> **Usa siempre una cuenta de solo lectura y una base de datos de desarrollo.** Nunca la de producción ni una cuenta que pueda escribir. Si el agente se equivoca, que no pueda romper nada.

Guarda la contraseña en el servicio, igual que el token de GitHub:

```bash
opencode service set env MIBD_PASSWORD "la-contraseña-de-solo-lectura"
```

Y añade el servidor a `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "servers": {
      "mibd": {
        "type": "local",
        "command": ["npx", "-y", "@benborla29/mcp-server-mysql"],
        "environment": {
          "MYSQL_HOST": "127.0.0.1",
          "MYSQL_PORT": "3306",
          "MYSQL_USER": "solo_lectura",
          "MYSQL_PASS": "{env:MIBD_PASSWORD}",
          "MYSQL_DB": "mi_base_de_datos"
        }
      }
    }
  }
}
```

Este servidor sí se ejecuta en tu ordenador, con `npx`, y para eso necesitas Node.js. Si en Windows instalaste OpenCode con npm, ya lo tienes; si no, instálalo desde [nodejs.org](https://nodejs.org).

Pruébalo con una petición prudente:

```text
Usando mibd, dime cuántas tablas hay y describe una de ellas. Solo SELECT, no modifiques nada.
```

## Paso 3. Limita quién lo usa

Las herramientas de un servidor MCP se llaman `<servidor>_<herramienta>`, así que `mibd_*` las abarca todas. Puedes prohibirlas en general y permitirlas solo para un agente concreto. En `opencode.json`:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "permissions": [
    { "action": "mibd_*", "resource": "*", "effect": "deny" }
  ],
  "agents": {
    "consultas": {
      "description": "Consulta la base de datos de desarrollo, sin modificarla",
      "mode": "primary",
      "permissions": [
        { "action": "mibd_*", "resource": "*", "effect": "allow" }
      ]
    }
  }
}
```

Las reglas del agente se aplican después de las generales, así que ganan ellas. La base de datos solo está al alcance cuando trabajas con el agente `consultas`, que eliges con `Shift+Tab` o con `/agents`.

> Por eso el servidor se llama `mibd`, sin guiones ni espacios: al formar el nombre de las herramientas, OpenCode cambia los caracteres que no admite por guiones bajos, y la regla podría dejar de encajar.
