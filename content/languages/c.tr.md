---
id: language.c.tr
type: programming-language
title: { tr: "C", en: "C" }
summary: { tr: "İşletim sistemi çekirdekleri, gömülü sistemler ve donanıma doğrudan erişim için temel sistem dili.", en: "Foundational systems language for OS kernels, embedded systems, and bare-metal hardware access." }
status: reviewed
maturity: active
categories: [languages, embedded, server]
tags: [c, embedded, kernel, posix, low-level]
locale: tr
translationKey: c
canonicalId: language.c
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4, source.posix-2024]
related: [architecture.embedded-rtos.tr, guide.c-architecture-guide.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [performance, memory-efficiency, determinism, portability]
applicableDomains: [embedded, operating-systems, hardware, systems]
---
## Tasarım Amacı

C; asgari çalışma zamanı yükü (minimal runtime overhead), doğrudan bellek yönetimi ve ISO/POSIX standartlarıyla sistem mimarisinin temel dilidir.
