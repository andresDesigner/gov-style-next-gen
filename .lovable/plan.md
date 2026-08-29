# About — Microdiagramas en "Operating Principles"

Rediseñar los tres cards de principios en `/about`: mantener estructura y layout actuales, pero reemplazar los iconos estáticos por microdiagramas animados (mini-flows de nodos conectados) siguiendo la imagen de referencia.

## Microdiagramas (uno por card)

```text
01  EVIDENCE OVER ASSUMPTION
    (eye) ··> (doc) ··> (check)      Observation → Evidence → Finding

02  NAME THE LIMITATION
    (doc) ··> (! alert)              Insufficient Evidence → Limitation

03  REPRODUCIBLE BY TRACE
    (tag TRACE-ID) ··> (flow) ··> (check-badge)   Trace ID → Process → Result
```

Cada microdiagrama = 2–3 nodos pequeños en una fila horizontal, conectados por líneas punteadas con animación de flujo en loop (`loop-dash`), coherente con los demás diagramas del sitio.

## Implementación

1. **Nuevo componente** `src/components/home/PrincipleDiagram.tsx` (o `site/` según convención):
   - Tres variantes: `observation`, `limitation`, `trace`.
   - Nodos como chips SVG/HTML pequeños con iconos Lucide: `Eye`, `FileCheck`, `BadgeCheck`, `TriangleAlert`, `Hash`, `Workflow`.
   - Paleta del sitio: nodos cobalt/navy, acento coral `#fd7239` en el nodo resultado o alerta.
   - Conectores con `stroke-dasharray` + animación en loop; pulsos suaves en nodos.
   - Accesibilidad: `role="img"`, `aria-label` descriptivo por variante, `aria-hidden` en decoración.
2. **Editar `PrinciplesGrid`** en `src/routes/about.tsx`:
   - Reemplazar `PRINCIPLE_ICONS` (Lucide estáticos) por `<PrincipleDiagram variant={...} />`.
   - Mantener: número fantasma grande, título, copy, hover, reveal escalonado, clases de card.
3. **Animaciones**: reutilizar keyframes existentes en `src/styles.css` (loop-dash, loop-pulse); añadir solo lo que falte. Respetar `prefers-reduced-motion`.

## Verificación

- Build OK (`/tmp/observability/build-errors.log`).
- Captura con Playwright de la sección en `/about` confirmando los 3 microdiagramas renderizados y alineados a la referencia.
