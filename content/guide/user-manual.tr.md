---
id: guide.user-manual.tr
type: guide
title: { tr: "Software Architecture Atlas: Hikâyesel ve Teknik Kullanım Kılavuzu", en: "Software Architecture Atlas: Narrative and Technical User Manual", es: "Software Architecture Atlas: Manual Narrativo y Técnico" }
summary: { tr: "Atlası hiç tanımayan bir okuyucuyu ilk açılıştan kaynaklı araştırma, kişisel not, iddia–kanıt, mimari karşılaştırma, karar desteği ve içerik yayınına götüren kapsamlı kılavuz.", en: "A comprehensive guide that takes a new reader from first launch to sourced research, personal notes, claim–evidence records, architecture comparison, decision support, and content publishing.", es: "Una guía completa que lleva a un lector nuevo desde el primer inicio hasta la investigación con fuentes, notas personales, registros de afirmaciones y evidencia, comparación arquitectónica, soporte de decisiones y publicación." }
status: reviewed
maturity: active
categories: [guide]
tags: [user-guide, manual, help, research-workflow, architecture]
locale: tr
translationKey: user-manual
canonicalId: guide.user-manual
translationStatus: original
translationMethod: original
version: 2.0.0
lastReviewedAt: 2026-07-18
sources: [source.iso-42010, source.swebok-v4, source.local-first-paper]
related: [guide.project-constitution.tr]
contributors:
  - personId: person.kenan-ay
    roles: [project-owner, architecture-lead, technical-author, editor]
qualityAttributes: [usability, traceability, consistency, completeness, learnability]
applicableDomains: [documentation, education, software-architecture, research]
---

## Bu kılavuzun anlattığı hikâye

Deniz, orta büyüklükte bir yazılım ekibinde çalışan geliştiricidir. Ekibi yeni bir sipariş sistemi tasarlamaktadır. Toplantılarda “Modüler Monolit”, “Event Sourcing”, “mikroservis”, “Yerel Öncelikli”, “ADR” gibi kavramlar geçer; fakat aynı sözcükler farklı kişiler için farklı anlamlara gelmektedir.

Deniz’in ihtiyacı yalnızca kısa bir tanım okumak değildir. Şunları bilmek ister:

- Bir mimari yaklaşım hangi problemi çözer?
- Hangi varsayımlar altında işe yarar?
- Veri ve kontrol akışı nasıldır?
- Güvenlik, performans, test ve operasyon üzerindeki etkileri nelerdir?
- Bu bilgiler hangi resmî standart veya akademik çalışmayla desteklenmektedir?
- Okuduklarından nasıl kalıcı ve tekrar kullanılabilir bilgi üretebilir?
- Bir mimari kararını daha sonra nedenleriyle birlikte nasıl açıklayabilir?

**Software Architecture Atlas**, tam olarak bu yolculuk için geliştirilmiş Yerel Öncelikli bir bilgi ve karar destek platformudur. Atlas, hazır cevap veren bir otorite gibi davranmaz. Kaynağı, iddiayı, kişisel notu, teknik sentezi ve kararı birbirinden ayırarak düşünme sürecini görünür kılar.

Bu kılavuz boyunca Deniz’le birlikte sistemi ilk kez açacak, bir konuyu araştıracak, not alacak, kanıtları inceleyecek, mimarileri karşılaştıracak ve sonunda bir Mimari Karar Kaydı oluşturacağız.

## Atlas nedir, ne değildir?

Atlas üç rolü aynı uygulamada birleştirir:

1. **Teknik başvuru kaynağıdır.** Programlama dilleri, mimari stiller, yapay zekâ sistemleri, standartlar ve RFC’ler hakkında yapılandırılmış belgeler sunar.
2. **Kişisel araştırma ortamıdır.** Okuma durumunu, atomik notları, soruları, alıntıları ve flashcard’ları tarayıcıda saklar.
3. **Karar destek aracıdır.** Proje gereksinimlerini ağırlıklandırarak aday teknoloji ve mimarileri gerekçeleriyle görünür kılar.

Atlas şunların yerine geçmez:

- Deneyimli bir mimarın proje özelindeki incelemesi
- Güvenlik, hukuk veya mevzuat değerlendirmesi
- Bir standardın satın alınmış tam metni
- Hakemli akademik araştırmanın kendisi
- Üretim sisteminde yapılacak ölçüm, yük testi veya tehdit modellemesi

Bir belgede `draft` veya `review-required` görüyorsanız içerik henüz doğrulanmış bilgi sayılmaz. `reviewed` insan incelemesinden geçmiş; `verified` ise daha güçlü doğrulama uygulanmış kayıtları ifade eder.

## Birinci bölüm: Kapıdan içeri girmek

### Uygulamayı başlatmak

Deniz projeyi bilgisayarına aldıktan sonra terminali proje klasöründe açar.

macOS veya Linux’ta:

```bash
./start.sh
```

Windows’ta:

```bat
start.bat
```

Başlatma betiği dört iş yapar:

1. Node.js ve npm’in kurulu olduğunu kontrol eder.
2. Gerekirse bağımlılıkları yükler.
3. Veri, bağlantı, terminoloji, test ve üretim derlemesini doğrular.
4. `4321` numaralı port doluysa başka bir uygulamayı kapatmak yerine güvenli bir sonraki portu seçer.

Manuel çalıştırma seçeneği:

```bash
npm install
npm run dev
```

Tam doğrulama:

```bash
npm run verify
```

Üretim sürümü ve arama indeksi:

```bash
npm run build
npm run preview
```

> `npm run dev` geliştirme sunucusunu başlatır. Pagefind tam metin araması üretim derlemesinden sonra oluşturulduğu için aramanın eksiksiz davranışını `npm run build` ve `npm run preview` ile sınamak daha doğrudur.

### İlk ekran

Deniz tarayıcıda uygulamayı açtığında tarayıcı dili algılanır ve uygun rotaya yönlendirilir:

- Türkçe: `/tr/`
- İngilizce: `/en/`
- İspanyolca: `/es/`

Sağ üstteki `TR`, `EN` ve `ES` bağlantıları aynı ekranın diğer dildeki karşılığına geçmeye çalışır. Her dil sürümü ayrı bir belge olduğu için çevirilerin sürüm ve inceleme durumu ayrıca izlenir.

Ana sayfadaki sayılar, o dilde kaç belge bulunduğunu, kaçının incelendiğini ve kaç kategorinin temsil edildiğini gösterir. Bu sayaçlar içerik kapsamı ile içerik güvenilirliğinin aynı şey olmadığını hatırlatır.

## İkinci bölüm: Deniz bir kavramın izini sürüyor

Toplantıda “Modüler Monolit” önerilmiştir. Deniz önce **Katalog** ekranını açar:

