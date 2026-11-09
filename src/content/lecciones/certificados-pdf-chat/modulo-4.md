---
taller: certificados-pdf-chat
modulo: 4
titulo: Mejora la plantilla, el Excel y el programa
resumen: Separas el diseño del código con una imagen de fondo y aprendes a iterar con el chat sin perder el hilo.
minutos: 20
---

## Ahora iteras

Ya tienes un programa que funciona. A partir de aquí lo mejorarás a base de vueltas cortas: pides un cambio, lo pruebas, guardas la versión y vas a por el siguiente. Hay tres cosas que puedes tocar: **la plantilla**, **el Excel** y **el programa**.

## La regla de las vueltas cortas

1. **Un cambio cada vez.** Si pides cinco cambios y algo falla, no sabrás cuál ha sido.
2. **Pega siempre el programa actual.** El chat se pierde en conversaciones largas y puede partir de una versión antigua. Empezar con «Este es mi generar.py actual:» lo evita.
3. **Pide el código completo.** Siempre.
4. **Prueba y guarda.** ¿Funciona? Cópialo a `versiones/` con el número siguiente.

Si la conversación se hace muy larga y el chat empieza a equivocarse, abre una nueva y pega tu última versión buena. Es como empezar con la mesa limpia.

## 1. La plantilla: un fondo diseñado por ti

Dibujar el certificado con código es incómodo. Es más fácil que el diseño esté en una imagen y que el programa solo escriba los datos encima.

Diseña el fondo en PowerPoint, Canva o Word: tamaño A4 horizontal, con tu logo, tu marco y tus colores, y **deja en blanco** el hueco del nombre y del texto. Expórtalo como imagen y guárdalo como `fondo.png` en tu carpeta. Después pide:

```text
Este es mi generar.py actual:
[pega el programa]

Quiero que cada página use como fondo la imagen fondo.png,
ocupando toda la página A4 horizontal, y que el texto se escriba encima.
Quita el título CERTIFICADO, porque ya viene en la imagen.
El nombre debe ir más grande y en negrita, centrado a unos 90 mm del borde superior.
Dame el código completo.
```

Lo más probable es que la posición no quede perfecta a la primera. Pide ajustes concretos: «sube el nombre 10 mm», «el texto se sale por la derecha, déjale 30 mm de margen a cada lado».

## 2. El Excel: una columna nueva

Imagina que ahora cada curso tiene su propia persona que firma. Añade al Excel una columna `firma` y pide:

```text
Este es mi generar.py actual:
[pega el programa]

He añadido a asistentes.xlsx una columna «firma» al final.
Quiero que el texto de esa columna aparezca abajo a la derecha,
encima de una línea, como si fuera la firma.
Además, que el programa busque las columnas por su nombre
y no por su posición, para que no se rompa si cambio el orden.
Dame el código completo.
```

La segunda petición es importante: hace tu programa más robusto ante cambios en el Excel, que es lo que más va a cambiar en la vida real.

## 3. El programa: que avise de los problemas

Un buen programa no solo funciona cuando todo va bien, también avisa cuando algo va mal:

```text
Este es mi generar.py actual:
[pega el programa]

Quiero que antes de generar nada revise el Excel y me avise si:
- falta alguna columna,
- hay algún DNI vacío o repetido,
- hay alguna fecha que no es una fecha.
Si encuentra problemas, que los liste con el número de fila
y que no genere ningún certificado.
Dame el código completo.
```

## Ejercicio

Estropea tu Excel a propósito: borra un DNI, repite otro y escribe «mañana» en una fecha. Ejecuta el programa y comprueba que te avisa de los tres problemas.
