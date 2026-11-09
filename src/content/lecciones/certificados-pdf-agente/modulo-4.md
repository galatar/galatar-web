---
taller: certificados-pdf-agente
modulo: 4
titulo: Mejora la plantilla, el Excel y el programa
resumen: Separas el diseño del código con una imagen de fondo e iteras con el agente sin perder el control.
minutos: 20
---

## Vueltas cortas, también con un agente

Un agente puede hacer muchos cambios de golpe. Precisamente por eso conviene frenarlo: **un cambio cada vez**, lo pruebas, lo guardas y pasas al siguiente. Si pides cinco cosas y una sale mal, revisarlo todo te costará más que haberlo hecho por partes.

Puedes tocar tres cosas: **la plantilla**, **el Excel** y **el programa**.

## 1. La plantilla: un fondo diseñado por ti

Diseña el fondo en PowerPoint, Canva o Word: A4 horizontal, con tu logo, tu marco y tus colores, y **deja en blanco** el hueco del nombre y del texto. Expórtalo como imagen y guárdalo como `fondo.png` en la carpeta.

```text
He puesto fondo.png en la carpeta. Úsalo como fondo de cada certificado,
ocupando toda la página, y escribe el texto encima.
Quita el título CERTIFICADO, porque ya viene en la imagen.
El nombre, más grande y en negrita.
Genera uno de prueba y dime si el texto cae dentro del hueco blanco.
```

Algunos agentes pueden mirar el PDF que generan y ajustar la posición solos. Si el tuyo no puede, ábrelo tú y dale indicaciones concretas: «sube el nombre 10 mm», «deja 30 mm de margen a cada lado».

## 2. El Excel: una columna nueva

Añade al Excel de prueba una columna `firma` con el nombre de quien firma y pide:

```text
He añadido la columna «firma» a asistentes.xlsx.
Pon ese texto abajo a la derecha, encima de una línea de firma.
Además, que el programa busque las columnas por su nombre
y no por su posición, para que no se rompa si cambio el orden.
Pruébalo cambiando tú el orden de las columnas en una copia del Excel.
```

Fíjate en la última línea. Le pides que **pruebe el caso difícil**, no solo el fácil.

## 3. El programa: que avise de los problemas

```text
Quiero que antes de generar nada revise el Excel y avise si:
- falta alguna columna,
- hay algún DNI vacío o repetido,
- hay alguna fecha que no es una fecha.
Si encuentra problemas, que los liste con el número de fila
y no genere ningún certificado.
Pruébalo con un Excel estropeado a propósito y luego bórralo.
```

## Volver atrás

Si un cambio no te convence:

```text
Este cambio no me gusta. Vuelve a la última versión
de versiones/ y dime cuál has recuperado.
```

## Ejercicio

Abre una conversación nueva con el agente y pídele solo esto: «Resúmeme en qué punto está el proyecto». Si te responde bien, tu archivo de instrucciones está haciendo su trabajo. Si no, pídele que lo complete.
