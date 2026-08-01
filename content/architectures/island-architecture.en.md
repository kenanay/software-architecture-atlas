---
id: architecture.island-architecture.en
type: architecture
title: { tr: "Ada Mimarisi", en: "Island Architecture" }
summary: { tr: "Statik HTML içinde bağımsız etkileşimli ada bileşenlerini hidrate eden web mimarisi.", en: "Web architecture hydrating independent interactive island components within static HTML." }
status: reviewed
maturity: mature
categories: [architectures, web]
tags: [island-architecture, astro, partial-hydration, web-performance]
locale: en
translationKey: island-architecture
canonicalId: architecture.island-architecture
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4]
related: [architecture.modular-monolith.en]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [performance, load-speed, maintainability, accessibility]
applicableDomains: [web, e-commerce, content-platforms]
---
## Definition

Island Architecture renders the majority of a web page as static server-side HTML while isolating interactive UI components into independent "islands" hydrated on-demand.

## Key Features

- **Zero-JS by Default:** Guaranteeing zero client-side JavaScript overhead for static page regions.
- **Partial & Lazy Hydration:** Hydrating individual component islands independently based on triggers (e.g., `client:visible`, `client:idle`).
