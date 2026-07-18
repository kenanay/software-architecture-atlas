---
id: guide.project-constitution.es
type: guide
title: { tr: "Proje Anayasası", en: "Project Constitution", es: "Constitución del Proyecto" }
summary: { tr: "Atlasın kapsam, kaynak, terminoloji ve içerik kalite kuralları.", en: "Scope, sourcing, terminology and content quality rules for the atlas.", es: "Ámbito de aplicación, fuentes, terminología y normas de calidad del contenido del atlas." }
status: reviewed
maturity: active
categories: [guide]
tags: [governance, terminology, sources]
locale: es
translationKey: project-constitution
canonicalId: guide.project-constitution
translationStatus: reviewed
translationMethod: human
translationReviewedBy: person.kenan-ay
version: 1.0.0
lastReviewedAt: 2026-07-17
sources: [source.iso-42010, source.swebok-v4]
related: [architecture.modular-monolith.es]
contributors:
  - personId: person.kenan-ay
    roles: [project-owner, architecture-lead, translator, editor]
qualityAttributes: [maintainability, traceability, accessibility]
applicableDomains: [documentation]
---
## Propósito y alcance

Software Architecture Atlas establece conexiones fundamentadas entre los requisitos del proyecto y las opciones de lenguajes de programación, arquitecturas, cadenas de herramientas y despliegues, más allá de simplemente listar tecnologías.

## Principios de contenido

- El contenido canónico se almacena en archivos Markdown, YAML y JSON.
- Cada afirmación se vincula, siempre que sea posible, con una fuente oficial o académica.
- El estado del documento y el estado de madurez de la tecnología tratada se rastrean por separado.
- Los borradores asistidos por IA no se consideran `reviewed` o `verified` sin una revisión humana previa.
- Los documentos en turco, inglés y español son independientes, pero están vinculados mediante la propiedad `translationKey`.

## Terminología

En su primer uso, el término técnico se presentará en el idioma local y en inglés. Los nombres de productos, API o términos técnicos que no cuenten con una traducción establecida no se traducirán.

## Responsabilidad

Propietario del Proyecto y Líder de Arquitectura: Especialista en Gestión y Sistemas de Información Kenan AY.
