## Objetivo

Sacar el bloque "Regulatory Map · ADA Title II Compliance Deadlines" del Hero y convertirlo en una sección independiente justo después del Hero, rediseñada como dos cards comparativas en vez de un timeline lineal.

## Cambios

**1. Hero (`src/components/home/Home.tsx`)**
- Eliminar el bloque `col-span-12` que contiene `<DeadlineCoverageDiagram />` (líneas 227-230). El Hero queda con título, subtítulo, CTAs, ilustración y card de status.
- Insertar la nueva sección `<DeadlineSection />` inmediatamente después del `</header>` del Hero, antes del strip "Overview".

**2. Nuevo componente `src/components/home/DeadlineSection.tsx`**

Sección full-width sobre el fondo lavanda existente (`#e6ecf5`) para separarla visualmente del Hero blanco/paper, con padding vertical generoso (`py-20 lg:py-24`) y contenedor `max-w-[1240px] px-6`, igual que las demás secciones.

Encabezado de sección:
- Eyebrow en mono uppercase tracking-widest (mismo estilo del label "Published · 2026-07-16"): `REGULATORY MAP · ADA TITLE II COMPLIANCE DEADLINES`
- H2 — propuestas para confirmar tras ver la preview:
  1. "When does this apply to your entity?"
  2. "Two deadlines. Which one is yours?"
  3. "Your deadline depends on who you serve."
- Descripción de una línea: "Compliance dates differ by population served — find your entity's date below."

Dos cards lado a lado (`grid-cols-1 md:grid-cols-2 gap-6`), reutilizando exactamente el lenguaje de card ya existente (fondo `bg-card`, `border border-foreground/15`, `rounded-xl`, `shadow-sm`, hover `shadow-md`, mismos tokens tipográficos):

Card 1 — plazo urgente:
- Acento naranja de marca (`--illus-coral`, el mismo del rayo del Hero) como borde izquierdo de 3px
- Pill/badge: "Due in ~9 months" (cálculo dinámico ya existente en `DeadlineCoverageDiagram`, se reutiliza la función `monthsUntil`), en tono naranja suave
- Dato clave grande y bold: "50,000+ residents"
- Descripción: "Larger public entities"
- Fecha secundaria en azul de marca: "April 26, 2027"

Card 2 — plazo lejano:
- Borde punteado (`border-dashed border-foreground/25`), sin acento de color, texto en tonos más neutros
- Pill: "Due in ~21 months"
- Dato clave: "Under 50,000 residents"
- Descripción: "Smaller entities · Special districts"
- Fecha en azul de marca, con menos peso: "April 26, 2028"

Debajo de las cards: barra de progreso horizontal simple (misma altura y colores que `ProgressMeter` del Hero) con un punto marcando "NOW" al inicio y marcas discretas para 2027 y 2028. Elemento secundario, no protagonista.

Accesibilidad: la sección se marca con `aria-labelledby`, las cards son una `<ol>` semántica, la barra de progreso es decorativa (`aria-hidden`) porque los datos ya están en texto. Se conserva la animación de entrada por scroll usando el hook `useInView` existente.

**3. `DeadlineCoverageDiagram.tsx`**
- Se deja de usar en el Home. Se extrae `monthsUntil` a la nueva sección (o se importa) y se elimina el componente si no queda referenciado en otras rutas (verificar `/verify` y `/government` antes de borrar).

## Notas técnicas

- Sin colores, fuentes ni radios nuevos: todo sale de los tokens ya definidos en `src/styles.css` (`--accent`, `--primary`, `--illus-coral`, `bg-card`, `rounded-xl`).
- Los meses restantes se calculan en cliente a partir de la fecha actual, igual que hoy.
- Sin cambios de backend ni de datos.

Tras implementar, te muestro la preview para confirmar el título final y los textos.
