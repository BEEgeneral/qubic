# HIST-20: Gestionar direcciones — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario
**Quiero** Gestionar mis direcciones
**Para** Usarlas en pedidos

**Objetivo:** Permitir guardar y gestionar múltiples direcciones de envío.

---

## 2. BDD (Gherkin)

```gherkin
Feature: Gestionar direcciones

  Scenario: Añadir nueva dirección
    Given el usuario está en "Mis direcciones"
    When hace click en "Añadir dirección"
    Then debe aparecer formulario
    And debe poder ingresar: dirección completa, ciudad, CP
    And al guardar debe aparecer en el listado

  Scenario: Editar dirección existente
    Given existe una dirección guardada
    When el usuario hace click en "Editar"
    Then debe poder modificar los datos
    And al guardar debe actualizarse

  Scenario: Eliminar dirección
    Given existe una dirección guardada
    When el usuario hace click en "Eliminar"
    Then debe pedir confirmación
    And al confirmar debe eliminarse

  Scenario: Marcar como predeterminada
    Given el usuario tiene múltiples direcciones
    When marca una como predeterminada
    Then debe aparecer con indicador visual
    And debe sugerirse automáticamente en checkout

  Scenario: Límite de 5 direcciones
    Given el usuario ya tiene 5 direcciones
    When intenta añadir una sexta
    Then debe mostrar error "Máximo 5 direcciones"
```

---

## 3. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Listado de direcciones | ✅ Confirmada |
| 2 | Añadir nueva dirección | ✅ Confirmada |
| 3 | Editar dirección | ✅ Confirmada |
| 4 | Eliminar dirección | ✅ Confirmada |
| 5 | Marcar como predeterminada | ✅ Confirmada |
| 6 | Máximo 5 direcciones | ✅ Confirmada |

---

## 4. Criterios de Aceptación

- [x] Listado de direcciones
- [x] Añadir nueva dirección
- [x] Editar dirección
- [x] Eliminar dirección
- [x] Marcar como predeterminada
- [x] Máximo 5 direcciones

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-20/24*
*Proyecto: QUBIC — Cacao Lab*