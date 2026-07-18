---
id: concept.ai-risk-management.es
type: concept
title: { tr: "AI Risk Yönetimi", en: "AI Risk Management", es: "Gestión de Riesgos de IA" }
summary: { tr: "AI sistem risklerini yaşam döngüsü boyunca Govern, Map, Measure ve Manage işlevleriyle ele alma yaklaşımı.", en: "A lifecycle approach to AI risk using Govern, Map, Measure, and Manage functions.", es: "Un enfoque de ciclo de vida para el riesgo de la IA que utiliza las funciones de Gobernanza, Mapeo, Medición y Gestión." }
status: reviewed
maturity: active
categories: [ai, quality, security]
tags: [nist, ai-rmf, governance, evaluation]
locale: es
translationKey: ai-risk-management
canonicalId: concept.ai-risk-management
translationStatus: reviewed
translationMethod: human
translationReviewedBy: person.kenan-ay
version: 1.0.0
lastReviewedAt: 2026-07-17
sources: [source.nist.ai-rmf-1]
related: [ai.rag.es]
contributors:
  - personId: person.kenan-ay
    roles: [researcher, technical-author, translator]
qualityAttributes: [safety, privacy, explainability, robustness]
applicableDomains: [ai, ml, generative-ai]
---
## Enfoque de ciclo de vida

NIST AI RMF 1.0 organiza la Gestión de Riesgos de IA bajo cuatro funciones de alto nivel: **Gobernar, Mapear, Medir y Gestionar** (Govern, Map, Measure, Manage). La gobernanza (Govern) atraviesa las demás funciones; la gestión de riesgos no es una aprobación única, sino una actividad continua a lo largo del ciclo de vida.

## Implicaciones arquitectónicas

- Las versiones de datos, modelos, prompts y evaluaciones deben rastrearse por separado.
- Se debe registrar el contexto, el usuario y el propósito de uso para la salida del modelo.
- Las métricas de seguridad, privacidad, sesgo, robustez y explicabilidad deben seleccionarse según el contexto del proyecto.
- Se deben definir los límites de intervención humana (human-in-the-loop) y el comportamiento seguro ante fallos.

## Nota de actualización

NIST informa que el AI RMF 1.0 está siendo actualizado. Este registro se mantiene como `active-revision-in-progress` y debe revisarse nuevamente cuando se publique la nueva versión.
