# Practica 03: Business Model Canvas de Lezhin Comics

## Descripcion

En esta practica se selecciono Lezhin Comics como una plataforma multiplataforma de uso cotidiano para elaborar un Business Model Canvas. El modelo analiza como la plataforma ofrece, distribuye y monetiza contenido digital mediante su sitio web, aplicaciones moviles y tiendas de aplicaciones.

El trabajo se realizo con apoyo de Codex: el prompt se estructuro y ajusto para solicitar a Achify un diagrama claro, verificable y adecuado para documentar el modelo de negocio.

## Aplicacion elegida

**Lezhin Comics** es una plataforma digital de comics y webtoons que opera mediante web apps y mobile apps. La eleccion permite analizar una experiencia disponible en mas de un canal y observar elementos de contenido premium, descubrimiento editorial, creadores, derechos y pagos por episodios o moneda virtual.

## Actividades realizadas

1. **Eleccion de la aplicacion multiplataforma:** se selecciono Lezhin Comics por su presencia en web, aplicaciones moviles y tiendas de aplicaciones.
2. **Estructuracion del prompt:** se definieron el contexto de la plataforma, los nueve bloques del Business Model Canvas, la separacion entre hechos e inferencias y el formato de salida esperado para Achify.
3. **Revision del modelo:** se comprobo que el diagrama incluyera segmentos de clientes, propuesta de valor, canales, relaciones, recursos clave, actividades clave, socios clave, fuentes de ingresos y estructura de costos.
4. **Mejora del prompt:** se agregaron instrucciones para evitar cifras, costos, usuarios o suscripciones inventadas y para respaldar las afirmaciones con fuentes oficiales.
5. **Documentacion:** se conservaron el JSON de arquitectura, el HTML interactivo, el recibo de verificacion visual y las capturas en temas claro y oscuro.

## Prompt mejorado para Codex y Achify

El siguiente prompt esta pensado para mejorar el archivo existente. Su objetivo es que cada bloque del canvas tenga una descripcion detallada al seleccionarlo en el diagrama interactivo, sin saturar visualmente las tarjetas.

```text
Actua como analista de modelos de negocio, especialista en Business Model Canvas y experto
en la generacion de diagramas con Achify.

Trabaja sobre los archivos existentes de la practica 03 y mejora el modelo actual de
Lezhin Comics. No empieces otro proyecto, no cambies los nombres de los archivos y no
elimines las fuentes oficiales ya incluidas.

OBJETIVO PRINCIPAL
Cuando el usuario seleccione cualquiera de los nueve bloques del diagrama, el panel de
detalle debe mostrar una explicacion util y especifica de ese bloque. Actualmente solo se
muestran frases cortas; reemplazalas por descripciones enriquecidas en el campo `sublabel`
de cada componente del JSON, porque Achify utiliza ese campo para mostrar el detalle del
bloque seleccionado.

REQUISITOS DEL MODELO
Conserva exactamente estos nueve bloques y sus nombres:
1. Segmentos de clientes
2. Propuesta de valor
3. Canales
4. Relaciones con los clientes
5. Recursos clave
6. Actividades clave
7. Socios clave
8. Fuentes de ingresos
9. Estructura de costos

Para cada bloque, escribe en `sublabel` dos lineas breves, separadas con `\n`,
siguiendo este formato:
[Comprobado] o [Inferencia]
Que representa este bloque para Lezhin Comics.
Como funciona dentro de su plataforma web y movil.
Que evidencia o razonamiento permite incluirlo.

Las descripciones deben explicar el caso concreto de Lezhin Comics, no definir de forma
generica cada bloque. Usa lenguaje claro en espanol y evita repetir el titulo del bloque.
Las dos lineas deben ser breves para conservar la legibilidad de la tarjeta y se mostraran
tambien cuando el usuario abra el bloque.

CONTENIDO ESPERADO POR BLOQUE
- Segmentos: lectores de webtoons y comics digitales, sus necesidades y posibles perfiles.
- Propuesta de valor: catalogo, localizacion, descubrimiento, lectura digital y contenido
	premium.
- Canales: sitio web, web apps, aplicaciones moviles, tiendas de aplicaciones y redes.
- Relaciones: cuentas, recomendaciones, eventos, contenido gratuito, soporte y retencion.
- Recursos: plataforma tecnologica, catalogo, licencias, datos de contenido y marca.
- Actividades: publicacion, localizacion, curacion, desarrollo, pagos y distribucion.
- Socios: autores, editoriales, titulares de derechos, tiendas y proveedores tecnologicos.
- Ingresos: moneda virtual, episodios de pago y otros mecanismos solo si tienen evidencia.
- Costos: infraestructura, licencias, personal, localizacion y marketing; marcar como
	inferencia cuando no existan cifras publicas.

EVIDENCIA Y RIGOR
- Usa `[Comprobado]` solo para afirmaciones respaldadas por las fuentes oficiales ya
	incluidas en el archivo.
- Usa `[Inferencia]` para deducciones razonables y explicalas sin presentarlas como hechos.
- No inventes cifras, porcentajes, usuarios, ingresos, costos, suscripciones ni funciones.
- Si un dato no esta publicado, escribe `sin cifras publicas`.
- Conserva o mejora las fuentes de cada componente usando el campo `sources` de Achify.

CALIDAD DE LA INTERFAZ
- Conserva el formato JSON compatible con el esquema `architecture` de Achify.
- Mantiene el diagrama legible, con tarjetas de tamano estable y sin texto desbordado.
- No agregues parrafos largos dentro de las tarjetas; usa dos lineas informativas en el
	panel que aparece al seleccionar un bloque.
- Conserva el titulo, los nueve bloques, las vistas y la identidad visual general.
- Regenera el HTML a partir del JSON actualizado; no edites manualmente el HTML generado.
- Genera nuevamente la evidencia visual en temas claro y oscuro.

ENTREGA
1. Actualiza `lezhin-business-model-canvas.architecture.json`.
2. Regenera `lezhin-business-model-canvas.html`.
3. Regenera los archivos `lezhin-business-model-canvas.visual-check.*`.
4. Ejecuta la validacion de Archify y reporta cualquier problema sin ocultarlo.
5. Muestra un resumen de los cambios realizados en cada uno de los nueve bloques.
```

