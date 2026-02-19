# Modelo de Negocio: GPS Fleet Monitor (057)

**Fecha:** 2026-02-18
**Basado en:** P1-desk-research.md + nichos-mexico-research.md

---

## 1. Canvas del Modelo de Negocio

### Propuesta de Valor (por nicho)

| Nicho | Propuesta de Valor | Frase de Venta |
|-------|-------------------|----------------|
| **Constructoras** | Protege tu maquinaria de millones contra robo y controla horas reales de operacion | "Protege tu retro de $2M por $800/mes y baja tu seguro 15%" |
| **Farma / Cadena Fria** | Cumple COFEPRIS automaticamente con reportes de temperatura listos para auditoria | "Auditoria COFEPRIS sin sudar: reportes automaticos de cadena fria" |
| **Flotillas PyME** | Ve donde estan tus vehiculos, controla gasolina, sin contratos ni complicaciones | "Instala hoy, ve tu flota manana. Sin contrato." |

### Propuesta de Valor Central (Cross-Nicho)

**"Plataforma privada de monitoreo GPS con app movil y roles -- tu marca, tu control, tus datos."**

Diferenciadores vs. competencia generica:
1. **Plataforma propia** - No dependes de TrackSolid UI. Dashboard personalizado con tu logo.
2. **App con roles** - Gerente ve todo, supervisor ve su zona, conductor ve su vehiculo, cliente ve lo que le compartes.
3. **Verticalizacion** - Reportes especificos para cada industria (horas-maquina, temperatura, combustible).
4. **Sin contrato largo** - Mes a mes, sin penalizaciones.
5. **Soporte por WhatsApp** - El canal que ya usan todos.
6. **Tecnicos propios** - Instalacion profesional con garantia.

---

## 2. Estructura de Precios

### Modelo de Revenue: Hardware + SaaS Mensual + Servicios

#### A) Hardware (One-Time)

| Concepto | Costo Proveedor (USD) | Precio Venta (MXN) | Margen |
|----------|----------------------|---------------------|--------|
| GPS vehicular basico (GT06N) | $20-35 | $800 - $1,200 | 50-70% |
| GPS vehicular 4G (VL02/VL103) | $25-45 | $1,200 - $2,000 | 55-65% |
| Asset tracker bateria (LL301) | $35-50 | $1,800 - $2,500 | 55-65% |
| Asset tracker solar (LL303) | $45-65 | $2,500 - $3,500 | 55-65% |
| Sensor temperatura (externo) | $15-30 | $800 - $1,200 | 55-70% |
| OBD plug-and-play (VL502) | $30-45 | $1,500 - $2,000 | 55-65% |

**Politica:** Hardware se puede subsidiar parcialmente en contratos de 12+ meses.

#### B) Instalacion (One-Time)

| Tipo | Costo Tecnico | Precio al Cliente | Margen |
|------|--------------|-------------------|--------|
| Vehicular basico (auto/camioneta) | $200-$300 MXN | $500 - $800 MXN | 50-60% |
| Vehicular con relay (apagar motor) | $300-$500 MXN | $800 - $1,200 MXN | 50-60% |
| Maquinaria pesada (condiciones dificiles) | $400-$700 MXN | $1,000 - $1,500 MXN | 50-55% |
| OBD plug-and-play | $0 (autoinstalable) | $0 - $200 MXN | N/A |

**Politica volumen:** Instalacion gratis a partir de 10 unidades.

#### C) Mensualidad SaaS (Recurrente)

