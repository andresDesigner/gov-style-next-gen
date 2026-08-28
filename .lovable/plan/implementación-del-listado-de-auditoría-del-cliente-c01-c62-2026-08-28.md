# Implementación del listado de auditoría del cliente (C01–C62)

El documento lista 58 puntos (C07, C08, C09 y C14 no aparecen en el archivo; se omiten). Se implementan en cuatro olas por prioridad. Todo es trabajo de presentación y copy: no se toca backend.

## Ola 1 — P0: consistencia, claridad y accesibilidad base

**Global / Header**
- CTA único en todo el sitio: "Book a Readiness Call" (sólido cobalt + icono Phone). Se eliminan variantes ("Book a Call", "Talk to us") salvo en Government, donde el CTA de Legal Counsel mantiene un propósito distinto y se renombra a "Book a Readiness Call" con subtexto propio (C01, C42).
- Estado activo del menú unificado: color primary + underline 2px + peso semibold, idéntico en desktop y en el menú móvil (hoy el móvil solo cambia el color) (C02, C57).
- Navegación de servicios: cada servicio del footer y de las tarjetas apunta a su ancla real en `/services`; los de Phase 2 dejan de comportarse como enlaces (C03).

**Terminología (C04)**
Se crea un glosario interno en `content.ts` con la forma canónica de cada término (Behavioral Verification, Finding Record, Trace ID, Evidence, Trusted Tester, WCAG 2.1 AA, Section 508, PDF/UA-1 aligned) y se normaliza su uso en las seis páginas.

**Fechas (C06, C29)**
Una sola fuente de verdad para deadlines (`April 26, 2027` Phase 1 / `April 26, 2028` entidades pequeñas; `Q4 2026` como ventana de preparación). Home, Services, Government, `PhaseScopeDiagram` y metadatos leen de ahí.

**Services: hoy vs. Phase 2 (C05)**
Separador explícito, tarjetas Phase 2 con borde discontinuo, badge navy "PHASE 2 — NOT YET CONTRACTABLE", sin CTA activo y con estado disabled real (C58).

**Contact (C10, C11, C50)**
- Bloque Secure Intake reetiquetado: "Client Upload — coming soon", con explicación de que el canal seguro todavía no está habilitado y qué hacer mientras tanto.
- Estado de éxito posterior al envío: pantalla con "Submission received" → "What happens next" (3 pasos) → "Expected response time: 1 business day", con foco movido al mensaje y `role="status"`.

**Accesibilidad (C12, C13)**
- Auditoría de contraste sobre texto pequeño, metadata mono, labels y textos sobre navy/celeste; se sube a mínimo AA (los grises `foreground/40–50` en footer y eyebrows pasan a tonos conformes).
- Navegación completa por teclado: skip link, `:focus-visible` consistente en botones, links, tarjetas y acordeones.

## Ola 2 — P1: How We Verify, Services, Government, About

**How We Verify**
- Timeline de 9 etapas legible: etiquetas más grandes, numeración visible y versión móvil vertical propia en lugar del SVG comprimido (C15, C51).
- Nombres de etapa idénticos en hero, timeline y copy, tomados de una única lista (C16).
- Static vs. Behavioral con jerarquía editorial fuerte: bloque a dos columnas con encabezado propio y contraste visual navy/coral (C17).
- Tabla comparativa reforzada con una fila final "Qué recibes" por cada enfoque (C18).
- "Scoped non-conclusions" pasa de nota al pie a sección propia con kicker y explicación metodológica (C19).
- `EvidenceArtifactCard` con etiquetas más grandes y jerarquía clara entre Trace ID, Finding, WCAG, AT, Behavior, Evidence y Status (C20).

