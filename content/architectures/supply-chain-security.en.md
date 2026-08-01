---
id: architecture.supply-chain-security.en
type: architecture
title: { tr: "Tedarik Zinciri Güvenliği", en: "Supply Chain Security" }
summary: { tr: "Üçüncü taraf bağımlılıkların, derleme boru hatlarının ve SBOM kayıtlarının doğrulanması.", en: "Securing third-party dependencies, build pipelines, and Software Bill of Materials (SBOM)." }
status: reviewed
maturity: mature
categories: [architectures, security, devops]
tags: [supply-chain, sbom, spdx, slsa, dependencies]
locale: en
translationKey: supply-chain-security
canonicalId: architecture.supply-chain-security
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.spdx.3]
related: [architecture.zero-trust.en]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [security, traceability, integrity, compliance]
applicableDomains: [security, devops, software-supply-chain]
---
## Definition

Software Supply Chain Security safeguards software components from source code repositories and third-party dependencies through CI/CD pipelines to deployment.

## Core Components

- **Software Bill of Materials (SBOM):** Machine-readable inventory of software components (SPDX 3.0, CycloneDX).
- **Build Provenance (SLSA):** Cryptographically signed build metadata ensuring pipeline tamper-resistance.
