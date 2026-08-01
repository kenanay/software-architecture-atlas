---
id: architecture.game-engine.en
type: architecture
title: { tr: "Oyun Motoru Mimarisi & ECS", en: "Game Engine Architecture & ECS" }
summary: { tr: "Veri odaklı tasarım ve Entity Component System (ECS) kullanan yüksek performanslı oyun mimarisi.", en: "High-performance game architecture using data-oriented design and Entity Component System (ECS)." }
status: reviewed
maturity: mature
categories: [architectures, games, graphics]
tags: [game-engine, ecs, data-oriented, rendering]
locale: en
translationKey: game-engine
canonicalId: architecture.game-engine
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4]
related: [language.cpp.en]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [performance, maintainability, modularity]
applicableDomains: [games, graphics, simulation]
---
## Definition

Game Engine Architecture is the software architecture driving real-time graphics rendering, physics simulation, audio, and input handling at high frame rates.

## Core Patterns

- **Entity Component System (ECS):** A cache-friendly pattern separating data (Components) and logic (Systems) from identity (Entities).
- **Game Loop:** The continuous loop handling input sampling, state updates, and frame rendering.
