---
id: guide.user-manual.es
type: guide
title: { tr: "Kullanım Kılavuzu", en: "User Manual", es: "Manual de Usuario y Referencia Técnica" }
summary: { tr: "Atlasın arama, karşılaştırma, karar desteği, graf ve not özelliklerinin kullanım rehberi.", en: "User guide for searching, comparing, decision support, graph, and notes features.", es: "Guía completa de usuario para búsqueda, comparación, soporte de decisiones, grafo de relaciones, workspace local y scripts de inicio." }
status: reviewed
maturity: active
categories: [guide]
tags: [user-guide, manual, help, local-first, architecture]
locale: es
translationKey: user-manual
canonicalId: guide.user-manual
translationStatus: reviewed
translationMethod: human
translationReviewedBy: person.kenan-ay
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.iso-42010, source.swebok-v4]
related: [guide.project-constitution.es]
contributors:
  - personId: person.kenan-ay
    roles: [project-owner, technical-author, translator, reviewer]
qualityAttributes: [traceability, consistency, completeness, usability, local-first]
applicableDomains: [documentation, software-architecture]
---

# Manual de Usuario y Referencia Técnica — Software Architecture Atlas

Bienvenido al **Software Architecture Atlas**, una plataforma de documentación técnica, sistema de recomendación y atlas de conocimiento local-first (prioridad local), diseñado por **Kenan AY** para ingenieros de software, arquitectos de sistemas y líderes de equipo.

---

## 1. Filosofía y Arquitectura del Sistema (Local-First & Offline-First)

El atlas ha sido diseñado bajo los principios de la arquitectura **Local-First** y **Content-Driven Modular Monolith**:
- **Cero Dependencia de Servidores Centrales:** Toda la documentación, datos del glosario y motor de búsqueda (Pagefind) se ejecutan localmente en su navegador sin enviar telemetría a servidores remotos.
- **Service Worker & PWA:** Soporte completo de funcionamiento fuera de línea mediante estrategias de caché `stale-while-revalidate` y `network-first`.
- **Privacidad Total de Datos:** Sus notas personales, marcadores y registros de decisiones (ADR) se almacenan en el **IndexedDB** de su navegador local.

---

## 2. Búsqueda y Navegación en Tres Idiomas (`/tr/`, `/en/`, `/es/`)

### 2.1 Búsqueda de Texto Completo (Pagefind)
En la parte superior de cada página o en la sección de Catálogo (`/catalog/`), el motor de búsqueda en tiempo real analiza el cuerpo estático indexado:
- Búsqueda instantánea en turco, inglés y español.
- Resaltado de coincidencia exacta y accesibilidad con teclado (`Tab`, `Enter`).

### 2.2 Popovers de Glosario Automático (Auto-Glossary)
En los documentos técnicos, los términos registrados (por ejemplo, *DDD*, *WASM*, *PKCE*, *CQRS*) muestran automáticamente explicaciones y abreviaturas al pasar el cursor o enfocarse en ellos, cumpliendo con la norma **WCAG 2.2 Level AA**.

---

## 3. Matriz de Decisión y Generador de ADR (`/decision/`)

El módulo de Soporte de Decisión evalúa las métricas de su proyecto para sugerir lenguajes de programación, patrones arquitectónicos y modelos de despliegue:

1. **Entrada de Parámetros:** Seleccione el dominio (web, móvil, embebido, IA), escala de usuarios, requisitos de tiempo real, nivel de seguridad y restricciones de licencia.
2. **Ponderación de Atributos de Calidad:** Ajuste la importancia de rendimiento, seguridad, mantenibilidad, escalabilidad y costo.
3. **Exportación de Registro de Decisión (ADR):** Exporte las sugerencias calculadas como un documento Markdown estandarizado listo para incluir en su repositorio Git.

---

## 4. Grafo de Relaciones Interactivo Fuera de Línea (`/graph/`)

La vista de Grafo visualiza la red semántica entre arquitecturas, lenguajes, estándares e historia:
- **Relaciones Admitidas:** `uses`, `implements`, `extends`, `depends-on`, `suitable-for`, `defined-by`.
- **Interacción:** Arrastre nodos, acerque o aleje la vista y haga clic en un nodo para desplegar el resumen de conexiones.

---

## 5. Panel de Workspace Local y Notas (`/notes/`)

La nueva página de espacio de trabajo local (`/notes/`) permite administrar de forma centralizada todas sus anotaciones:
- **Búsqueda y Filtro por Etiquetas:** Filtre sus notas locales por palabras clave o etiquetas (*rust*, *clean-architecture*).
- **Exportación e Importación de Datos (JSON):** Realice copias de seguridad en archivos JSON para migrar sus notas entre navegadores o dispositivos.

---

## 6. Scripts de Inicio y Ejecución Local (`start.sh` / `start.bat`)

Para iniciar la aplicación en su entorno de desarrollo local con todas las verificaciones automáticas de datos:

- **Linux / macOS:**
  ```bash
  chmod +x start.sh
  ./start.sh
  ```
- **Windows:**
  ```cmd
  start.bat
  ```

El script verifica las dependencias del sistema (Node.js/npm), detecta puertos libres y ejecuta la suite de verificación de esquemas (`npm run verify`) antes de lanzar el servidor local en `http://localhost:4321`.
