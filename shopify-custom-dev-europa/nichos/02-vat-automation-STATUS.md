# STATUS: Nicho #2 - EU VAT Automation B2B

**Ultima actualizacion:** 2026-02-04
**Stage actual:** P0-COMPLETE -> PENDIENTE P1

---

## Resumen Rapido

| Campo | Valor |
|-------|-------|
| Nombre | EU VAT Automation B2B (Cross-Border Exempt) |
| ICE Score | 648/1000 |
| P1 Score | PENDIENTE |
| Decision P1 | PENDIENTE |
| Precio estimado | 29 EUR/mes |
| TAM | 835,200 EUR/ano |

---

## El Problema

Comercio B2B intra-EU tiene exencion de VAT si el comprador tiene VAT ID valido, pero:
- Validacion manual de VAT IDs consume tiempo
- Shopify no valida VAT automaticamente en checkout
- Apps existentes (Exemptify, Avalara) son caras o incompletas
- Errores de VAT generan auditorias fiscales

---

## Solucion Propuesta

- Checkout UI Extension que valida VAT ID via VIES API
- Aplica 0% VAT automaticamente si es valido
- Guarda evidencia en metafields para auditoria

---

## Progreso

### P0: Identificacion
- [x] Pain point documentado
- [x] Gap de mercado identificado
- [x] Evidencia recopilada (4 fuentes)
- [x] ICE Score: 648/1000
- [x] Hipotesis formulada

### P1: Validacion Inicial
- [ ] Crear reporte de validacion
- [ ] Calcular P1 Score
- [ ] Decidir siguiente paso

### Experimento Sugerido
- [ ] Prototipo funcional en Dev Store
- [ ] Video demo de 2 minutos
- [ ] Post en r/shopify y comunidades EU
- [ ] Meta: 30 respuestas "lo usaria" en 7 dias

---

## Ventaja Competitiva

- Reutiliza checkout extensions del proyecto 602
- VIES API bien documentada
- Menor competencia que nicho #1

---

## Dependencias

- Puede desarrollarse en paralelo al #1
- Comparte infraestructura de webhooks

---

## Timing Sugerido

**Q2 2026** - Despues de validar nicho #1

---

## Notas

Archivo fuente: `00-nichos-identificados.md` (seccion Nicho #2)
