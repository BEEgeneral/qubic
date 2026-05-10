# HIST-22: Reservar en drop — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario
**Quiero** Reservar en un drop
**Para** Asegurarme producto limitado

**Objetivo:** Permitir reservar productos en drops antes del lanzamiento.

---

## 2. BDD (Gherkin)

```gherkin
Feature: Reservar en drop

  Scenario: Reservar antes del drop
    Given existe un drop activo o próximo
    When el usuario hace click en "Reservar"
    Then debe reservar una unidad
    And debe tener límite de 1 por usuario

  Scenario: Límite de 1 por usuario
    Given el usuario ya tiene una reserva
    When intenta reservar nuevamente
    Then debe mostrar "Ya tienes una reserva"
    And el botón debe estar disabled

  Scenario: Confirmación de reserva
    Given la reserva es exitosa
    Then debe mostrar confirmación
    And debe recibir notificación cuando el drop esté activo

  Scenario: Pago al confirmar disponibilidad
    Given el drop está activo
    And el usuario tiene reserva
    When se confirma la producción
    Then debe procesarse el pago
    And debe enviarse el kit
```

---

## 3. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Producto drop visible antes del lanzamiento | ✅ Confirmada |
| 2 | Botón "Reservar" | ✅ Confirmada |
| 3 | Límite: 1 por usuario | ✅ Confirmada |
| 4 | Confirmación de reserva | ✅ Confirmada |
| 5 | Pago al confirmar disponibilidad del drop | ✅ Confirmada |

---

## 4. Criterios de Aceptación

- [x] Producto drop visible antes del lanzamiento
- [x] Botón "Reservar"
- [x] Límite: 1 por usuario
- [x] Confirmación de reserva
- [x] Pago al confirmar disponibilidad del drop

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-22/24*
*Proyecto: QUBIC — Cacao Lab*