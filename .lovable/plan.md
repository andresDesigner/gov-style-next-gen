## Objetivo
Armonizar visualmente los dos artefactos del hero — **Timeline de deadlines** (izquierda, ancho completo bajo el H1) y **Engagement Status Preview** (aside derecho) — para que se lean como piezas del mismo sistema, sin quitar contenido.

## Diagnóstico (verificado en `Home.tsx`, `DeadlineCoverageDiagram.tsx`)
Ambos elementos hoy son "correctos" pero visualmente disonantes:

| Aspecto | Timeline actual | Engagement card actual |
|---|---|---|
| Contenedor | `border-foreground/15`, `bg-card/60`, `p-5`, sin sombra | mismo border, `bg-card` sólido, `p-6`, sombra `[0_2px_0_0_...]` |
| Cabecera | ninguna | Badge TRACE-001 + título + subtítulo |
| Color source | hex crudos (`#031436`, `#033EAD`) dentro del SVG | tokens (`bg-primary`, `text-foreground`) |
| Marcadores | círculos 4–6 px sin sistema jerárquico claro | círculos 24 px con estados idle/active/done |
| Tipografía interna | SVG 9 px mono + 13 px sans, sin escala compartida | 10 px mono uppercase + 12 px + 18 px |
| Pie / metadata | nada | franja "Progress 38%" + ref line |

El resultado es que uno se ve como "diagrama técnico suelto" y el otro como "card de producto", aunque cuentan la misma historia (tiempo → progreso → verificación).

## Estrategia
Aplicar un **sistema de artefacto** compartido — mismo marco, misma cabecera, mismo vocabulario de nodos, misma franja de pie — para que ambos sean claramente "dos vistas del mismo mecanismo": *tiempo externo* (regulación) y *tiempo interno* (tu engagement).

## Cambios de diseño (sin borrar contenido)

**1. Marco unificado ("artifact frame")**
- Mismo `border-foreground/15`, `bg-card` sólido (quitar `/60` del timeline), `p-6`, misma sombra sutil `shadow-[0_2px_0_0_rgba(15,23,42,0.06)]`.
- Ambos con la misma altura mínima en desktop para que los bordes inferiores coincidan.

**2. Cabecera de metadata gemela**
- Añadir al timeline una cabecera equivalente al TRACE badge: `REF-T2 · SCOPE: FEDERAL` + título "ADA Title II Deadline Coverage" + subtítulo "Two statutory deadlines governing Web/App accessibility."
- Mantiene todo el contenido actual y le da la misma jerarquía visual que la card derecha.

**3. Vocabulario de nodos compartido**
Definir 3 estados que aparecen en los dos diagramas con la misma forma exacta:
- `passed / now` → círculo sólido navy 12 px
- `active / current milestone` → anillo cobalt 14 px con dot interno
- `future / target` → círculo hueco navy 12 px con línea punteada de conexión

Aplicar en TriStep **y** en los markers del SVG timeline (NOW, 2027, 2028).

**4. Sistema tipográfico único en SVG**
Reemplazar tamaños actuales del SVG por la misma escala de la card:
- Kicker/eyebrow: 10 px mono, tracking widest, `#031436`
- Etiqueta principal: 13 px sans-serif, weight 600
- Metadata: 10 px mono uppercase
Sube legibilidad y hace que ambos artefactos "hablen el mismo idioma".

**5. Franja de pie espejo**
- Timeline: añadir bajo el SVG una fila `Runway used · 12%` (mismo estilo que `Progress · 38%` de la card).
- Card: añadir en el borde inferior un mini-eyebrow `Trace ref · TRACE-001` alineado con el `REF-T2` del timeline.
Ambos cierran con la misma franja horizontal delgada.

**6. Color governance**
- Sustituir hex crudos del SVG por `currentColor` + clases (`text-primary`, `text-foreground`) vía `<g className>` o `stroke="currentColor"`, para que si mañana cambia el token, cambien los dos a la vez.
- Regla: **navy = estructura/pasado**, **cobalt = movimiento/actual**, **outline = futuro**. Aplicada consistente en los dos.

**7. Alineación de columnas**
- Hoy: timeline vive en la col izquierda (12 cols en mobile, 7 en desktop implícito) y card en col derecha (5). El borde superior del timeline está debajo del párrafo intro, mientras la card empieza más arriba.
- Ajustar: subir el inicio del timeline para que su borde superior quede a la misma altura que el borde superior de la card (usar `lg:mt-0` y reordenar en desktop). En mobile permanecen apilados en orden narrativo.

**8. Densidad y ritmo**
- Estandarizar padding interno vertical: 24 px arriba/abajo en ambos.
- Espaciado entre cabecera → contenido → pie idéntico (16 / 20 / 16).

**9. Micro-detalles de acabado**
- Añadir marca de textura `dot-grid` sutilísima detrás **de los dos** contenedores para que se sientan del mismo lote (o quitarla de los dos — hoy solo el hero global la tiene).
- Mismos `stroke-linecap="round"` y `stroke-width` (1.5) en todos los trazos SVG del timeline (hoy mezcla 1, 1.5, 3).

## Detalles técnicos
Archivos a tocar:
- `src/components/home/DeadlineCoverageDiagram.tsx` — nuevo header + footer, tokens en vez de hex, escala tipográfica, nodos rediseñados.
- `src/components/home/Home.tsx` (TriStep + aside card) — mismo vocabulario de nodos, alineación de columna, padding armonizado.
- Opcional: extraer `ArtifactFrame` a `src/components/home/ArtifactFrame.tsx` para no duplicar el marco (border + padding + shadow + header slot + footer slot).

Sin cambios de contenido ni de datos. Sin nuevas dependencias. Todo dentro del sistema de tokens existente en `src/styles.css`.

## Fuera de alcance
- No se elimina ningún dato del timeline ni de la card.
- No se rediseña el resto del hero (H1, CTAs, párrafo intro).
- No se toca el comportamiento móvil de la lista semántica del timeline.
