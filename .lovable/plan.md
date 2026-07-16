## Objetivo

Eliminar la sensación "plana / monotónica" actual **sin adoptar Material Design 3 y sin pedir cambios al cliente**. Todo se resuelve dentro de las reglas ya firmadas: paleta bloqueada, una tipografía + mono, `radius: 0` en botones primarios, prohibido gradientes / blobs / SaaS-flashy, azure solo en focus/acentos grandes, WCAG 2.1 AA.

La palanca es tipográfica y compositiva, no decorativa.

## Diagnóstico de por qué se ve plano hoy

1. **Escala tipográfica corta.** El H1 llega a `text-6xl/7xl` pero los H2 se quedan en `text-3xl/4xl` y el resto vive en `text-sm/base`. La página no tiene "picos".
2. **Todas las secciones pesan igual.** Fondo alterna paper-50 / paper-100 / secondary-40, todo muy cercano en luminosidad. Solo el CTA final rompe con navy sólido.
3. **Cobalt y azure casi no aparecen.** Están definidos como tokens pero el 95% de la superficie es navy sobre paper. La paleta bloqueada se está subutilizando.
4. **Números y datos no son elementos de composición.** Las fechas `April 26, 2027` viven en `text-sm` cuando podrían ser piezas visuales de 60-80px que sostienen la sección.
5. **Reglas horizontales/verticales apenas se ven** (`border-foreground/10` = casi invisible). El "government-feel" de reglas gruesas no se está ejerciendo.

## Cambios de sistema (aplican a V1, V2, V3)

Editar `src/styles.css` — solo tokens y utilidades, no romper nada existente:

**Escala tipográfica fluida agresiva con `clamp()`**
- `--fs-display`: `clamp(3.5rem, 8vw, 8rem)` — para números-pieza y hero de V3.
- `--fs-h1`: `clamp(2.75rem, 6vw, 5.5rem)`.
- `--fs-h2`: `clamp(2rem, 4vw, 3.5rem)`.
- `--fs-eyebrow`: `0.6875rem` con `letter-spacing: 0.25em` (unifica los mono uppercase).

**Nuevas utilidades (`@utility`, no `@layer`)**
- `.rule-heavy`: `border-top: 2px solid var(--color-foreground);` — regla gruesa institucional para arrancar secciones.
- `.rule-medium`: `border-top: 1px solid color-mix(in oklab, var(--color-foreground) 35%, transparent);` — reemplaza el `border-foreground/10` casi invisible.
- `.surface-navy`: fondo `--foreground` + `color: --background` — para bandas alternadas.
- `.surface-cobalt`: fondo `--primary` + `color: --primary-foreground` — banda de acento (una sola vez por página, máximo dos).
- `.num-display`: `font-variant-numeric: tabular-nums; font-feature-settings: "ss01";` + `font-size: var(--fs-display); line-height: 0.85; letter-spacing: -0.04em;` — para las fechas y métricas como pieza visual.
- `.eyebrow`: aplica la escala eyebrow + `font-family: var(--font-mono); text-transform: uppercase;`.

**Nada de esto agrega**: sombras, gradientes, radius > 0, colores nuevos, animaciones, fuentes nuevas. Solo tokens y utilidades sobre lo que ya está firmado.

## Cambios por variante

### V1 — Sober institutional

- **Masthead:** subir el logotipo `ACT Verified` a `--fs-h2` con `letter-spacing: 0.3em`, y separar del subtítulo con `rule-heavy` en vez de `border-b-2`. Se lee más como cabecera de periódico impreso.
- **Hero:** las dos fechas (2027, 2028) suben de chip mono pequeño a **par de números `num-display`** alineados a la derecha del H1, formato `04.26.27 / 04.26.28` en tabular. Se convierten en el peso visual dominante junto al H1.
- **Sección "Deadline reality":** insertar antes de la prosa un bloque `num-display` que diga `≈ 9 mo` o `2027` a escala completa. La sección arranca con un pico, no con eyebrow + H2.
- **Services (annotated list):** los números `01–06` actuales suben a `num-display` reducido (~72px), en `text-foreground/20` como marca de agua a la izquierda de cada fila. Cambio de escala, no de radius.
- **Ritmo cromático:** intercalar un bloque `surface-navy` entre §03 Engagement y §04 Methodology (una franja completa de citas o de la mission statement corta). Rompe el gris continuo.

### V2 — Dense operational

