# Software Architecture Atlas

A local-first, trilingual (Turkish, English, Spanish) documentation platform for software architectures, programming languages, frameworks, AI systems, standards, RFCs, and software development practices.

**Project Owner and Architecture Lead:** Kenan AY — Management and Information Systems Specialist  
**Architecture:** Content-Driven Local-First Modular Monolith · Feature-Based Modules · Ports and Adapters

## Özellikler / Features

- **Astro Content Collections**: Zod ile şema doğrulamalı Markdown içerik.
- **Trilingual Routing (`/tr/`, `/en/`, `/es/`)**: Akıllı tarayıcı dili algılama yönlendirmesi ve diller arası geçiş paneli.
- **Auto-Glossary Tooltips**: Makale metinlerinde geçen teknik terimlerin otomatik algılanıp WCAG 2.2 uyumlu, hover/odaklanabilir popover ipuçları ile Türkçe, İngilizce ve İspanyolca açılımlarının gösterilmesi.
- **Interactive SVG Graph**: Çevrimdışı çalışan, sürükle-bırak ve tıklama ile ilişki detaylarını inceleme destekli kuvvet yönelimli (force-directed) ilişkisel ağ diyagramı.
- **Pagefind**: Üretim sonrası sunucusuz tam metin arama indeksi.
- **Decision Matrix**: Uygulama alanına, ölçeğe, lisansa ve kalite gereksinimlerine göre mimari/dil önerisi sunan karar destek sistemi ve ADR (Mimari Karar Kaydı) dışa aktarımı.
- **Offline PWA**: Service Worker ile çevrimdışı önbellekleme ve yedekleme stratejileri.
- **IndexedDB Notes**: Makalelere özel tarayıcıda saklanan yerel notlar, yer imleri ve JSON veri dışa aktarımı.
- **Validation Pipeline**: JSON şema doğrulamaları, çapraz doküman bağlantı kontrolü ve terim yazım standardizasyon kontrolcüleri.

## Çalıştırma / Booting

Uygulamayı tüm bağımlılık kontrolleri ve doğrulama testleri ile birlikte başlatmak için hazırlanan kolay başlatma betiğini kullanabilirsiniz:

- **Linux / macOS**:
  ```bash
  chmod +x start.sh
  ./start.sh
  ```
- **Windows**:
  ```cmd
  start.bat
  ```

Alternatif olarak, komutları manuel olarak çalıştırabilirsiniz:

```bash
# Bağımlılıkları yükleyin
npm install

# Yerel geliştirme sunucusu
npm run dev

# Doğrulama testlerini çalıştırın
npm run verify

# Statik sürümü derleyin ve arama indeksini oluşturun
npm run build
```

## Veri Sınırları / Data Boundaries

Kanonik içerik `content/` ve `data/` altında Git ile sürümlenir. Kişisel notlar ve yer imleri tarayıcıda saklanır; kanonik içerikle karıştırılmaz.

## İçerik Durumu / Content Status

Başlangıç kayıtları platform davranışını göstermek için sınırlı bir çekirdek oluşturur. `draft` ve `review-required` belgeleri doğrulanmış bilgi olarak değerlendirilmemelidir.

Uygulamadaki `/status/` sayfası araştırma kapsamını görünür kılar. Taksonomide bulunmak, bir alanın içerik araştırmasının tamamlandığı anlamına gelmez; yalnızca `reviewed` veya `verified` belgeler incelenmiş içerik sayılır.
