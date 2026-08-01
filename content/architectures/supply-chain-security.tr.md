---
id: architecture.supply-chain-security.tr
type: architecture
title: { tr: "Tedarik Zinciri Güvenliği", en: "Supply Chain Security" }
summary: { tr: "Üçüncü taraf bağımlılıkların, derleme boru hatlarının ve SBOM kayıtlarının doğrulanması.", en: "Securing third-party dependencies, build pipelines, and Software Bill of Materials (SBOM)." }
status: reviewed
maturity: mature
categories: [architectures, security, devops]
tags: [supply-chain, sbom, spdx, slsa, dependencies]
locale: tr
translationKey: supply-chain-security
canonicalId: architecture.supply-chain-security
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.spdx.3]
related: [architecture.zero-trust.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [security, traceability, integrity, compliance]
applicableDomains: [security, devops, software-supply-chain]
---
## Tanım

Yazılım Tedarik Zinciri Güvenliği (Software Supply Chain Security), yazılım bileşenlerinin kaynak kodundan başlayıp paket depoları, bağımlılıklar ve derleme sunucularından (CI/CD) geçerek canlı ortama kadar uzanan tüm yaşam döngüsünü sahtecilik ve zafiyetlere karşı koruma mimarisidir.

## Temel Bileşenler

- **Software Bill of Materials (SBOM):** Makinece okunabilir bağımlılık envanteri (SPDX 3.0, CycloneDX).
- **Derleme Kanıtlanabilirliği (SLSA):** Kendi kendine imzalı derleme adımları ve kurcalamaya karşı korumalı hatlar.
