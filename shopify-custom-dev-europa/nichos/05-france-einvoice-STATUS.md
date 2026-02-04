# STATUS: Nicho #5 - France E-Invoice Prep (Factur-X 2026)

**Ultima actualizacion:** 2026-02-04
**Stage actual:** P0-COMPLETE -> RESERVA (Q4 2025)

---

## Resumen Rapido

| Campo | Valor |
|-------|-------|
| Nombre | France E-Invoice Prep (Factur-X 2026) |
| ICE Score | 504/1000 |
| P1 Score | PENDIENTE |
| Decision P1 | RESERVA - TIMING Q4 2025 |
| Precio estimado | 19 EUR/mes |
| TAM | 171,000 EUR/ano inicial -> 1.14M cuando obligatorio |

---

## El Problema

Francia implementa facturacion electronica obligatoria:
- Sep 2026: Grandes empresas deben EMITIR (Factur-X)
- Sep 2027: Medianas empresas
- Sep 2028: Pequenas empresas
- TODAS deben RECIBIR desde 2026

---

## Solucion Propuesta

- Generador automatico PDF/A-3 con XML Factur-X
- **Fork del nicho #1** (80% codigo reutilizable)
- Ajustes: perfiles FR, campos SIRET, TVA intracommunautaire

---

## Progreso

### P0: Identificacion
- [x] Pain point documentado
- [x] Gap de mercado identificado
- [x] Evidencia recopilada (4 fuentes)
- [x] ICE Score: 504/1000
- [x] Hipotesis formulada

### P1: Validacion Inicial
- [ ] Landing page FR con timeline regulatorio
- [ ] Lista de espera "Avisame cuando este listo"
- [ ] Anuncios Facebook targeting FR
- [ ] Meta: 100 signups en 30 dias

---

## Dependencia Critica

**REQUIERE que nicho #1 (ZUGFeRD) este funcionando**
- Comparte 80% del codigo
- Mismo flujo: webhook -> genera XML -> email
- Solo cambia: perfiles XML y campos obligatorios

---

## Timing Sugerido

**Q4 2025** - Preparar lista de espera (1 ano antes del deadline)
**Q1-Q2 2026** - Lanzar producto si #1 tiene traccion

---

## Ventaja Competitiva

- Early mover (deadline es Sep 2026)
- Costo de desarrollo bajo (fork de #1)
- Mercado grande (25,000 tiendas Shopify Francia)

---

## Notas

Archivo fuente: `00-nichos-identificados.md` (seccion Nicho #5)

**Sinergia con #1:** Si ZUGFeRD Butler funciona, este es casi "gratis" de desarrollar.
