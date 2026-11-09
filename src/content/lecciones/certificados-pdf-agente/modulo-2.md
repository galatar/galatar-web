---
taller: certificados-pdf-agente
modulo: 2
titulo: Prepara la carpeta y deja que instale Python
resumen: Escribes el archivo de instrucciones del proyecto y el agente prepara Python mientras tú apruebas cada paso.
minutos: 20
---

## Paso 1. La carpeta y el archivo de instrucciones

Crea una carpeta llamada `certificados-ia`, por ejemplo en *Documentos*. Dentro, crea un archivo de texto con las instrucciones del proyecto.

El agente lee ese archivo cada vez que empiezas a trabajar, así no tienes que explicarle el proyecto desde cero en cada conversación. El nombre depende de la herramienta:

- **Claude** busca `CLAUDE.md`.
- **Codex, Cursor y Copilot** buscan `AGENTS.md`.

Usa el que corresponda a tu agente. En este taller lo llamaremos *el archivo de instrucciones*. Copia este contenido:

```markdown
# Proyecto: certificados en PDF

## Qué hacemos
Generar un certificado de asistencia en PDF por cada persona
de asistentes.xlsx. Soy principiante: no sé programar.

## Cómo quiero trabajar
- Antes de ejecutar un comando, explícame en una frase qué hace.
- Haz los cambios de uno en uno y prueba cada uno antes de seguir.
- Código sencillo y comentado en español.
- Antes de cambiar generar.py, guarda una copia en versiones/.

## Datos
- asistentes.xlsx contiene SOLO personas inventadas.
- Nunca leas ni abras archivos fuera de esta carpeta.
- Si algún día ves datos que parecen reales, avísame y para.

## Decisiones tomadas
(el agente irá añadiendo aquí lo que vayamos decidiendo)
```

## Paso 2. Abre la carpeta con tu agente

Cada herramienta lo hace a su manera: *Abrir carpeta*, *Seleccionar proyecto* o arrastrar la carpeta a la ventana. Lo importante es que el agente trabaje **en `certificados-ia` y en ninguna otra**.

## Paso 3. Que prepare Python

Escribe esta petición:

```text
Lee el archivo de instrucciones. Luego comprueba si tengo Python 3
instalado y, si no, guíame para instalarlo.
Cuando lo tenga, prepara un entorno virtual en esta carpeta
e instala openpyxl y fpdf2.
Antes de cada comando, explícame qué hace.
```

Ahora verás la diferencia con un chat: el agente **ejecuta** los comandos y lee el resultado. Tú solo tienes que leer lo que propone y aprobarlo.

Hay una excepción. Instalar Python en el sistema a veces pide tu contraseña o abre un instalador. Esa parte la harás tú, siguiendo sus indicaciones, y luego le dirás que ya está.

> **¿Qué es un entorno virtual?** Es una caja dentro de tu carpeta donde se instalan las librerías de este proyecto sin tocar el resto del ordenador. Si un día borras la carpeta, todo desaparece con ella. Pídele al agente que te lo explique con más detalle si te interesa.

## Paso 4. Los datos de prueba

```text
Crea asistentes.xlsx con 10 personas inventadas.
Columnas en la fila 1: nombre, dni, curso, horas, fecha.
Nombres españoles variados, alguno con tilde y alguno compuesto.
DNI inventados con formato válido. El mismo curso, horas y fecha
para todos; la fecha como fecha de Excel.
Cuando termines, dime cómo comprobarlo.
```

Abre el Excel y comprueba que tiene buena pinta. Fíjate en que no has tenido que crear ningún archivo ni copiar nada: el agente ha escrito un pequeño programa, lo ha ejecutado y te ha dejado el resultado.

## Si el agente pide algo raro

Si propone un comando que no entiendes, no lo apruebes todavía:

```text
Antes de aprobarlo: ¿qué hace exactamente ese comando?
¿Toca algo fuera de esta carpeta?
```
