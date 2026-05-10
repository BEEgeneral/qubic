# HIST-11: Ver y gestionar carrito — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario
**Quiero** Ver mi carrito
**Para** Revisar productos antes de pagar

**Objetivo:** Permitir gestionar los productos en el carrito antes de proceder al checkout.

---

## 2. Scope

### Incluye
- Panel lateral o modal de carrito
- Lista: matriz personalizada (preview 3×3), nombre, precio
- Cantidad editable (+/-)
- Eliminar producto
- Subtotal y total
- Botón "Ir a pagar"
- Botón "Seguir comprando"

### Excluye
- Checkout (en historia separada)
- Descuentos (en historia separada)

---

## 3. Flujo Principal

```
Panel carrito abierto:
┌─────────────────────────────────────────┐
│           MI CARRITO              [X]   │
├─────────────────────────────────────────┤
│                                         │
│  ┌─────────────────────────────────┐   │
│  │  Mi kit favorito                 │   │
│  │  ┌───┐ ┌───┐ ┌───┐             │   │
│  │  │Au │ │Ct │ │Gn │             │   │
│  │  └───┘ └───┘ └───┘             │   │
│  │  ┌───┐ ┌───┐ ┌───┐             │   │
│  │  │Vt │ │Fc │ │Mt │             │   │
│  │  └───┘ └───┘ └───┘             │   │
│  │  ┌───┐ ┌───┐ ┌───┐             │   │
│  │  │Dy │ │Vf │ │Ar │             │   │
│  │  └───┘ └───┘ └───┘             │   │
│  │                                 │   │
│  │  19.90 €                    [-] │   │
│  │  Cantidad: [+][2][-]            │   │
│  │                        [🗑️]     │   │
│  └─────────────────────────────────┘   │
│                                         │
│  ─────────────────────────────────     │
│                                         │
│  Subtotal:           39.80 €           │
│  Envío:              Por calcular      │
│  ─────────────────────────────────     │
│  TOTAL:              39.80 €           │
│                                         │
│  [        Ir a pagar        ]           │
│  [      Seguir comprando     ]          │
│                                         │
└─────────────────────────────────────────┘
```

---

## 4. BDD (Gherkin)

```gherkin
Feature: Ver y gestionar carrito

  Scenario: Abrir panel de carrito
    Given el usuario tiene items en el carrito
    When hace click en el icono carrito
    Then debe aparecer el panel lateral de carrito
    And el overlay debe oscurecer el fondo

  Scenario: Ver producto en carrito
    Given el carrito tiene productos
    When el panel se abre
    Then debe mostrar preview 3×3 de la matriz
    And debe mostrar nombre y precio
    And debe mostrar cantidad

  Scenario: Editar cantidad
    Given el producto está en el carrito
    When el usuario hace click en [+] o [-]
    Then la cantidad debe cambiar
    And el precio debe actualizarse
    And debe respectar el límite de 3

  Scenario: Eliminar producto
    Given el producto está en el carrito
    When el usuario hace click en 🗑️
    Then el producto debe eliminarse
    And el carrito debe actualizarse
    And el total debe recalcularse

  Scenario: Botón "Ir a pagar"
    Given el carrito tiene productos
    When el usuario hace click en "Ir a pagar"
    Then debe proceder al checkout
    And debe mostrar slide de pago

  Scenario: Botón "Seguir comprando"
    Given el panel está abierto
    When el usuario hace click en "Seguir comprando"
    Then el panel debe cerrarse
    And el usuario vuelve al mosaico
```

---

## 5. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Panel lateral o modal de carrito | ✅ Confirmada |
| 2 | Preview 3×3 + nombre + precio | ✅ Confirmada |
| 3 | Cantidad editable (+/-) | ✅ Confirmada |
| 4 | Eliminar producto | ✅ Confirmada |
| 5 | Subtotal y total | ✅ Confirmada |
| 6 | Botones "Ir a pagar" / "Seguir comprando" | ✅ Confirmada |

---

## 6. Criterios de Aceptación

- [x] Panel lateral o modal de carrito
- [x] Lista: matriz personalizada (preview 3×3), nombre, precio
- [x] Cantidad editable (+/-)
- [x] Eliminar producto
- [x] Subtotal y total
- [x] Botón "Ir a pagar"
- [x] Botón "Seguir comprando"

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-11/24*
*Proyecto: QUBIC — Cacao Lab*