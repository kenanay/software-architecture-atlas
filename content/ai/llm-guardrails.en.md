---
id: ai.llm-guardrails.en
type: concept
contentProfile: ai-safety
title: { tr: "LLM Güvenlik Duvarları (LLM Guardrails) Mimarisi", en: "LLM Guardrails Architecture", es: "Arquitectura de Barreras de Seguridad para LLM (LLM Guardrails)" }
summary: { tr: "Girdi ve çıktıları prompt injection, halüsinasyon, PII sızıntısı ve zararlı içeriklere karşı denetleyen güvenlik mimarisi.", en: "Security architecture inspecting LLM inputs and outputs against prompt injections, PII leaks, and hallucinations.", es: "Arquitectura de seguridad que inspecciona entradas y salidas de LLM contra inyecciones de prompts y fugas de datos." }
status: reviewed
maturity: active
categories: [ai, security]
tags: [llm-guardrails, prompt-injection, pii-masking, ai-security, owasp-llm]
locale: en
translationKey: llm-guardrails
canonicalId: ai.llm-guardrails
translationStatus: reviewed
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.owasp.llm, source.nist.ai-rmf-1, source.swebok-v4]
related: [ai.rag.en, concept.multi-agent-systems.en]
contributors:
  - personId: person.kenan-ay
    roles: [researcher, technical-author]
qualityAttributes: [security, confidentiality, compliance, reliability]
applicableDomains: [ai, security, enterprise, finance]
---

<!-- section:definition -->
## Definition and Problem Statement

LLM Guardrails Architecture is a dedicated security layer evaluating user inputs (Input Guardrails) and model generations (Output Guardrails) in real-time to enforce safety boundaries, structural integrity, and regulatory compliance.

Due to their probabilistic nature, Large Language Models are vulnerable to Prompt Injection, PII Data Exfiltration, System Prompt Leakage, and Hallucinations (OWASP LLM Top 10). Guardrails mitigate these risks deterministically.

<!-- section:components -->
## Core Components

- **Input Classifier Guardrail:** Pre-execution filter evaluating inputs for Prompt Injection, Jailbreak attempts, and toxic content (e.g., Llama Guard, NeMo Guardrails).
- **PII Anonymizer Engine:** Masks sensitive identifiers (SSN, credit cards, emails) before prompts reach the LLM provider (e.g., Microsoft Presidio).
- **Output Validation Engine:** Post-execution inspector enforcing output schemas, verifying RAG faithfulness, and detecting hallucinated facts.
- **Fallback Handler:** Deterministic policy engine returning safe refusal responses when policy violations occur.

<!-- section:model-data-flow -->
## Model & Data Flow (Guardrails Mermaid Flowchart)

```mermaid
flowchart TD
    User[User Prompt] --> InputGuard[Input Guardrail Filter]
    
    InputGuard -- Prompt Injection / Toxicity Detected --> BlockInput[Refusal Response: 400 Bad Request]
    InputGuard -- Clean Input --> PII[PII Masking Filter]
    
    PII -- Masked Prompt --> LLM[LLM Generator]
    LLM --> OutputGuard[Output Guardrail Filter]
    
    OutputGuard -- PII Leakage / Hallucination --> Fallback[Fallback Response / Filtered Output]
    OutputGuard -- Validated Output --> FinalUser[Response Delivered to User]
```

<!-- section:evaluation -->
## Evaluation and Metrics

- **False Positive Rate:** Ensure benign user queries are incorrectly flagged at rates <0.1%.
- **Latency Overhead:** Total inspection overhead across input and output guardrail passes must remain under 50ms.

<!-- section:security -->
## Security Concerns

- Guardrail classification models themselves must be regularly updated to defend against novel Indirect Prompt Injection vectors (OWASP LLM01:2025).

<!-- section:cost -->
## Cost Analysis

- Use lightweight classifier models (e.g., DeBERTa, Llama-Guard 3B) to minimize latency and token processing costs relative to main LLM invocations.

<!-- section:serving -->
## Serving Strategies

- **Sidecar / Gateway Guardrail Pattern:** Deploy guardrails as independent proxy services within an API Gateway or Envoy sidecar.

<!-- section:sources -->
## Sources

- OWASP Top 10 for Large Language Model Applications v2.0
- NIST AI Risk Management Framework 1.0 (AI RMF)
