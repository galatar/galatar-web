---
serie: opencode
orden: 1
titulo: Instala OpenCode y conéctalo con OpenRouter
resumen: Instalas el programa en Windows, Mac o Linux, creas tu cuenta en OpenRouter con un poco de crédito y haces la primera pregunta a un modelo barato.
minutos: 45
nivel: Principiante
---

## ¿Qué es OpenCode?

OpenCode es un agente de código abierto (puedes ver cómo está hecho por dentro), disponible
como herramienta de terminal, aplicación de escritorio y aplicación web.

## Qué necesitas

- Un ordenador con Windows 10 u 11, macOS o Linux.
- Una terminal. En Windows, **PowerShell**, que ya viene instalada (búscala en el menú Inicio). En Mac y Linux, la aplicación *Terminal*.
- Una tarjeta para añadir entre 5 y 10 $ de crédito en OpenRouter. Con eso tienes para muchas horas de pruebas con un modelo barato.

> Esta serie usa **OpenCode 2**. Si encuentras guías antiguas con `npm install -g opencode-ai` o con el comando `/init`, son de la versión 1.

## Paso 1 en Windows. Instala Node.js y OpenCode

En Windows, lo más sencillo es instalar OpenCode con `npm`, el gestor de paquetes que viene con Node.js.

1. Entra en [nodejs.org](https://nodejs.org), descarga la versión **LTS** y ejecuta el instalador con las opciones que trae por defecto.
2. Cierra cualquier PowerShell que tengas abierta y abre una nueva, para que reconozca los programas recién instalados.
3. Escribe:

```powershell
npm install -g @opencode/cli
opencode --version
```

Si el segundo comando te devuelve un número que empieza por 2, ya está instalado.

### Si PowerShell dice que «la ejecución de scripts está deshabilitada»

Es una protección de Windows que bloquea los atajos que crea `npm`. Tienes dos salidas:

- Escribir `opencode.cmd` en lugar de `opencode`. Funciona igual.
- Permitir los scripts locales solo para tu usuario, una vez y para siempre:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

### Si no quieres instalar Node.js

OpenCode también se distribuye como un programa suelto, sin instalador:

1. Descarga el zip de [Windows x64](https://opencode.ai/update/api/latest/cli/opencode/opencode-windows-x64.zip). Es el de casi todos los PC; solo los portátiles con procesador ARM (Snapdragon) necesitan el de [ARM64](https://opencode.ai/update/api/latest/cli/opencode/opencode-windows-arm64.zip).
2. Descomprímelo en una carpeta fija, por ejemplo `C:\Users\tu-nombre\opencode`.
3. Añade esa carpeta al `Path`: busca «variables de entorno» en el menú Inicio, abre **Editar las variables de entorno de esta cuenta**, elige `Path`, pulsa **Editar → Nuevo** y pega la ruta.
4. Abre una PowerShell nueva y comprueba con `opencode --version`.

### Otra opción: WSL

Si ya usas WSL (el Linux que se instala dentro de Windows), abre tu terminal de WSL y sigue los pasos de Mac y Linux.

## Paso 1 en Mac y Linux. Instala OpenCode

Abre la terminal y usa el instalador oficial:

```bash
curl -fsSL https://opencode.ai/v2/install | bash
opencode --version
```

Si el segundo comando te devuelve un número que empieza por 2, ya está instalado. También puedes usar `npm install -g @opencode/cli`, igual que en Windows, o `brew install anomalyco/tap/opencode-v2` si usas Homebrew.

## Si ya tenías OpenCode 1

Las dos versiones usan el mismo comando, `opencode`, así que no pueden convivir. Quita la 1 antes de instalar la 2:

- Si la instalaste con npm: `npm uninstall -g opencode-ai`.
- Si la instalaste con Homebrew: `brew uninstall opencode`.
- Si usaste el instalador `curl`, no hace falta: el de la 2 sustituye a la 1.

Tu configuración, tus `AGENTS.md` y tus skills siguen sirviendo. La clave de OpenRouter que ya tenías conectada se importa sola la primera vez que abres la 2.

## Comprueba que se abre

Escribe:

```bash
opencode
```

Verás la interfaz de OpenCode dentro de la terminal. Para salir, escribe `/exit`.

## Paso 2. Crea tu cuenta en OpenRouter

OpenCode no trae un modelo de IA propio: se conecta al proveedor que elijas. OpenRouter es cómodo para empezar porque con una sola cuenta tienes acceso a modelos de muchas empresas y pagas solo lo que usas.

1. Entra en [openrouter.ai](https://openrouter.ai) y crea una cuenta. Puedes entrar con Google o con GitHub.
2. Ve a **Keys** y pulsa **Create API Key**. Copia la clave, que empieza por `sk-or-`.
3. Ve a **Credits** y añade entre 5 y 10 $.

> **Trata la clave como una contraseña.** Quien la tenga puede gastar tu crédito. No la pegues en documentos, correos ni repositorios.

Sin crédito no funciona, aunque el modelo sea baratísimo: verás un error de autenticación o de fondos insuficientes.

## Paso 3. Conecta OpenCode con tu clave

Abre OpenCode y escribe el comando `/connect`:

```bash
opencode
```

```text
/connect
```

1. Busca **OpenRouter** en la lista y pulsa Intro.
2. Pega tu clave `sk-or-...` y pulsa Intro.

OpenCode guarda la clave en su base de datos interna, dentro de tu carpeta de usuario, así que no tendrás que volver a pegarla. Para ver qué proveedores tienes conectados, sal de OpenCode y escribe `opencode auth list`.

## Paso 4. Elige un modelo y haz la primera pregunta

En esta serie usamos `meta/muse-spark-1.3-contributor`, la versión económica de Muse Spark pensada para experimentar. Ojo con la versión normal, `meta/muse-spark-1.3`: es bastante más cara y para aprender no la necesitas.

Escribe:

```text
/models
```

Busca `openrouter/meta/muse-spark-1.3-contributor` y selecciónalo. Ahora haz una pregunta cualquiera:

```text
Hola, ¿qué modelo eres? Dame un ejemplo corto de una función en Python.
```

Si contesta, todo está en su sitio.

> Los modelos y sus precios cambian a menudo. Si este ya no aparece, en `/models` tienes la lista actualizada. Busca uno marcado como barato o con el sufijo `:free` para practicar sin gastar.

El modelo que eliges con `/models` vale para la sesión en la que estás. En el tutorial 3 verás cómo dejarlo fijado para no elegirlo cada vez.

## Si algo falla

Si `/models` no muestra el modelo o las respuestas dan error, revisa por este orden:

1. Que pegaste la clave completa en `/connect`.
2. Que tienes crédito en OpenRouter.
3. La página de actividad de OpenRouter: si tus preguntas no aparecen ahí, la petición ni siquiera está llegando.

En Windows, si al escribir `opencode` te dice que no reconoce el comando, cierra PowerShell y ábrela de nuevo. Si sigue igual, repite la instalación con `npm install -g @opencode/cli` y fíjate en si muestra algún error.

OpenCode 2 funciona con un pequeño servicio en segundo plano que arranca solo. Si alguna vez se queda colgado al abrirse, reinícialo con `opencode service restart`.

## Comprueba que lo tienes

- `opencode --version` responde con un número que empieza por 2.
- Tu clave de OpenRouter está conectada.
- Tienes crédito visible en OpenRouter.
- El modelo te ha contestado al menos una vez.
