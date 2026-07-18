---
id: guide.user-manual.tr
type: guide
title: { tr: "Kullanım Kılavuzu", en: "User Manual", es: "Manual de Usuario" }
summary: { tr: "Atlasın arama, karşılaştırma, karar desteği, graf ve not özelliklerinin kullanım rehberi.", en: "User guide for searching, comparing, decision support, graph, and notes features.", es: "Guía de usuario para buscar, comparar, soporte de decisiones, grafo y notas." }
status: reviewed
maturity: active
categories: [guide]
tags: [user-guide, manual, help]
locale: tr
translationKey: user-manual
canonicalId: guide.user-manual
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-18
sources: [source.iso-42010]
related: [guide.project-constitution.tr]
contributors:
  - personId: person.kenan-ay
    roles: [project-owner, technical-author, editor]
qualityAttributes: [traceability, consistency, completeness]
applicableDomains: [documentation]
---
## Giriş

Software Architecture Atlas; yazılım geliştiricileri, mimarlar ve mühendisler için tasarlanmış Yerel Öncelikli bir teknik başvuru sistemidir. Bu kılavuz, platformda sunulan araçları ve yetenekleri nasıl kullanacağınızı açıklar.

## 1. Belge Arama ve Filtreleme

Katalog sayfası üzerinden teknik belgelere hızlıca erişebilirsiniz:
- **Dil Filtresi**: Türkçe, İngilizce veya İspanyolca belgeleri filtreleyin.
- **Kategori Filtresi**: Belgeleri sistem rehberi, mimari stiller veya yapay zekâ kategorilerine göre daraltın.
- **Tam Metin Arama**: Arama çubuğuna yazmaya başladığınızda, Pagefind motoru statik belgelerin gövdesinde arama yapar ve anında sonuçları listeler.

## 2. Teknik Terim İpuçları (Popover)

Belgeleri okurken teknik terimlerin üzerine geldiğinizde (`hover`), klavye ile odaklandığınızda (`focus`) or tıkladığınızda merkezi terim sözlüğü devreye girer:
- Terimin Türkçe, İngilizce veya İspanyolca karşılığı ve kısaltma açılımı gösterilir.
- Tanım bilgisi ve ilişkili kaynak referansları sunulur.
- İpuçlarını `Esc` tuşuna basarak veya kapat düğmesine tıklayarak kapatabilirsiniz.

## 3. Profil Karşılaştırma

`/compare/` sayfasını kullanarak iki farklı teknolojiyi veya mimariyi yan yana karşılaştırabilirsiniz:
- Seçim kutularından karşılaştırmak istediğiniz iki profili seçin.
- Olgunluk seviyeleri, kalite öznitelikleri, uygun olduğu kullanım alanları ve kaynakları gibi verileri aynı ekranda analiz edin.

## 4. Karar Destek Sistemi

Projenizin gereksinimlerine en uygun dili ve mimariyi seçmek için karar destek sihirbazını kullanın:
- Uygulama alanı, ölçek, güvenlik seviyesi, gecikme sınırı ve donanım erişim durumu gibi girdileri tanımlayın.
- İhtiyacınıza göre kalite gereksinimlerinin ağırlığını (performans, maliyet vb.) range kontrolleri ile belirleyin.
- **ADR İndir** düğmesine tıklayarak projenize özel oluşturulan **Mimari Karar Kaydını (Architecture Decision Record)** Markdown dosyası olarak bilgisayarınıza kaydedin.

## 5. Çevrimdışı İlişki Grafı

`/graph/` sayfasında platformdaki tüm düğümler arasındaki ilişkiler ağ diyagramı olarak çizilir:
- Düğümleri sürükleyerek yerlerini değiştirebilirsiniz.
- Bir düğüme tıkladığınızda, o düğümün tüm girdi ve çıktı bağlantılarını listeleyen bir araç ipucu açılır.

## 6. Kişisel Notlar ve Veri Yönetimi

Okuduğunuz belgenin en altında yer alan not panelini kullanabilirsiniz:
- Yazdığınız notlar tarayıcınızda güvenli bir şekilde **IndexedDB** veritabanında saklanır.
- Belgeleri yer işaretlerine ekleyebilirsiniz (Bookmark).
- **JSON Dışa Aktar** ile notlarınızı yedekleyebilir; **JSON İçe Aktar** ile başka bir tarayıcıya aktarabilirsiniz.