- **Trust strip navy** actual se queda, pero se le agrega debajo una **fila de contra-datos** en `surface-cobalt` con 3 métricas grandes en `num-display` (ej. `50k+` residentes / `2027` deadline / `A/AA` standard). Aparece el cobalt-600 que hoy no se usa.
- **Grid de deadline reality:** los valores `WCAG 2.1 AA`, `≈ 9 mo`, `Web · App · PDF`, `Behavioral` pasan de `text-2xl` a `num-display` reducido (~56px) en las dos primeras celdas (Standard y Runway) y se mantienen menores en las otras dos — jerarquía dentro del grid.
- **Engagement stepper:** los `01–06` pasan de `text-[10px]` mono a `num-display` a ~48px en color `text-primary` en el paso activo y `text-foreground/25` en los demás. El stepper se vuelve la pieza visual dominante de la sección.
- **Operations triptych:** cambiar el fondo de esta sección a `surface-navy` completa, invirtiendo la paleta. Aparece el segundo bloque oscuro además del CTA final — la página respira con dos anclas navy en vez de una sola.
- **Reglas:** cambiar todos los `border-foreground/10` de separación de sección a `rule-medium`. Las secciones se separan de verdad.

### V3 — Quiet authority

- **Hero:** el H1 actual (`Evidence, not assertions.`) sube a `--fs-display` completo, ocupando 2 líneas. Debajo, en la misma columna, aparece un `num-display` con `04.26.2027` como firma temporal — dos piezas grandes, ningún elemento intermedio.
- **Sección Deadline reality:** las 4 métricas actuales (`WCAG 2.1 AA`, `Web · App · PDF`, `Behavioral`, `≈ 9 mo`) se agrandan a ~64px cada una (`num-display` reducido) y se alinean en dos filas de dos, ocupando toda la columna de lectura. Hoy son casi decorativas; se vuelven el pulmón visual.
- **Methodology:** el bloque de código (`Finding · F-2027-0142`) ya está bien resuelto. Se le aumenta el `font-size` interno del `<pre>` de `13px` a `15px` con `line-height: 1.85` — se lee como un artifact real, no como snippet decorativo.
- **Ritmo cromático:** el CTA final navy queda. Se agrega **una sola banda `surface-cobalt`** breve entre §II Methodology y §III Services conteniendo una cita corta ("Scanners passed. The user still couldn't use it.") en `num-display` reducido. Es el único punto de cobalt en toda la página — funciona como acento editorial.
- **Reglas:** los `border-foreground/10` de separación se cambian a `rule-medium`. En V3, además, las secciones arrancan con `rule-heavy` (regla de 2px navy) para marcar cada capítulo (I–VI).

## Fuera de alcance (para no violar el brief)

- No se tocan radius (botones primarios siguen `radius: 0`; cards mantienen los 4px de `--radius`).
- No se agregan sombras, glows, blur, gradientes, ni state layers estilo MD3.
- No se agrega tipografía nueva (Inter + JetBrains Mono, punto).
- No se cambia la paleta — se **usa más** la que ya está firmada.
- Azure sigue solo en focus rings (regla §11 intacta).
- Sin nuevas ilustraciones ni SVGs decorativos.

## Riesgos de contraste (WCAG AA)

- `surface-cobalt` como banda: cobalt-600 sobre paper-50 en texto grande — verificar ≥ 3:1 (AA large). Texto de cuerpo dentro de esa banda debe ir en `paper-50` sobre cobalt-600 (relación ~7:1, seguro).
- `num-display` en `text-foreground/20` como marca de agua: es decorativo, no informativo — el número está también en el título accesible (`aria-label` o texto adyacente). No aplica contraste AA para elementos puramente decorativos, pero se documenta.
- Ninguna combinación nueva pone azure como texto de cuerpo.

## Archivos a tocar (build phase)

- `src/styles.css` — agregar `@theme` tokens de escala y `@utility` de reglas/superficies/`num-display`.
- `src/components/home/HomeV1.tsx`, `HomeV2.tsx`, `HomeV3.tsx` — aplicar cambios por variante descritos arriba. Sin refactor estructural, solo cambios de clases y adición de 1–2 secciones nuevas por variante (banda cobalt / franja navy).
- `src/components/home/shared.ts` — sin cambios de datos.
- El selector V1/V2/V3 arriba a la derecha se mantiene idéntico.

## Verificación al terminar

1. `tsgo --noEmit` limpio.
2. Recorrer las 3 variantes en preview y confirmar que:
   - Cada sección tiene un pico visual claro (num-display o bloque oscuro).
   - Se ven al menos 2 superficies de contraste fuerte por página (navy y/o cobalt).
   - Los botones primarios siguen con radius 0.
   - Focus rings siguen azure 3px.
3. Snapshot Playwright de las 3 variantes para comparación lado a lado con el estado previo.
