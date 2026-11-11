---
serie: opencode
orden: 3
titulo: Cambia de modelo y de potencia, y cuida el contexto
resumen: Eliges el modelo y su nivel de razonamiento según la tarea, compactas sesiones largas y deshaces cambios cuando algo sale mal.
minutos: 25
nivel: Principiante
---

## Elegir modelo

Con `/models` (o el atajo `Ctrl+X` y después `M`) ves los modelos disponibles y cambias de uno a otro en mitad de la sesión. `F2` salta entre los últimos que has usado.

Lo que eliges con `/models` solo vale para esa sesión. Si siempre usas el mismo, fíjalo en el archivo `opencode.json` de la raíz de tu proyecto y te ahorras elegirlo cada vez:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "openrouter/meta/muse-spark-1.3-contributor"
}
```

Si lo quieres para todos tus proyectos, pon lo mismo en el archivo general, `~/.config/opencode/opencode.json`. En Windows, `~` es tu carpeta de usuario: `C:\Users\tu-nombre\.config\opencode\opencode.json`.

## Elegir potencia

Muchos modelos tienen variantes: `low`, `medium`, `high` y a veces `max`. Cuanto más alta, más piensa antes de responder, y por tanto tarda más y cuesta más.

Pulsa `Ctrl+T` para ir pasando de una variante a otra, o escribe `/variants` para elegirla de una lista.

**Haz la prueba.** Pregunta lo mismo dos veces, una con `low` y otra con `high`:

```text
Explica cómo está organizado este proyecto mirando @README.md y la carpeta principal. Solo lectura.
```

Compara el tiempo, el detalle de la respuesta y el gasto en OpenRouter. Una buena costumbre: `low` para explorar y preguntas rápidas, `high` para razonar sobre un problema o planificar un cambio.

## Ver cómo razona

Pulsa `Ctrl+P`, escribe `thinking` y elige la opción que despliega o pliega el razonamiento del modelo. Solo cambia lo que ves en pantalla; la potencia sigue siendo la que hayas elegido con `Ctrl+T`.

> Si vienes de OpenCode 1: allí `/thinking` mostraba el razonamiento. En la 2 es otro nombre de `/variants` y sirve para cambiar la potencia.

## Cuidar el contexto

Una sesión con veinte archivos leídos y montones de resultados de comandos da peores respuestas y gasta más tokens. Tienes dos herramientas:

- `/new`: sesión limpia. Para cambiar de tarea.
- `/compact`: resume la sesión actual y sigue a partir del resumen. Para cuando estás a mitad de una tarea larga y no quieres perder el hilo.

OpenCode también compacta solo cuando la sesión se acerca al límite del modelo. Hacerlo tú antes te deja elegir el momento.

Y si te surge una duda que no tiene que ver con la tarea, usa `/btw`:

```text
/btw ¿por qué ha fallado la prueba de antes?
```

Contesta con lo que ya sabe de la sesión, pero la pregunta y la respuesta no se quedan en la conversación.

## Volver atrás

- `/sessions` lista tus sesiones anteriores para retomar una.
- `/undo` deshace tu última petición y los cambios que hizo el agente en tus archivos. La petición vuelve a la caja de texto para que la corrijas: si la envías, el cambio queda deshecho.
- `/redo`, antes de enviar nada, recupera lo que habías deshecho.

> `/undo` solo recupera tus archivos si el proyecto está en un repositorio git. Fuera de git, deshace la conversación pero no los archivos. Si todavía no lo está, `git init` en la carpeta del proyecto es la mejor red de seguridad que puedes ponerte antes de dejar que un agente toque nada.

## Resumen

| Quiero... | Escribo |
|---|---|
| Cambiar de modelo | `/models` o `Ctrl+X M` |
| Más o menos potencia | `Ctrl+T` o `/variants` |
| Ver el razonamiento | `Ctrl+P` y busco *thinking* |
| Sesión limpia | `/new` o `Ctrl+X N` |
| Resumir y seguir | `/compact` o `Ctrl+X C` |
| Una pregunta al margen | `/btw` |
| Retomar una sesión | `/sessions` o `Ctrl+X L` |
| Deshacer un cambio | `/undo` |
| Salir | `/exit` |
| Ver todo lo demás | `/help` o `Ctrl+P` |
