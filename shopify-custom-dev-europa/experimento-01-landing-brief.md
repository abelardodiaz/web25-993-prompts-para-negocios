# Brief: Landing Page de Validacion - German E-Invoice Butler

**Fecha:** 2026-02-04
**Objetivo:** Validar interes real en solucion ZUGFeRD para Shopify
**Duracion experimento:** 14 dias
**Budget ads:** 100 EUR

---

## 1. Dominio y Hosting

### Opciones de Dominio (verificar disponibilidad)

| Opcion | Precio aprox | Notas |
|--------|--------------|-------|
| `zugferd-shopify.de` | 10-15 EUR/ano | Ideal - keyword exacto |
| `shopify-einvoice.de` | 10-15 EUR/ano | Alternativa |
| `erechnung-shopify.de` | 10-15 EUR/ano | Alternativa |
| `rechnungsbutler.de` | 10-15 EUR/ano | Mas brandeable |

### Hosting Recomendado

- **Vercel** (gratis) - Deploy desde repo Git
- **Netlify** (gratis) - Alternativa
- **Carrd.co** (19 USD/ano) - Si quieres no-code rapido

---

## 2. Estructura de la Pagina

```
[HEADER]
- Logo simple (texto o icono factura)
- Sin navegacion (single page)

[HERO - Above the fold]
- Headline principal
- Subheadline con dolor
- CTA principal (boton)
- Trust badge: "Shopify Partner" o similar

[PROBLEMA - Section 1]
- Titulo: El problema
- 3 bullet points del dolor
- Imagen/icono ilustrativo

[SOLUCION - Section 2]
- Titulo: Nuestra solucion
- 3 features clave
- Screenshot mockup de la app (opcional)

[COMO FUNCIONA - Section 3]
- 3 pasos simples
- Iconos numerados

[PRECIO - Section 4]
- Precio claro: 19 EUR/mes
- Que incluye (bullet points)
- Sin compromiso / Cancelar cuando quieras

[CTA FINAL - Section 5]
- Formulario de registro
- Email + Pregunta de precio
- Boton submit

[FOOTER]
- Impressum (obligatorio en Alemania)
- Datenschutz (privacidad, obligatorio)
- Contacto email
```

---

## 3. Copy (Aleman)

### Hero Section

**Headline:**
```
ZUGFeRD-Rechnungen fur Shopify
Automatisch. Einfach. Rechtskonform.
```

**Subheadline:**
```
Seit Januar 2025 mussen alle B2B-Unternehmen in Deutschland
elektronische Rechnungen empfangen konnen. Ihre Shopify-Kunden
erwarten ZUGFeRD/XRechnung - wir machen es moglich.
```

**CTA Button:**
```
Jetzt auf Warteliste eintragen
```

**Trust Badge:**
```
Entwickelt von Shopify-Experten | DSGVO-konform
```

### Problema Section

**Titulo:**
```
Das Problem: Shopify kann kein ZUGFeRD
```

**Bullet Points:**
```
- Shopify generiert nur PDF-Rechnungen - keine strukturierten XML-Daten
- B2B-Kunden verlangen ZUGFeRD/XRechnung fur ihre Buchhaltung
- Bestehende Apps sind kompliziert und teuer (ab 49 EUR/Monat)
- Ohne E-Rechnung riskieren Sie Kunden und Busgelder
```

### Solucion Section

**Titulo:**
```
Die Losung: Compliance ohne Komplexitat
```

**Features:**
```
1. Automatische XML-Generierung
   Jede B2B-Bestellung wird automatisch als ZUGFeRD 2.1.1
   oder XRechnung 3.0 exportiert.

2. Nahtlose Integration
   Kein Wechsel Ihrer Rechnungssoftware.
   Wir erganzen Ihre bestehenden Shopify-Rechnungen.

3. Ein Klick, fertig
   XML wird automatisch per E-Mail an Ihren Kunden gesendet
   oder zum Download bereitgestellt.
```

### Como Funciona Section

**Titulo:**
```
So funktioniert es
```

**Pasos:**
```
1. App installieren
   Verbinden Sie die App mit Ihrem Shopify-Store in 2 Minuten.

2. B2B-Kunden markieren
   Kennzeichnen Sie Kunden, die E-Rechnungen benotigen.

3. Automatisch versenden
   Bei jeder Bestellung wird die ZUGFeRD-Rechnung automatisch erstellt.
```

### Precio Section

**Titulo:**
```
Einfache Preisgestaltung
```

**Precio:**
```
19 EUR / Monat
(zzgl. MwSt.)
```

