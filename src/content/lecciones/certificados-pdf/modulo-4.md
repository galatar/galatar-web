---
taller: certificados-pdf
modulo: 4
titulo: Personaliza los documentos
resumen: Logo, colores, marco y nombres de archivo legibles. Lo conviertes en tu certificado.
minutos: 20
---

## Del ejemplo a tu certificado

El programa del módulo 3 funciona, pero el resultado es sobrio. Ahora vas a cambiar cuatro cosas, una a una, ejecutando el programa después de cada cambio para ver qué pasa. Esa es la mejor forma de aprender: tocar, ejecutar y mirar.

## 1. Añade tu logo

Pon un `logo.png` en la carpeta y añade esta línea justo después de `pdf.add_page()`:

```python
pdf.image("logo.png", x=20, y=15, w=35)
```

`x` e `y` son la posición en milímetros desde la esquina superior izquierda y `w` es el ancho. Prueba otros valores hasta que te guste.

## 2. Ponle color

Antes del título, cambia el color del texto. Los colores se escriben en RGB, tres números del 0 al 255:

```python
pdf.set_text_color(160, 26, 66)   # granate para el título
pdf.set_font("Helvetica", "B", 32)
pdf.cell(0, 40, "CERTIFICADO", align="C", new_x="LMARGIN", new_y="NEXT")
pdf.set_text_color(40, 40, 40)    # gris oscuro para el resto
```

## 3. Dibuja un marco

Un rectángulo a 10 mm del borde le da un aire más formal. Añádelo después de `add_page()`:

```python
pdf.set_draw_color(240, 177, 63)
pdf.set_line_width(1.2)
pdf.rect(10, 10, pdf.w - 20, pdf.h - 20)
```

`pdf.w` y `pdf.h` son el ancho y el alto de la página, así el marco se adapta si cambias el tamaño del papel.

## 4. Nombres de archivo que se entiendan

`certificado-12345678A.pdf` es único, pero no dice de quién es. Cambia la última parte del bucle:

```python
nombre_archivo = nombre.lower().replace(" ", "-")
pdf.output(str(carpeta / f"{nombre_archivo}-{dni}.pdf"))
```

Ahora tendrás `lucía-martín-ortega-12345678A.pdf`.

## Ejercicio

Añade una línea de firma al pie, con el nombre y el cargo de quien firma. Pista: `pdf.set_y(-45)` te coloca a 45 mm del borde inferior y desde ahí puedes usar `pdf.cell` como en el título.

> **¿Y si un nombre lleva caracteres raros?** La fuente Helvetica que trae fpdf2 cubre el español sin problemas (tildes, eñes, comillas angulares). Si necesitas otros alfabetos, puedes cargar cualquier fuente TTF con `pdf.add_font()`. Lo verás en el manual del taller.
