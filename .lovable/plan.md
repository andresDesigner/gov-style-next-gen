# Rehacer el icono de Behavioral Verification

## Problema
El icono actual de `IconAccessibilityTraditional` en `src/components/home/ServiceIcon.tsx` está compuesto por rectángulos y círculos sueltos, por lo que no se parece al Símbolo Internacional de Acceso (ISA) tradicional que el cliente solicitó.

## Objetivo
Reemplazar el SVG por una silueta sólida y proporcionada del pictograma ISA clásico: figura sentada con cabeza circular, torso vertical, brazo extendido hacia adelante, pierna en ángulo, rueda grande semicircular y rueda trasera pequeña.

## Tareas
1. Reescribir `IconAccessibilityTraditional` en `src/components/home/ServiceIcon.tsx` usando un solo `path` relleno (`fill="currentColor"`) que reproduzca fielmente la silueta de la imagen de referencia.
2. Mantener el color actual (`text-primary`) y el tamaño (`h-8 w-8`) en el heading de "Behavioral Verification" en `src/components/home/Home.tsx`.
3. Verificar visualmente el resultado en el preview y confirmar que el build pasa.

## Criterio de aceptación
El icono se ve como el pictograma tradicional de accesibilidad, conserva el azul de marca y no requiere cambios en el resto de la página.
