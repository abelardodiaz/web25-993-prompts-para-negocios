# Prompt Técnico para Generación de Demo: Minisitios Inmobiliarios

## 🎯 Objetivo
Crear una demo funcional en HTML/CSS de un portal inmobiliario llamado **"mini-web.com"**.
El diseño debe ser una **réplica visual exacta** del estilo de `domusrentas.com`, utilizando sus colores, tipografía y estructura de componentes, pero implementado con **Tailwind CSS** vía CDN.

## 📂 Archivos a Generar
1.  `index.html` (Home / Catálogo)
2.  `property.html` (Landing de Propiedad)

---

## 🎨 Especificaciones de Diseño (Design Tokens)

### Colores (Exactos)
-   **Primary (Header/Footer):** `#0D3B66` (Azul Marino Oscuro)
-   **Accent (Botones/Precios):** `#D45D32` (Terracota)
-   **Background (Body):** `#F8F7F5` (Blanco Hueso)
-   **Card Background:** `#FFFFFF` (Blanco Puro)
-   **Text Main:** `#333333` (Gris Oscuro)
-   **Text Light:** `#666666` (Gris Medio)

### Tipografía
-   **Familia:** 'Open Sans', sans-serif (Importar de Google Fonts).
-   **Pesos:** 400 (Regular), 600 (SemiBold), 700 (Bold).

### Framework CSS
-   **Tailwind CSS (CDN):** `<script src="https://cdn.tailwindcss.com"></script>`
-   **FontAwesome (CDN):** `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">`

---

## 🏠 Página 1: Home (`index.html`)

### 1. Header
-   **Fondo:** `bg-[#0D3B66]`
-   **Contenido:**
    -   Logo texto: **mini-web.com** (Blanco, Bold, Text-xl).
    -   Nav (Desktop): Inicio, Propiedades, Contacto (Texto blanco, hover:text-gray-300).
    -   Nav (Móvil): Icono Hamburguesa (`fa-bars`).

### 2. Filtros (Fake)
-   **Contenedor:** `bg-white shadow-sm py-4`.
-   **Elementos:** 4 Dropdowns visuales (Ubicación, Precio, Tipo, Recámaras) + Botón "Buscar" (`bg-[#D45D32] text-white rounded-md px-6 py-2`).

### 3. Grid de Propiedades
-   **Layout:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 container mx-auto px-4 py-8`.
-   **Tarjeta de Propiedad (`.property-card`):**
    -   **Contenedor:** `bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300`.
    -   **Imagen:** Aspect ratio 4:3, `object-cover w-full h-64`.
    -   **Etiqueta:** Badge "Renta" (`bg-[#D45D32] text-white text-xs font-bold px-2 py-1 absolute top-4 left-4 rounded`).
    -   **Cuerpo:** `p-6`.
        -   **Título:** `text-xl font-bold text-[#0D3B66] mb-2`.
        -   **Precio:** `text-2xl font-bold text-[#D45D32] mb-4`.
        -   **Iconos (Row):** Flex container con iconos FontAwesome + texto pequeño (Camas, Baños, M2). Color gris suave.
        -   **Botón:** `block w-full text-center bg-[#0D3B66] text-white font-bold py-3 rounded-lg mt-4 hover:bg-opacity-90 transition`. Texto: "Ver Detalles".

---

## 🏢 Página 2: Landing Propiedad (`property.html`)

### 1. Hero / Galería
-   **Layout:** Grid asimétrico.
    -   Izquierda (2/3): Imagen Principal Grande (`rounded-xl shadow-lg`).
    -   Derecha (1/3): Grid de 4 miniaturas (`rounded-lg object-cover h-32 w-full`).

### 2. Contenido Principal (2 Columnas)
-   **Columna Izquierda (Detalles):**
    -   **Título:** H1 Grande (`text-3xl font-bold text-[#0D3B66]`).
    -   **Ubicación:** Texto gris con icono de pin (`fa-map-marker-alt`).
    -   **Características Destacadas:** Grid de 4 iconos grandes con etiquetas (Ej. "3 Recámaras", "2 Baños", "120 m²", "2 Estacionamientos").
    -   **Descripción:** Texto largo (lorem ipsum) explicando la propiedad.
    -   **Servicios:** Lista con checkmarks verdes (`fa-check text-green-500`).
    -   **Mapa:** Imagen estática placeholder (`bg-gray-200 h-64 rounded-xl flex items-center justify-center`).

-   **Columna Derecha (Sticky Sidebar):**
    -   **Tarjeta de Precio/Contacto:** `bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-24`.
    -   **Precio:** `text-4xl font-bold text-[#D45D32] mb-2`.
    -   **Periodo:** "MXN / Mensual".
    -   **Botón 1:** "Agenda tu Cita" (`bg-[#D45D32] w-full text-white py-3 rounded-lg font-bold mb-3`).
    -   **Botón 2:** "Contactar por WhatsApp" (`bg-[#25D366] w-full text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2`). Icono `fa-whatsapp`.

### 3. Footer
-   **Fondo:** `bg-[#0D3B66] text-white py-8`.
-   **Contenido:** Links dummy (Términos, Privacidad) y Copyright.

---

## 🛠️ Instrucciones de Implementación
1.  Usa **HTML5 semántico**.
2.  No escribas CSS personalizado, usa **clases de Tailwind** para todo.
3.  Usa **FontAwesome** para todos los iconos.
4.  Asegura que sea **totalmente responsive** (Mobile First).
5.  **Hardcodea** los datos de 3 propiedades en el `index.html` y los detalles de 1 propiedad en `property.html`.
