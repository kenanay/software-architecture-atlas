---
id: architecture.cyber-security.tr
type: architecture
title: { tr: "Siber Güvenlik ve Uygulama Güvenliği (AppSec) Mimarisi", en: "Cyber Security and Application Security (AppSec) Architecture", es: "Arquitectura de Ciberseguridad y Seguridad de Aplicaciones (AppSec)" }
summary: { tr: "DevSecOps, tehdit modelleme (STRIDE), Zero Trust, katmanlı savunma (Defense-in-Depth) ve AppSec standartları.", en: "DevSecOps, threat modeling (STRIDE), Zero Trust principles, Defense-in-Depth, and AppSec standards.", es: "DevSecOps, modelado de amenazas (STRIDE), principios Zero Trust, defensa en profundidad y estándares AppSec." }
status: reviewed
maturity: active
categories: [architectures, networks]
tags: [security, cyber-security, appsec, devsecops, zero-trust, stride]
locale: tr
translationKey: cyber-security
canonicalId: architecture.cyber-security
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.swebok-v4, source.iso-42010]
related: [architecture.zero-trust.tr, architecture.supply-chain-security.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [security, confidentiality, integrity, availability, auditability]
applicableDomains: [security, cloud-native, web, mobile, enterprise]
---

# Siber Güvenlik ve Uygulama Güvenliği (AppSec) Mimarisi

Siber güvenlik mimarisi; yazılımların tasarım aşamasından üretime kadar olan tüm süreçlerinde (Shift-Left Security) gizlilik, bütünlük ve erişilebilirliği (CIA Triad) korumak üzere kurgulanır.

## Temel Güvenlik Prensipleri
1. **Defense-in-Depth (Katmanlı Savunma):** Tek bir koruma katmanına bağımlı kalmadan ağ, uygulama ve veri seviyesinde çoklu güvenlik duvarı uygulamak.
2. **Threat Modeling (STRIDE):** Spoofing, Tampering, Repudiation, Information Disclosure, Denial of Service, Elevation of Privilege analizleri.
3. **DevSecOps Boru Hattı:** SAST, DAST, SCA (Software Composition Analysis) ve gizli anahtar (secret scanning) taramaları.