**Incluye:**
```
- Unbegrenzte ZUGFeRD/XRechnung-Generierung
- ZUGFeRD 2.1.1 + XRechnung 3.0 Support
- Automatischer E-Mail-Versand
- Validierung gegen offizielle Standards
- Deutsche Support-Dokumentation
- Keine Einrichtungsgebuhr
- Jederzeit kundbar
```

### CTA Final Section

**Titulo:**
```
Seien Sie bereit fur die E-Rechnungspflicht
```

**Subtitulo:**
```
Tragen Sie sich jetzt ein und erhalten Sie:
- Fruhzeitigen Zugang zur Beta
- 50% Rabatt im ersten Jahr
- Personliche Einrichtungshilfe
```

**Formulario labels:**
```
E-Mail-Adresse: [input]

Wie viele B2B-Bestellungen haben Sie pro Monat?
[ ] Weniger als 10
[ ] 10-50
[ ] 50-200
[ ] Mehr als 200

Welchen Preis wurden Sie zahlen?
[ ] 9 EUR/Monat
[ ] 19 EUR/Monat
[ ] 29 EUR/Monat
[ ] Mehr als 29 EUR/Monat

[Button: Auf Warteliste eintragen]
```

### Footer

**Impressum (obligatorio):**
```
Impressum
[Tu nombre/empresa]
[Direccion]
[Email]
[Telefono - opcional]

Verantwortlich fur den Inhalt: [Nombre]
```

**Datenschutz (simplificado):**
```
Datenschutz
Wir speichern Ihre E-Mail-Adresse nur, um Sie uber den
Produktstart zu informieren. Keine Weitergabe an Dritte.
Sie konnen sich jederzeit abmelden.
```

---

## 4. Formulario - Campos y Tracking

### Campos del Formulario

| Campo | Tipo | Requerido | Tracking |
|-------|------|-----------|----------|
| Email | email input | SI | Lead principal |
| Volumen B2B | radio buttons | SI | Segmentacion |
| Precio aceptable | radio buttons | SI | Willingness to pay |

### Opciones de Herramienta

| Herramienta | Pros | Contras |
|-------------|------|---------|
| Google Forms embed | Gratis, facil | Feo, no brandeable |
| Typeform | Bonito, conversiones | Caro para volumen |
| Tally.so | Gratis, bonito | Menos conocido |
| Formspree | Simple, gratis | Sin logica condicional |
| **ConvertKit** | Email + forms | Ideal si quieres nurturing |

**Recomendacion:** Tally.so (gratis, bonito, exporta a CSV)

### Evento de Conversion

```javascript
// Google Analytics 4 - Evento de signup
gtag('event', 'sign_up', {
  method: 'waitlist',
  price_preference: '[valor seleccionado]',
  volume_segment: '[valor seleccionado]'
});

// Para Google Ads conversion tracking
gtag('event', 'conversion', {
  send_to: 'AW-XXXXXXXXX/XXXXXXX'
});
```

---

## 5. Google Ads - Configuracion

### Campana

| Setting | Valor |
|---------|-------|
| Tipo | Search |
| Objetivo | Leads |
| Ubicacion | Alemania |
| Idioma | Aleman |
| Budget diario | 7-10 EUR |
| Estrategia puja | Maximize conversions |

### Keywords (Aleman)

**Alta intencion (exact match):**
```
[zugferd shopify]
[xrechnung shopify]
[e-rechnung shopify]
[elektronische rechnung shopify]
[shopify zugferd app]
[shopify e-invoice germany]
```

**Media intencion (phrase match):**
```
"zugferd generator"
"xrechnung erstellen"
"e-rechnung software"
"b2b rechnung shopify"
```

**Negative keywords:**
```
-kostenlos
-free
-gratis
-woocommerce
-magento
-pdf
```

### Ad Copy (3 variantes)

**Variante A - Problema:**
```
Headline 1: ZUGFeRD fur Shopify | Ab Januar 2025 Pflicht
Headline 2: Automatische E-Rechnungen fur B2B
Headline 3: Nur 19 EUR/Monat - Jetzt Beta-Zugang sichern

Description 1: Ihre B2B-Kunden verlangen ZUGFeRD?
Unsere Shopify-App generiert rechtskonform XML-Rechnungen.
Einfach. Automatisch.

Description 2: Keine komplizierte Software.
Keine Umstellung. Nur Compliance.
Jetzt auf die Warteliste eintragen.
```