| Plan | Precio/Unidad/Mes | Incluye | Target |
|------|-------------------|---------|--------|
| **Basico** | $250 MXN | Tracking tiempo real, geocercas (5), historial 30 dias, alertas basicas, app movil | PyME con <10 unidades |
| **Profesional** | $450 MXN | Todo Basico + geocercas ilimitadas, reportes de viaje, control combustible, 2 roles (admin + conductor) | PyME con 10-30 unidades |
| **Enterprise** | $700 MXN | Todo Pro + roles ilimitados, reportes personalizados, API acceso, soporte prioritario, white-label opcional | Constructoras, farma, 30+ unidades |
| **Cadena Fria** | $1,200 MXN | Todo Enterprise + monitoreo temperatura, alertas ruptura cadena, reportes COFEPRIS | Distribuidoras farmaceuticas |

**Descuentos por volumen:**

| Unidades | Descuento |
|----------|-----------|
| 10-19 | 10% |
| 20-49 | 15% |
| 50-99 | 20% |
| 100+ | Negociable |

#### D) Servicios Adicionales (Revenue Complementario)

| Servicio | Precio | Frecuencia |
|----------|--------|-----------|
| Setup plataforma (configuracion inicial) | $2,000 - $5,000 MXN | One-time |
| Capacitacion equipo (remota, 2hrs) | $1,500 MXN | One-time |
| Capacitacion presencial (medio dia) | $3,500 MXN | One-time |
| Reporte mensual ejecutivo personalizado | $500 MXN/mes | Mensual |
| Mantenimiento preventivo GPS (revision anual) | $300/unidad | Anual |
| Reinstalacion por cambio de vehiculo | $500 MXN | Por evento |

---

## 3. Economia por Unidad (Unit Economics)

### Escenario: Plan Profesional ($450/mes) con GT06N

| Concepto | Monto |
|----------|-------|
| **Revenue mensual por unidad** | $450 MXN |
| (-) Costo SIM/datos | -$50 MXN |
| (-) Infra cloud prorrateado (hosting, Redis, DB) | -$30 MXN |
| (-) Costo API TrackSolid (estimado) | -$20 MXN |
| (-) Soporte prorrateado | -$30 MXN |
| **= Margen bruto mensual por unidad** | **$320 MXN (71%)** |

### Revenue One-Time por unidad (promedio)

| Concepto | Monto |
|----------|-------|
| Hardware (GT06N vendido a $1,000) | $1,000 MXN |
| (-) Costo hardware ($30 USD = $540 MXN) | -$540 MXN |
| (-) Costo instalacion tecnico | -$300 MXN |
| **= Margen one-time por unidad** | **$160 MXN** |

### Lifetime Value (LTV) estimado

| Metrica | Valor |
|---------|-------|
| Revenue mensual neto/unidad | $320 MXN |
| Churn estimado mensual | 3-5% |
| Vida promedio cliente | 20-33 meses |
| **LTV por unidad** | **$6,400 - $10,560 MXN** |
| **LTV por cliente (10 unidades promedio)** | **$64,000 - $105,600 MXN** |

### Customer Acquisition Cost (CAC) estimado

| Canal | CAC por Cliente |
|-------|----------------|
| Google Ads | $3,000 - $5,000 MXN |
| Referidos | $500 - $1,000 MXN |
| Alianzas (CMIC, distribuidores) | $1,000 - $2,000 MXN |
| **CAC promedio ponderado** | **$2,000 - $3,000 MXN** |

**Ratio LTV/CAC:** 21x - 52x (excelente, >3x es saludable)

---

## 4. Costos Operativos (OPEX Mensual)

### Fase Piloto (0-50 unidades)

| Concepto | Costo Mensual | Notas |
|----------|---------------|-------|
| Infra cloud (VPS, DB, Redis) | $1,500 MXN (~$85 USD) | Documentado en proyecto 057 |
| SIMs de datos (50 unidades) | $2,500 MXN | $50/unidad |
| Tecnico freelancer (part-time) | $5,000 MXN | 2-3 instalaciones/semana |
| Marketing digital | $3,000 MXN | Google Ads + FB Ads |
| WhatsApp Business API (soporte) | $500 MXN | Mensajes a clientes |
| Dominio + SSL + misc | $500 MXN | Anual prorrateado |
| **Total OPEX mensual** | **$13,000 MXN (~$720 USD)** | |

