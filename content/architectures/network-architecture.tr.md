---
id: architecture.network-architecture.tr
type: architecture
title: { tr: "Yazılım ve Donanım Ağ Mimarileri", en: "Software and Hardware Network Architectures", es: "Arquitecturas de Red de Software y Hardware" }
summary: { tr: "Donanım topoğrafisi (VLAN, Routers/Switches, SDN) ve yazılım katmanları (OSI, Service Mesh, gRPC, QUIC/HTTP3).", en: "Hardware topologies (VLAN, Routers/Switches, SDN) and software protocols (OSI model, Service Mesh, gRPC, QUIC/HTTP3).", es: "Topologías de hardware (VLAN, SDN) y protocolos de software (Modelo OSI, Service Mesh, gRPC, QUIC/HTTP3)." }
status: reviewed
maturity: active
categories: [architectures, networks]
tags: [networking, sdn, service-mesh, osi-model, grpc, quic, hardware-network]
locale: tr
translationKey: network-architecture
canonicalId: architecture.network-architecture
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.swebok-v4, source.iso-42010]
related: [concept.rfc-lifecycle.tr, architecture.cloud-native.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [performance, scalability, reliability, interoperability]
applicableDomains: [networks, hardware, cloud-native, telecommunications, infrastructure]
---

# Yazılım ve Donanım Ağ Mimarileri

Ağ mimarisi; veri paketlerinin fiziksel donanımlardan (fiziksel katman) uygulama protokollere (yazılım katmanı) kadar kesintisiz, düşük gecikmeli ve güvenli iletimini düzenleyen bütünsel tasarımdır.

## 1. Donanım Ağ Mimarileri (Hardware Topology)
- **Topoloji ve Anahtarlama:** Yapısal kablolama, L2/L3 Anahtarlayıcılar (Switches), Yönlendiriciler (Routers) ve VLAN (Virtual LAN) izolasyonu.
- **Yazılım Tanımlı Ağlar (SDN):** Kontrol düzlemi (Control Plane) ile veri düzleminin (Data Plane) ayrılması.

## 2. Yazılım Ağ Mimarileri ve Protokoller
- **OSI ve TCP/IP Katman Yapısı:** Uygulama (L7), Taşıma (L4 - TCP/UDP), Ağ (L3 - IP) protokol paketleri.
- **Service Mesh (Envoy/Istio):** Mikroservisler arası TLS şifreleme, yük dengeleme ve izlenebilirlik sağlayan yan araç (sidecar) mimarisi.
- **Modern Protokoller:** gRPC (HTTP/2 - Protobuf) ve QUIC / HTTP/3 UDP tabanlı düşük gecikmeli taşıma.
