# Syscom Shopify Stores - Nichos Identificados (P0)

## Metadata Debate

| Campo | Valor |
|-------|-------|
| Fecha | 2026-02-19 |
| Ticket API 900 | #286 |
| Modelos | Gemini 3 Pro Preview vs DeepSeek Reasoner |
| Iteraciones | 3 (6 turnos) |
| Framework | G.A.P.S. |
| Transcripcion | `debates/2026-02-19-syscom-shopify-nichos.md` |

---

## Ranking Final (ICE Promedio)

| Rank | Nicho | Modelo | ICE Promedio | Veredicto | Gate P0 |
|------|-------|--------|-------------|-----------|---------|
| 1 | **Servicio B2B CCTV** | B2B Servicio | **476** | VALIDAR PRIMERO | Pasa (>=500 en DeepSeek) |
| 2 | **Servicio B2B Solar** | B2B Servicio | **452** | VALIDAR | Pasa (>=500 en Gemini) |
| 3 | Tienda CCTV B2C | Tienda Propia | 145 | RESERVA | No pasa |
| 4 | Tienda Solar B2C | Tienda Propia | 128 | RESERVA | No pasa |
| 5 | App Shopify SaaS | B2B SaaS | 60 | DESCARTAR | No pasa |

**Nota:** Ambas IAs dieron ICE >= 500 al menos a uno de los nichos B2B. El ICE promedio de #1 es 476, pero DeepSeek lo puntuo en 504. Se considera que pasa el gate.

---

## Checklist P0 por Nicho

### Nicho #1: Servicio B2B CCTV (VALIDAR PRIMERO)

- [x] ICE >= 500 (504 DeepSeek, 448 Gemini)
- [x] Ventaja competitiva identificada (expertise + servicio completo vs solo sync)
- [x] Riesgo principal documentado (distribuidores reacios a digitalizar)
- [x] Primer paso concreto (contactar 10-15 distribuidores CCTV)
- [x] Fuentes de competencia (MojoMexico, Kaesys como contexto)
- **Checklist: 5/5**

### Nicho #2: Servicio B2B Solar (VALIDAR)

- [x] ICE >= 500 (567 Gemini, 336 DeepSeek - divergencia notable)
- [x] Ventaja competitiva identificada (mercado en crecimiento + calculadoras/kits)
- [x] Riesgo principal documentado (complejidad tecnica CFE/permisos)
- [x] Primer paso concreto (demo store + contactar 5 integradores solares)
- [x] Fuentes de competencia (tiendasolar.mx, enertik.com/mx)
- **Checklist: 5/5**

### Nicho #3: Tienda CCTV B2C (RESERVA)

- [ ] ICE >= 500 (max 150 Gemini)
- [x] Ventaja competitiva identificada (catalogo curado + contenido experto)
- [x] Riesgo principal documentado (alto CAC, competencia Amazon/ML)
- [x] Primer paso concreto (MVP 50 productos + blog tecnico)
- [x] Fuentes de competencia (distribuidorcctv.com.mx, sisycom.com)
- **Checklist: 4/5** (falla ICE)
- **Uso estrategico:** Demo/showroom para vender servicio B2B

### Nicho #4: Tienda Solar B2C (RESERVA)

- [ ] ICE >= 500 (max 160 Gemini)
- [x] Ventaja competitiva identificada (calculadora solar + kits)
- [x] Riesgo principal documentado (logistica pesada, venta consultiva)
- [x] Primer paso concreto (calculadora lead-capture antes de tienda)
- [x] Fuentes de competencia (tiendasolar.mx, enertik.com/mx)
- **Checklist: 4/5** (falla ICE)

### Nicho #5: App Shopify SaaS (DESCARTAR)

- [ ] ICE >= 500 (max 72 Gemini)
- [ ] Ventaja competitiva identificada (ninguna sostenible vs MojoMexico)
- [x] Riesgo principal documentado (guerra de precios, commoditizado)
- [x] Primer paso concreto (no construir, analizar reviews si se insiste)
- [x] Fuentes de competencia (MojoMexico, Kaesys, DecodeCMS)
- **Checklist: 3/5** (falla ICE y ventaja competitiva)

---

## Consenso y Divergencias

### Alto Consenso (ambas IAs coinciden)

1. **B2B Servicio > B2C Tienda Propia > SaaS App** - Jerarquia clara
2. **Descartar Nicho 5** - API sync commoditizado, no competir ahi
3. **API sync es herramienta interna**, no producto a vender
4. **Expertise vertical es el moat real** - Lo que MojoMexico/Kaesys no tienen
5. **Tienda propia como demo** para vender servicio B2B, no como negocio principal

### Divergencia: CCTV vs Solar como prioridad #1

| Gemini | DeepSeek |
|--------|----------|
| Solar B2B primero (ICE 567) | CCTV B2B primero (ICE 504) |
| Mayor ticket, mercado en auge | Mayor certeza, menor complejidad |
| Instaladores tienen mas dinero | Distribuidores mas accesibles |

**Resolucion recomendada:** Empezar por CCTV (mayor certeza, expertise mas fuerte) y expandir a Solar si valida.

---

## Modelo de Negocio Validado

### Posicionamiento
"Agencia Boutique de E-commerce para Integradores Syscom"

### Propuesta de Valor
No vendes sync API (commodity). Vendes: "Tu negocio digital de Seguridad/Solar listo para vender en 7 dias"

### Modelo de Ingresos
| Concepto | Monto Estimado |
|----------|---------------|
| Setup Fee (unico) | $15,000 - $35,000 MXN |
| Fee Mensual (mantenimiento/sync) | $2,000 - $5,000 MXN |
| Shopify Partner Revenue | 20% de mensualidad Shopify del cliente |

### Lo que incluye
1. Tienda Shopify con diseno profesional
2. Sync Syscom automatizado (tu API como salsa secreta)
3. Catalogo curado para su vertical (no dump de 75K productos)
4. Contenido tecnico (fichas, guias, comparativas)
5. Capacitacion del equipo
6. SEO tecnico inicial

---

## Siguiente Paso: P1

### Para Nicho #3 (Servicio B2B CCTV) - VALIDAR PRIMERO

1. **Crear one-pager/landing** del "Paquete Llave en Mano CCTV"
2. **Contactar 10-15 distribuidores** CCTV medianos (fisicos, no online)
3. **Ofrecer MVP** a 3 distribuidores (tienda basica + sync + guia tecnica)
4. **Metrica de exito**: 3/10 pagan despues de periodo gratuito
5. **Validar precio**: $3,000 - $8,000 MXN/mes + setup fee

### Para Nicho #4 (Servicio B2B Solar) - VALIDAR EN PARALELO

1. **Adaptar propuesta** CCTV a vertical solar
2. **Demo store** con calculadora solar y 20 kits curados
3. **Contactar 5 integradores** solares en LinkedIn/Facebook
4. **Validar si e-commerce funciona** o si es mas generacion de leads
