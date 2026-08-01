---
id: ai.llm-agents.tr
type: concept
title: { tr: "Otonom AI Ajanları", en: "Autonomous AI Agents" }
summary: { tr: "Büyük dil modelleri ile araç kullanımı, planlama ve otonom karar alma mimarisi.", en: "Architecture leveraging LLMs for tool use, planning, and autonomous decision-making." }
status: reviewed
maturity: emerging
categories: [ai, autonomous-systems]
tags: [llm, agents, tool-calling, planning, memory]
locale: tr
translationKey: llm-agents
canonicalId: ai.llm-agents
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.nist.ai-rmf-1]
related: [ai.rag.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [autonomy, adaptivity, auditability, security]
applicableDomains: [ai, automation, decision-support]
---
## Tanım

Otonom AI Ajanları (Autonomous AI Agents), büyük dil modellerini (LLM) karar verme çekirdeği olarak kullanan, çevresiyle etkileşime girerek belirli hedeflere ulaşmak için dinamik planlama yapan ve dış araçları çalıştıran yazılım mimarileridir.

## Mimari Bileşenler

- **Planlama & Muhakeme:** Karmaşık görevlerin alt adımlara ayrılması (ReAct, Chain-of-Thought).
- **Araç Kullanımı (Tool Calling):** API, veri tabanı ve arama araçlarının güvenli çağrılması.
- **Bellek Modeli:** Kısa süreli (bağlam penceresi) ve uzun süreli (vektör veri tabanı) bellek.
- **Güvenlik Korumaları (Guardrails):** Ajan eylemlerini sınırlandıran ve izleyen güvenlik kuralları.
