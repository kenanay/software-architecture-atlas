---
id: guide.csharp-architecture-guide.tr
type: guide
title: { tr: "C# (.NET) Modern Mimari ve Solution Yapılandırma Rehberi", en: "C# (.NET) Modern Architecture and Solution Structuring Guide", es: "Guía de Estructuración y Arquitectura Moderna en C# (.NET)" }
summary: { tr: ".NET 8/9 Solution yapısı, Clean Architecture, CQRS with MediatR ve ASP.NET Core Web API rehberi.", en: ".NET 8/9 Solution structure, Clean Architecture, CQRS with MediatR, and ASP.NET Core Web API guide.", es: "Estructura de Solución .NET 8/9, Arquitectura Limpia, CQRS con MediatR y guía de ASP.NET Core Web API." }
status: reviewed
maturity: active
categories: [guide, languages, architectures]
tags: [csharp, dotnet, clean-architecture, cqrs, aspnet-core, entity-framework]
locale: tr
translationKey: csharp-architecture-guide
canonicalId: guide.csharp-architecture-guide
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4, source.iso-42010]
related: [language.csharp.tr, guide.user-manual.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author, editor]
qualityAttributes: [maintainability, testability, scalability, performance]
applicableDomains: [software-architecture, csharp, dotnet, web, enterprise]
---

# C# (.NET) Modern Mimari ve Solution Yapılandırma Rehberi

Modern .NET 8/9 uygulamalarında Clean Architecture ve CQRS katman ayrımı:

```text
MyNetSolution.sln
├── src/
│   ├── MyNetApp.Domain/
│   ├── MyNetApp.Application/
│   ├── MyNetApp.Infrastructure/
│   └── MyNetApp.WebAPI/
└── tests/
    └── MyNetApp.UnitTests/
```

---

## 2. Framework ve Uygulama Türüne Göre Dizin Yapıları

#### A. ASP.NET Core Clean Web API + CQRS
```text
src/MyNetApp.WebAPI/
├── Program.cs
├── Controllers/
│   └── UsersController.cs
└── Middleware/
    └── ExceptionHandlingMiddleware.cs

src/MyNetApp.Application/
├── Common/Interfaces/
├── Users/Commands/CreateUser/
└── Users/Queries/GetUserById/
```

#### B. .NET MAUI / WPF Masaüstü (MVVM Mimarisi)
```text
src/MyDesktopApp/
├── App.xaml
├── MainPage.xaml
├── Views/                   # UI Ekranları (View)
│   └── DashboardView.xaml
├── ViewModels/              # Arayüz Mantığı ve Bağlama (ViewModel)
│   └── DashboardViewModel.cs
└── Services/                # Yerel Veri ve Donanım Bağlantısı
    └── DeviceSensorService.cs
```
