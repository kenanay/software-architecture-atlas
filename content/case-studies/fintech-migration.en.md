---
id: case-study.fintech-migration.en
type: case-study
contentProfile: architecture
title: { tr: "Vaka Çalışması: Bankacılık Çekirdeğinin Bulut Yerel Mikroservislere Dönüşümü", en: "Case Study: Core Banking Migration to Cloud-Native Microservices", es: "Caso de Estudio: Migración de Core Bancario a Microservicios Cloud-Native" }
summary: { tr: "Eski anasistem (mainframe) bankacılık sisteminin sıfır kesinti ile Event-Driven mikroservislere taşınma mimarisi.", en: "Zero-downtime core banking migration architecture from legacy mainframe to event-driven microservices.", es: "Arquitectura de migración de core bancario heredado a microservicios dirigidos por eventos sin tiempo de inactividad." }
status: reviewed
maturity: active
categories: [architectures, server-cloud]
tags: [case-study, fintech, migration, strangler-fig, event-driven]
locale: en
translationKey: fintech-migration
canonicalId: case-study.fintech-migration
translationStatus: reviewed
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.fowler.microservices, source.paper.saga, source.debezium.outbox, source.swebok-v4]
related: [architecture.microservices.en, architecture.saga-pattern.en, architecture.transactional-outbox.en]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [availability, reliability, performance, security]
applicableDomains: [finance, banking, enterprise]
---

<!-- section:definition -->
## Executive Summary and Business Problem

The legacy **Core Banking Platform** ran on a COBOL/Mainframe architecture servicing 15 million accounts with a peak processing capacity of 8,000 TPS.

Faced with escalating mainframe licensing costs, batch processing delays, and multi-month feature release cycles, the engineering team executed a **Zero-Downtime Migration Architecture** to transition the legacy core into cloud-native event-driven microservices.

<!-- section:components -->
## Architectural Migration Strategy & Components

- **Strangler Fig Router:** Intelligent API Gateway incrementally routing incoming account and payment requests between mainframe and new microservices.
- **Transactional Outbox & CDC (Debezium):** Real-time Change Data Capture streaming DB2/Oracle mainframe updates to Apache Kafka topics.
- **Orchestrated Saga Engine:** Manages cross-account money transfers with eventual consistency, bypassing 2PC locking overhead.
- **Multi-Region Kubernetes Cluster:** Active-Active distributed cloud deployment.

<!-- section:data-flow -->
## Migration & Data Flow Diagram (Mermaid Flowchart)

```mermaid
flowchart TD
    Client[Mobile / Web Banking] --> Gateway[Strangler Gateway Router]
    
    subgraph LegacyCore ["Legacy Mainframe Core"]
        Gateway -- 20% Traffic (Legacy Accounts) --> Mainframe[DB2 Mainframe Core]
        Mainframe -. CDC / Debezium .-> Kafka[Kafka Event Backbone]
    end

    subgraph NewCloudNative ["New Cloud-Native Microservices"]
        Gateway -- 80% Traffic (Migrated Accounts) --> AccountServ[Account Service]
        Gateway --> TransferServ[Transfer Service / Saga Orchestrator]
        TransferServ --> PaymentDB[(PostgreSQL Distributed DB)]
        Kafka -. Sync Account Events .-> AccountServ
    end
```

<!-- section:use-cases -->
## Phased Implementation Roadmap

### Phased Migration Steps
1. **Phase 1 (Shadow Pipeline):** Real-time replication of mainframe events to PostgreSQL using Debezium CDC; live traffic was shadowed and verified.
2. **Phase 2 (Strangler Extraction):** New customer onboarding and account creation routed exclusively to new microservices.
3. **Phase 3 (Tenant Cut-Over):** Batch migration of existing account cohorts; complete mainframe decommissioning.

<!-- section:trade-offs -->
### Architectural Trade-offs
- **Dual-Infrastructure Overhead:** Running parallel mainframe and cloud environments during the 12-month transition increased operational budgets.
- **Reconciliation Complexity:** Maintaining real-time balance reconciliation across hybrid state boundaries.

<!-- section:production -->
## Production Results & Business Impact

1. **Zero Unplanned Downtime:** Maintained 100% service availability across the 18-month migration lifecycle.
2. **Latency Reduction:** Reduced p99 transaction processing latency from 850ms to 42ms.
3. **Cost Savings:** Achieved a 68% reduction in annual mainframe licensing and infrastructure maintenance costs.

<!-- section:security -->
## Security & Regulatory Compliance

- Complied with PCI-DSS 4.0 and banking regulations using mTLS encryption and Hardware Security Modules (HSM) for payload signing.

<!-- section:testing -->
## Testing and Validation

- Executed shadow testing over 100 million real-world production transactions to verify 100% data fidelity between platforms.

<!-- section:observability -->
## Observability

- Real-time end-to-end tracing monitored via OpenTelemetry, Grafana dashboards, and Jaeger.

<!-- section:alternatives -->
## Alternatives

- **Big-Bang Migration:** Single cut-over night (Rejected due to catastrophic risk exposure).

<!-- section:sources -->
## Sources

- Martin Fowler — *Microservices and Strangler Application Pattern*
- Debezium Architecture Specifications — Outbox & CDC Pattern
