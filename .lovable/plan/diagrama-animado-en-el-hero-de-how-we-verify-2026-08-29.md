# Diagrama animado en el hero de "How We Verify"

Reemplazar la ilustración PNG del hero de `/verify` por un diagrama vectorial propio, construido con el mismo esquema de color de la imagen de referencia (fondo celeste, nodos cobalt, acentos coral, tarjeta blanca) y con una animación sutil en loop.

## Qué se ve

- Título del diagrama: "NINE-STAGE VERIFICATION FLOW" (mono, tracking amplio, navy).
- Riel horizontal con 9 nodos circulares numerados 01–09, con ícono pequeño dentro de cada nodo:
  - Nodos estándar en cobalt (#033EAD) con contorno claro.
  - Nodos 04 y 06 (el tramo "Reconcile & Verify") destacados en coral (#fd7239), coherente con la referencia y con los stages ya marcados como críticos.
- Tres etiquetas de grupo bajo el riel: `INTAKE & CAPTURE` (01–03), `RECONCILE & VERIFY` (04–06), `EVIDENCE & FINDING` (07–09), separadas por divisores verticales punteados.
- Tarjeta blanca inferior "TRACE-001" con la línea "Every finding is a verifiable record." y fila `STATUS · VERIFIED` con check coral/verde según el token de marca.
- Los nombres completos de las nueve etapas (Intake & Scoping … Finding & Trace) se toman de `verificationStages` en `content.ts`, y se exponen como tooltip/`<title>` accesible por nodo.

## Animación (pequeña, en loop)

- Trazo del riel con `loop-dash` (ya existe en el sistema) recorriendo de izquierda a derecha.
- Un punto coral viajero (`loop-travel`) sobre el riel.
- Halo pulsante suave en los nodos destacados.
- Fade-in escalonado de nodos y etiquetas al entrar en viewport (`reveal reveal-stagger` + `use-in-view`).
- Todo respeta `prefers-reduced-motion` como el resto del sitio.

## Responsive

- Desktop/tablet: riel horizontal (SVG, `viewBox` escalable).
- Móvil: la misma información en lista vertical compacta de 9 pasos con los tres grupos como encabezados, más la tarjeta TRACE-001 debajo.

## Detalles técnicos

- Nuevo componente `src/components/home/NineStageFlowHero.tsx`, alimentado por `verificationStages` / `emphasizedStages` de `src/components/site/content.ts` (sin duplicar textos).
- En `src/routes/verify.tsx`: se elimina la prop `illustration` del `PageHero` y se pasa el componente como `aside`, quedando en la columna derecha del hero; se retira el import de `il-02-verify-v3`.
- Reutiliza las clases de animación ya definidas en `src/styles.css` (`loop-dash`, `loop-travel`, `loop-halo`, `reveal`), sin CSS nuevo salvo que haga falta un keyframe puntual.
- Accesibilidad: `role="img"` con `<title>`/`<desc>` describiendo las nueve etapas; la versión móvil es una `<ol>` semántica.
- No se toca `MethodologyFlowDiagram` (el diagrama de la sección "Verification Flow" más abajo) para evitar duplicar exactamente lo mismo; el del hero es una versión compacta con agrupación y tarjeta TRACE.
