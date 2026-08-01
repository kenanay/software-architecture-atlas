---
id: guide.cpp-architecture-guide.tr
type: guide
title: { tr: "C++ Modern Geliştirme ve Mimari Standartları Rehberi", en: "C++ Modern Development and Architecture Standards Guide", es: "Guía de Estándares de Arquitectura y Desarrollo Moderno en C++" }
summary: { tr: "C++20/23 standartları, CMake proje yapısı, katmanlı mimari ve bellek yönetimi ilkeleri.", en: "C++20/23 standards, CMake project layout, layered architecture, and memory management principles.", es: "Estándares C++20/23, estructura CMake, arquitectura en capas y gestión de memoria." }
status: reviewed
maturity: active
categories: [guide, languages, architectures]
tags: [cpp, cmake, layered-architecture, memory-management, high-performance, game-engine]
locale: tr
translationKey: cpp-architecture-guide
canonicalId: guide.cpp-architecture-guide
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4, source.iso-42010]
related: [language.cpp.tr, guide.user-manual.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author, editor]
qualityAttributes: [performance, memory-efficiency, determinism, portability]
applicableDomains: [software-architecture, cpp, games, embedded, graphics]
---

# C++ Modern Geliştirme ve Mimari Standartları Rehberi

Modern C++ (C++20/C++23); oyun motorları, gömülü sistemler, grafik ve yüksek performanslı hesaplama için sıfır maliyetli soyutlama (zero-cost abstractions) sunar.

---

## 1. Modern CMake Proje Dizin Yapısı

```text
my_cpp_project/
├── CMakeLists.txt
├── README.md
├── include/
│   └── my_project/
│       ├── core.hpp
│       └── service.hpp
├── src/
│   ├── core.cpp
│   └── service.cpp
├── apps/
│   └── main.cpp
└── tests/
    └── test_main.cpp
```
