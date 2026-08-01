---
id: architecture.microservices.es
type: architecture
contentProfile: architecture
title: { tr: "Mikroservis Mimarisi", en: "Microservices Architecture", es: "Arquitectura de Microservicios" }
summary: { tr: "Uygulamayı bağımsız dağıtılabilir, küçük ve belirli bir iş alanına odaklı servisler kümesine bölen mimari stil.", en: "An architectural style structuring an application as a collection of independently deployable, domain-focused services.", es: "Estilo arquitectónico que estructura una aplicación como una colección de servicios independientes centrados en el dominio." }
status: reviewed
maturity: active
categories: [architectures, server-cloud]
tags: [microservices, distributed-systems, bounded-context, api-gateway]
locale: es
translationKey: microservices
canonicalId: architecture.microservices
translationStatus: reviewed
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.fowler.microservices, source.swebok-v4]
related: [architecture.modular-monolith.es, architecture.cqrs-event-sourcing.es]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [scalability, maintainability, replaceability, resilience]
applicableDomains: [distributed-systems, enterprise, web]
---

<!-- section:definition -->
## Definición y Descripción del Problema

La Arquitectura de Microservicios es un estilo arquitectónico que estructura una aplicación como un conjunto de servicios pequeños y autónomos diseñados en torno a dominios de negocio. Cada servicio se ejecuta en su propio proceso y se comunica mediante mecanismos ligeros (HTTP/REST, gRPC).

En aplicaciones monolíticas grandes, el código se acopla, la comunicación entre equipos se ralentiza y un fallo único puede tumbar todo el sistema. Los microservicios resuelven estos problemas mediante límites estrictos de contexto (Bounded Contexts).

<!-- section:components -->
## Componentes Principales

- **API Gateway:** Punto único de entrada que gestiona solicitudes, enrutamiento, autenticación y límite de tasa.
- **Microservicios (Domain Services):** Servicios autónomos con bases de datos independientes (Database-per-Service) y lógica encapsulada.
- **Registro y Descubrimiento de Servicios:** Registro dinámico que mantiene ubicaciones de red de los servicios (ej. Consul, Eureka).
- **Telemetría Centralizada:** Trazabilidad distribuida (OpenTelemetry), agregación de logs y paneles de métricas.

<!-- section:data-flow -->
## Flujo de Datos y Control (Diagrama Mermaid)

```mermaid
flowchart TD
    Client[Cliente / SPA / Móvil] --> Gateway[API Gateway]
    Gateway --> AuthServ[Servicio de Autenticación]
    Gateway --> OrderServ[Servicio de Pedidos]
    Gateway --> PaymentServ[Servicio de Pagos]

    OrderServ --> OrderDB[(Base de Pedidos)]
    PaymentServ --> PaymentDB[(Base de Pagos)]

    OrderServ -- Event Bus / Kafka --> PaymentServ
```

<!-- section:use-cases -->
## Casos de Uso y Compromisos

### Casos de Uso Principales
- **Organizaciones de Múltiples Equipos:** Estructuras alineadas con la Ley de Conway donde equipos independientes gestionan dominios distintos.
- **Escalabilidad Heterogénea:** Sistemas donde submódulos específicos requieren un escalado masivo en comparación con otros.

<!-- section:trade-offs -->
### Compromisos (Trade-offs)
- **Complejidad Distribuida:** Latencia de red, fallos parciales y gestión de consistencia eventual.
- **Sobrecarga Operativa:** Requiere automatización CI/CD, orquestación de contenedores e infraestructura de telemetría.

<!-- section:production -->
## Desafíos Operativos y de Producción

1. **Aislamiento de Base de Datos:** Las consultas directas entre bases de datos de diferentes servicios están prohibidas; la integración debe ser mediante API o mensajería.
2. **Patrones de Resiliencia:** Implementar Circuit Breakers y reintentos para comunicaciones entre servicios.

<!-- section:security -->
## Consideraciones de Seguridad

- Aplicar mTLS (TLS Mutuo) para comunicación entre servicios y propagación de contexto mediante tokens JWT.

<!-- section:testing -->
## Pruebas y Validación

- Implementar Pruebas de Contrato (Pact) para evitar cambios disruptivos en las API entre servicios.

<!-- section:observability -->
## Observabilidad

- Propagar un `Trace ID` global a través de todos los servicios e inspeccionar trazas distribuidas.

<!-- section:alternatives -->
## Alternativas

- **Monolito Modular:** Alternativa de menor complejidad operativa para equipos pequeños y etapas iniciales.

<!-- section:sources -->
## Fuentes

- Martin Fowler, James Lewis — *Microservices: a definition of this new architectural term*
- IEEE SWEBOK v4.0 — Software Architecture Area
