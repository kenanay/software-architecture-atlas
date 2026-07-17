---
id: concept.architecture-description.en
type: concept
title: { tr: "Mimari Açıklama ve ISO 42010", en: "Architecture Description and ISO 42010" }
summary: { tr: "Mimariyi, mimari açıklamadan; görünümü, bakış açısından ayıran temel kavram modeli.", en: "A concept model distinguishing architecture from its description and views from viewpoints." }
status: reviewed
maturity: mature
categories: [architecture-foundations, standards]
tags: [iso-42010, viewpoints, stakeholders, concerns]
locale: en
translationKey: architecture-description
canonicalId: concept.architecture-description
translationStatus: reviewed
translationMethod: human
translationReviewedBy: person.kenan-ay
version: 1.0.0
lastReviewedAt: 2026-07-17
sources: [source.iso-42010]
related: [architecture.modular-monolith.en]
contributors:
  - personId: person.kenan-ay
    roles: [researcher, architecture-lead, translator, translation-reviewer]
qualityAttributes: [traceability, consistency, completeness]
applicableDomains: [software, systems, enterprise]
---
## Core distinction

ISO/IEC/IEEE 42010:2022 distinguishes the architecture of an entity of interest from an **Architecture Description (AD)** expressing that architecture. It does not mandate an architecting method, notation, or file format; it specifies requirements for ADs, viewpoints, model kinds, architecture frameworks, and architecture description languages.

## Concepts

- **Stakeholder:** A person, group, or organization with an interest in the system.
- **Concern:** A requirement, risk, objective, or constraint relevant to a stakeholder.
- **Viewpoint:** A convention describing how to construct a view addressing selected concerns.
- **Architecture view:** A work product conforming to a viewpoint and expressing selected stakeholder concerns.
- **Model kind:** Conventions for representing, interpreting, and analyzing a model.

## Application rule

Each architecture decision should trace stakeholders, concerns, viewpoints, evidence, and trade-offs. A diagram alone is not an architecture description.

## Version status

The 2022 document is the published second edition. The 2011 edition was withdrawn on 7 November 2022 and replaced by the 2022 edition.
