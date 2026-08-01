---
id: architecture.cloud-native.es
type: architecture
title: { tr: "Bulut Yerel Mimari", en: "Cloud-Native Architecture" }
summary: { tr: "Dinamik bulut ortamlarında ölçeklenebilir ve esnek mikroservis yapıları.", en: "Scalable and resilient microservices in dynamic cloud environments." }
status: reviewed
maturity: mature
categories: [architectures, cloud, server]
tags: [cloud-native, microservices, containers, serverless]
locale: es
translationKey: cloud-native
canonicalId: architecture.cloud-native
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4, source.iso-42010]
related: [architecture.modular-monolith.es]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [scalability, availability, fault-tolerance, maintainability]
applicableDomains: [web, server, distributed-systems]
---
## Definición

La Arquitectura Nativa de la Nube (Cloud-Native Architecture) es un estilo arquitectónico diseñado para construir y ejecutar aplicaciones escalables en entornos dinámicos de computación en la nube con alta disponibilidad.

## Componentes Principales

- **Microservicios:** Servicios empresariales independientes y encapsulados.
- **Contenedores:** Empaquetado de aplicaciones y dependencias en unidades portátiles.
- **Comunicación Dirigida por Eventos:** Mensajería asíncrona para interacción desacoplada.
- **Infraestructura Declarativa (IaC):** Gestión de infraestructura mediante código y orquestación automatizada.

## Ventajas y Desventajas

- **Ventajas:** Alta escalabilidad horizontal, despliegue independiente, aislamiento de fallos.
- **Desventajas:** Complejidad de sistemas distribuidos, observabilidad y latencia de red.
