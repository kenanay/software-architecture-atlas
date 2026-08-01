---
id: ai.llm-agents.en
type: concept
title: { tr: "Otonom AI Ajanları", en: "Autonomous AI Agents" }
summary: { tr: "Büyük dil modelleri ile araç kullanımı, planlama ve otonom karar alma mimarisi.", en: "Architecture leveraging LLMs for tool use, planning, and autonomous decision-making." }
status: reviewed
maturity: emerging
categories: [ai, autonomous-systems]
tags: [llm, agents, tool-calling, planning, memory]
locale: en
translationKey: llm-agents
canonicalId: ai.llm-agents
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.nist.ai-rmf-1]
related: [ai.rag.en]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [autonomy, adaptivity, auditability, security]
applicableDomains: [ai, automation, decision-support]
---
## Definition

Autonomous AI Agents are software architectures that use Large Language Models (LLMs) as their core decision-making engine, dynamically planning and invoking external tools to achieve defined goals.

## Architectural Components

- **Planning & Reasoning:** Decomposing complex tasks into execution steps (ReAct, Chain-of-Thought).
- **Tool Calling:** Executing API calls, database queries, and search tools securely.
- **Memory Systems:** Short-term (context window) and long-term (vector databases) storage.
- **Guardrails:** Safety boundaries monitoring and constraining agent actions.
