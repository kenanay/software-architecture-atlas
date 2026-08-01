---
id: language.typescript.tr
type: programming-language
title: { tr: "TypeScript", en: "TypeScript" }
summary: { tr: "JavaScript'e derleme zamanı statik tipler kazandıran ölçeklenebilir üst küme dil.", en: "Scalable typed superset of JavaScript providing compile-time type safety." }
status: reviewed
maturity: active
categories: [languages, web, server]
tags: [static-typing, structural-typing, javascript, superset]
locale: tr
translationKey: typescript
canonicalId: language.typescript
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4]
related: [architecture.island-architecture.tr, guide.typescript-architecture-guide.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [type-safety, maintainability, developer-productivity]
applicableDomains: [web, fullstack, tooling, server]
---
## Tasarım Amacı

TypeScript; büyük ölçekli JavaScript uygulamalarında derleme zamanı statik tip denetimi (type safety), gelişmiş IDE entegrasyonu ve kod refactoring güvenliği sunmak üzere tasarlanmıştır.

## Temel Özellikler

- **Yapısal Tip Sistemi (Structural Typing):** Nesne biçimlerine (shape) dayalı esnek ve güçlü tip eşleme.
- **Sıfır Çalışma Zamanı Maliyeti (Zero Runtime Overhead):** Tip tanımlarının derleme anında tamamen silinerek düz JavaScript'e dönüştürülmesi.
