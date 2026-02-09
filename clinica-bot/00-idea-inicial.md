# clinica-bot - Idea Inicial

## Resumen Ejecutivo

**Nombre del Proyecto:** clinica-bot (web26-056)
**Categoria:** SaaS B2B - Asistente WhatsApp con IA para Consultorios Medicos
**Estado:** Producto funcional (v0.13.0, 280+ tests, 80% coverage, Docker deployment completo)
**Clientes actuales:** 0 (pre-lanzamiento)
**Origen:** Producto pre-construido, evaluacion de viabilidad comercial

---

## El Problema

### Situacion Actual de los Consultorios Medicos

Los consultorios medicos independientes (1-5 doctores) en Mexico y LATAM enfrentan:

1. **Gestion manual de WhatsApp:** Recepcionista o el mismo doctor responde mensajes uno por uno, sin automatizacion
2. **Sin agendamiento 24/7:** Pacientes quieren agendar fuera de horario laboral (noches, fines de semana) pero nadie atiende
3. **No-shows sin recordatorios:** 15-30% de citas se pierden porque no hay sistema de recordatorios automaticos
4. **FAQs consumen tiempo del staff:** Preguntas repetitivas (horarios, direccion, precios, preparacion para estudios) ocupan 1-2 horas/dia
5. **Double-booking y errores manuales:** Agendar por WhatsApp + libreta/Excel genera conflictos de horario

### Consecuencias

- Consultorios pierden $15,000-$50,000 MXN/mes por no-shows (asumiendo consulta promedio $500-$1,000 MXN)
- Recepcionista saturada respondiendo WhatsApp en lugar de atender pacientes presenciales
- Pacientes frustrados que no logran agendar y van a la competencia
- Doctor sin visibilidad de su agenda real en tiempo real
- Horarios fuera de oficina = oportunidades perdidas

---

## La Solucion: clinica-bot

### Propuesta de Valor

**Asistente WhatsApp con IA que agenda citas 24/7, envia recordatorios automaticos, y responde preguntas frecuentes para consultorios medicos.**

### Funcionalidades Core

| Funcionalidad | Descripcion | Beneficio |
|---------------|-------------|-----------|
| **Agendamiento 24/7** | Pacientes agendan citas por WhatsApp a cualquier hora | No se pierden pacientes fuera de horario |
| **Recordatorios Automaticos** | 48 horas y 2 horas antes de la cita | Reduce no-shows 30%+ |
| **FAQ Automation** | 7 categorias de respuestas automaticas | Ahorra 1+ hora admin/dia |
| **Cancelar/Reprogramar** | Paciente cambia cita sin llamar | Menor carga operativa |
| **Slot Locking (Redis)** | Bloqueo de horarios en tiempo real | Elimina double-booking |
| **Google Calendar Sync** | Agenda sincronizada con calendario del doctor | Una sola fuente de verdad |
| **Admin Panel (HTMX)** | Panel web para gestionar configuracion y ver metricas | Control total sin ser tecnico |
| **Control Manual** | Doctor puede tomar el control de conversacion en cualquier momento | IA no reemplaza al humano |

### Resultado Esperado

- Reducir no-shows de 15-30% a menos de 10%
- Automatizar 60-80% de consultas por WhatsApp
- Ahorro de 1-2 horas/dia de trabajo administrativo
- Disponibilidad 24/7 sin contratar personal nocturno

---

## Diferenciadores Competitivos

| # | Diferenciador | Competencia | clinica-bot |
|---|---------------|-------------|-------------|
| 1 | **Canal principal** | Doctoralia: marketplace web, paciente busca doctor | WhatsApp-first: paciente habla por donde ya habla |
| 2 | **Chatbots genericos** | Manychat, Whaticket: flujos rigidos, no medicos | Disenado para flujo medico (citas, recordatorios, FAQ medico) |
| 3 | **WhatsApp Business manual** | Doctor responde uno por uno | IA responde 24/7 + escalada a humano |
| 4 | **CRMs genericos** | Kommo, Leadsales: ventas-first, no agenda medica | Verticalizado: agenda + recordatorios + FAQ medico integrado |
| 5 | **Agendamiento online** | SimplyBook, Calendly: web-based, no WhatsApp | Nativo en WhatsApp, el canal que el paciente ya usa |
| 6 | **Deploy** | SaaS multi-tenant compartido | Docker aislado por consultorio (privacidad datos medicos) |