```text
/tr/catalog/
```

Arama kutusuna `modüler` yazar. Sonuçları şu alanlarla daraltabilir:

- Belge dili
- Kategori
- Editoryal durum
- Başlık, özet ve etiket içeriği
- Üretim sürümünde tam belge metni

### Belge kartını okumak

Bir belgeyi açtığında önce şu metadata ile karşılaşır:

- **Editorial:** Metnin araştırma ve inceleme durumu
- **Translation:** Bu dil sürümünün çeviri durumu
- **Maturity:** Anlatılan teknolojinin olgunluğu
- **Version:** Belgenin içerik sürümü
- **Last reviewed:** Son inceleme tarihi

Bu ayrım önemlidir. Örneğin tarihsel bir teknoloji hakkında yeni ve doğrulanmış bir belge bulunabilir. Bu durumda teknoloji `historical`, belge ise `reviewed` olabilir.

### Teknik terimlerle karşılaşmak

Deniz metinde “cohesion”, “coupling” veya “architecture description” gibi bir terime geldiğinde terimin üzerine gelir, klavyeyle odaklanır veya dokunur. Atlas terimi merkezi sözlükte bulursa açıklama penceresi açar.

Pencerede şunlar görülebilir:

- Terimin seçilen dildeki adı
- İngilizce kanonik karşılığı
- Kısaltmanın açılımı
- Teknik tanım
- İlişkili kavramlar
- Kullanım alanları
- Tanımın kaynak kimliği

`Esc` tuşu veya kapatma düğmesi pencereyi kapatır. Bu yapı yalnızca kolaylık değildir; ekip içinde aynı kavramın tutarlı yazılmasını sağlar.

## Üçüncü bölüm: Kaynak okumak ile kaynak göstermek arasındaki fark

Deniz bir mimariyi öğrenirken blog yazılarının tek başına yeterli olmadığını bilir. **Araştırma** ekranını açar:

```text
/tr/research/
```

Burada iki alan bulunur:

1. Kaynak okuma kuyruğu
2. İddia–kanıt matrisi

### Kaynak okuma kuyruğu

Her kaynak için kişisel okuma durumu seçilebilir:

- `queued`: Daha sonra okunacak
- `reading`: Okunuyor
- `read`: Okundu
- `synthesized`: Bulguları teknik içeriğe dönüştürüldü

Bu durum tarayıcının `localStorage` alanında saklanır. Git ile sürümlenen ortak kaynak kaydını değiştirmez. Böylece “ekibin kanonik kaynağı” ile “Deniz’in bu kaynağı okuma durumu” birbirine karışmaz.

### Kaynak türleri

Atlas kaynakları aynı güven düzeyinde kabul etmez. Pratik öncelik sırası şöyledir:

1. ISO, IEEE, IETF, W3C ve NIST gibi normatif veya resmî kaynaklar
2. Teknolojinin resmî dokümantasyonu
3. Hakemli akademik makaleler
4. Birincil mühendislik raporları ve whitepaper’lar
5. Güvenilir teknik kitaplar
6. Açıklayıcı ikincil makaleler

Kaynak kaydı; yazar, yayıncı, tarih, DOI, BibTeX, sürüm, hakem durumu ve erişim tarihi gibi alanları taşıyabilir.

Örnek kaynak kaydı:

```json
{
  "id": "source.example-paper",
  "type": "peer_reviewed_article",
  "title": "Example Architecture Study",
  "authors": ["Ada Researcher"],
  "publisher": "Example Society",
  "venue": "Journal of Example Systems",
  "publication_date": "2025",
  "doi": "10.1234/example.2025.1",
  "peer_reviewed": true,
  "status": "active",
  "review_status": "queued",
  "accessed_at": "2026-07-18",
  "url": "https://doi.org/10.1234/example.2025.1",
  "official_reference": false
}
```

Bu kayıt örnek biçimi göstermek içindir; gerçek içerik eklerken DOI ve bibliyografik bilgiler yayıncının sayfasından doğrulanmalıdır.

## Dördüncü bölüm: Atomik notlarla düşünmek

Deniz Modüler Monolit belgesinin altındaki **Kişisel Notlar** alanına gelir. Buradaki notlar kanonik dokümana yazılmaz; yalnızca mevcut tarayıcının IndexedDB veritabanında saklanır.

### Neden IndexedDB?

IndexedDB, tarayıcının yapılandırılmış ve görece büyük yerel veriler için sunduğu veritabanıdır. Sunucu hesabı gerektirmez. Bu, Atlas’ın “local-first” yaklaşımının parçasıdır: kişisel öğrenme verisinin ilk sahibi kullanıcıdır.

### Not türleri

Deniz her notun amacını seçer:

- `observation`: Kaynaktan veya belgeden çıkarılan gözlem
- `question`: Daha sonra araştırılacak soru
- `claim`: Kanıtlanması gereken teknik iddia
- `quote`: Kaynaktan doğrudan alıntı
- `flashcard`: Aktif hatırlama için soru–cevap kartı

### Örnek 1: Gözlem

```text
Tür: observation
Not: Modül sınırları yalnızca klasörlerle değil, bağımlılık kurallarıyla korunmalıdır.
Etiketler: modularity, dependency
Durum: inbox
```

### Örnek 2: Kaynak konumlu alıntı

```text
Tür: quote
Not: Kaynaktaki kısa doğrudan alıntı burada açıkça belirtilir.
Kaynak: source.example-paper
Konum: p. 42, §4.1
Etiketler: consistency, evidence
Durum: reviewed
```

Alıntı ile kendi yorumunuzu aynı cümle gibi yazmayın. Alıntının sınırını, kaynak kimliğini ve sayfa/bölüm konumunu mutlaka belirtin.

### Örnek 3: Flashcard

```text
Tür: flashcard
Soru: Modüler Monolit ile sıradan Monolit arasındaki temel fark nedir?
Cevap: Modül sınırlarının açık sözleşme ve bağımlılık kurallarıyla korunmasıdır.
Etiketler: modular-monolith, active-recall
```

### Not yaşam döngüsü

- `inbox`: Henüz işlenmedi
- `reviewed`: Kaynak ve anlam kontrol edildi
- `integrated`: Kanonik belgeye veya iddia kaydına dönüştürüldü
- `rejected`: Yanlış, ilgisiz veya yetersiz bulundu

Bir not kartındaki **Düzenle** düğmesi notu forma geri yükler. Kaydettikten sonra `updatedAt` zamanı yenilenir; ilk oluşturulma zamanı korunur.

### Yedekleme

**JSON dışa aktar**, notların tamamını sürümlü bir yedek dosyasına dönüştürür. **JSON içe aktar**, Atlas’a ait ve desteklenen şema sürümündeki yedekleri doğrulayarak alır.

