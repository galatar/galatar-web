---
taller: certificados-pdf-chat
modulo: 3
titulo: Pide tu generador de certificados
resumen: Aprendes a escribir una buena petición, pruebas el programa y le devuelves al chat lo que ha fallado.
minutos: 20
---

## Una buena petición tiene cuatro partes

La calidad del programa depende mucho de cómo lo pidas. Una petición útil responde a cuatro preguntas:

1. **Contexto.** ¿Quién eres y qué herramientas tienes?
2. **Datos.** ¿Qué archivo lee el programa y qué columnas tiene?
3. **Resultado.** ¿Qué tiene que salir, con qué aspecto y con qué nombre de archivo?
4. **Condiciones.** ¿Qué no debe hacer o qué cuidados tiene que tener?

## La petición

Abre una conversación **nueva** en el chat (así no se mezcla con la instalación) y copia esto:

```text
Contexto: soy principiante. Tengo Python con openpyxl y fpdf2 instalados.
Trabajo en una carpeta que contiene asistentes.xlsx.

Datos: asistentes.xlsx tiene en la fila 1 estas columnas:
nombre, dni, curso, horas, fecha. Desde la fila 2, una persona por fila.
La fecha es una fecha de Excel.

Resultado: quiero un programa generar.py que cree un certificado en PDF
por cada persona, en A4 horizontal, con:
- el título CERTIFICADO arriba y centrado,
- el texto «Se certifica que [nombre], con DNI [dni], ha completado
  el curso [curso], de [horas] horas de duración, el [fecha]»,
- la fecha en formato español (14/10/2026).
Cada PDF se guarda en una carpeta certificados/ con el nombre
certificado-[dni].pdf.

Condiciones:
- Que salte las filas vacías sin dar error.
- Que el español salga bien: tildes, eñes y comillas.
- Que al terminar diga cuántos certificados ha generado.
- Código sencillo y comentado, porque quiero entenderlo después.

Dame el código completo en un solo bloque.
```

Crea `generar.py` en tu carpeta, pega el código y ejecútalo como hiciste con `crear_datos.py`.

## Revisa el resultado

Abre la carpeta `certificados/` y mira tres PDF con calma: uno con nombre largo, uno con tilde y uno con apellido compuesto. Comprueba:

- ¿Están todos los datos y son los de esa persona?
- ¿Se leen bien las tildes y las eñes?
- ¿La fecha sale en formato español?
- ¿Hay tantos PDF como personas en el Excel?

## Cuando algo no está bien

Hay dos tipos de fallo y se cuentan de forma distinta.

**El programa se para con un error.** Pega el error completo:

```text
Al ejecutar generar.py sale este error:
[pega el error completo]
Corrígelo y dame el código completo otra vez.
```

**El programa funciona, pero el resultado no es el que querías.** Describe lo que ves y lo que esperabas:

```text
Funciona, pero la fecha sale como 2026-10-14 00:00:00
y yo quiero 14/10/2026. Corrígelo y dame el código completo.
```

Pide siempre **el código completo**. Si el chat te da solo el trozo que cambia, tendrás que adivinar dónde va, y ahí es donde se cuelan los errores.

> **Antes de seguir, guarda una copia.** Cuando tengas una versión que funcione, crea la carpeta `versiones/` y copia ahí `generar.py` con el nombre `generar-v1.py`. Si algo se rompe después, siempre podrás volver a ella.
