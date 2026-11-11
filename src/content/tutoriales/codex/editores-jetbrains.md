---
serie: codex
orden: 5
titulo: Úsalo desde PhpStorm, PyCharm y el resto de JetBrains
resumen: Trabajas con Codex en la terminal integrada del editor, con el proyecto abierto al lado, o desde el chat de IA de JetBrains.
minutos: 20
nivel: Principiante
---

## Dos formas de integrarlo

Para VS Code, Cursor y Windsurf, OpenAI tiene una extensión oficial. En los editores de JetBrains (PhpStorm, PyCharm, IntelliJ...) tienes dos caminos:

- **La terminal integrada.** Es el mismo Codex que ya conoces, con todo lo que has aprendido en esta serie. Es la que usamos aquí.
- **El chat de IA de JetBrains.** JetBrains incluye Codex como uno de los agentes de su AI Assistant: abres **AI Chat** y eliges Codex. Las instrucciones están en la [ayuda de JetBrains](https://www.jetbrains.com/help/ai-assistant/codex-agent.html).

## Paso 1. Abre el proyecto y su terminal

1. Abre tu proyecto en el editor.
2. Abre la terminal integrada: `Alt+F12` (`⌥F12` en Mac), o el menú **Ver → Ventanas de herramientas → Terminal**.
3. La terminal ya se abre en la raíz del proyecto. Arranca Codex:

```bash
codex
```

Si no has guardado tus permisos en `config.toml`, dáselos al arrancar:

```bash
codex -s workspace-write -a on-request
```

Ahora tienes el código a un lado y el agente al otro. Cuando Codex cambie un archivo, el editor lo recarga.

## Paso 2. Referencia archivos

Desde la terminal no hay un atajo que mande al agente el archivo que tienes abierto. Tienes tres opciones:

- Escribir `@` y la ruta, por ejemplo `@src/informes/mensual.py`. Codex busca mientras escribes.
- Copiar el fragmento de código que te interesa y pegarlo en la petición.
- Pegar una captura de pantalla, si lo que quieres enseñarle es un error.

Para copiar la ruta de un archivo, haz clic derecho sobre él en el panel del proyecto y elige **Copiar ruta/referencia → Ruta desde la raíz del contenido**.

## Practica

Con tu proyecto abierto en el editor, arranca Codex en su terminal y pide:

```text
Resume qué hace este proyecto según @README.md y los archivos de configuración de la raíz. No cambies nada.
```
