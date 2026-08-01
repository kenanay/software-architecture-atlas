---
id: ai.fine-tuning-peft.en
type: concept
contentProfile: ai-training
title: { tr: "Model İnce Ayarı ve PEFT (LoRA/QLoRA) Mimarisi", en: "Fine-Tuning and PEFT (LoRA/QLoRA) Architecture", es: "Arquitectura de Fine-Tuning y PEFT (LoRA/QLoRA)" }
summary: { tr: "Büyük dil modellerini düşük parametre oranı ile (LoRA/QLoRA) verimli şekilde alana özgü eğiten mimari.", en: "Parameter-efficient architecture (LoRA/QLoRA) fine-tuning LLMs with minimal compute footprint.", es: "Arquitectura eficiente en parámetros (LoRA/QLoRA) para adaptar LLM con mínimo cómputo." }
status: reviewed
maturity: active
categories: [ai]
tags: [fine-tuning, peft, lora, qlora, llm, transformers]
locale: en
translationKey: fine-tuning-peft
canonicalId: ai.fine-tuning-peft
translationStatus: reviewed
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.paper.lora, source.paper.qlora, source.docs.huggingface.peft, source.nist.ai-rmf-1]
related: [ai.rag.en, ai.llm-agents.en]
contributors:
  - personId: person.kenan-ay
    roles: [researcher, technical-author]
qualityAttributes: [performance, accuracy, scalability, efficiency]
applicableDomains: [ai, deep-learning, nlp, enterprise]
---

<!-- section:definition -->
## Definition and Problem Statement

Parameter-Efficient Fine-Tuning (PEFT) and Low-Rank Adaptation (LoRA) freeze the pre-trained Large Language Model (LLM) weights and inject trainable rank decomposition matrices into Transformer layers.

Full Fine-Tuning requires massive VRAM footprint and expensive GPU clusters. QLoRA leverages 4-bit NormalFloat (NF4) quantization and double quantization to enable domain-specific fine-tuning on consumer GPUs without accuracy loss.

<!-- section:components -->
## Core Components

- **Frozen Base Model:** Frozen pre-trained transformer model parameters (e.g., Llama-3 8B/70B).
- **LoRA Adapters (Low-Rank Matrices A & B):** $d \times r$ and $r \times d$ trainable matrices where rank $r \ll d$.
- **Quantization Engine (QLoRA):** Quantizes base weights into 4-bit NF4 format with Paged Optimizers for memory spike management.
- **PEFT Controller (Hugging Face PEFT):** Orchestrates dynamic adapter loading and weights merging during inference.

<!-- section:model-data-flow -->
## Model & Data Flow (LoRA Mermaid Flowchart)

```mermaid
flowchart LR
    Input[Input Tokens / Prompt] --> FrozenW[Frozen Model Weight W]
    Input --> MatrixA[Trainable Matrix A - rank r]
    MatrixA --> MatrixB[Trainable Matrix B - rank r]
    
    FrozenW --> Sum((+))
    MatrixB -- Scale Alpha/r --> Sum
    Sum --> Output[Final Layer Output h]
```

<!-- section:evaluation -->
## Evaluation and Metrics

- **VRAM Savings:** Reduces GPU memory usage by 60–80% during fine-tuning.
- **Mitigating Catastrophic Forgetting:** Preserves base model capabilities while acquiring specialized domain skills.

<!-- section:security -->
## Security Concerns

- Scan custom adapter weights (`safetensors`) for data poisoning or malicious instruction injection.

<!-- section:cost -->
## Cost Analysis

- Replaces expensive 8x A100 GPU clusters with single-GPU training workflows using QLoRA.

<!-- section:serving -->
## Serving Strategies

- **Multi-Tenant LoRA Serving:** Serve hundreds of domain-specific adapters concurrently on a single shared base model instance (e.g., vLLM multi-LoRA).

<!-- section:sources -->
## Sources

- Edward J. Hu et al. — *LoRA: Low-Rank Adaptation of Large Language Models (arXiv 2021)*
- Tim Dettmers et al. — *QLoRA: Efficient Finetuning of Quantized LLMs (NeurIPS 2023)*
