Plan para colocar el logo de ACT Verified como favicon.

## Qué se va a hacer
1. Obtener el archivo PNG real del logo desde el asset existente (`src/assets/act-verified-logo.png.asset.json`).
2. Copiarlo a `public/favicon.png` para que TanStack Start lo sirva en `/favicon.png`.
3. Actualizar `src/routes/__root.tsx` en `head().links`, reemplazando el favicon por defecto `{ rel: "icon", href: "/favicon.ico", type: "image/x-icon" }` por `{ rel: "icon", type: "image/png", href: "/favicon.png" }`.
4. Eliminar el favicon por defecto `public/favicon.ico` para evitar que siga sirviéndose la marca anterior.
5. Verificar que el build pase (`tsgo` / `bun run build`).

## Alcance
- Solo cambia metadatos del `<head>` y el archivo de favicon.
- No modifica paleta, tipografía, contenido de las vistas V1-V4, ni componentes de UI.
- No se tocan otros iconos o assets.

## Notas técnicas
- El logo actual es un asset CDN referenciado vía `.asset.json`; para favicon se necesita el binario en `public/`.
- Si el logo no es cuadrado, el navegador lo escalará/recortará automáticamente; se mantiene la identidad de marca.