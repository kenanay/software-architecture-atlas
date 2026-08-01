---
id: architecture.database-sharding.tr
type: architecture
contentProfile: architecture
title: { tr: "Veritabanı Bölümleme (Database Sharding) Mimarisi", en: "Database Sharding Architecture", es: "Arquitectura de Fragmentación de Base de Datos (Sharding)" }
summary: { tr: "Büyük veri kümelerini ve yüksek yükü birden fazla bağımsız veritabanı düğümüne yatay bölen mimari.", en: "Horizontal data partitioning architecture splitting massive datasets across independent database nodes.", es: "Arquitectura de particionamiento horizontal que divide grandes volúmenes de datos entre nodos independientes." }
status: reviewed
maturity: active
categories: [architectures, data, server-cloud]
tags: [database-sharding, horizontal-partitioning, scaling, distributed-databases]
locale: tr
translationKey: database-sharding
canonicalId: architecture.database-sharding
translationStatus: reviewed
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.docs.postgresql.partitioning, source.docs.mongodb.sharding, source.swebok-v4]
related: [architecture.microservices.tr, architecture.cqrs-event-sourcing.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [scalability, performance, availability, maintainability]
applicableDomains: [distributed-systems, big-data, enterprise, databases]
---

<!-- section:definition -->
## Tanım ve Çözdüğü Problem

Veritabanı Bölümleme (Database Sharding); devasa boyuttaki veri tablolarını ve yüksek okuma/yazma trafiğini tek bir veritabanı sunucusunun sınırlarını aşan durumlarda, verileri **Shard Key (Bölümleme Anahtarı)** adı verilen bir alana göre parçalayıp birden fazla bağımsız veritabanı düğümüne (Shard) yatay olarak dağıtma mimarisidir.

Dikey ölçekleme (daha fazla RAM/CPU ekleme) donanım ve maliyet sınırlarına ulaştığında Sharding, veri depolama ve sorgu yükünü küme genelinde yatayda ölçekleme imkanı sağlar.

<!-- section:components -->
## Temel Bileşenler

- **Shard Key:** Verinin hangi sharda yazılacağını ve sorgulanacağını belirleyen benzersiz alan (ör. `tenant_id`, `user_id`).
- **Sharding Router / Proxy:** İstemci sorgularını Shard Key değerine göre doğru veritabanı düğümüne yönlendiren bileşen (ör. Vitess, Citus, mongos).
- **Shard Nodes:** Verinin belirli bir bölümünü saklayan bağımsız ilişkisel veya NoSQL veritabanı örnekleri.
- **Global Metadata Catalog:** Shard aralıklarını ve haritalama kurallarını tutan merkezi katalog.

<!-- section:data-flow -->
## Veri ve Kontrol Akışı (Mermaid Şeması)

```mermaid
flowchart TD
    Client[Uygulama İstemcisi] --> Router[Sharding Router / Proxy]
    
    subgraph ShardCluster ["Dağıtık Veritabanı Kümesi (Sharded Cluster)"]
        Router -- Hash(tenant_id) % 3 == 0 --> Shard1[(Shard 1: Tenant 1-1000)]
        Router -- Hash(tenant_id) % 3 == 1 --> Shard2[(Shard 2: Tenant 1001-2000)]
        Router -- Hash(tenant_id) % 3 == 2 --> Shard3[(Shard 3: Tenant 2001-3000)]
    end
```

<!-- section:use-cases -->
## Kullanım Alanları ve Değiş-Tokuşlar

### Ideal Kullanım Alanları
- **Çok Kiracılı (Multi-tenant) SaaS Sistemleri:** Her kiracının verilerinin `tenant_id` bazında farklı shardtarda saklandığı uygulamalar.
- **Yüksek Hacimli E-Ticaret ve Sosyal Medya:** Tek sunucunun I/O kapasitesini aşan milyarlarca kayıt içeren veri depoları.

<!-- section:trade-offs -->
### Değiş-Tokuşlar (Trade-offs)
- **Çapraz Shard Sorgu Maliyeti (Cross-Shard Joins):** Shard Key içermeyen sorgular tüm shardlara yayınlanır (Scatter-Gather) ve yüksek gecikmeye yol açar.
- **Yeniden Dengelenme Karmaşıklığı (Resharding):** Yeni shard eklendiğinde verinin tutarlı özetleme (Consistent Hashing) ile taşınması zordur.

<!-- section:production -->
## Üretim ve Operasyon Zorlukları

1. **Shard Key Seçimi:** Yanlış anahtar seçimi hotspot (bir sharda aşırı yük binmesi) sorununa yol açar.
2. **Dağıtık İkincil İndeksler:** İkincil alanlara göre arama yapmak için küresel indeks tabloları tutulmalıdır.

<!-- section:security -->
## Güvenlik Kaygıları

- Kiracılar arası veri sızıntısını (Cross-Tenant Data Leakage) önlemek için Router seviyesinde katı yetkilendirme uygulanmalıdır.

<!-- section:testing -->
## Test ve Doğrulama

- Shard düğümlerinden biri çöktüğünde diğer shardların bağımsız çalışmaya devam ettiği (Fault Isolation) doğrulanmalıdır.

<!-- section:observability -->
## Gözlemlenebilirlik

- Shardlar arasındaki veri boyutu dengesizliği (Data Skew) ve sorgu dağılımı Prometheus panellerinde izlenmelidir.

<!-- section:alternatives -->
## Alternatifler

- **Read Replicas:** Yalnızca okuma yükünün yüksek olduğu sistemlerde sharding yapmadan okuma kopyaları ekleme.
- **Distributed SQL (NewSQL):** CockroachDB veya TiDB gibi sharding yönetimini veritabanı motoru içinde otomatik halleden sistemler.

<!-- section:sources -->
## Kaynaklar

- PostgreSQL Official Documentation — Table Partitioning & Sharding
- MongoDB Manual — Sharded Cluster Architecture
