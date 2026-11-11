---
serie: opencode
orden: 4
titulo: Úsalo desde PhpStorm, PyCharm y el resto de JetBrains
resumen: Trabajas con OpenCode en la terminal integrada del editor, con el proyecto abierto al lado.
minutos: 20
nivel: Principiante
---

## Cómo se integra

En los editores de JetBrains (PhpStorm, PyCharm, IntelliJ...) no necesitas instalar nada: se usa la **terminal integrada** del editor y tienes el código y el agente en la misma ventana.

## Paso 1. Abre el proyecto y su terminal

1. Abre tu proyecto en el editor.
2. Abre la terminal integrada: `Alt+F12` (`⌥F12` en Mac), o el menú **Ver → Ventanas de herramientas → Terminal**.
3. La terminal ya se abre en la raíz del proyecto. Arranca OpenCode:

```bash
opencode
```

Ahora tienes el código a un lado y el agente al otro. Cuando OpenCode cambie un archivo, el editor lo recarga.

## Paso 2. Referencia archivos

Aquí no hay un atajo que mande al agente el archivo que tienes abierto. Tienes dos opciones:

- Escribir `@` y la ruta, por ejemplo `@src/informes/mensual.py`. OpenCode te sugiere rutas mientras escribes.
- Copiar el fragmento de código que te interesa y pegarlo en la petición.

Para copiar la ruta de un archivo, haz clic derecho sobre él en el panel del proyecto y elige **Copiar ruta/referencia → Ruta desde la raíz del contenido**.

## Paso 3 (opcional). Usa el editor para escribir peticiones largas

El comando `/editor` (o `Ctrl+X` y después `E`) abre un editor de texto para redactar una petición larga: escribes, guardas, cierras y el texto vuelve a OpenCode listo para enviar. `/export` hace algo parecido con la conversación entera, para revisarla. Puedes decirle que use tu editor:

En Mac y Linux:

```bash
export EDITOR="phpstorm --wait"
```

En Windows, con PowerShell:

```powershell
$env:EDITOR = "phpstorm --wait"
```

En los dos casos dura mientras tengas abierta esa terminal. Cambia `phpstorm` por `pycharm`, `idea` o el que uses. Para que funcione, el editor tiene que tener activado su lanzador de línea de comandos (en la Toolbox de JetBrains, en la configuración de cada herramienta).

## Practica

Con tu proyecto abierto en el editor, arranca OpenCode en su terminal y pide:

```text
Resume qué hace este proyecto según @README.md y los archivos de configuración de la raíz. No cambies nada.
```
