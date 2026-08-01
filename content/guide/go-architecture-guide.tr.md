---
id: guide.go-architecture-guide.tr
type: guide
title: { tr: "Go Uygulama Geliştirme, Mimariler ve Uçtan Uca Proje Rehberi", en: "Go Application Development, Architectures, and End-to-End Project Guide", es: "Guía Completa de Desarrollo de Aplicaciones, Arquitecturas y Proyectos en Go" }
summary: { tr: "Standart kütüphane, Hexagonal Mimari, proje dizin yapısı (cmd/pkg/internal), eşzamanlılık (Goroutines/Channels) ve üretime hazırlık rehberi.", en: "Standard library, Hexagonal Architecture, project directory layout (cmd/pkg/internal), concurrency (Goroutines/Channels), and production readiness guide.", es: "Guía completa de biblioteca estándar, Arquitectura Hexagonal, estructura de directorios, concurrencia (Goroutines/Channels) y producción en Go." }
status: reviewed
maturity: active
categories: [guide, languages, architectures]
tags: [go, golang, hexagonal-architecture, project-structure, concurrency, microservices, clean-architecture]
locale: tr
translationKey: go-architecture-guide
canonicalId: guide.go-architecture-guide
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4, source.iso-42010]
related: [language.go.tr, guide.user-manual.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author, editor]
qualityAttributes: [performance, maintainability, testability, simplicity, concurrency, reliability]
applicableDomains: [software-architecture, go, web, cloud-native, microservices, networking]
---

# Go Uygulama Geliştirme, Mimariler ve Uçtan Uca Proje Rehberi

Go (Golang); yüksek eşzamanlılık (concurrency), sadelik, açık bağımlılık yönetimi ve ultra hızlı derleme süreleri sunan bulut-yerel (cloud-native) ve mikroservis sistemlerinin ana dilidir.

---

## 1. Go Mimari Felsefesi ve Temel İlkeler

1. **Sadelik ve Açıklık (Simplicity & Explicitness):** Gizli sihirler (magic Framework annotations) yerine açık kod akışı ve açık hata yönetimi (`if err != nil`).
2. **Küçük Arayüzler (Implicit Interfaces):** Arayüzlerin tüketici paket tarafından tanımlanması ve dolaylı imtiyaz (implicit implementation).
3. **Yerleşik Eşzamanlılık (Built-in Concurrency):** Goroutine'ler, kanallar (channels) ve `select` yapısı ile hafif izlek yönetimi.

---

## 2. Standart Go Proje Dizin Yapısı (`golang-standards/project-layout`)

```text
my_go_project/
├── go.mod
├── go.sum
├── Makefile
├── cmd/                        # Uygulama çalıştırma noktaları
│   └── server/
│       └── main.go
├── internal/                   # Dışarıya kapalı, özel proje paketleri
│   ├── domain/                 # Varlıklar (Entities) ve Arayüzler (Interfaces)
│   │   └── user.go
│   ├── service/                # İş Mantığı ve Kullanım Senaryoları (Use Cases)
│   │   └── user_service.go
│   └── repository/             # Veritabanı ve Dış Adaptörler (Postgres, Redis)
│       └── postgres.go
├── pkg/                        # Dış projelerce yeniden kullanılabilir kütüphaneler
│   └── logger/
│       └── logger.go
└── api/                        # OpenAPI/Swagger, Proto tanımları
    └── openapi.yaml
```

---

## 3. Go ile Hexagonal (Ports & Adapters) Mimari

### 3.1. Domain ve Port Tanımları (`internal/domain/user.go`)
```go
package domain

import "context"

type User struct {
    ID    int64  `json:"id"`
    Email string `json:"email"`
}

// Interface tüketicinin olduğu katmanda veya domain katmanında tanımlanır
type UserRepository interface {
    FindByID(ctx context.Context, id int64) (*User, error)
    Save(ctx context.Context, user *User) error
}
```

### 3.2. Adaptör İmplementasyonu (`internal/repository/postgres.go`)
```go
package repository

import (
    "context"
    "database/sql"
    "my_go_project/internal/domain"
)

type PostgresUserRepository struct {
    db *sql.DB
}

func NewPostgresUserRepository(db *sql.DB) *PostgresUserRepository {
    return &PostgresUserRepository{db: db}
}

func (r *PostgresUserRepository) FindByID(ctx context.Context, id int64) (*domain.User, error) {
    // Context tabanlı veritabanı sorgusu
    return &domain.User{ID: id, Email: "user@example.com"}, nil
}

func (r *PostgresUserRepository) Save(ctx context.Context, user *domain.User) error {
    return nil
}
```

---

## 4. Eşzamanlılık (Concurrency), Context ve Hata Yönetimi

- **Goroutine ve Context İletimi:** Tüm I/O işlemlerine `context.Context` geçirilerek zamanaşımı (timeout) ve iptal (cancellation) sinyalleri yönetilir.
- **Worker Pool Kalıbı:** Ağır arka plan işlerinde kontrolsüz goroutine patlamasını engellemek için sınırlı sayıda worker çalıştırılır.
- **Graceful Shutdown:** `os.Signal` (SIGTERM, SIGINT) yakalanarak açık sunucu bağlantıları ve veritabanı havuzları emniyetle kapatılır.

---

## 5. Test, Linter ve Docker Dağıtımı

### 5.1. Table-Driven Unit Testing
```go
func TestCalculateScore(t *testing.T) {
    tests := []struct {
        name     string
        input    int
        expected int
    }{
        {"base case", 10, 100},
        {"zero case", 0, 0},
    }

    for _, tt := range tests {
        t.Run(tt.name, func(t *testing.T) {
            got := CalculateScore(tt.input)
            if got != tt.expected {
                t.Errorf("got %d, want %d", got, tt.expected)
            }
        })
    }
}
```

### 5.2. Statik Analiz & Minimal Distroless Docker Build
```dockerfile
FROM golang:1.23-alpine AS builder
WORKDIR /app
COPY go.mod go.sum ./
RUN go mod download
COPY . .
RUN CGO_ENABLED=0 GOOS=linux go build -ldflags="-w -s" -o server ./cmd/server

FROM gcr.io/distroless/static-debian12
COPY --from=builder /app/server /server
ENTRYPOINT ["/server"]
```