> Tarayıcı verileri temizlenirse yerel notlar kaybolabilir. Önemli araştırmalardan sonra düzenli JSON yedeği alın.

## Beşinci bölüm: Not, iddia ve kanıt aynı şey değildir

Deniz’in “Modüler Monolit her zaman mikroservisten daha ucuzdur” şeklinde bir notu olduğunu düşünelim. Bu henüz kanonik bilgi değildir. Çok geniş, bağlama bağlı ve kanıtsızdır.

Atlas’ta doğrulanabilir bir iddia şu parçaları taşır:

- Sabit iddia kimliği
- Bağlı olduğu kanonik belge
- Türkçe, İngilizce ve isteğe bağlı İspanyolca ifade
- Güven düzeyi
- İnceleme durumu
- Bir veya daha fazla kaynak
- Her kaynak için kesin konum
- Kanıtın rolü

Kanıt rolleri:

- `supports`: İddiayı destekler
- `qualifies`: İddiaya sınır veya koşul ekler
- `contradicts`: İddiayla çelişen bulgu sunar

Örnek:

```json
{
  "id": "claim.example.modularity",
  "documentCanonicalId": "architecture.modular-monolith",
  "statement": {
    "tr": "Modül sınırlarının otomatik bağımlılık kontrolleriyle korunması mimari erozyonu görünür kılabilir.",
    "en": "Automated dependency checks at module boundaries can expose architectural erosion."
  },
  "confidence": "supported",
  "status": "draft",
  "evidence": [
    {
      "sourceId": "source.example-paper",
      "locator": "§4.1",
      "role": "supports"
    }
  ]
}
```

İddia kayıtları `data/claims/claims.json` içinde tutulur ve doğrulama zincirinden geçer. Belge ekranı ilgili iddiaları **İddia–kanıt matrisi** altında gösterir.

## Altıncı bölüm: Bilgiyi bir graf olarak görmek

Deniz, bir standardın hangi kavramı tanımladığını ve bir RFC’nin hangisini geçersiz kıldığını görmek için **Graf** ekranına gider:

```text
/tr/graph/
```

Graf şu tür düğümleri birbirine bağlayabilir:

- Mimari
- Kavram
- Programlama dili
- Standart
- RFC
- Uygulama alanı

Örnek ilişki:

```json
{
  "from": "concept.architecture-description",
  "type": "defined-by",
  "to": "standard.iso-42010-2022",
  "confidence": "strong",
  "locator": "Clauses 5–7",
  "evidenceSourceIds": ["source.iso-42010"],
  "evidenceClaimIds": ["claim.architecture-description.normative"]
}
```

Burada dil uzantılı belge kimliği yerine `concept.architecture-description` gibi kanonik kimlik kullanılır. Çünkü kavramın kendisi Türkçe, İngilizce veya İspanyolca belge sürümünden bağımsızdır.

Graf üzerindeki düğümler sürüklenebilir. Bir düğüm seçildiğinde gelen ve giden ilişkiler incelenebilir. Arama kutusu düğüm veya ilişki türünü daraltır.

Grafın amacı güzel bir şekil üretmek değil, **kanıt zincirini gezilebilir yapmak**tır. Kanıtı olmayan bir ilişki yalnızca sezgidir ve kanonik grafa eklenmemelidir.

## Yedinci bölüm: Teknik bir belge yazmak

Deniz artık okuduklarını sentezlemeye hazırdır. **Yaz** ekranını açar:

```text
/tr/author/
```

Bu ekran sunucuya içerik göndermez. Taslağı tarayıcıda saklar ve indirilebilir Markdown üretir.

### Form alanları

- `Canonical ID`: Diller arasında değişmeyen içerik kimliği
- `Type`: Mimari, kavram, dil, standart veya araştırma notu
- `Title`: Belge başlığı
- `Category`: Taksonomideki ana bölüm
- `Sources`: Kayıtlı kaynaklardan çoklu seçim
- `Editorial status`: Taslak veya inceleme durumu
- `Summary`: Kısa açıklama
- `Technical content`: Markdown gövdesi

Deniz Event Sourcing için şu başlangıcı yapabilir:

```text
Canonical ID: architecture.event-sourcing
Type: architecture
Title: Event Sourcing
Category: architectures
Status: draft
```

Teknik gövde örneği:

```md
## Çözdüğü problem

Durum değişikliklerinin geçmişini kaybetmeden yeniden üretilebilir bir model kurar.

## Veri akışı

Komut → doğrulama → olay → olay deposu → projection

## Ödünleşimler

- Denetim izi güçlenebilir.
- Şema evrimi ve projection yeniden oluşturma maliyeti artabilir.

## Açık sorular

- Kişisel verinin silinmesi nasıl ele alınacak?
- Olay şemaları hangi uyumluluk politikasıyla sürümlenecek?
```

**Taslağı sakla** tarayıcıda yerel kopya tutar. **Markdown indir** geçerli frontmatter iskeletiyle bir `.md` dosyası üretir. İndirilen dosya `content/` altındaki uygun klasöre alınmalı, diğer dil sürümleri hazırlanmalı ve doğrulama çalıştırılmalıdır.

### Önerilen mimari belge yapısı

Her kapsamlı mimari profilde şu sorular cevaplanmalıdır:

1. Tanım ve çözdüğü problem
2. Tarihsel bağlam
3. Bileşenler ve sınırlar
4. Bağımlılık yönü
5. Veri ve kontrol akışı
6. Veri sahipliği ve tutarlılık modeli
7. Çalışma zamanı ve hata modeli
8. Dağıtım ve operasyon modeli
9. Güvenlik etkileri
10. Performans ve ölçeklenebilirlik
11. Gözlemlenebilirlik
12. Test stratejisi
13. Avantajlar ve dezavantajlar
14. Uygun ve uygun olmayan durumlar
15. Alternatifler ve birlikte kullanılabilen yaklaşımlar
16. Standartlar ve akademik bulgular
17. İddia–kanıt matrisi
18. Açık sorular

## Sekizinci bölüm: İki yaklaşımı karşılaştırmak

Deniz, Modüler Monolit ile başka bir mimari profili yan yana görmek için **Karşılaştır** ekranını açar:

```text
/tr/compare/
```

İki profil seçildiğinde şu alanlar birlikte gösterilir:

- Belge dili
- Editoryal durum
- Teknoloji olgunluğu
- Çeviri durumu
- Belge türü ve sürümü
- Kalite öznitelikleri
- Uygulanabilir alanlar
- Kategoriler ve kaynaklar

Karşılaştırma “hangisi daha iyi?” sorusunu tek başına cevaplamaz. Doğru soru şudur:

