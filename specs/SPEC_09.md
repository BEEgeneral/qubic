# HIST-09: Cargar matriz guardada — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario autenticado
**Quiero** Cargar una matriz guardada
**Para** Modificarla o comprarla

**Objetivo:** Permitir recuperar configuraciones de matriz previamente guardadas.

---

## 2. BDD (Gherkin)

```gherkin
Feature: Cargar matriz guardada

  Scenario: Ver listado de matrices guardadas
    Given el usuario está en su perfil
    When accede a "Mis matrices"
    Then debe ver un listado de matrices guardadas
    And cada una debe mostrar nombre y fecha

  Scenario: Cargar matriz en configurador
    Given el usuario está en el listado de matrices
    When hace click en una matriz específica
    Then el configurador debe cargarla
    And el usuario puede modificarla o comprarla

  Scenario: Eliminar matriz
    Given el usuario está en el listado
    When hace click en "Eliminar" en una matriz
    Then debe aparecer confirmación "Eliminar matriz?"
    And al confirmar debe eliminarse

  Scenario: Editar nombre de matriz
    Given el usuario tiene matrices guardadas
    When hace click en "Editar nombre"
    Then debe poder cambiar el nombre
    And el nuevo nombre debe guardarse
```

---

## 3. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Listado con nombre y fecha | ✅ Confirmada |
| 2 | Cargar/eliminar funciones | ✅ Confirmada |
| 3 | Editar nombre | ✅ Confirmada |

---

## 4. Criterios de Aceptación

- [x] Acceso desde perfil → "Mis matrices"
- [x] Listado con nombre y fecha
- [x] Click → carga en configurador
- [x] Opción eliminar (con confirmación)
- [x] Editar nombre de matriz

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-09/24*
*Proyecto: QUBIC — Cacao Lab*