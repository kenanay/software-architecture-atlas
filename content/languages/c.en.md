---
id: language.c.en
type: programming-language
title: { tr: "C", en: "C" }
summary: { tr: "İşletim sistemi çekirdekleri, gömülü sistemler ve donanıma doğrudan erişim için temel sistem dili.", en: "Foundational systems language for OS kernels, embedded systems, and bare-metal hardware access." }
status: reviewed
maturity: active
categories: [languages, embedded, server]
tags: [c, embedded, kernel, posix, low-level]
locale: en
translationKey: c
canonicalId: language.c
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4, source.posix-2024]
related: [architecture.embedded-rtos.en, guide.c-architecture-guide.en]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [performance, memory-efficiency, determinism, portability]
applicableDomains: [embedded, operating-systems, hardware, systems]
---
## Design Goal

C is designed for minimal runtime overhead, direct memory manipulation, and portable systems programming under ISO/POSIX standards.
