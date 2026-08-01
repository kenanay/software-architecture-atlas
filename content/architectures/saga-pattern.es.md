---
id: architecture.saga-pattern.es
type: architecture
contentProfile: architecture
title: { tr: "Saga Mimari Kalıbı", en: "Saga Pattern Architecture", es: "Patrón de Arquitectura Saga" }
summary: { tr: "Dağıtık mikroservislerde 2PC kullanmadan veriyi tutarlı tutan telafi edici işlem (compensating transactions) dizisi.", en: "A sequence of local transactions with compensating actions managing distributed consistency without 2PC.", es: "Secuencia de transacciones locales con acciones compensatorias que gestionan la consistencia distribuida sin 2PC." }
status: reviewed
maturity: active
categories: [architectures, server-cloud]
tags: [saga, distributed-transactions, microservices, eventual-consistency]
locale: es
translationKey: saga-pattern
canonicalId: architecture.saga-pattern
translationStatus: reviewed
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.paper.saga, source.swebok-v4]
related: [architecture.microservices.es, architecture.transactional-outbox.es]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [resilience, consistency, performance, maintainability]
applicableDomains: [distributed-systems, e-commerce, finance]
---

<!-- section:definition -->
## Definición y Descripción del Problema

El Patrón Saga es un patrón de arquitectura distribuida diseñado para mantener la consistencia de datos a través de múltiples microservicios sin utilizar bloqueos ACID distribuidos.

Los protocolos tradicionales de compromiso en dos fases (2PC) bloquean recursos de base de datos e introducen latencia. Las Sagas reemplazan a 2PC ejecutando transacciones locales donde cada servicio confirma su estado localmente y activa **Transacciones Compensatorias** en caso de fallo posterior.

<!-- section:components -->
## Componentes Principales

- **Choreography Saga:** Modelo descentralizado donde los servicios escuchan eventos de dominio y ejecutan acciones locales.
- **Orchestration Saga:** Modelo centralizado donde un **Orquestador Saga** gestiona la ejecución y recuperación mediante una máquina de estados.
- **Transacciones Compensatorias:** Acciones explícitas de deshacer que revierten el impacto de pasos previamente confirmados.

<!-- section:data-flow -->
## Flujo de Datos y Control (Diagrama Mermaid)

```mermaid
sequenceDiagram
    autonumber
    participant Client as Cliente
    participant Orch as Saga Orchestrator
    participant Order as Servicio de Pedidos
    participant Pay as Servicio de Pagos
    participant Stock as Servicio de Inventario

    Client->>Orch: Iniciar Saga de Compra
    Orch->>Order: CreatePendingOrder()
    Order-->>Orch: OrderCreated (OK)
    
    Orch->>Pay: ProcessPayment()
    Pay-->>Orch: PaymentFailed (¡Error!)
    
    rect rgb(255, 230, 230)
        note over Orch,Order: Acción Compensatoria
        Orch->>Order: CancelOrder()
        Order-->>Orch: OrderCancelled (Ack)
    end
    
    Orch-->>Client: Compra Fallida (Pedido Cancelado)
```

<!-- section:use-cases -->
## Casos de Uso y Compromisos

### Casos de Uso Principales
- **Flujos de Trabajo de Múltiples Pasos:** Procesos de compra en comercio electrónico (Pedidos, Pagos, Inventario, Envíos).
- **Transferencias Financieras Distribuidas:** Movimientos de fondos entre microservicios que requieren trazabilidad y reversión.

<!-- section:trade-offs -->
### Compromisos (Trade-offs)
- **Consistencia Eventual:** El estado del sistema es temporalmente inconsistente hasta que la Saga finaliza o se revierte.
- **Falta de Aislamiento (ACID 'I'):** Los estados intermedios confirmados son visibles para consultas concurrentes.

<!-- section:production -->
## Desafíos Operativos y de Producción

1. **Gestión de Anomalías de Aislamiento:** Utilizar bloqueos semánticos (ej. estado `PENDING`) para evitar conflictos concurrentes.
2. **Persistencia del Orquestador:** Las transiciones de la máquina de estados deben almacenarse de forma duradera.

<!-- section:security -->
## Consideraciones de Seguridad

- Validar las solicitudes de compensación para evitar ejecuciones no autorizadas o forjadas.

<!-- section:testing -->
## Pruebas y Validación

- Realizar pruebas de inyección de fallos (Fault Injection) en cada paso para verificar las flujos compensatorios.

<!-- section:observability -->
## Observabilidad

- Asignar un `Saga Execution ID` global entre microservicios para trazabilidad distribuida.

<!-- section:alternatives -->
## Alternativas

- **Transacciones 2PC / XA:** Limitadas a bases de datos relacionales únicas y sistemas de menor escala.

<!-- section:sources -->
## Fuentes

- Hector Garcia-Molina, Kenneth Salem — *Sagas (ACM SIGMOD 1987)*
- IEEE SWEBOK v4.0 — Software Architecture & Distributed Systems