> Hangi seçenek, hangi proje koşulunda, hangi kalite öznitelikleri bakımından daha uygundur ve bunun bedeli nedir?

Örneğin küçük ve tek ekipli bir ürün için dağıtım sadeliği yüksek öneme sahipken, bağımsız ölçeklenen yüzlerce ekip için organizasyonel sınırlar daha ağır basabilir.

## Dokuzuncu bölüm: Karar desteğinden ADR’ye

Deniz’in ekibi gerçek bir seçim yapmak üzeredir. **Karar Desteği** ekranında proje bağlamını tanımlar:

```text
/tr/decision/
```

Örnek senaryo:

```text
Alan: Web
Ölçek: Orta
Ekip deneyimi: Karma
Veri hacmi: Orta
Gecikme: Etkileşimli
Dağıtım: Bulut
Güvenlik: Yüksek
Çevrimdışı: Hayır
Gerçek zaman: Evet
```

Ardından performans, güvenlik, bakım, ölçeklenebilirlik ve maliyet ağırlıklarını `1–5` arasında belirler.

Sistem:

- Dil adaylarını puanlar
- Mimari adaylarını puanlar
- Puan nedenlerini gösterir
- Alternatif koşulları açıklar
- Veri ve dağıtım önerileri sunar
- Test stratejisi üretir
- Kaynak ve kalite özniteliklerini listeler
- Riskleri ve uygun olmayan seçenekleri belirtir

### ADR nedir?

ADR, **Architecture Decision Record**, yani Mimari Karar Kaydıdır. Bir kararın yalnızca sonucunu değil, bağlamını, seçeneklerini, gerekçesini ve sonuçlarını kaydeder.

**ADR indir** düğmesi değerlendirmeyi Markdown dosyasına dönüştürür. Bu dosya son karar değildir; ekip incelemesi için başlangıç taslağıdır.

İyi bir ADR şu sorulara cevap verir:

- Hangi problem için karar verildi?
- Hangi kısıtlar vardı?
- Hangi alternatifler incelendi?
- Hangi kaynak ve ölçümler kullanıldı?
- Neden bu seçenek tercih edildi?
- Hangi olumsuz sonuçlar kabul edildi?
- Karar hangi koşulda yeniden gözden geçirilecek?

## Onuncu bölüm: Standartlar, RFC’ler ve kayıtlar

### Standartlar

`/tr/standards/` ekranı ISO, IEEE, W3C, NIST veya SPDX gibi kayıtları yapılandırılmış biçimde gösterir. Bir standardın güncel, geri çekilmiş veya başka bir sürümle değiştirilmiş olması teknik yorumu etkileyebilir.

### RFC’ler

RFC yalnızca numaralı bir internet belgesi değildir. Durumu, stream’i ve başka RFC’lerle ilişkileri vardır:

- `updates`: Başka bir RFC’yi kısmen günceller
- `updatedBy`: Başka RFC’ler tarafından güncellenir
- `obsoletes`: Önceki belgenin yerini alır
- `obsoletedBy`: Daha yeni bir belge tarafından geçersiz kılınır

Bir protokolü araştırırken tek RFC okumak yerine ilişki zincirini inceleyin.

### Veri kayıtları

`/tr/registry/` ekranı Atlas’ın kendi veri modelini açıklar:

- Taksonomi
- Gereksinim eşlemesi
- Sözlük
- Kaynaklar
- İddialar
- RFC’ler
- İlişkiler
- Kişiler ve roller
- Belge türleri ve şemalar

Bu ekran geliştirici olmayan kullanıcı için şeffaflık, geliştirici için hata ayıklama yüzeyidir.

### Durum ve gereksinimler

`/tr/status/`, içerik ve çeviri kapsamını gösterir. `/tr/requirements/`, platform gereksinimlerinin öncelik, sahip, durum ve kabul ölçütlerini listeler.

## On birinci bölüm: Atlas’ın mimarisi

Deniz artık yalnızca içeriği değil, uygulamanın nasıl çalıştığını da merak eder.

### İçerik odaklı modüler monolit

Atlas tek uygulama olarak derlenir ve dağıtılır; bu nedenle **monolit**tir. Fakat katalog, karar desteği ve notlar gibi yetenekler kendi modül sınırlarına sahiptir; bu nedenle **modüler**dir.

Bu yaklaşım şu dengeyi hedefler:

- Tek dağıtımın sadeliği
- Modül sınırlarının anlaşılabilirliği
- Gereksiz dağıtık sistem karmaşıklığından kaçınma
- Gelecekte ihtiyaç oluşursa modülleri ayırabilme

### Statik üretim

Astro, Markdown ve JSON verilerini derleme sırasında HTML sayfalarına dönüştürür. Kullanıcı içerik okurken merkezi bir veritabanı sunucusuna ihtiyaç duymaz.

Sonuçları:

- Hızlı sayfa açılışı
- Düşük saldırı yüzeyi
- Kolay statik barındırma
- Çevrimdışı kullanım için uygun temel
- İçeriğin Git ile sürümlenebilmesi

### Kanonik ve kişisel veri sınırı

```text
Git ile sürümlenen ortak bilgi
├── content/         Markdown belgeler
├── data/            Kaynak, iddia, ilişki, RFC ve sözlük
├── schemas/         Veri sözleşmeleri
└── templates/       Yazarlık şablonları

Tarayıcıda kalan kişisel bilgi
├── IndexedDB        Notlar ve flashcard’lar
└── localStorage     Tema, yer imi, okuma durumu ve taslaklar
```

Bu sınır bilinçlidir. Kişisel not otomatik olarak ortak gerçek hâline gelmez. Ortak içeriğe dönüşmesi için kaynaklandırılmalı, gözden geçirilmeli ve Git/PR sürecinden geçmelidir.

### Ports and Adapters yaklaşımı

Not modülü, “not nasıl saklanır?” sorusunu bir arayüzle tanımlar. IndexedDB bu arayüzün mevcut adaptörüdür. Gelecekte SQLite veya başka bir depolama eklense bile alan modeli mümkün olduğunca değişmeden kalabilir.

### PWA ve Service Worker

Service Worker, tarayıcı ile ağ arasında çalışan küçük bir arka plan katmanıdır. Atlas temel uygulama kabuğunu ve ziyaret edilen içerikleri önbelleğe alır.

- Sayfa gezinmelerinde ağ öncelikli strateji
- Statik varlıklarda stale-while-revalidate
- Ağ yoksa cache veya çevrimdışı sayfası
- Yeni sürümde eski Atlas cache’lerinin temizlenmesi

