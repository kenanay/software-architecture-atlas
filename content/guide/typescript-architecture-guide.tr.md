---
id: guide.typescript-architecture-guide.tr
type: guide
title: { tr: "TypeScript Tip Güvenlikli Uygulama ve Mimari Rehberi", en: "TypeScript Type-Safe Application and Architecture Guide", es: "Guía de Arquitectura y Aplicaciones con Tipado Seguro en TypeScript" }
summary: { tr: "Monorepo, Clean Architecture, Node.js/Bun ekosistemi ve katmanlı tip mimarisi rehberi.", en: "Monorepo, Clean Architecture, Node.js/Bun ecosystem, and layered type architecture guide.", es: "Monorepo, Arquitectura Limpia, ecosistema Node.js/Bun y guía de arquitectura de tipos." }
status: reviewed
maturity: active
categories: [guide, languages, architectures]
tags: [typescript, nodejs, bun, clean-architecture, monorepo, type-safety]
locale: tr
translationKey: typescript-architecture-guide
canonicalId: guide.typescript-architecture-guide
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4, source.iso-42010]
related: [language.typescript.tr, guide.user-manual.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author, editor]
qualityAttributes: [type-safety, maintainability, developer-productivity, scalability]
applicableDomains: [software-architecture, typescript, web, server, monorepo]
---

# TypeScript Tip Güvenlikli Uygulama ve Mimari Rehberi

TypeScript; JavaScript ekosistemine derleme zamanında tip güvenliği (compile-time type safety) ve nesne yönelimli/fonksiyonel mimari kalıplar kazandırır.

---

## 1. Modern TypeScript Monorepo Dizin Yapısı (`pnpm` / `Turborepo`)

```text
my_ts_monorepo/
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
├── packages/
│   ├── core/
│   │   ├── package.json
│   │   └── src/index.ts
│   └── config/
│       └── tsconfig.base.json
└── apps/
    ├── web/
    └── api/
```

---

## 2. Framework'e Göre Özgün TypeScript Dizin Yapıları

#### A. Next.js App Router (Fullstack Web Mimarisi)
```text
my_next_app/
├── package.json
├── next.config.mjs
└── src/
    ├── app/
    │   ├── layout.tsx
    │   ├── page.tsx
    │   ├── (auth)/login/page.tsx
    │   └── api/users/route.ts
    ├── components/
    │   ├── ui/              # Atomik arayüz bileşenleri
    │   └── forms/
    └── lib/                 # Veri tabanı ve istemci tanımları
```

#### B. NestJS (Modüler Kurumsal Web API)
```text
my_nestjs_api/
├── package.json
└── src/
    ├── main.ts
    ├── app.module.ts
    └── modules/
        ├── users/
        │   ├── users.module.ts
        │   ├── users.controller.ts
        │   ├── users.service.ts
        │   └── dto/
        └── auth/
```

---

## 3. TypeScript CLI Jeneratörleri ve Çapraz Platform Kurulum Rehberi

- **Node.js & npm / pnpm / bun Kurulumu (Çapraz Platform):**
  - **Windows:** [Node.js Official Installer (.msi)](https://nodejs.org) veya `winget install OpenJS.NodeJS`
  - **macOS:** `brew install node pnpm bun`
  - **Linux (Ubuntu/Debian):** `curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash - && sudo apt install -y nodejs`

### 3.1 Next.js App Router Proje Jeneratörü
```bash
# Tüm Platformlar (Windows, macOS, Linux)
npx create-next-app@latest my-next-project --typescript --tailwind --eslint --src-dir --app
```

### 3.2 NestJS Kurumsal API CLI Jeneratörü
```bash
# 1. Global Nest CLI kurulumu
npm install -g @nestjs/cli

# 2. Yeni modüler mimari projesi başlatma
nest new my-nest-project

# 3. Yeni bir modül/servis jenerasyonu
cd my-nest-project
nest g module users
nest g controller users
nest g service users
```
