# Landing ZUGFeRD Butler

Landing page de validacion para el experimento de e-invoicing aleman.

## Archivos

```
landing-zugferd/
  index.html       # Landing page principal
  danke.html       # Pagina de confirmacion (thank you)
  STYLE-GUIDE.md   # Guia de estilo anti-AI-slop
  README.md        # Este archivo
```

## Estilo Visual

**Direccion estetica:** Editorial Germanica + Industrial Moderno

Inspirado en:
- Revistas de diseno aleman (032c, Mono.Kultur)
- Bauhaus actualizado
- Deutsche Bahn Design System

### Caracteristicas Anti-AI-Slop

- Tipografia: DM Serif Display + IBM Plex Sans (NO Inter/Roboto)
- Colores: Paleta papel aleman (#F5F3EE) + accent naranja industrial
- Layout: Asimetrico con rail lateral vertical
- Sin gradientes, sin sombras suaves, sin border-radius excesivo
- Numeracion editorial grande (01, 02, 03...)
- Transiciones rapidas (150ms), no fade-ins suaves

## Deploy

### Opcion 1: Vercel (Recomendado)

```bash
# Instalar Vercel CLI
npm i -g vercel

# Desde el directorio landing-zugferd/
vercel
```

### Opcion 2: Netlify

```bash
# Drag & drop en netlify.com/drop
# O usar Netlify CLI
npm i -g netlify-cli
netlify deploy --prod
```

### Opcion 3: GitHub Pages

1. Crear repo en GitHub
2. Push archivos
3. Settings > Pages > Deploy from branch

## Formulario

El formulario usa JavaScript vanilla. Para produccion, conectar con:

- **Tally.so** (recomendado): Reemplazar el form con embed de Tally
- **Formspree**: Cambiar action a `https://formspree.io/f/xxxxx`
- **ConvertKit**: Para nurturing de leads

### Campos

| Campo | Tipo | Proposito |
|-------|------|-----------|
| email | email | Lead principal |
| volume | radio (4 opciones) | Segmentacion |
| price | radio (4 opciones) | Willingness to pay |

## Tracking

### Google Analytics 4

Descomentar el codigo en index.html y reemplazar `G-XXXXXXXXXX`:

```javascript
gtag('config', 'G-XXXXXXXXXX');
```

### Google Ads Conversion

En danke.html, agregar:

```javascript
gtag('event', 'conversion', {
  send_to: 'AW-XXXXXXXXX/XXXXXXX'
});
```

## Personalizacion

### Cambiar dominio

Buscar y reemplazar:
- `zugferd-butler.de` -> tu dominio
- `kontakt@zugferd-butler.de` -> tu email

### Agregar Impressum/Datenschutz

Crear archivos:
- `/impressum.html`
- `/datenschutz.html`

Generadores gratuitos:
- https://www.e-recht24.de/impressum-generator.html
- https://www.e-recht24.de/muster-datenschutzerklaerung.html

## Checklist Pre-Launch

- [ ] Dominio configurado
- [ ] Formulario conectado (Tally/Formspree/etc)
- [ ] GA4 configurado
- [ ] Google Ads conversion tracking
- [ ] Impressum creado
- [ ] Datenschutz creado
- [ ] Test en mobile
- [ ] Test de formulario completo
- [ ] Pagina de confirmacion funciona

## Metricas de Exito

Del brief (`experimento-01-landing-brief.md`):

| Metrica | Objetivo |
|---------|----------|
| Signups | >= 30 |
| Conversion rate | >= 15% |
| CPL | <= 5 EUR |
| Precio 19+ EUR | >= 50% |
