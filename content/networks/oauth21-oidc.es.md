---
id: protocol.oauth21-oidc.es
type: protocol
contentProfile: architecture
title: { tr: "OAuth 2.1 ve OpenID Connect (OIDC) Mimarisi", en: "OAuth 2.1 and OpenID Connect (OIDC) Architecture", es: "Arquitectura OAuth 2.1 y OpenID Connect (OIDC)" }
summary: { tr: "Zorunlu PKCE, durumsuz JWT jetonları, Authorization Code akışı ve OIDC kimlik katmanı güvenlik mimarisi.", en: "Mandatory PKCE, stateless JWT tokens, Authorization Code Flow, and OIDC identity layer security architecture.", es: "PKCE obligatorio, tokens JWT sin estado, flujo Authorization Code y arquitectura de seguridad OIDC." }
status: reviewed
maturity: active
categories: [networks, architectures, security]
tags: [oauth21, oidc, pkce, jwt, authentication, security]
locale: es
translationKey: oauth21-oidc
canonicalId: protocol.oauth21-oidc
translationStatus: reviewed
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.rfc-editor, source.swebok-v4, source.iso-42010]
related: [architecture.cyber-security.es, architecture.zero-trust.es]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [security, confidentiality, interoperability, auditability]
applicableDomains: [web, mobile, security, enterprise, api]
---

<!-- section:definition -->
## Definición y Descripción del Problema

OAuth 2.1 es el estándar de seguridad moderno que consolida las mejores prácticas al eliminar flujos inseguros (Implicit y Resource Owner Password Credentials) y hacer obligatorio el uso de PKCE (Proof Key for Code Exchange) para todos los clientes.

OpenID Connect (OIDC) es una capa de autenticación de identidad sin estado sobre OAuth 2.1 que utiliza tokens JWT para autenticar usuarios en plataformas web y móviles.

<!-- section:components -->
## Componentes Principales

- **Authorization Server (IdP):** Proveedor de identidad centralizado que valida credenciales y emite Access Tokens e ID Tokens.
- **Client (SPA / App Móvil):** Cliente público que solicita autorización para acceder a recursos protegidos en nombre del usuario.
- **Resource Server (API Gateway / Microservicio):** Valida los tokens de acceso Bearer antes de otorgar acceso.
- **PKCE (Proof Key for Code Exchange):** Mecanismo criptográfico que evita ataques de intercepción de código de autorización.

<!-- section:data-flow -->
## Flujo de Datos y Control (Diagrama Mermaid PKCE)

```mermaid
sequenceDiagram
    autonumber
    participant User as Usuario / Navegador
    participant SPA as Single Page App (Cliente)
    participant Auth as Servidor de Autorización
    participant API as Servidor de Recursos (API)

    User->>SPA: Iniciar Sesión
    SPA->>SPA: Generar Verificador y Desafío de Código
    SPA->>Auth: Redirigir /authorize (con code_challenge)
    Auth->>User: Mostrar Formulario de Inicio
    User->>Auth: Enviar Credenciales
    Auth-->>SPA: Redirigir con Código de Autorización
    
    SPA->>Auth: POST /token (Código + Verificador)
    Auth->>Auth: Validar Desafío == SHA256(Verificador)
    Auth-->>SPA: Devolver Access Token e ID Token (JWT)
    
    SPA->>API: GET /api/user-profile (Bearer AccessToken)
    API->>API: Validar Firma y Expiración JWT
    API-->>SPA: Devolver Datos de Usuario (200 OK)
```

<!-- section:use-cases -->
## Casos de Uso y Compromisos

### Casos de Uso Principales
- **SPA y Aplicaciones Móviles:** Clientes públicos incapaces de almacenar secretos de cliente de forma segura.
- **SSO en Microservicios:** Autenticación única (Single Sign-On) centralizada entre microservicios mediante OIDC.

<!-- section:trade-offs -->
### Compromisos (Trade-offs)
- **Latencia Adicional:** El intercambio PKCE requiere una solicitud HTTP adicional al endpoint de token.
- **Revocación de JWT:** Los tokens sin estado requieren listas de revocación (JTI blacklisting) para invalidación inmediata.

<!-- section:production -->
## Desafíos de Producción y Operación

1. **Almacenamiento de Tokens:** Los tokens deben residir en memoria o galletas `HttpOnly SameSite` para evitar XSS/CSRF.
2. **Rotación de Claves (JWKS):** Los servidores de autorización deben rotar claves periódicamente; los servidores de recursos deben almacenar en caché los endpoints JWKS.

<!-- section:security -->
## Consideraciones de Seguridad

- **PKCE Obligatorio:** Forzar el método `S256` en el desafío PKCE. Se deben rechazar métodos `plain`.
- **Separación de Roles de Token:** Diferenciar estrictamente ID Token (identidad) de Access Token (autorización).

<!-- section:testing -->
## Pruebas y Validación

- Validar que las solicitudes de token sin un `code_verifier` válido devuelvan un error `400 Bad Request`.

<!-- section:observability -->
## Observabilidad

- Monitorizar intentos fallidos de autenticación, latencia de renovación de tokens y errores de firma en paneles SIEM.

<!-- section:alternatives -->
## Alternativas

- **Autenticación Basada en Sesión:** Autenticación con estado para aplicaciones monolíticas simples.
- **SAML 2.0:** Marco de federación empresarial heredado.

<!-- section:sources -->
## Fuentes

- RFC 6749 / RFC 7636 — *OAuth 2.0 & PKCE Specifications*
- OpenID Foundation — *OpenID Connect Core 1.0*