PWA, her sayfanın sonsuza kadar çevrimdışı bulunacağı anlamına gelmez. İlk kez ziyaret edilmemiş ve çekirdek listeye alınmamış içerikler ağ olmadan bulunmayabilir.

### Pagefind

Pagefind statik HTML dosyalarını derleme sonrasında indeksler. Arama için ayrı bir sunucu veya haricî arama hizmeti gerekmez. Diller ayrı indekslenir.

## On ikinci bölüm: İçerik geliştirme ve yayın akışı

Deniz’in taslağı artık ortak Atlas’a girmeye hazırdır. Önerilen süreç:

```text
Kaynak kuyruğu
    ↓
Atomik kişisel notlar
    ↓
Kaynak konumlu iddialar
    ↓
Teknik sentez ve Markdown taslağı
    ↓
feature branch
    ↓
draft pull request
    ↓
Quality / verify
    ↓
İnsan incelemesi
    ↓
main merge
```

Örnek Git akışı:

```bash
git checkout -b feature/event-sourcing-profile

# İçerik ve veri dosyalarını ekledikten sonra
npm run verify

git add content/ data/ schemas/
git commit -m "docs: add sourced event sourcing profile"
git push -u origin feature/event-sourcing-profile
```

`npm run verify` şu kontrolleri bir araya getirir:

- Veri kayıtlarının bütünlüğü
- Kaynak ve belge çapraz bağlantıları
- Terminoloji tutarlılığı
- Otomatik testler
- Astro tip ve içerik kontrolü
- Statik üretim
- Pagefind arama indeksi

## Günlük, haftalık ve aylık çalışma önerisi

### Günlük: 20–30 dakika

1. Kuyruktan tek kaynak seçin.
2. Bir bölüm okuyun.
3. En fazla üç atomik not çıkarın.
4. Bilmediğiniz terimleri sözlüğe aday olarak işaretleyin.
5. En az bir açık soru bırakın.

### Haftalık: sentez

1. `inbox` notlarını gözden geçirin.
2. Yanlış veya zayıf notları `rejected` yapın.
3. Kaynağı doğrulananları `reviewed` yapın.
4. Bir iddia–kanıt matrisi oluşturun.
5. Bir teknik belge bölümünü güncelleyin.
6. Flashcard’larla aktif hatırlama yapın.

### Aylık: bakım

1. Notları JSON olarak yedekleyin.
2. Kırık veya eski kaynakları kontrol edin.
3. Çeviri sürümlerini karşılaştırın.
4. `review-required` belgeleri inceleyin.
5. Karar kurallarının kaynaklarla uyumunu denetleyin.
6. Tam `npm run verify` çalıştırın.

## Sık yapılan hatalar

### Taksonomide yer almayı tamamlanmış içerik sanmak

Taksonomi bir konunun Atlas’ta nereye ait olduğunu gösterir. O konuda doğrulanmış makale bulunduğunu garanti etmez.

### Belgeye kaynak ekleyip iddiayı kanıtlanmış saymak

Belge düzeyindeki `sources` listesi genel bibliyografyadır. Kritik teknik iddialar için kaynak konumu ve kanıt rolü gerekir.

### Kişisel notu kanonik içeriğe doğrudan kopyalamak

Not önce doğrulanmalı, karşı kanıt aranmalı ve iddia biçimine dönüştürülmelidir.

### Teknoloji olgunluğu ile belge durumunu karıştırmak

`mature` teknoloji durumudur; `reviewed` belge durumudur.

### Graf ilişkisine uygun olmayan kaynak bağlamak

Bir standart mimari açıklamayı tanımlayabilir; fakat bu, her mimari stil arasındaki ilişkiye kanıt olduğu anlamına gelmez.

### Karar motorunun sonucunu nihai karar sanmak

Karar motoru düşünme ve tartışma yüzeyidir. Ölçüm, prototip, ekip görüşü ve proje kısıtlarıyla doğrulanmalıdır.

## Sorun giderme

### Uygulama açılmıyor

```bash
node --version
npm --version
npm install
npm run dev
```

### Doğrulama başarısız

```bash
npm run validate:data
npm run validate:links
npm run validate:terminology
npm test
npm run check
```

Komutları ayrı çalıştırmak hatanın hangi aşamada olduğunu gösterir.

### Tam metin arama görünmüyor

```bash
npm run build
npm run preview
```

### Notlar görünmüyor

- Aynı tarayıcı profilini kullandığınızdan emin olun.
- Gizli pencere verileri kalıcı olmayabilir.
- Site verilerini temizleyip temizlemediğinizi kontrol edin.
- Varsa JSON yedeğini içe aktarın.

### Çevrimdışı sayfa eski görünüyor

Uygulamayı ağ bağlantısıyla bir kez açın ve yenileyin. Service Worker yeni cache sürümünü etkinleştirdikten sonra eski Atlas cache’lerini temizler.

## Deniz’in yolculuğunun sonu değil, başlangıcı

Deniz günün sonunda tek bir “en iyi mimari” bulmadı. Bunun yerine daha değerli bir şey elde etti:

- Kavramları ortak bir sözlükle ifade edebiliyor.
- Kaynak ile kişisel yorum arasındaki sınırı biliyor.
- Kritik iddiaların hangi kanıta dayandığını gösterebiliyor.
- Mimari seçenekleri kalite öznitelikleri üzerinden karşılaştırabiliyor.
- Kararını ADR ile gelecekteki ekibe açıklayabiliyor.
- Öğrendiklerini tekrar kullanılabilir ve sürümlenebilir bilgiye dönüştürebiliyor.

Atlas’ın amacı cevapları ezberletmek değildir. Amacı, yazılım hakkındaki teknik bilgiyi **kaynağından nota, nottan iddiaya, iddiadan mimari açıklamaya ve mimari açıklamadan gerekçeli karara** taşıyan güvenilir bir çalışma düzeni kurmaktır.

```text
Kaynak → Okuma → Atomik not → Kanıtlı iddia
       → Teknik sentez → Karşılaştırma → ADR → Gözden geçirme
```

Bu zincir korunduğu sürece Atlas yalnızca büyüyen bir doküman koleksiyonu değil, yaşayan ve denetlenebilir bir öğrenme sistemi olur.

## Menü bazlı hızlı kullanım rehberi

Bu bölüm, Atlas’ın her menüsünü birbirinden bağımsız bir başvuru başlığı olarak açıklar. Belirli bir ekranın ne işe yaradığını öğrenmek istediğinizde doğrudan ilgili başlığa geçebilirsiniz.

## Ana Sayfa menüsü

**Adres:** `/tr/`

### Amacı

Ana Sayfa, Atlas’ın giriş ve yönlendirme ekranıdır. Platformdaki bütün ayrıntıları burada göstermez; içerik durumunu özetler ve en sık kullanılan başlangıç yollarını sunar.

