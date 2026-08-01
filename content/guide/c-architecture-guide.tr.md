---
id: guide.c-architecture-guide.tr
type: guide
title: { tr: "C Gömülü ve Sistem Programlama Mimari Rehberi", en: "C Embedded and Systems Programming Architecture Guide", es: "Guía de Arquitectura de Programación de Sistemas y Embebidos en C" }
summary: { tr: "MISRA C standartları, katmanlı sürücü mimarisi (HAL), POSIX sistem çağrıları ve Makefile dizin yapısı.", en: "MISRA C standards, layered driver architecture (HAL), POSIX system calls, and Makefile layout.", es: "Estándares MISRA C, arquitectura de controladores en capas (HAL), llamadas POSIX y estructura Makefile." }
status: reviewed
maturity: active
categories: [guide, languages, architectures]
tags: [c, embedded, hal, misra-c, posix, layered-architecture]
locale: tr
translationKey: c-architecture-guide
canonicalId: guide.c-architecture-guide
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4, source.posix-2024, source.iso-42010]
related: [language.c.tr, guide.user-manual.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author, editor]
qualityAttributes: [performance, memory-efficiency, determinism, safety]
applicableDomains: [software-architecture, c, embedded, systems, hardware]
---

# C Gömülü ve Sistem Programlama Mimari Rehberi

Gömülü sistemler ve POSIX ortamlarında katmanlı sürücü ve donanım soyutlama (HAL) mimarisi:

```text
my_c_project/
├── Makefile
├── include/
│   ├── app/
│   ├── hal/
│   └── drivers/
└── src/
    ├── main.c
    ├── hal/
    └── drivers/
```
