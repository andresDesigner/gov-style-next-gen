# Iconos más grandes, naranja de acento y entradas animadas

## Objetivo
Dar protagonismo visual a los iconos del Home, incorporar el naranja aprobado como color de acento complementario al azul de marca, y añadir animaciones de entrada (fade-in) suaves y consistentes.

## 1. Naranja como color de sistema (no solo de ilustración)
Hoy el naranja `#FF8C42` existe únicamente dentro de ilustraciones. Se promueve a token de UI:

- `--signal` = `#FF8C42` (naranja de marca, uso decorativo: fondos suaves, aros, puntos, trazos de icono).
- `--signal-strong` = un naranja más profundo (aprox. `#C2410C`) para texto o iconos sobre fondo claro, garantizando contraste WCAG AA.
- Regla de uso: el azul cobalto sigue siendo el color de acción (botones, links, estados). El naranja se usa solo para iconografía, numeración, marcadores de progreso y micro-acentos — nunca para CTAs ni para texto de cuerpo.

## 2. Iconos más grandes y con más presencia
En toda la Home los iconos pasan de 20px a un tamaño ilustrativo:

- **Service cards (S-01 a S-04):** icono de 20px a 32px, dentro de un cuadro de 56px con fondo naranja suave (`--signal` al 10%) y trazo del icono en azul. En hover el fondo se satura ligeramente y el icono sube 2px.
- **Cards Phase 2 (S-05, S-06):** mismo tamaño, en tono neutro para mantener la diferencia de estado.
- **Timeline horizontal de "Six services…":** los puntos crecen de 28px a 48px, el icono interno de 14px a 22px, borde de 1.5px, fondo blanco y aro naranja tenue. La línea conectora se alinea al nuevo centro y se recorta detrás de los nodos.
- **Rail de 6 fases (Engagement Model):** nodos de 52px a 64px con icono de 28px, el número de paso en naranja mono.
- Se sube `strokeWidth` de 1.5 a 1.75 en los tamaños grandes para que no se vean delgados.

## 3. Animaciones de entrada
- Todos los bloques con iconos usan el sistema `useInView` + `reveal` ya existente, con escalonado de ~70ms.
- Los iconos suman su propia entrada: fade + subida de 6px + escala de 0.92 a 1, con leve retraso respecto a la card.
- En el timeline los nodos aparecen en cascada de izquierda a derecha, sincronizados con la línea que ya se dibuja.
- Todo bajo `motion-safe` y respetando `prefers-reduced-motion` (ya configurado globalmente).

## Detalles técnicos
- `src/styles.css`: nuevos tokens `--signal` / `--signal-strong`, registro en `@theme inline` (`--color-signal`), y keyframe `icon-pop` más utilidad `.reveal-icon`.
- `src/components/home/ServiceIcon.tsx`: `strokeWidth` por defecto parametrizable.
- `src/components/home/Home.tsx`: tamaños de icono, contenedor tipo tile en service cards y nodos del timeline.
- `src/components/site/EngagementRail.tsx`: nodos y iconos más grandes, número en naranja.
- Sin cambios de contenido ni de estructura de secciones.

## Verificación
- Screenshots en desktop y mobile de la sección de servicios y del rail de fases.
- Chequeo de contraste del naranja sobre fondos claros y `tsgo` limpio.
