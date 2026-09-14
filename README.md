# Prácticas de la Asignatura de Integradora

## Práctica 02: Arquitectura de una aplicación móvil

En esta práctica se diseñó y documentó la arquitectura de una aplicación móvil desarrollada con Flutter. El diseño representa el flujo principal de las solicitudes autenticadas desde el cliente móvil hasta la API y las capas de persistencia.

### Trabajo realizado

- Se definió el cliente móvil multiplataforma para iOS y Android con Flutter.
- Se incorporó Keycloak como capa de autenticación y control de acceso mediante OAuth 2.0, OpenID Connect y tokens JWT.
- Se representó una API REST desarrollada con FastAPI para manejar la lógica de negocio y los endpoints.
- Se documentó la comunicación de la API con PostgreSQL para datos relacionales y MongoDB para datos orientados a documentos.
- Se agregó la integración con Leaflet o un servicio de mapas para mostrar información geoespacial.
- Se incluyó la infraestructura local de desarrollo con Docker y Docker Compose.
- Se representó el flujo de control de versiones entre Git y GitHub.
- Se generaron vistas del diagrama en temas claro y oscuro y se realizaron verificaciones visuales en diferentes resoluciones.

### Entregables

- [Archivo de arquitectura](flutter-mobile-architecture.architecture.json): definición estructurada de componentes, límites y conexiones.
- [Diagrama interactivo](flutter-mobile-architecture.html): visualización completa de la arquitectura.
- [Verificación visual](flutter-mobile-architecture.visual-check.html): revisión del diagrama en distintos escenarios.
- [Documentación adicional](docs/index.html): versión disponible dentro de la carpeta `docs`.
