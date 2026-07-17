---
id: concept.architecture-description.tr
type: concept
title: { tr: "Mimari Açıklama ve ISO 42010", en: "Architecture Description and ISO 42010" }
summary: { tr: "Mimariyi, mimari açıklamadan; görünümü, bakış açısından ayıran temel kavram modeli.", en: "A concept model distinguishing architecture from its description and views from viewpoints." }
status: reviewed
maturity: mature
categories: [architecture-foundations, standards]
tags: [iso-42010, viewpoints, stakeholders, concerns]
locale: tr
translationKey: architecture-description
canonicalId: concept.architecture-description
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-17
sources: [source.iso-42010]
related: [architecture.modular-monolith.tr]
contributors:
  - personId: person.kenan-ay
    roles: [researcher, architecture-lead, technical-author, reviewer]
qualityAttributes: [traceability, consistency, completeness]
applicableDomains: [software, systems, enterprise]
---
## Temel ayrım

ISO/IEC/IEEE 42010:2022, bir ilgi konusu varlığın mimarisi ile bu mimariyi ifade eden **Mimari Açıklama (Architecture Description, AD)** arasında ayrım yapar. Standart bir mimari yöntem, notasyon veya dosya biçimi dayatmaz; AD, bakış açısı, model türü, mimari çerçeve ve mimari açıklama dili için gereksinimler tanımlar.

## Kavramlar

- **Paydaş (Stakeholder):** Sisteme ilişkin ilgisi bulunan kişi, grup veya kuruluş.
- **Kaygı (Concern):** Paydaş açısından önemli olan gereksinim, risk, hedef veya kısıt.
- **Bakış açısı (Viewpoint):** Belirli kaygıları ele alan bir görünümün nasıl oluşturulacağını tanımlayan sözleşme.
- **Mimari görünüm (Architecture View):** Bir bakış açısına uyan, belirli paydaş kaygılarını ifade eden çalışma ürünü.
- **Model türü (Model Kind):** Modelin gösterim, yorumlama ve analiz kuralları.

## Uygulama kuralı

Her mimari karar; ilgili paydaşları, ele aldığı kaygıları, kullanılan bakış açısını, kanıtı ve ödünleşimleri izlenebilir biçimde göstermelidir. Diyagram tek başına mimari açıklama değildir.

## Sürüm durumu

2022 baskısı yayımlanmış ikinci baskıdır. 2011 baskısı 7 Kasım 2022 tarihinde geri çekilmiş ve 2022 baskısı tarafından değiştirilmiştir.
