---
id: guide.user-manual.en
type: guide
title: { tr: "Kullanım Kılavuzu", en: "User Manual", es: "Manual de Usuario" }
summary: { tr: "Atlasın arama, karşılaştırma, karar desteği, graf ve not özelliklerinin kullanım rehberi.", en: "User guide for searching, comparing, decision support, graph, and notes features.", es: "Guía de usuario para buscar, comparar, soporte de decisiones, grafo y notas." }
status: reviewed
maturity: active
categories: [guide]
tags: [user-guide, manual, help]
locale: en
translationKey: user-manual
canonicalId: guide.user-manual
translationStatus: reviewed
translationMethod: human
translationReviewedBy: person.kenan-ay
version: 1.0.0
lastReviewedAt: 2026-07-18
sources: [source.iso-42010]
related: [guide.project-constitution.en]
contributors:
  - personId: person.kenan-ay
    roles: [project-owner, technical-author, translator, reviewer]
qualityAttributes: [traceability, consistency, completeness]
applicableDomains: [documentation]
---
## Introduction

Software Architecture Atlas is a Local-First technical reference system designed for developers, architects, and engineers. This guide explains how to use the features and tools provided on the platform.

## 1. Document Search and Filtering

You can quickly access technical documents via the Catalog page:
- **Language Filter**: Filter documents by Turkish, English, or Spanish.
- **Category Filter**: Refine documents by system guide, architectures, or artificial intelligence.
- **Full-Text Search**: As you start typing, the Pagefind engine searches the body of static documents and yields immediate matches.

## 2. Technical Term Tooltips (Popover)

While reading documents, hovering, focusing (keyboard navigation), or clicking technical terms triggers the glossary popover:
- Shows the term in English, Turkish, or Spanish, along with any abbreviation expansions.
- Provides definitions and source references.
- Tooltips can be dismissed by pressing `Esc` or clicking the close button.

## 3. Side-by-Side Comparison

Use the `/compare/` page to compare two profiles:
- Select two candidates from the drop-down boxes.
- View and analyze maturity levels, quality attributes, applicable domains, and sources in a single view.

## 4. Decision Support System

Use the decision wizard to determine the best language and architecture for your project requirements:
- Input application domain, scale, security level, latency limits, and hardware access.
- Adjust quality requirements (performance, cost, etc.) using weights.
- Click **Download ADR** to export your customized **Architecture Decision Record** as a Markdown file.

## 5. Offline Relationship Graph

The `/graph/` page charts the relationship network between nodes:
- Drag and rearrange node locations.
- Click a node to open a tooltip summarizing all incoming and outgoing connections.

## 6. Personal Notes and Data Portability

At the bottom of each document page, the personal notes panel allows you to:
- Save notes locally and securely in **IndexedDB**.
- Bookmark pages.
- Backup notes with **Export JSON** and restore them with **Import JSON**.
