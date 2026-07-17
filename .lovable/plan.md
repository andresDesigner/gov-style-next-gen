## Objetivo

Incorporar iconografía (lucide-react, ya disponible) en V2 y V4 solo donde mejora el escaneo y refuerza la jerarquía, sin sobrecargar el estilo editorial/gubernamental existente. Iconos como refuerzo semántico, nunca decorativos.

## Principios

- Icon size 16–20px en línea con texto; 24–28px en cards.
- `strokeWidth={1.5}` para tono editorial fino, coherente con el diseño actual.
- Color heredado: `currentColor` con `text-primary`, `text-foreground/60` o `text-accent` según superficie.
- Siempre `aria-hidden` cuando acompañan texto; nunca sustituyen etiquetas.
- No añadir iconos en: H1 del hero, kickers `SectionKicker`, números grandes de `MetricStrip`, `TraceBadge`, ni dentro del bloque `<pre>` de evidencia.

## V2 — puntos de inserción

1. **Deadlines aside (Phase 1 / Phase 2):** `Calendar` junto a cada fecha, `ShieldCheck` en el título "Compliance Deadlines".
2. **Trust strip navy:** reemplazar el cuadrado `bg-accent` por `BadgeCheck`, `Clock` y `Sparkles` (uno por credencial).
3. **Engagement 6 fases:** icono pequeño por fase (`Search`, `ClipboardList`, `TestTube2`, `FileCheck2`, `Wrench`, `ShieldCheck`) en la esquina superior derecha de cada celda, `text-foreground/25` (activo `text-primary` en fase 01).
4. **Deadline Reality — LabValueTable:** icono a la izquierda de cada label (`Ruler`, `Layers`, `Eye`, `Timer`). Requiere prop opcional `icon` en `LabValueRow`.
5. **Services primarios (4) y secundarios (2):** icono 24px arriba del `id`, uno por servicio (mapeo determinista por `s.id`). Cards mantienen mono-id.
6. **Methodology / Behavioral Verification:** `Accessibility` junto al H2; `Terminal` en el header del `<figure>` de evidencia.
7. **Operations capability:** icono por celda (`Users`, `MapPin`, `FileBadge`, etc., según `label`).
8. **CTA final:** `CalendarCheck` en el botón "Book a Readiness Call", `Download` en "Download Capability Statement". Aplica también al par de botones del hero.
9. **Footer:** `ArrowUpRight` inline al hover en enlaces externos (solo los que apunten fuera). Omitir si todos son `#`.

## V4 — puntos de inserción

1. **Header blanco:** `Menu` como disclosure en breakpoint móvil si aplica; si no, omitir.
2. **Trust strip / Overview intermedio (`paper-50`):** iconos pequeños al lado de cada `TraceBadge` o credencial (`BadgeCheck`, `Clock`, `Sparkles`) manteniendo el badge existente.
3. **Nodos de diagrama en servicios:** dejar los círculos+líneas; añadir icono central 14px dentro de cada nodo por servicio (mismo mapeo que V2).
4. **Deadline card (no se toca layout):** solo un `Calendar` en el título "Compliance Deadlines" — permitido porque el brief prohíbe tocar la tarjeta, así que **omitir si el usuario lo interpreta como cambio estructural**. Por defecto: no tocar.
5. **Resto de secciones heredadas de V2:** aplicar los mismos puntos 3–9 de V2 con los mismos componentes/mapeo para mantener coherencia entre variantes.

## Cambios de código

- **Editar** `src/components/home/LabValueRow.tsx`: añadir prop opcional `icon?: LucideIcon` a `LabValueRow` y renderizarlo 16px a la izquierda del label.
- **Nuevo** `src/components/home/serviceIcons.ts`: mapa `Record<serviceId, LucideIcon>` reutilizado por V2 y V4 (fuente única).
- **Editar** `src/components/home/HomeV2.tsx`: imports puntuales de lucide-react e inserciones descritas.
- **Editar** `src/components/home/HomeV4.tsx`: imports puntuales e inserciones descritas.
- **No tocar:** `shared.ts`, `styles.css`, `SectionKicker`, `TraceBadge`, `MetricStrip`, V1, V3.

## Fuera de alcance

- No se cambian colores, tipografías, tamaños de texto, ni estructura de grids.
- No se añaden animaciones ni librerías nuevas (lucide-react ya está).
- No se aplican iconos en V1 ni V3 en esta iteración.
