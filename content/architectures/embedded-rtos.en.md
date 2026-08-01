---
id: architecture.embedded-rtos.en
type: architecture
title: { tr: "Gömülü RTOS Mimarisi", en: "Embedded RTOS Architecture" }
summary: { tr: "Zaman kısıtlamalı gömülü sistemler için Gerçek Zamanlı İşletim Sistemi mimarisi.", en: "Real-Time Operating System architecture for time-constrained embedded systems." }
status: reviewed
maturity: mature
categories: [architectures, embedded, iot]
tags: [rtos, embedded, firmware, posix, deterministic]
locale: en
translationKey: embedded-rtos
canonicalId: architecture.embedded-rtos
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4]
related: [language.cpp.en, language.rust.en]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [reliability, safety, determinism, resource-efficiency]
applicableDomains: [embedded, iot, automotive, robotics]
---
## Definition

Embedded RTOS Architecture is engineered for resource-constrained systems requiring strictly deterministic task timing and interrupt responsiveness.

## Key Components

- **Preemptive Priority Scheduler:** Ensures critical real-time tasks meet deadlines.
- **Interrupt Service Routines (ISRs):** Low-latency hardware handling routines.
