---
serie: codex
orden: 4
titulo: Decide qué puede hacer sin preguntarte
resumen: Ajustas la caja de arena (qué puede tocar) y las aprobaciones (cuándo te pregunta), y lo guardas en config.toml para no repetirlo.
minutos: 30
nivel: Intermedio
---

## Dos llaves distintas

Esto es lo que más distingue a Codex de otros agentes. Su autonomía se controla con dos ajustes que conviene no confundir:

- **La caja de arena** (`sandbox_mode`): qué puede tocar el agente. Es un límite que pone el sistema operativo, no una promesa del modelo.
- **Las aprobaciones** (`approval_policy`): cuándo te pregunta antes de hacer algo que se sale de esa caja.

## La caja de arena

| Valor | Qué permite |
|---|---|
| `read-only` | Leer archivos. No puede escribir nada. |
| `workspace-write` | Leer, y escribir solo dentro de la carpeta del proyecto. Sin acceso a internet salvo que lo actives. |
| `danger-full-access` | Todo, sin límites. |

Para el día a día, `workspace-write` es el equilibrio: puede trabajar en tu proyecto pero no tocar el resto de tu ordenador. `read-only` es perfecto para explorar un proyecto que no conoces.

## Las aprobaciones

| Valor | Cuándo te pregunta |
|---|---|
| `on-request` | Cuando necesita algo fuera de la caja de arena. Es lo recomendable si estás delante. |
| `never` | Nunca. Lo que no cabe en la caja, falla. Para tareas automáticas, sin nadie mirando. |

## Cambiarlos en mitad de una sesión

```text
/permissions
```

Te deja elegir qué puede hacer Codex sin preguntarte. Luego comprueba con `/status` con qué permisos estás trabajando.

**Haz la prueba.** Arranca en solo lectura y pídele algo que necesite escribir:

```bash
codex -s read-only -a on-request
```

```text
Crea un archivo notas.txt con un resumen de @README.md
```

Verás cómo te pide permiso en lugar de hacerlo por su cuenta. Puedes aceptar o rechazar.

## Guardarlo en config.toml

Para no escribir las opciones cada vez, ponlas en `~/.codex/config.toml`:

```toml
model_reasoning_effort = "medium"
approval_policy = "on-request"
sandbox_mode = "workspace-write"
```

Si tu proyecto necesita internet (para instalar paquetes, por ejemplo), actívalo solo dentro de la caja de arena:

```toml
[sandbox_workspace_write]
network_access = true
```

Un proyecto también puede llevar su propio `.codex/config.toml` en la raíz. Codex solo lo carga si has marcado ese proyecto como de confianza, por seguridad: así un repositorio descargado de internet no puede darse permisos a sí mismo.

## Perfiles para cambiar rápido

Si alternas entre explorar barato y razonar a fondo, crea un archivo de configuración por cada forma de trabajar en `~/.codex/`. Por ejemplo, `~/.codex/explorar.config.toml`:

```toml
model_reasoning_effort = "low"
sandbox_mode = "read-only"
```

Y arranca con él:

```bash
codex --profile explorar
```

## La opción que no debes usar

```bash
codex --yolo
```

(o su nombre largo, `--dangerously-bypass-approvals-and-sandbox`) quita la caja de arena y las aprobaciones a la vez: el agente ejecuta cualquier cosa sin preguntar. Solo tiene sentido dentro de una máquina aislada que no te importe romper. **En tu ordenador, no.**

## Comprueba que lo tienes

- Sabes explicar la diferencia entre caja de arena y aprobaciones.
- Has visto a Codex pedirte permiso al menos una vez.
- Tu `~/.codex/config.toml` tiene `on-request` y `workspace-write`.
