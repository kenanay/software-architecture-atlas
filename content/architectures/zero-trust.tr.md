---
id: architecture.zero-trust.tr
type: architecture
title: { tr: "Sıfır Güven Mimarisi", en: "Zero Trust Architecture" }
summary: { tr: "Hiçbir ağ konumuna varsayılan güven tanımayan sürekli kimlik doğrulama mimarisi.", en: "Cybersecurity architecture enforcing explicit, continuous verification across all network boundaries." }
status: reviewed
maturity: mature
categories: [architectures, security, cloud, server]
tags: [zero-trust, security, identity, least-privilege, microsegmentation]
locale: tr
translationKey: zero-trust
canonicalId: architecture.zero-trust
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4]
related: [architecture.cloud-native.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [security, auditability, confidentiality, integrity]
applicableDomains: [security, cloud, enterprise, networking]
---
## Tanım

Sıfır Güven Mimarisi (Zero Trust Architecture - ZTA), geleneksel çevre tabanlı güvenlik anlayışını ("içerideysen güvendesin") reddeden, ağın içindeki ve dışındaki tüm erişim isteklerini sürekli doğrulayan stratejik bir güvenlik mimarisidir.

## Temel İlkeler

- **Açıkça Doğrula (Explicit Verification):** Her erişim isteğinde kimlik, konum, cihaz sağlığı ve veri hassasiyetini denetleme.
- **En Az Ayrıcalıklı Erişim (Least Privilege):** Kullanıcılara ve servislere yalnızca o anki görev için gereken minimum yetkiyi verme (JIT/JEA).
- **İhlal Edildiğini Varsay (Assume Breach):** Ağ mikro-segmentasyonu ve tüm trafiğin uçtan uca şifrelenmesi.
