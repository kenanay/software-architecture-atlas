# Software Architecture Atlas

A local-first bilingual documentation platform for software architectures, programming languages, frameworks, AI systems, standards, RFCs, and software development practices.

**Project Owner and Architecture Lead:** Kenan AY — Management and Information Systems Specialist  
**Mimari:** Content-Driven Local-First Modular Monolith · Feature-Based Modules · Ports and Adapters

## Özellikler

- Astro Content Collections ile şema doğrulamalı Markdown içerik
- Türkçe–İngilizce bağlantılı belge modeli ve merkezi terim sözlüğü
- Arama, kategori ve inceleme durumu filtreleri
- Teknoloji/mimari karşılaştırması ve gerekçeli karar desteği
- IndexedDB kişisel notları, yer imleri ve JSON dışa aktarma
- PWA service worker ile çevrimdışı kullanım
- Yapılandırılmış kaynak, terminoloji ve sınıflandırma kayıtları

## Çalıştırma

```bash
npm install
npm run dev
```

Üretim doğrulaması:

```bash
npm test
npm run build
```

## Veri sınırları

Kanonik içerik `content/` ve `data/` altında Git ile sürümlenir. Kişisel notlar ve yer imleri tarayıcıda saklanır; kanonik içerikle karıştırılmaz.

## İçerik durumu

Başlangıç kayıtları platform davranışını göstermek için sınırlı bir çekirdek oluşturur. `draft` ve `review-required` belgeleri doğrulanmış bilgi olarak değerlendirilmemelidir.
