---
id: protocol.oauth21-oidc.es
type: protocol
title: { tr: "OAuth 2.1 ve OpenID Connect (OIDC) Kimlik Doğrulama Mimarisi", en: "OAuth 2.1 and OpenID Connect (OIDC) Authentication Architecture", es: "Arquitectura de Autenticación OAuth 2.1 y OpenID Connect (OIDC)" }
summary: { tr: "PKCE zorunluluğu, durumsuz (stateless) JWT jetonları, Authorization Code akışı ve OIDC kimlik katmanı.", en: "Mandatory PKCE, stateless JWT tokens, Authorization Code Flow, and OIDC identity layer.", es: "PKCE obligatorio, tokens JWT sin estado, flujo Authorization Code y capa de identidad OIDC." }
status: reviewed
maturity: active
categories: [networks, architectures]
tags: [oauth21, oidc, pkce, jwt, authentication, security]
locale: es
translationKey: oauth21-oidc
canonicalId: protocol.oauth21-oidc
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.swebok-v4, source.iso-42010]
related: [architecture.cyber-security.es, architecture.zero-trust.es]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [security, confidentiality, interoperability, auditability]
applicableDomains: [web, mobile, security, enterprise, api]
---

# Arquitectura de Autenticación OAuth 2.1 y OpenID Connect (OIDC)

OAuth 2.1 simplifica los estándares de autorización exigiendo el flujo Authorization Code con PKCE para aplicaciones móviles y clientes web.
