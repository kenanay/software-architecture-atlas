---
id: ai.rag.es
type: concept
contentProfile: architecture
title: { tr: "Geri Getirim Destekli Üretim (RAG) Mimarisi", en: "Retrieval-Augmented Generation (RAG) Architecture", es: "Arquitectura de Generación Aumentada por Recuperación (RAG)" }
summary: { tr: "Üretken dil modellerine dış bilgi depolarından ilgili bağlamı dinamik getirerek halüsinasyonu önleyen mimari.", en: "An AI architecture retrieving relevant external context to ground LLM generation and mitigate hallucinations.", es: "Arquitectura de IA que recupera contexto externo para fundamentar la generación de LLM." }
status: reviewed
maturity: active
categories: [ai, data]
tags: [retrieval, llm, embeddings, vector-databases, rag]
locale: es
translationKey: rag
canonicalId: ai.rag
translationStatus: reviewed
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.nist.ai-rmf-1, source.swebok-v4]
related: [ai.llm-agents.es, concept.multi-agent-systems.es]
contributors:
  - personId: person.kenan-ay
    roles: [researcher, technical-author, content-maintainer]
qualityAttributes: [traceability, relevance, security, accuracy]
applicableDomains: [ai, search, documentation, enterprise]
---

<!-- section:definition -->
## Definición y Descripción del Problema

La Generación Aumentada por Recuperación (RAG) es un patrón arquitectónico de IA mediante el cual los Modelos de Lenguaje Grandes (LLM) recuperan dinámicamente contexto relevante de fuentes externas (bases de datos vectoriales, repositorios documentales) antes de generar una respuesta.

Los modelos entrenados en datos estáticos corren el riesgo de generar alucinaciones o respuestas desactualizadas. RAG permite generar respuestas verificables y específicas del dominio sin necesidad de reentrenar el modelo.

<!-- section:components -->
## Componentes Principales

- **Ingestion Pipeline:** Carga documentos, realiza fragmentación (chunking) y genera representaciones vectoriales (embeddings).
- **Base de Datos Vectorial:** Almacena embeddings con índices HNSW o IVF y ofrece búsqueda por similitud (ej. Qdrant, pgvector).
- **Recuperador y Re-clasificador (Reranker):** Obtiene los fragmentos más relevantes y los reordena por relevancia semántica mediante Cross-Encoders.
- **Generador LLM:** Combina la consulta con el contexto recuperado para generar respuestas fundamentadas.

<!-- section:data-flow -->
## Flujo de Datos y Control (Diagrama Mermaid)

```mermaid
flowchart TD
    subgraph Ingestion ["Tubería de Ingesta e Indexación"]
        A[Documentos / PDF] --> B[Motor de Fragmentación]
        B --> C[Modelo de Embeddings]
        C --> D[(Base de Datos Vectorial)]
    end

    subgraph QueryFlow ["Flujo de Consulta en Tiempo de Ejecución"]
        E[Consulta de Usuario] --> F[Modelo de Embeddings]
        F --> G[Búsqueda Vectorial]
        D -. Recuperación Vectorial .-> G
        G --> H[Re-clasificador Cross-Encoder]
        H --> I[Constructor de Contexto]
        I --> J[Generación LLM]
        J --> K[Respuesta Verificada]
    end
```

<!-- section:use-cases -->
## Casos de Uso y Compromisos

### Casos de Uso Principales
- **Base de Conocimiento Empresarial:** Portales de soporte, documentación técnica y manuales internos.
- **Datos Dinámicos:** Informes financieros y actualizaciones normativas.

<!-- section:trade-offs -->
### Compromisos (Trade-offs)
- **Latencia de Consulta:** La búsqueda vectorial y el reordenamiento añaden de 200 a 500 ms de latencia.
- **Límite de Ventana de Contexto:** La longitud del contexto influye en el costo y la atención del modelo.

<!-- section:production -->
## Desafíos Operativos y de Producción

1. **Estrategia de Fragmentación:** Ajustar el tamaño del fragmento (ej. 512 tokens) y la superposición evita la pérdida semántica.
2. **Búsqueda Híbrida:** Combinar búsqueda vectorial densa con búsqueda por palabras clave dispersa (BM25) mejora la precisión.

<!-- section:security -->
## Consideraciones de Seguridad

- **Control de Acceso a Documentos (ACL):** Filtrar los fragmentos recuperados según los permisos del usuario.
- **Inyección de Prompts:** Sanear el contexto externo para evitar ejecuciones maliciosas de instrucciones en el LLM.

<!-- section:testing -->
## Pruebas y Validación

- Automatizar la evaluación con **Métricas RAGAS**: Fidelidad, Relevancia del Contexto y Relevancia de la Respuesta.

<!-- section:observability -->
## Observabilidad

- Monitorizar la latencia de búsqueda, la generación de embeddings y el consumo de tokens en paneles LangSmith u OpenTelemetry.

<!-- section:alternatives -->
## Alternativas

- **Fine-Tuning:** Para adaptación de estilo o lenguaje del dominio.
- **Prompting de Largo Contexto:** Inyectar conjuntos de documentos directamente para volúmenes reducidos.

<!-- section:sources -->
## Fuentes

- NIST AI Risk Management Framework (AI RMF 1.0)
- IEEE SWEBOK v4.0 — Artificial Intelligence Knowledge Area
