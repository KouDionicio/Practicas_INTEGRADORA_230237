# Inventario de pantallas

## Método de conteo

Las láminas `lector_usuario1` y `admin1` muestran mosaicos de sketches; se contó cada viñeta que representa una composición de pantalla distinta. Las láminas `lector_usuario2` y `admin2` son acercamientos de las pantallas 15 ya presentes en sus mosaicos y no suman nuevas pantallas. Resultado: **28 pantallas únicas**, 14 por rol; ninguna compartida explícitamente.

Los nombres de archivo están enlazados desde `../sketches/`. El número original se conserva en el ID. Como el tablero admin repite “Teléfono 11”, se usan sufijos locales `A11a`/`A11b` para distinguir imágenes, sin corregir la fuente.

## Lector / usuario — 14

| ID | Etiqueta del sketch | Evidencia | Observación |
|---|---|---|---|
| R01 | Teléfono 01 — Splash | [lector_usuario1.png](../sketches/lector_usuario1.png) | Inicio visual. |
| R02 | Teléfono 02 — Login | [lector_usuario1.png](../sketches/lector_usuario1.png) | Iniciar sesión, crear cuenta, recuperar. |
| R03 | Teléfono 03 — Registro | [lector_usuario1.png](../sketches/lector_usuario1.png) | Formulario de registro. |
| R04 | Teléfono 04 — Home | [lector_usuario1.png](../sketches/lector_usuario1.png) | Recomendados y navegación inferior. |
| R05 | Teléfono 05 — Explorar | [lector_usuario1.png](../sketches/lector_usuario1.png) | Categorías y géneros. |
| R06 | Teléfono 06 — Búsqueda | [lector_usuario1.png](../sketches/lector_usuario1.png) | Consulta y filtros. |
| R07 | Teléfono 07 — Resultados | [lector_usuario1.png](../sketches/lector_usuario1.png) | Lista de resultados. |
| R09 | Teléfono 09 — Episodios | [lector_usuario1.png](../sketches/lector_usuario1.png) | Detalle y lista de episodios; el ID 08 no aparece. |
| R10 | Teléfono 10 — Lector | [lector_usuario1.png](../sketches/lector_usuario1.png) | Visor con controles de lectura. |
| R11 | Teléfono 11 — Biblioteca | [lector_usuario1.png](../sketches/lector_usuario1.png) | Biblioteca. |
| R12 | Teléfono 12 — Favoritos | [lector_usuario1.png](../sketches/lector_usuario1.png) | Lista de favoritos. |
| R13 | Teléfono 13 — Monedas | [lector_usuario1.png](../sketches/lector_usuario1.png) | Paquetes y controles de compra. |
| R14 | Teléfono 14 — Historial | [lector_usuario1.png](../sketches/lector_usuario1.png) | Historial de lectura. |
| R15 | Teléfono 15 — Perfil | [lector_usuario1.png](../sketches/lector_usuario1.png), [detalle](../sketches/lector_usuario2.png) | El segundo asset amplía perfil/configuración, duplicado temático. |

## Administrador / editor — 14

| ID | Etiqueta del sketch | Evidencia | Observación |
|---|---|---|---|
| A01 | Teléfono 01 — Login admin | [admin1.png](../sketches/admin1.png) | Acceso administrativo independiente. |
| A02 | Teléfono 02 — Dashboard | [admin1.png](../sketches/admin1.png) | Métricas y accesos rápidos. |
| A03 | Teléfono 03 — Menú | [admin1.png](../sketches/admin1.png) | Dashboard, usuarios, cómics, episodios, categorías, estadísticas, configuración y salida. |
| A04 | Teléfono 04 — Gestión de cómics | [admin1.png](../sketches/admin1.png) | Listado, acciones editar/eliminar y agregar. |
| A05 | Teléfono 05 — Buscar cómic | [admin1.png](../sketches/admin1.png) | Búsqueda y filtros. |
| A06 | Teléfono 06 — Agregar nuevo cómic | [admin1.png](../sketches/admin1.png) | Formulario de alta. |
| A07 | Teléfono 07 — Editar información | [admin1.png](../sketches/admin1.png) | Actualizar/cancelar. |
| A09 | Teléfono 09 — Agregar episodio | [admin1.png](../sketches/admin1.png) | Formulario de episodio; 08 y 10 no se muestran. |
| A11a | Teléfono 11 — Gestión de usuarios | [admin1.png](../sketches/admin1.png) | Listado/acciones; etiqueta 11 repetida. |
| A11b | Teléfono 11 — Gestión de usuario | [admin1.png](../sketches/admin1.png) | Ficha de usuario distinta; sufijo para desambiguar. |
| A12 | Teléfono 12 — Detalle de usuario | [admin1.png](../sketches/admin1.png) | Muestra título “Cómic: …” y datos/carga de páginas; inconsistencia semántica a revisar. |
| A13 | Teléfono 13 — Gestión de categorías | [admin1.png](../sketches/admin1.png) | Alta/eliminación por categoría. |
| A14 | Teléfono 14 — Estadísticas | [admin1.png](../sketches/admin1.png) | Gráficas y métricas. |
| A15 | Teléfono 15 — Configuración administrativa | [admin1.png](../sketches/admin1.png), [detalle](../sketches/admin2.png) | El segundo asset amplía esta pantalla; duplicado temático. |

## Duplicados, faltantes y ambigüedades

- Cada lámina `.jfif` corresponde visualmente a la misma lámina que su `.png`; son codificaciones alternativas, no pantallas adicionales. Todos los ocho archivos se conservaron.
- Los detalles `lector_usuario2` y `admin2` amplían las pantallas 15 de sus respectivos tableros; no se cuentan otra vez.
- Falta el número 08 en ambos tableros; también falta 10 en el tablero administrador. No se infiere contenido para esos IDs.
- El tablero admin etiqueta dos viñetas distintas como 11. Se distinguen como A11a y A11b en la documentación, reteniendo las etiquetas originales.
- La viñeta admin 12 se titula “Detalle de usuario”, pero el contenido parece describir carga/actualización de un cómic/episodio. Se conserva el nombre legible y se marca ambigua; requiere aclaración del autor.
- No se identifica pantalla de recuperación, confirmación, compra completada, errores o confirmación de cierre de sesión.
- No se observan pantallas compartidas explícitas entre roles.

