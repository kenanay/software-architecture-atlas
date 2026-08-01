---
id: architecture.webassembly.en
type: architecture
title: { tr: "WebAssembly (WASM) Birlikte Çalışabilirlik Mimarisi", en: "WebAssembly (WASM) Interoperability Architecture", es: "Arquitectura de Interoperabilidad WebAssembly (WASM)" }
summary: { tr: "WASM sanal makinesi, WASI sistem arayüzü, tarayıcı içi ve sunucu uç bilişim uygulamaları.", en: "WASM virtual machine, WASI system interface, client-side browser and serverless edge applications.", es: "Máquina virtual WASM, interfaz de sistema WASI y aplicaciones en borde servidor y navegador." }
status: reviewed
maturity: active
categories: [architectures, guide]
tags: [webassembly, wasm, wasi, rust, c-interop, edge-computing]
locale: en
translationKey: webassembly
canonicalId: architecture.webassembly
translationStatus: translated
translationMethod: human
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.swebok-v4, source.iso-42010]
related: [architecture.island-architecture.en, guide.rust-architecture-guide.en]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [performance, security, portability, isolation]
applicableDomains: [web, edge, embedded, gaming, security]
---

# WebAssembly (WASM) Interoperability Architecture

WebAssembly (WASM) is a binary instruction format for a stack-based virtual machine, designed as a portable compilation target for programming languages like C, C++, Rust, and Go.
