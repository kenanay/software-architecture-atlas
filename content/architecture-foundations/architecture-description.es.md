---
id: concept.architecture-description.es
type: concept
title: { tr: "Mimari Açıklama ve ISO 42010", en: "Architecture Description and ISO 42010", es: "Descripción de la Arquitectura e ISO 42010" }
summary: { tr: "Mimariyi, mimari açıklamadan; görünümü, bakış açısından ayıran temel kavram modeli.", en: "A concept model distinguishing architecture from its description and views from viewpoints.", es: "Un modelo conceptual que distingue la arquitectura de su descripción, y las vistas de los puntos de vista." }
status: reviewed
maturity: mature
categories: [architecture-foundations, standards]
tags: [iso-42010, viewpoints, stakeholders, concerns]
locale: es
translationKey: architecture-description
canonicalId: concept.architecture-description
translationStatus: reviewed
translationMethod: human
translationReviewedBy: person.kenan-ay
version: 1.0.0
lastReviewedAt: 2026-07-17
sources: [source.iso-42010]
related: [architecture.modular-monolith.es]
contributors:
  - personId: person.kenan-ay
    roles: [researcher, architecture-lead, translator, reviewer]
qualityAttributes: [traceability, consistency, completeness]
applicableDomains: [software, systems, enterprise]
---
## Distinción fundamental

ISO/IEC/IEEE 42010:2022 distingue entre la arquitectura de un sistema de interés y la **Descripción de la Arquitectura (Architecture Description, AD)** que expresa esa arquitectura. El estándar no impone un método de arquitectura, notación o formato de archivo específico; define requisitos para la descripción de la arquitectura (AD), el punto de vista, el tipo de modelo, el marco de arquitectura y el lenguaje de descripción de arquitectura.

## Conceptos

- **Interesado (Stakeholder):** Individuo, equipo u organización con intereses respecto a un sistema.
- **Preocupación (Concern):** Requisito, riesgo, objetivo o restricción que es importante para un interesado.
- **Punto de vista (Viewpoint):** Una convención para la construcción y uso de vistas de arquitectura para abordar preocupaciones específicas del sistema.
- **Vista de la Arquitectura (Architecture View):** Un producto de trabajo que expresa la arquitectura de un sistema desde la perspectiva de un punto de vista específico.
- **Tipo de modelo (Model Kind):** Reglas para la representación, interpretación y análisis de modelos.

## Regla de aplicación

Cada decisión arquitectónica debe mostrar de manera trazable a los interesados relevantes, las preocupaciones que aborda, el punto de vista utilizado, la evidencia y los compromisos (trade-offs). Un diagrama por sí solo no constituye una descripción de la arquitectura.

## Estado de la versión

La edición de 2022 es la segunda edición publicada. La edición de 2011 fue retirada el 7 de noviembre de 2022 y reemplazada por la edición de 2022.
