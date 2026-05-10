# HIST-13: Iniciar proceso de pago — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario
**Quiero** Proceder al checkout
**Para** Completar mi compra

**Objetivo:** Permitir al usuario revisar y confirmar los datos de envío y pago.

---

## 2. Scope

### Incluye
- Slide de pago (bottom sheet)
- Resumen visual de matriz 3×3
- Selector de cantidad (1-3 kits)
- Campos de envío: nombre, dirección, ciudad, código postal
- Selector método envío: Estándar (3-5 días) / Exprés (24-48h)
- Selector método pago: Tarjeta / PayPal
- Desglose: Subtotal + Envío + IVA = Total
- Botón "Confirmar y pagar"
- Cerrar con X (vuelve al configurador)

### Excluye
- Procesamiento de pago real (integración con pasarela)
-Confirmación de pedido (en historia separada)

---

## 3. Flujo Principal — Bottom Sheet

```
┌─────────────────────────────────────────┐
│           CHECKOUT                  [X] │
├─────────────────────────────────────────┤
│                                         │
│  TU MATRIZ:                             │
│  ┌───┐ ┌───┐ ┌───┐                     │
│  │Au │ │Ct │ │Gn │                     │
│  └───┘ └───┘ └───┘                     │
│  ┌───┐ ┌───┐ ┌───┐                     │
│  │Vt │ │Fc │ │Mt │                     │
│  └───┘ └───┘ └───┘                     │
│  ┌───┐ ┌───┐ ┌───┐                     │
│  │Dy │ │Vf │ │Ar │                     │
│  └───┘ └───┘ └───┘                     │
│                                         │
│  Cantidad: [-][1][+]   (3 max)         │
│                                         │
│  ──────────────────────────────────     │
│                                         │
│  ENVÍO                                  │
│  Nombre: [________________]            │
│  Dirección: [________________]         │
│  Ciudad: [________________]            │
│  CP: [_____]                           │
│                                         │
│  Método: ○ Estándar (3-5 días)         │
│          ● Exprés (24-48h)            │
│                                         │
│  ──────────────────────────────────     │
│                                         │
│  PAGO                                   │
│  ○ Tarjeta                              │
│  ● PayPal                               │
│                                         │
│  ──────────────────────────────────     │
│                                         │
│  Subtotal:          19.90 €            │
│  Envío:              5.90 €            │
│  IVA (21%):          5.42 €            │
│  ──────────────────────────────────     │
│  TOTAL:         31.22 €                │
│                                         │
│  [      Confirmar y pagar      ]        │
│                                         │
└─────────────────────────────────────────┘
```

---

## 4. BDD (Gherkin)

```gherkin
Feature: Iniciar proceso de pago

  Scenario: Abrir checkout (bottom sheet)
    Given el usuario tiene productos en el carrito
    When hace click en "Ir a pagar"
    Then el checkout debe aparecer como bottom sheet
    And debe animarse desde abajo hacia arriba

  Scenario: Ver resumen de matriz
    Given el checkout está abierto
    Then debe mostrar preview 3×3 de la selección
    And el usuario puede ajustar cantidad (1-3)

  Scenario: Llenar datos de envío
    Given el checkout está abierto
    When el usuario llena: nombre, dirección, ciudad, CP
    Then los campos deben guardarse
    And deben persistir para la confirmación

  Scenario: Seleccionar método de envío
    Given el usuario está en el checkout
    Then debe poder elegir entre Estándar y Exprés
    And el precio debe actualizar según selección

  Scenario: Seleccionar método de pago
    Given el usuario está en el checkout
    Then debe poder elegir entre Tarjeta y PayPal
    And el método debe estar seleccionado por defecto

  Scenario: Ver desglose de precio
    Given el usuario está en el checkout
    Then debe ver: Subtotal + Envío + IVA = Total
    And los cálculos deben ser correctos

  Scenario: Cerrar checkout
    Given el checkout está abierto
    When el usuario hace click en X
    Then debe volver al configurador
    And los datos deben persistir
```

---

## 5. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Bottom sheet (slide desde abajo) | ✅ Confirmada |
| 2 | Resumen matriz + cantidad (1-3) | ✅ Confirmada |
| 3 | Formulario envío: nombre, dirección, ciudad, CP | ✅ Confirmada |
| 4 | Método envío: estándar/exprés | ✅ Confirmada |
| 5 | Método pago: tarjeta/PayPal | ✅ Confirmada |
| 6 | Desglose: Subtotal + Envío + IVA = Total | ✅ Confirmada |
| 7 | Botón "Confirmar y pagar" | ✅ Confirmada |
| 8 | Cerrar con X | ✅ Confirmada |

---

## 6. Criterios de Aceptación

- [x] Slide de pago aparece desde abajo (bottom sheet)
- [x] Resumen visual de matriz 3×3 seleccionada
- [x] Selector de cantidad (1-3 kits)
- [x] Campos de envío: nombre, dirección, ciudad, código postal
- [x] Selector método envío: Estándar (3-5 días) / Exprés (24-48h)
- [x] Selector método pago: Tarjeta / PayPal
- [x] Desglose: Subtotal + Envío + IVA = Total
- [x] Botón "Confirmar y pagar"
- [x] Cerrar con X (vuelve al configurador)

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-13/24*
*Proyecto: QUBIC — Cacao Lab*