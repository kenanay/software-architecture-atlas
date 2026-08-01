---
id: architecture.service-mesh.tr
type: architecture
contentProfile: architecture
title: { tr: "Service Mesh Mimarisi", en: "Service Mesh Architecture", es: "Arquitectura Service Mesh" }
summary: { tr: "Servisler arası iletişimi sidecar proxy'ler ve kontrol düzlemi ile yöneten altyapı katmanı.", en: "An infrastructure layer managing service-to-service communication via sidecar proxies and a control plane.", es: "Capa de infraestructura que gestiona la comunicación entre servicios mediante proxies sidecar y plano de control." }
status: reviewed
maturity: active
categories: [architectures, networks, server-cloud]
tags: [service-mesh, istio, envoy, mtls, observability]
locale: tr
translationKey: service-mesh
canonicalId: architecture.service-mesh
translationStatus: reviewed
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.docs.istio, source.docs.envoy, source.swebok-v4]
related: [architecture.microservices.tr, architecture.zero-trust.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [security, observability, resilience, maintainability]
applicableDomains: [distributed-systems, cloud-native, enterprise]
---

<!-- section:definition -->
## Tanım ve Çözdüğü Problem

Service Mesh (Servis Ağı); dağıtık mikroservis mimarilerinde servisler arası (east-west) iletişimi, trafik yönetimini, güvenliği ve gözlemlenebilirliği uygulama kodundan soyutlayarak altyapı katmanına taşıyan mimari desendir.

Mikroservis sayısı arttıkça mTLS şifreleme, yeniden deneme (retry), devre kesme (circuit breaking) ve izleme kodlarının her servise ayrı ayrı yazılması kod tekrarına ve versiyon karmaşasına yol açar. Service Mesh bu işlevleri şeffaf bir şekilde üstlenir.

<!-- section:components -->
## Temel Bileşenler

- **Data Plane (Veri Düzlemi):** Servis konteynerlerinin yanına **Sidecar Proxy** (ör. Envoy) olarak konuşlandırılan ve tüm giriş/çıkış ağ trafiğini karşılayan proxy katmanı.
- **Control Plane (Kontrol Düzlemi):** Sidecar proxy'lerin konfigürasyonunu, mTLS sertifika dağıtımını ve trafik politikalarını merkezi olarak yöneten bileşen (ör. Istiod).
- **Ingress / Egress Gateway:** Ağın dışından gelen veya dışına çıkan trafiği yöneten uç proxy'ler.

<!-- section:data-flow -->
## Veri ve Kontrol Akışı (Mermaid Şeması)

```mermaid
flowchart TD
    subgraph ControlPlane ["Control Plane (Istio / Control Plane)"]
        CP[Istiod / Certificate & Policy Controller]
    end

    subgraph ServiceA ["Pod / Node A"]
        AppA[Order Service] <--> ProxyA[Envoy Sidecar Proxy A]
    end

    subgraph ServiceB ["Pod / Node B"]
        ProxyB[Envoy Sidecar Proxy B] <--> AppB[Payment Service]
    end

    CP -- Config & mTLS Certs --> ProxyA
    CP -- Config & mTLS Certs --> ProxyB
    
    ProxyA == Encrypted mTLS Tunnel ==> ProxyB
```

<!-- section:use-cases -->
## Kullanım Alanları ve Değiş-Tokuşlar

### Ideal Kullanım Alanları
- **Sıfır Güven (Zero Trust) Mimarileri:** Tüm servis içi iletişimin mTLS ile şifrelenmesi gereken kurumsal yapılar.
- **Gelişmiş Dağıtım Stratejileri:** Canary, Blue-Green ve A/B test trafik yönlendirmelerinin koda dokunmadan yapılması.

<!-- section:trade-offs -->
### Değiş-Tokuşlar (Trade-offs)
- **Ek Gecikme (Latency):** Her istek iki ek proxy (sidecar) üzerinden geçtiği için milisaniye düzeyinde ek gecikme oluşur.
- **Bellek ve CPU Tüketimi:** Her pod yanında bir proxy çalıştırmak toplam kaynak tüketimini artırır.

<!-- section:production -->
## Üretim ve Operasyon Zorlukları

1. **Ambient / Sidecarless Mesh:** Sidecar kaynak yükünü azaltmak için node düzeyinde çalışan eBPF tabanlı mimariler değerlendirilmelidir.
2. **Sertifika Rotasyonu:** mTLS sertifikalarının sorunsuz otomatik rotasyonu (SPIFFE/SPIRE) izlenmelidir.

<!-- section:security -->
## Güvenlik Kaygıları

- Servis kimlik doğrulaması (SPIFFE ID) ve strict mTLS politikası uygulanmalı, şifrelenmemiş trafiğe izin verilmemelidir.

<!-- section:testing -->
## Test ve Doğrulama

- Chaos Engineering araçları (ör. Chaos Mesh) ile proxy seviyesinde gecikme veya paket kaybı enjekte edilerek dayanıklılık test edilmelidir.

<!-- section:observability -->
## Gözlemlenebilirlik

- Kiali ve Jaeger entegrasyonu ile servis bağlantı grafiği ve mTLS durumu canlı izlenmelidir.

<!-- section:alternatives -->
## Alternatifler

- **İstemci Tarafı Kütüphaneler (Netflix Ribbon/Hystrix):** Her dil için ayrı SDK bakımı gerektiren eski yaklaşım.

<!-- section:sources -->
## Kaynaklar

- Istio Service Mesh Official Documentation
- Envoy Proxy Architecture Specification
