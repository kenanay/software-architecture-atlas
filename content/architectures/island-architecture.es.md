---
id: architecture.island-architecture.es
type: architecture
title: { tr: "Ada Mimarisi", en: "Island Architecture" }
summary: { tr: "Statik HTML içinde bağımsız etkileşimli ada bileşenlerini hidrate eden web mimarisi.", en: "Web architecture hydrating independent interactive island components within static HTML." }
status: reviewed
maturity: mature
categories: [architectures, web]
tags: [island-architecture, astro, partial-hydration, web-performance]
locale: es
translationKey: island-architecture
canonicalId: architecture.island-architecture
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4]
related: [architecture.modular-monolith.es]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [performance, load-speed, maintainability, accessibility]
applicableDomains: [web, e-commerce, content-platforms]
---
## Definición

La Arquitectura de Islas (Island Architecture) renderiza la mayor parte de la página en HTML estático desde el servidor, hidratando únicamente "islas" interactivas según la demanda del cliente.

## Características Clave

- **Cero JavaScript por Defecto:** Garantiza ausencia de JS en las regiones estáticas de la página.
- **Hidratación Parcial e Independiente:** Hidratación bajo demanda (`client:visible`, `client:idle`) por cada isla de UI.
