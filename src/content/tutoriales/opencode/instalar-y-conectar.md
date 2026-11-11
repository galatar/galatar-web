---
serie: opencode
orden: 1
titulo: Instala opencode y conéctalo con OpenRouter
resumen: Instalas el programa, creas tu cuenta en OpenRouter con un poco de crédito y haces la primera pregunta a un modelo barato.
minutos: 45
nivel: Principiante
---

## Qué necesitas

- Un Mac o un ordenador con Linux. En Windows, usa WSL (el Linux que se instala dentro de Windows).
- Una terminal. La que trae el sistema sirve.
- Una tarjeta para añadir entre 5 y 10 $ de crédito en OpenRouter. Con eso tienes para muchas horas de pruebas con un modelo barato.

## Paso 1. Instala opencode

La forma recomendada en Mac y Linux es el instalador oficial. Abre la terminal y escribe:

```bash
curl -fsSL https://opencode.ai/install | bash
opencode --version
```

Si el segundo comando te devuelve un número de versión, ya está instalado. Si prefieres otro gestor de paquetes, también puedes usar `npm install -g opencode-ai` o `brew install anomalyco/tap/opencode`.

Comprueba que se abre:

```bash
opencode
```

Verás la interfaz de opencode dentro de la terminal. Para salir, escribe `/exit`.

## Paso 2. Crea tu cuenta en OpenRouter

opencode no trae un modelo de IA propio: se conecta al proveedor que elijas. OpenRouter es cómodo para empezar porque con una sola cuenta tienes acceso a modelos de muchas empresas y pagas solo lo que usas.

1. Entra en [openrouter.ai](https://openrouter.ai) y crea una cuenta. Puedes entrar con Google o con GitHub.
2. Ve a **Keys** y pulsa **Create API Key**. Copia la clave, que empieza por `sk-or-`.
3. Ve a **Credits** y añade entre 5 y 10 $.

> **Trata la clave como una contraseña.** Quien la tenga puede gastar tu crédito. No la pegues en documentos, correos ni repositorios.

Sin crédito no funciona, aunque el modelo sea baratísimo: verás un error de autenticación o de fondos insuficientes.

## Paso 3. Conecta opencode con tu clave

Abre opencode y escribe el comando `/connect`:

```bash
opencode
```

```text
/connect
```

1. Busca **OpenRouter** en la lista y pulsa Intro.
2. Pega tu clave `sk-or-...` y pulsa Intro.

opencode guarda la clave en `~/.local/share/opencode/auth.json`, dentro de tu carpeta personal. No hace falta que la vuelvas a pegar.

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

Puedes arrancar opencode con el modelo ya elegido:

```bash
opencode --model openrouter/meta/muse-spark-1.3-contributor
```

## Si algo falla

Si `/models` no muestra el modelo o las respuestas dan error, revisa por este orden:

1. Que pegaste la clave completa en `/connect`.
2. Que tienes crédito en OpenRouter.
3. La página de actividad de OpenRouter: si tus preguntas no aparecen ahí, la petición ni siquiera está llegando.

## Comprueba que lo tienes

- `opencode --version` responde con un número.
- Tu clave de OpenRouter está conectada.
- Tienes crédito visible en OpenRouter.
- El modelo te ha contestado al menos una vez.
