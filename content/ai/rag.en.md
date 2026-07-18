---
id: ai.rag.en
type: concept
title: { tr: "Geri Getirim Destekli Üretim", en: "Retrieval-Augmented Generation", es: "Generación Aumentada por Recuperación" }
summary: { tr: "Üretim sırasında dış bilgi kaynaklarından ilgili bağlam getiren AI yaklaşımı.", en: "An AI approach that retrieves relevant external context during generation.", es: "Un enfoque de IA que recupera contexto externo relevante durante la generación." }
status: draft
maturity: active
categories: [ai]
tags: [retrieval, llm, embeddings]
locale: en
translationKey: rag
canonicalId: ai.rag
translationStatus: translated
translationMethod: human
translationReviewedBy: person.kenan-ay
version: 0.1.0
lastReviewedAt: 2026-07-17
sources: []
related: []
contributors:
  - personId: person.kenan-ay
    roles: [researcher, technical-author, translator]
qualityAttributes: [traceability, relevance, security]
applicableDomains: [ai, search, documentation]
---
## Definition

Retrieval-Augmented Generation (RAG) finds relevant documents and provides them as context to a generative model before response generation.

## Core Flow

Document ingestion, chunking, embedding generation, indexing, retrieval, reranking, context formatting, and response generation.

## Risks

Improper access control, outdated content, poor retrieval accuracy, and hallucinations without citations must be evaluated.