**Break-even:** 13,000 / 320 (margen/unidad) = **~41 unidades** monitoreadas

### Fase Crecimiento (50-250 unidades)

| Concepto | Costo Mensual | Notas |
|----------|---------------|-------|
| Infra cloud (escalada) | $3,000 MXN (~$170 USD) | Mas capacity |
| SIMs de datos (250 unidades) | $12,500 MXN | $50/unidad |
| Tecnicos (2 freelancers) | $15,000 MXN | 5-8 instalaciones/semana |
| Soporte cliente (part-time) | $8,000 MXN | 1 persona medio tiempo |
| Marketing digital | $8,000 MXN | Ads + contenido |
| WhatsApp Business API | $1,500 MXN | Mayor volumen |
| Licencias/herramientas | $2,000 MXN | CRM, analytics |
| **Total OPEX mensual** | **$50,000 MXN (~$2,780 USD)** | |

**Revenue a 250 unidades (Plan Profesional promedio):**
250 x $450 = $112,500 MXN/mes
**Margen operativo:** $62,500 MXN/mes (~$3,470 USD)

---

## 5. Roles en la App por Tipo de Cliente

### Matriz de Roles

| Rol | Permisos | Constructoras | Farma | PyME |
|-----|----------|--------------|-------|------|
| **Admin** | Todo: config, usuarios, reportes, facturacion | Dueno/Director | Director Calidad | Dueno |
| **Supervisor** | Ver mapa, reportes de su zona, alertas, geocercas | Superintendente de obra | Jefe Logistica | Gerente Ops |
| **Operador** | Ver su vehiculo/maquina, recibir instrucciones | Operador maquinaria | Conductor | Conductor |
| **Cliente** | Dashboard read-only compartido, reportes especificos | N/A | N/A | N/A |
| **Auditor** | Reportes historicos, compliance, sin control operativo | N/A | Auditor COFEPRIS | N/A |

### Features por Rol y Nicho

#### Constructoras

| Feature | Admin | Supervisor | Operador |
|---------|-------|-----------|----------|
| Ver todas las obras en mapa | Si | Solo sus obras | Solo su maquina |
| Reporte horas-maquina | Si (todos) | Si (su obra) | Si (su maquina) |
| Alertas robo/movimiento fuera de horario | Si | Si | No |
| Geocerca por obra (crear/editar) | Si | Solo ver | No |
| Historial de rutas | Si | Si | No |
| Apagar motor remoto | Si | No | No |

#### Farma / Cadena Fria

| Feature | Admin | Supervisor | Operador | Auditor |
|---------|-------|-----------|----------|---------|
| Dashboard temperatura todas las unidades | Si | Si (su zona) | Solo su unidad | Si (read-only) |
| Alerta ruptura cadena fria | Si | Si | Si (su unidad) | No |
| Reporte auditoria COFEPRIS | Si (generar) | Si (ver) | No | Si (descargar) |
| Certificado temperatura por viaje | Si | Si | No | Si |
| Historial 90 dias temperatura | Si | Si | No | Si |

#### Flotillas PyME

| Feature | Admin | Conductor |
|---------|-------|----------|
| Mapa tiempo real toda la flota | Si | Solo su vehiculo |
| Reporte consumo gasolina | Si | No |
| Alertas exceso velocidad | Si | Recibe notificacion |
| Geocercas | Si (crear) | Ver si esta dentro/fuera |
| Historial de rutas | Si (todos) | Si (suyas) |
| Reporte mensual ejecutivo | Si | No |

---

## 6. Diferenciador: Plataforma White-Label Propia vs. Apps Genericas

### Comparacion

