---
id: architecture.actor-model.en
type: architecture
title: { tr: "Aktör Modeli Dağıtık Mimari", en: "Actor Model Distributed Architecture", es: "Arquitectura Distribuida del Modelo de Actores" }
summary: { tr: "Paylaşımsız hafıza (shared-nothing), mesajlaşma tabanlı aktör nesneleri, Erlang/BEAM ve Akka ile eşzamanlılık rehberi.", en: "Shared-nothing memory, message-passing actor entities, concurrency guide with Erlang/BEAM and Akka.", es: "Memoria compartida cero, paso de mensajes, guía de concurrencia con Erlang/BEAM y Akka." }
status: reviewed
maturity: mature
categories: [architectures, networks]
tags: [actor-model, erlang, beam, akka, concurrency, distributed-systems]
locale: en
translationKey: actor-model
canonicalId: architecture.actor-model
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.swebok-v4, source.iso-42010]
related: [architecture.cqrs-event-sourcing.en, guide.user-manual.en]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [fault-tolerance, scalability, concurrency, availability]
applicableDomains: [distributed-systems, telecom, messaging, real-time]
---

# Actor Model Distributed Architecture

The Actor Model is a mathematical model of concurrent computation that treats "actors" as the universal primitives of concurrent computation.

## Key Principles
1. **Shared-Nothing State:** Actors encapsulate state without shared memory locks.
2. **Asynchronous Messaging:** Actors communicate strictly by sending messages to mailboxes.
3. **Fault Tolerance:** Supervision trees enforce "let it crash" self-healing mechanisms.
