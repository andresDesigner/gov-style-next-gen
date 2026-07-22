## Consolidación V4 + integración de visuales

El cliente eligió V4 como base. Este plan aplica los 11 ajustes UX/UI y los 10 activos visuales (A–J) exclusivamente sobre `HomeV4.tsx`, manteniendo V1–V3 disponibles vía el selector para referencia comparativa. Nada del sistema (paleta, tipografía, radius, motion tokens) cambia; solo composición, contenido y nuevos SVGs internos.

---

### FASE 1 — Ajustes UX/UI sobre V4 (críticos)

**1.1 Jerarquía de CTA (crítico)**
- Nav: `Book a Readiness Call` botón primario sólido cobalt (`bg-primary text-primary-foreground`), `Download Capability Statement` botón secundario `border border-foreground/25`.
- Hero + CTA band final: mismo patrón. Íconos `CalendarCheck` (primary) y `Download` (secondary).

**1.2 Hero — H1 más corto + alternativa**
- H1 default: `Accessibility verification and compliance readiness for Title II.`
- Se deja comentado en el JSX el H1 alternativo `Evidence, not assertions.` (con el actual como subtítulo) para que el cliente decida en revisión.

**1.3 Service cards — jerarquía real**
- Contenedor: `border border-foreground/15 bg-paper-50 p-6` para los 4 primarios.
- Cada primario gana `TraceBadge` `TRACE-101…104 · STATUS: ACTIVE`.
- Separador visual (`rule-heavy` + label `§ PHASE 2 — ROADMAP`) antes de los 2 servicios Fase 2.
- Fase 2: `border border-dashed border-foreground/25`, badge `PHASE 2` en cobalt sólido arriba a la derecha, opacidad de contenido `text-foreground/70`.

**1.4 "Practice at a glance" → rediseño con urgencia**
- Se elimina la strip gris ligera.
- Se reemplaza por `MetricStrip tone="cobalt"` con las 3 cifras (`≈9 mo` / `AA` / `6 phases`) y línea superior `URGENT · Runway to Phase 1 shrinks daily` en mono.

**1.5 Contraste WCAG 1.4.3**
- Labels `SectionKicker` sobre blanco: subir a `text-foreground/70` mínimo.
- Descripciones bajo H2 operations: `text-foreground/85` (ya iniciado; verificar en V4).
- CTA band final (`No silent passes…`): migrar a `surface-navy` con texto `text-background`.

**1.6 Nav — `Book a Call` como ítem visible**
- Añadir link `Book a Call` en la nav horizontal antes del botón primario, para mantener anchor de menú + CTA visible.

**1.7 Mobile header**
- Breakpoint `md` (768px): subtítulo del wordmark se oculta (`hidden md:block`), nav horizontal colapsa a un `Sheet` (shadcn) con botón hamburguesa. Skip-link `Skip to main content` fijo visible en `:focus`.

**1.8 Deadline compliance table — stacked mobile**
- <640px: cada fila (`STANDARD`, `COVERAGE`, `EVIDENCE`, `RUNWAY`) se apila como bloque `label / value / note` sin scroll horizontal. `LabValueTable` ya soporta esto; se ajusta grid a `grid-cols-1 sm:grid-cols-[140px_1fr]`.

**1.9 Footer**
- Añadir `PDF/UA-1 ALIGNED` a la línea meta.
- Añadir texto visible `ACT Verified — a Zenzo LLC consulting practice` (no solo metadata).

**1.10 `FILED · 2026-07-16`**
- Renombrar a `PUBLISHED · 2026-07-16` en el hero de V4 (opción más neutra que preserva registro documental).

**1.11 prefers-reduced-motion**
- Cualquier transición nueva (fade-in del diagrama de metodología, hover en TraceBadge) se envuelve en `@media (prefers-reduced-motion: no-preference)` dentro de `styles.css`. Barra de progreso de deadline pasa a estado estático si el usuario prefiere reduced motion.

---

### FASE 2 — Activos visuales (SVGs custom, sin stock)

Todos los activos se implementan como componentes React con SVG inline, texto real en DOM (no incrustado), `role="img"` + `<desc>`, paleta restringida a navy/cobalt/paper/gris.

