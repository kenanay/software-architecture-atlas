---
id: architecture.mobile-architecture.en
type: architecture
title: { tr: "Mobil Uygulama Mimarisi", en: "Mobile Application Architecture" }
summary: { tr: "Pil tüketimi, bellek kısıtları ve yerel/çapraz platform mobil mimari kalıpları.", en: "Mobile patterns addressing battery life, memory constraints, and native/cross-platform trade-offs." }
status: reviewed
maturity: mature
categories: [architectures, mobile]
tags: [mobile, ios, android, cross-platform, mvvm]
locale: en
translationKey: mobile-architecture
canonicalId: architecture.mobile-architecture
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4]
related: [architecture.modular-monolith.en]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [usability, performance, maintainability, battery-efficiency]
applicableDomains: [mobile, iOS, Android]
---
## Definition

Mobile Application Architecture defines layering and state management patterns under touch interfaces, intermittent connectivity, and strict battery/memory budgets.

## Architectural Patterns

- **MVVM / MVI:** Reactive UI architectures decoupling presentation from business state.
- **Native vs Cross-Platform:** Hardware performance (Swift/Kotlin) vs shared codebase productivity (Flutter/React Native).