### Nasıl kullanılır?

1. Üst menüden **Ana sayfa** bağlantısını seçin.
2. “Kanonik belgeler”, “İncelenmiş”, “Kategoriler” ve “Çalışma biçimi” sayaçlarını inceleyin.
3. **Atlası keşfet** ile Katalog ekranına geçin.
4. Bir proje seçimi yapmak istiyorsanız **Karar desteğini başlat** bağlantısını kullanın.
5. Alt bölümdeki son içerik kartlarından bir belgeyi doğrudan açın.

### Örnek

Atlas’ı ilk kez açan Deniz, kaç Türkçe belge bulunduğunu ve bunların kaçının incelendiğini görür. Amacı araştırma yapmak olduğu için “Atlası keşfet” düğmesiyle Katalog’a geçer.

### Dikkat edilmesi gerekenler

Ana sayfadaki “Kanonik belgeler” sayısı tamamlanmış veya doğrulanmış içerik sayısı değildir. İçeriğin güven düzeyi için ayrıca `reviewed` ve `verified` durumlarına bakılmalıdır.

## Katalog menüsü

**Adres:** `/tr/catalog/`

### Amacı

Katalog, Atlas’taki belgeleri bulmak, filtrelemek ve açmak için kullanılan ana içerik tarama ekranıdır.

### Nasıl kullanılır?

1. Arama alanına başlık, kavram, teknoloji veya etiket yazın.
2. **Belge dili** filtresiyle Türkçe, İngilizce veya İspanyolca belgeleri seçin.
3. **Kategori** filtresiyle sistem rehberi, programlama dili, mimari veya yapay zekâ gibi bir alan seçin.
4. **Belge durumu** filtresiyle yalnızca incelenmiş, inceleme gerektiren veya taslak belgeleri gösterin.
5. Sonuç kartındaki başlık, özet ve durum rozetini kontrol edin.
6. Kartı seçerek belge ayrıntı sayfasına geçin.

### Örnek

```text
Arama: modular
Kategori: Mimari stiller
Durum: İncelenmiş
```

Bu filtre, başlık veya özetinde “modular” geçen ve incelemesi tamamlanmış mimari belgeleri daraltır.

### Dikkat edilmesi gerekenler

Pagefind tam metin indeksi üretim derlemesinde hazırlanır. Geliştirme sunucusunda yalnızca metadata araması eksiksiz çalışabilir; tam metin aramasını sınamak için `npm run build` ve `npm run preview` kullanın.

## Belge Okuma ekranı

**Örnek adres:** `/tr/docs/architecture.modular-monolith/`

Belge ekranı üst menüde ayrı bir bağlantı değildir; Katalog, Graf, Araştırma veya diğer belge bağlantılarından açılır.

### Amacı

Bir teknik konunun açıklamasını, metadata’sını, kaynaklarını, iddia–kanıt kayıtlarını, çevirilerini ve kişisel notlarını tek yerde sunar.

### Nasıl kullanılır?

1. Başlık altındaki editoryal, çeviri, olgunluk ve sürüm rozetlerini inceleyin.
2. Sol taraftaki “Bu belgede” bağlantılarıyla başlıklar arasında ilerleyin.
3. Varsa diğer dil sürümlerine geçin.
4. Metin içindeki sözlük terimlerine gelerek kısa tanımlarını açın.
5. Kaynaklar bölümünde kullanılan resmî veya akademik kayıtları inceleyin.
6. İddia–kanıt matrisinde kritik iddiaların hangi kaynak konumuna dayandığını görün.
7. Alt bölümde kişisel not veya flashcard oluşturun.

### Dikkat edilmesi gerekenler

Belge kaynak listesi genel bibliyografyayı, iddia–kanıt matrisi ise belirli teknik ifadelerin kanıtını gösterir. Bunlar aynı şey değildir.

## Sözlük menüsü

**Adres:** `/tr/glossary/`

### Amacı

Sözlük, Atlas genelinde kullanılan teknik terimlerin tercih edilen yazımını, İngilizce karşılığını, kısaltmasını, tanımını ve ilişkilerini merkezî olarak yönetir.

### Nasıl kullanılır?

1. Arama alanına terim veya kısaltma yazın.
2. Bir terim kartının üzerine gelin, klavyeyle odaklanın veya karta dokunun.
3. Açılan pencerede tanımı, İngilizce karşılığı, ilişkili terimleri ve kaynak kimliğini okuyun.
4. Pencereyi `Esc`, kapatma düğmesi veya dış alana tıklayarak kapatın.

### Örnek

`ADR` araması yaptığınızda “Architecture Decision Record” açılımı ve Türkçe karşılığı görüntülenebilir.

### Dikkat edilmesi gerekenler

Sözlükte görünen kaynak kimliği, `sources.json` içindeki kayda işaret eder. Tanımın normatif mi yoksa Atlas tarafından açıklayıcı olarak mı yazıldığı kaynak üzerinden değerlendirilmelidir.

## Karşılaştır menüsü

**Adres:** `/tr/compare/`

### Amacı

Karşılaştır ekranı iki belge veya teknoloji profilini yan yana getirerek aralarındaki farkların sistematik biçimde incelenmesini sağlar.

### Nasıl kullanılır?

1. Karşılaştırılacak belge dilini seçin.
2. **Birinci profil** alanından ilk belgeyi seçin.
3. **İkinci profil** alanından diğer belgeyi seçin.
4. Editoryal durum, olgunluk, sürüm ve çeviri rozetlerini karşılaştırın.
5. Kalite öznitelikleri ve uygulanabilir alanları inceleyin.
6. Kaynak kimliklerini kontrol edin.
7. Ayrıntı gerektiğinde **Belgeyi aç** bağlantısını kullanın.

### Örnek

```text
Birinci profil: Modüler Monolit
İkinci profil: Mimari Açıklama
```

Bu iki kayıt aynı türde olmayabilir. Böyle bir karşılaştırma doğrudan “hangisi daha iyi?” sonucu üretmez; kayıtların kapsam ve metadata farkını gösterir.

### Dikkat edilmesi gerekenler

Karşılaştırma ekranındaki boş alan, verinin ilgili belge profilinde henüz kayıtlı olmadığı anlamına gelebilir. “Boş” değer otomatik olarak olumsuz özellik sayılmamalıdır.

## Karar Desteği menüsü

**Adres:** `/tr/decision/`

### Amacı

Karar Desteği, proje koşullarını yapılandırılmış girdilere dönüştürür ve dil/mimari adaylarını ağırlıklı puanlarla açıklayan bir ön değerlendirme üretir.

### Nasıl kullanılır?

