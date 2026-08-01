---
id: adr.001-microservices-adoption.tr
type: architecture-decision-record
contentProfile: architecture
title: { tr: "ADR 001: Monolitik Yapıdan Mikroservis Mimarisine Geçiş Kararı (Kabul Edildi)", en: "ADR 001: Migration from Monolith to Microservices Architecture (Accepted)", es: "ADR 001: Migración de Monolito a Microservicios (Aceptado)" }
summary: { tr: "Büyüyen mühendislik ekibinin bağımsız dağıtım yapabilmesi ve heterojen ölçekleme için mikroservis mimarisinin kabulü.", en: "Accepting microservices architecture to enable independent team deployments and heterogeneous scaling.", es: "Aceptación de microservicios para permitir despliegues independientes y escalado heterogéneo." }
status: reviewed
maturity: active
categories: [architectures, engineering-processes]
tags: [adr, microservices, architecture-decision, accepted]
locale: tr
translationKey: adr-001-microservices-adoption
canonicalId: adr.001-microservices-adoption
translationStatus: reviewed
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.fowler.microservices, source.iso-42010]
related: [architecture.microservices.tr, architecture.modular-monolith.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, decision-owner]
qualityAttributes: [scalability, maintainability, replaceability]
applicableDomains: [enterprise, web, finance]
---

<!-- section:definition -->
## Bağlam ve Problem Tanımı

Mevcut monolitik e-ticaret ve ödeme platformumuz, son 18 ayda mühendislik ekibinin 15 kişiden 90 kişiye büyümesiyle geliştirme tıkanıklıklarına (deployment bottlenecks) neden olmaya başlamıştır. Tek bir kod tabanında yapılan değişiklikler tüm uygulamanın yeniden dağıtılmasını gerektirmekte ve haftalık sürümlerde risk oluşturmaktadır.

<!-- section:components -->
## Karar (Decision)

Domain-Driven Design (DDD) Bounded Context ilkelerine dayanarak; monolitik çekirdeğin kademeli olarak **Mikroservis Mimarisine** bölünmesi ve her servisin kendi veritabanına (Database-per-Service) sahip olması kararlaştırılmıştır.

<!-- section:data-flow -->
## Mimari Karar Diyagramı (Mermaid Akışı)

```mermaid
flowchart TD
    Monolith[Monolitik Çekirdek Uygulama] -->|Strangler Fig Pattern| Micro1[Order Microservice]
    Monolith -->|Strangler Fig Pattern| Micro2[Payment Microservice]
    Monolith -->|Strangler Fig Pattern| Micro3[Inventory Microservice]
    
    Micro1 --> DB1[(Order DB)]
    Micro2 --> DB2[(Payment DB)]
    Micro3 --> DB3[(Inventory DB)]
```

<!-- section:use-cases -->
## Değerlendirilen Seçenekler

1. **Modüler Monolit:** Kısa vadede kolay ancak heterojen ölçekleme ve bağımsız bağımsız CI/CD süreçlerini tam karşılamıyor.
2. **Mikroservis Mimarisi (Seçilen):** Yüksek operasyonel karmaşıklık getirmekle birlikte organizasyonel büyümeyi destekliyor.

<!-- section:trade-offs -->
## Sonuçlar ve Değiş-Tokuşlar

### Olumlu Sonuçlar (Pros)
- Ekipler arası bağımsız sürüm yayını (decoupled deployment pipelines).
- Kritik servislerin (Ödeme) bağımsız dikey/yatay ölçeklenebilmesi.

### Olumsuz Sonuçlar ve Riskler (Cons)
- Dağıtık izleme ve mTLS güvenlik altyapısı ihtiyacı.
- Nihai tutarlılık (eventual consistency) yönetimi.

<!-- section:production -->
## Uygulama Stratejisi

- **Strangler Fig Pattern:** Monolit sistem tek seferde değil, fonksiyonel modüller bazında (önce Ödeme, sonra Sipariş) sırayla mikroservislere aktarılacaktır.

<!-- section:security -->
## Güvenlik Politikası

- Servisler arası iletişimde mTLS (Istio Service Mesh) ve JWT token aktarımı zorunlu kılınmıştır.

<!-- section:testing -->
## Test Stratejisi

- Tüketici Odaklı Sözleşme Testleri (Pact) CI hatına dahil edilecektir.

<!-- section:observability -->
## Gözlemlenebilirlik Kararı

- OpenTelemetry ve Jaeger ile tüm servisler genelinde Trace ID takibi yapılacaktır.

<!-- section:alternatives -->
## Reddedilen Alternatifler

- Monolitik yapıda devam etmek (Büyüme hedefleriyle uyuşmuyor).

<!-- section:sources -->
## Kaynaklar

- ISO/IEC/IEEE 42010:2022 — Architecture Decision Records
- Martin Fowler — *Microservices Guide*
