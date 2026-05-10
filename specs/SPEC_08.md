# HIST-08: Guardar matriz — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario autenticado
**Quiero** Guardar mi configuración de matriz
**Para** Comprarla más tarde sin reconfigurar

**Objetivo:** Permitir guardar matrices personalizadas para uso futuro.

---

## 2. Scope

### Incluye
- Botón "Guardar matriz"
- Modal para nombrar la configuración
- Guardado en perfil → "Mis matrices"
- Máximo 10 matrices guardadas
- Confirmación visual al guardar

### Excluye
- Guardado automático (sin cuenta)
- Compartir matrices (futuro)
- Templates públicos

---

## 3. BDD (Gherkin)

```gherkin
Feature: Guardar matriz

  Scenario: Guardar matriz con nombre
    Given el usuario tiene una matriz completa (9 cubos)
    And está autenticado
    When hace click en "Guardar matriz"
    Then debe aparecer un modal
    And el modal debe tener un campo para el nombre
    And debe tener botones "Cancelar" y "Guardar"

  Scenario: Modal pide nombre
    Given el modal está abierto
    When el usuario escribe un nombre (ej: "Mi kit weekend")
    And hace click en "Guardar"
    Then la matriz debe guardarse con ese nombre
    And debe aparecer en "Mis matrices" del perfil
    And debe mostrar confirmación "Matriz guardada"

  Scenario: Límite de 10 matrices
    Given el usuario ya tiene 10 matrices guardadas
    When intenta guardar una nueva
    Then debe mostrar error "Máximo 10 matrices"
    And debe sugerir eliminar una existente

  Scenario: Guardar matriz incompleta
    Given el usuario tiene solo 5 cubos seleccionados
    When hace click en "Guardar matriz"
    Then debe mostrar error "Completa la matriz primero"
    And el botón debe estar disabled
```

---

## 4. Modal de Guardado

```
┌─────────────────────────────────────┐
│         GUARDAR MATRIZ              │
│                                     │
│  Nombre:                            │
│  ┌─────────────────────────────┐    │
│  │ Mi kit favorito             │    │
│  └─────────────────────────────┘    │
│                                     │
│  Vista previa:                      │
│  ┌───┐ ┌───┐ ┌───┐                 │
│  │Au │ │Ct │ │Gn │                 │
│  └───┘ └───┘ └───┘                 │
│  ┌───┐ ┌───┐ ┌───┐                 │
│  │Vt │ │Fc │ │Mt │                 │
│  └───┘ └───┘ └───┘                 │
│  ┌───┐ ┌───┐ ┌───┐                 │
│  │Dy │ │Vf │ │Ar │                 │
│  └───┘ └───┘ └───┘                 │
│                                     │
│      [Cancelar]    [Guardar]        │
└─────────────────────────────────────┘
```

---

## 5. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Botón "Guardar matriz" | ✅ Confirmada |
| 2 | Modal para nombrar | ✅ Confirmada |
| 3 | Máximo 10 matrices | ✅ Confirmada |
| 4 | Confirmación visual | ✅ Confirmada |

---

## 6. Criterios de Aceptación

- [x] Botón "Guardar matriz"
- [x] Modal para nombrar la configuración
- [x] Guardado en perfil → "Mis matrices"
- [x] Máximo 10 matrices guardadas
- [x] Confirmación visual al guardar

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-08/24*
*Proyecto: QUBIC — Cacao Lab*