---
id: guide.project-constitution.tr
type: guide
title: { tr: "Proje Anayasası", en: "Project Constitution" }
summary: { tr: "Atlasın kapsam, kaynak, terminoloji ve içerik kalite kuralları.", en: "Scope, sourcing, terminology and content quality rules for the atlas." }
status: reviewed
maturity: active
categories: [guide]
tags: [governance, terminology, sources]
locale: tr
translationKey: project-constitution
canonicalId: guide.project-constitution
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-17
sources: [source.iso-42010, source.swebok-v4]
related: [architecture.modular-monolith.tr]
contributors:
  - personId: person.kenan-ay
    roles: [project-owner, architecture-lead, technical-author, editor]
qualityAttributes: [maintainability, traceability, accessibility]
applicableDomains: [documentation]
---
## Amaç ve kapsam

Software Architecture Atlas; teknolojileri listelemekten öte, proje gereksinimleri ile programlama dili, mimari, araç zinciri ve dağıtım seçenekleri arasında gerekçeli bağlar kurar.

## İçerik ilkeleri

- Kanonik içerik Markdown, YAML ve JSON dosyalarında tutulur.
- Her iddia mümkün olduğunda resmî veya akademik bir kaynağa bağlanır.
- Belge durumu ile ele alınan teknolojinin olgunluk durumu ayrı izlenir.
- AI destekli taslaklar insan incelemesi tamamlanmadan `reviewed` veya `verified` sayılmaz.
- Türkçe ve İngilizce belgeler ayrı, ancak `translationKey` ile bağlantılıdır.

## Terminoloji

Teknik terim ilk kullanımda Türkçe ve İngilizce biçimiyle verilir. Yerleşik Türkçe karşılığı bulunmayan ürün, API veya teknik adlar çevrilmez.

## Sorumluluk

Proje Sahibi ve Mimari Sorumlu: Yönetim ve Bilişim Sistemleri Uzmanı Kenan AY.