1. Uygulama alanını seçin.
2. Kullanıcı veya işlem ölçeğini belirleyin.
3. Ekip deneyimini ve veri hacmini seçin.
4. Gecikme, dağıtım, güvenlik ve lisans kısıtlarını girin.
5. Çevrimdışı, gerçek zamanlı, güvenlik kritik, AI/ML ve donanım gereksinimlerini işaretleyin.
6. Performans, güvenlik, bakım, ölçeklenebilirlik ve maliyet ağırlıklarını ayarlayın.
7. **Adayları değerlendir** düğmesini seçin.
8. Puanları, gerekçeleri, alternatifleri, riskleri ve test stratejisini inceleyin.
9. **ADR indir** ile sonucu Markdown taslağı olarak dışa aktarın.

### Örnek

Bir hastane sistemi için güvenlik ve bakım ağırlıklarını yükseltmek, sistemin bu nitelikleri puanlamada daha etkili kullanmasını sağlar. Ancak mevzuata uygunluk ayrıca uzman tarafından doğrulanmalıdır.

### Dikkat edilmesi gerekenler

Sonuç nihai mimari karar değildir. Gerçek ölçümler, prototip, ekip kapasitesi, bütçe, mevzuat ve tehdit modeliyle birlikte değerlendirilmelidir.

## Graf menüsü

**Adres:** `/tr/graph/`

### Amacı

Graf, mimari, kavram, standart, RFC, dil ve uygulama alanları arasındaki kanıtlı ilişkileri yönlü bir ağ olarak gösterir.

### Nasıl kullanılır?

1. Üstteki “düğüm” ve “ilişki” sayısını inceleyin.
2. Düğümleri sürükleyerek görsel yerleşimi düzenleyin.
3. Bir düğüme basarak gelen ve giden ilişkileri görün.
4. Arama alanına düğüm kimliği veya `defined-by` gibi bir ilişki türü yazın.
5. Grafın altındaki ilişki kartlarında kaynak ve iddia kimliklerini inceleyin.
6. En alttaki “Bu graf nasıl okunur?” yardım bölümünü kullanın.

### Örnek

```text
concept.architecture-description
  → defined-by →
standard.iso-42010-2022
```

Bu ifade, mimari açıklama kavramının ISO/IEC/IEEE 42010:2022 tarafından tanımlandığını anlatır.

### Dikkat edilmesi gerekenler

Düğümü sürüklemek yalnızca görsel konumu değiştirir; `relations.json` verisi değişmez. Graf sayısı toplam belge sayısı değil, ilişkilere katılan benzersiz kayıt sayısıdır.

## Araştırma menüsü

**Adres:** `/tr/research/`

### Amacı

Araştırma ekranı resmî ve akademik kaynakların okuma durumunu yönetir, ayrıca kanonik iddia–kanıt matrisini gösterir.

### Nasıl kullanılır?

1. Bir kaynak kartını seçin ve yayıncı sayfasını açın.
2. Kaynağın durumunu `queued`, `reading`, `read` veya `synthesized` olarak değiştirin.
3. İddia–kanıt kartlarında iddia metnini okuyun.
4. Güven ve inceleme rozetini kontrol edin.
5. Kaynak kimliği, bölüm/sayfa konumu ve kanıt rolünü inceleyin.
6. Bağlı teknik belgeye geçin.

### Örnek

Deniz ISO 42010 kaynağını okumaya başladığında durumu `reading`, notlarını belgeye dönüştürdüğünde `synthesized` yapar.

### Dikkat edilmesi gerekenler

Okuma durumu kişiseldir ve `localStorage` içinde tutulur. Başka cihaz veya tarayıcıya otomatik aktarılmaz.

## Yaz menüsü

**Adres:** `/tr/author/`

### Amacı

Yaz ekranı yeni bir teknik belge için şema uyumlu taslak hazırlar, tarayıcıda saklar ve Atlas’a eklenebilecek Markdown dosyası üretir.

### Nasıl kullanılır?

1. Küçük harfli ve boşluksuz bir **Canonical ID** girin.
2. Belge türünü seçin.
3. Başlık, kategori ve özet alanlarını doldurun.
4. Bir veya daha fazla kayıtlı kaynak seçin.
5. Yeni belge için `draft` durumunu kullanın.
6. Teknik içeriği Markdown olarak yazın.
7. Sağdaki güvenli önizlemeyi kontrol edin.
8. **Taslağı sakla** ile tarayıcıda yerel kopya tutun.
9. **Markdown indir** ile dosyayı bilgisayarınıza alın.
10. Dosyayı uygun `content/` klasörüne taşıyıp `npm run verify` çalıştırın.

### Örnek

```text
Canonical ID: architecture.event-sourcing
Type: architecture
Title: Event Sourcing Mimarisi
Category: architectures
Status: draft
```

### Dikkat edilmesi gerekenler

Yaz ekranı dosyayı doğrudan Git deposuna kaydetmez, kaynak üretmez, çeviri yapmaz ve PR açmaz. İndirilen Markdown ayrıca doğrulanmalı ve Git iş akışına alınmalıdır.

## Gereksinimler menüsü

**Adres:** `/tr/requirements/`

### Amacı

Gereksinimler ekranı `program_info.txt` vizyonunun hangi uygulanabilir gereksinimlere dönüştürüldüğünü ve bunların durumunu gösterir.

### Nasıl kullanılır?

1. Gereksinim kimliğini inceleyin; örneğin `REQ-NOTES-001`.
2. Alan ve öncelik sütunlarını kontrol edin.
3. Durumun `planned`, `in-progress`, `implemented` veya `deferred` olup olmadığına bakın.
4. Sorumlu rolü ve kabul ölçütünü okuyun.
5. Yeni geliştirme planlarken ilgili gereksinime referans verin.

### Örnek

Not özelliğinde değişiklik yapan bir PR açıklamasında `REQ-NOTES-001` kimliğinin belirtilmesi, değişikliğin proje hedefiyle bağlantısını görünür kılar.

### Dikkat edilmesi gerekenler

`implemented`, özelliğin hiçbir zaman geliştirilmeyeceği anlamına gelmez; mevcut kabul ölçütünün karşılandığını ifade eder.

## Standartlar menüsü

**Adres:** `/tr/standards/`

### Amacı

Standartlar ekranı Atlas’ın referans verdiği normatif belgelerin sürüm, yayıncı, durum ve doğrulama bilgilerini gösterir.

### Nasıl kullanılır?

1. Standardın kimliğini ve tam adını inceleyin.
2. Yayıncı ve sürüm bilgisini kontrol edin.
3. Standardın aktif, geri çekilmiş veya başka sürümle değiştirilmiş olup olmadığına bakın.
4. Resmî bağlantıdan yayıncı sayfasına geçin.
5. İlişkili RFC veya standart zincirlerini inceleyin.

