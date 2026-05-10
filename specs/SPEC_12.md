# HIST-12: Aplicar descuento — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario
**Quiero** Aplicar un código de descuento
**Para** Obtener reducción en el precio

**Objetivo:** Permitir introducir códigos de descuento en el carrito.

---

## 2. BDD (Gherkin)

```gherkin
Feature: Aplicar descuento

  Scenario: Aplicar código válido
    Given el usuario está en el carrito
    When introduce un código válido
    And hace click en "Aplicar"
    Then debe mostrar descuento aplicado
    And el total debe actualizarse

  Scenario: Aplicar código inválido
    Given el usuario introduce un código incorrecto
    When hace click en "Aplicar"
    Then debe mostrar error "Código inválido"
    And el total no debe cambiar

  Scenario: Código expirado
    Given el usuario introduce un código expirado
    When hace click en "Aplicar"
    Then debe mostrar error "Código expirado"

  Scenario: Un código por pedido
    Given el usuario ya aplicó un descuento
    When intenta aplicar otro código
    Then debe mostrar "Ya tienes un descuento aplicado"
    And debe pedir que quite el actual primero
```

---

## 3. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Campo código descuento | ✅ Confirmada |
| 2 | Un código por pedido | ✅ Confirmada |
| 3 | Validación: inválido/expirado | ✅ Confirmada |

---

## 4. Criterios de Aceptación

- [x] Campo para código
- [x] Botón "Aplicar"
- [x] Éxito: muestra descuento aplicado
- [x] Error: código inválido o expirado
- [x] Un código por pedido

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-12/24*
*Proyecto: QUBIC — Cacao Lab*