| Aspecto | Apps Genericas (TrackSolid, etc.) | GPS Fleet Monitor (057) |
|---------|----------------------------------|------------------------|
| **Branding** | Logo del fabricante GPS | Tu marca, tu logo, tu dominio |
| **Roles de usuario** | Basicos (1-2 niveles) | Roles personalizados por vertical |
| **Reportes** | Genericos para todo tipo de vehiculo | Especificos: horas-maquina, temperatura, compliance |
| **Soporte** | Ticket en ingles, respuesta en dias | WhatsApp directo, respuesta en horas |
| **Datos** | En servidores del fabricante (China) | En tus servidores (Mexico/USA) |
| **Integraciones** | Limitadas | API abierta, webhook custom, WhatsApp alerts |
| **Precio** | Gratis (la app) pero sin personalizar | Incluido en mensualidad, totalmente personalizable |
| **Contrato** | Vinculado al hardware | Flexible, mes a mes |
| **Multi-tenancy** | No | Si -- cada empresa ve solo lo suyo |

### El Pitch de "Plataforma Propia"

Para el cliente que ya tiene GPS generico:
> "Usted ya tiene GPS en sus vehiculos, pero usa la misma app que miles de personas. Nosotros le damos SU plataforma, con SU logo, donde usted controla quien ve que. Su gerente ve toda la flota, su supervisor ve su zona, su conductor solo ve su vehiculo. Y los datos estan en servidores en Mexico, no en China."

Para el cliente que no tiene GPS:
> "Le instalamos el GPS Y le damos la plataforma completa. No es una app generica: es su sistema de monitoreo, configurado para su tipo de negocio, con los reportes que su industria necesita."

---

## 7. Roadmap de Producto por Fase de Negocio

| Fase Negocio | Mes | Fase 057 | Features a Entregar | Nicho Target |
|-------------|-----|---------|---------------------|-------------|
| **Piloto** | 1-2 | Fase 3 (Workers, SSE) | Tracking real-time confiable, alertas basicas | PyME |
| **Early Adopters** | 3-4 | Fase 4 (Historial, Reportes) | Historial rutas, reporte viajes, dashboard mejorado | PyME + Constructoras |
| **Expansion** | 5-6 | Fase 5 (Geofencing, Alertas) | Geocercas por obra, alertas robo, comandos remotos | Constructoras |
| **Verticalizacion** | 7-9 | Post-MVP | App movil con roles, multi-tenancy | Todos |
| **Premium** | 10-12 | Post-MVP | Sensor temperatura, reportes COFEPRIS | Farma |
| **Escala** | 12+ | Post-MVP | CFDI, servidor TCP GT06, Prometheus/Grafana | Todos |

---

## 8. Resumen Financiero Proyectado (Ano 1)

| Trimestre | Unidades | Revenue Mensual | OPEX Mensual | Utilidad Mensual |
|-----------|----------|----------------|-------------|-----------------|
| Q1 (Mes 1-3) | 20-40 | $9,000 - $18,000 | $13,000 | -$4,000 a +$5,000 |
| Q2 (Mes 4-6) | 50-100 | $22,500 - $45,000 | $25,000 | -$2,500 a +$20,000 |
| Q3 (Mes 7-9) | 100-180 | $45,000 - $81,000 | $38,000 | +$7,000 a +$43,000 |
| Q4 (Mes 10-12) | 180-250 | $81,000 - $112,500 | $50,000 | +$31,000 a +$62,500 |

**Revenue hardware+instalacion adicional (one-time):** ~$300,000 - $500,000 MXN en Ano 1

**Revenue total Ano 1 (estimado moderado):** $1,000,000 - $1,800,000 MXN (~$55K - $100K USD)

---

## Fuentes

- P1-desk-research.md (este repositorio)
- nichos-mexico-research.md (este repositorio)
- Zeek GPS - Estructura de precios Mexico (zeekgps.com)
- LoJack Mexico - Planes y costos (lojack.com.mx)
- GPSWOX - White-label pricing (gpswox.com)
- Proyecto 057 (web26-057-gps) - Documentacion tecnica fases 1-6
