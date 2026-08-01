---
id: guide.swift-architecture-guide.tr
type: guide
title: { tr: "Swift Apple Ekosistemi Mimari ve SPM Rehberi", en: "Swift Apple Ecosystem Architecture and SPM Guide", es: "Guía de Arquitectura y SPM del Ecosistema Apple en Swift" }
summary: { tr: "SwiftUI, The Composable Architecture (TCA), Swift Package Manager (SPM) ve VIPER rehberi.", en: "SwiftUI, The Composable Architecture (TCA), Swift Package Manager (SPM), and VIPER guide.", es: "SwiftUI, The Composable Architecture (TCA), SPM y guía VIPER en Swift." }
status: reviewed
maturity: active
categories: [guide, languages, architectures]
tags: [swift, ios, macos, swiftui, tca, spm, viper]
locale: tr
translationKey: swift-architecture-guide
canonicalId: guide.swift-architecture-guide
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4, source.iso-42010]
related: [language.swift.tr, guide.user-manual.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author, editor]
qualityAttributes: [performance, type-safety, maintainability, energy-efficiency]
applicableDomains: [software-architecture, swift, mobile, ios, macos]
---

# Swift Apple Ekosistemi Mimari ve SPM Rehberi

Apple platformlarında (iOS/macOS) Swift Package Manager (SPM) ve SwiftUI + TCA modülerleşmesi:

```text
MySwiftApp/
├── Package.swift
├── Sources/
│   ├── AppFeature/
│   ├── UserFeature/
│   └── CoreModels/
└── Tests/
    └── UserFeatureTests/
```
