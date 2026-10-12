# Navegación de pantallas — Lezhin Comics

> Los IDs Rxx y Axx corresponden al inventario. Los recorridos siguen las etiquetas visibles; las transiciones plausibles deducidas de controles están marcadas `(inferida)` en sus etiquetas y explicadas en la matriz. Las pantallas no están a escala de navegación: cada nodo representa una pantalla del sketch.

```mermaid
flowchart LR
  subgraph L["Lector / usuario"]
    direction TB
    R01["R01 · Splash"] -->|Continuar| R02["R02 · Login"]
    R02 -->|Crear cuenta| R03["R03 · Registro"]
    R03 -->|Registro terminado (inferida)| R04["R04 · Home"]
    R02 -->|Iniciar sesión (inferida)| R04
    R02 -->|Recuperar acceso · destino no dibujado| RX([Salida no representada])
    R04 -->|Explorar| R05["R05 · Explorar"]
    R04 -->|Buscar · inferida| R06["R06 · Búsqueda"]
    R05 -->|Buscar| R06
    R06 -->|Enviar consulta| R07["R07 · Resultados"]
    R07 -->|Abrir título (inferida)| R09["R09 · Episodios"]
    R09 -->|Leer| R10["R10 · Lector"]
    R10 -->|Volver (inferida)| R09
    R04 -->|Abrir biblioteca (inferida)| R11["R11 · Biblioteca"]
    R04 -->|Abrir favoritos (inferida)| R12["R12 · Favoritos"]
    R04 -->|Comprar monedas| R13["R13 · Monedas"]
    R04 -->|Consultar historial| R14["R14 · Historial"]
    R04 -->|Abrir perfil (inferida)| R15["R15 · Perfil / configuración"]
    R15 -->|Cerrar sesión| R02
  end

  subgraph A["Administrador / editor"]
    direction TB
    A01["A01 · Login admin"] -->|Iniciar sesión (inferida)| A02["A02 · Dashboard"]
    A02 -->|Abrir menú| A03["A03 · Menú"]
    A03 -->|Cómics| A04["A04 · Gestión de cómics"]
    A04 -->|Buscar| A05["A05 · Buscar cómic"]
    A04 -->|Agregar cómic| A06["A06 · Agregar cómic"]
    A05 -->|Seleccionar título (inferida)| A07["A07 · Editar información"]
    A06 -->|Guardar (inferida)| A04
    A07 -->|Actualizar| A04
    A07 -->|Cancelar| A04
    A04 -->|Agregar episodio| A09["A09 · Agregar episodio"]
    A09 -->|Guardar (inferida)| A04
    A04 -.->|Abrir detalle · tentativo, rótulo ambiguo| A12["A12 · Detalle (rótulo ambiguo)"]
    A03 -->|Usuarios| A11a["A11a · Gestión de usuarios"]
    A11a -->|Seleccionar usuario (inferida)| A11b["A11b · Detalle / gestión de usuario"]
    A11b -->|Volver (inferida)| A11a
    A03 -->|Categorías| A13["A13 · Gestión de categorías"]
    A03 -->|Estadísticas| A14["A14 · Estadísticas"]
    A03 -->|Configuración| A15["A15 · Configuración administrativa"]
    A03 -->|Cerrar sesión| A01
    A15 -->|Cerrar sesión| A01
  end

  classDef reader fill:#e8f2ff,stroke:#2864a5,color:#142b44;
  classDef admin fill:#fff0df,stroke:#a85a12,color:#472606;
  classDef exit fill:#f4f4f4,stroke:#777,color:#333;
  class R01,R02,R03,R04,R05,R06,R07,R09,R10,R11,R12,R13,R14,R15 reader;
  class A01,A02,A03,A04,A05,A06,A07,A09,A11a,A11b,A12,A13,A14,A15 admin;
  class RX exit;
```

**Compartidas:** no hay pantallas compartidas demostrables en los sketches. Los accesos de lector y administrador son diferentes. `RX` solo explicita que el control “Recuperar” no tiene pantalla destino representada; no es una pantalla de la aplicación ni cuenta en el inventario.

