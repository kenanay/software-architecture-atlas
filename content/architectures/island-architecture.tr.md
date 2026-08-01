---
id: architecture.island-architecture.tr
type: architecture
title: { tr: "Ada Mimarisi", en: "Island Architecture" }
summary: { tr: "Statik HTML içinde bağımsız etkileşimli ada bileşenlerini hidrate eden web mimarisi.", en: "Web architecture hydrating independent interactive island components within static HTML." }
status: reviewed
maturity: mature
categories: [architectures, web]
tags: [island-architecture, astro, partial-hydration, web-performance]
locale: tr
translationKey: island-architecture
canonicalId: architecture.island-architecture
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4]
related: [architecture.modular-monolith.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [performance, load-speed, maintainability, accessibility]
applicableDomains: [web, e-commerce, content-platforms]
---
## Tanım

Ada Mimarisi (Island Architecture), web sayfalarının büyük kısmını sunucuda statik HTML olarak derleyen, yalnızca dinamik etkileşim gerektiren bağımsız UI bileşenlerini (adaları) istemcide kısmi hidrasyonla (partial hydration) yükleyen mimari yaklaşımdır.

## Önemli Özellikler

- **Sıfır İstemci JavaScript'i (Zero-JS by Default):** Dinamik ada bileşeni bulunmayan alanlarda istemciye hiç JS gönderilmeme garantisi.
- **Bölünmüş Hidrasyon (Partial Caching / Hydration):** Her adanın birbirinden bağımsız ve zamanlanmış (on-visible, on-idle) biçimde yüklenmesi.
