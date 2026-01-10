# Guía Rápida: Sistema de Prompts para Minisitios Inmobiliarios

## 📂 Ubicación de Prompts Maestros
Todos los prompts maestros están en: `../prompts-generales/`

---

## 🎯 Flujo de Trabajo

### Paso 0: Orquestador (YA COMPLETADO)
- ✅ Directorio creado
- ✅ `README.md` creado
- ✅ `00-idea-inicial.md` creado
- **Siguiente acción:** Completar `00-idea-inicial.md` con tu idea

---

### Paso 1: Validador de Ideas
**Archivo a usar:** `../prompts-generales/Prompt Maestro 1.md`

**Qué hace:**
- Valida si el problema es real
- Define el cliente objetivo (beachhead)
- Mide interés en la solución
- Valida supuestos operativos clave

**Input:** `00-idea-inicial.md`  
**Output:** `01-reporte-validacion.md`

**Prompt de Activación:**
```
Eres un Analista de Oportunidades de Mercado y Estratega Lean Startup. Tu única misión es guiar a un emprendedor a través del proceso de validación de su idea, basándote en evidencia, y compilar los resultados en un reporte estandarizado.

REGLAS OBLIGATORIAS:
- Tu proceso es estrictamente secuencial (Problema -> Cliente/Mercado -> Interés -> Modelo).
- No avances a un paso sin evidencia concreta del paso anterior.
- Al finalizar el proceso, genera un archivo markdown llamado `01-reporte-validacion.md`. Debes usar la plantilla oficial.
- Si el usuario no te provee un archivo de entrada, pídele que ejecute primero el "Prompt Orquestador".

COMIENZA AHORA con esta pregunta:
"He sido activado. Por favor, proporcióname la ruta al archivo `00-idea-inicial.md` de tu proyecto para comenzar el análisis."
```

---

### Paso 2: Arquitecto Financiero
**Archivo a usar:** `../prompts-generales/Prompt Maestro 2.md`

**Qué hace:**
- Crea Lean Canvas
- Define modelo de ingresos
- Calcula Unit Economics
- Proyecta costos (CapEx y OpEx)
- Genera proyección a 12 meses

**Input:** `01-reporte-validacion.md`  
**Output:** `02-modelo-financiero.md`

**Templates usados:**
- `template-capex.md`
- `template-opex.md`
- `template-proyeccion-12-meses.md`

---

### Paso 3: CMO (Chief Marketing Officer)
**Archivo a usar:** `../prompts-generales/Prompt Maestro 3.md`

**Qué hace:**
- Prioriza canales de marketing (ICE Score)
- Diseña experimentos de crecimiento
- Crea roadmap de tracción a 30 días
- Define plan para primeros 100 clientes

**Input:** `02-modelo-financiero.md`  
**Output:** `03-plan-de-traccion.md`

**Templates usados:**
- `template-ice-score.md`
- `template-experimento.md`

---

### Paso 3.5: Constructor MVP
**Archivo a usar:** `../prompts-generales/Prompt Maestro 3.5 - Constructor MVP.md`

**Qué hace:**
- Convierte el plan en ejecución práctica
- Define MVP de bajo costo
- Crea plan de implementación

**Input:** `03-plan-de-traccion.md`  
**Output:** `04-plan-ejecucion-mvp.md`

---

### Paso 4: Inversionista
**Archivo a usar:** `../prompts-generales/Prompt Maestro 4.md`

**Qué hace:**
- Evalúa el negocio desde perspectiva de inversión
- Identifica riesgos y oportunidades
- Genera investment memo

**Input:** Todos los reportes anteriores  
**Output:** `05-investment-memo.md`

---

### Paso 5: Compilador
**Archivo a usar:** `../prompts-generales/Prompt Maestro 5.md`

**Qué hace:**
- Unifica todos los reportes
- Crea pitch deck final
- Prepara presentación para inversores

**Input:** Todos los reportes  
**Output:** `06-pitch-deck-final.md`

---

## 📋 Templates Disponibles en Este Directorio

- ✅ `template-capex.md` - Para costos de arranque
- ✅ `template-opex.md` - Para costos operativos mensuales
- ✅ `template-proyeccion-12-meses.md` - Para proyección financiera
- ✅ `template-ice-score.md` - Para priorización de canales
- ✅ `template-experimento.md` - Para diseño de experimentos

---

## 🚀 Cómo Usar Este Sistema

1. **Completa `00-idea-inicial.md`** con tu idea de negocio
2. **Activa cada Prompt Maestro en orden** copiando el "Prompt de Activación"
3. **Proporciona la ruta del archivo** cuando el experto lo pida
4. **Sigue las instrucciones** del experto para completar cada fase
5. **Revisa el archivo generado** antes de pasar al siguiente paso

---

## 💡 Consejos

- **No saltes pasos:** Cada experto necesita el output del anterior
- **Guarda evidencia:** Los prompts piden datos reales, no suposiciones
- **Actualiza el README.md:** Marca cada paso como completado
- **Usa los templates:** Están diseñados para facilitar el proceso

---

**Sistema creado:** 2025-11-22  
**Proyecto:** Minisitios Inmobiliarios
