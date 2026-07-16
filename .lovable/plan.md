## Objetivo

Inyectar más personalidad editorial y jerarquía visual en las 4 variantes del home (V1–V4) aplicando 5 principios comunes, sin tocar paleta, tipografía base ni navegación. Se trabajará una variante a la vez y se esperará confirmación visual antes de pasar a la siguiente.

## Principios comunes (aplican a las 4 variantes)

1. **Kicker/eyebrow consistente antes de cada H2**: componente reutilizable `SectionKicker` con formato `§0X · NOMBRE` (mono, uppercase, tracking 0.05–0.08em, color `text-foreground/50` o `text-primary`). Se aplica en TODAS las secciones, no solo algunas.
2. **Mínimo 2 franjas navy/cobalt con texto blanco**: una después del hero (métricas grandes tipo "50k+ / 2027 / AA"), otra antes del CTA final (métricas de proceso "9 mo / AA / 6 phases"). Separadores verticales en `azure-500`.
3. **Ritmo de columnas alternado**: secuencia 60/40 → full-width → 40/60 → full-width en cada variante para romper monotonía vertical.
4. **Líneas divisorias 1px como diseño**: pares label/valor tipo tabla de laboratorio ("STANDARD — WCAG 2.1 AA") en secciones densas.
5. **Badge de trazabilidad reutilizable** `TraceBadge` con formato `TRACE-XXX · STATUS: ACTIVE|PENDING|VERIFIED`, usado en hero, trust strip y al menos una service card.

## Componentes nuevos compartidos

Se crean en `src/components/home/`:

- `SectionKicker.tsx` — kicker `§0X · TITLE`, props `{ n, label, tone?: "muted" | "primary" | "accent" }`.
- `TraceBadge.tsx` — badge `TRACE-XXX · STATUS: X`, props `{ id, status }`, variantes en fondo claro y oscuro.
- `MetricStrip.tsx` — franja full-width `surface-navy` o `surface-cobalt` con 3 métricas grandes y separadores verticales en `azure-500`. Props: `{ tone, metrics: { value, label, note? }[] }`.
- `LabValueRow.tsx` — fila `label — valor` con línea inferior 1px, para tablas de laboratorio.

Ninguno introduce colores, fuentes ni assets nuevos: solo componen tokens y utilidades ya existentes en `styles.css` (`surface-navy`, `surface-cobalt`, `eyebrow`, `num-display*`, `rule-*`).

## Cambios por variante

### V1 — Federal Precision reforzado
- Añadir `SectionKicker` consistente en hero y trust strip (ya existe en secciones §01–§06; homogeneizar estilo con el nuevo componente).
- Insertar `MetricStrip` navy full-width después del hero: `50k+ residents served`, `2027 deadline`, `AA standard`, con divisores verticales azure.
- Agregar `TraceBadge` (`S-01`, `S-02`, …) junto al número existente en cada service card del `<ol>` de servicios.
- No tocar: masthead, hero, footer, ni banda `surface-navy` "Practice statement" existente.

### V2 — Evidence Metrics ampliado
- Añadir `SectionKicker` en cada H2 (Deadline Reality, Services, Methodology, Who We Help, Operations, CTA) siguiendo el estilo actual de "ENGAGEMENT MODEL · 6 PHASES".
- Reemplazar el grid actual de 4 celdas en "Deadline Reality" por `LabValueRow` (STANDARD / COVERAGE / EVIDENCE / RUNWAY) con líneas 1px, manteniendo el copy actual.
- Insertar segunda `MetricStrip` (navy) inmediatamente antes del CTA final con `9 mo runway`, `AA conformance`, `6 phases`.
- No tocar: header, hero, grid de 6 fases del engagement.

### V3 — Memorandum editorial ampliado
- Extender el patrón `§0X · SECCIÓN` + `LabValueRow` a TODAS las secciones (no solo Deadline Reality).
- Presentar cada servicio con `num-display-sm` grande a la izquierda (coherente con "≈9 mo" del hero), tamaño menor que el hero.
- Insertar `MetricStrip` navy full-width entre servicios y CTA final.
- No tocar: hero ni H1.

### V4 — Trace System completo
- Reutilizar `TraceBadge` (`TRACE-002`, `TRACE-003`, …) en trust strip y en cada service card, numeración incremental empezando desde el `TRACE-001` del hero.
- Insertar franja delgada `paper-50` con `SectionKicker` "§01 · OVERVIEW" entre el header navy y el contenido principal para suavizar la transición de fondo.
- Extender el patrón de nodos (círculos + líneas finas horizontales) como conector sutil entre las 6 service cards.
- No tocar: header, hero principal, tarjeta de deadline actual.

## Orden de trabajo

1. Crear los 4 componentes compartidos (`SectionKicker`, `TraceBadge`, `MetricStrip`, `LabValueRow`).
2. Aplicar cambios a **V1** → pausa para confirmación visual.
3. Aplicar cambios a **V2** → pausa.
4. Aplicar cambios a **V3** → pausa.
5. Aplicar cambios a **V4** → pausa final.

## Notas técnicas

- No se modifican `styles.css` (paleta/tokens) ni `shared.ts` (datos).
- No se agregan imágenes, gradientes, glassmorphism ni dependencias.
- Se preservan contrastes AAA: navy `#031436` + white supera 4.5:1; azure `#3079FF` solo como acento grande (líneas verticales, no texto de cuerpo).
- Los nuevos componentes son puramente presentacionales (sin estado, sin lógica) y viven junto a los existentes en `src/components/home/`.
