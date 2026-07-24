## Ajustes transversales V1–V4 (una sola pasada)

### 1. Jerarquía de CTA — corregir en las 4 versiones
Hoy "Download Capability Statement" compite visualmente con "Book a Readiness Call" (o incluso lo supera en V4). Se invierte para alinear con Funnels 1 y 3 del brief.

- **Botón primario** (relleno sólido, alto contraste, ícono `Phone` / `CalendarCheck`): `Book a Readiness Call`.
- **Botón secundario** (outline sobre la misma superficie, sin relleno): `Download Capability Statement`.
- Aplicar en: nav superior, hero, y CTA final de cada versión.
- V1: nav actualmente solo tiene "Book a Call" como link de menú — se convierte en botón primario visible a la derecha, igual que V2/V3/V4.
- V4: hoy el outline usa `border-2 border-primary` con el mismo peso visual que el primary; se baja a `border` (1px) `border-foreground/25` con texto `text-foreground` para que no compita.

### 2. Header y logo
- Aumentar el logo en el nav de las 4 versiones: V2 `h-9 → h-11`, V3 `h-9 → h-11`, V4 `h-11 → h-12`, V1 masthead `h-16/h-20 → h-20/h-24`.
- Cerrar el aire vertical entre header y primer bloque de texto (hero eyebrow / H1): reducir el `py-24 lg:py-36` de V3 y equivalentes a `py-16 lg:py-24`, y en V4 elevar el hero eyebrow con una línea corta de contexto (`§00 · Title II Readiness`) para llenar el gap sin agregar decoración.

### 3. Incorporaciones cruzadas (con permiso explícito para proponer)
- **V1, V3, V4** reciben, en su banda de tesis / pull-quote, el copy de V2:
  > "Scanners passed. The user still couldn't use it. That gap is what we document."
  V3 ya lo tiene — se replica el mismo patrón en V1 (reemplaza "Evidence you can defend…") y V4 (nueva banda cobalt corta antes de servicios).
- **V1, V3** reciben, como headline alternativo propuesto, el H1 de V3 "Evidence, not assertions." como opción A/B en un comentario del componente (no reemplaza el H1 aprobado por defecto; queda comentado para que el cliente decida en revisión).
- **V1, V3** adoptan la tabla de cumplimiento de V4 en la sección "Deadline Reality":
  ```text
  STANDARD   | WCAG 2.1 AA         | mandatory baseline for all digital assets
  COVERAGE   | Web · App · PDF     | third-party content and vendor platforms
  EVIDENCE   | Behavioral          | native screen-reader verification
  RUNWAY     | ≈ 9 months          | to April 26, 2027 Phase 1 deadline
  ```
- **V2, V3, V4** reciben `PDF/UA-1 aligned` en el footer meta (V1 ya lo trae). Se añade a la línea `WCAG 2.1 AA · Section 508 · PDF/UA-1 aligned`.
- **V2, V3, V4** reciben el patrón de card del hero de V1: `TRACE-001 · STATUS: ACTIVE` + fecha grande. V4 ya lo tiene; V2 y V3 lo suman como microheader sobre la fecha del hero (V3 hoy solo muestra "Phase 1 deadline" + fecha).

### 4. Contraste en "Practice-level operating facts"
El párrafo descriptivo actualmente usa `text-foreground/70` sobre `bg-secondary/40` — cerca del umbral WCAG 1.4.3.
- Subir de `/70` a `/85` en las descripciones de operations en V1, V2, V3, V4.
- La label de la fila (`text-foreground/50`) sube a `/70`.
- Se verifica con el DevTools de contraste que quede ≥ 4.5:1 sobre `--secondary`.

### 5. Renombrar la etiqueta "FILED · 2026-07-16"
El término "Filed" en contexto gubernamental sugiere radicación legal. Se renombra en V1 (única versión que la usa así):
- `Filed · 2026-07-16` → `Last reviewed · 2026-07-16`
- Alineado con el disclaimer de V2/V3 (`Last reviewed 2026-07-16. Source: ADA.gov / DOJ. Informational, not legal advice.`).

### 6. Rediseño de las tres métricas de urgencia (`50k+ / 2027 / AA` y `≈9 mo / AA / 6`)
Hoy usan `text-foreground/40` sobre paper — se leen como decorativas.
- Migrar ambos strips a `MetricStrip` en variante `surface-cobalt` (no navy) para que las tres cifras aparezcan sobre azul cobalto con `num-display-md` en `text-primary-foreground` — máximo contraste, coherente con la banda de tesis.
- Añadir una **línea de urgencia** sobre la primera métrica: `URGENT · Runway to Phase 1 shrinks daily` en mono `text-accent`.
- Reforzar `50k+` con un sub-label `residents served → federally mandated Phase 1 threshold` (hoy solo dice "Phase 1 threshold").
- Aplicar el cambio en V1 (§01 Scale of Deadline), V2 (banda cobalt bajo trust strip), V3 (`Practice at a Glance`), V4 (banda cobalt bajo hero).

### Fuera de alcance (confirmado)
No se toca: paleta, tipografía, radius, sombras, animaciones, estructura de rutas ni la lógica del `VariantSelector`. Todo el trabajo permanece en `src/components/home/HomeV1–V4.tsx`, `MetricStrip.tsx` y `LabValueRow.tsx`.
