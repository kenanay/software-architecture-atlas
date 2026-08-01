---
id: protocol.oauth21-oidc.en
type: protocol
contentProfile: architecture
title: { tr: "OAuth 2.1 ve OpenID Connect (OIDC) Mimarisi", en: "OAuth 2.1 and OpenID Connect (OIDC) Architecture", es: "Arquitectura OAuth 2.1 y OpenID Connect (OIDC)" }
summary: { tr: "Zorunlu PKCE, durumsuz JWT jetonları, Authorization Code akışı ve OIDC kimlik katmanı güvenlik mimarisi.", en: "Mandatory PKCE, stateless JWT tokens, Authorization Code Flow, and OIDC identity layer security architecture.", es: "PKCE obligatorio, tokens JWT sin estado, flujo Authorization Code y arquitectura de seguridad OIDC." }
status: reviewed
maturity: active
categories: [networks, architectures, security]
tags: [oauth21, oidc, pkce, jwt, authentication, security]
locale: en
translationKey: oauth21-oidc
canonicalId: protocol.oauth21-oidc
translationStatus: reviewed
translationMethod: original
version: 1.0.0
lastReviewedAt: 2026-08-01
sources: [source.rfc-editor, source.swebok-v4, source.iso-42010]
related: [architecture.cyber-security.en, architecture.zero-trust.en]
contributors:
  - personId: person.kenan-ay
    roles: [architecture-lead, technical-author]
qualityAttributes: [security, confidentiality, interoperability, auditability]
applicableDomains: [web, mobile, security, enterprise, api]
---

<!-- section:definition -->
## Definition and Problem Statement

OAuth 2.1 is the modern security standard that consolidates best practices by deprecating insecure grant types (Implicit flow and Resource Owner Password Credentials) while mandating Proof Key for Code Exchange (PKCE) for all clients.

OpenID Connect (OIDC) is a stateless identity authentication layer built on top of OAuth 2.1 using JSON Web Tokens (JWT) to authenticate users across web and mobile platforms.

<!-- section:components -->
## Core Components

- **Authorization Server (IdP):** Centralized identity provider validating credentials and issuing Access Tokens and ID Tokens.
- **Client (SPA / Mobile App):** Public client requesting authorization to access protected resources on behalf of the user.
- **Resource Server (API Gateway / Microservice):** Validates incoming Bearer Access Tokens before granting resource access.
- **PKCE (Proof Key for Code Exchange):** Cryptographic code verifier/challenge pair mitigating authorization code interception attacks.

<!-- section:data-flow -->
## Data & Control Flow (PKCE Mermaid Diagram)

```mermaid
sequenceDiagram
    autonumber
    participant User as User / Browser
    participant SPA as Single Page App (Client)
    participant Auth as Authorization Server
    participant API as Resource Server (API)

    User->>SPA: Click Login
    SPA->>SPA: Generate Code Verifier & Challenge
    SPA->>Auth: Redirect /authorize (with code_challenge)
    Auth->>User: Display Login Form
    User->>Auth: Submit Credentials
    Auth-->>SPA: Redirect with Authorization Code
    
    SPA->>Auth: POST /token (Code + Code Verifier)
    Auth->>Auth: Verify Challenge == SHA256(Verifier)
    Auth-->>SPA: Return Access Token & ID Token (JWT)
    
    SPA->>API: GET /api/user-profile (Bearer AccessToken)
    API->>API: Validate JWT Signature & Expiry
    API-->>SPA: Return User Data (200 OK)
```

<!-- section:use-cases -->
## Use Cases and Trade-offs

### Primary Use Cases
- **SPA and Mobile Applications:** Public clients unable to securely store client secrets in client environments.
- **Microservices SSO:** Centralized Single Sign-On (SSO) across distributed microservices using OIDC identity tokens.

<!-- section:trade-offs -->
### Architectural Trade-offs
- **Additional Network Round-trips:** PKCE authorization code exchange requires an extra token endpoint request.
- **Stateless Revocation:** Immediate JWT revocation requires centralized token revocation lists (JTI blacklisting).

<!-- section:production -->
## Production & Operational Considerations

1. **Token Storage:** Access tokens should reside in memory or `HttpOnly SameSite` cookies to prevent XSS/CSRF compromise.
2. **Key Rotation (JWKS):** IdPs must periodically rotate signing keys; Resource Servers should cache JWKS endpoints.

<!-- section:security -->
## Security Concerns

- **Mandatory PKCE:** Enforce `S256` transformation for PKCE challenges. Plain challenge methods must be rejected.
- **Token Confusion:** Strictly segregate ID Token (identity scope) from Access Token (authorization scope).

<!-- section:testing -->
## Testing and Validation

- Validate that authorization code redemption requests without a valid `code_verifier` fail with `400 Bad Request`.

<!-- section:observability -->
## Observability

- Track failed authentication attempts, token refresh latency, and signature validation errors in SIEM dashboards.

<!-- section:alternatives -->
## Alternatives

- **Session-Based Auth:** Traditional stateful authentication for single monolithic applications.
- **SAML 2.0:** Legacy enterprise federation framework.

<!-- section:sources -->
## Sources

- RFC 6749 / RFC 7636 — *OAuth 2.0 & PKCE Specifications*
- OpenID Foundation — *OpenID Connect Core 1.0*
