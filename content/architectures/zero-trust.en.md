---
id: architecture.zero-trust.en
type: architecture
title: { tr: "Sıfır Güven Mimarisi", en: "Zero Trust Architecture" }
summary: { tr: "Hiçbir ağ konumuna varsayılan güven tanımayan sürekli kimlik doğrulama mimarisi.", en: "Cybersecurity architecture enforcing explicit, continuous verification across all network boundaries." }
status: reviewed
maturity: mature
categories: [architectures, security, cloud, server]
tags: [zero-trust, security, identity, least-privilege, microsegmentation]
locale: en
translationKey: zero-trust
canonicalId: architecture.zero-trust
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4]
related: [architecture.cloud-native.en]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [security, auditability, confidentiality, integrity]
applicableDomains: [security, cloud, enterprise, networking]
---
## Definition

Zero Trust Architecture (ZTA) is a security model that eliminates implicit trust in any network perimeter, continuously verifying every user, device, and API request.

## Core Principles

- **Verify Explicitly:** Always authenticate and authorize based on all available data points.
- **Use Least Privilege Access:** Limit user access with Just-In-Time and Just-Enough-Access (JIT/JEA).
- **Assume Breach:** Minimize blast radius by micro-segmenting networks and encrypting all communications end-to-end.
