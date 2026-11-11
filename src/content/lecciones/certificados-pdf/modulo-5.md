---
taller: certificados-pdf
modulo: 5
titulo: Descarga y utiliza tu herramienta
resumen: Los recursos del taller y una lista para usarlo en tu trabajo real con tranquilidad.
minutos: 10
---

## Lo que te llevas

- **Plantilla Excel.** La hoja de prácticas con las columnas preparadas y datos inventados.
- **Programa Python.** El `generar-certificados.py` completo, con todas las mejoras del módulo 4 y comentado línea a línea.
- **Manual de uso.** Una guía en PDF para instalarlo, usarlo y adaptarlo. El PDF lo genera, por supuesto, la propia herramienta.

> **Prototipo.** Los recursos descargables están en preparación. Mientras tanto, todo el código que necesitas está en los módulos 3 y 4.

## Antes de usarlo con datos reales

1. **Prueba con datos inventados.** Ejecuta el programa con tres filas falsas y revisa los PDF con calma.
2. **Revisa uno de cada tipo.** Un nombre largo, uno con tilde y uno con dos apellidos compuestos. Si esos salen bien, saldrán todos.
3. **Guarda los datos en un sitio seguro.** Los certificados llevan DNI. No los dejes en el escritorio ni en una carpeta compartida.
4. **Borra lo que ya no necesites.** Cuando hayas entregado los certificados, elimina las copias de trabajo.

## Posibles mejoras

### Una persona, varios cursos

Esta versión hace un certificado por persona. Si alguien ha hecho dos cursos, aparece dos veces en la hoja con el mismo DNI, y el programa guarda los dos PDF con el mismo nombre de archivo: el segundo pisa al primero sin avisar.

La solución es dar a cada curso un código y ponerlo en el nombre del archivo:

1. **Añade una columna `codigo` al final de la hoja**, con un identificador corto para cada curso: `EXC-01`, `PY-02`... Sin espacios ni barras, porque va a formar parte del nombre del archivo.
2. **Lee la columna nueva en el bucle.** Python reparte las columnas por orden, así que `codigo` va también al final:

   ```python
   for nombre, dni, curso, horas, fecha, codigo in hoja.iter_rows(min_row=2, values_only=True):
   ```

3. **Ponla en el nombre del archivo**, en la última línea del bucle:

   ```python
   pdf.output(str(carpeta / f"{codigo}-{nombre_archivo}-{dni}.pdf"))
   ```

Ahora Lucía tendrá `EXC-01-lucía-martín-ortega-12345678A.pdf` y `PY-02-lucía-martín-ortega-12345678A.pdf`. Con el código delante, al ordenar la carpeta por nombre los certificados quedan agrupados por curso.

Con este cambio, la regla 2 del módulo 2 se relaja: un DNI ya puede repetirse, pero no la pareja DNI y código.

## Y ahora, ¿qué más puedes automatizar?

Lo que has aprendido sirve para mucho más que certificados. Cambia el texto y tendrás:

- **Cartas personalizadas** para cada persona de una lista.
- **Justificantes** de asistencia, de pago o de entrega.
- **Fichas individuales** con los datos de cada fila de un Excel.
- **Etiquetas** para carpetas, cajas o expedientes.

La receta es siempre la misma: una hoja con una fila por documento, un bucle que la recorre y una plantilla que se rellena.

## ¿Qué te ha parecido?

Este taller es uno de los primeros que he creado para este proyecto. Si lo has probado, me ayudaría mucho saber dónde te has atascado y qué otra tarea repetitiva te gustaría quitarte de encima. 