**Variante B - Solucion:**
```
Headline 1: Shopify + ZUGFeRD = Endlich moglich
Headline 2: E-Rechnungen automatisch generieren
Headline 3: Beta-Zugang mit 50% Rabatt

Description 1: Die einfachste Losung fur E-Rechnungspflicht.
ZUGFeRD 2.1.1 & XRechnung 3.0 direkt aus Shopify.
Installation in 2 Minuten.

Description 2: Entwickelt von Shopify-Experten.
DSGVO-konform. Deutscher Support.
Jetzt kostenlos vorregistrieren.
```

**Variante C - Urgencia:**
```
Headline 1: E-Rechnungspflicht seit 01/2025 - Sind Sie bereit?
Headline 2: ZUGFeRD-App fur Shopify
Headline 3: Erste 100 Nutzer: 50% Rabatt

Description 1: Ab 2027 mussen Sie E-Rechnungen auch SENDEN.
Bereiten Sie sich jetzt vor. Unsere App macht es automatisch.

Description 2: Kein Wechsel Ihrer Software notig.
Wir erganzen Shopify nahtlos.
Warteliste jetzt offen.
```

### Extensions

```
Sitelinks:
- So funktioniert es
- Preise
- FAQ (si tienes)
- Kontakt

Callouts:
- Keine Einrichtungsgebuhr
- Jederzeit kundbar
- Deutscher Support
- DSGVO-konform

Structured snippets:
Typen: ZUGFeRD 2.1.1, XRechnung 3.0, PDF/A-3
```

---

## 6. Pagina de Confirmacion (Thank You)

### Copy

```
Vielen Dank fur Ihre Anmeldung!

Sie sind jetzt auf der Warteliste fur den ZUGFeRD-Butler.

Was passiert als Nachstes?
1. Wir informieren Sie, sobald die Beta startet
2. Als Fruhbucher erhalten Sie 50% Rabatt im ersten Jahr
3. Bei Fragen: kontakt@[domain].de

In der Zwischenzeit:
Haben Sie Kollegen, die auch E-Rechnungen benotigen?
[Button: Per E-Mail teilen]
```

### Tracking Thank You Page

```javascript
// Conversion completada
gtag('event', 'generate_lead', {
  currency: 'EUR',
  value: 19  // Valor potencial del lead
});
```

---

## 7. Metricas y Dashboard

### KPIs a Trackear

| Metrica | Formula | Objetivo |
|---------|---------|----------|
| Visitantes | GA4 sessions | 200-500 |
| Signups | Form submissions | >= 30 |
| Conversion rate | Signups / Visitantes | >= 15% |
| CPL | Gasto ads / Signups | <= 5 EUR |
| % precio 19+ EUR | Respuestas 19+/Total | >= 50% |
| % volumen 50+ | Respuestas 50+/Total | Informativo |

### Dashboard Simple (Google Sheets)

```
| Dia | Gasto | Clicks | CPC | Visitas | Signups | Conv% | CPL |
|-----|-------|--------|-----|---------|---------|-------|-----|
| D1  |       |        |     |         |         |       |     |
| D2  |       |        |     |         |         |       |     |
| ... |       |        |     |         |         |       |     |
| D14 |       |        |     |         |         |       |     |
| TOT |       |        |     |         |         |       |     |
```

---

## 8. Checklist de Implementacion

### Dia 1: Setup

- [ ] Registrar dominio
- [ ] Crear cuenta Vercel/Netlify
- [ ] Crear cuenta Tally.so (formulario)
- [ ] Crear cuenta Google Analytics 4
- [ ] Vincular GA4 con Google Ads

### Dia 2: Landing Page

- [ ] Crear estructura HTML/CSS (o usar template)
- [ ] Insertar copy en aleman
- [ ] Embeber formulario Tally
- [ ] Agregar tracking GA4
- [ ] Crear pagina de confirmacion
- [ ] Agregar Impressum y Datenschutz
- [ ] Test en mobile

### Dia 3: Google Ads

- [ ] Crear campana Search
- [ ] Configurar keywords
- [ ] Crear 3 variantes de anuncios
- [ ] Agregar extensions
- [ ] Configurar conversion tracking
- [ ] Configurar negative keywords
- [ ] Establecer budget diario

### Dia 4: Launch

- [ ] Verificar todo funciona (test signup)
- [ ] Activar campana Google Ads
- [ ] Configurar alertas de gasto
- [ ] Crear dashboard de seguimiento

### Dias 5-17: Monitoreo

- [ ] Revisar metricas diariamente
- [ ] Ajustar keywords si CTR < 2%
- [ ] Ajustar copy si conversion < 10%
- [ ] Pausar keywords con CPC > 3 EUR sin conversiones

