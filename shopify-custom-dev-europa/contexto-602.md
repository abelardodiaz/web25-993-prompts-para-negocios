# Contexto Tecnico: Proyecto 602 (Shopify-WooCommerce Link)

## Resumen del Proyecto

El proyecto 602 (`web26-602-shopify-woocommerce-link`) es una integracion bidireccional Shopify<->WooCommerce que permite sincronizar pedidos y mostrar informacion de fulfillment en el checkout de Shopify.

**Estado:** Productivo
**Ubicacion:** `C:\Users\abela\prweb\web26-602-shopify-woocommerce-link`

---

## Experiencia Tecnica Documentada

### Stack Tecnologico Dominado

| Componente | Tecnologia | Nivel |
|------------|------------|-------|
| Backend | Node.js + TypeScript | Productivo |
| Base de Datos | PostgreSQL (multi-tenant) | Productivo |
| Shopify Admin API | GraphQL | Productivo |
| Shopify Extensions | React + @shopify/ui-extensions | Productivo |
| Autenticacion | OAuth 2.0 + Session Tokens | Productivo |
| Webhooks | HMAC-SHA256 validation | Productivo |

### Capacidades Comprobadas

1. **Custom App Development**
   - Creacion de apps privadas para Shopify
   - Manejo de scopes y permisos
   - OAuth flow completo

2. **Checkout UI Extensions**
   - Thank-you page customization
   - Order status page customization
   - React components con @shopify/ui-extensions

3. **GraphQL Admin API**
   - Queries y mutations
   - Metafields management
   - Order/Customer queries

4. **Webhooks**
   - Registro y validacion HMAC-SHA256
   - Protected Customer Data access
   - Retry handling

5. **Arquitectura Multi-Tenant**
   - Schema por tenant en PostgreSQL
   - Aislamiento de datos
   - Escalabilidad horizontal

---

## Lecciones Aprendidas (Hard-Won Knowledge)

### 1. Dev Stores vs Partner Stores

**Problema:** Errores al instalar app en Partner stores
**Solucion:** Usar Development Stores para testing, Partner Stores tienen restricciones

### 2. APIs por Target de Extension

**Problema:** `useOrder()` no funciona en Thank You page
**Solucion:**
- Thank You: usar `useOrder()` de `@shopify/ui-extensions-react/checkout`
- Order Status: usar API diferente
- Cada target tiene su propio set de APIs disponibles

### 3. Versionamiento Estricto npm

**Problema:** Breaking changes entre versiones de `@shopify/ui-extensions`
**Solucion:** Pinear versiones exactas, no usar `^` ni `~`

### 4. Protected Customer Data (CRITICO)

**Problema:** Webhooks de orders no incluian email/telefono
**Solucion:**
1. Solicitar "Protected Customer Data Access" en Partner Dashboard
2. Esperar aprobacion (puede tomar dias)
3. Webhook incluye datos completos solo despues de aprobacion

### 5. Shopify Flow Limitaciones

**Problema:** Automatizaciones con HTTP Request no funcionaban
**Solucion:**
- Shopify Flow NO tiene nodo HTTP Request en planes Basic
- Solo disponible en Plus o con Shopify Flow app (separada)
- Workaround: Usar webhooks directamente

### 6. Metafields Visibilidad

**Problema:** Extension no podia leer metafields creados via API
**Solucion:**
- Metafields deben ser `PUBLIC_READ` para extensions
- Usar metafieldDefinitionCreate con access: `{ storefront: PUBLIC_READ }`

### 7. Wait Pages para Webhooks Lentos

**Problema:** Checkout extension necesita datos que llegan via webhook (async)
**Solucion:**
- Mostrar "wait page" con polling
- Endpoint de status que extension consulta cada 2-3 segundos
- Timeout de 30 segundos con fallback gracioso

---

## Documentacion Disponible

| Documento | Contenido | Valor |
|-----------|-----------|-------|
| `docs/602-extension-thank-you-button.md` | 6 horas debugging checkout extensions | Alto |
| `docs/602-multi-tenant-implementation.md` | Arquitectura PostgreSQL multi-schema | Alto |
| `docs/2026-01-23-debates-seguridad/` | Evaluacion infraestructura productiva | Medio |
| `CLAUDE.md` | Instrucciones proyecto | Medio |
| `CHANGELOG.md` | Historia de cambios | Bajo |

---

## Infraestructura Productiva

### Actual
- Server: Ubuntu 24.04 (Server003)
- DB: PostgreSQL 16
- Runtime: Node.js 20 LTS
- Process Manager: PM2

### Capacidad Disponible
- Multi-tenant: Soporta N clientes con schema isolation
- Webhooks: Endpoint listo para recibir eventos Shopify
- Storage: Suficiente para expansion

---

## Ventaja Competitiva vs Agencia Generica

| Aspecto | Agencia Generica | Nosotros (Post-602) |
|---------|------------------|---------------------|
| Checkout Extensions | "Podemos investigarlo" | Codigo productivo |
| Protected Customer Data | "Que es eso?" | Lo hemos solicitado y usado |
| Webhooks HMAC | Copian de docs | Lo debuggeamos en produccion |
| Multi-tenant | "Hacemos custom" | Schema funcionando |
| Tiempo estimado | "4-6 semanas" | 1-2 semanas (base lista) |

---

## Aplicabilidad a Europa

### Lo que podemos reusar directamente:
1. OAuth flow (identico para cualquier region)
2. GraphQL queries (API global)
3. Arquitectura multi-tenant (escala a N clientes)
4. Webhook infrastructure (solo cambiar handlers)

### Lo que necesita adaptacion:
1. Compliance features (e-invoicing, VAT)
2. Integraciones locales (ERPs europeos, carriers)
3. Idiomas (UI multi-idioma)
4. Legal (GDPR, terminos por pais)

---

## Metricas del Proyecto 602

| Metrica | Valor |
|---------|-------|
| Tiempo total desarrollo | ~3 semanas |
| Tiempo debugging extensions | 6+ horas (documentado) |
| Lineas de codigo | ~2,500 |
| Bugs en produccion | 0 (hasta ahora) |
| Downtime | 0 |

---

*Documento generado: 2026-02-04*
*Fuente: Proyecto web26-602-shopify-woocommerce-link*
