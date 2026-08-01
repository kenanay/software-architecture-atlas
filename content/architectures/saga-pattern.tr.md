---
id: architecture.saga-pattern.tr
type: architecture
contentProfile: architecture
title: { tr: "Saga Mimari Kalıbı", en: "Saga Pattern Architecture", es: "Patrón de Arquitectura Saga" }
summary: { tr: "Dağıtık mikroservislerde 2PC kullanmadan veriyi tutarlı tutan telafi edici işlem (compensating transactions) dizisi.", en: "A sequence of local transactions with compensating actions managing distributed consistency without 2PC.", es: "Secuencia de transacciones locales con acciones compensatorias que gestionan la consistencia distribuida sin 2PC." }
status: reviewed
maturity: active
categories: [architectures, server-cloud]
tags: [saga, distributed-transactions, microservices, eventual-consistency]
locale: tr
translationKey: saga-pattern
canonicalId: architecture.saga-pattern
translationStatus: reviewed
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.paper.saga, source.swebok-v4]
related: [architecture.microservices.tr, architecture.transactional-outbox.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [resilience, consistency, performance, maintainability]
applicableDomains: [distributed-systems, e-commerce, finance]
---

<!-- section:definition -->
## Tanım ve Çözdüğü Problem

Saga Kalıbı (Saga Pattern); birden fazla mikroservis ve veritabanına yayılan dağıtık işlemlerde (distributed transactions) veri tutarlılığını sağlamak için tasarlanmış mimari desendir. 

Geleneksel iki aşamalı taahhüt (Two-Phase Commit / 2PC) protokolleri mikroservis mimarilerinde kaynakları kilitler (locking) ve performansı ciddi şekilde düşürür. Saga kalıbı, 2PC yerine her servisin kendi yerel işlemini (local transaction) çalıştırdığı ve hata durumunda geriye dönük **Telafi Edici İşlemleri (Compensating Transactions)** tetiklediği asenkron bir mekanizma sunar.

<!-- section:components -->
## Temel Bileşenler

- **Choreography Saga:** Merkezi bir denetleyici olmadan, servislerin olay yayınlayarak (event-driven) birbirini sıralı tetiklediği merkeziyetsiz model.
- **Orchestration Saga:** Merkezi bir **Saga Orchestrator** servisinin işlem adımlarını ve hata telafi akışlarını durum makinesi (state machine) ile yönettiği model.
- **Compensating Transactions:** Bir adım başarısız olduğunda önceden tamamlanmış adımların etkisini geri alan (semantik rollback) işlemler.

<!-- section:data-flow -->
## Veri ve Kontrol Akışı (Orchestration Saga Mermaid Akışı)

```mermaid
sequenceDiagram
    autonumber
    participant Client as İstemci
    participant Orch as Saga Orchestrator
    participant Order as Order Service
    participant Pay as Payment Service
    participant Stock as Stock Service

    Client->>Orch: Start Checkout Saga
    Orch->>Order: CreatePendingOrder()
    Order-->>Orch: OrderCreated (OK)
    
    Orch->>Pay: ProcessPayment()
    Pay-->>Orch: PaymentFailed (Error!)
    
    rect rgb(255, 230, 230)
        note over Orch,Order: Telafi Akışı (Compensating Action)
        Orch->>Order: CancelOrder()
        Order-->>Orch: OrderCancelled (Ack)
    end
    
    Orch-->>Client: Checkout Failed (Order Cancelled)
```

<!-- section:use-cases -->
## Kullanım Alanları ve Değiş-Tokuşlar

### Ideal Kullanım Alanları
- **Çok Adımlı İş Süreçleri:** Sipariş alma -> Ödeme tahsilatı -> Stok düşme -> Kargo oluşturma gibi e-ticaret akışları.
- **Dağıtık Bankacılık ve Transferler:** Farklı mikroservisler arası para transferi ve bakiye güncelleme.

<!-- section:trade-offs -->
### Değiş-Tokuşlar (Trade-offs)
- **Nihai Tutarlılık (Eventual Consistency):** İşlem tamamlanana kadar sistem durumu geçici olarak tutarsız görünebilir.
- **İzolasyon Eksikliği (ACID 'I' Mimarisi):** Yerel işlemler hemen taahhüt (commit) edildiği için diğer işlemler geçici durumu okuyabilir (dirty reads).

<!-- section:production -->
## Üretim ve Operasyon Zorlukları

1. **İzolasyon Sorunlarını Çözme:** Semantic lock (ör. PENDING durumu) kullanarak eşzamanlı değişikliklerin önüne geçilmelidir.
2. **Durum Makinesi Kalıcılığı:** Orchestrator kendi durumunu (Saga State) veritabanına kesintisiz kaydetmelidir.

<!-- section:security -->
## Güvenlik Kaygıları

- Telafi edici işlemler yetkisiz tetiklemelere karşı doğrulanmalı, sahte (forged) telafi istekleri engellenmelidir.

<!-- section:testing -->
## Test ve Doğrulama

- Her bir adımda kasıtlı arıza (Fault Injection) üreterek telafi akışlarının eksiksiz çalıştığı doğrulanmalıdır.

<!-- section:observability -->
## Gözlemlenebilirlik

- Saga Execution ID ile tüm servisler genelinde sürecin hangi adımda takıldığı izlenebilmelidir.

<!-- section:alternatives -->
## Alternatifler

- **2PC / XA Transactions:** Yalnızca tekil ilişkisel veritabanı kümelerinde ve düşük ölçekli sistemlerde.

<!-- section:sources -->
## Kaynaklar

- Hector Garcia-Molina, Kenneth Salem — *Sagas (ACM SIGMOD 1987)*
- IEEE SWEBOK v4.0 — Software Architecture & Distributed Systems
