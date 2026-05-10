# HIST-07: Crear matriz personalizada — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario
**Quiero** Seleccionar 9 cubos para mi kit
**Para** Armar mi matriz 3×3 personalizada

**Objetivo:** Permitir al usuario construir su kit personalizado seleccionando exactamente 9 cubos.

---

## 2. Scope

### Incluye
- Grid 3×3 visual interactivo
- Click en celda → abre selector de sabores
- Selector muestra los 9 tipos disponibles
- Celda cambia al sabor seleccionado
- Vista previa de matriz completa
- Validación: exactamente 9 seleccionados
- Barra visual "3 max" (límite de kits)
- Botón "Confirmar matriz"

### Excluye
- Compra automática (solo armar matriz)
- Guardado automático (sin cuenta)
- Múltiples matrices en paralelo

---

## 3. Flujo Principal

```
┌─────────────────────────────────────────────────────────────┐
│                   CONFIGURADOR DE MATRIZ                     │
│                                                             │
│    Matriz actual (0/9):                                     │
│    ┌─────────┐  ┌─────────┐  ┌─────────┐                   │
│    │  vacío  │  │  vacío  │  │  vacío  │                   │
│    │  click  │  │  click  │  │  click  │                   │
│    └─────────┘  └─────────┘  └─────────┘                   │
│    ┌─────────┐  ┌─────────┐  ┌─────────┐                   │
│    │  vacío  │  │  vacío  │  │  vacío  │                   │
│    │  click  │  │  click  │  │  click  │                   │
│    └─────────┘  └─────────┘  └─────────┘                   │
│    ┌─────────┐  ┌─────────┐  ┌─────────┐                   │
│    │  vacío  │  │  vacío  │  │  vacío  │                   │
│    │  click  │  │  click  │  │  click  │                   │
│    └─────────┘  └─────────┘  └─────────┘                   │
│                                                             │
│    Selector de sabor (al click en celda):                   │
│    [Au] [Ct] [Gn] [Vt] [Fc] [Mt] [Dy] [Vf] [Ar]            │
│                                                             │
│    Barra "3 max": [████████░░] 3/3 kits                   │
│                                                             │
│    ┌──────────────┐  ┌──────────────┐                      │
│    │ Guardar       │  │ Confirmar     │                      │
│    │ matriz        │  │ matriz        │                      │
│    └──────────────┘  └──────────────┘                      │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. BDD (Gherkin)

```gherkin
Feature: Crear matriz personalizada

  Scenario: Grid 3×3 aparece vacío
    Given el usuario accede al configurador
    Then el grid debe mostrar 9 celdas vacías
    And cada celda debe tener borde punteado
    And el contador debe mostrar "0/9"

  Scenario: Click en celda abre selector de sabores
    Given el usuario está en el configurador
    When hace click en una celda vacía
    Then debe aparecer el selector de sabores
    And el selector debe mostrar los 9 tipos disponibles
    And el selector debe posicionarse cerca de la celda

  Scenario: Seleccionar sabor en celda
    Given el selector está abierto
    When el usuario hace click en un sabor (ej: [Au])
    Then la celda debe mostrar el sabor seleccionado
    And el selector debe cerrarse
    And el contador debe actualizar a "1/9"
    And la celda debe tener color del sabor

  Scenario: Cambiar sabor ya seleccionado
    Given una celda ya tiene un sabor
    When el usuario hace click en esa celda
    Then debe abrirse el selector
    And el sabor actual debe estar resaltado
    And el usuario puede cambiar a otro sabor

  Scenario: Validación exactamente 9 elementos
    Given el usuario tiene 8 cubos seleccionados
    When intenta hacer click en "Confirmar matriz"
    Then debe mostrar error "Selecciona 9 cubos"
    And el botón debe estar disabled
    When el usuario completa el 9°
    Then el botón debe habilitarse

  Scenario: Barra "3 max" visible
    Given el usuario está en el configurador
    Then debe verse la barra "3 max"
    And debe mostrar el límite de kits por pedido
    And el usuario puede seleccionar hasta 3 kits idénticos

  Scenario: Confirmar matriz incompleta
    Given el usuario tiene solo 5 cubos seleccionados
    When hace click en "Confirmar matriz"
    Then el sistema debe mostrar error
    And debe indicar cuántos cubos faltan
```

---

## 5. Mockup ASCII — Selector de Sabor

```
┌─────────────────────────────────────────┐
│                                         │
│  Selecciona sabor para esta celda:       │
│                                         │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐        │
│  │[Au] │ │[Ct] │ │[Gn] │ │[Vt] │        │
│  │Aurum│ │Citri│ │Ging │ │Violt│        │
│  └─────┘ └─────┘ └─────┘ └─────┘        │
│  ┌─────┐ ┌─────┐ ┌─────┐ ┌─────┐        │
│  │[Fc] │ │[Mt] │ │[Dy] │ │[Vf] │        │
│  │Fumum│ │Ment │ │Dual │ │Vinum│        │
│  └─────┘ └─────┘ └─────┘ └─────┘        │
│  ┌─────┐                                  │
│  │[Ar] │                                  │
│  │Acidm│                                  │
│  └─────┘                                  │
│                                         │
│           [Cancelar]                     │
└─────────────────────────────────────────┘
```

---

## 6. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Grid 3×3 interactivo | ✅ Confirmada |
| 2 | Click en celda → selector de sabores | ✅ Confirmada |
| 3 | Selector con 9 tipos | ✅ Confirmada |
| 4 | Celda cambia al sabor seleccionado | ✅ Confirmada |
| 5 | Vista previa de matriz completa | ✅ Confirmada |
| 6 | Validación: exactamente 9 | ✅ Confirmada |
| 7 | Barra visual "3 max" | ✅ Confirmada |
| 8 | Botón "Confirmar matriz" | ✅ Confirmada |

---

## 7. Componente MatrixBuilder — Props

```typescript
interface MatrixBuilderProps {
  onConfirm: (matrix: string[]) => void
  onSave: (name: string) => void
  maxKits: number // 3
}

interface MatrixState {
  cells: (string | null)[] // 9 elements
  selectedCount: number
}
```

---

## 8. Criterios de Aceptación

- [x] Grid 3×3 visual interactivo
- [x] Click en celda → abrir selector de sabores
- [x] Selector muestra los 9 tipos disponibles
- [x] Celda cambia al sabor seleccionado
- [x] Vista previa de matriz completa
- [x] Validación: exactamente 9 seleccionados
- [x] Barra visual "3 max"
- [x] Botón "Confirmar matriz"

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-07/24*
*Proyecto: QUBIC — Cacao Lab*