**Services**
- Estructura única de tarjeta: Service ID → Status → Nombre → Impacto → Descripción → Deliverable → CTA (hoy el deliverable solo aparece dentro del acordeón) (C21).
- Sistema de estados consistente ACTIVE / VERIFIED / PENDING / PHASE 2 con token de color y forma propios, definido una sola vez (C22).
- "VERIFIED" se renombra a "AVAILABLE" en las tarjetas para no confundir estado comercial con resultado técnico de verificación (C23).
- Phase 2 sin expectativa de contratación (C24) y Availability Matrix reintroducida con tres estados legibles: disponible / próximamente / futuro (C25).
- Operating Model con nomenclatura y orden idénticos en todo el sitio y su output por etapa visible (C35, C36).

**For Government**
- Audience routing legible de inmediato: rol → qué obtiene → destino, con las tres rutas etiquetadas (C26, C28).
- "Pick your path": cada card explica qué obtiene ese rol antes del CTA, y los tres CTAs son acciones distintas (C27, C40).

**About**
- "A Trusted Tester–led practice" como bloque protagonista que conecta certificación, experiencia y metodología (C30, C31).
- Los tres Operating Principles se igualan en estructura y longitud, y los números 1–3 se reducen a marcador discreto (C32, C33).
- Disclosure de Zenzo LLC en bloque legal diferenciado, con el mismo texto del footer (C34, C47).

## Ola 3 — P2: sistema tipográfico, CTA, footer, formularios, responsive

- Escala tipográfica revisada: eyebrow / H1 / H2 / body / metadata con roles distinguibles y consistentes entre páginas (C37).
- Reducción de copy repetitivo (evidence / verification / defensible record) y eliminación de textos que repiten literalmente lo que dice un diagrama (C38, C39).
- Jerarquía de CTA: primario sólido, secundario outline, terciario link; nunca dos botones con el mismo peso (C41, C43).
- Footer: mismas columnas y orden en todas las páginas, "Coming soon" explícito, naming exacto de How We Verify / Client Upload / Accessibility Statement / Capability Statement, y línea legal consistente (C44, C45, C46, C47).
- Formularios: labels visibles asociadas, mensajes de error por campo con `aria-describedby` y resumen accesible, y estado de éxito (C48, C49, C50).
- Responsive: timelines con versión móvil propia, tablas (Availability Matrix y Static vs. Behavioral) como pares etiqueta/valor en móvil, grids de cards a una columna sin perder CTA, header móvil con CTA compacto y botones de bandas azules en vertical (C51–C55).

## Ola 4 — P3: estados e higiene de accesibilidad

- Hover, active/selected y disabled definidos como utilidades compartidas y aplicados a botones, links, cards y navegación (C56, C57, C58).
- Touch targets mínimos de 44px en móvil (C59).
- Orden semántico de headings revisado página por página: un solo H1, sin saltos de nivel (C60).
- Nombres accesibles en botones de solo icono (C61) y clasificación informativa/decorativa de cada imagen con su alt correspondiente (C62).

## Notas técnicas

- Nuevas fuentes únicas en `src/components/site/content.ts` y `src/components/home/shared.ts`: deadlines, glosario de términos, nombres de las 9 etapas, sistema de estados y labels de CTA.
- Componentes afectados: `SiteHeader`, `SiteFooter`, `CtaBand`, `ServiceCardGrid`, `EngagementRail`, `PhaseScopeDiagram`, `MethodologyFlowDiagram`, `AudienceRoutingDiagram`, `EvidenceArtifactCard`, y las rutas `/`, `/services`, `/verify`, `/government`, `/about`, `/contact`.
- Utilidades de estado (`focus-visible`, hover, disabled) centralizadas en `src/styles.css`.
- No se altera el lenguaje visual aprobado del Home: paleta navy/cobalt + coral, ilustraciones y animaciones se mantienen.

## Verificación

- Recorrido con navegador en 390, 768 y 1280px sobre las seis rutas, con capturas.
- Chequeo de contraste en textos pequeños y sobre fondos navy.
- Recorrido por teclado de header, formulario y acordeones.
- Build y typecheck limpios.

## Punto a confirmar

C07, C08, C09 y C14 no están en el documento recibido. Si existían en la auditoría original, envíamelos y los sumo.