## Revision del modelo obtenido

El modelo generado contiene los nueve bloques requeridos y presenta una lectura coherente del negocio:

- **Segmentos:** lectores y fans digitales.
- **Propuesta de valor:** catalogo premium multiplataforma.
- **Canales:** web, aplicaciones, tiendas y redes.
- **Relaciones:** cuenta, recomendaciones y soporte.
- **Recursos:** plataforma, catalogo y licencias.
- **Actividades:** software, contenido y pagos.
- **Socios:** creadores y titulares de derechos.
- **Ingresos:** moneda virtual y episodios de pago.
- **Costos:** nube, licencias, personal y marketing, marcados como inferencia porque no hay cifras publicas.

El HTML incluye referencias oficiales para sustentar la existencia de la plataforma premium, el acceso mediante web y aplicaciones moviles, la moneda virtual, los episodios y los canales de distribucion. Esta evidencia se encuentra en la seccion de fuentes del diagrama.

## Interaccion del modelo

Cada bloque del diagrama puede seleccionarse para abrir su panel de detalle. En ese panel se
presenta la explicacion ampliada del bloque, su clasificacion como informacion comprobada o
inferencia, sus fuentes y la relacion que mantiene con los demas elementos del modelo. La
informacion visible en las tarjetas se mantiene resumida para conservar la legibilidad del
canvas completo.

## Archivos

- `lezhin-business-model-canvas.architecture.json`: especificacion estructurada del Business Model Canvas.
- `lezhin-business-model-canvas.html`: diagrama interactivo generado con Achify.
- `lezhin-business-model-canvas.visual-check.json`: recibo de la verificacion visual.
- `lezhin-business-model-canvas.visual-check.html`: pagina con las capturas de evidencia.
- `lezhin-business-model-canvas.visual-check.*.png`: capturas en diferentes resoluciones y temas.

## Conclusiones

Lezhin Comics es una opcion pertinente para esta practica porque permite analizar una plataforma digital con presencia web y movil, contenido propio o licenciado, descubrimiento editorial y monetizacion transaccional. El modelo es adecuado como primera aproximacion academica siempre que sus afirmaciones se mantengan diferenciadas entre evidencia comprobable e inferencia.
