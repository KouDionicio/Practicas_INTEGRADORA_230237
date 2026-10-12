# Práctica 06: Diagrama de secuencia de pantallas (sketches)

## Plataforma y objetivo

La plataforma seleccionada para el modelo CANVAS en la Práctica 03 es **Lezhin Comics**. La evidencia de la práctica anterior la describe como una plataforma de webtoons y cómics con canales web y móviles. Esta entrega organiza los sketches existentes para representar los recorridos de lector/usuario y administrador/editor.

El objetivo es representar de forma navegable las pantallas, acciones y recorridos principales de la aplicación móvil. El inventario identifica **28 pantallas únicas: 14 de lector/usuario y 14 del rol administrativo; ninguna compartida explícitamente**. El requisito de 15 pantallas únicas entre los roles se cumple. No se cuentan como pantallas nuevas las láminas de detalle del perfil, que amplían la pantalla 15 de cada rol.

## Roles

- **Lector/usuario:** descubre cómics, busca y explora títulos, consulta episodios, lee, administra biblioteca/favoritos, monedas e historial, y consulta su perfil.
- **Administrador/editor:** administra el catálogo, episodios, usuarios y categorías, consulta estadísticas y configuración administrativa.

Las responsabilidades se infieren de las etiquetas y controles visibles en los sketches. No se ve un selector de rol; existen pantallas de acceso separadas para ambos roles. El rol administrador/editor se trata como parte de estos sketches académicos; su existencia como interfaz oficial de Lezhin Comics no se verificó.

## Inventario y relación con assets

Los archivos `sketches/lector_usuario1.png` y `sketches/admin1.png` son láminas resumen. `lector_usuario2.png` y `admin2.png` amplían, respectivamente, la pantalla 15 de perfil/configuración ya incluida en cada lámina; no cuentan como pantallas nuevas. Los `.jfif` son versiones visualmente equivalentes de los tableros PNG, conservadas sin cambios.

El inventario detallado, incluidos identificadores, condición de duplicados y problemas de rotulación, está en [documentacion/inventario_pantallas.md](documentacion/inventario_pantallas.md). La matriz de transiciones y sus inferencias está en [documentacion/transiciones_navegacion.md](documentacion/transiciones_navegacion.md). Los roles están documentados en [documentacion/roles.md](documentacion/roles.md).

## Diagrama

Fuente editable de datos: [diagramas/diagrama_secuencia_pantallas.json](diagramas/diagrama_secuencia_pantallas.json); referencia textual: [diagrama Mermaid](diagramas/diagrama_secuencia_pantallas.md). El visor estático y sus fuentes están en `sitio/`. Cada pantalla tiene un nodo seleccionable y flechas que representan acciones. El visor permite filtrar por rol, desplazar y acercar/alejar el diagrama, y seleccionar un nodo para consultar el sketch original asociado. Las transiciones inferidas y la pantalla administrativa ambigua se identifican en los datos y la matriz.

## Visualización en GitHub Pages

**[Ver diagrama interactivo en GitHub Pages](https://koudionicio.github.io/Practicas_INTEGRADORA_230237/practica06/)**. La página muestra directamente el diagrama. Los PNG bajo `docs/practica06/assets/` son copias de publicación necesarias porque GitHub Pages sirve el contenido de `docs/`; los originales se conservan en `sketches/`.

## Uso como entrada para Archify

Proporciona al agente los cuatro archivos de `sketches/` y el Markdown del diagrama, junto con el inventario y la tabla de transiciones. Indica que los tableros resumen contienen las pantallas y que las láminas secundarias solo detallan el perfil/configuración. Solicita que conserve los IDs, los dos roles, las rutas señaladas como inferidas y la distinción entre evidencia e inferencia. No se verificó importación ni generación de un diagrama interactivo por Archify.

## Pendientes y observaciones

- Hay 28 pantallas únicas en total, por encima del mínimo de 15 solicitado para ambos roles.
- No se encontró selección explícita de rol ni pantallas compartidas identificables en los sketches.
- El tablero lector no muestra la viñeta 08. El tablero admin omite 08 y 10, y usa el número 11 para dos pantallas distintas. Se diferencian como `A11a` y `A11b` sin cambiar la etiqueta original.
- La evidencia disponible de la Práctica 03 sí identifica Lezhin Comics; por ello la plataforma no queda ambigua.
- No se encontró un exportador Mermaid instalado/configurado. Se entrega la fuente Markdown; no se generó una imagen exportada.

