---
id: architecture.zero-trust.es
type: architecture
title: { tr: "Sıfır Güven Mimarisi", en: "Zero Trust Architecture" }
summary: { tr: "Hiçbir ağ konumuna varsayılan güven tanımayan sürekli kimlik doğrulama mimarisi.", en: "Cybersecurity architecture enforcing explicit, continuous verification across all network boundaries." }
status: reviewed
maturity: mature
categories: [architectures, security, cloud, server]
tags: [zero-trust, security, identity, least-privilege, microsegmentation]
locale: es
translationKey: zero-trust
canonicalId: architecture.zero-trust
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4]
related: [architecture.cloud-native.es]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [security, auditability, confidentiality, integrity]
applicableDomains: [security, cloud, enterprise, networking]
---
## Definición

La Arquitectura de Cero Confianza (Zero Trust Architecture) elimina la confianza implícita en cualquier perímetro de red, verificando continuamente cada usuario, dispositivo y solicitud.

## Principios Fundamentales

- **Verificación Explícita:** Autenticación y autorización continua basada en todos los puntos de datos disponibles.
- **Acceso con Privilegios Mínimos:** Limitar el acceso con políticas Just-In-Time y Just-Enough-Access.
- **Asumir la Brecha:** Minimizar el radio de impacto mediante microsegmentación de red y cifrado extremo a extremo.
