---
id: guide.kotlin-architecture-guide.tr
type: guide
title: { tr: "Kotlin Modern Mobil ve Sunucu Mimari Rehberi", en: "Kotlin Modern Mobile and Server Architecture Guide", es: "Guía de Arquitectura Móvil y Servidor Moderna en Kotlin" }
summary: { tr: "Android Jetpack Compose, MVVM/MVI, multi-module Gradle ve Ktor backend rehberi.", en: "Android Jetpack Compose, MVVM/MVI, multi-module Gradle, and Ktor backend guide.", es: "Android Jetpack Compose, MVVM/MVI, Gradle multimódulo y guía de Ktor backend." }
status: reviewed
maturity: active
categories: [guide, languages, architectures]
tags: [kotlin, android, jetpack-compose, mvvm, mvi, ktor, gradle]
locale: tr
translationKey: kotlin-architecture-guide
canonicalId: guide.kotlin-architecture-guide
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4, source.iso-42010]
related: [language.kotlin.tr, guide.user-manual.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author, editor]
qualityAttributes: [maintainability, testability, type-safety, usability]
applicableDomains: [software-architecture, kotlin, mobile, android, server]
---

# Kotlin Modern Mobil ve Sunucu Mimari Rehberi

Android mobil sistemlerinde Jetpack Compose + MVVM/MVI ve Gradle modül mimarisi:

```text
my_kotlin_project/
├── build.gradle.kts
├── settings.gradle.kts
└── app/
    └── src/main/java/com/example/app/
        ├── ui/
        ├── domain/
        └── data/
```
