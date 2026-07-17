---
id: concept.ai-risk-management.tr
type: concept
title: { tr: "AI Risk Yönetimi", en: "AI Risk Management" }
summary: { tr: "AI sistem risklerini yaşam döngüsü boyunca Govern, Map, Measure ve Manage işlevleriyle ele alma yaklaşımı.", en: "A lifecycle approach to AI risk using Govern, Map, Measure, and Manage functions." }
status: reviewed
maturity: active
categories: [ai, quality, security]
tags: [nist, ai-rmf, governance, evaluation]
locale: tr
translationKey: ai-risk-management
canonicalId: concept.ai-risk-management
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-17
sources: [source.nist.ai-rmf-1]
related: [ai.rag.tr]
contributors:
  - personId: person.kenan-ay
    roles: [researcher, technical-author, reviewer]
qualityAttributes: [safety, privacy, explainability, robustness]
applicableDomains: [ai, ml, generative-ai]
---
## Yaşam döngüsü yaklaşımı

NIST AI RMF 1.0, AI risk yönetimini dört üst düzey işlev altında düzenler: **Govern, Map, Measure ve Manage**. Govern diğer işlevleri çapraz keser; risk yönetimi tek seferlik onay değil, yaşam döngüsü boyunca sürekli faaliyettir.

## Mimari etkiler

- Veri, model, prompt ve değerlendirme sürümleri ayrı izlenmelidir.
- Model çıktısı için bağlam, kullanıcı ve kullanım amacı kaydedilmelidir.
- Güvenlik, gizlilik, önyargı, dayanıklılık ve açıklanabilirlik ölçütleri proje bağlamına göre seçilmelidir.
- Human-in-the-loop sınırları ve başarısızlık halinde güvenli davranış tanımlanmalıdır.

## Güncellik notu

NIST, AI RMF 1.0'ın güncellenmekte olduğunu bildiriyor. Bu kayıt `active-revision-in-progress` olarak tutulur ve yeni sürüm yayımlandığında yeniden incelenmelidir.
