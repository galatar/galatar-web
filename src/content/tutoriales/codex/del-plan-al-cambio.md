---
serie: codex
orden: 8
titulo: Del plan al cambio, con revisión y red de seguridad
resumen: Pides un plan antes de tocar nada, dejas que lo haga, miras el resultado con /diff, se lo pasas a un revisor con /review y deshaces con git si no te convence.
minutos: 25
nivel: Intermedio
---

## Antes de nada: git

Codex no tiene un comando para deshacer sus cambios. Tu red de seguridad es git, así que antes de dejarle escribir:

```bash
git status          # que no haya cambios a medias
git add -A && git commit -m "Antes de pedirle el cambio a Codex"
```

Si tu proyecto todavía no está en git, `git init` en su carpeta es lo primero.

## Paso 1. Pide un plan

Sube el esfuerzo a `high` con `/model`: planificar es donde más rinde que el modelo piense. Después pide el cambio con todo el contexto que tengas y deja claro que todavía no quieres código:

```text
Quiero añadir una columna «fecha» al informe que genera el proyecto. Mira @src/ y propón qué archivos hay que tocar, en qué orden y cómo lo probaríamos. No escribas código todavía.
```

## Paso 2. Revisa el plan

Léelo con calma y pregunta lo que no entiendas. Algunas preguntas que conviene hacerse:

- ¿Toca solo lo necesario?
- ¿Dice cómo se va a comprobar que funciona?
- ¿Hay algún archivo que no quieres que toque?

Si algo no te convence, díselo y que rehaga el plan. Es mucho más barato corregir aquí que después.

## Paso 3. Que lo haga

Cuando el plan te guste:

```text
Adelante con el plan.
```

Con `on-request` y `workspace-write` (lo que configuraste en el tutorial de permisos), escribirá en tu proyecto y te preguntará antes de salirse de él.

## Paso 4. Mira qué ha cambiado

```text
/diff
```

Te enseña todos los cambios, incluidos los archivos nuevos que git todavía no conoce. Léelo como leerías el trabajo de un compañero.

## Paso 5. Pide una segunda opinión

```text
/review
```

Codex revisa los cambios de tu proyecto como lo haría un revisor de código: busca errores, casos que se le han escapado y cosas que no encajan con el resto. No sustituye tu lectura, pero suele encontrar algo.

## Paso 6. Si no te gusta, deshaz

Como hiciste un commit antes de empezar, volver atrás es inmediato:

```bash
git restore .       # deshace los cambios en archivos que ya existían
git clean -n        # lista los archivos nuevos que ha creado...
git clean -f        # ...y los borra, si estás seguro
```

Si te gusta, haz commit y listo.

## Chuleta de la serie

```text
/model        modelo y esfuerzo           /permissions  qué puede hacer sin preguntar
/status       modelo, permisos, contexto  /new          conversación limpia
/compact      resumir y seguir            /resume       retomar una conversación
@archivo      darle un archivo            !comando      ejecutar en la terminal
/init         crear AGENTS.md             /mcp          ver los servidores MCP
/diff         ver los cambios             /review       pedir una revisión
/exit         salir                       --yolo        sin límites (no lo uses)
```

Y las cinco costumbres que más ayudan:

1. Una conversación nueva por tarea.
2. `@` para señalar los archivos en vez de describirlos.
3. Esfuerzo bajo para explorar y alto para razonar.
4. Caja de arena `workspace-write` y aprobaciones `on-request`.
5. Plan antes que cambio, `/review` antes del commit y git siempre debajo.
