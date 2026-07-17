---
id: architecture.modular-monolith.en
type: architecture
title: { tr: "Modüler Monolit", en: "Modular Monolith" }
summary: { tr: "Tek dağıtım biriminde güçlü modül sınırları kullanan mimari stil.", en: "An architectural style with strong module boundaries in one deployable unit." }
status: reviewed
maturity: mature
categories: [architectures, web, server]
tags: [modules, boundaries, deployment]
locale: en
translationKey: modular-monolith
canonicalId: architecture.modular-monolith
translationStatus: reviewed
translationMethod: human
translationReviewedBy: person.kenan-ay
version: 1.0.0
lastReviewedAt: 2026-07-17
sources: [source.iso-42010, source.swebok-v4]
related: [guide.project-constitution.en]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, translator, translation-reviewer]
qualityAttributes: [maintainability, testability, deployability]
applicableDomains: [web, server, desktop]
---
## Definition

A Modular Monolith uses modules with explicit responsibilities and dependency rules within one process and deployable unit.

## Problem addressed

It lets small and medium-sized teams separate business domains without incurring distributed-system operational costs.

## Dependency direction

Modules depend on published contracts, not one another's internal implementations. Automated checks should prevent cyclic dependencies.

## Testing and deployment

Unit tests cover module cores and contract tests cover module interfaces. The application is deployed as a single artifact.
