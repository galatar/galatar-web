---
serie: codex
orden: 1
titulo: Instala Codex y entra con tu cuenta
resumen: Instalas el programa, entras con tu cuenta de ChatGPT (o con una clave de la API) y haces la primera pregunta.
minutos: 30
nivel: Principiante
---

## Qué necesitas

- Un Mac o un ordenador con Linux. En Windows hay instalador propio, aunque esta serie da los ejemplos para Mac y Linux.
- Una terminal. La que trae el sistema sirve.
- Una de estas dos cosas:
  - **Una cuenta de ChatGPT de pago** (Plus, Pro, Business, Edu o Enterprise). Es la vía más cómoda: el uso de Codex entra en tu plan y no pagas nada aparte.
  - **Una clave de la API de OpenAI**, de [platform.openai.com](https://platform.openai.com). Pagas por uso, así que necesitas añadir algo de saldo.

## Paso 1. Instala Codex

Con npm (necesitas tener Node.js instalado):

```bash
npm install -g @openai/codex
codex --version
```

O con Homebrew, en Mac:

```bash
brew install --cask codex
```

Si `codex --version` te devuelve un número de versión, ya está. Para actualizar más adelante, repite el mismo comando de npm o usa `brew upgrade --cask codex`.

## Paso 2. Entra con tu cuenta

La primera vez que arrancas Codex te pide que te identifiques:

```bash
codex
```

1. Elige **Sign in with ChatGPT**.
2. Se abre el navegador. Entra con tu cuenta y acepta.
3. Vuelve a la terminal: Codex ya está listo.

Si prefieres la clave de la API, entra así (la clave se lee de la variable, no la escribes en el comando):

```bash
export OPENAI_API_KEY="pega-aquí-tu-clave"
printenv OPENAI_API_KEY | codex login --with-api-key
```

> **Trata la clave como una contraseña.** Quien la tenga puede gastar tu saldo. No la pegues en documentos, correos ni repositorios.

Codex guarda tus credenciales en `~/.codex/auth.json`, dentro de tu carpeta personal, o en el llavero del sistema si así lo configuras. No subas nunca ese archivo a un repositorio.

## Paso 3. La primera pregunta

Dentro de Codex, escribe:

```text
Hola, ¿qué modelo eres? Dame un ejemplo corto de una función en Python.
```

Si contesta, todo está en su sitio. Para salir, escribe `/exit`.

## Comandos de la cuenta

```bash
codex login status    # con qué te has identificado
codex logout          # borra las credenciales guardadas
```

Si estás en un ordenador sin navegador (un servidor, por ejemplo), usa `codex login --device-auth`: te da un código para validarlo desde el navegador de otro equipo.

## Si algo falla

Revisa por este orden:

1. `codex login status`: si no estás identificado, nada más va a funcionar.
2. Que tu plan de ChatGPT incluye Codex, o que tu cuenta de la API tiene saldo.
3. La conexión a internet.

## Comprueba que lo tienes

- `codex --version` responde con un número.
- `codex login status` dice con qué cuenta has entrado.
- El modelo te ha contestado al menos una vez.
