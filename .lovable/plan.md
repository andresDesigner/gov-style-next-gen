## Objetivo

Quitar la sensación de "PowerPoint con mucho texto": incorporar ilustración vectorial flat con personajes, reducir densidad textual en los diagramas y agregar movimiento controlado (nivel 4/5) en hero, diagramas, servicios y secciones narrativas.

## Nota sobre la paleta (decisión necesaria)

El estilo de referencia usa coral/naranja + azul-violeta + mostaza. El brief del cliente fija navy `#031436` y cobalt `#033EAD`. Propuesta: mantener navy/cobalt como base estructural y usar **coral `#FF8C42` y mostaza como acentos exclusivos de las ilustraciones** (nunca en UI, botones ni texto). Así el sitio gana calidez y personalidad sin violar la especificación. El violeta se sustituye por el cobalt del brief, que es prácticamente el mismo rol cromático.

## 1. Set de ilustraciones (nuevas)

Generar 5 ilustraciones flat, mismo sistema visual: personajes sin rasgos faciales, proporciones estilizadas, formas geométricas limpias, fondo circular/orgánico celeste pastel, íconos decorativos (destello, cruz, líneas de movimiento). Sin gradientes ni sombras complejas.

- **IL-01 Hero** — dos personajes: uno señalando una pantalla con hallazgos de accesibilidad, otro con laptop sobre pila de libros. Es la pieza principal.
- **IL-02 Verificación** — persona con audífonos junto a una ventana de lector de pantalla (para "How We Verify").
- **IL-03 Documentos** — persona reparando/etiquetando un documento (sección PDF / remediación).
- **IL-04 Gobierno / audiencias** — tres figuras institucionales conectadas a rutas (encabeza el diagrama de routing).
- **IL-05 Deadline** — figura frente a un calendario/línea de tiempo (sección Deadline Reality).

Se generan como PNG con fondo transparente y se suben como assets CDN.

## 2. Hero rediseñado

- Layout asimétrico 55/45: a la izquierda H1 + subtítulo + CTAs; a la derecha **IL-01** con el card "Engagement Status Preview" superpuesto parcialmente sobre la ilustración (overlap real, no dos bloques apilados).
- El card se reduce a lo esencial: badge TRACE, stepper, barra de progreso. Sale texto sobrante.
- Movimiento: entrada escalonada de la ilustración por capas (fondo circular → personajes → íconos decorativos), barra de progreso que se anima de 0 a 38%, chispas con flotación sutil en loop.

## 3. Diagramas: menos texto, más ritmo

Regla transversal: cada diagrama pierde entre 30% y 50% de su texto visible; lo que se elimina de la superficie se conserva en `<desc>` y en la lista semántica para accesibilidad.

- **MethodologyFlowDiagram** — de 9 cajas iguales a un carril con nodos: número grande, etiqueta corta, y detalle solo en el nodo activo/hover. Animación de trazado de la línea al entrar en viewport y avance secuencial de nodos.
- **DocumentArchitectureDiagram** — sustituir el bloque de texto centrado por un badge compacto en la banda de discrepancia; conectores animados que "caen" de la capa de tags a la capa expuesta; los nodos que fallan pulsan una vez en coral.
- **AudienceRoutingDiagram** — encabezado con **IL-04**; las líneas se dibujan de rol a destino al entrar en viewport; hover resalta una ruta y atenúa las otras.
- **DeadlineCoverageDiagram** — barra de progreso temporal que crece al entrar en viewport y contador de meses restantes que se anima; **IL-05** al costado.
- **PhaseScopeDiagram** — los puntos aparecen en cascada por columna en vez de todos a la vez.

## 4. Service cards con más carácter

- Número grande fantasma (01–06) al estilo de la referencia adjunta, en gris muy claro, con el ícono de línea en la esquina opuesta.
- Hover: el número toma cobalt, la card se eleva y el ícono hace un micro-movimiento.
- Entrada escalonada de la grilla al hacer scroll.

## 5. Secciones narrativas

- Insertar **IL-02** en "How We Verify" y **IL-03** en la sección de documentos, en composiciones alternadas (zigzag) para romper la monotonía vertical.
- Contadores numéricos animados en las métricas.
- Banda CTA final: acentos decorativos ligeros del sistema de ilustración sobre el navy.

## 6. Detalles técnicos

- Hook `useInView` propio (IntersectionObserver, sin dependencias nuevas) para disparar animaciones una sola vez al entrar en viewport.
- Animaciones SVG con `stroke-dasharray` / `stroke-dashoffset` y transiciones CSS; nada de librerías pesadas.
- Todas las animaciones anuladas bajo `prefers-reduced-motion` (la regla global ya existe en `styles.css`; se verifica que cubra los nuevos casos, incluido el estado final visible).
- Las ilustraciones se marcan `aria-hidden` cuando son decorativas y llevan `alt` descriptivo cuando aportan significado.
- Tokens nuevos en `styles.css`: `--illus-coral`, `--illus-mustard`, `--illus-sky`, restringidos por convención al uso ilustrativo.

## Entregable

Se genera primero **IL-01** para validar el estilo contigo antes de producir las otras cuatro, así evitamos rehacer el set completo si la dirección no convence.
