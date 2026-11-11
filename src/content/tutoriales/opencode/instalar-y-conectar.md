---
serie: opencode
orden: 1
titulo: Instala OpenCode y conéctalo con OpenRouter
resumen: Instalas el programa en Windows, Mac o Linux, creas tu cuenta en OpenRouter con un poco de crédito y haces la primera pregunta a un modelo barato.
minutos: 45
nivel: Principiante
---

## ¿Qué es OpenCode?

OpenCode es un agente de código abierto (puedes ver como está hecho por dentro), disponible 
como herramienta de terminal, aplicación de escritorio y aplicación web.

## Qué necesitas

- Un ordenador con Windows 10 u 11, macOS o Linux.
- Una terminal. En Windows, **PowerShell**, que ya viene instalada (búscala en el menú Inicio). En Mac y Linux, la aplicación *Terminal*.
- Una tarjeta para añadir entre 5 y 10 $ de crédito en OpenRouter. Con eso tienes para muchas horas de pruebas con un modelo barato.

> Esta serie usa OpenCode 1, la versión que se instala con los comandos de abajo. La versión 2 cambia algunos comandos y la configuración.

## Paso 1 en Windows. Instala Node.js y OpenCode

En Windows, lo más sencillo es instalar OpenCode con `npm`, el gestor de paquetes que viene con Node.js.

1. Entra en [nodejs.org](https://nodejs.org), descarga la versión **LTS** y ejecuta el instalador con las opciones que trae por defecto.
2. Cierra cualquier PowerShell que tengas abierta y abre una nueva, para que reconozca los programas recién instalados.
3. Escribe:

```powershell
npm install -g opencode-ai
opencode --version
```

Si el segundo comando te devuelve un número de versión, ya está instalado.

### Si PowerShell dice que «la ejecución de scripts está deshabilitada»

Es una protección de Windows que bloquea los atajos que crea `npm`. Tienes dos salidas:

- Escribir `opencode.cmd` en lugar de `opencode`. Funciona igual.
- Permitir los scripts locales solo para tu usuario, una vez y para siempre:

```powershell
Set-ExecutionPolicy -Scope CurrentUser RemoteSigned
```

### Otra opción: WSL

Si ya usas WSL (el Linux que se instala dentro de Windows), los propios autores de OpenCode lo recomiendan porque funciona algo más fluido con proyectos grandes. En ese caso, abre tu terminal de WSL y sigue los pasos de Mac y Linux.

## Paso 1 en Mac y Linux. Instala OpenCode

Abre la terminal y usa el instalador oficial:

```bash
curl -fsSL https://opencode.ai/install | bash
opencode --version
```

Si el segundo comando te devuelve un número de versión, ya está instalado. También puedes usar `npm install -g opencode-ai`, igual que en Windows, o `brew install anomalyco/tap/opencode` si usas Homebrew.

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

OpenCode guarda la clave en un archivo `auth.json` dentro de tu carpeta de usuario, así que no tendrás que volver a pegarla. Si quieres saber dónde está exactamente, sal de OpenCode y escribe `opencode auth list`: te muestra la ruta y los proveedores conectados.

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

## Un atajo para el día a día

Puedes arrancar OpenCode con el modelo ya elegido:

```bash
opencode --model openrouter/meta/muse-spark-1.3-contributor
```

## Si algo falla

Si `/models` no muestra el modelo o las respuestas dan error, revisa por este orden:

1. Que pegaste la clave completa en `/connect`.
2. Que tienes crédito en OpenRouter.
3. La página de actividad de OpenRouter: si tus preguntas no aparecen ahí, la petición ni siquiera está llegando.

En Windows, si al escribir `opencode` te dice que no reconoce el comando, cierra PowerShell y ábrela de nuevo. Si sigue igual, repite la instalación con `npm install -g opencode-ai` y fíjate en si muestra algún error.

## Comprueba que lo tienes

- `opencode --version` responde con un número.
- Tu clave de OpenRouter está conectada.
- Tienes crédito visible en OpenRouter.
- El modelo te ha contestado al menos una vez.
