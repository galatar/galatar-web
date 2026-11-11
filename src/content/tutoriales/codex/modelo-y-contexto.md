---
serie: codex
orden: 3
titulo: Cambia de modelo y de esfuerzo, y cuida el contexto
resumen: Eliges el modelo y cuánto razona según la tarea, resumes conversaciones largas y retomas las anteriores.
minutos: 20
nivel: Principiante
---

## Elegir modelo y esfuerzo

En OpenCode eliges proveedor y modelo. En Codex los modelos son siempre de OpenAI, así que solo decides dos cosas: **qué modelo** y **cuánto razona** antes de responder.

Las dos se cambian con el mismo comando:

```text
/model
```

Elige un modelo de la lista y, si lo admite, el nivel de esfuerzo: `low`, `medium`, `high` y, según el modelo, alguno más. Cuanto más alto, más piensa, más tarda y más uso de tu plan consume.

Los nombres de los modelos cambian a menudo. Usa los que te ofrezca `/model` en cada momento.

**Haz la prueba.** Pregunta lo mismo dos veces, una con `low` y otra con `high`:

```text
Explica cómo está organizado este proyecto mirando @README.md y la carpeta principal. Solo lectura.
```

Compara el tiempo y el detalle de la respuesta. Una buena costumbre: `low` para explorar y preguntas rápidas, `high` para razonar sobre un problema o planificar un cambio.

## Fijarlo para siempre

Si siempre usas lo mismo, guárdalo en el archivo de configuración de Codex, `~/.codex/config.toml`. Créalo si no existe:

```toml
model_reasoning_effort = "medium"
```

Y para una sola sesión, sin tocar el archivo:

```bash
codex -c model_reasoning_effort="high"
```

También puedes fijar el modelo con `model = "..."` en el archivo o con `codex -m nombre-del-modelo` al arrancar.

## Ver cómo vas

```text
/status
```

Te enseña el modelo, los permisos con los que trabajas y cuánto contexto llevas gastado.

## Cuidar el contexto

Una conversación con veinte archivos leídos y montones de resultados de comandos da peores respuestas y gasta más. Tienes dos herramientas:

- `/new`: conversación limpia. Para cambiar de tarea.
- `/compact`: resume la conversación actual y sigue a partir del resumen. Para cuando estás a mitad de una tarea larga y no quieres perder el hilo.

## Retomar una conversación

- `/resume`, dentro de Codex, lista tus conversaciones guardadas para volver a una.
- `codex resume`, desde la terminal, hace lo mismo al arrancar.

## Resumen

| Quiero... | Escribo |
|---|---|
| Cambiar de modelo o de esfuerzo | `/model` |
| Más esfuerzo solo esta vez | `codex -c model_reasoning_effort="high"` |
| Ver modelo, permisos y contexto | `/status` |
| Conversación limpia | `/new` |
| Resumir y seguir | `/compact` |
| Retomar una conversación | `/resume` o `codex resume` |
| Salir | `/exit` |
