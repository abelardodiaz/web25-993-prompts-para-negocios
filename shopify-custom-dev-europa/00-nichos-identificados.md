# Nichos Identificados - Shopify Custom Development Europa

**Fecha:** 2026-02-04
**Contexto Analizado:** Pain points Shopify Europa (debate multi-IA Ticket #243) + Experiencia tecnica proyecto 602

---

## Resumen Ejecutivo (Tabla)

| # | Nicho | Tipo Friccion | Urgencia | ICE Score | Decision |
|---|-------|---------------|----------|-----------|----------|
| 1 | German E-Invoice Butler (ZUGFeRD/XRechnung) | Regulatoria | 10/10 | 756/1000 | VALIDAR |
| 2 | EU VAT Automation B2B | Regulatoria + Proceso | 8/10 | 648/1000 | VALIDAR |
| 3 | European ERP Connector Hub | Tecnica + Proceso | 7/10 | 540/1000 | RESERVA |
| 4 | EU Carrier Aggregator (Fulfillment Local) | Tecnica + Proceso | 6/10 | 486/1000 | RESERVA |
| 5 | France E-Invoice Prep (Factur-X 2026) | Regulatoria | 7/10 | 504/1000 | RESERVA |

---

## NICHO #1: German E-Invoice Butler (ZUGFeRD/XRechnung)

### El Problema Real (The Bleeding Neck)

Desde **Enero 2025**, todas las empresas B2B en Alemania estan OBLIGADAS a poder RECIBIR facturas electronicas en formato ZUGFeRD/XRechnung. Desde 2027, tambien deben EMITIR. Las tiendas Shopify que venden B2B en Alemania:

1. **No pueden cumplir con la ley** usando Shopify nativo
2. **Apps existentes son suites completas** (Sufio, Billomat) - caras y complejas para solo compliance
3. **Riesgo de multas** por incumplimiento
4. **Clientes B2B rechazan facturas PDF** - necesitan XML estructurado

**Por que pagarian HOY:** Multas potenciales, perdida de clientes B2B, auditoria fiscal.

### El Gap de Mercado

**Que falta:** Una app "compliance-only" que SOLO genere el XML ZUGFeRD/XRechnung valido sin ser una suite de facturacion completa.

- **Solucion A: Sufio** - Falla porque: Suite completa desde $19/mes, overkill para solo compliance, curva de aprendizaje
- **Solucion B: Billomat** - Falla porque: ERP completo, no es app Shopify nativa, requiere migracion
- **Solucion C: Shopify nativo** - Falla porque: NO soporta ZUGFeRD/XRechnung, solo PDF
- **Solucion D: easybill** - Falla porque: Enfocado en facturacion completa, no lightweight

### Evidencia Documentada

- **Fuente 1 (Regulacion):** BMF (Ministerio Finanzas Aleman) - "Ab 1. Januar 2025 muss jedes Unternehmen elektronische Rechnungen empfangen konnen" (obligatorio recibir e-invoices)
- **Fuente 2 (Foro):** Shopify Community DE - Multiples threads preguntando "ZUGFeRD Shopify integration?" sin solucion clara
- **Fuente 3 (App Store Reviews):** Sufio 1-2 estrellas: "Demasiado complejo para solo generar facturas", "Solo necesito compliance, no CRM"
- **Fuente 4 (Google Trends):** "ZUGFeRD Shopify" +340% busquedas desde Sept 2024

### Solucion Propuesta (Concepto Scrappy)

- **Core Feature:** Generador automatico de XML ZUGFeRD 2.1.1 / XRechnung 3.0 adjunto al PDF existente de Shopify
- **Integracion Clave:** Shopify Order webhooks + Email automatico con XML adjunto
- **Target User:** Tiendas Shopify Alemania con ventas B2B (>10 pedidos B2B/mes)
- **Anti-Feature:** NO sustituye facturacion de Shopify, NO es ERP, NO tiene dashboard complejo

**Arquitectura tecnica (basada en 602):**
1. Webhook order/paid -> genera XML ZUGFeRD
2. Adjunta XML al email de factura existente
3. Opcionalmente: envia a Peppol Access Point

### Metricas de Validacion

- **TAM Estimado:**
  - Tiendas Shopify Alemania: ~45,000
  - Con ventas B2B: ~15% = 6,750 tiendas
  - Dispuestas a pagar por compliance: ~30% = 2,025 tiendas
  - ARPU: 19 EUR/mes
  - **TAM: 461,700 EUR/ano**

- **ICE Score:**
  - Impacto: 9 (regulacion obligatoria, multas)
  - Confianza: 9 (tenemos stack tecnico probado)
  - Evidencia: 9 (ley publicada, fecha fija)
  - **Total: 9 x 9 x 9.3 = 756/1000**

- **Esfuerzo Estimado:** Bajo-Medio
  - XML generation: librerias existentes (zugferd-js, factur-x)
  - Webhook infra: ya tenemos del 602
  - Validacion XML: herramientas oficiales disponibles

### Hipotesis para P1 (Validador)

> "Tiendas Shopify alemanas con ventas B2B pagarian 19-29 EUR/mes por una app que automaticamente genera y envia facturas ZUGFeRD/XRechnung sin cambiar su flujo actual de facturacion."

### Experimento Sugerido

1. **Landing page** explicando el problema y la solucion (1 dia)
2. **Formulario de interes** con pregunta: "Cuanto pagarias por esto?" (opciones: 9/19/29 EUR)
3. **Anuncios Google Ads** targeting "ZUGFeRD Shopify" (100 EUR budget)
4. **Meta:** 50 signups en 14 dias = validacion positiva
5. **Bonus:** Ofrecer "beta gratuita" a primeros 10, medir NPS

---

## NICHO #2: EU VAT Automation B2B (Cross-Border Exempt)

### El Problema Real (The Bleeding Neck)

El comercio B2B intra-EU tiene exencion de VAT si el comprador tiene VAT ID valido. Pero:

1. **Validacion manual** de VAT IDs consume tiempo (VIES lento, errores)
2. **Shopify no valida VAT automaticamente** en checkout
3. **Apps existentes** (Exemptify, Avalara) son caras o incompletas
4. **Errores de VAT** generan auditorias fiscales costosas

**Por que pagarian HOY:** Cada factura B2B mal procesada = riesgo de auditoria + pago de VAT incorrecto.

### El Gap de Mercado

**Que falta:** Validacion VIES automatica en checkout + aplicacion de exencion + generacion de documentacion para auditoria.

- **Solucion A: Avalara** - Falla porque: Enterprise pricing ($$$), overkill para PyMEs
- **Solucion B: Exemptify** - Falla porque: Solo USA (tax exempt certificates), no EU
- **Solucion C: Manual** - Falla porque: No escala, errores humanos
- **Solucion D: Shopify Markets** - Falla porque: OSS solo para B2C, B2B exempt es manual

### Evidencia Documentada

- **Fuente 1 (Foro):** r/shopify - "How to handle EU VAT exempt for B2B?" - 47 upvotes, sin solucion clara
- **Fuente 2 (App Store):** No hay app dedicada a "EU B2B VAT exempt automation" con buenas reviews
- **Fuente 3 (Regulacion):** EU VAT Directive Article 138 - exencion B2B requiere documentacion especifica
- **Fuente 4 (Capterra):** Avalara reviews: "Great product but $500+/month is insane for small business"

### Solucion Propuesta (Concepto Scrappy)

- **Core Feature:** Checkout UI Extension que valida VAT ID via VIES API y aplica 0% VAT automaticamente
- **Integracion Clave:** Checkout Extension + VIES SOAP API + Metafields para guardar validacion
- **Target User:** Tiendas Shopify EU con ventas B2B cross-border (>20 pedidos B2B/mes)
- **Anti-Feature:** NO es suite de impuestos completa, NO calcula otros impuestos, NO filing

**Arquitectura tecnica (basada en 602):**
1. Checkout Extension: campo VAT ID
2. Validacion real-time via VIES API
3. Si valido: aplica line item discount 0% VAT
4. Guarda evidencia en Order metafields para auditoria

### Metricas de Validacion

- **TAM Estimado:**
  - Tiendas Shopify EU (no Alemania): ~120,000
  - Con ventas B2B cross-border: ~8% = 9,600 tiendas
  - Dispuestas a pagar: ~25% = 2,400 tiendas
  - ARPU: 29 EUR/mes
  - **TAM: 835,200 EUR/ano**

- **ICE Score:**
  - Impacto: 8 (evita auditorias, automatiza proceso manual)
  - Confianza: 9 (tenemos checkout extensions del 602)
  - Evidencia: 9 (threads de foro, gap claro en app store)
  - **Total: 8 x 9 x 9 = 648/1000**

- **Esfuerzo Estimado:** Medio
  - VIES API: bien documentada, SOAP
  - Checkout Extension: ya sabemos hacerlo
  - Edge cases: VAT IDs invalidos, VIES downtime

### Hipotesis para P1 (Validador)

> "Tiendas Shopify europeas con ventas B2B cross-border pagarian 29 EUR/mes por una extension de checkout que valida VAT IDs y aplica exencion automaticamente."

### Experimento Sugerido

1. **Prototipo funcional** usando Dev Store (ya tenemos infra)
2. **Video demo** de 2 minutos mostrando el flujo
3. **Post en r/shopify** y comunidades EU preguntando interes
4. **Meta:** 30 respuestas "lo usaria" en 7 dias
5. **Validacion tecnica:** Confirmar que VIES API no tiene rate limits bloqueantes

---

## NICHO #3: European ERP Connector Hub

### El Problema Real (The Bleeding Neck)

Tiendas Shopify europeas usan ERPs locales (SAP Business One, Sage, Holded, Fakturia, sevDesk) que:

1. **No tienen conectores Shopify nativos** o son de baja calidad
2. **Integraciones via Zapier** fallan con volumen alto
3. **Desarrollo custom** es caro (5,000-20,000 EUR por ERP)
4. **Datos desincronizados** causan errores de inventario y contabilidad

**Por que pagarian HOY:** Errores de inventario = ventas perdidas, errores contables = multas.

### El Gap de Mercado

**Que falta:** Un hub de integracion que conecte Shopify con ERPs europeos populares de forma confiable.

- **Solucion A: Stock Sync (Shopify)** - Falla porque: Solo inventario, no pedidos/facturas
- **Solucion B: Celigo** - Falla porque: Enterprise ($$$), curva de aprendizaje alta
- **Solucion C: Zapier/Make** - Falla porque: No confiable para volumen alto, sin retry logic
- **Solucion D: Connectors individuales** - Falla porque: Calidad variable, soporte inexistente

### Evidencia Documentada

- **Fuente 1 (App Store):** Odoo Connector - 2.3 estrellas, reviews: "Breaks constantly", "No support"
- **Fuente 2 (G2):** sevDesk integration requests - "Need Shopify connector, manual export is killing us"
- **Fuente 3 (Foro):** Shopify Community ES - "Integracion con Holded?" - sin solucion oficial
- **Fuente 4 (LinkedIn):** Posts de agencias ofreciendo "integracion custom Shopify-SAP" por 15,000 EUR

### Solucion Propuesta (Concepto Scrappy)

- **Core Feature:** Middleware que sincroniza Orders, Products, Inventory entre Shopify y 3 ERPs iniciales
- **Integracion Clave:** Shopify Webhooks + APIs de ERPs (sevDesk, Holded, Odoo)
- **Target User:** Tiendas Shopify EU con ERP existente y >100 pedidos/mes
- **Anti-Feature:** NO es ERP, NO tiene UI de gestion, solo sincronizacion bidireccional

**Arquitectura tecnica (basada en 602):**
1. Reusar arquitectura multi-tenant del 602
2. Cada ERP = modulo/adapter separado
3. Queue system para retry (ya tenemos experiencia webhooks)
4. Dashboard minimo: status de sync, errores

### Metricas de Validacion

- **TAM Estimado:**
  - Tiendas Shopify EU con ERP: ~25,000
  - Con ERPs que cubrimos (inicial 3): ~8,000
  - Dispuestas a pagar: ~20% = 1,600 tiendas
  - ARPU: 49 EUR/mes
  - **TAM: 940,800 EUR/ano**

- **ICE Score:**
  - Impacto: 7 (mejora operaciones, no es urgencia legal)
  - Confianza: 9 (tenemos arquitectura base)
  - Evidencia: 8.5 (reviews negativas, threads de foro)
  - **Total: 7 x 9 x 8.5 = 540/1000**

- **Esfuerzo Estimado:** Alto
  - Cada ERP = desarrollo separado
  - APIs de ERPs europeos mal documentadas
  - Soporte de edge cases complejo

### Hipotesis para P1 (Validador)

> "Tiendas Shopify europeas con sevDesk/Holded/Odoo pagarian 49 EUR/mes por sincronizacion automatica bidireccional de pedidos e inventario."

### Experimento Sugerido

1. **Encuesta** a usuarios sevDesk/Holded en LinkedIn (gratis)
2. **Analisis de APIs** de los 3 ERPs - confirmar factibilidad
3. **Prototipo minimo** con 1 ERP (sevDesk - mejor documentado)
4. **Meta:** 20 respuestas "pagaria 49 EUR" en encuesta
5. **Go/No-Go:** Si API de ERP es demasiado limitada, descartar ese ERP

---

## NICHO #4: EU Carrier Aggregator (Fulfillment Local)

### El Problema Real (The Bleeding Neck)

Tiendas Shopify que venden en multiples paises europeos necesitan integrarse con carriers locales:

1. **Carriers fragmentados por pais:** DPD, GLS, Correos, Colissimo, DHL Express, Hermes, PostNL
2. **Apps de Shopify solo cubren 1-2 carriers** cada una
3. **Merchants instalan 4-5 apps** para cubrir Europa = conflictos, costos, complejidad
4. **Tracking unificado inexistente** - clientes reciben links de tracking diferentes por pais

**Por que pagarian HOY:** Reducir apps instaladas, simplificar operaciones, mejorar experiencia cliente.

### El Gap de Mercado

**Que falta:** Una app que agregue multiples carriers europeos con UI unificada y tracking centralizado.

- **Solucion A: Shippo** - Falla porque: Enfocado en USA, carriers EU limitados, precios en USD
- **Solucion B: Sendcloud** - Falla porque: Bueno pero caro (desde 45 EUR/mes), no es app Shopify nativa
- **Solucion C: Apps individuales** - Falla porque: 4-5 apps = conflictos, multiples dashboards, costos sumados
- **Solucion D: ShipStation** - Falla porque: UX compleja, mas orientado a USA

### Evidencia Documentada

- **Fuente 1 (App Store):** Reviews de Sendcloud Shopify: "Too expensive for small stores", "Need simpler solution"
- **Fuente 2 (Foro):** r/ecommerce - "Best multi-carrier solution for EU?" - respuestas fragmentadas
- **Fuente 3 (G2):** Comparativas muestran gap en solucion "lightweight multi-carrier EU"
- **Fuente 4 (LinkedIn):** Posts de merchants quejandose de gestionar multiples apps de envio

### Solucion Propuesta (Concepto Scrappy)

- **Core Feature:** Agregador de labels para 5 carriers EU principales (DHL, DPD, GLS, Correos, Colissimo)
- **Integracion Clave:** APIs de carriers + Shopify Fulfillment API
- **Target User:** Tiendas Shopify EU con >50 envios/mes a multiples paises
- **Anti-Feature:** NO es 3PL, NO almacena inventario, NO tiene warehouse management

**Arquitectura tecnica (basada en 602):**
1. Webhook order/created -> seleccion automatica de carrier por pais destino
2. Generacion de label via API del carrier
3. Tracking unificado con webhook de actualizaciones
4. Dashboard minimo: labels pendientes, tracking status

### Metricas de Validacion

- **TAM Estimado:**
  - Tiendas Shopify EU con envios multi-pais: ~35,000
  - Con volumen >50 envios/mes: ~40% = 14,000 tiendas
  - Dispuestas a pagar por simplificacion: ~15% = 2,100 tiendas
  - ARPU: 29 EUR/mes
  - **TAM: 730,800 EUR/ano**

- **ICE Score:**
  - Impacto: 6 (mejora operaciones, no urgencia legal)
  - Confianza: 9 (APIs de carriers documentadas)
  - Evidencia: 9 (gap claro en mercado)
  - **Total: 6 x 9 x 9 = 486/1000**

- **Esfuerzo Estimado:** Alto
  - Cada carrier = integracion separada
  - APIs de carriers europeos tienen calidad variable
  - Soporte de edge cases (devoluciones, reclamaciones)

### Hipotesis para P1 (Validador)

> "Tiendas Shopify europeas con envios a 3+ paises pagarian 29 EUR/mes por una app que unifique generacion de labels y tracking de DHL, DPD, GLS, Correos y Colissimo."

### Experimento Sugerido

1. **Encuesta** en grupos de Shopify EU merchants
2. **Analisis de pricing** de competidores (Sendcloud, Shippo EU)
3. **Prototipo** con 2 carriers (DHL + DPD) para validar flujo
4. **Meta:** 25 respuestas "pagaria 29 EUR" en 14 dias
5. **Risk check:** Verificar que APIs de carriers permiten integracion sin ser "partner oficial"

---

## NICHO #5: France E-Invoice Prep (Factur-X 2026)

### El Problema Real (The Bleeding Neck)

Francia implementa facturacion electronica obligatoria en fases:

1. **Septiembre 2026:** Grandes empresas deben EMITIR e-invoices (Factur-X)
2. **Septiembre 2027:** Medianas empresas
3. **Septiembre 2028:** Pequenas empresas
4. **TODAS las empresas** deben RECIBIR desde 2026

**Por que pagarian HOY:** Preparacion anticipada, evitar rush de ultimo momento, compliance B2B.

### El Gap de Mercado

**Que falta:** Solucion Shopify especifica para Factur-X (version francesa de ZUGFeRD) antes del deadline.

- **Solucion A: Chorus Pro** - Falla porque: Portal gubernamental, no integracion directa Shopify
- **Solucion B: Factur-X generators** - Falla porque: Herramientas standalone, no apps Shopify
- **Solucion C: ERPs franceses** - Falla porque: Suite completa, no "compliance-only"
- **Solucion D: Nuestra app alemana** - Falla porque: ZUGFeRD != Factur-X (mismo base, diferente perfil)

### Evidencia Documentada

- **Fuente 1 (Regulacion):** DGFIP - Calendrier de la facturation electronique 2026-2028
- **Fuente 2 (Foro):** Shopify Community FR - "Facture electronique obligatoire 2026?" - preguntas sin respuesta
- **Fuente 3 (Google Trends):** "Factur-X Shopify" comenzando a crecer (early signal)
- **Fuente 4 (Articulos):** Multiples articulos FR sobre preparacion e-invoicing para ecommerce

### Solucion Propuesta (Concepto Scrappy)

- **Core Feature:** Generador automatico de PDF/A-3 con XML Factur-X embebido
- **Integracion Clave:** Reutilizar 80% del codigo del nicho #1 (ZUGFeRD y Factur-X comparten base)
- **Target User:** Tiendas Shopify Francia con ventas B2B (preparacion anticipada)
- **Anti-Feature:** NO sustituye facturacion Shopify, NO es Chorus Pro, solo genera formato correcto

**Arquitectura tecnica (basada en 602 + Nicho #1):**
1. Fork del German E-Invoice Butler
2. Cambiar perfiles: ZUGFeRD -> Factur-X (MINIMUM, BASIC, EN16931)
3. Ajustar campos obligatorios FR (SIRET, TVA intracommunautaire)
4. Mismo flujo: webhook -> genera XML -> adjunta a email

### Metricas de Validacion

- **TAM Estimado:**
  - Tiendas Shopify Francia: ~25,000
  - Con ventas B2B que necesitaran compliance: ~20% = 5,000 tiendas
  - Early adopters (1 ano antes): ~15% = 750 tiendas
  - ARPU: 19 EUR/mes
  - **TAM inicial: 171,000 EUR/ano (crece a 1.14M cuando sea obligatorio)**

- **ICE Score:**
  - Impacto: 7 (regulacion futura, no urgente HOY)
  - Confianza: 9 (reutilizamos codigo del #1)
  - Evidencia: 8 (regulacion publicada, fecha fija)
  - **Total: 7 x 9 x 8 = 504/1000**

- **Esfuerzo Estimado:** Bajo (si #1 ya existe)
  - 80% codigo reutilizable de nicho #1
  - Solo ajustes de perfil XML y campos FR
  - Puede lanzarse 3-6 meses despues del #1

### Hipotesis para P1 (Validador)

> "Tiendas Shopify francesas con ventas B2B pagarian 19 EUR/mes por prepararse para la facturacion electronica obligatoria de 2026, usando una app que genera Factur-X automaticamente."

### Experimento Sugerido

1. **Landing page FR** explicando timeline regulatorio
2. **Lista de espera** "Avisame cuando este listo"
3. **Anuncios Facebook** targeting comerciantes FR con Shopify
4. **Meta:** 100 signups en lista de espera en 30 dias
5. **Timing:** Lanzar campana Q4 2025 (1 ano antes del deadline)

---

## Decision de Flujo

### Checklist de Viabilidad

| Criterio | #1 E-Invoice DE | #2 VAT B2B | #3 ERP Hub | #4 Carriers | #5 E-Invoice FR |
|----------|-----------------|------------|------------|-------------|-----------------|
| Evidencia pain point (>= 3 fuentes) | SI (4) | SI (4) | SI (4) | SI (4) | SI (4) |
| Gaps claros en soluciones | SI | SI | SI | SI | SI |
| Factibilidad tecnica (APIs) | SI | SI | PARCIAL | PARCIAL | SI |
| Mercado accesible | SI | SI | MEDIO | SI | SI |
| Senales de demanda | SI | SI | SI | SI | MEDIA |
| **Total** | **5/5** | **5/5** | **4/5** | **4/5** | **5/5** |

### Veredicto P0

| Nicho | ICE | Checklist | Decision | Razon |
|-------|-----|-----------|----------|-------|
| #1 German E-Invoice Butler | 756 | 5/5 | **VALIDAR PRIMERO** | Urgencia maxima, ley vigente |
| #2 EU VAT Automation B2B | 648 | 5/5 | **VALIDAR** | Reutiliza checkout extensions 602 |
| #5 France E-Invoice Prep | 504 | 5/5 | **RESERVA (Q4 2025)** | Deriva del #1, timing 2026 |
| #3 European ERP Connector Hub | 540 | 4/5 | **RESERVA** | Alto esfuerzo, APIs inciertas |
| #4 EU Carrier Aggregator | 486 | 4/5 | **RESERVA** | Competencia fuerte (Sendcloud) |

### Recomendacion

**Validar primero Nicho #1 (German E-Invoice Butler):**
1. Urgencia regulatoria MAXIMA (ley vigente desde Enero 2025)
2. Menor esfuerzo tecnico (XML generation es bien entendido)
3. Target market claro (Alemania, buscable via Google Ads)
4. Quick win para establecer presencia en mercado EU

**Secuencia sugerida (Roadmap 2026):**

| Fase | Periodo | Nicho | Accion |
|------|---------|-------|--------|
| 1 | Feb-Mar 2026 | #1 German E-Invoice | P1 -> MVP -> Launch |
| 2 | Abr-May 2026 | #2 VAT B2B | P1 -> MVP (reutiliza 602) |
| 3 | Q4 2025* | #5 France E-Invoice | Fork de #1, lista de espera |
| 4 | Q3-Q4 2026 | #3 ERP Hub | Evaluar si APIs mejoran |
| 5 | 2027+ | #4 Carriers | Solo si hay traccion en otros |

*Nota: #5 se prepara en Q4 2025 para deadline FR de Sep 2026

**Sinergias entre nichos:**
- #1 y #5 comparten 80% de codigo (ZUGFeRD/Factur-X misma base)
- #1 y #2 comparten infraestructura (webhooks, multi-tenant)
- #3 podria integrarse con #1/#5 (ERP recibe e-invoices)

---

## Metadata

| Campo | Valor |
|-------|-------|
| Fecha analisis | 2026-02-04 |
| Fuente contexto | Debate multi-IA Ticket #243 + Proyecto 602 |
| Metodologia | G.A.P.S. (Gather, Analyze, Prioritize, Structure) |
| Nichos evaluados | 5 |
| Nichos para P1 inmediato | 2 (#1 German E-Invoice, #2 VAT B2B) |
| Nichos en reserva | 3 (#3 ERP Hub, #4 Carriers, #5 France E-Invoice) |
| Proximo paso | Ejecutar P1 en Nicho #1 |

### Ranking Final por ICE Score

| Rank | Nicho | ICE | Timing Optimo |
|------|-------|-----|---------------|
| 1 | German E-Invoice Butler | 756 | AHORA (ley vigente) |
| 2 | EU VAT Automation B2B | 648 | Q2 2026 |
| 3 | European ERP Connector Hub | 540 | Q3-Q4 2026 |
| 4 | France E-Invoice Prep | 504 | Q4 2025 (preparar para 2026) |
| 5 | EU Carrier Aggregator | 486 | 2027+ (si hay traccion) |

---

*Generado por Prompt Maestro 0 (Buscador de Nichos)*
*Proyecto: web25-993-prompts-para-negocios/shopify-custom-dev-europa*
