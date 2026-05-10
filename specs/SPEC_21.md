# HIST-21: Ver próximo drop — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario
**Quiero** Saber cuándo es el próximo drop
**Para** No perderme el lanzamiento

**Objetivo:** Generar expectación y FOMO mediante countdown y información del próximo drop.

---

## 2. Scope

### Incluye
- Banner en hero con fecha y hora
- Cuenta regresiva visible
- Información del producto drop
- Newsletter signup para notificaciones
- Badge "NEW" en producto en drop

### Excluye
- Reservas activas (en historia separada)
- Historial de drops anteriores

---

## 3. Modelo Drop — Filosofía

**Qubic no es una tienda — es un evento semanal.**

Inspirado en Supreme: escasez controlada, ritual de compra, exclusividad real.

- Cadencia: Semanal, anuncio cada domingo
- Ventana: 24-48 horas máximo
- Unidades: Número fijo y público
- Contador: Tiempo real durante el drop

---

## 4. BDD (Gherkin)

```gherkin
Feature: Ver próximo drop

  Scenario: Countdown visible en hero
    Given existe un drop próximo
    When el usuario está en la página principal
    Then debe ver el countdown en el hero
    And el formato debe ser: DD:HH:MM:SS

  Scenario: Countdown en tiempo real
    Given el countdown está visible
    Then debe actualizarse cada segundo
    And debe llegar a 0 correctamente

  Scenario: Countdown llega a cero
    Given el countdown llega a 0
    Then debe cambiar a "DROP ACTIVO AHORA"
    And debe tener animación de pulse

  Scenario: Información del drop
    Given hay un drop próximo
    Then debe mostrar: nombre del producto, unidades disponibles
    And debe mostrar fecha y hora del lanzamiento

  Scenario: Newsletter para notificaciones
    Given el usuario quiere recordar el drop
    When introduce su email y hace click en "Notificarme"
    Then debe recibir recordatorio antes del drop
```

---

## 5. Mockup ASCII — Countdown

```
┌─────────────────────────────────────────────────────────────┐
│                        HERO                                  │
│                                                              │
│                    ┌─────────────────┐                       │
│                    │     QUBIC      │                       │
│                    │                 │                       │
│                    │Hack the Flavor  │                       │
│                    │Assemble Pleasure│                       │
│                    └─────────────────┘                       │
│                                                              │
│              ┌─────────────────────────────────┐            │
│              │  DROP EN: 02d 14h 32m 15s        │            │
│              │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │            │
│              │  Matrix One — 50 kits disponibles│            │
│              └─────────────────────────────────┘            │
│                                                              │
│              [ Personaliza tu kit ]                          │
│                                                              │
└─────────────────────────────────────────────────────────────┘

                    ↓ Drop llega a 0 ↓

              ┌─────────────────────────────────┐            │
              │  🔥 DROP ACTIVO AHORA 🔥         │            │
              │  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━   │            │
              │  Matrix One — 50 kits           │            │
              │  [Ver producto]                  │            │
              └─────────────────────────────────┘            │
```

---

## 6. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Banner en hero con fecha y hora | ✅ Confirmada |
| 2 | Cuenta regresiva visible | ✅ Confirmada |
| 3 | Información del producto drop | ✅ Confirmada |
| 4 | Newsletter signup para notificaciones | ✅ Confirmada |
| 5 | Badge "NEW" en producto en drop | ✅ Confirmada |

---

## 7. Criterios de Aceptación

- [x] Banner en hero con fecha y hora
- [x] Cuenta regresiva visible
- [x] Información del producto drop
- [x] Newsletter signup para notificaciones
- [x] Badge "NEW" en producto en drop

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-21/24*
*Proyecto: QUBIC — Cacao Lab*