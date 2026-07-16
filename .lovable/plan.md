## Diagnóstico

El brief bloquea muchas cosas visuales por buena razón (credibilidad ante procurement y legal):
- Paleta: navy-900 `#031436`, cobalt-600 `#033EAD`, azure-500 `#3079FF`, paper-50/100.
- Tipografía: una sola familia (Inter o Source Sans 3) + mono para evidencia.
- 8pt grid, prosa 72ch, sección máx 1200px, botones primarios con radius 0.
- Prohibido: gradientes decorativos, blobs, mascotas, ilustraciones stock, fotos de personas sin aprobación, estética SaaS-flashy.
- WCAG 2.1 AA obligatorio; azure NO puede usarse como texto de cuerpo.

Dentro de ese corsé sí hay espacio para verse 2026 y no genérico. La estrategia es **no romper reglas, sino subir el nivel de ejecución** en composición, tipografía, densidad informativa y micro-interacción — territorio donde los sitios de gobierno reales (y la mayoría de competencia legal-tech) se ven aburridos.

## Ejes de modernización propuestos (todos compatibles con el brief)

**1. Tipografía como sistema editorial, no decorativa**
- H1 grande, tracking negativo (-0.02em), peso 500-600, no 700+. Se ve editorial, no corporate.
- Escala tipográfica fluida con `clamp()` en lugar de breakpoints duros. Tendencia 2026 sólida.
- Números tabulares (`font-variant-numeric: tabular-nums`) en fechas de deadline, métricas y tablas de evidencia — detalle que lee como "instrumento de precisión".
- Uso deliberado de la monoespaciada permitida: metadata ("Last reviewed", citas a ADA.gov, IDs de hallazgos) en mono. Da textura sin romper la regla de un solo typeface principal.

**2. Composición asimétrica sobre grid de 12, no centrado genérico**
- Hero a 8 columnas alineado a la izquierda con metadata de deadlines en columna lateral de 4 — se ve como documento oficial serio, no landing SaaS.
- Sección "Deadline reality" con línea de tiempo horizontal densa (2027 / 2028) usando la grilla de 8pt como estructura visible, no oculta.
- Cards de servicios 4+2 (como marca el brief) con jerarquía por peso y borde, no por color: primarias con borde `navy-900`, secundarias Phase 2 con borde punteado `paper-300`. Mantiene la regla.

**3. Densidad informativa "government-fluent" bien resuelta**
- Trust strip como línea de datos, no como logos genéricos ("Trusted by...").
- Bloque de operaciones (Methodology / Secure intake / Government-ready) en formato de "ficha técnica" con labels en mono uppercase pequeños y valores en navy — lee como capability statement, no como feature grid.
- Modelo de engagement (6 pasos) como stepper horizontal minimal con líneas conectoras, no cards infladas.

**4. Micro-interacción sobria (respeta `prefers-reduced-motion`)**
- Focus rings en azure-500 de 3px con offset — cumple regla del brief (azure solo para focus/acentos grandes) y a la vez se ve 2026.
- Hover en links: underline animada `text-decoration-thickness` de 1px→2px, sin transform ni glow.
- Scroll-driven reveal muy sutil (opacity 0→1, 200ms) desactivado con `prefers-reduced-motion`. Nada de parallax, nada de blobs animados.

**5. Detalles "evidence-toned" que sustituyen al decorado prohibido**
- En vez de ilustraciones: bloques de "evidencia" reales — snippet de code review con anotación ARIA, diagrama SVG accesible del flow Behavioral Verification (con ARIA label + equivalente en texto, como pide sección 12).
- Callouts con banda lateral izquierda navy de 2px + label mono, estilo nota al pie de documento normativo.
- Footer denso tipo mapa de sitio (ya está en el HTML del cliente) con jerarquía tipográfica clara — se ve institucional bien hecho.

**6. Accesibilidad como estética, no como afterthought**
- Skip-to-content visible siempre en focus, no oculto. Convertirlo en decisión de diseño.
- Indicador visible del idioma actual EN/ES (bilingüe está en el brief).
- Test a 200% zoom y 320px reflow como parte del entregable — el layout se diseña ya pensando en eso.

## Lo que explícitamente NO vamos a hacer (aunque sea "tendencia 2026")

- Sin glassmorphism, sin gradientes de marca, sin bento grids decorativos, sin dark mode (no está pedido y agrega superficie de QA de contraste), sin ilustraciones 3D, sin fotos de stock, sin animaciones scroll-jack, sin AI-generated hero art.
- Botones primarios mantienen `border-radius: 0` como pide el brief. El resto (cards, inputs) puede llevar 4-6px máximo para no romper la sensación gubernamental.

## Estructura del home (respetando el mockup del cliente)

Mantenemos las 10 secciones del `homeACT.html`: nav → hero con H1 v2.0 + chips de deadlines + doble CTA → trust strip firm-level → deadline reality → cards 4+2 → engagement 6 pasos → methodology preview → who we help → operations/trust → CTA final navy → footer sitemap.

Cambia el **cómo se ejecuta cada bloque**, no el qué.

## Entregable siguiente

Al aprobar este plan, propongo generar 3 direcciones renderizadas del home usando `design--create_directions` con la paleta y tipografía bloqueadas como constraint duro, variando solo composición, densidad y jerarquía. Después el cliente elige una y se implementa en TanStack Start.

## Nota técnica (para el equipo)

- Stack del brief: Astro 4 + Tailwind + Cloudflare Pages. Este proyecto Lovable usa TanStack Start + Tailwind v4 — la implementación aquí sirve como referencia de diseño de alta fidelidad; el port a Astro es trivial porque son utilidades Tailwind + HTML semántico.
- Tokens en `src/styles.css` con los hex del brief convertidos a `oklch` (mantener hex originales como comentario para trazabilidad con logo vectors).
- Inter vía `<link>` en `src/routes/__root.tsx` (no `@import` en CSS por regla de Tailwind v4).
