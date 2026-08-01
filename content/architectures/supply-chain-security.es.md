---
id: architecture.supply-chain-security.es
type: architecture
title: { tr: "Tedarik Zinciri Güvenliği", en: "Supply Chain Security" }
summary: { tr: "Üçüncü taraf bağımlılıkların, derleme boru hatlarının ve SBOM kayıtlarının doğrulanması.", en: "Securing third-party dependencies, build pipelines, and Software Bill of Materials (SBOM)." }
status: reviewed
maturity: mature
categories: [architectures, security, devops]
tags: [supply-chain, sbom, spdx, slsa, dependencies]
locale: es
translationKey: supply-chain-security
canonicalId: architecture.supply-chain-security
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.spdx.3]
related: [architecture.zero-trust.es]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [security, traceability, integrity, compliance]
applicableDomains: [security, devops, software-supply-chain]
---
## Definición

La Seguridad de la Cadena de Suministro de Software protege los componentes de software desde los repositorios de origen y dependencias hasta la implementación.

## Componentes Clave

- **Lista de Materiales de Software (SBOM):** Inventario estructurado de componentes de software (SPDX 3.0, CycloneDX).
- **Procedencia de Compilación (SLSA):** Metadatos de compilación firmados criptográficamente para evitar manipulaciones.
