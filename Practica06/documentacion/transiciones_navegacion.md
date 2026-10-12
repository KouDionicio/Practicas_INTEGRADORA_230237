# Transiciones de navegación

Las transiciones siguientes se limitan a controles o destinos que se alcanzan a reconocer en los sketches. La secuencia exacta no está numerada por flechas en los assets; donde se deduce una navegación por un control visible se marca **Inferida**. En las condiciones, “observada” significa que el control/acción está dibujado, no que el enlace esté probado en una aplicación funcional.

| Pantalla de origen | Acción del usuario | Pantalla de destino | Rol | Condición |
|---|---|---|---|---|
| R01 Splash | Continuar / abrir app | R02 Login | Lector | Inferida; inicio y login dibujados, transición no rotulada. |
| R02 Login | Crear cuenta | R03 Registro | Lector | Observada; control “Crear cuenta”. |
| R02 Login | Iniciar sesión | R04 Home | Lector | Inferida; autenticación no muestra resultado. |
| R02 Login | Recuperar | Destino no representado | Lector | Observada; hay control, no hay sketch de destino. |
| R03 Registro | Enviar registro | R04 Home | Lector | Inferida; no se dibuja confirmación ni destino. |
| R04 Home | Abrir explorar | R05 Explorar | Lector | Inferida por navegación inferior/categorías. |
| R04 Home | Abrir búsqueda | R06 Búsqueda | Lector | Inferida por icono de búsqueda. |
| R05 Explorar | Buscar | R06 Búsqueda | Lector | Inferida; ambas pantallas ofrecen búsqueda. |
| R06 Búsqueda | Enviar consulta / aplicar filtros | R07 Resultados | Lector | Inferida; destino consistente con pantalla de resultados. |
| R07 Resultados | Seleccionar cómic | R09 Episodios | Lector | Inferida; pantalla 09 contiene detalle/lista de episodios. |
| R09 Episodios | Leer episodio | R10 Lector | Lector | Inferida por botón “Leer”. |
| R10 Lector | Volver a episodios | R09 Episodios | Lector | Inferida por control de retroceso/lector. |
| R04 Home | Abrir biblioteca | R11 Biblioteca | Lector | Inferida por icono/etiqueta de biblioteca. |
| R04 Home | Abrir favoritos | R12 Favoritos | Lector | Inferida por icono de favoritos. |
| R04 Home | Abrir monedas | R13 Monedas | Lector | Inferida; destino muestra paquetes. |
| R04 Home | Abrir historial | R14 Historial | Lector | Inferida por acceso a historial. |
| R04 Home | Abrir perfil | R15 Perfil | Lector | Inferida por icono de perfil. |
| R15 Perfil | Cerrar sesión | R02 Login | Lector | Control observado; destino inferido. |
| A01 Login admin | Iniciar sesión | A02 Dashboard | Administrador/editor | Inferida; el resultado no se muestra. |
| A02 Dashboard | Abrir menú | A03 Menú | Administrador/editor | Inferida por botón de menú. |
| A03 Menú | Seleccionar cómics | A04 Gestión de cómics | Administrador/editor | Inferida por opción visible. |
| A04 Gestión de cómics | Buscar | A05 Buscar cómic | Administrador/editor | Observada por control/botón de búsqueda. |
| A04 Gestión de cómics | Agregar cómic | A06 Agregar nuevo cómic | Administrador/editor | Observada por botón “Agregar cómic”. |
| A05 Buscar cómic | Elegir resultado | A07 Editar información | Administrador/editor | Inferida; el resultado podría abrir edición. |
| A06 Agregar nuevo cómic | Guardar | A04 Gestión de cómics | Administrador/editor | Inferida; no se representa confirmación. |
| A07 Editar información | Actualizar | A04 Gestión de cómics | Administrador/editor | Control observado; retorno inferido. |
| A07 Editar información | Cancelar | A04 Gestión de cómics | Administrador/editor | Control observado; retorno inferido. |
| A04 Gestión de cómics | Agregar episodio | A09 Agregar episodio | Administrador/editor | Observada por acción visible. |
| A09 Agregar episodio | Guardar | A04 Gestión de cómics | Administrador/editor | Inferida; no se dibuja confirmación. |
| A04 Gestión de cómics | Abrir detalle (tentativo) | A12 Detalle, rótulo ambiguo | Administrador/editor | Inferida y ambigua: la lámina titula la pantalla 12 como detalle de usuario, pero sus campos parecen de cómic/episodio. Se conserva la conexión como tentativa para revisión. |
| A03 Menú | Seleccionar usuarios | A11a Gestión de usuarios | Administrador/editor | Inferida por opción visible. |
| A11a Gestión de usuarios | Seleccionar usuario | A11b Gestión/detalle de usuario | Administrador/editor | Inferida por listado/acciones. |
| A11b Gestión/detalle de usuario | Volver | A11a Gestión de usuarios | Administrador/editor | Inferida; navegación de retorno no rotulada. |
| A03 Menú | Seleccionar categorías | A13 Gestión de categorías | Administrador/editor | Inferida por opción visible. |
| A03 Menú | Seleccionar estadísticas | A14 Estadísticas | Administrador/editor | Inferida por opción visible. |
| A03 Menú | Seleccionar configuración | A15 Configuración administrativa | Administrador/editor | Inferida por opción visible. |
| A03 Menú | Cerrar sesión | A01 Login admin | Administrador/editor | Control observado; destino inferido. |
| A15 Configuración administrativa | Cerrar sesión | A01 Login admin | Administrador/editor | Control observado; destino inferido. |

## Límites de evidencia

Los sketches no especifican reglas de autenticación, errores, confirmaciones, persistencia, selección de rol ni el resultado de compra. El perfil/configuración de cada rol es distinto; no se modelan como una pantalla compartida. A12 aparece conectada desde gestión de cómics únicamente mediante una flecha tentativa y ambigua, marcada para revisión.