### Örnek

Mimari açıklama araştırmasında ISO/IEC/IEEE 42010:2022 kaydı açılır; eski 2011 baskısının yerini alıp almadığı ayrıca kontrol edilir.

### Dikkat edilmesi gerekenler

Atlas’taki metadata standardın tam metni değildir. Lisanslı standardın normatif gereksinimleri için yetkili yayıncı metni kullanılmalıdır.

## Kaynaklar ekranı

**Adres:** `/tr/sources/`

Kaynaklar ekranı mevcut üst menü yoğunluğu nedeniyle her görünümde doğrudan bağlantı olarak gösterilmeyebilir; doğrudan adresle veya diğer ekranlardaki kaynak bağlantılarıyla açılabilir.

### Amacı

Kaynak kayıtlarının tür, başlık, yayıncı, tarih, sürüm, geçerlilik ve son erişim bilgilerini tek listede gösterir.

### Nasıl kullanılır?

1. Kaynak türü ve durum rozetini inceleyin.
2. Başlık bağlantısıyla özgün kaynağa gidin.
3. Yayıncı, tarih ve sürümü doğrulayın.
4. Kaynağın resmî mi yoksa akademik/ikincil mi olduğuna bakın.

### Dikkat edilmesi gerekenler

Son erişim tarihi, kaynağın içerik olarak hâlâ güncel olduğunu garanti etmez. Sürüm ve yaşam döngüsü ayrıca değerlendirilmelidir.

## Veri menüsü

**Adres:** `/tr/registry/`

### Amacı

Veri ekranı Atlas’ın kendi metadata kayıtlarını ve şemalarını kullanıcıya açarak sistemin nasıl yapılandırıldığını denetlenebilir hâle getirir.

### Nasıl kullanılır?

1. Üst kartlardan Taksonomi, Kaynak, İddia, RFC veya İlişki bölümünü seçin.
2. Kayıt kimliklerini ve sayıları inceleyin.
3. Kaynak–iddia–ilişki bağlantılarını karşılaştırın.
4. Desteklenen belge türlerini görün.
5. Kullanılan JSON Schema dosyalarının listesini inceleyin.

### Örnek

Graf üzerinde görülen `source.iso-42010` kimliğinin kaynağını doğrulamak için Veri ekranındaki kaynak tablosuna bakılabilir.

### Dikkat edilmesi gerekenler

Bu ekran verileri düzenlemez. Değişiklikler ilgili `data/` veya `schemas/` dosyalarında yapılır ve doğrulama zincirinden geçirilir.

## Durum menüsü

**Adres:** `/tr/status/`

### Amacı

Durum ekranı içerik kapsamı, çeviri eşleri, sürüm uyumu ve araştırma kuyruğunun gerçek tamamlanma seviyesini gösterir.

### Nasıl kullanılır?

1. Türkçe, İngilizce ve İspanyolca belge sayılarını inceleyin.
2. Eksik çeviri çiftlerini bulun.
3. Sürümü geride kalan çevirileri kontrol edin.
4. `draft`, `review-required`, `reviewed` ve `verified` dağılımını değerlendirin.
5. Taksonomide bulunup henüz belgeye dönüşmemiş alanları araştırma planına alın.

### Dikkat edilmesi gerekenler

Taksonomi kapsamının yüksek olması, doğrulanmış içerik kapsamının yüksek olduğu anlamına gelmez. Durum ekranı bu iki metriği ayırmak için kullanılır.

## Dil seçimi kontrolleri

**Konum:** Üst menüde `TR`, `EN`, `ES`

### Amacı

Aynı ekranın veya belgenin farklı dil sürümüne geçiş sağlar.

### Nasıl kullanılır?

1. Bulunduğunuz sayfada hedef dili seçin.
2. Sistem rota içindeki dil bölümünü değiştirir.
3. Bir belgedeyseniz aynı kanonik kimliğin hedef dil sürümü açılır.
4. Çeviri yoksa Durum ekranından eksik dil kaydını kontrol edin.

### Dikkat edilmesi gerekenler

Çeviriler ayrı belgeler olarak sürümlenir. Bir dilde yapılan güncelleme diğer dilleri otomatik olarak güncellemez.

## Tema düğmesi

**Konum:** Üst menüde `◐`

### Amacı

Açık ve koyu görünüm arasında geçiş yapar.

### Nasıl kullanılır?

Düğmeye her basışınızda tema değişir. Seçim `localStorage` içinde saklandığı için aynı tarayıcıda sonraki açılışta korunur. Kayıt yoksa işletim sisteminin renk tercihi dikkate alınır.

## Çevrimdışı ekranı

**Adres:** `/offline/`

### Amacı

Ağ bağlantısı olmadığında ve istenen içerik cache içinde bulunmadığında kullanıcıya uygulamanın çevrimdışı olduğunu bildirir.

### Nasıl kullanılır?

1. Uygulamayı bağlantı varken en az bir kez açın.
2. Temel rotaların Service Worker tarafından önbelleğe alınmasını bekleyin.
3. Daha önce ziyaret ettiğiniz içerikleri çevrimdışı açmayı deneyin.
4. Bulunmayan içerikte çevrimdışı bilgilendirme ekranı gösterilir.

### Dikkat edilmesi gerekenler

Çevrimdışı destek, bütün içeriklerin ilk kurulumda otomatik indirildiği anlamına gelmez. Daha önce ziyaret edilmemiş içerik cache içinde bulunmayabilir.

## Menüleri birlikte kullanan örnek çalışma

Deniz’in Event Sourcing araştırmasında menüler şu sırayla kullanılır:

```text
Ana Sayfa
  ↓ genel durumu gör
Katalog
  ↓ mevcut içeriği ara
Sözlük
  ↓ bilinmeyen terimleri öğren
Araştırma
  ↓ resmî ve akademik kaynakları oku
Belge ekranı
  ↓ atomik not ve flashcard oluştur
Graf
  ↓ kavram ve standart ilişkilerini incele
Yaz
  ↓ kaynaklı Markdown taslağı hazırla
Karşılaştır
  ↓ alternatifleri yan yana değerlendir
Karar Desteği
  ↓ proje bağlamını puanla ve ADR üret
Durum
  ↓ çeviri ve inceleme eksiklerini gör
Gereksinimler
  ↓ yapılan çalışmayı proje hedefiyle ilişkilendir
```

Bu sıra zorunlu değildir. Atlas’ın menüleri aynı bilgi yaşam döngüsünün farklı aşamalarını temsil eder: keşfetmek, anlamak, kanıtlamak, yazmak, karşılaştırmak, karar vermek ve bakım yapmak.
