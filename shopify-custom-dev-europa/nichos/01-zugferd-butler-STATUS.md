# STATUS: Nicho #1 - German E-Invoice Butler (ZUGFeRD/XRechnung)

**Ultima actualizacion:** 2026-02-04
**Stage actual:** P1-COMPLETE -> EXPERIMENTO EN PROGRESO

---

## Resumen Rapido

| Campo | Valor |
|-------|-------|
| Nombre | German E-Invoice Butler |
| ICE Score | 756/1000 |
| P1 Score | 7.3/10 |
| Decision P1 | PROCEDER CON EXPERIMENTO |
| Precio validacion | 19 EUR/mes |
| TAM | 461,700 EUR/ano |

---

## Progreso del Proceso

### P0: Identificacion de Nicho
- [x] Pain point documentado (regulacion ZUGFeRD desde Enero 2025)
- [x] Gap de mercado identificado (no hay app "compliance-only")
- [x] Evidencia recopilada (4 fuentes)
- [x] ICE Score calculado: 756/1000
- [x] Hipotesis formulada

**Archivo:** `00-nichos-identificados.md` (seccion Nicho #1)

### P1: Validacion Inicial
- [x] Reporte de validacion completado
- [x] P1 Score: 7.3/10
- [x] Decision: Proceder con experimento

**Archivo:** `01-reporte-validacion.md`

### Experimento de Validacion (14 dias)
**Objetivo:** 30 signups, 10% conversion, 50% "pagaria 19+ EUR"
**Budget:** 100 EUR Google Ads

#### Setup (Dia 1)
- [ ] Registrar dominio (.de)
- [ ] Hosting en Vercel/Netlify
- [ ] Cuenta Tally.so (formulario)
- [ ] Google Analytics 4
- [ ] Vincular GA4 con Google Ads

#### Landing Page (Dia 2)
- [x] Estructura HTML/CSS creada
- [x] Copy en aleman insertado
- [x] Pagina danke.html creada
- [ ] Conectar formulario a Tally.so (actualmente placeholder)
- [ ] Agregar tracking GA4
- [ ] Impressum/Datenschutz reales
- [ ] Test en mobile

#### Google Ads (Dia 3)
- [ ] Crear campana Search (Alemania, aleman)
- [ ] Keywords configuradas (zugferd shopify, xrechnung shopify, etc.)
- [ ] 3 variantes de anuncios creadas
- [ ] Extensions agregadas
- [ ] Conversion tracking configurado
- [ ] Budget 7-10 EUR/dia

#### Launch (Dia 4)
- [ ] Test completo de signup
- [ ] Activar campana
- [ ] Dashboard de seguimiento creado

#### Monitoreo (Dias 5-17)
- [ ] Revisar metricas diariamente
- [ ] Ajustar si CTR < 2% o conversion < 10%

#### Analisis (Dia 18)
- [ ] Exportar datos
- [ ] Calcular metricas finales
- [ ] Documentar en `experimento-01-resultados.md`
- [ ] Decidir: P2 / Ajustar / Pivotar

---

## Archivos Relacionados

| Archivo | Proposito | Status |
|---------|-----------|--------|
| `00-nichos-identificados.md` | Analisis completo del nicho | Completo |
| `01-reporte-validacion.md` | P1 validation report | Completo |
| `experimento-01-landing-brief.md` | Brief del experimento | Completo |
| `landing-zugferd/index.html` | Landing page | Creada, falta conectar form |
| `landing-zugferd/danke.html` | Thank you page | Creada |
| `landing-zugferd/STYLE-GUIDE.md` | Guia de estilos | Completo |
| `experimento-01-resultados.md` | Resultados del experimento | PENDIENTE |

---

## Criterios de Exito del Experimento

### Escenario A: EXITO (Proceder a P2)
```
Signups >= 30 AND
Conversion >= 10% AND
"Pagaria 19+ EUR" >= 50%
```
**Accion:** Crear modelo financiero, iniciar MVP

### Escenario B: EXITO PARCIAL (Ajustar)
```
Signups 15-29 OR
Conversion 5-10% OR
"Pagaria 19+ EUR" 30-50%
```
**Accion:** Ajustar copy/precio, extender 7 dias

### Escenario C: FRACASO (Pivotar)
```
Signups < 15 AND
Conversion < 5% AND
"Pagaria 19+ EUR" < 30%
```
**Accion:** Evaluar pivot o abandonar

---

## Metricas Actuales

| Metrica | Objetivo | Actual | Status |
|---------|----------|--------|--------|
| Dias corridos | 14 | 0 | - |
| Gasto ads | 100 EUR | 0 EUR | - |
| Visitantes | 200-500 | - | - |
| Signups | >= 30 | - | - |
| Conversion | >= 10% | - | - |
| % precio 19+ | >= 50% | - | - |
| CPL | <= 5 EUR | - | - |

---

## Notas

- Landing page usa estilo "Editorial Germanica" anti-AI-slop
- Formulario actual es placeholder, necesita conectar a Tally.so
- Copy ya esta en aleman, revisado
- Skill `landing-builder` creado basado en esta landing

---

## Proximo Paso Inmediato

**Registrar dominio y configurar hosting para lanzar experimento**

Opciones de dominio sugeridas:
- zugferd-shopify.de (ideal)
- shopify-einvoice.de
- erechnung-shopify.de
- rechnungsbutler.de
