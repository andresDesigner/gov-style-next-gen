# Iconografía en el diagrama "Structure vs. Exposure" (/verify)

## Objetivo
En la sección "Structure vs. Exposure" de `/verify`: eliminar la ilustración que acompaña el diagrama y agregar íconos tipo outline dentro de las cajas superiores del diagrama animado, siguiendo el estilo de la imagen de referencia (íconos lineales azul cobalto sobre fondo blanco).

## Cambios

### 1. Quitar la ilustración (`src/routes/verify.tsx`)
- Eliminar el componente `<Illustration src={ilDocsAsset.url} ... />` de la columna izquierda de la sección "Structure vs. Exposure".
- Eliminar el import `ilDocsAsset` (queda sin uso).
- La columna de texto queda solo con eyebrow, H2 y párrafo; el `DocumentArchitectureDiagram` permanece en la columna derecha (`lg:col-span-8`) sin otros cambios de layout.

### 2. Iconografía en las cajas del diagrama (`src/components/home/DocumentArchitectureDiagram.tsx`)
- Agregar un ícono SVG outline (stroke-only, ~1.75px, color cobalto `#033EAD`) dentro de cada caja blanca de la fila superior (TAGS), posicionado arriba del label del tag, al estilo de la referencia (código, árbol, altavoz, etc.).
- Mapeo de íconos por tag (Lucide, renderizados como SVG inline dentro del `<svg>` del diagrama o como paths equivalentes):
  - `H1` → ícono de encabezado (`Heading1`)
  - `P` → ícono de párrafo/texto (`Pilcrow` o `Type`)
  - `BUTTON` → ícono de botón (`SquareMousePointer`)
  - `IMG` → ícono de imagen (`Image`)
  - `DIV` → ícono de código/caja (`Code` / `</>`)
- Ajustar geometría de las cajas superiores: aumentar alto de 56px a ~72px y recentrar label + ícono (ícono centrado arriba, label debajo), actualizando las coordenadas Y de conectores, banda de discrepancia y viewBox si hace falta.
- Los íconos heredan las animaciones existentes (`reveal-stagger`) junto a su caja; sin animaciones nuevas.
- En la versión móvil (`sm:hidden`, lista semántica), agregar el mismo ícono al lado del label del tag en cada fila para mantener paridad visual.
- Accesibilidad: los íconos son decorativos (`aria-hidden`); el `<desc>` del SVG ya describe el contenido.

## Verificación
- Build sin errores y captura de la sección en desktop y mobile para confirmar que la ilustración ya no aparece y las cajas muestran ícono + tag correctamente alineados.
