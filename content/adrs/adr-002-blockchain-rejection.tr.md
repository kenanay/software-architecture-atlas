---
id: adr.002-blockchain-rejection.tr
type: architecture-decision-record
contentProfile: architecture
title: { tr: "ADR 002: Tedarik Zinciri Takibinde Blokzincir Kullanımının Reddi (Ret Edildi)", en: "ADR 002: Rejection of Blockchain for Supply Chain Tracking (Rejected)", es: "ADR 002: Rechazo de Blockchain para Seguimiento de Cadena de Suministro (Rechazado)" }
summary: { tr: "Gereksiz karmaşıklık, yüksek gecikme ve ilişkisel/append-only veritabanlarının yeterliliği nedeniyle Blokzincir teklifinin reddi.", en: "Rejection of Blockchain proposal due to excessive latency, complexity, and sufficiency of relational append-only logs.", es: "Rechazo de la propuesta de Blockchain debido a complejidad innecesaria y suficiencia de bases relacionales." }
status: reviewed
maturity: active
categories: [architectures, engineering-processes]
tags: [adr, rejection, blockchain, database-design]
locale: tr
translationKey: adr-002-blockchain-rejection
canonicalId: adr.002-blockchain-rejection
translationStatus: reviewed
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.iso-42010, source.swebok-v4]
related: [architecture.supply-chain-security.tr, architecture.cqrs-event-sourcing.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, decision-owner]
qualityAttributes: [performance, cost, simplicity, maintainability]
applicableDomains: [enterprise, logistics, supply-chain]
---

<!-- section:definition -->
## Bağlam ve Teklif (Context & Proposal)

Ürün ve tedarik zinciri izlenebilirliğini artırmak amacıyla, dağıtık katılımcılar arasında değişmezlik (immutability) sağlamak için public/private **Blokzincir (Blockchain)** teknolojisinin kullanılması önerilmiştir.

<!-- section:components -->
## Karar (Decision: RET EDİLDİ)

Yapılan PoC ve performans değerlendirmeleri sonucunda **Blokzincir teklifi RET EDİLMİŞTİR**. Bunun yerine, cryptographic hashing (HMAC/Merke Tree) içeren standart ilişkisel veritabanı (PostgreSQL append-only log) ve Audit Trail mimarisinin kullanılmasına karar verilmiştir.

<!-- section:data-flow -->
## Karar Gerekçelendirme Diyagramı (Mermaid Karşılaştırması)

```mermaid
flowchart LR
    subgraph RejectedProposal ["Reddedilen: Blokzincir Mimarisi"]
        A[Tedarik Olayı] --> B[Consensus Engine / PoW / PoS]
        B --> C[Dağıtık Ledger Düğümleri]
        C -. Yüksek Gecikme & Maliyet .-> Risk[2000ms Gecikme]
    end

    subgraph SelectedSolution ["Seçilen: Cryptographic Audit Trail"]
        D[Tedarik Olayı] --> E[PostgreSQL Append-Only Log]
        E --> F[HMAC SHA-256 Hash Chain]
        F -. Yüksek Performans .-> Fast[<10ms Gecikme]
    end
```

<!-- section:use-cases -->
## Değerlendirilen Seçenekler

1. **Private Permissioned Blockchain (Hyperledger Fabric):** Yüksek operasyonel karmaşıklık, zayıf sorgulama imkanları ve saniyede düşük işlem sayısı (TPS).
2. **Kriptografik İmzalı Append-Only Log (Seçilen):** Yüksek throughput, SQL esnekliği ve katlarca düşük maliyet.

<!-- section:trade-offs -->
## Red Gerekçeleri (Cons & Failure Factors)

### Reddedilme Nedenleri
- **Aşırı Gecikme (Latency Overhead):** Konsensus mekanizmaları işlem onay sürelerini 2 saniyenin üzerine çıkarmaktadır.
- **Güven Modeli Gerçeği:** Katılımcı tüm firmalar merkezi kimlik doğrulama otoritemize zaten güvenmektedir; byzantine fault tolerance gereksizdir.
- **Geliştirici Deneyimi:** SQL ekosisteminin sunduğu zengin indeksleme ve raporlama imkanlarının kaybolması.

<!-- section:production -->
## Alternatif Mimari Çözüm

- PostgreSQL üzerinde yalnızca ekleme yapılabilen (`INSERT` only) ve önceki satırın hash değerini bir sonraki satıra bağlayan (Hash Chain) denetim izi tablosu kurulmuştur.

<!-- section:security -->
## Güvenlik Doğrulaması

- Her kaydın HMAC SHA-256 imzası saklanmakta ve veritabanı yedeğinde tutarlılık rutin olarak doğrulanmaktadır.

<!-- section:testing -->
## Test Sonuçları

- PoC testlerinde Blokzincir 150 TPS seviyesinde tıkanırken, PostgreSQL Hash Chain çözümü 12,000 TPS değerine ulaşmıştır.

<!-- section:observability -->
## Gözlemlenebilirlik

- Hash bozulma (tampering) uyarıları Prometheus üzerinden SIEM panellerine bağlanmıştır.

<!-- section:alternatives -->
## Önerilen Mimari

- Cryptographic Audit Trail & Event Sourcing.

<!-- section:sources -->
## Kaynaklar

- ISO/IEC/IEEE 42010:2022 — Architecture Decision Records
- IEEE SWEBOK v4.0 — Data Architectures
