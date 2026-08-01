---
id: language.cpp.tr
type: programming-language
title: { tr: "C++", en: "C++" }
summary: { tr: "Donanıma doğrudan erişim, RAII ve sıfır maliyetli soyutlamalar sunan sistem dili.", en: "Systems language providing direct hardware control, RAII, and zero-cost abstractions." }
status: reviewed
maturity: active
categories: [languages, embedded, games, systems]
tags: [native, static-typing, raii, performance]
locale: tr
translationKey: cpp
canonicalId: language.cpp
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4]
related: [architecture.game-engine.tr, guide.cpp-architecture-guide.tr, architecture.embedded-rtos.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [performance, resource-efficiency, predictability]
applicableDomains: [games, embedded, graphics, systems]
---
## Tasarım Amacı

C++; yüksek performans, donanıma doğrudan erişim ve "kullanmadığının bedelini ödememe" (zero-cost abstractions) felsefesiyle geliştirilmiş nesne yönelimli ve jenerik sistem dillerinden biridir.

## Temel Özellikler

- **RAII:** Kaynak yönetimini nesnelerin yaşam döngüsüne bağlayarak sızıntıları önleme.
- **Derleme Zamanı Hesaplama:** Templates ve `constexpr` ile karmaşık mantığı derleme anında yürütme.
