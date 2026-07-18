---
id: architecture.modular-monolith.es
type: architecture
title: { tr: "Modüler Monolit", en: "Modular Monolith", es: "Monolito Modular" }
summary: { tr: "Tek dağıtım biriminde güçlü modül sınırları kullanan mimari stil.", en: "An architectural style with strong module boundaries in one deployable unit.", es: "Estilo arquitectónico con fuertes límites de módulos en una sola unidad de despliegue." }
status: reviewed
maturity: mature
categories: [architectures, web, server]
tags: [modules, boundaries, deployment]
locale: es
translationKey: modular-monolith
canonicalId: architecture.modular-monolith
translationStatus: reviewed
translationMethod: human
translationReviewedBy: person.kenan-ay
version: 1.0.0
lastReviewedAt: 2026-07-17
sources: [source.iso-42010, source.swebok-v4]
related: [guide.project-constitution.es]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, translator, translation-reviewer]
qualityAttributes: [maintainability, testability, deployability]
applicableDomains: [web, server, desktop]
---
## Definición

Un Monolito Modular utiliza módulos con responsabilidades explícitas y reglas de dependencia dentro de un solo proceso y unidad de despliegue.

## Problema abordado

Permite a equipos de tamaño pequeño y mediano separar los dominios de negocio sin incurrir en los costos operativos de los sistemas distribuidos.

## Dirección de dependencia

Los módulos dependen de contratos publicados, no de las implementaciones internas de los demás. Las comprobaciones automatizadas deben evitar dependencias cíclicas.

## Pruebas y despliegue

Las pruebas unitarias cubren los núcleos de los módulos y las pruebas de contrato cubren las interfaces de los módulos. La aplicación se despliega como un solo artefacto.
