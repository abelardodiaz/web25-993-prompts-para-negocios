# Nichos - Shopify Custom Dev Europa

**Ultima actualizacion:** 2026-02-04

---

## Dashboard de Status

| # | Nicho | ICE | Stage | Proximo Paso |
|---|-------|-----|-------|--------------|
| 1 | [German E-Invoice Butler](01-zugferd-butler-STATUS.md) | 756 | EXPERIMENTO | Registrar dominio, lanzar ads |
| 2 | [EU VAT Automation B2B](02-vat-automation-STATUS.md) | ~~648~~ 189 | **NO PROCEDER** | Descartado - mercado saturado |
| 3 | [European ERP Connector](03-erp-connector-STATUS.md) | ~~540~~ 226 | **NO PROCEDER** | Descartado - mercado saturado |
| 4 | [EU Carrier Aggregator](04-carrier-aggregator-STATUS.md) | ~~486~~ 153 | **DESCARTADO** | Packlink PRO es gratis con 4.9/5 |
| 5 | [France E-Invoice Factur-X](05-france-einvoice-STATUS.md) | 504 | RESERVA | Q4 2025 (lista espera) |

---

## Resumen de Evaluaciones P1

| Nicho | P1 Score | Decision | Razon Principal |
|-------|----------|----------|-----------------|
| #1 ZUGFeRD | 7.3 | PROCEDER | Gap claro, urgencia regulatoria |
| #2 VAT | 4.8 | NO PROCEDER | 7+ apps existentes, lider 5 estrellas |
| #3 ERP | 4.2 | NO PROCEDER | Cada ERP saturado, Holded gap minimo |
| #4 Carriers | **3.5** | **DESCARTADO** | Packlink PRO gratis 4.9/5 723 reviews |
| #5 Factur-X | - | RESERVA | Pendiente P1 |

---

## Prioridad de Ejecucion (Actualizada)

```
AHORA:     #1 ZUGFeRD Butler (ley vigente desde Ene 2025)
           |
           v
Q4 2025:   #5 France Factur-X (preparar lista espera)

DESCARTADOS PERMANENTEMENTE:
- #2 VAT Automation (mercado saturado)
- #3 ERP Connector (mercado saturado)
- #4 Carrier Aggregator (Packlink PRO gratis 4.9/5)
```

---

## Clasificacion de Decisiones

| Tipo | Significado | Nichos |
|------|-------------|--------|
| **PROCEDER** | Validado, ejecutar experimento | #1 |
| **NO PROCEDER** | Sin gap suficiente ahora, posible futuro | #2, #3 |
| **DESCARTADO** | Sin viabilidad, no re-evaluar | #4 |
| **RESERVA** | Pendiente evaluacion | #5 |

---

## Sinergias Entre Nichos

| Nicho A | Nicho B | Codigo Compartido |
|---------|---------|-------------------|
| #1 ZUGFeRD | #5 Factur-X | 80% (mismo formato base) |

---

## Archivos Relacionados

- `../00-nichos-identificados.md` - Analisis completo original
- `../01-reporte-validacion.md` - P1 del nicho #1
- `../experimento-01-landing-brief.md` - Brief del experimento #1
- `../landing-zugferd/` - Landing page del nicho #1

### Reportes P1 Completados
- [02-vat-automation-P1-REPORT.md](02-vat-automation-P1-REPORT.md)
- [03-erp-connector-P1-REPORT.md](03-erp-connector-P1-REPORT.md)
- [04-carrier-aggregator-P1-REPORT.md](04-carrier-aggregator-P1-REPORT.md)

---

## Metricas Globales

| Metrica | Valor |
|---------|-------|
| Nichos identificados | 5 |
| Nichos evaluados P1 | 4 |
| Nichos en PROCEDER | 1 (#1 ZUGFeRD) |
| Nichos NO PROCEDER | 2 (#2 VAT, #3 ERP) |
| Nichos DESCARTADOS | 1 (#4 Carriers) |
| Nichos en reserva | 1 (#5 Factur-X) |
| TAM nicho activo | ~2.4M EUR/ano |

---

## Lecciones Aprendidas

1. **Validar competencia ANTES de asumir gap** - Nicho #4 parecia viable en P0 pero Packlink PRO ya lo resuelve gratis
2. **Gratis mata cualquier modelo de pago** - Imposible competir contra 4.9/5 gratis con 723 reviews
3. **Regulacion crea oportunidad** - Solo nicho #1 tiene urgencia regulatoria = unico viable
4. **Twitter/Grok 3 es util** - Confirma pain points pero tambien muestra que usuarios encuentran soluciones
