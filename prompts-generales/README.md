# Sistema de Consejo de Startups AI

Este directorio contiene un sistema de prompts interconectados para guiar a un emprendedor a traves del proceso de **descubrimiento de nichos**, validacion, modelado y preparacion para inversion de una idea de negocio.

El sistema funciona como un "Consejo de Expertos" virtual, donde cada "Prompt Maestro" activa una IA con una personalidad y metodologia especificas.

## Arquitectura de 2 Capas (v0.2.0)

El sistema se divide en dos fases con compuertas de validacion:

```
CAPA PRE-SEMILLA (Iterativa)
[P0 Buscador] <--> [P1 Validador] --> Gate (ICE >= 500)
      ^                  |
      +------ Loop ------+ (max 3 iteraciones)

CAPA EVALUACION (Lineal - Solo si pasa Gate)
[P2 Arquitecto] -> [P3 CMO] -> [P3.5 MVP] -> [P4 Inversionista] -> [P5 Pitch]
```

## El Flujo de Trabajo (Basado en Archivos)

El sistema produce un reporte estandarizado (`.md`) en cada paso, permitiendo un proceso robusto y a prueba de interrupciones.

| Paso | Prompt | Rol | Input | Output |
|:----:|:-------|:----|:------|:-------|
| 0 | **Buscador (P0)** | Cazador de Nichos | Contexto de mercado | `00-nichos-identificados.md` |
| 1 | **Validador (P1)** | Analista Lean Startup | `00-nichos-identificados.md` | `01-reporte-validacion.md` |
| 2 | **Arquitecto (P2)** | Financiero | `01-reporte-validacion.md` | `02-modelo-financiero.md` |
| 3 | **CMO (P3)** | Marketing/Traccion | `02-modelo-financiero.md` | `03-plan-de-traccion.md` |
| 3.5| **Constructor (P3.5)** | Operaciones MVP | `03-plan-de-traccion.md` | `04-plan-ejecucion-mvp.md` |
| 4 | **Inversionista (P4)** | Due Diligence VC | Todos los reportes | `05-investment-memo.md` |
| 5 | **Compilador (P5)** | Pitch Deck | Todos los reportes | `06-pitch-deck-final.md` |

## Como Empezar

### Opcion A: Tienes contexto de mercado (recomendado)
1. Recopila investigacion de mercado (pain points, regulaciones, competencia)
2. Activa el **`Prompt Maestro 0 - Buscador de Nichos.md`**
3. P0 generara nichos priorizados con ICE Score
4. Selecciona un nicho y pasalo a P1 para validacion

### Opcion B: Ya tienes una idea formada
1. Activa el **`prompt-orquestador-consejo-startups.md`**
2. El Orquestador creara el directorio y te guiara al prompt correcto

## Lista de Prompts Maestros

### Capa Pre-Semilla (Descubrimiento + Validacion)
- **`Prompt Maestro 0 - Buscador de Nichos.md`**: El Cazador de Gaps que identifica oportunidades basadas en dolor real documentado. **(NUEVO v0.2.0)**
- **`Prompt Maestro 1.md`**: El Analista Esceptico que valida si el problema es real con metodologia Lean Startup.

### Capa Evaluacion (Solo tras validacion positiva)
- **`Prompt Maestro 2.md`**: El Arquitecto Financiero que construye el modelo de negocio y unit economics.
- **`Prompt Maestro 3.md`**: El CMO que disena el plan de traccion para los primeros clientes.
- **`Prompt Maestro 3.5 - Constructor MVP.md`**: El Jefe de Operaciones que convierte el plan en ejecucion de bajo costo.
- **`Prompt Maestro 4.md`**: El Inversionista Critico que evalua el negocio para inversion.
- **`Prompt Maestro 5.md`**: El Compilador Ejecutivo que unifica todo en un pitch deck final.

### Orquestacion
- **`prompt-orquestador-consejo-startups.md`**: El Director General que gestiona el flujo completo.

## Reglas de Paso entre Fases

| Transicion | Criterio Minimo |
|------------|-----------------|
| P0 -> P1 | ICE Score >= 500/1000, Checklist >= 4/5, >= 3 fuentes |
| P1 -> P2 | Puntaje validacion >= 70/100, problema confirmado |
| P2 -> P3 | Unit economics viables (LTV/CAC >= 3) |
| P3 -> P4 | Traccion demostrable o plan ejecutable |

## Templates Auxiliares

- `template-ice-score.md` - Matriz de priorizacion ICE
- `template-capex.md` - Plantilla de gastos de capital
- `template-opex.md` - Plantilla de gastos operativos
- `template-experimento.md` - Diseno de experimentos de validacion
- `template-proyeccion-12-meses.md` - Proyeccion financiera

---

*Sistema actualizado por debate multi-IA (Ticket #243)*
*Version: 0.2.0 - 2026-02-04*
