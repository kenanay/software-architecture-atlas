---
id: architecture.game-engine.tr
type: architecture
title: { tr: "Oyun Motoru Mimarisi & ECS", en: "Game Engine Architecture & ECS" }
summary: { tr: "Veri odaklı tasarım ve Entity Component System (ECS) kullanan yüksek performanslı oyun mimarisi.", en: "High-performance game architecture using data-oriented design and Entity Component System (ECS)." }
status: reviewed
maturity: mature
categories: [architectures, games, graphics]
tags: [game-engine, ecs, data-oriented, rendering]
locale: tr
translationKey: game-engine
canonicalId: architecture.game-engine
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4]
related: [language.cpp.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [performance, maintainability, modularity]
applicableDomains: [games, graphics, simulation]
---
## Tanım

Oyun Motoru Mimarisi (Game Engine Architecture), gerçek zamanlı grafik işleme, fizik simülasyonu, ses ve girdi yönetimini yüksek kare hızlarında (FPS) koşturan yazılım mimarisidir.

## Temel Desenler

- **Entity Component System (ECS):** Veriyi (Component) ve mantığı (System) varlık kimliklerinden (Entity) ayıran bellek önbellek dostu (cache-friendly) yaklaşım.
- **Oyun Döngüsü (Game Loop):** Girdi alma, durum güncelleme ve karesel çizim adımlarını kesintisiz zamanlayan ana döngü.
