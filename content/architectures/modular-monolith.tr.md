---
id: architecture.modular-monolith.tr
type: architecture
title: { tr: "Modüler Monolit", en: "Modular Monolith" }
summary: { tr: "Tek dağıtım biriminde güçlü modül sınırları kullanan mimari stil.", en: "An architectural style with strong module boundaries in one deployable unit." }
status: reviewed
maturity: mature
categories: [architectures, web, server]
tags: [modules, boundaries, deployment]
locale: tr
translationKey: modular-monolith
canonicalId: architecture.modular-monolith
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-17
sources: [source.iso-42010, source.swebok-v4]
related: [guide.project-constitution.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author, reviewer]
qualityAttributes: [maintainability, testability, deployability]
applicableDomains: [web, server, desktop]
---
## Tanım

Modüler Monolit (Modular Monolith), tek süreç ve dağıtım birimi içinde açık sorumluluklara ve bağımlılık kurallarına sahip modüller kullanır.

## Çözdüğü problem

Küçük ve orta ekiplerin dağıtık sistem operasyon maliyetine girmeden iş alanlarını ayırmasını sağlar.

## Bağımlılık yönü

Modüller birbirinin iç uygulamasına değil, yayımlanmış sözleşmelerine bağımlıdır. Döngüsel bağımlılıklar doğrulama araçlarıyla engellenmelidir.

## Uygun olmadığı durumlar

Bağımsız ölçeklenmesi, ayrı güvenlik sınırında çalışması veya farklı sürüm temposuyla dağıtılması zorunlu bileşenlerde servis ayrımı daha uygun olabilir.

## Test ve dağıtım

Birim testleri modül çekirdeğini, sözleşme testleri modüller arası arayüzleri kapsar. Uygulama tek artefakt olarak dağıtılır.
