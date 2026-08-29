# Escala uniforme de ilustraciones

Hoy cada página define su propio ancho a mano, y por eso las ilustraciones no coinciden:

| Ubicación | Ancho actual (desktop) |
| --- | --- |
| Hero Home | 560 px |
| Hero Services | 480 px |
| Hero Contact | 440 px |
| Hero Government | 440 px (default) |
| Hero About | 380 px |
| Hero Verify | diagrama (sin ilustración) |
| Practice Lead (About) | 400 px |
| Engagement (Services) | 380 px |
| Availability (Services) | 280 px |
| Evidence (Government) | 240 px |
| Steps (Contact) | 240 px |
| Deadline table (Home) | 240 px |

## Qué se va a hacer

Definir dos escalas fijas y aplicarlas en todo el sitio:

- **Escala hero (impacto alto):** 400 px en mobile, 520 px en desktop. Se usa en los heroes de Home, Services, Government, About y Contact. El hero de Verify mantiene su diagrama de 9 etapas, pero se ajusta su ancho para ocupar el mismo bloque visual.
- **Escala de sección (impacto medio):** 260 px en mobile, 320 px en desktop. Se usa en Practice Lead, Engagement Model, Availability, Evidence, Contact Steps y la tabla de Deadline del Home.

Con eso, el hero siempre domina la página y las ilustraciones internas quedan claramente subordinadas y consistentes entre sí.

## Detalles técnicos

- Agregar en `Illustration.tsx` una prop `scale` con valores `"hero"` y `"section"` que resuelva las clases de ancho por defecto; `className` sigue disponible para casos puntuales de posición (márgenes, `hidden lg:block`).
- `PageHero.tsx` usa `scale="hero"` como default y deja de depender de `maxWidthClass` por página; se elimina esa prop de los heroes de Services, Contact y About.
- Actualizar los llamados en `Home.tsx`, `services.tsx`, `about.tsx`, `government.tsx` y `contact.tsx` para pasar `scale="section"` en las ilustraciones internas.
- Mantener el ajuste especial del hero del Home (las personas ancladas al borde inferior con el card entre ellas) — solo se normaliza el ancho.
- Verificar en desktop y mobile con capturas de las 6 páginas que no haya desbordes ni cambios de altura del hero.
