---
id: architecture.embedded-rtos.tr
type: architecture
title: { tr: "Gömülü RTOS Mimarisi", en: "Embedded RTOS Architecture" }
summary: { tr: "Zaman kısıtlamalı gömülü sistemler için Gerçek Zamanlı İşletim Sistemi mimarisi.", en: "Real-Time Operating System architecture for time-constrained embedded systems." }
status: reviewed
maturity: mature
categories: [architectures, embedded, iot]
tags: [rtos, embedded, firmware, posix, deterministic]
locale: tr
translationKey: embedded-rtos
canonicalId: architecture.embedded-rtos
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4]
related: [language.cpp.tr, language.rust.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [reliability, safety, determinism, resource-efficiency]
applicableDomains: [embedded, iot, automotive, robotics]
---
## Tanım

Gömülü RTOS Mimarisi (Embedded Real-Time Operating System Architecture), donanım kaynaklarının son derece kısıtlı olduğu ve zamanlama gecikmelerinin öngörülebilir (deterministik) olması gereken sistemler için tasarlanır.

## Temel Bileşenler

- **Öncelikli Görev Zamanlayıcı (Priority Scheduler):** Kritik görevlerin belirlenen son teslim sürelerine (deadline) uyulmasını garanti eden öncelik tabanlı kesme mekanizması.
- **Kesme İşleyiciler (ISR):** Donanım sinyallerine en düşük gecikmeyle tepki veren birimler.
