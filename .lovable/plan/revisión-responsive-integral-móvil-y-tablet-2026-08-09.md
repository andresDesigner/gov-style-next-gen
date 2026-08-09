# Revisión responsive integral (móvil y tablet)

## Qué está pasando hoy

Medido con navegador real a 390px de ancho en las 6 rutas (`/`, `/services`, `/verify`, `/government`, `/about`, `/contact`):

- **Toda la página mide 464px en un viewport de 390px.** Hay ~74px de desbordamiento horizontal en las 6 rutas, así que el sitio se puede desplazar lateralmente y el texto, los CTA y el logo quedan cortados al borde derecho.
- El origen es el mismo en todas: las grillas `grid-cols-12` de hero y secciones no permiten que sus columnas se encojan (celdas con ancho mínimo automático), y algunos contenidos "no rompibles" (IDs mono tipo `TRACE-001 · STATUS: VERIFIED`, píldoras, tablas de 3 columnas) empujan el ancho.
- El card "Engagement Status Preview" del hero se sale del contenedor y su barra de progreso y paso "Verify" quedan fuera de pantalla.
- La franja navy debajo del hero (badge + píldora "AI-assisted | Human-verified") se sale 49px.
- El timeline horizontal de servicios (pasos 1–6) se extiende hasta ~1100px sin un contenedor con scroll propio, arrastrando el ancho de la página en `/services`.
- La tabla de 3 columnas de `/government` y las grillas `grid-cols-3` de datos no colapsan en móvil.
- A 768px (tablet) no hay desbordamiento, pero varias secciones siguen en layout de escritorio comprimido (dos columnas muy estrechas).

## Qué haré

1. **Eliminar el desbordamiento horizontal en las 6 rutas.** Normalizar todas las grillas de 12 columnas para que sus columnas puedan encogerse, añadir contención de ancho a los contenedores de texto y permitir el corte de cadenas mono largas. Objetivo verificable: ancho de scroll = ancho del viewport en 360, 390 y 768px.
2. **Hero móvil.** Apilar título, subtítulo, CTAs, ilustración y card de estado en una sola columna; el card pasa a ancho completo con el pipeline en vertical (Capture / Reconcile / Verify) en lugar de una fila que no cabe.
3. **CTAs y header.** Botones a ancho completo en móvil con altura táctil mínima de 44px; header con logo + botón de menú en grilla de dos columnas para que nunca se recorte.
4. **Franja navy y píldoras.** Que envuelvan en varias líneas en lugar de forzar ancho.
5. **Timeline de servicios.** En móvil pasa a lista vertical (o carrusel con scroll contenido y borde de desvanecido), sin arrastrar el ancho de la página; en escritorio queda igual.
6. **Tablas y grillas de datos** (`/government`, métricas del home, `/contact`): apiladas en móvil como pares etiqueta/valor, en grilla desde `sm`/`md`.
7. **Formulario de contacto:** campos a una columna, padding reducido en móvil, `font-size` de entradas ≥16px para evitar el zoom automático de iOS.
8. **Ajuste tablet (768–1024px):** secciones que hoy quedan en dos columnas estrechas pasan a una columna o a proporciones más amplias.
9. **Tipografía fluida coherente:** revisar los `clamp()` para que H1 y números grandes no se corten a 360px.

## Detalles técnicos

- Cambios solo en presentación: `src/components/home/*`, `src/components/site/*`, rutas de página y utilidades en `src/styles.css`.
- Patrón aplicado en cada fila mixta: `grid-cols-[minmax(0,1fr)_auto]` en móvil, `min-w-0` en contenedores de texto, `shrink-0` en iconos, `truncate`/`break-words` según el caso; promoción a `flex`/multi-columna desde `sm:`/`lg:`.
- Los carruseles usan `overflow-x-auto` + `overscroll-x-contain` dentro de un contenedor que no propaga su ancho.
- Sin cambios en la paleta, tipografías ni en el contenido del brief.

## Verificación

Recorrido automatizado con navegador a 360, 390, 768 y 1024px sobre las 6 rutas: cero elementos que sobrepasen el viewport, capturas antes/después y comprobación de que los objetivos táctiles llegan a 44px.
