---
id: architecture.actor-model.es
type: architecture
title: { tr: "Aktör Modeli Dağıtık Mimari", en: "Actor Model Distributed Architecture", es: "Arquitectura Distribuida del Modelo de Actores" }
summary: { tr: "Paylaşımsız hafıza (shared-nothing), mesajlaşma tabanlı aktör nesneleri, Erlang/BEAM ve Akka ile eşzamanlılık rehberi.", en: "Shared-nothing memory, message-passing actor entities, concurrency guide with Erlang/BEAM and Akka.", es: "Memoria compartida cero, paso de mensajes, guía de concurrencia con Erlang/BEAM y Akka." }
status: reviewed
maturity: mature
categories: [architectures, networks]
tags: [actor-model, erlang, beam, akka, concurrency, distributed-systems]
locale: es
translationKey: actor-model
canonicalId: architecture.actor-model
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.swebok-v4, source.iso-42010]
related: [architecture.cqrs-event-sourcing.es, guide.user-manual.es]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [fault-tolerance, scalability, concurrency, availability]
applicableDomains: [distributed-systems, telecom, messaging, real-time]
---

# Arquitectura Distribuida del Modelo de Actores

El Modelo de Actores es un modelo matemático de computación concurrente que trata a los "actores" como primitivas universales.

## Principios Clave
1. **Memoria No Compartida:** Los actores encapsulan su estado sin bloqueos de memoria.
2. **Paso de Mensajes Asíncrono:** Los actores se comunican enviando mensajes a buzones (mailboxes).
3. **Tolerancia a Fallos:** Árboles de supervisión que aplican la filosofía de autoreparación "déjalo fallar".
