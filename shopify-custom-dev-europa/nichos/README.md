# Nichos - Shopify Custom Dev Europa

**Ultima actualizacion:** 2026-02-04

---

## Dashboard de Status

| # | Nicho | ICE | Stage | Proximo Paso |
|---|-------|-----|-------|--------------|
| 1 | [German E-Invoice Butler](01-zugferd-butler-STATUS.md) | 756 | EXPERIMENTO | Registrar dominio, lanzar ads |
| 2 | [EU VAT Automation B2B](02-vat-automation-STATUS.md) | 648 | PENDIENTE P1 | Esperar resultado #1 |
| 3 | [European ERP Connector](03-erp-connector-STATUS.md) | 540 | RESERVA | Q3-Q4 2026 |
| 4 | [EU Carrier Aggregator](04-carrier-aggregator-STATUS.md) | 486 | RESERVA | 2027+ |
| 5 | [France E-Invoice Factur-X](05-france-einvoice-STATUS.md) | 504 | RESERVA | Q4 2025 (lista espera) |

---

## Prioridad de Ejecucion

```
AHORA:     #1 ZUGFeRD Butler (ley vigente desde Ene 2025)
           |
           v
Q2 2026:   #2 VAT Automation (si #1 valida)
           |
           v
Q4 2025:   #5 France Factur-X (preparar lista espera)
           |
           v
Q3-Q4 2026: #3 ERP Hub (evaluar APIs)
           |
           v
2027+:     #4 Carriers (si hay traccion)
```

---

## Sinergias Entre Nichos

| Nicho A | Nicho B | Codigo Compartido |
|---------|---------|-------------------|
| #1 ZUGFeRD | #5 Factur-X | 80% (mismo formato base) |
| #1 ZUGFeRD | #2 VAT | Infra webhooks, multi-tenant |
| #2 VAT | #3 ERP | Checkout extensions |

---

## Archivos Relacionados

- `../00-nichos-identificados.md` - Analisis completo original
- `../01-reporte-validacion.md` - P1 del nicho #1
- `../experimento-01-landing-brief.md` - Brief del experimento #1
- `../landing-zugferd/` - Landing page del nicho #1

---

## Como Usar Esta Estructura

1. **Para continuar un nicho:** Abre su archivo `XX-nombre-STATUS.md`
2. **Para iniciar P1 de otro nicho:** Crea `XX-reporte-validacion.md` en la raiz
3. **Para evaluar nuevo nicho:** Agregalo a `00-nichos-identificados.md` primero

---

## Metricas Globales

| Metrica | Valor |
|---------|-------|
| Nichos identificados | 5 |
| Nichos en P1+ | 1 |
| Nichos en reserva | 4 |
| TAM total potencial | ~3.1M EUR/ano |
