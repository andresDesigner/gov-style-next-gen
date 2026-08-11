# Rediseño de las páginas internas al nivel del Home

El Home queda como referencia congelada. El objetivo es que `/services`, `/verify`, `/government`, `/about` y `/contact` usen exactamente el mismo lenguaje visual: ilustraciones flat con acentos coral, iconos grandes en naranja `#fd7239`, azul de marca en encabezados de tabla, secciones alternadas claro/navy, animaciones de entrada escalonadas y layouts asimétricos de dos columnas.

## Qué se aplica en todas las páginas

- **Hero de página**: se amplía `PageHero` para aceptar una ilustración lateral opcional (mismo tratamiento del hero del Home: blob pastel, acentos flotantes, reveal por capas) y un card/badge de contexto. En móvil se apila.
- **Iconografía**: iconos a 32px, sin caja de fondo, en coral `#fd7239` para listas y tarjetas de servicio; azul de marca para iconos dentro de tablas/datos.
- **Ritmo de secciones**: alternancia fondo claro / franja navy con kicker mono, igual que el Home, para que ninguna página sea un muro plano de texto.
- **Animaciones**: `reveal` + stagger con `useInView`, entradas horizontales alternadas en filas, y respeto de `prefers-reduced-motion`.
- **CTA**: "Book a Readiness Call" sólido cobalt con icono Phone, secundario outline; `CtaBand` navy al cierre de cada página.

## Página por página

**Services** — hero con ilustración propia; las 6 tarjetas con TRACE como título principal (idéntico al Home), separador de fase; el rail de engagement con nodos grandes coral y línea animada; una franja navy con la promesa de evidencia; ilustración acompañando el bloque de alcance.

**Verify** — hero con ilustración de verificación; los diagramas existentes (metodología, arquitectura de documento) reencuadrados en layout de dos columnas con texto al lado, no apilados; tabla de datos con encabezado azul de marca e iconos azules bajo cada etiqueta; card de artefacto de evidencia destacada.

**Government** — hero con ilustración de sector público; bloque de realidad de deadlines reutilizando el patrón de dos tarjetas + barra de progreso; diagrama de routing de audiencias integrado a la derecha del texto; franja navy con el trust statement.

**About** — hero con ilustración; grid de principios con número gigante e icono coral por principio; bio del fundador en layout asimétrico con retrato/ilustración; franja navy de credenciales.

**Contact** — hero con ilustración; formulario en card blanco con jerarquía clara y a su lado un panel de "qué pasa después" en 3 pasos con iconos coral; datos de contacto en tabla con encabezado azul.

## Ilustraciones

Se reutilizan `il-02-verify`, `il-03-docs`, `il-04-gov` y `il-05-deadline` donde encajan y se generan las que falten (services, about, contact) en el mismo estilo flat: figuras planas, paleta navy/cobalt + coral, sin sombras realistas, fondo transparente para el blob pastel.

## Notas técnicas

- Extender `PageHero` (props `illustration`, `aside`) en vez de duplicar heroes por página.
- Extraer los patrones ya validados del Home a componentes compartidos reutilizables (fila de datos con icono, tarjeta de servicio, franja navy) para evitar divergencia visual.
- No se toca `Home.tsx` salvo para extraer componentes sin cambio de render.
- Mantener `head()` propio de cada ruta y las correcciones responsive existentes (sin overflow a 390px).
