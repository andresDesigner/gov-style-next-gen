# Plan: Rediseño del diagrama Service → Trace → Record (más ancho, cajas cuadradas)

## Problema
El diagrama vive en la columna derecha del header de "Service Catalog" (`lg:col-span-4`, ~370px útiles) con un cap de `max-w-[560px]`. Al poner 3 cajas en fila dentro de ese ancho, SERVICE y RECORD quedan angostos y muy verticales; TRACE se ve comprimido.

## Cambios

### 1. Darle más ancho al contenedor (`src/routes/services.tsx`)
- Cambiar el grid del header de la sección: texto `lg:col-span-7`, diagrama `lg:col-span-5` (antes 8/4). El diagrama gana ~90-120px reales.

### 2. Redistribuir las cajas (`src/components/site/ServiceTraceRecordDiagram.tsx`)
- Subir el cap del wrapper a `max-w-[640px]`.
- Rebalancear proporciones flex: SERVICE `flex-[0.9]`, TRACE `flex-[1.5]`, RECORD `flex-[0.9]`, de modo que las cajas laterales sean aproximadamente cuadradas en vez de columnas delgadas.
- Aumentar el padding interno (`px-4 py-6`) y el tamaño tipográfico de los labels (TRACE-11 y S-01 a `text-lg`).
- TRACE: lista de 5 pasos con más aire (`space-y-2.5`, checks de `h-4.5 w-4.5`, texto `text-[11px]`).
- Flechas de flujo un poco más largas (`w-4/w-5`) para llenar el espacio extra sin encoger las cajas.

### 3. Responsive (mobile)
- En pantallas pequeñas (< sm) las 3 cajas pasan a layout vertical apilado (SERVICE → TRACE → RECORD) con flechas rotadas hacia abajo, evitando que se aplasten a ~100px de ancho.

### 4. Animaciones
- Se conservan las entradas escalonadas existentes (checklist secuencial, shield VERIFIED al final, `prefers-reduced-motion` respetado vía clases existentes).

## Verificación
- Revisar build OK y capturar la sección en desktop (1280px) y mobile (390px) para confirmar proporciones cuadradas y sin desbordes.
