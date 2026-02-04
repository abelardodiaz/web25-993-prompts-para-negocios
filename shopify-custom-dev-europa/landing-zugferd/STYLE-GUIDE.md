# Style Guide: Landing ZUGFeRD - Anti-AI-Slop

## Direccion Estetica: Editorial Germanica + Industrial Moderno

Inspiracion: Revistas de diseno aleman (032c, Mono.Kultur), interfaces de banca alemana premium, estetica Bauhaus actualizada.

---

## RESTRICCIONES ABSOLUTAS (NO USAR)

### Tipografia Prohibida
- Inter, Roboto, Arial, Helvetica Neue
- Open Sans, Lato, Montserrat
- System fonts genericas
- Space Grotesk (muy usado en AI)

### Colores Prohibidos
- Gradientes purpura (#6366f1, #8b5cf6, etc)
- Azul startup generico (#3b82f6)
- Verde menta AI (#10b981)
- Fondos blancos puros (#ffffff)

### Layouts Prohibidos
- Hero centrado con 3 columnas debajo
- Navbar con logo izquierda + links derecha
- Cards con iconos circulares + titulo + descripcion
- Secciones alternando fondo blanco/gris

### Patrones Prohibidos
- Botones con gradiente y sombra suave
- Bordes redondeados excesivos (> 8px)
- Animaciones de fade-in al scroll
- Ilustraciones vectoriales isometricas

---

## DIRECCION VISUAL APROBADA

### Tipografia
- Display: **DM Serif Display** o **Playfair Display** (serif elegante)
- Body: **IBM Plex Sans** o **Archivo** (sans-serif industrial)
- Monospace para datos tecnicos: **JetBrains Mono** o **Fira Code**

### Paleta de Colores
```css
:root {
  /* Fondo principal - papel aleman */
  --bg-primary: #F5F3EE;
  --bg-secondary: #E8E4DD;

  /* Texto */
  --text-primary: #1A1A1A;
  --text-secondary: #4A4A4A;
  --text-muted: #7A7A7A;

  /* Accent - naranja industrial aleman */
  --accent: #E85D04;
  --accent-hover: #D45103;

  /* Detalles */
  --border: #D1CCC3;
  --border-dark: #1A1A1A;
}
```

### Layout
- Asimetrico, inspirado en diseno editorial
- Margen izquierdo generoso (columna de navegacion o espacio)
- Tipografia grande para headlines (clamp 3-6rem)
- Grid de 12 columnas con elementos que rompen el grid
- Espaciado vertical generoso (8rem+ entre secciones)

### Elementos Distintivos
- Lineas horizontales gruesas como separadores
- Numeros grandes como decoracion (01, 02, 03)
- Texto rotado verticalmente en margenes
- Bordes solidos (2-3px) en lugar de sombras
- Hover states con cambio de color solido, no transicion suave

### Motion
- Transiciones rapidas y precisas (150ms max)
- No fade-ins suaves
- Cursor personalizado en hover de elementos interactivos
- Underline que crece desde la izquierda en links

---

## EJEMPLOS DE REFERENCIA

1. **032c Magazine** - Editorial experimental aleman
2. **Commerzbank** - Banca alemana, seriedad + modernidad
3. **Deutsche Bahn Design System** - Industrial funcional
4. **Stripe Press** - Editorial tech premium (sin el minimalismo extremo)

---

## CHECKLIST PRE-IMPLEMENTACION

- [ ] Tipografia: NO usa fonts genericas
- [ ] Colores: NO tiene gradientes purpura ni azul startup
- [ ] Layout: NO es hero centrado + 3 columnas
- [ ] Botones: NO tienen gradiente ni border-radius excesivo
- [ ] Animaciones: NO tiene fade-in generico al scroll
- [ ] Iconos: NO usa iconos de outline genericos (Heroicons, etc)

---

## NOTAS TECNICAS

- Usar CSS custom properties para theming
- Mobile-first pero sin sacrificar la estetica editorial
- Performance: fonts con font-display: swap
- Sin frameworks CSS (no Tailwind, no Bootstrap)
- CSS Grid + Flexbox nativos
