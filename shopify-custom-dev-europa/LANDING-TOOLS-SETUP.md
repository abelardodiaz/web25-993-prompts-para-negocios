# Setup: Skills y Herramientas para Landing Pages Anti-AI-Slop

## Estado de Implementacion

| Recurso | Estado | Ubicacion |
|---------|--------|-----------|
| Skill frontend-design | INSTALADO | `~/.claude/skills/frontend-design/SKILL.md` |
| Style Guide | CREADO | `landing-zugferd/STYLE-GUIDE.md` |
| Landing HTML | CREADO | `landing-zugferd/index.html` |
| Thank You Page | CREADO | `landing-zugferd/danke.html` |
| API 900 (Grok 3) | FUNCIONANDO | `wsl curl http://10.254.0.3:8900/api/v1/...` |

---

## 1. Skill frontend-design (Anthropic)

### Ubicacion
```
C:\Users\abela\.claude\skills\frontend-design\SKILL.md
```

### Como Usar

El skill se activa automaticamente cuando pides crear interfaces frontend. Para invocarlo explicitamente:

```
/frontend-design Crea una landing page para [producto] con estetica [estilo]
```

### Principios Clave

1. **Design Thinking Primero**: Definir proposito, tono, restricciones antes de codear
2. **Tipografia Distintiva**: Evitar Inter, Roboto, Arial
3. **Colores Cohesivos**: Dominantes + accents, no paletas timidas
4. **Motion Intencional**: Animaciones de alto impacto, no scatter
5. **Composicion Espacial**: Asimetria, overlap, negative space

### Estilos Sugeridos

- Brutalist/raw
- Editorial/magazine
- Retro-futuristic
- Art deco/geometric
- Industrial/utilitarian
- Luxury/refined

---

## 2. Landing ZUGFeRD Creada

### Archivos

```
shopify-custom-dev-europa/landing-zugferd/
  index.html       # Landing principal (estetica editorial germanica)
  danke.html       # Pagina de confirmacion
  STYLE-GUIDE.md   # Restricciones anti-AI-slop
  README.md        # Instrucciones de deploy
```

### Caracteristicas Anti-AI-Slop Implementadas

- Tipografia: DM Serif Display + IBM Plex Sans + JetBrains Mono
- Colores: Paleta papel aleman (#F5F3EE) + naranja industrial (#E85D04)
- Layout: Grid asimetrico con rail lateral vertical
- Numeracion editorial grande (01, 02, 03)
- Bordes solidos en lugar de sombras
- Transiciones rapidas (150ms)
- Sin gradientes purpura
- Sin border-radius excesivo

### Deploy Rapido

```bash
cd shopify-custom-dev-europa/landing-zugferd

# Opcion 1: Vercel
npx vercel

# Opcion 2: Netlify
npx netlify deploy --prod

# Opcion 3: Abrir local
start index.html
```

---

## 3. API 900 - Grok 3 (FUNCIONANDO)

**IMPORTANTE**: Usar WSL para conectar a la red local.

### Health Check
```bash
wsl curl -s http://10.254.0.3:8900/api/v1/help
```

### Providers Disponibles
```bash
wsl curl -s http://10.254.0.3:8900/api/v1/ping-pong/providers
```

Providers activos: openai, deepseek, gemini, **grok**, groq

### Buscar en Twitter via Grok 3
```bash
wsl curl -s -X POST http://10.254.0.3:8900/api/v1/ping-pong \
  -H "Content-Type: application/json" \
  -d '{
    "titulo": "Busqueda landing pages",
    "provider": "grok",
    "model": "grok-3",
    "prompt": "Tu consulta aqui",
    "proyecto_origen": "993"
  }'
```

### Ejemplo de Respuesta Exitosa (ticket 245)

Grok 3 encontro estos ejemplos de landing pages anti-AI-slop:

| Proyecto | Twitter | Caracteristica Unica |
|----------|---------|---------------------|
| Placid.app | @placidapp | Ilustraciones personalizadas tonos pastel |
| Carrd.co | @carrd | Esquemas neon, animaciones scroll |
| IndieMaker.space | @IndieMakerSpace | Paleta retro mostaza+azul, tipografia maquina escribir |
| Notionery.com | @notionery | Bloques color asimetricos, microinteracciones |
| Makerlog | @getmakerlog | Monocromatico + avatares usuarios reales |

### Hashtags para Buscar Inspiracion
- `#indiehacker`
- `#buildinpublic`
- `#landingpage`
- `@IndieHackers`
- `@uidesignpatterns`

---

## 4. MCPs Alternativos para Twitter/X

Si API 900 no funciona, instalar MCPs externos:

### grok-search-mcp
```bash
# Requiere API key de xAI
npm install -g @stat-guy/grok-search-mcp
```

### twitter-X-mcp-server
```bash
# Busqueda natural language
npm install -g @0xgval/twitter-x-mcp-server
```

---

## 5. Herramientas Complementarias

### Para Componentes Base

| Herramienta | URL | Uso |
|-------------|-----|-----|
| v0.dev | v0.dev | Generar componentes React/Tailwind, luego personalizar |
| Lovable | lovable.dev | Diseño pulido, exportar a GitHub |
| Bolt.new | bolt.new | Full-stack rapido |

### Workflow Recomendado

1. Generar componente base en v0.dev o Lovable
2. Exportar codigo
3. Refinar con Claude Code + skill frontend-design
4. Aplicar restricciones de STYLE-GUIDE.md

---

## 6. Prompt Template Anti-AI-Slop

Usar este template cuando generes landing pages:

```
Crea una landing page para [PRODUCTO] con estas restricciones:

PROHIBIDO:
- Tipografia: Inter, Roboto, Arial, Space Grotesk
- Colores: Gradientes purpura, azul startup (#3b82f6)
- Layout: Hero centrado + 3 columnas debajo
- Bordes: radius > 8px
- Animaciones: fade-in generico al scroll

DIRECCION ESTETICA: [Elegir una]
- Editorial germanica
- Brutalist/raw
- Art deco geometric
- Industrial utilitarian

REFERENCIAS:
- [Lista de sitios que te gustan]

OUTPUT: HTML + CSS vanilla, production-ready
```

---

## 7. Checklist de Uso

### Antes de Crear Landing

- [ ] Definir direccion estetica clara
- [ ] Listar restricciones explicitas (NO usar X)
- [ ] Tener referencias visuales

### Durante la Creacion

- [ ] Verificar tipografia no generica
- [ ] Verificar colores no "AI slop"
- [ ] Verificar layout no es hero+3cols
- [ ] Verificar animaciones intencionales

### Despues de Crear

- [ ] Review contra STYLE-GUIDE.md
- [ ] Test en mobile
- [ ] Comparar con landing generica (deberia verse diferente)

---

## Proximos Pasos

1. **Deploy landing ZUGFeRD** - Ver `landing-zugferd/README.md`
2. **Conectar formulario** - Tally.so o Formspree
3. **Configurar GA4 + Ads** - Ver brief original
4. **Verificar API 900** - Cuando servidor disponible

---

*Creado: 2026-02-04*
*Proyecto: web25-993-prompts-para-negocios*
