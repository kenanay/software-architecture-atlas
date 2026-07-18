---
id: guide.user-manual.es
type: guide
title: { tr: "Kullanım Kılavuzu", en: "User Manual", es: "Manual de Usuario" }
summary: { tr: "Atlasın arama, karşılaştırma, karar desteği, graf ve not özelliklerinin kullanım rehberi.", en: "User guide for searching, comparing, decision support, graph, and notes features.", es: "Guía de usuario para buscar, comparar, soporte de decisiones, grafo y notas." }
status: reviewed
maturity: active
categories: [guide]
tags: [user-guide, manual, help]
locale: es
translationKey: user-manual
canonicalId: guide.user-manual
translationStatus: reviewed
translationMethod: human
translationReviewedBy: person.kenan-ay
version: 1.0.0
lastReviewedAt: 2026-07-18
sources: [source.iso-42010]
related: [guide.project-constitution.es]
contributors:
  - personId: person.kenan-ay
    roles: [project-owner, technical-author, translator, reviewer]
qualityAttributes: [traceability, consistency, completeness]
applicableDomains: [documentation]
---
## Introducción

Software Architecture Atlas es un sistema de referencia técnica local diseñado para desarrolladores, arquitectos e ingenieros. Esta guía explica cómo utilizar las funciones y herramientas proporcionadas en la plataforma.

## 1. Búsqueda y Filtrado de Documentos

Puede acceder rápidamente a los documentos técnicos a través de la página Catálogo:
- **Filtro de Idioma**: Filtre documentos en turco, inglés o español.
- **Filtro de Categoría**: Reduzca los documentos por guía del sistema, arquitecturas o inteligencia artificial.
- **Búsqueda de Texto Completo**: A medida que escribe, el motor Pagefind busca en el cuerpo de los documentos estáticos y proporciona coincidencias inmediatas.

## 2. Tooltips de Términos Técnicos (Popover)

Mientras lee los documentos, al pasar el cursor (`hover`), enfocar (navegación por teclado) o hacer clic en términos técnicos, se activa el popover del glosario:
- Muestra el término en inglés, turco o español, junto con la expansión de la abreviatura.
- Proporciona definiciones y referencias de fuentes.
- Los tooltips se pueden cerrar presionando `Esc` o haciendo clic en el botón de cierre.

## 3. Comparación Lado a Lado

Utilice la página `/compare/` para comparar dos perfiles:
- Seleccione dos candidatos en las casillas desplegables.
- Visualice y analice los niveles de madurez, atributos de calidad, dominios aplicables y fuentes en una sola vista.

## 4. Sistema de Soporte de Decisión

Utilice el asistente de decisión para determinar el mejor lenguaje y arquitectura para los requisitos de su proyecto:
- Ingrese el dominio de la aplicación, escala de usuarios, nivel de seguridad, límites de latencia y acceso a hardware.
- Ajuste los pesos de importancia de los requisitos de calidad (rendimiento, costo, etc.).
- Haga clic en **Descargar ADR** para exportar su **Registro de Decisión Arquitectónica (ADR)** como un archivo Markdown.

## 5. Grafo de Relaciones Fuera de Línea

La página `/graph/` muestra la red de relaciones entre los nodos del atlas:
- Arrastre y reorganice la ubicación de los nodos.
- Haga clic en un nodo para abrir un tooltip que resume todas las conexiones entrantes y salientes.

## 6. Notas Personales y Portabilidad de Datos

En la parte inferior de cada página de documento, el panel de notas personales le permite:
- Guardar notas de forma local y segura en **IndexedDB**.
- Añadir marcadores (Bookmarks) a las páginas.
- Realizar copias de seguridad con **Exportar JSON** y restaurarlas con **Importar JSON**.
