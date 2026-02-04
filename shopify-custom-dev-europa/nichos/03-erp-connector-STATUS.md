# STATUS: Nicho #3 - European ERP Connector Hub

**Ultima actualizacion:** 2026-02-04
**Stage actual:** P1-COMPLETE -> NO PROCEDER

---

## Resumen Rapido

| Campo | Valor |
|-------|-------|
| Nombre | European ERP Connector Hub |
| ICE Score | ~~540~~ 226/1000 |
| P1 Score | **4.2/10** |
| Decision P1 | **NO PROCEDER** |
| Precio estimado | 49 EUR/mes |
| TAM | 940,800 EUR/ano (teorico) |

---

## El Problema (Original)

Tiendas Shopify EU usan ERPs locales (SAP Business One, Sage, Holded, sevDesk) que:
- No tienen conectores Shopify nativos o son de baja calidad
- Integraciones via Zapier fallan con volumen alto
- Desarrollo custom es caro (5,000-20,000 EUR)
- Datos desincronizados causan errores

---

## Hallazgos P1

### Competencia Encontrada

| ERP | Apps Existentes | Mejor Rating | Estado |
|-----|-----------------|--------------|--------|
| sevDesk | 2+ apps + integradores | 4.4/5 (80 reviews) | Saturado |
| Holded | 1 app oficial | 1.0/5 (1 review) | Gap potencial pero TAM minimo |
| Odoo | 5+ apps | 4.9/5 (41 reviews) | Muy saturado |

### APIs Evaluadas

| ERP | Viabilidad | Riesgo |
|-----|------------|--------|
| sevDesk | Alta | Bajo |
| Holded | Alta | Bajo |
| Odoo | Media | Alto (API deprecada Fall 2026) |

---

## Razon de NO PROCEDER

1. **sevDesk saturado** - App Eshop Guide con 80 reviews y 4.4/5
2. **Odoo muy saturado** - 5+ apps, TechMarbles con 4.9/5
3. **Holded tiene gap PERO TAM minimo** - Solo mercado espanol
4. **Riesgo Odoo** - APIs XML-RPC/JSON-RPC deprecadas en v20
5. **Alto esfuerzo** - Cada ERP = desarrollo separado
6. **Sin urgencia regulatoria**

---

## Progreso

### P0: Identificacion
- [x] Pain point documentado
- [x] Gap de mercado identificado
- [x] Evidencia recopilada (4 fuentes)
- [x] ICE Score: 540/1000
- [x] Hipotesis formulada

### P1: Validacion Inicial
- [x] Analisis de competencia (6 apps)
- [x] Analisis de APIs (3 ERPs)
- [x] Busqueda en foros
- [x] P1 Score calculado: 4.2/10
- [x] Decision: NO PROCEDER

---

## Documentos Relacionados

- [P1 Report Completo](03-erp-connector-P1-REPORT.md)
- Archivo fuente: `00-nichos-identificados.md` (seccion Nicho #3)

---

## Escenario de Re-evaluacion

Podria re-evaluarse SI:
- App oficial Holded sigue con reviews malas Y
- Mercado espanol Shopify crece significativamente Y
- Se confirma demanda via lista de espera

**Timing sugerido:** NO PRIORITARIO - Solo si hay senales claras
