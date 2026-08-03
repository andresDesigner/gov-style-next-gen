## Plan: Reubicar la ilustración junto a la tabla en "Deadline Reality"

### Alcance
Rediseño local de la sección `Deadline Reality` en `src/components/home/Home.tsx`. El objetivo es integrar la ilustración (`ilDeadline`) a la derecha del texto principal y a la izquierda de la tabla de métricas, reduciendo el ancho de la tabla para que ambos elementos compartan una fila visual unificada.

### Cambio propuesto

Actualmente la sección usa un layout de dos columnas:
- Izquierda (5/12): título, descripción, nota legal e ilustración apilada verticalmente.
- Derecha (7/12): tabla de 4 celdas en 2x2.

Nuevo layout propuesto:
- Fila superior (ancho completo): eyebrow, título, descripción y nota legal.
- Fila inferior dividida en dos columnas a partir de `lg`:
  - Izquierda (~4/12): ilustración `ilDeadline` centrada/alineada inferior.
  - Derecha (~8/12): tabla de métricas en formato vertical más estrecho (4 filas x 1 columna o 2x2 compacto), permitiendo que la ilustración ocupe el espacio liberado.

En mobile la disposición se apilará de forma natural: texto → tabla → ilustración.

### Implementación técnica

1. **Reestructurar el grid de la sección**
   - Cambiar el contenedor interno de `grid-cols-12 gap-8` a un layout de dos filas.
   - Fila de texto: `col-span-12`.
   - Fila de contenido: `grid grid-cols-1 lg:grid-cols-12 gap-8`.
     - Ilustración: `lg:col-span-4` (o `5`).
     - Tabla: `lg:col-span-8` (o `7`).

2. **Reducir la tabla de 4 celdas**
   - Opción A (preferida): convertir la tabla de 2x2 a una lista vertical de 4 filas dentro de un card delimitado (`border`, `bg-card`, `rounded-none` o `rounded-xl` según consistencia del sitio). Esto reduce drásticamente el ancho visual y deja espacio para la ilustración.
   - Opción B: mantener 2x2 pero más compacto (`p-5`, valores tipográficos ligeramente menores) y alinear la ilustración a la izquierda.
   - Se implementará la Opción A a menos que la preview sugiera que la Opción B funciona mejor.

3. **Reubicar la ilustración**
   - Mover el componente `<Illustration src={ilDeadline} ... />` desde la columna de texto a la nueva columna izquierda de la fila inferior.
   - Ajustar `max-w` de la ilustración a `180px–220px` para que no compita con la tabla.
   - En mobile (`< lg`) la ilustración se ocultará o pasará debajo de la tabla según jerarquía; se mantendrá visible en desktop.

4. **Mantener coherencia visual**
   - Sin nuevos colores, fuentes ni radios de borde.
   - La tabla conserva `bg-card`, bordes `foreground/20` y tipografía existente.
   - La nota legal permanece bajo el texto principal.

5. **Accesibilidad**
   - Preservar `aria-labelledby="deadline-reality-v4"`.
   - La ilustración sigue siendo decorativa (`alt=""`).
   - La tabla se representará como lista de definiciones o grid semántico sin perder lectura de pantalla.

### Validación
- Verificar en desktop que la ilustración y la tabla compartan la fila inferior sin desbordamiento.
- Verificar en mobile que el orden de lectura sea: título → descripción → nota → tabla → ilustración.
- Confirmar que el ancho total no excede `max-w-[1200px]`.
- Revisar que el blob/accentos de `Illustration` no se superpongan con la tabla (el componente ya soporta `blob={false}` y `accents={false}`).

### Pregunta al usuario
¿Te parece bien convertir la tabla de 4 celdas en una lista vertical de 4 filas junto a la ilustración, o prefieres mantener el formato 2x2 más compacto? Ambas opciones respetan el ancho reducido que pides.
