---
id: architecture.service-mesh.es
type: architecture
contentProfile: architecture
title: { tr: "Service Mesh Mimarisi", en: "Service Mesh Architecture", es: "Arquitectura Service Mesh" }
summary: { tr: "Servisler arası iletişimi sidecar proxy'ler ve kontrol düzlemi ile yöneten altyapı katmanı.", en: "An infrastructure layer managing service-to-service communication via sidecar proxies and a control plane.", es: "Capa de infraestructura que gestiona la comunicación entre servicios mediante proxies sidecar y plano de control." }
status: reviewed
maturity: active
categories: [architectures, networks, server-cloud]
tags: [service-mesh, istio, envoy, mtls, observability]
locale: es
translationKey: service-mesh
canonicalId: architecture.service-mesh
translationStatus: reviewed
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.docs.istio, source.docs.envoy, source.swebok-v4]
related: [architecture.microservices.es, architecture.zero-trust.es]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [security, observability, resilience, maintainability]
applicableDomains: [distributed-systems, cloud-native, enterprise]
---

<!-- section:definition -->
## Definición y Descripción del Problema

Una Service Mesh (Malla de Servicios) es una capa de infraestructura dedicada que gestiona la comunicación entre servicios (este-oeste), el enrutamiento de tráfico, la seguridad y la observabilidad sin modificar el código de la aplicación.

A medida que las arquitecturas de microservicios crecen, incluir cifrado mTLS, políticas de reintento y trazabilidad en cada código genera duplicación y fragmentación. Una Service Mesh delega estas funciones a proxies de forma transparente.

<!-- section:components -->
## Componentes Principales

- **Plano de Datos (Data Plane):** Red de **Proxies Sidecar** (ej. Envoy) desplegados junto a los contenedores que interceptan todo el tráfico.
- **Plano de Control (Control Plane):** Componente de gestión centralizada (ej. Istiod) que configura los proxies y distribuye certificados mTLS.
- **Gateways Ingress / Egress:** Proxies perimetrales que gestionan el tráfico entrante y saliente del clúster.

<!-- section:data-flow -->
## Flujo de Datos y Control (Diagrama Mermaid)

```mermaid
flowchart TD
    subgraph ControlPlane ["Plano de Control (Istio / Control Plane)"]
        CP[Istiod / Controlador de Certificados y Políticas]
    end

    subgraph ServiceA ["Pod / Nodo A"]
        AppA[Servicio de Pedidos] <--> ProxyA[Proxy Sidecar Envoy A]
    end

    subgraph ServiceB ["Pod / Nodo B"]
        ProxyB[Proxy Sidecar Envoy B] <--> AppB[Servicio de Pagos]
    end

    CP -- Configuración y Certificados mTLS --> ProxyA
    CP -- Configuración y Certificados mTLS --> ProxyB
    
    ProxyA == Túnel Cifrado mTLS ==> ProxyB
```

<!-- section:use-cases -->
## Casos de Uso y Compromisos

### Casos de Uso Principales
- **Arquitecturas de Confianza Cero (Zero Trust):** Requerir cifrado mTLS estricto y verificación de identidad en todas las llamadas internas.
- **Ingeniería de Tráfico Avanzada:** Realizar despliegues Canary, Blue-Green e inyección de fallos de forma dinámica.

<!-- section:trade-offs -->
### Compromisos (Trade-offs)
- **Latencia Adicional:** La intercepción de paquetes mediante proxies sidecar añade un margen de milisegundos por llamada.
- **Consumo de Recursos:** Ejecutar contenedores sidecar dedicados consume CPU y memoria adicional en cada pod.

<!-- section:production -->
## Desafíos Operativos y de Producción

1. **Service Mesh sin Sidecar (Ambient):** Evaluar arquitecturas basadas en eBPF a nivel de nodo para eliminar la sobrecarga de sidecars por pod.
2. **Rotación Automática de Certificados:** Garantizar la renovación automática de certificados mTLS (SPIFFE/SPIRE) sin interrupción.

<!-- section:security -->
## Consideraciones de Seguridad

- Aplicar el modo mTLS estricto y reglas de autorización basadas en SPIFFE, bloqueando conexiones en texto plano.

<!-- section:testing -->
## Pruebas y Validación

- Realizar pruebas de Ingeniería de Caos (ej. Chaos Mesh) para inyectar latencia o pérdida de paquetes a nivel de proxy.

<!-- section:observability -->
## Observabilidad

- Visualizar mapas de topología en vivo y estados de cifrado mTLS mediante integraciones con Kiali y Jaeger.

<!-- section:alternatives -->
## Alternativas

- **Librerías a Nivel de Aplicación (Netflix Ribbon/Hystrix):** Enfoque heredado que requiere mantenimiento de SDKs para cada lenguaje.

<!-- section:sources -->
## Fuentes

- Istio Service Mesh Official Documentation
- Envoy Proxy Architecture Specification
