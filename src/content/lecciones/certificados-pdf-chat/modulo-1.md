---
taller: certificados-pdf-chat
modulo: 1
titulo: Descubre cómo vas a trabajar con la IA
resumen: El problema de siempre, un reparto de papeles nuevo y la regla de oro de los datos.
minutos: 10
---

## El problema

Acaba un curso con 120 asistentes y alguien tiene que hacer 120 certificados. Abrir una plantilla, cambiar el nombre, guardar como PDF y repetir son dos horas de trabajo, y a la persona 87 es fácil equivocarse.

Un programa en Python lo hace en segundos. La novedad de este taller es que **no vas a escribir ese programa**: lo escribirá un chat de IA gratuito siguiendo tus indicaciones.

## El reparto de papeles

| Tú | El chat de IA |
|---|---|
| Explicas qué necesitas y con qué datos | Escribe el código |
| Ejecutas el programa en tu ordenador | Te guía paso a paso para instalar lo necesario |
| Miras los PDF y decides si están bien | Corrige el código cuando le cuentas qué ha fallado |
| Guardas cada versión que funciona | Te explica qué hace cada parte |

El chat no ve tu ordenador. Todo lo que sabe es lo que tú le escribes, así que copiarás su código en archivos y le pegarás de vuelta los mensajes de error. Ese ir y venir es justo lo que vas a aprender a hacer bien.

## Qué chat usar

Sirve cualquiera de los gratuitos: ChatGPT, Claude, Gemini o Copilot. Las peticiones de este taller funcionan en todos. Si uno se atasca con un error, pegar la misma conversación en otro suele desbloquearlo.

## La regla de oro: datos inventados

Mientras construyes el programa, **trabaja solo con personas inventadas**. Nunca pegues en el chat nombres, DNI ni correos reales. Lo que escribes en un chat sale de tu ordenador y se guarda en los servidores de otra empresa.

La buena noticia es que el programa no necesita ver los datos reales para estar bien hecho. Cuando funcione con datos de prueba, lo ejecutarás tú en tu ordenador con la hoja real y esos datos no pasarán nunca por la IA.

## El resultado

Al terminar tendrás una carpeta así:

```text
certificados-ia/
├── asistentes.xlsx      ← tus datos (primero inventados)
├── fondo.png            ← el diseño del certificado
├── generar.py           ← el programa que ha escrito la IA
├── versiones/           ← copias de cada versión que funcionó
└── certificados/        ← un PDF por persona
```

> **Cómo está pensado este taller.** Primero ves el programa funcionando. Después lo mejoras conversando con la IA. Al final le pides que te lo explique, cuando ya sabes qué hace.
