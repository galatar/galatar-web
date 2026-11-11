---
serie: opencode
orden: 3
titulo: Cambia de modelo y de potencia, y cuida el contexto
resumen: Eliges el modelo y su nivel de razonamiento según la tarea, compactas sesiones largas y deshaces cambios cuando algo sale mal.
minutos: 25
nivel: Principiante
---

## Elegir modelo

Con `/models` (o el atajo `ctrl+x` y después `m`) ves los modelos disponibles y cambias de uno a otro en mitad de la sesión.

Si siempre usas el mismo, fíjalo en el archivo `opencode.json` de la raíz de tu proyecto y te ahorras elegirlo cada vez:

```json
{
  "$schema": "https://opencode.ai/config.json",
  "model": "openrouter/meta/muse-spark-1.3-contributor"
}
```

## Elegir potencia

Muchos modelos tienen variantes: `low`, `medium`, `high` y a veces `max`. Cuanto más alta, más piensa antes de responder, y por tanto tarda más y cuesta más.

Pulsa `ctrl+t` para ir pasando de una variante a otra.

**Haz la prueba.** Pregunta lo mismo dos veces, una con `low` y otra con `high`:

```text
Explica cómo está organizado este proyecto mirando @README.md y la carpeta principal. Solo lectura.
```

Compara el tiempo, el detalle de la respuesta y el gasto en OpenRouter. Una buena costumbre: `low` para explorar y preguntas rápidas, `high` para razonar sobre un problema o planificar un cambio.

## Ver cómo razona

`/thinking` muestra u oculta el razonamiento del modelo. Solo cambia lo que ves en pantalla; la potencia sigue siendo la que hayas elegido con `ctrl+t`.

## Cuidar el contexto

Una sesión con veinte archivos leídos y montones de resultados de comandos da peores respuestas y gasta más tokens. Tienes dos herramientas:

- `/new`: sesión limpia. Para cambiar de tarea.
- `/compact`: resume la sesión actual y sigue a partir del resumen. Para cuando estás a mitad de una tarea larga y no quieres perder el hilo.

## Volver atrás

- `/sessions` lista tus sesiones anteriores para retomar una.
- `/undo` deshace el último cambio que hizo el agente en tus archivos y `/redo` lo rehace.

> `/undo` y `/redo` solo funcionan si tu proyecto está en un repositorio git. Si todavía no lo está, `git init` en la carpeta del proyecto es la mejor red de seguridad que puedes ponerte antes de dejar que un agente toque nada.

## Resumen

| Quiero... | Escribo |
|---|---|
| Cambiar de modelo | `/models` o `ctrl+x m` |
| Más o menos potencia | `ctrl+t` |
| Ver el razonamiento | `/thinking` |
| Sesión limpia | `/new` o `ctrl+x n` |
| Resumir y seguir | `/compact` |
| Retomar una sesión | `/sessions` |
| Deshacer un cambio | `/undo` |
| Salir | `/exit` o `ctrl+x q` |
| Ver todo lo demás | `/help` |
