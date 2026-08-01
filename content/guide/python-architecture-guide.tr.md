---
id: guide.python-architecture-guide.tr
type: guide
title: { tr: "Python Uygulama Geliştirme, Mimariler ve Uçtan Uca Proje Rehberi", en: "Python Application Development, Architectures, and End-to-End Project Guide", es: "Guía Completa de Desarrollo de Aplicaciones, Arquitecturas y Proyectos en Python" }
summary: { tr: "Fikirden üretime; Python mimarileri, proje dizin yapıları, paket seçimi, test, güvenlik ve dağıtım rehberi.", en: "From idea to production; Python architectures, directory structures, package selection, testing, security, and deployment guide.", es: "De la idea a producción; guía de arquitecturas de Python, estructuras de directorios, paquetes, pruebas y despliegue." }
status: reviewed
maturity: active
categories: [guide, languages, architectures]
tags: [python, architecture, clean-architecture, hexagonal, ddd, project-structure, fastapi, django]
locale: tr
translationKey: python-architecture-guide
canonicalId: guide.python-architecture-guide
translationStatus: original
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-07-24
sources: [source.swebok-v4, source.iso-42010]
related: [language.python.tr, guide.user-manual.tr]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author, editor]
qualityAttributes: [maintainability, testability, scalability, usability, completeness]
applicableDomains: [software-architecture, python, web, desktop, etl, cli]
---

# Python Uygulama Geliştirme, Mimariler ve Uçtan Uca Proje Rehberi

Bu rehber, bir yazılım fikrinin oluşturulmasından mimari seçimine, klasör yapısından paket seçimine, testten üretime dağıtıma kadar Python uygulama geliştirme sürecini uçtan uca kapsayan teknik başvuru belgesidir.

---

## 1. Yazılım Fikrinden Teknik Plana Geçiş

Yazılım geliştirme süreci framework veya paket seçimiyle değil; problem tanımı, hedef kullanıcı ve kalite ölçütlerinin belirlenmesiyle başlar.

1. **Problem Tanımı:** Mevcut durum nedir, sorun kime ait ve neye yol açıyor?
2. **MVP Tanımı:** Tek bir temel kullanıcı yolculuğunu uçtan uca çalıştıran en küçük değerli sürüm.
3. **Fonksiyonel ve Fonksiyonel Olmayan Gereksinimler:** Hız, güvenlik, çevrimdışı çalışma, bellek bütçesi ve denetlenebilirlik.

---

## 2. Uygulama Türüne Göre Mimari Seçimi

Python ekosisteminde projenin karmaşıklığına ve kullanım amacına göre seçilebilecek temel mimariler:

| Mimari Stil | Kullanım Durumu | Öne Çıkan Paketler / Yaklaşım |
| :--- | :--- | :--- |
| **Betik / Otomasyon** | Tek dosyalı dönüştürme ve otomasyon işleri | `argparse`, `pathlib`, `csv`, `shutil` |
| **Modüler Monolit** | Orta/büyük ölçekli web ve servis sistemleri | Özellik-temelli modüller, `Django`, `FastAPI` |
| **Katmanlı (Layered)** | İş mantığı ve veri erişiminin ayrılması | `SQLAlchemy`, `Pydantic`, `Flask` |
| **Clean / Hexagonal Architecture** | Karmaşık iş kuralları, dış bağımlılık izolasyonu | Limanlar (Ports) & Adaptörler (Adapters), `pytest` |
| **MVT (Model-View-Template)** | Sunucu taraflı web uygulamaları | `Django`, `Django ORM` |
| **MVVM (Model-View-ViewModel)** | Masaüstü ve zengin arayüzlü uygulamalar | `PySide6` (Qt for Python), `ReactiveX` |
| **Olay Güdümlü (Event-Driven)** | Asenkron mesajlaşma ve mikroservisler | `Celery`, `Redis`, `RabbitMQ` |

---

## 3. Standart Proje ve Klasör Yapısı

Modern Python projelerinde paketleme (`pyproject.toml`) ve kaynak kodun (`src/`) ayrıldığı standart dizin yapısı:

```text
my_python_project/
├── pyproject.toml
├── README.md
├── .gitignore
├── .env.example
├── src/
│   └── my_package/
│       ├── __init__.py
│       ├── core/
│       │   ├── config.py
│       │   └── exceptions.py
│       ├── domain/
│       │   ├── models.py
│       │   └── services.py
│       ├── infrastructure/
│       │   ├── database.py
│       │   └── repositories.py
│       └── api/
│           ├── routes.py
│           └── schemas.py
└── tests/
    ├── conftest.py
    ├── unit/
    └── integration/
```

### 3.1 Standard `pyproject.toml` Başlangıç Şablonu

```toml
[build-system]
requires = ["hatchling"]
build-backend = "hatchling.build"

[project]
name = "my-python-app"
version = "0.1.0"
description = "Clean Architecture tabanlı üretim standartlarında Python uygulaması"
readme = "README.md"
requires-python = ">=3.11"
dependencies = [
    "fastapi>=0.110.0",
    "uvicorn[standard]>=0.28.0",
    "pydantic>=2.6.0",
    "sqlalchemy>=2.0.0",
]

[project.optional-dependencies]
dev = [
    "pytest>=8.0.0",
    "mypy>=1.8.0",
    "ruff>=0.3.0",
]

[tool.ruff]
line-length = 88
target-version = "py311"

[tool.mypy]
strict = true
```

