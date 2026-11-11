---
serie: conceptos
orden: 1
titulo: Qué es un agente de IA
resumen: La definición en una frase, los cinco pasos con los que trabaja un agente y lo que conviene vigilar cuando le dejas hacer cosas por ti.
minutos: 5
nivel: Principiante
---

## La definición

> Los agentes de IA utilizan modelos de lenguaje para interpretar objetivos, tomar decisiones y ejecutar acciones mediante herramientas externas. Pueden dividir una tarea en pasos, consultar información, utilizar APIs o ejecutar código y evaluar los resultados para continuar hasta completar el objetivo.

Dicho más corto: un chatbot te contesta y tú haces el trabajo; a un agente le haces un encargo y lo hace él. Por dentro hay el mismo tipo de modelo de lenguaje que en ChatGPT o Claude. Lo que cambia es que el agente puede **usar herramientas** y **repetir** hasta que el resultado está bien.

[![Infografía: los cinco pasos de un agente de IA (recibe un objetivo, planifica, usa herramientas, ejecuta y evalúa) y la vuelta atrás cuando el resultado no sirve](/img/que-es-un-agente.svg)](/img/que-es-un-agente.svg)

## Los cinco pasos

1. **Recibe un objetivo.** Le dices qué quieres lograr, no cómo. Por ejemplo: «Genera un certificado en PDF por cada fila de este Excel».
2. **Planifica.** Divide el encargo en pasos: leer el Excel, preparar la plantilla, rellenarla, guardar los PDF.
3. **Usa herramientas.** Para cada paso elige la que necesita: abrir un archivo, buscar en internet, llamar a una API, escribir y ejecutar un programa.
4. **Ejecuta.** Hace el trabajo y mira qué ha salido.
5. **Evalúa.** Si el resultado no cumple el objetivo (falta un PDF, sale un error, el nombre está mal), ajusta el plan y vuelve al paso 2.

Esa vuelta atrás es lo que lo distingue de un chatbot. En un chat, el error lo ves tú, lo copias y lo pegas para pedir otra versión. El agente lo ve él solo y lo corrige.

## Sus herramientas

Un agente no sabe hacer nada por sí mismo fuera de escribir texto. Todo lo demás lo hace con herramientas que alguien le ha dado:

- **Buscador**, para consultar información actual.
- **Archivos**, para leer y escribir en tu carpeta o tu proyecto.
- **APIs**, para hablar con otros servicios: una base de datos, un calendario, una hoja de cálculo en la nube.
- **Código**, para ejecutar programas y comprobar si funcionan.
- **Correo**, u otras vías para enviar mensajes.

Cuantas más herramientas le das, más puede hacer. Y más cosas puede romper.

## Lo que conviene vigilar

- **Se equivoca.** Comprueba lo que hace igual que comprobarías el trabajo de alguien nuevo. Tú encargas y revisas.
- **Dale solo los permisos que necesita.** Si la tarea es leer un Excel y generar PDF, no le hace falta mandar correos.
- **Pídele que te enseñe el plan antes de actuar.** La mayoría de agentes tienen un modo para eso, y es la forma más barata de evitar sustos.

## Para probar uno

Si quieres ver un agente trabajando en tu ordenador, sigue cualquiera de estas dos series. Las dos te llevan desde la instalación hasta un primer cambio revisado:

- [Primeros pasos con OpenCode](/tutoriales/#opencode), de código abierto y con el modelo que elijas.
- [Primeros pasos con Codex](/tutoriales/#codex), el agente de OpenAI, con tu cuenta de ChatGPT.
