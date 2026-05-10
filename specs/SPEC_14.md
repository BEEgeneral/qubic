# HIST-14: Validar y confirmar pedido — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario
**Quiero** Confirmar mi pedido
**Para** Recibir mi kit en casa

**Objetivo:** Validar todos los datos, procesar el pago y generar la orden.

---

## 2. BDD (Gherkin)

```gherkin
Feature: Validar y confirmar pedido

  Scenario: Validación campos obligatorios
    Given el usuario está en el checkout
    When hace click en "Confirmar y pagar"
    Then deben validarse todos los campos
    If falta algún campo
    Then debe mostrarse error en el campo correspondiente

  Scenario: Validación método de pago
    Given el checkout está listo
    When el usuario hace click en "Confirmar y pagar"
    Then debe validarse que hay método de pago seleccionado
    And debe intentarse procesar el pago

  Scenario: Confirmación exitosa
    Given todos los datos son válidos
    When el pago se procesa correctamente
    Then debe aparecer animación especial
    And debe redirigirse a página de éxito
    And debe generarse número de pedido

  Scenario: Confirmación con email
    Given el pedido fue confirmado
    Then debe enviarse email de confirmación
    And el email debe incluir: número de pedido, resumen, dirección

  Scenario: Error en pago
    Given el usuario hace click en "Confirmar y pagar"
    When el pago falla
    Then debe mostrar mensaje de error
    And el usuario debe poder reintentar
```

---

## 3. Animación Especial (Confirmación)

```
┌─────────────────────────────────────────┐
│                                         │
│           ╔═══════════════╗             │
│           ║               ║             │
│           ║      ✓        ║             │
│           ║   PEDIDO       ║             │
│           ║   CONFIRMADO   ║             │
│           ║               ║             │
│           ╚═══════════════╝             │
│                                         │
│        Redirecting...                   │
│                                         │
└─────────────────────────────────────────┘
```

---

## 4. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Validación campos obligatorios | ✅ Confirmada |
| 2 | Validación método de pago | ✅ Confirmada |
| 3 | Animación especial al confirmar | ✅ Confirmada |
| 4 | Redirección a página de éxito | ✅ Confirmada |
| 5 | Email de confirmación | ✅ Confirmada |
| 6 | Número de pedido visible | ✅ Confirmada |

---

## 5. Criterios de Aceptación

- [x] Validación de campos obligatorios
- [x] Validación de método de pago
- [x] Animación especial al confirmar
- [x] Redirección a página de éxito
- [x] Email de confirmación enviado
- [x] Número de pedido visible

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-14/24*
*Proyecto: QUBIC — Cacao Lab*