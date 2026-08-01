---
id: guide.rust-architecture-guide.tr
type: guide
title: { tr: "Rust Güvenli Sistem Geliştirme, Mimariler ve Uçtan Uca Proje Rehberi", en: "Rust Safe Systems Development, Architectures, and End-to-End Project Guide", es: "Guía Completa de Arquitectura, Sistemas Seguros y Desarrollo de Proyectos en Rust" }
summary: { tr: "Cargo workspace, sahiplik (ownership), Hexagonal Mimari, Tokio async ekosistem, Clippy ve üretime dağıtım rehberi.", en: "Cargo workspace, ownership semantics, Hexagonal Architecture, Tokio async ecosystem, Clippy, and production deployment guide.", es: "Guía de Cargo workspace, semántica de propiedad, Arquitectura Hexagonal, ecosistema Tokio, Clippy y despliegue a producción." }
status: reviewed
maturity: active
categories: [guide, languages, architectures]
tags: [rust, cargo, ownership, hexagonal-architecture, tokio, systems-programming, clean-architecture]
locale: tr
translationKey: rust-architecture-guide
canonicalId: guide.rust-architecture-guide
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4, source.iso-42010]
related: [language.rust.tr, guide.user-manual.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author, editor]
qualityAttributes: [memory-safety, performance, concurrency, maintainability, reliability]
applicableDomains: [software-architecture, rust, systems, security, cloud-native, embedded]
---

# Rust Güvenli Sistem Geliştirme, Mimariler ve Uçtan Uca Proje Rehberi

Bu rehber, bellek emniyeti (memory safety without garbage collection) ve yüksek başarım odaklı Rust uygulamalarının mimari tasarımından dizin yapısına, Cargo workspace yönetiminden async eşzamanlılığa, test süreçlerinden üretime dağıtıma kadar uçtan uca teknik başvuru belgesidir.

---

## 1. Yazılım Fikrinden Rust Mimarisine Geçiş

Rust projelerinde mimari tasarım, çalışma zamanı overhead'ini sıfıra indirmek (zero-cost abstractions) ve derleme zamanı garantilerini mimari düzeyde kullanmak üzerine kurgulanır:

1. **Bellek ve Yaşam Süresi (Lifetime) Garantileri:** Garbage Collector olmadan derleme zamanında bellek sızıntılarını ve veri yarışlarını (data race) engellemek.
2. **Strict Type Safety & Explicit Error Handling:** `Option<T>` ve `Result<T, E>` tipleri ile çalışma zamanı istisnalarını (null pointer, unhandled exception) tamamen ortadan kaldırmak.
3. **Modüler Sınırlar:** Trait'ler ve Cargo workspace modülleri ile katmanlar arası bağımlılıkların yönünü kontrol etmek.

---

## 2. Cargo Workspace ve Modüler Proje Yapısı

Büyük ölçekli Rust uygulamalarında bağımlılıkların sıkı ayrıştırılması için **Cargo Workspace** yapısı tercih edilir:

```text
my_rust_workspace/
├── Cargo.toml                  # Workspace tanımı ve ortak bağımlılıklar
├── Cargo.lock
├── crates/
│   ├── core_domain/            # İş kuralları, Entitiler ve Trait tanımları (Bağımsız)
│   │   ├── Cargo.toml
│   │   └── src/
│   │       ├── lib.rs
│   │       ├── models/
│   │       └── ports/
│   ├── infrastructure/         # Veritabanı (SQLx), Dış Servisler, Adaptörler
│   │   ├── Cargo.toml
│   │   └── src/
│   │       ├── lib.rs
│   │       ├── persistence/
│   │       └── clients/
│   └── api_server/             # Web API (Axum/Actix), CLI ve Çalıştırılabilir Giriş Noktası
│       ├── Cargo.toml
│       └── src/
│           ├── main.rs
│           ├── handlers/
│           └── config.rs
```

---

## 3. Hexagonal Mimari ve Trait Tabanlı Bağımlılık Tersine Çevirme

Rust'ta Hexagonal Architecture (Ports and Adapters) uygulaması `trait` mekanizması üzerinden yürütülür:

### 3.1. Port Tanımı (`core_domain/src/ports/repository.rs`)
```rust
use async_trait::async_trait;
use crate::models::User;

#[derive(Debug)]
pub enum DomainError {
    NotFound,
    DatabaseError(String),
}

#[async_trait]
pub trait UserRepository: Send + Sync {
    async fn find_by_id(&self, id: &str) -> Result<User, DomainError>;
    async fn save(&self, user: &User) -> Result<(), DomainError>;
}
```

### 3.2. Adaptör İmplementasyonu (`infrastructure/src/persistence/postgres.rs`)
```rust
use async_trait::async_trait;
use core_domain::models::User;
use core_domain::ports::repository::{UserRepository, DomainError};

pub struct PostgresUserRepository {
    pool: sqlx::PgPool,
}

impl PostgresUserRepository {
    pub fn new(pool: sqlx::PgPool) -> Self {
        Self { pool }
    }
}

#[async_trait]
impl UserRepository for PostgresUserRepository {
    async fn find_by_id(&self, id: &str) -> Result<User, DomainError> {
        // PostgreSQL sorgusu
        todo!()
    }

    async fn save(&self, user: &User) -> Result<(), DomainError> {
        // PostgreSQL kaydı
        todo!()
    }
}
```

---

## 4. Async Concurrency ve Hata Yönetimi

Rust eşzamanlılık (concurrency) yaklaşımı `Tokio` çalışma zamanı ve `async/await` söz dizimi üzerine kuruludur:

- **Çalışma Zamanı (Runtime):** `#[tokio::main]` anotasyonu ile çok izlekli (multi-threaded) olay döngüsü başlatılır.
- **Hata Yönetimi:** Kütüphaneler ve katmanlar için `thiserror`, genel uygulama düzeyi akışlar için `anyhow` kullanılır.
- **Paylaşılan Durum (Shared State):** İzlekler arası güvenli veri paylaşımı için `Arc<Mutex<T>>` veya `Arc<RwLock<T>>` kalıbı uygulanır.

---

## 5. Test, Güvenlik ve Üretime Dağıtım

### 5.1. Statik Analiz ve Güvenlik Denetimi
```bash
# Statik kod analizi ve linter
cargo clippy -- -D warnings

# Bağımlılık güvenlik zafiyeti taraması
cargo audit
```

### 5.2. Birim ve Entegrasyon Testleri
```rust
#[cfg(test)]
mod tests {
    use super::*;

    #[tokio::test]
    async fn test_user_creation() {
        // Test mantığı
        assert!(true);
    }
}
```

### 5.3. Docker Multi-Stage Build & Musl Static Binary
```dockerfile
FROM rust:1.80-alpine as builder
WORKDIR /app
COPY . .
RUN cargo build --release --target x86_64-unknown-linux-musl

FROM scratch
COPY --from=builder /app/target/x86_64-unknown-linux-musl/release/api_server /api_server
ENTRYPOINT ["/api_server"]
```
