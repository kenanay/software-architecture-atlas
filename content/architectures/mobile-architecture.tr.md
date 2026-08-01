---
id: architecture.mobile-architecture.tr
type: architecture
title: { tr: "Mobil Uygulama Mimarisi", en: "Mobile Application Architecture" }
summary: { tr: "Pil tüketimi, bellek kısıtları ve yerel/çapraz platform mobil mimari kalıpları.", en: "Mobile patterns addressing battery life, memory constraints, and native/cross-platform trade-offs." }
status: reviewed
maturity: mature
categories: [architectures, mobile]
tags: [mobile, ios, android, cross-platform, mvvm]
locale: tr
translationKey: mobile-architecture
canonicalId: architecture.mobile-architecture
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4]
related: [architecture.modular-monolith.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [usability, performance, maintainability, battery-efficiency]
applicableDomains: [mobile, iOS, Android]
---
## Tanım

Mobil Uygulama Mimarisi (Mobile Application Architecture), dokunmatik arayüzler, kesintili ağ durumları, sınırlı pil ve bellek bütçesi altında çalışan uygulamaların katmanlama ve durum yönetim kalıplarıdır.

## Mimari Desenler

- **MVVM / MVI:** Kullanıcı arayüzünü iş mantığından ve veri durumundan (State) ayıran reaktif UI mimarileri.
- **Yerel (Native) vs Çapraz Platform (Cross-Platform):** Swift/Kotlin ile maksimum donanım erişimi vs Flutter/React Native ile ortak kod tabanı ödünleşimleri.
