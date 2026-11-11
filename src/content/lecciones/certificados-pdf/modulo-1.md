---
taller: certificados-pdf
modulo: 1
titulo: Descubre qué vamos a automatizar
resumen: El problema, el resultado y el camino que vamos a recorrer.
minutos: 10
---

## El problema

Acaba un curso con 120 asistentes y alguien tiene que hacer los certificados. Lo habitual es abrir una plantilla de Word, copiar el nombre de la primera persona, cambiar el DNI, guardar como PDF y repetir. Son unas dos horas de trabajo y, a la persona 30, es fácil equivocarse con un nombre.

Ese trabajo tiene tres rasgos que lo delatan: **se repite**, **sigue siempre la misma regla** y **los datos ya están en un Excel**. Cuando una tarea cumple las tres cosas, un programa lo hace mejor y mucho más rápido.

## El resultado

Al terminar este taller tendrás:

- Una hoja de Excel con una fila por persona.
- Un pequeño programa en Python.
- Una carpeta `certificados/` con un PDF por persona, cada uno con su nombre de archivo.

Añadir más personas no cambia nada: el programa tarda lo mismo con 10 filas que con 1.000.

## El camino

```text
asistentes-cursos.xlsx  ──►  generar-certificados.py  ──►  certificados/
 (tus datos)         (la receta)       certificado-12345678A.pdf
                                       certificado-87654321B.pdf
                                       ...
```

1. **Preparas los datos** en Excel con unas pocas reglas sencillas.
2. **Ejecutas el programa**, que lee cada fila y escribe un PDF.
3. **Lo personalizas** con tu logo, tus colores y tus textos.

## Lo que necesitas

- Un ordenador con Windows, macOS o Linux.
- Python 3.10 o superior. En el módulo 3 te explico cómo comprobarlo.
- Ganas de ver tu primer programa funcionando. No hace falta saber programar.

> **Cómo está pensado este taller.** No vas a empezar aprendiendo qué es una variable o un bucle. Primero verás el programa funcionando y después entenderás cada parte, justo cuando la necesites.
