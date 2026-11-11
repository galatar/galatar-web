---
serie: codex
orden: 7
titulo: Conecta GitHub y tu base de datos con MCP
resumen: Añades servidores MCP en config.toml para que el agente consulte las issues de tu repositorio y lea tu base de datos de desarrollo, sin escribir contraseñas en ningún archivo.
minutos: 40
nivel: Avanzado
---

## Qué es un MCP

MCP (Model Context Protocol) es una forma estándar de darle herramientas nuevas a un agente. Un servidor MCP de GitHub le permite leer issues y pull requests; uno de bases de datos le permite consultar tablas.

**Cada MCP que activas añade herramientas al contexto**, y eso tiene un coste: más uso y más ocasiones de que el agente se líe. Activa solo los que vayas a usar en esa tarea.

## Dónde se configuran

En `~/.codex/config.toml` (o en el `.codex/config.toml` de un proyecto de confianza), con una sección `[mcp_servers.<nombre>]` por servidor. Después de editarlo, cierra Codex y vuelve a abrirlo.

Para ver qué servidores tiene cargados:

```text
/mcp
```

## Paso 1. GitHub

Necesitas un token de acceso personal de GitHub (**Settings → Developer settings → Personal access tokens**) con permiso de lectura sobre tus repositorios. Dale el mínimo permiso posible.

Añade esto a `config.toml`:

```toml
[mcp_servers.github]
command = "npx"
args = ["-y", "@modelcontextprotocol/server-github"]
env_vars = ["GITHUB_PERSONAL_ACCESS_TOKEN"]
```

Fíjate en `env_vars`: el token no se escribe en el archivo. Codex le pasa al servidor la variable de entorno que nombras, con el valor que tenga en tu terminal. Defínela antes de arrancar:

```bash
export GITHUB_PERSONAL_ACCESS_TOKEN="pega-aquí-tu-token"
codex
```

Pruébalo:

```text
Usando github, lista las 5 últimas issues abiertas de tu-usuario/tu-repositorio.
```

> Hay varios servidores MCP de GitHub y cambian con frecuencia. Si este no arranca, consulta en la documentación de GitHub cuál recomiendan ahora; la forma de configurarlo en Codex es la misma.

El servidor de GitHub trae muchas herramientas. Cuando termines, desactívalo sin borrarlo para que no ocupe contexto en las demás sesiones:

```toml
[mcp_servers.github]
enabled = false
# ...el resto igual
```

## Paso 2. Tu base de datos

El ejemplo es para MySQL o MariaDB. Hay servidores MCP para casi todas las bases de datos; cambia el nombre del paquete por el que uses.

> **Usa siempre una cuenta de solo lectura y una base de datos de desarrollo.** Nunca la de producción ni una cuenta que pueda escribir. Si el agente se equivoca, que no pueda romper nada.

```toml
[mcp_servers.mi-bd]
command = "npx"
args = ["-y", "@benborla/mcp-server-mysql"]
env_vars = ["MYSQL_PASSWORD"]

[mcp_servers.mi-bd.env]
MYSQL_HOST = "127.0.0.1"
MYSQL_PORT = "3306"
MYSQL_USER = "solo_lectura"
MYSQL_DATABASE = "mi_base_de_datos"
```

Los datos que no son secretos van en `env`, escritos en el archivo. La contraseña va en `env_vars`, igual que el token de GitHub:

```bash
export MYSQL_PASSWORD="la-contraseña-de-solo-lectura"
```

Pruébalo con una petición prudente:

```text
Usando mi-bd, dime cuántas tablas hay y describe una de ellas. Solo SELECT, no modifiques nada.
```

## Paso 3. Limita lo que puede usar

Un servidor puede traer herramientas que no quieres que el agente tenga a mano. Puedes quitarle algunas con `disabled_tools`, o quedarte solo con las que nombres con `enabled_tools`:

```toml
[mcp_servers.github]
enabled_tools = ["nombre_de_una_herramienta", "nombre_de_otra"]
```

Los nombres exactos de las herramientas los ves con `/mcp`.

## Desde la terminal

Si prefieres no editar el archivo a mano, `codex mcp` hace lo mismo desde la línea de comandos:

```bash
codex mcp list
codex mcp add github -- npx -y @modelcontextprotocol/server-github
```

Para los secretos, sigue siendo mejor añadir luego `env_vars` en `config.toml` que escribir el token en el comando.
