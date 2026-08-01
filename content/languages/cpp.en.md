---
id: language.cpp.en
type: programming-language
title: { tr: "C++", en: "C++" }
summary: { tr: "Donanıma doğrudan erişim, RAII ve sıfır maliyetli soyutlamalar sunan sistem dili.", en: "Systems language providing direct hardware control, RAII, and zero-cost abstractions." }
status: reviewed
maturity: active
categories: [languages, embedded, games, systems]
tags: [native, static-typing, raii, performance]
locale: en
translationKey: cpp
canonicalId: language.cpp
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4]
related: [architecture.game-engine.en, architecture.embedded-rtos.en]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [performance, resource-efficiency, predictability]
applicableDomains: [games, embedded, graphics, systems]
---
## Design Intent

C++ is a high-performance systems language focused on zero-cost abstractions, deterministic resource management, and direct hardware control.

## Key Features

- **RAII:** Binding resource lifetime to stack scope for leak prevention.
- **Compile-Time Execution:** Metaprogramming with templates and `constexpr`.
