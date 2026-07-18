---
id: concept.ai-risk-management.en
type: concept
title: { tr: "AI Risk Yönetimi", en: "AI Risk Management" }
summary: { tr: "AI sistem risklerini yaşam döngüsü boyunca Govern, Map, Measure ve Manage işlevleriyle ele alma yaklaşımı.", en: "A lifecycle approach to AI risk using Govern, Map, Measure, and Manage functions." }
status: reviewed
maturity: active
categories: [ai, quality, security]
tags: [nist, ai-rmf, governance, evaluation]
locale: en
translationKey: ai-risk-management
canonicalId: concept.ai-risk-management
translationStatus: reviewed
translationMethod: human
translationReviewedBy: person.kenan-ay
version: 1.0.0
lastReviewedAt: 2026-07-17
sources: [source.nist.ai-rmf-1]
related: []
contributors:
  - personId: person.kenan-ay
    roles: [researcher, technical-author, translator, translation-reviewer]
qualityAttributes: [safety, privacy, explainability, robustness]
applicableDomains: [ai, ml, generative-ai]
---
## Lifecycle approach

NIST AI RMF 1.0 organizes AI Risk Management around four high-level functions: **Govern, Map, Measure, and Manage**. Govern is cross-cutting, and risk management is continuous throughout the system lifecycle rather than a one-time approval.

## Architecture implications

- Data, model, prompt, and evaluation versions need independent traceability.
- Model output should retain context, user, and intended-use information.
- Safety, privacy, bias, robustness, and explainability measures must be selected for the project context.
- Human-in-the-loop boundaries and safe failure behavior must be explicit.

## Currency note

NIST reports that AI RMF 1.0 is being updated. This record is marked `active-revision-in-progress` and must be reviewed when the revision is published.
