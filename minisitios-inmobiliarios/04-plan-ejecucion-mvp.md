# Plan de Ejecución MVP: Minisitios Inmobiliarios

## 1. Definición del MVP (Demo de Venta)
**Objetivo:** Una herramienta visual para cerrar ventas, no un producto final.
**Tecnología:** HTML/CSS Estático (Tu plantilla limpia) + JSON simple (opcional).
**Infraestructura:** VPS actual (subir carpeta `/demo`).

## 2. Alcance Funcional (Lo que SÍ lleva)

### A. Pantalla Home (Catálogo)
- [ ] **Header:** Logo texto "InmoDemo" + Menú falso (Inicio, Contacto).
- [ ] **Hero:** Título "Encuentra tu hogar ideal" + Subtítulo.
- [ ] **Grid Propiedades:** 3 Tarjetas estáticas.
  - Foto (cuadrada/rectángular).
  - Título: "Casa en Lomas 4ta Sección".
  - Precio: "$18,500 MXN".
  - Botón: "Ver Detalles" (Link a `detalle.html`).
- [ ] **Footer:** "Demo creada por [Tu Nombre]".

### B. Pantalla Detalle (Landing Propiedad)
- [ ] **Galería:** 1 Foto principal grande + 4 miniaturas abajo (sin lightbox complejo).
- [ ] **Info Principal:** Título + Precio destacado.
- [ ] **Descripción:** Lista de bullets (3 Recámaras, 2 Baños, Cochera).
- [ ] **Ubicación:** Imagen estática de mapa (screenshot de Google Maps).
- [ ] **Call to Action (CTA):**
  - Botón Flotante o Fijo: **"Contactar por WhatsApp"**.
  - Enlace: `https://wa.me/TUNUMERO?text=Info%20casa%20Lomas`.

## 3. Lo que NO lleva (Ni lo intentes hoy)
- ❌ Panel de Administración (Admin).
- ❌ Base de Datos (MySQL/Postgres).
- ❌ Formulario de contacto con envío de correo (Solo mailto: o WhatsApp).
- ❌ Buscador funcional.
- ❌ Mapa interactivo de Google (API Key).

## 4. Cronograma de Construcción (Sábado Tarde)

| Hora | Actividad | Meta |
| :--- | :--- | :--- |
| **16:00 - 17:00** | **Limpieza** | Duplicar plantilla y borrar JS/CSS innecesario. Dejar solo `index.html` y `property.html`. |
| **17:00 - 18:00** | **Estructura** | Editar HTML para que se vea como la lista de arriba. Quitar secciones de "Testimonios", "Blog", etc. |
| **18:00 - 19:00** | **Contenido** | Buscar 5 fotos bonitas de casas (Unsplash/Pexels). Inventar datos realistas. |
| **19:00 - 19:30** | **WhatsApp** | Configurar los enlaces de WhatsApp y probar que abran la app en tu celular. |
| **19:30 - 20:00** | **Despliegue** | Subir archivos al VPS. Verificar que cargue rápido. |

## 5. Checklist de Entrega (Antes de enviar el link)
- [ ] ¿Se ve bien en el celular? (90% de tus clientes lo verán ahí).
- [ ] ¿El botón de WhatsApp abre la conversación?
- [ ] ¿Las fotos cargan rápido?
- [ ] ¿No hay enlaces rotos (404)?

## Veredicto del Constructor
- **Complejidad:** Baja.
- **Riesgo:** Mínimo.
- **Enfoque:** Visual y Móvil.
- **Instrucción:** ¡Manos a la obra! No perfecciones, solo haz que funcione.
