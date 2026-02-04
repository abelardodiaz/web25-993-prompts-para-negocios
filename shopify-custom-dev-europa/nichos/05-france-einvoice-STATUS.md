# STATUS: Nicho #5 - France E-Invoice Prep (Factur-X 2026)

**Ultima actualizacion:** 2026-02-04
**Stage actual:** P1-COMPLETE -> RESERVA CONDICIONAL

---

## Resumen Rapido

| Campo | Valor |
|-------|-------|
| Nombre | France E-Invoice Prep (Factur-X 2026) |
| ICE Score | ~~504~~ 378/1000 |
| P1 Score | **5.8/10** |
| Decision P1 | **RESERVA CONDICIONAL** |
| Precio estimado | 19 EUR/mes |
| TAM | 171,000 EUR/ano -> 1.14M cuando obligatorio |
| Dependencia | Nicho #1 ZUGFeRD |

---

## El Problema

Francia implementa facturacion electronica obligatoria:
- Sep 2026: Grandes/medianas empresas deben EMITIR (Factur-X)
- Sep 2027: TODAS las empresas deben EMITIR
- TODAS deben RECIBIR desde Sep 2026
- Penalidades: 15 EUR/factura, hasta 15,000 EUR/ano

---

## Hallazgos P1

### Competencia

| App | Rating | Reviews | Factur-X |
|-----|--------|---------|----------|
| **Sufio** | **4.9/5** | **420** | **SI** (desde Ene 2025) |
| FF: Factures | 5.0/5 | 30 | NO |
| MaFacture | 3.8/5 | 4 | NO |

### Gap Identificado

- **Sufio es suite completa** ($7-129/mes) - Overkill para solo compliance
- **FF: Factures NO tiene Factur-X** - Gap real
- **Oportunidad:** App "compliance-only" a 19 EUR/mes

### Twitter (Grok 3)

- Awareness bajo-moderado entre PyMEs
- Quejas: complejidad, falta de herramientas Shopify nativas, costo
- Apps existentes no manejan bien Factur-X

---

## Condicion: Depende del Nicho #1

| Si #1 ZUGFeRD... | Entonces #5... |
|------------------|----------------|
| Tiene exito (>50 usuarios) | PROCEDER con fork |
| Falla | NO PROCEDER |

### Sinergia Tecnica

- 80% codigo compartido con nicho #1
- Solo 2-3 semanas de desarrollo adicional
- Mismo flujo: webhook -> XML -> email

---

## Timeline Sugerido

| Fase | Periodo | Accion |
|------|---------|--------|
| Observar | Feb-Jun 2026 | Monitorear #1 |
| Evaluar | Jul 2026 | Decision go/no-go |
| Beta | Ago 2026 | Si procede, fork de #1 |
| Launch | Sep 2026 | Coincidir con deadline |

---

## Progreso

### P0: Identificacion
- [x] Pain point documentado
- [x] Gap de mercado identificado
- [x] Evidencia recopilada (4 fuentes)
- [x] ICE Score: 504/1000
- [x] Hipotesis formulada

### P1: Validacion Inicial
- [x] Analisis competencia (3 apps)
- [x] Verificacion regulacion (4 fuentes)
- [x] Busqueda Twitter (Grok 3)
- [x] P1 Score calculado: 5.8/10
- [x] Decision: RESERVA CONDICIONAL

---

## Documentos Relacionados

- [P1 Report Completo](05-france-einvoice-P1-REPORT.md)
- Archivo fuente: `00-nichos-identificados.md` (seccion Nicho #5)
- Dependencia: [01-zugferd-butler-STATUS.md](01-zugferd-butler-STATUS.md)
