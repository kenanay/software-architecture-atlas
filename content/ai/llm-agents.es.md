---
id: ai.llm-agents.es
type: concept
title: { tr: "Otonom AI Ajanları", en: "Autonomous AI Agents" }
summary: { tr: "Büyük dil modelleri ile araç kullanımı, planlama ve otonom karar alma mimarisi.", en: "Architecture leveraging LLMs for tool use, planning, and autonomous decision-making." }
status: reviewed
maturity: emerging
categories: [ai, autonomous-systems]
tags: [llm, agents, tool-calling, planning, memory]
locale: es
translationKey: llm-agents
canonicalId: ai.llm-agents
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.nist.ai-rmf-1]
related: [ai.rag.es]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [autonomy, adaptivity, auditability, security]
applicableDomains: [ai, automation, decision-support]
---
## Definición

Los Agentes de IA Autónomos (Autonomous AI Agents) son arquitecturas de software que utilizan Modelos de Lenguaje Gran Escala (LLM) como motor central de toma de decisiones, planificando dinámicamente e invocando herramientas externas para lograr objetivos definidos.

## Componentes Arquitectónicos

- **Planificación y Razonamiento:** Descomposición de tareas complejas en pasos de ejecución (ReAct, Chain-of-Thought).
- **Uso de Herramientas (Tool Calling):** Ejecución segura de llamadas a API, consultas a bases de datos y herramientas de búsqueda.
- **Sistemas de Memoria:** Almacenamiento a corto plazo (ventana de contexto) y a largo plazo (bases de datos vectoriales).
- **Barandillas de Seguridad (Guardrails):** Límites de seguridad que monitorean y restringen las acciones del agente.
