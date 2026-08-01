---
id: architecture.cloud-native.en
type: architecture
title: { tr: "Bulut Yerel Mimari", en: "Cloud-Native Architecture" }
summary: { tr: "Dinamik bulut ortamlarında ölçeklenebilir ve esnek mikroservis yapıları.", en: "Scalable and resilient microservices in dynamic cloud environments." }
status: reviewed
maturity: mature
categories: [architectures, cloud, server]
tags: [cloud-native, microservices, containers, serverless]
locale: en
translationKey: cloud-native
canonicalId: architecture.cloud-native
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4, source.iso-42010]
related: [architecture.modular-monolith.en]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [scalability, availability, fault-tolerance, maintainability]
applicableDomains: [web, server, distributed-systems]
---
## Definition

Cloud-Native Architecture is an architectural style designed to build and run scalable applications in dynamic cloud computing environments with high availability and resilience.

## Core Components

- **Microservices:** Independently deployable and encapsulated business services.
- **Containerization:** Packaging applications and dependencies into portable units.
- **Event-Driven Communication:** Asynchronous messaging for loosely coupled interaction.
- **Declarative Infrastructure (IaC):** Infrastructure management via code and automated orchestration.

## Trade-offs

- **Advantages:** High horizontal scalability, independent deployment, fault isolation.
- **Disadvantages:** Distributed system complexity, observability overhead, and network latency.
