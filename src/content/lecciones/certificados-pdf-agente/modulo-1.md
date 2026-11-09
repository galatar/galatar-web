---
taller: certificados-pdf-agente
modulo: 1
titulo: Descubre qué es un agente de IA
resumen: Qué cambia frente a un chat, qué herramienta elegir y la regla de oro de los datos.
minutos: 10
---

## El problema

Acaba un curso con 120 asistentes y alguien tiene que hacer 120 certificados. Abrir una plantilla, cambiar el nombre, guardar como PDF y repetir son dos horas de trabajo, y a la persona 87 es fácil equivocarse.

Un programa en Python lo hace en segundos. En este taller lo va a escribir un **agente de IA** que trabaja directamente en tu ordenador.

## Chat o agente

Un chat de IA solo ve lo que le escribes. Si te da un programa, tú lo copias en un archivo, lo ejecutas y le pegas los errores. Haces de mensajero.

Un agente trabaja **dentro de una carpeta** de tu ordenador. Puede leer y crear archivos, ejecutar comandos y ver los errores por sí mismo. Le dices qué quieres y él escribe el programa, lo ejecuta, comprueba el resultado y lo corrige si falla.

| | Chat | Agente |
|---|---|---|
| Quién crea los archivos | Tú, copiando y pegando | El agente |
| Quién ejecuta el programa | Tú | El agente, con tu permiso |
| Quién lee los errores | Tú, y se los pegas | El agente |
| Qué recuerda del proyecto | Lo que haya en la conversación | Lo que hay en la carpeta |
| Coste | Gratis | Casi siempre de pago |

## Tú sigues al mando

Que el agente pueda hacer cosas no significa que las haga sin preguntar. Antes de ejecutar un comando o de tocar un archivo, te pide permiso. Tu trabajo es **leer lo que propone y aprobar solo lo que entiendes**. Si no sabes qué hace un comando, pregúntaselo antes de aprobarlo.

## Qué agente usar

Este taller vale para cualquiera. Los más conocidos son:

- **Claude** (aplicación de escritorio de Anthropic, pestaña *Code*).
- **Codex** (de OpenAI, incluido en los planes de pago de ChatGPT).
- **Cursor**, un editor de código con agente integrado.
- **GitHub Copilot** en Visual Studio Code, en modo agente.

Todos funcionan parecido: abres una carpeta, escribes lo que quieres y apruebas lo que propone. Los nombres de los botones cambian, el método no.

## La regla de oro: datos inventados

El agente lee los archivos de la carpeta para trabajar, y lo que lee viaja a los servidores de la empresa de IA. Por eso, mientras construyes el programa, **en la carpeta solo hay personas inventadas**. La hoja real con nombres y DNI no entra en esa carpeta hasta el final, y entonces ejecutarás el programa tú, sin el agente.

## El resultado

```text
certificados-ia/
├── INSTRUCCIONES.md     ← lo que el agente debe saber del proyecto
├── asistentes.xlsx      ← tus datos (primero inventados)
├── fondo.png            ← el diseño del certificado
├── generar.py           ← el programa que escribe el agente
└── certificados/        ← un PDF por persona
```

> **Si ya has hecho el taller con chat**, verás que el problema es el mismo. Fíjate en qué trabajo desaparece y en cuál sigue siendo tuyo: esa es la diferencia real entre las dos herramientas.
