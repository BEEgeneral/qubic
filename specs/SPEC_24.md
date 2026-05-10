# HIST-24: Ver confirmación de pedido — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario
**Quiero** Ver confirmación de mi pedido
**Para** Tener certeza de que se processó

**Objetivo:** Dar al usuario confianza de que su pedido fue recibido y está siendo procesado.

---

## 2. BDD (Gherkin)

```gherkin
Feature: Ver confirmación de pedido

  Scenario: Redirección tras pago exitoso
    Given el pago fue procesado exitosamente
    When la confirmación llega
    Then debe redirigirse a página de éxito
    And debe mostrar número de pedido

  Scenario: Resumen del pedido
    Given la página de éxito está visible
    Then debe mostrar: productos comprados (preview 3×3)
    And debe mostrar: dirección de envío
    And debe mostrar: método de envío seleccionado
    And debe mostrar: total pagado

  Scenario: Email de confirmación
    Given el pedido fue confirmado
    Then debe haberse enviado email
    And el email debe contener: número de pedido, resumen, dirección

  Scenario: CTA "Seguir comprando"
    Given la página de éxito está visible
    When el usuario hace click en "Seguir comprando"
    Then debe redirigirse al mosaico
    And debe poder comenzar una nueva matriz
```

---

## 3. Mockup ASCII — Página Éxito

```
┌─────────────────────────────────────────────────────────────┐
│                                                             │
│                    ╔═══════════════════╗                   │
│                    ║                   ║                   │
│                    ║    ✓ GRACIAS!     ║                   │
│                    ║                   ║                   │
│                    ║   Tu pedido ha     ║                   │
│                    ║   sido confirmado ║                   │
│                    ║                   ║                   │
│                    ╚═══════════════════╝                   │
│                                                             │
│              Pedido #QUB-2026-0510-0042                    │
│                                                             │
│  ─────────────────────────────────────────────────────    │
│                                                             │
│  TU PEDIDO:                                                 │
│  ┌───┐ ┌───┐ ┌───┐                                        │
│  │Au │ │Ct │ │Gn │     Kit Matrix One                      │
│  └───┘ └───┘ └───┘     Cantidad: 2                         │
│  ┌───┐ ┌───┐ ┌───┐                                        │
│  │Vt │ │Fc │ │Mt │     Subtotal: 39.80 €                  │
│  └───┘ └───┘ └───┘     Envío: 5.90 €                      │
│  ┌───┐ ┌───┐ ┌───┐     IVA: 9.60 €                        │
│  │Dy │ │Vf │ │Ar │     ──────────────────                 │
│  └───┘ └───┘ └───┘     TOTAL: 55.30 €                     │
│                                                             │
│  ENVÍO:                                                     │
│  Juan Pérez                                                │
│  Calle Mayor 123, Madrid 28013                             │
│  Envío estándar (3-5 días)                                │
│                                                             │
│  ─────────────────────────────────────────────────────    │
│                                                             │
│  📧 Te hemos enviado confirmación a juan@email.com        │
│                                                             │
│  ─────────────────────────────────────────────────────    │
│                                                             │
│            [      Seguir comprando      ]                   │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Página con número de pedido | ✅ Confirmada |
| 2 | Resumen de productos comprados | ✅ Confirmada |
| 3 | Dirección de envío | ✅ Confirmada |
| 4 | Método de envío seleccionado | ✅ Confirmada |
| 5 | Total pagado | ✅ Confirmada |
| 6 | Email enviado con detalles | ✅ Confirmada |
| 7 | CTA "Seguir comprando" | ✅ Confirmada |

---

## 5. Criterios de Aceptación

- [x] Página con número de pedido
- [x] Resumen de productos comprados
- [x] Dirección de envío
- [x] Método de envío seleccionado
- [x] Total pagado
- [x] Email enviado con detalles
- [x] CTA "Seguir comprando"

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-24/24*
*Proyecto: QUBIC — Cacao Lab*