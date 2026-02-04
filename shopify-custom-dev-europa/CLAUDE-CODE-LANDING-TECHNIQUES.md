# Tecnicas para Landing Pages con Claude Code (via Grok 3)

> Fuente: API 900 - Grok 3 (ticket 246)

---

## 1. Estructura de Prompts Efectivos

### Principios Clave
- **Contexto claro**: Proposito, producto, publico, CTA
- **Detalles visuales**: Colores, tipografias, elementos especificos
- **Restricciones explicitas**: Lo que NO quieres
- **Iteracion**: Dividir en pasos (wireframe > estilos > interactividad)

### Template de Prompt Basico
```
Disena una landing page para [producto/servicio] dirigido a [publico objetivo].
El tono debe ser [tono de la marca], y el objetivo principal es [CTA].

Usa un diseno moderno con las siguientes caracteristicas:
- Paleta de colores: [especificar colores, ej. tonos tierra con acentos coral]
- Tipografia: [especificar fuente, ej. serif elegante para titulos, sans-serif para cuerpo]
- Estilo visual: [ej. ilustraciones minimalistas, imagenes realistas]

Restricciones:
- No uses gradientes purpura
- No uses fuentes genericas como Inter, Roboto
- No uses layouts con hero sections genericas (texto izquierda, imagen derecha)

Genera un wireframe inicial en HTML/CSS con comentarios explicativos.
```

---

## 2. Restricciones Anti-AI-Slop

### Fuentes PROHIBIDAS
- Inter, Roboto, Open Sans
- Cualquier system font generica

### Fuentes RECOMENDADAS
- **Titulos**: Playfair Display, DM Serif Display
- **Cuerpo**: Poppins, Nunito, IBM Plex Sans

### Colores PROHIBIDOS
- Gradientes purpura (#6366f1, #8b5cf6)
- Azul neon startup
- Combinaciones azul/blanco genericas

### Colores RECOMENDADOS
- Paletas personalizadas basadas en marca
- Tonos calidos: terracota (#E07A5F), crema (#F2CC8F)
- Acentos inesperados: verde oliva (#3D405B)

### Layouts PROHIBIDOS
- Hero con texto izquierda + imagen derecha
- 3 columnas de features identicas
- Cards con iconos circulares

### Layouts RECOMENDADOS
- Asimetricos
- Grids no convencionales
- Texto superpuesto en imagenes
- Diagonales y overlaps

### Animaciones PROHIBIDAS
- Fade-in masivo al scroll
- Bounce effects genericos

### Animaciones RECOMENDADAS
- Sutiles y especificas
- Scroll suave para CTAs
- Transiciones rapidas (150ms)

---

## 3. Uso del Skill frontend-design

### Especificar Framework
```
Genera el codigo usando [vanilla HTML/CSS | Tailwind CSS] para un diseno responsivo.
```

### Pedir Componentes Modulares
```
Divide el codigo en secciones claras: header, hero, features, footer.
Incluye comentarios explicativos para cada seccion.
```

### Asegurar Responsividad
```
Asegurate de que el diseno sea completamente responsivo con breakpoints:
- Mobile: max-width 480px
- Tablet: max-width 768px
- Desktop: min-width 769px
```

---

## 4. Workflow Paso a Paso

### Paso 1: Definicion del Proyecto
- Definir proposito, publico, CTA
- Crear brief con colores, tipografia, tono
- Listar restricciones anti-AI-slop

### Paso 2: Wireframe Inicial
```
Crea un wireframe en HTML/CSS para una landing page de [producto].
Incluye secciones: header, hero, features, footer.
Usa un layout asimetrico y evita estructuras genericas.
```

### Paso 3: Refinamiento Visual
```
Refina el wireframe con:
- Paleta de colores: [colores]
- Tipografia: [fuentes]
- Estilo visual: [descripcion]
Asegurate de que sea responsivo.
```

### Paso 4: Elementos Unicos
```
Anade ilustraciones minimalistas que reflejen [tema] en la seccion de features.
Incluye animacion sutil de scroll para el CTA.
Evita efectos genericos de fade-in.
```

### Paso 5: Revision y Ajustes
```
Ajusta el espaciado en la seccion hero para que sea mas compacto.
Cambia el color de fondo a [color].
```

### Paso 6: Optimizacion
```
Optimiza el codigo para carga rapida:
- Elimina CSS no utilizado
- Comprime imagenes
- Usa font-display: swap
```

### Paso 7: Deploy
- Exportar codigo final
- Desplegar en Vercel/Netlify

---

## 5. Ejemplos de Prompts Efectivos

### Prompt Wireframe
```
Crea un wireframe en HTML/CSS para una landing page de un curso online
de fotografia dirigido a principiantes. El objetivo es que se inscriban.

Incluye secciones:
- Header con navegacion
- Hero con CTA
- Seccion de beneficios
- Testimonios
- Footer

Usa un layout no convencional: hero con texto superpuesto en esquina
y imagen de fondo. Evita estructuras genericas (texto izquierda,
imagen derecha). No uses Inter ni gradientes purpura.
```

### Prompt Diseno Visual
```
Refina el wireframe de la landing page del curso de fotografia.

Paleta de colores:
- Ambar: #FFB085
- Beige: #F5E9DA
- Azul oscuro: #2C3E50 (acentos)

Tipografias:
- Titulos: Playfair Display
- Cuerpo: Lato

Asegurate de que sea responsivo con breakpoints mobile y desktop.
Incluye comentarios en el codigo para cada seccion.
```

### Prompt Elementos Unicos
```
Anade ilustraciones minimalistas de camaras y paisajes en la seccion
de beneficios. Incluye animacion suave de desplazamiento para el
boton CTA en la hero section.

Evita efectos genericos como fade-in masivo.
Las ilustraciones deben ser coherentes con la paleta de colores.
```

### Prompt Revision
```
Revisa la seccion de testimonios de la landing page.
- Cambia el fondo a color solido beige (#F5E9DA)
- Ajusta espaciado entre tarjetas a 20px
- Las tarjetas deben apilarse en columna en mobile
```

---

## 6. Tips Adicionales

1. **Itera constantemente** - No esperes resultado perfecto en primer intento
2. **Usa referencias** - "Inspirate en el estilo de [sitio], pero adapta los colores"
3. **Personaliza el codigo** - Anade tu toque manual para que no parezca automatizado
4. **Complementa con otras tools** - Figma para mockups, Canva para graficos

---

## 7. Checklist Pre-Generacion

- [ ] Brief con proposito y publico definidos
- [ ] Paleta de colores especifica (no generica)
- [ ] Tipografias seleccionadas (no Inter/Roboto)
- [ ] Restricciones de layout explicitas
- [ ] Ejemplos de referencia (sitios que te gustan)
- [ ] CTA claro y definido

---

*Generado: 2026-02-04*
*Fuente: API 900 - Grok 3 (ticket 246)*
