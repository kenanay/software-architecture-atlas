---
id: guide.java-architecture-guide.tr
type: guide
title: { tr: "Java Kurumsal Uygulama Geliştirme ve Mimari Rehberi", en: "Java Enterprise Application Development and Architecture Guide", es: "Guía de Arquitectura y Desarrollo de Aplicaciones Empresariales en Java" }
summary: { tr: "Spring Boot 3, Maven/Gradle dizin yapısı, Clean Architecture ve mikroservis mimarileri rehberi.", en: "Spring Boot 3, Maven/Gradle directory layout, Clean Architecture, and microservices guide.", es: "Spring Boot 3, estructura Maven/Gradle, Arquitectura Limpia y microservicios en Java." }
status: reviewed
maturity: active
categories: [guide, languages, architectures]
tags: [java, spring-boot, clean-architecture, maven, gradle, enterprise]
locale: tr
translationKey: java-architecture-guide
canonicalId: guide.java-architecture-guide
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4, source.iso-42010]
related: [language.java.tr, guide.user-manual.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author, editor]
qualityAttributes: [maintainability, testability, scalability, portability]
applicableDomains: [software-architecture, java, web, enterprise, microservices]
---

# Java Kurumsal Uygulama Geliştirme ve Mimari Rehberi

Java ekosisteminde kurumsal sürdürülebilirlik ve test edilebilirlik için en çok tercih edilen mimari standartlar:

---

## 1. Standart Maven Proje Dizin Yapısı

```text
my_java_app/
├── pom.xml
├── README.md
└── src/
    ├── main/
    │   ├── java/com/example/app/
    │   │   ├── Application.java
    │   │   ├── domain/
    │   │   ├── service/
    │   │   └── controller/
    │   └── resources/
    │       └── application.yml
    └── test/
        └── java/com/example/app/
```

### 1.1 Spring Boot + Clean Architecture Kod Örneği

```java
// domain/User.java
package com.example.app.domain;

public record User(Long id, String email, boolean active) {}
```

---

## 2. Framework ve Çalışma Zamanına Göre Dizin Yapıları

#### A. Spring Boot 3 (Kurumsal Web & Rest API)
```text
src/main/java/com/example/app/
├── config/                  # Security, Bean tanımları
├── controller/              # REST Endpoints (@RestController)
├── service/                 # İş Mantığı Servisleri (@Service)
├── repository/              # Spring Data JPA Repository
└── entity/                  # JPA/Hibernate Varlıkları (@Entity)
```

#### B. Quarkus / Micronaut (Bulut-Yerel & GraalVM Native)
```text
src/main/java/org/acme/
├── resource/                # JAX-RS Endpoints (@Path)
├── service/                 # CDI Beans (@ApplicationScoped)
└── model/                   # Panache Entity Varlıkları
```