### Dia 18: Analisis

- [ ] Exportar datos de formulario
- [ ] Calcular metricas finales
- [ ] Evaluar contra umbrales P2
- [ ] Documentar resultados en `experimento-01-resultados.md`

---

## 9. Criterios de Decision Post-Experimento

### Escenario A: EXITO (Proceder a P2)

```
Signups >= 30 AND
Conversion >= 10% AND
"Pagaria 19+ EUR" >= 50%
```

**Accion:** Crear `02-modelo-financiero.md`, iniciar MVP

### Escenario B: EXITO PARCIAL (Ajustar y repetir)

```
Signups 15-29 OR
Conversion 5-10% OR
"Pagaria 19+ EUR" 30-50%
```

**Accion:** Ajustar copy/precio, extender experimento 7 dias mas

### Escenario C: FRACASO (Pivotar)

```
Signups < 15 AND
Conversion < 5% AND
"Pagaria 19+ EUR" < 30%
```

**Accion:** Evaluar pivot (otro nicho, otro mercado, abandonar)

---

## 10. Recursos

### Templates Landing Page (gratis)

- [Tailwind UI - Marketing](https://tailwindui.com/components/marketing)
- [Cruip - Free templates](https://cruip.com/free-templates/)
- [HTML5 UP](https://html5up.net/)

### Herramientas

- **Dominio:** Namecheap, INWX (aleman)
- **Hosting:** Vercel, Netlify
- **Forms:** Tally.so, Formspree
- **Analytics:** Google Analytics 4
- **Ads:** Google Ads
- **Traduccion:** DeepL Pro (si necesitas revisar)

### Documentacion Legal Alemania

- Impressum generator: [e-recht24.de](https://www.e-recht24.de/impressum-generator.html)
- Datenschutz generator: [e-recht24.de](https://www.e-recht24.de/muster-datenschutzerklaerung.html)

---

## Anexo: Mockup Estructura Visual

```
+--------------------------------------------------+
|  [Logo]                                          |
+--------------------------------------------------+
|                                                  |
|  ZUGFeRD-Rechnungen fur Shopify                  |
|  Automatisch. Einfach. Rechtskonform.            |
|                                                  |
|  Seit Januar 2025 mussen alle B2B-Unternehmen... |
|                                                  |
|  [ Jetzt auf Warteliste eintragen ]              |
|                                                  |
|  Entwickelt von Shopify-Experten | DSGVO-konform |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  DAS PROBLEM: SHOPIFY KANN KEIN ZUGFERD          |
|                                                  |
|  * Shopify generiert nur PDF...                  |
|  * B2B-Kunden verlangen ZUGFeRD...               |
|  * Bestehende Apps sind kompliziert...           |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  DIE LOSUNG: COMPLIANCE OHNE KOMPLEXITAT         |
|                                                  |
|  [Icon] Automatische XML-Generierung             |
|  [Icon] Nahtlose Integration                     |
|  [Icon] Ein Klick, fertig                        |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  SO FUNKTIONIERT ES                              |
|                                                  |
|  1. App installieren                             |
|  2. B2B-Kunden markieren                         |
|  3. Automatisch versenden                        |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  EINFACHE PREISGESTALTUNG                        |
|                                                  |
|         19 EUR / Monat                           |
|                                                  |
|  * Unbegrenzte Generierung                       |
|  * ZUGFeRD 2.1.1 + XRechnung 3.0                 |
|  * Automatischer E-Mail-Versand                  |
|  * Jederzeit kundbar                             |
|                                                  |
+--------------------------------------------------+
|                                                  |
|  SEIEN SIE BEREIT FUR DIE E-RECHNUNGSPFLICHT     |
|                                                  |
|  E-Mail: [________________________]              |
|                                                  |
|  B2B-Bestellungen/Monat:                         |
|  ( ) <10  ( ) 10-50  ( ) 50-200  ( ) 200+        |
|                                                  |
|  Welchen Preis wurden Sie zahlen?                |
|  ( ) 9 EUR  ( ) 19 EUR  ( ) 29 EUR  ( ) 29+ EUR  |
|                                                  |
|  [ Auf Warteliste eintragen ]                    |
|                                                  |
+--------------------------------------------------+
|  Impressum | Datenschutz | kontakt@domain.de     |
+--------------------------------------------------+
```

---

*Brief generado: 2026-02-04*
*Proyecto: shopify-custom-dev-europa*
*Experimento: 01 - Validacion de interes German E-Invoice Butler*
