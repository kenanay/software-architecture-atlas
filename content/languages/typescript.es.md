---
id: language.typescript.es
type: programming-language
title: { tr: "TypeScript", en: "TypeScript" }
summary: { tr: "JavaScript'e derleme zamanı statik tipler kazandıran ölçeklenebilir üst küme dil.", en: "Scalable typed superset of JavaScript providing compile-time type safety." }
status: reviewed
maturity: active
categories: [languages, web, server]
tags: [static-typing, structural-typing, javascript, superset]
locale: es
translationKey: typescript
canonicalId: language.typescript
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4]
related: [architecture.island-architecture.es]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [type-safety, maintainability, developer-productivity]
applicableDomains: [web, fullstack, tooling, server]
---
## Propósito de Diseño

TypeScript está diseñado para proporcionar verificación estática de tipos en tiempo de compilación y refactorización segura para aplicaciones JavaScript a gran escala.

## Características Clave

- **Tipado Estructural:** Coincidencia de tipos basada en la forma de los objetos.
- **Sin Sobrecarga en Tiempo de Ejecución:** Borrado completo de anotaciones de tipo durante la compilación a ECMAScript.
