# Nichos - Shopify Custom Dev Europa

**Ultima actualizacion:** 2026-02-04

---

## Dashboard de Status

| # | Nicho | ICE | Stage | Proximo Paso |
|---|-------|-----|-------|--------------|
| 1 | [German E-Invoice Butler](01-zugferd-butler-STATUS.md) | 756 | EXPERIMENTO | Registrar dominio, lanzar ads |
| 2 | [EU VAT Automation B2B](02-vat-automation-STATUS.md) | ~~648~~ 189 | **NO PROCEDER** | Descartado - mercado saturado |
| 3 | [European ERP Connector](03-erp-connector-STATUS.md) | ~~540~~ 226 | **NO PROCEDER** | Descartado - mercado saturado |
| 4 | [EU Carrier Aggregator](04-carrier-aggregator-STATUS.md) | 486 | RESERVA | 2027+ |
| 5 | [France E-Invoice Factur-X](05-france-einvoice-STATUS.md) | 504 | RESERVA | Q4 2025 (lista espera) |

---

## Resumen de Evaluaciones P1

| Nicho | P1 Score | Decision | Razon Principal |
|-------|----------|----------|-----------------|
| #1 ZUGFeRD | 7.3 | PROCEDER | Gap claro, urgencia regulatoria |
| #2 VAT | 4.8 | NO PROCEDER | 7+ apps existentes, lider 5 estrellas |
| #3 ERP | 4.2 | NO PROCEDER | Cada ERP saturado, solo Holded tiene gap minimo |
| #4 Carriers | - | RESERVA | Pendiente P1 |
| #5 Factur-X | - | RESERVA | Pendiente P1 |

---

## Prioridad de Ejecucion (Actualizada)

```
AHORA:     #1 ZUGFeRD Butler (ley vigente desde Ene 2025)
           |
           v
Q4 2025:   #5 France Factur-X (preparar lista espera)
           |
           v
2027+:     #4 Carriers (si hay traccion con #1)

DESCARTADOS:
- #2 VAT Automation (mercado saturado)
- #3 ERP Connector (mercado saturado)
```

---

## Sinergias Entre Nichos

| Nicho A | Nicho B | Codigo Compartido |
|---------|---------|-------------------|
| #1 ZUGFeRD | #5 Factur-X | 80% (mismo formato base) |
| #1 ZUGFeRD | #4 Carriers | Infra webhooks, multi-tenant |

---

## Archivos Relacionados

- `../00-nichos-identificados.md` - Analisis completo original
- `../01-reporte-validacion.md` - P1 del nicho #1
- `../experimento-01-landing-brief.md` - Brief del experimento #1
- `../landing-zugferd/` - Landing page del nicho #1

### Reportes P1 Completados
- [02-vat-automation-P1-REPORT.md](02-vat-automation-P1-REPORT.md)
- [03-erp-connector-P1-REPORT.md](03-erp-connector-P1-REPORT.md)

---

## Como Usar Esta Estructura

1. **Para continuar un nicho:** Abre su archivo `XX-nombre-STATUS.md`
2. **Para iniciar P1 de otro nicho:** Crea `XX-nombre-P1-REPORT.md`
3. **Para evaluar nuevo nicho:** Agregalo a `00-nichos-identificados.md` primero

---

## Metricas Globales

| Metrica | Valor |
|---------|-------|
| Nichos identificados | 5 |
| Nichos evaluados P1 | 3 |
| Nichos en PROCEDER | 1 (#1 ZUGFeRD) |
| Nichos NO PROCEDER | 2 (#2 VAT, #3 ERP) |
| Nichos en reserva | 2 (#4, #5) |
| TAM nicho activo | ~2.4M EUR/ano |