### 3.2 FastAPI + Clean Architecture Çekirdek Kod Örneği

```python
# src/my_package/domain/models.py
from pydantic import BaseModel, ConfigDict

class User(BaseModel):
    model_config = ConfigDict(frozen=True)
    id: int
    email: str
    is_active: bool = True

# src/my_package/api/routes.py
from fastapi import APIRouter, HTTPException, status
from my_package.domain.models import User

router = APIRouter(prefix="/users", tags=["Users"])

@router.get("/{user_id}", response_model=User)
async def get_user(user_id: int) -> User:
    if user_id <= 0:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail="Geçersiz kullanıcı ID")
    return User(id=user_id, email=f"user{user_id}@example.com")
```

### 3.3 Framework ve Kütüphaneye Göre Özgün Dizin Yapıları

Python'da kullanılan kütüphane ve framework türüne göre dosya ve klasör mimarileri değişiklik gösterir:

#### A. Django (MVT App Mimarisi)
```text
my_django_project/
├── manage.py
├── config/                  # Proje genel ayarları
│   ├── settings.py
│   ├── urls.py
│   └── wsgi.py
├── apps/                    # Modüler iş alanları (Apps)
│   ├── users/
│   │   ├── models.py        # MVT Model katmanı
│   │   ├── views.py         # MVT View (Mantık) katmanı
│   │   ├── urls.py
│   │   └── admin.py
│   └── books/
│       ├── models.py
│       └── views.py
└── templates/               # MVT Template (Sunum) katmanı
```

#### B. PySide6 / Kivy (Masaüstü & GUI MVVM Mimarisi)
```text
my_gui_app/
├── main.py                  # Uygulama giriş noktası (QApplication)
├── assets/                  # İkonlar, stiller (QSS/KV) ve görseller
├── views/                   # UI Ekranları ve Bileşenleri (View)
│   ├── main_window.py
│   └── settings_view.py
├── viewmodels/              # Arayüz Durumu ve İş Mantığı (ViewModel)
│   └── main_viewmodel.py
└── services/                # Veri tabanı ve Donanım Servisleri
    └── local_db.py
```

#### C. Pandas / Polars (Veri İşleme ve ETL Pipeline Mimarisi)
```text
my_etl_pipeline/
├── pyproject.toml
├── pipelines/               # ETL Akışları
│   └── sales_pipeline.py
├── extractors/              # Veri Kaynak Bağlantıları (SQL/API/CSV)
│   └── api_extractor.py
├── transformers/           # Pandas/Polars Veri Temizleme & Dönüştürme
│   └── clean_sales.py
└── loaders/                 # Veri Ambarı / Veri Tabanı Yükleme
    └── postgres_loader.py
```

---

## 4. Bağımlılık ve Paket Yönetimi

- **Geliştirme Ortamı:** `uv` veya `venv` ile izole sanal ortamlar.
- **Paketleme:** `pyproject.toml` ile standart PEP 621 bağımlılık bildirimi.
- **Kalite Araçları:** `Ruff` (hızlı linter & formatter), `mypy` (statik tip denetleyici), `pytest` (test koşucu).

---

## 5. Güvenlik ve Üretime Dağıtım Kontrol Listesi

- [x] Hassas bilgiler `.env` dosyasında tutulur; asla kaynak kontrole (`git`) eklenmez.
- [x] Tüm girdiler `Pydantic` veya eşdeğer şema ile doğrulanır.
- [x] Veri tabanı işlemleri parametrik sorgular (`SQLAlchemy ORM`) ile SQL Injection'a karşı korunur.
- [x] Uçtan uca loglama (`logging` modülü veya `structlog`) yapılandırılır.

---

## 6. Proje Oluşturucu CLI Araçları ve Çapraz Platform Kurulum Rehberi

Proje ve dosya mimarilerini elle tek tek oluşturmak yerine, resmî CLI araçları ile saniyeler içinde otomatik jenerasyon sağlayabilirsiniz:

### 6.1 Django Otomatik Proje ve App Oluşturma
```bash
# 1. Django kurulumu (Tüm platformlar: Windows, macOS, Linux)
pip install django

# 2. Standart Django proje mimarisini başlatma
django-admin startproject my_django_project .

# 3. Yeni bir modül/app ekleme
python manage.py startapp users
```

### 6.2 FastAPI / Clean Architecture Şablon Jeneratörü (`cookiecutter`)
`cookiecutter`, FastAPI ve Clean Architecture projelerini hazır üretim standartlarında oluşturan topluluk standardıdır.

- **Windows (PowerShell/CMD):**
  ```powershell
  pip install cookiecutter
  # veya Astral uv kullanıyorsanız:
  uv tool install cookiecutter
  ```

- **macOS (Homebrew / Terminal):**
  ```bash
  brew install cookiecutter
  # veya
  pip3 install cookiecutter
  ```

- **Linux (Ubuntu / Debian / Fedora / Arch):**
  ```bash
  pip install --user cookiecutter
  # Debian/Ubuntu paket yöneticisi ile:
  sudo apt install cookiecutter
  ```

- **Şablondan Proje Oluşturma (Tüm Platformlar):**
  ```bash
  cookiecutter https://github.com/fastapi/full-stack-fastapi-template
  ```

