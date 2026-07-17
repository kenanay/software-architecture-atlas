# program_info.txt Uygulama ve Araştırma Matrisi

- Tarih: 2026-07-17
- Proje Sahibi ve Mimari Sorumlu: Kenan AY
- Durum: Yaşayan belge

## Uygulanan altyapı

| Gereksinim | Durum | Uygulama |
|---|---|---|
| İçerik odaklı yerel öncelikli modüler monolit | Uygulandı | Astro statik üretim, feature modülleri ve port/adaptör sınırları |
| Markdown/JSON tabanlı kanonik içerik | Uygulandı | `content/` ve `data/` |
| Şema doğrulaması | Uygulandı | Astro Content Collections, Zod, JSON Schema, `validate:data` |
| Türkçe/İngilizce içerik | Uygulandı | Bağlantılı ayrı belgeler, `/tr/`, `/en/`, `translationKey` |
| Çeviri durum takibi | Uygulandı | Sürüm karşılaştırması ve `/status/` panosu |
| Kaynak sistemi | Uygulandı | Kaynak türü, yayın/sürüm/durum/erişim tarihi |
| RFC yaşam döngüsü | Uygulandı | Updates, Updated by, Obsoletes, Obsoleted by, DOI, stream |
| Merkezi terminoloji | Uygulandı | Çift dilli tanım, kısaltma, ilişki, kaynak ve kullanım alanı |
| Kişisel notlar ve yer imleri | Uygulandı | IndexedDB ve localStorage |
| Çevrimdışı kullanım | Uygulandı | Service Worker ve web manifest |
| Karşılaştırma | İlk sürüm | Metadata ve kalite eksenleriyle iki profil |
| Karar desteği | İlk sürüm | Alan, ölçek, veri, gecikme, güvenlik, lisans, AI ve dağıtım girdileri |
| Bilgi grafiği | İlk sürüm | Kanıt kaynaklı `relations.json`, doğrulama ve filtrelenebilir `/graph/` görünümü |
| İçerik editörü/Tauri/SQLite | Ertelendi | PWA çekirdeği tamamlandıktan sonraki masaüstü aşaması |

## İzlenebilir gereksinimler

`program_info.txt` içindeki vizyon, `data/requirements/requirements.json` içinde sabit kimlik, öncelik, sahip, durum ve kabul ölçütü taşıyan gereksinimlere dönüştürülür. `/requirements/` görünümü teslimat durumunu; `/graph/` görünümü ise kanıta dayalı bilgi ilişkilerini yayınlar. İçerik henüz tamamlanmadığında sistem bunu `planned` veya `in-progress` olarak gösterir; taksonomide bulunmak tamamlanmış makale anlamına gelmez.

## Derin teknik değerlendirme sonrası ikinci aşama

- 28 özgün istek başlığı ile 26 kanonik bölüm arasında makinece doğrulanan eşleme eklendi.
- Editoryal belge durumu, teknoloji olgunluğu, çeviri sağlığı, haricî yayın durumu ve RFC yaşam döngüsü ayrı rozet eksenlerine bölündü.
- Karar desteği 11 uygulama alanına genişletildi; öneriler kaynak, kalite özniteliği, alternatif koşulu ve güven gerekçesi taşıyor.
- Karşılaştırma tüm belge türlerini ve her iki dili destekliyor.
- Sözlük popover'ı WCAG 2.2 SC 1.4.13 için dismissible, hoverable ve persistent davranışlarla uygulandı.
- Veri kayıtları atlas içinde `/registry/` üzerinden denetlenebilir hâle getirildi.
- Service worker sürümlü cache temizleme, navigation network-first, statik varlık stale-while-revalidate ve offline fallback kullanıyor.

## İçerik kapsamı

Taksonomi `program_info.txt` içindeki 00–25 bölümlerinin tamamını ve alt konu envanterini içerir. Bu, her konu hakkında doğrulanmış makalenin tamamlandığı anlamına gelmez. Kapsam üç ayrı durumla izlenir:

1. **Taksonomide mevcut:** Bilgi mimarisinde yeri tanımlı.
2. **Taslak:** İçerik var fakat kaynak veya insan incelemesi eksik.
3. **Reviewed/verified:** Kaynakları ve teknik iddiaları insan tarafından incelenmiş.

`/status/` sayfası bu ayrımı kullanıcıya gösterir. Eksik alanları doğrulanmış gibi doldurmak yerine açık araştırma kuyruğu kullanılır.

## Birincil kaynak politikası

- Mimari açıklama: ISO/IEC/IEEE 42010:2022; 2011 baskısının geri çekilme durumu ayrıca kaydedilir.
- Yazılım mühendisliği kapsamı: IEEE Computer Society SWEBOK Guide V4.0.
- Web erişilebilirliği: W3C WCAG 2.2 Recommendation.
- RFC durumu: RFC Editor bilgi sayfaları; RFC içeriği, stream, status ve ilişki metadata'sı ayrı tutulur.
- AI yönetişimi: NIST AI RMF 1.0; revizyon çalışması durumu açıkça işaretlenir.
- Yazılım tedarik zinciri: SPDX 3.0 ve ISO/IEC 5962:2021 ilişkisi.

## İçerik kabul ölçütü

Bir belge `reviewed` olmadan önce kimlik, sürüm, çeviri durumu, olgunluk, kaynak, son inceleme tarihi, katkı rolleri, kalite özellikleri ve uygulanabilir alanlar doğrulanmalıdır. Tarihsel bir teknoloji hakkında güncel bir belge bulunabileceği için belge durumu ile teknoloji olgunluğu birbirinden ayrıdır.