---

## Cliente Objetivo

### Perfil General

- **Tamano:** Consultorios de 1-5 doctores
- **Volumen:** 20-100+ citas/semana
- **Canal actual:** WhatsApp Business activo (reciben 20+ mensajes/dia)
- **Mercado:** Mexico y LATAM
- **Dolor:** Saturados, perdiendo citas, sin automatizacion

### Senales de Buen Prospecto

- Usa WhatsApp Business para recibir citas
- Recepcionista pasa mas de 1 hora/dia respondiendo WhatsApp
- Reporta 15%+ de no-shows mensualmente
- No tiene sistema de agendamiento digital
- Tiene Google Calendar o agenda en papel/Excel
- Quiere ofrecer atencion 24/7 pero no puede pagar recepcionista nocturna

### Arquetipo: "Dr. Carlos"

**Dr. Carlos Martinez** - Dentista independiente en Guadalajara
- Consultorio propio con 2 doctores (el y un asociado)
- 1 recepcionista que atiende presencial y WhatsApp
- Recibe 40+ mensajes de WhatsApp/dia
- 25% de sus citas no se presentan (sin recordatorios)
- Pierde pacientes los fines de semana porque nadie contesta
- Ha intentado WhatsApp Business auto-respuestas pero son muy limitadas
- Presupuesto: $500-$1,500 MXN/mes para herramientas

---

## Relacion con CRM48

**Nota importante:** CRM48 (web25-048) ya identifico "Clinicas/Dentistas" como uno de sus 4 nichos prioritarios (ver `crm48/00-idea-inicial.md` lineas 97-100: agendamiento de citas, recordatorios automaticos, seguimiento de presupuestos).

clinica-bot es esencialmente una **solucion vertical especializada** para ese nicho especifico de CRM48. Mientras CRM48 es un CRM conversacional general que puede servir clinicas entre otros, clinica-bot esta 100% disenado para el flujo medico.

**Implicaciones estrategicas:**
- Si clinica-bot valida el nicho, CRM48 tiene evidencia de que "Clinicas/Dentistas" es viable
- clinica-bot podria eventualmente integrarse como modulo vertical de CRM48
- O mantenerse como producto independiente si el mercado lo justifica

---

## Estado del Producto

| Aspecto | Detalle |
|---------|---------|
| **Version** | v0.13.0 |
| **Tests** | 280+ (pytest) |
| **Coverage** | 80% |
| **Stack** | FastAPI + PostgreSQL + Redis + Celery |
| **IA** | DeepSeek (LLM para conversacion natural) |
| **Integraciones** | Meta Cloud API (WhatsApp), Google Calendar |
| **Admin Panel** | HTMX-based web panel |
| **Deployment** | Docker Compose completo |
| **Estado** | Production-ready, listo para beta |

**Ventaja clave para validacion:** El producto ya existe y esta deployado. A diferencia de otros proyectos que necesitan fake door tests, clinica-bot puede ofrecer **beta real** a consultorios para validar con uso real.

---

## Preguntas a Resolver con Validacion

1. **Tamano de mercado:** Cuantos consultorios independientes hay en Mexico? Cuantos usan WhatsApp activamente?
2. **Disposicion a pagar:** Pagarian $500-$1,500 MXN/mes por esto? Hay presupuesto para herramientas digitales?
3. **Canal de adquisicion:** Como llegar a doctores? Facebook Ads, Google Ads, referidos, asociaciones medicas?
4. **Competencia WhatsApp-first medica:** Existe alguien haciendo exactamente esto en Mexico/LATAM?
5. **Barrera WhatsApp Business API:** Migrar de WhatsApp Business App a API dedicada es un blocker? El costo de Meta ($0.0421/conversacion) es aceptable?
6. **Privacidad de datos medicos:** Requiere certificacion o cumplimiento especial (NOM, LFPDPPP)?

---

## Siguiente Paso

Ejecutar el **Prompt Maestro 1 (Validador)** para:
- Analizar el mercado (TAM/SAM/SOM con datos INEGI/DENUE)
- Mapear competencia WhatsApp-first en salud
- Disenar plan de validacion empirica (beta real, no solo fake door)
- Definir hipotesis y metricas de exito
