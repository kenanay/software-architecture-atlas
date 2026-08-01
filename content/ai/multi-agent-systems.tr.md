---
id: concept.multi-agent-systems.tr
type: concept
title: { tr: "Çoklu Yapay Zeka Ajan Mimarisi (Multi-Agent Systems)", en: "Multi-Agent Systems (MAS) Architecture", es: "Arquitectura de Sistemas Multi-Agente (MAS)" }
summary: { tr: "Otonom yapay zeka ajanlarının orkestrasyonu, paylaşımlı hafıza, görev dağılımı ve araç kullanımı (AGY/LangGraph).", en: "Orchestration of autonomous AI agents, shared memory, task delegation, and tool usage (AGY/LangGraph).", es: "Orquestación de agentes IA autónomos, memoria compartida, delegación de tareas y uso de herramientas." }
status: reviewed
maturity: active
categories: [ai, architectures]
tags: [ai-agents, multi-agent, llm, orchestration, agy, langgraph]
locale: tr
translationKey: multi-agent-systems
canonicalId: concept.multi-agent-systems
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.swebok-v4, source.iso-42010]
related: [ai.llm-agents.tr, ai.rag.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [autonomy, scalability, adaptability, fault-tolerance]
applicableDomains: [ai, software-architecture, automation, enterprise]
---

# Çoklu Yapay Zeka Ajan Mimarisi (Multi-Agent Systems)

Çoklu Ajan Mimarisi (Multi-Agent Systems - MAS); karmaşık problemleri ayrıştırarak özel uzmanlık alanlarına sahip birden fazla otonom yapay zeka ajanının iş birliği veya rekabet içinde çözmesini sağlayan dağıtık AI mimarisidir.

## Temel Bileşenler
1. **Agent Roles & Specialization:** Araştırmacı, Yazılımcı, Eleştirmen, Orkestratör rollerinin belirlenmesi.
2. **Orchestration Protocols:** Merkezi Orkestrasyon (Manager-Worker) veya Dağıtık Koreografi (Peer-to-Peer).
3. **Memory & State Synchronization:** Kısa süreli bağlam ve uzun süreli vektör hafıza paylaşımı.
