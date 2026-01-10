# Sistema de Consejo de Startups AI

Este directorio contiene un sistema de prompts interconectados diseñados para guiar a un emprendedor a través del proceso de validación, modelado, y preparación para inversión de una idea de negocio.

El sistema funciona como un "Consejo de Expertos" virtual, donde cada "Prompt Maestro" activa una IA con una personalidad y metodología específicas.

## El Flujo de Trabajo (Basado en Archivos)

El sistema es una línea de ensamblaje que produce un reporte estandarizado (`.md`) en cada paso. Esto permite que el proceso sea robusto, a prueba de interrupciones y fácil de seguir.

| Paso | Prompt a Usar | Input Requerido | Output Generado |
|:----:|:---|:---|:---|
| 0 | **Orquestador** | Nombre del proyecto e idea | Directorio + `00-idea-inicial.md` + `README.md` |
| 1 | **Validador (P1)** | `00-idea-inicial.md` | `01-reporte-validacion.md` |
| 2 | **Arquitecto (P2)** | `01-reporte-validacion.md` | `02-modelo-financiero.md` |
| 3 | **CMO (P3)** | `02-modelo-financiero.md` | `03-plan-de-traccion.md` |
| 3.5| **Constructor MVP (P3.5)** | `03-plan-de-traccion.md` | `04-plan-ejecucion-mvp.md` |
| 4 | **Inversionista (P4)** | Todos los reportes + Datos de Tracción | `05-investment-memo.md` |
| 5 | **Compilador (P5)** | Todos los reportes | `06-pitch-deck-final.md` |

## Cómo Empezar

1.  Ten una idea de negocio que quieras validar.
2.  Activa el **`prompt-orquestador-consejo-startups.md`**.
3.  El Orquestador te pedirá un nombre para tu proyecto y creará un directorio para él.
4.  Sigue las instrucciones del Orquestador, que te guiará para activar cada prompt de experto en la secuencia correcta, usando los archivos generados en el paso anterior como input.

## Lista de Prompts Maestros

- **`prompt-orquestador-consejo-startups.md`**: El Director General que gestiona todo el flujo.
- **`Prompt Maestro 1.md`**: El Analista Escéptico que valida si el problema es real.
- **`Prompt Maestro 2.md`**: El Arquitecto Financiero que construye el modelo de negocio.
- **`Prompt Maestro 3.md`**: El Jefe de Marketing que diseña el plan para conseguir los primeros clientes.
- **`Prompt Maestro 3.5 - Constructor MVP.md`**: El Jefe de Operaciones que convierte el plan en una ejecución de bajo costo.
- **`Prompt Maestro 4.md`**: El Inversionista Crítico que evalúa el negocio para una posible inversión.
- **`Prompt Maestro 5.md`**: El Compilador Ejecutivo que unifica todo en un pitch deck final.
