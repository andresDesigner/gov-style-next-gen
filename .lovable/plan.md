## Plan: Ícono en el título de la sección Regulatory Map

### Alcance
Modificación visual pequeña y autocontenida en `src/components/home/DeadlineSection.tsx`.

### Cambio propuesto
Acompañar el título "When does this apply to your entity?" con un ícono decorativo a la izquierda, alineado a la primera línea del título.

### Opciones de ícono (Lucide)

1. **Recomendado: `CalendarClock`**
   - Comunica inmediatamente "plazos" y "cumplimiento temporal".
   - Estilo institucional, no excesivamente legal.
   - Se colocaría dentro de un círculo sutil de fondo `primary/10` con trazo `primary`.

2. **Alternativa A: `Map`**
   - Hace eco del eyebrow "Regulatory Map".
   - Más abstracto, útil si quieres reforzar la metáfora de "mapa regulatorio".

3. **Alternativa B: `Scale`**
   - Más formal/legal.
   - Puede sentirse demasiado judicial; usar solo si se quiere énfasis en normativa.

### Implementación técnica
- Importar el ícono elegido de `lucide-react`.
- Renderizarlo como elemento decorativo (`aria-hidden="true"`) dentro de un contenedor flex alineado al título.
- Tamaño del ícono: `24px` en desktop, `20px` en mobile.
- Contenedor: círculo `40px` con fondo `color-mix(in oklab, var(--primary) 8%, transparent)` y trazo `var(--primary)`.
- No agregar animación adicional; respeta `prefers-reduced-motion` heredado.

### Validación
- Verificar alineación visual en mobile y desktop.
- Confirmar que no se desborda el título ni se rompe el `max-w-[22ch]`.

### Pregunta al usuario
¿Te quedas con `CalendarClock` (recomendado por claridad de plazos), prefieres `Map` (eco de "Regulatory Map") o `Scale` (énfasis legal)?