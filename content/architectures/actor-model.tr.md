---
id: architecture.actor-model.tr
type: architecture
title: { tr: "Aktör Modeli Dağıtık Mimari", en: "Actor Model Distributed Architecture", es: "Arquitectura Distribuida del Modelo de Actores" }
summary: { tr: "Paylaşımsız hafıza (shared-nothing), mesajlaşma tabanlı aktör nesneleri, Erlang/BEAM ve Akka ile eşzamanlılık rehberi.", en: "Shared-nothing memory, message-passing actor entities, concurrency guide with Erlang/BEAM and Akka.", es: "Memoria compartida cero, paso de mensajes, guía de concurrencia con Erlang/BEAM y Akka." }
status: reviewed
maturity: mature
categories: [architectures, networks]
tags: [actor-model, erlang, beam, akka, concurrency, distributed-systems]
locale: tr
translationKey: actor-model
canonicalId: architecture.actor-model
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.swebok-v4, source.iso-42010]
related: [architecture.cqrs-event-sourcing.tr, guide.user-manual.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [fault-tolerance, scalability, concurrency, availability]
applicableDomains: [distributed-systems, telecom, messaging, real-time]
---

# Aktör Modeli Dağıtık Mimari

Aktör Modeli (Actor Model); eşzamanlı ve dağıtık sistemlerde durumu (state) korumak ve güvenli iletişim kurmak için her bileşeni bağımsız bir "Aktör" olarak ele alan hesaplama modelidir.

## Temel İlkeler
1. **Paylaşımsız Hafıza (Shared-Nothing):** Aktörler durumlarını kilit (lock) kullanmadan kendi bünyelerinde saklar.
2. **Mesajlaşma (Asynchronous Message Passing):** Aktörler yalnızca posta kutularına (mailbox) mesaj göndererek haberleşir.
3. **Hata Toleransı (Supervision Trees):** "Let it crash" felsefesi ile çöken aktörler denetleyici (supervisor) tarafından otomatik yeniden başlatılır.
