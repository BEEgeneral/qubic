# HIST-10: Añadir matriz al carrito — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario
**Quiero** Añadir mi matriz personalizada al carrito
**Para** Proceder al pago

**Objetivo:** Transferir la matriz configurada al carrito de compras.

---

## 2. Scope

### Incluye
- Botón "Añadir al carrito" tras confirmar matriz
- Feedback visual (animación en cubo)
- Glow del color del sabor en carrito
- Validación: matriz completa (9 cubos)
- Toast notification (opcional según decisión)

### Excluye
- Añadir matriz incompleta
- Duplicar sin límite (máx 3 kits idénticos)

---

## 3. BDD (Gherkin)

```gherkin
Feature: Añadir matriz al carrito

  Scenario: Añadir matriz completa
    Given el usuario tiene 9 cubos seleccionados
    When hace click en "Añadir al carrito"
    Then debe añadirse al carrito
    And debe mostrarse con preview 3×3

  Scenario: Feedback visual al añadir
    Given el usuario añade la matriz
    When el proceso es exitoso
    Then debe verse animación en el cubo
    And el icono carrito debe tener glow del color del sabor

  Scenario: Límite de 3 kits idénticos
    Given el usuario ya tiene 3 kits de la misma matriz
    When intenta añadir un 4°
    Then debe mostrar error "Máximo 3 kits por pedido"
    And el botón debe estar disabled

  Scenario: Añadir matriz incompleta
    Given el usuario tiene solo 5 cubos
    When hace click en "Añadir al carrito"
    Then debe mostrar error "Completa la matriz primero"
```

---

## 4. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Botón "Añadir al carrito" | ✅ Confirmada |
| 2 | Animación en cubo al añadir | ✅ Confirmada |
| 3 | Glow del color en carrito | ✅ Confirmada |
| 4 | Validación matriz completa | ✅ Confirmada |
| 5 | Límite 3 kits | ✅ Confirmada |

---

## 5. Criterios de Aceptación

- [x] Botón "Añadir al carrito" tras confirmar matriz
- [x] Animación en el cubo al añadir
- [x] Glow del color en carrito
- [x] Validación: matriz completa

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-10/24*
*Proyecto: QUBIC — Cacao Lab*