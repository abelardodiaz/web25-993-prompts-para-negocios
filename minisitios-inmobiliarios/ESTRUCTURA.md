# Estructura del Proyecto: Minisitios Inmobiliarios

## 📁 Archivos del Sistema

### Archivos de Gestión
- `README.md` - Dashboard del proyecto con estado y progreso
- `GUIA-PROMPTS.md` - Guía rápida de cómo usar los prompts maestros
- `ESTRUCTURA.md` - Este archivo (documentación de estructura)

### Archivos de Checkpoints (Generados por Prompts)
- `00-idea-inicial.md` - ✅ Creado (pendiente completar)
- `01-reporte-validacion.md` - ⏳ Pendiente (Prompt Maestro 1)
- `02-modelo-financiero.md` - ⏳ Pendiente (Prompt Maestro 2)
- `03-plan-de-traccion.md` - ⏳ Pendiente (Prompt Maestro 3)
- `04-plan-ejecucion-mvp.md` - ⏳ Pendiente (Prompt Maestro 3.5)
- `05-investment-memo.md` - ⏳ Pendiente (Prompt Maestro 4)
- `06-pitch-deck-final.md` - ⏳ Pendiente (Prompt Maestro 5)

### Archivos de Soporte (Generados por Prompts 2 y 3)
- `03-capex.md` - ⏳ Pendiente (Generado por Prompt 2)
- `04-opex.md` - ⏳ Pendiente (Generado por Prompt 2)
- `05-proyeccion.md` - ⏳ Pendiente (Generado por Prompt 2)
- `06-ice-score.md` - ⏳ Pendiente (Generado por Prompt 3)
- `07-experimento.md` - ⏳ Pendiente (Generado por Prompt 3)

### Templates (Copiados desde prompts-generales)
- `template-capex.md` - Plantilla para costos de arranque
- `template-opex.md` - Plantilla para costos operativos
- `template-proyeccion-12-meses.md` - Plantilla para proyección financiera
- `template-ice-score.md` - Plantilla para priorización de canales
- `template-experimento.md` - Plantilla para diseño de experimentos

---

## 🔗 Relación con Prompts Generales

Este proyecto utiliza los prompts maestros ubicados en:
```
../prompts-generales/
```

### Prompts Disponibles:
1. `prompt-orquestador-consejo-startups.md` - Director General
2. `Prompt Maestro 1.md` - Validador de Ideas
3. `Prompt Maestro 2.md` - Arquitecto Financiero
4. `Prompt Maestro 3.md` - CMO (Marketing)
5. `Prompt Maestro 3.5 - Constructor MVP.md` - Constructor MVP
6. `Prompt Maestro 4.md` - Inversionista
7. `Prompt Maestro 5.md` - Compilador

---

## 🎯 Flujo de Archivos

```
00-idea-inicial.md
    ↓
[Prompt Maestro 1]
    ↓
01-reporte-validacion.md
    ↓
[Prompt Maestro 2]
    ↓
02-modelo-financiero.md
    ├── 03-capex.md (usando template-capex.md)
    ├── 04-opex.md (usando template-opex.md)
    └── 05-proyeccion.md (usando template-proyeccion-12-meses.md)
    ↓
[Prompt Maestro 3]
    ↓
03-plan-de-traccion.md
    ├── 06-ice-score.md (usando template-ice-score.md)
    └── 07-experimento.md (usando template-experimento.md)
    ↓
[Prompt Maestro 3.5]
    ↓
04-plan-ejecucion-mvp.md
    ↓
[Prompt Maestro 4]
    ↓
05-investment-memo.md
    ↓
[Prompt Maestro 5]
    ↓
06-pitch-deck-final.md
```

---

## 📝 Notas Importantes

1. **Memoria basada en archivos:** Todo el estado del proyecto está en los archivos `.md`
2. **No dependemos del historial de chat:** Puedes retomar en cualquier momento
3. **Proceso secuencial:** Cada prompt necesita el output del anterior
4. **Templates reutilizables:** Los templates se copian y completan según necesidad
5. **Evidencia sobre suposiciones:** Los prompts exigen datos reales

---

## 🚀 Estado Actual

**Fase:** Inicialización completada  
**Archivos creados:** 8/8 archivos base  
**Siguiente acción:** Completar `00-idea-inicial.md` con la idea de negocio

---

**Creado:** 2025-11-22  
**Última actualización:** 2025-11-22
