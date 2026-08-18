# Rediseño de la página /services

Objetivo: que un procurement officer entienda en un scroll qué puede contratar hoy, qué consecuencia tiene no contratarlo, y cómo se ve la evidencia. Se mantiene la bicromía aprobada (navy/cobalt + coral #fd7239); la diferenciación por servicio se hace con intensidad y rol de cada color, no con paleta nueva.

## 1. Hero y franja de credibilidad

- Eyebrow: "Services · 4 primary + 2 Phase 2" → **"What you can contract today"**.
- Franja navy: se aumenta el tamaño del título (de ~18px a escala fluida ~24–28px) y se añade el remate diferenciador: "Findings carry a trace ID, a WCAG criterion, and a behavior log. Not just a score."

## 2. Tarjetas de servicio (Phase 1)

Cada tarjeta pasa a ser un bloque autónomo con:

- **Línea de impacto** en negocio, bajo el título (ej. Title II Readiness: "Without this, you arrive at April 2027 without a defensible record of where you stand.").
- **Ícono propio** por servicio (reusando el set `ServiceIcon` de marca, no genéricos).
- **Diferenciación bicromática**: cada tarjeta lleva una barra superior y un ícono con rol distinto dentro de navy/cobalt/coral — Readiness = coral (urgencia), Audits = cobalt, PDF Remediation = navy, Verification = navy con badge de verificación. Sin colores nuevos.
- **Learn more → acordeón expandible dentro de la tarjeta**, con: el problema que resuelve, qué incluye, entregable y CTA "Book a readiness call". Accesible (botón con `aria-expanded`/`aria-controls`, animación respetando `prefers-reduced-motion`).
- **Nota de trazabilidad** al pie del grid: "Every engagement gets a TRACE ID. Every finding links back to it."

## 3. Tarjetas Phase 2

- Badge adicional "Most requested after verification".
- Copy de valor: por qué son el paso natural después de la verificación (retención de cumplimiento, evidencia continua).

## 4. Modelo de 6 pasos (Engagement Rail)

- Escala mayor: números grandes, íconos coral más grandes, texto legible (no 9px).
- Cada paso suma una línea de **output tangible** ("output: prioritized backlog", "output: behavior log", etc.).
- Flecha/progreso visible conectando los 6 pasos, con la animación en loop ya existente.

## 5. Tabla de disponibilidad (Phase Scope)

- Se reincorpora en /services con tamaños tipográficos mayores en eyebrow, headline y encabezados de columna.
- Cada fila muestra código **y** nombre del servicio en texto visible (S-01 … S-06), también en mobile.
- Corrección de contraste: los labels de columna (Hard MVP / Phase 1 / Phase 2) y los subtítulos pasan a navy oscuro para cumplir WCAG 2.1 AA.

## 6. CTA final

Tres acciones en lugar de dos:

1. Book a Readiness Call (primaria, coral)
2. Download Capability Statement (outline)
3. **Request a sample report walkthrough** (terciaria, link fuerte) — entrada del evaluador técnico.

## 7. Footer

Los ítems "Governance & Operations · Phase 2" y "User Validation · Phase 2" se mueven al final de la columna Services, bajo un separador y con etiqueta contenida "Coming soon", en tono atenuado.

## Notas técnicas

- Contenido nuevo (impacto, outputs, detalle de acordeón) centralizado en `src/components/home/shared.ts` / `src/components/site/content.ts`.
- `ServiceCardGrid.tsx`: estado local de expansión por tarjeta; sin dependencias nuevas.
- `EngagementRail.tsx`: escala y outputs; `PhaseScopeDiagram.tsx`: tipografía y contraste; `CtaBand.tsx`: soporte para tercera acción.
- Todos los cambios son de presentación; no se toca backend.
