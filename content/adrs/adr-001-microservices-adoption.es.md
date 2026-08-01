---
id: adr.001-microservices-adoption.es
type: architecture-decision-record
contentProfile: architecture
title: { tr: "ADR 001: Monolitik Yapıdan Mikroservis Mimarisine Geçiş Kararı (Kabul Edildi)", en: "ADR 001: Migration from Monolith to Microservices Architecture (Accepted)", es: "ADR 001: Migración de Monolito a Microservicios (Aceptado)" }
summary: { tr: "Büyüyen mühendislik ekibinin bağımsız dağıtım yapabilmesi ve heterojen ölçekleme için mikroservis mimarisinin kabulü.", en: "Accepting microservices architecture to enable independent team deployments and heterogeneous scaling.", es: "Aceptación de microservicios para permitir despliegues independientes y escalado heterogéneo." }
status: reviewed
maturity: active
categories: [architectures, engineering-processes]
tags: [adr, microservices, architecture-decision, accepted]
locale: es
translationKey: adr-001-microservices-adoption
canonicalId: adr.001-microservices-adoption
translationStatus: reviewed
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.fowler.microservices, source.iso-42010]
related: [architecture.microservices.es, architecture.modular-monolith.es]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, decision-owner]
qualityAttributes: [scalability, maintainability, replaceability]
applicableDomains: [enterprise, web, finance]
---

<!-- section:definition -->
## Contexto y Descripción del Problema

Nuestra plataforma monolítica de comercio electrónico experimentó cuellos de botella en los despliegues a medida que el equipo creció de 15 a 90 ingenieros en 18 meses. Los cambios requerían despliegues completos del monolito.

<!-- section:components -->
## Decisión

Decidimos descomponer el núcleo monolítico en una **Arquitectura de Microservicios** utilizando límites de dominio (DDD), aplicando una política estricta de base de datos por servicio.

<!-- section:data-flow -->
## Diagrama de Decisión de Arquitectura (Diagrama Mermaid)

```mermaid
flowchart TD
    Monolith[Aplicación Monolítica Principal] -->|Patrón Strangler Fig| Micro1[Microservicio de Pedidos]
    Monolith -->|Patrón Strangler Fig| Micro2[Microservicio de Pagos]
    Monolith -->|Patrón Strangler Fig| Micro3[Microservicio de Inventario]
    
    Micro1 --> DB1[(Base de Pedidos)]
    Micro2 --> DB2[(Base de Pagos)]
    Micro3 --> DB3[(Base de Inventario)]
```

<!-- section:use-cases -->
## Opciones Evaluadas

1. **Monolito Modular:** Más sencillo a corto plazo, pero no satisface la autonomía de despliegue ni el escalado heterogéneo.
2. **Arquitectura de Microservicios (Seleccionada):** Introduce complejidad operativa pero permite el escalado organizacional de múltiples equipos.

<!-- section:trade-offs -->
## Consecuencias y Compromisos

### Consecuencias Positivas (Pros)
- Tuberías de despliegue independientes para cada equipo.
- Escalado horizontal independiente para dominios de alto tráfico.

### Consecuencias Negativas y Riesgos (Contras)
- Requisito de infraestructura para trazabilidad distribuida y mTLS.
- Gestión de la consistencia eventual entre servicios.

<!-- section:production -->
## Estrategia de Implementación

- Aplicar el **Patrón Strangler Fig** para extraer microservicios de forma incremental (Pagos primero, Pedidos después).

<!-- section:security -->
## Política de Seguridad

- Forzar mTLS (Istio Service Mesh) y propagación de tokens JWT en todas las llamadas entre servicios.

<!-- section:testing -->
## Estrategia de Pruebas

- Integrar Pruebas de Contrato (Pact) en las tuberías CI.

<!-- section:observability -->
## Decisión de Observabilidad

- Exigir trazabilidad distribuida con OpenTelemetry y Jaeger en todos los microservicios.

<!-- section:alternatives -->
## Alternativas Rechazadas

- Mantener la base de código monolítica (Incompatible con los objetivos de crecimiento).

<!-- section:sources -->
## Fuentes

- ISO/IEC/IEEE 42010:2022 — Architecture Decision Records
- Martin Fowler — *Microservices Guide*