**A. `MethodologyFlowDiagram.tsx`** — 9 nodos horizontales (desktop) / verticales (mobile <768px). Etapas 4 (`NVDA Capture`) y 8 (`Evidence Sufficiency`) con borde cobalt + fondo azul claro. Flechas SVG entre nodos. En Home: versión reducida de 5 nodos como preview; link a How We Verify (fuera de scope de esta iteración de home).

**B. `EvidenceArtifactCard.tsx`** — Ya presente en V4 (card de deadline). Se refina como componente independiente reutilizable con campos `element / issue / wcag / scanner / behavior / evidence / status`, fondo `navy-900`, mono `JetBrains Mono`, valores en cobalt, TraceBadge esquina sup. derecha. Se coloca en la sección "How We Verify preview" del home.

**C. `DeadlineCoverageDiagram.tsx`** — Timeline SVG con dos marcadores (2027 / 2028), etiquetas `50,000+ residents` y `Smaller entities · Special districts`. Línea de progreso monocromática. Se ubica debajo del H1 en el hero, reemplazando visualmente parte del espacio actual.

**D. `DocumentArchitectureAbstract.tsx`** — Dos columnas SVG etiquetadas `document structure / tags` vs `what screen reader exposes`, con zona de discrepancia central. Se coloca en la nueva sección "Methodology preview" del home.

**E. `AudienceRoutingMap.tsx`** — Diferido a "For Government hub" (fuera de home). Se anota en el plan pero no se implementa en esta iteración.

**F. `serviceIcons` set** — Ya existe base. Se refina a stroke-only, mismo `strokeWidth={1.5}`, mismo viewBox 24×24. Íconos por servicio:
- S-01 Title II Readiness → `CalendarClock`
- S-02 Section 508 / WCAG → `SearchCheck`
- S-03 PDF Remediation → `FileEdit`
- S-04 Post-Remediation Verification → `ShieldCheck`
- S-05 Governance → `Network`
- S-06 User Validation → `MonitorCheck`

**G. Runway visual** — Opción (c): número de meses grande + label `RUNWAY TO PHASE 1`, integrado en `MetricStrip cobalt` (1.4). Sin animación.

**H. `PhaseScopeDiagram.tsx`** — Diferido a "Services hub" (fuera de home). Anotado en el plan.

**I. Patrón de fondo sutil** — Grilla de puntos `paper-200` sobre blanco, CSS `background-image: radial-gradient(...)`, opacidad reducida. Aplicado solo a CTA band final (ahora navy → patrón cobalt sutil sobre navy). Desactivado con `prefers-reduced-motion` vía media query.

**J. OG image 1200×630** — Generada con `imagegen`, guardada en `public/og-image.png`. Fondo navy-900, logo blanco, tagline "Accessibility verification and compliance readiness for ADA Title II deadlines.", `actverified.com` en cobalt esquina inf. derecha. Se actualiza `__root.tsx` para reemplazar la URL actual de `og:image` y `twitter:image`.

---

### Detalles técnicos

- **Archivos nuevos**: `src/components/home/MethodologyFlowDiagram.tsx`, `EvidenceArtifactCard.tsx`, `DeadlineCoverageDiagram.tsx`, `DocumentArchitectureAbstract.tsx`, `DotGridBackground.tsx`.
- **Archivos editados**: `HomeV4.tsx` (mayor), `MetricStrip.tsx` (soporte para `topLabel` de urgencia), `serviceIcons.ts` (swap de íconos), `shared.ts` (footer meta + text legal visible), `styles.css` (media query reduced-motion, dot-grid pattern), `__root.tsx` (og:image).
- **Nuevo asset**: `public/og-image.png` (generado con imagegen 1200×630, model `premium` por legibilidad tipográfica).
- **Fuera de scope**: V1, V2, V3 no se tocan (siguen en el selector como referencia comparativa). Rutas nuevas (`/how-we-verify`, `/for-government`, `/services`) no se crean — los activos E y H quedan documentados para próxima iteración.
- **Sin cambios en**: paleta, tipografía, radius, `VariantSelector`, routing, backend.

---

### Orden de ejecución

1. Ajustes 1.1–1.10 sobre `HomeV4.tsx` + componentes compartidos.
2. Componentes SVG A, B, C, D, F, G integrados en V4.
3. Ajuste 1.11 (`prefers-reduced-motion` + patrón I).
4. Generación de OG image (J) y actualización de metadata.
5. Verificación visual con Playwright en viewports 375 / 768 / 1280.
