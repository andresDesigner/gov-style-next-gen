## Objetivo

Extender el sitio con Services hub, About, Contact y ampliar How We Verify, reutilizando el sistema visual ya validado en Home (navy/cobalt, mono kickers, TRACE badges, ilustraciones flat con acento coral, reveals en scroll, sin bordes redondeados en botones).

## Unificación primero

Hoy cada página repite su header y footer con variantes distintas. Antes de agregar páginas:

- `SiteHeader.tsx` — header sticky blanco con blur, logo, nav completo (Services, How We Verify, For Government, Resources, About, Contact), estado activo con `activeProps`, CTA cobalt "Book a Readiness Call" con ícono Phone, y menú mobile en Sheet.
- `SiteFooter.tsx` — footer de 5 columnas ya definido en `shared.ts` (footerCols) + créditos Zenzo LLC y línea "WCAG 2.1 AA · Section 508 · PDF/UA-1 aligned".
- `PageHero.tsx` — hero reutilizable: fondo celeste con dot-grid, kicker mono, H1 con `clamp()`, subtítulo, slot de CTAs y slot lateral para visual.
- `CtaBand.tsx` — banda navy final con CTA blanco, usada al cierre de cada página.

Se aplican también a `/verify` y `/government` para que todo el sitio quede consistente.

## /services — Services hub (nuevo)

- Hero: "Accessibility consulting built around evidence" + subtítulo de seis servicios / un modelo operativo.
- **Engagement Model Rail**: los 6 pasos (Scope → Test → Prioritize → Remediate → Verify → Govern) como riel horizontal animado — línea que se dibuja al entrar en viewport, nodos numerados que se encienden en cascada, scroll horizontal en mobile con snap. Reutiliza el patrón de `MethodologyFlowDiagram`.
- 4 tarjetas primarias (S-01 a S-04) con ícono de `ServiceIcon`, TRACE badge, estado ACTIVE/VERIFIED, borde sólido y hover con elevación + flecha "Learn more" que se desplaza.
- Divisor "PHASE 2 — UPCOMING" y 2 tarjetas secundarias con borde punteado y badge navy.
- `PhaseScopeDiagram` existente reubicado aquí como cierre analítico.
- Banda CTA navy.

## /verify — ampliación

Se conservan los diagramas actuales y se agregan las secciones faltantes del wireframe:

- Bloque "What changes for you": 4 tarjetas de audiencia (procurement officer, accessibility coordinator, technical evaluator, legal counsel) con entrada escalonada.
- Tabla comparativa **Static-only vs Behavioral Verification** rediseñada: no una tabla plana sino dos columnas contrapuestas, la de la derecha en navy sólido, con filas que se revelan una a una.
- El flujo de 9 etapas: verificar que enfatice visualmente las etapas 4 (Native NVDA capture) y 8 (Evidence sufficiency) con relleno cobalt y anillo, más su equivalente textual por nodo.
- "Scoped non-conclusions" — bloque editorial de ancho corto con pull quote y regla gruesa.
- "How this differs from manual review" + "Where human review still matters" como par de columnas.
- Segunda `EvidenceArtifactCard` con el ejemplo del wireframe (Trace ID AV-2026-0xxx, Evidence sufficiency: Sufficient, Result: Pass).
- Franja de cross-link: "Already remediated? → Post-Remediation Verification".
- "Honest limits" con la afirmación final en peso alto sobre fondo paper.
- Banda CTA navy con doble botón (Request a sample report walkthrough / Book a Readiness Call).

## /about (nuevo)

- Hero "Why ACT Verified exists" con el párrafo de Zenzo LLC.
- Bio del fundador: layout asimétrico con marco para foto (placeholder marcado), cita en tipografía editorial. El nombre queda como `[Name]` hasta que lo confirmes — centralizado en una constante para cambiarlo en un solo punto.
- **Operating principles**: los 3 principios como tarjetas numeradas grandes (01/02/03) con número decorativo gigante en gris claro, mismo tratamiento que los service cards del Home.
- Divulgación de entidad matriz en bloque contenido con regla lateral cobalt.
- Banda CTA navy.

## /contact (nuevo, solo diseño)

- Hero corto "Let's talk about your Title II timeline".
- Formulario en grilla de 2 columnas con los 9 campos del wireframe (Name, Organization, Email, Phone opcional, Service of interest, Entity type, Approximate timeline, Population served, Brief description). Componentes shadcn Input/Select/Textarea, labels visibles, `aria-describedby` para errores.
- Validación en cliente con Zod + estados de error accesibles; al enviar muestra un estado de confirmación en pantalla (sin backend, según lo confirmado).
- Panel lateral sticky con la nota de Secure Intake (`upload.actverified.com`) para compromisos activos, más tiempos de respuesta y ruta alternativa.
- Banda CTA no aplica; cierra con footer.

## Detalles técnicos

- Rutas nuevas: `src/routes/services.tsx`, `about.tsx`, `contact.tsx`; ampliación de `verify.tsx`.
- Cada ruta con su propio `head()` (title, description, og:title, og:description, og:type, twitter:card, canonical). Sin og:image salvo que exista imagen absoluta real.
- Contenido estructurado en `shared.ts` para no duplicar strings entre Home y hubs.
- Animaciones vía `useInView` + clases `reveal` / `draw` ya existentes en `styles.css`, todas respetando `prefers-reduced-motion`.
- Sin backend, sin nuevas dependencias más allá de las ya instaladas (zod, shadcn).
- Contraste verificado a WCAG 2.1 AA en todos los pares de color nuevos.
