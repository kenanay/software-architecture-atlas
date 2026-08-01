---
id: language.c.es
type: programming-language
title: { tr: "C", en: "C" }
summary: { tr: "İşletim sistemi çekirdekleri, gömülü sistemler ve donanıma doğrudan erişim için temel sistem dili.", en: "Foundational systems language for OS kernels, embedded systems, and bare-metal hardware access." }
status: reviewed
maturity: active
categories: [languages, embedded, server]
tags: [c, embedded, kernel, posix, low-level]
locale: es
translationKey: c
canonicalId: language.c
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4, source.posix-2024]
related: [architecture.embedded-rtos.es, guide.c-architecture-guide.es]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [performance, memory-efficiency, determinism, portability]
applicableDomains: [embedded, operating-systems, hardware, systems]
---
## Objetivo de Diseño

C está diseñado para mínima sobrecarga en tiempo de ejecución y programación de sistemas bajo estándares POSIX.
