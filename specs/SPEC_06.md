# HIST-06: Navegar entre cubos desde el slide — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario
**Quiero** Ver siguiente/anterior cubo sin cerrar el slide
**Para** Explorar más sabores rápidamente

**Objetivo:** Permitir navegación fluida entre todos los cubos sin necesidad de cerrar y reopen el slide panel.

---

## 2. Scope

### Incluye
- Flechas "Anterior" / "Siguiente" en el slide
- Botón "Probar siguiente" (atajo)
- Navegación cíclica (del 9 vuelve al 1)
- Cubo 3D se actualiza al cambiar
- Contenido se actualiza con datos del nuevo cubo

### Excluye
- Vista previa de múltiples cubos
- Comparación lado a lado

---

## 3. Flujo Principal

```
Slide abierto con [Au] → Click "→" → Slide con [Ct] → Click "→" → Slide con [Gn]
                                                              ↓
                                          Click "←" ←─────────┘
```

**Navegación cíclica:** 9 → 1 → 2 → 3... y viceversa

---

## 4. BDD (Gherkin)

```gherkin
Feature: Navegar entre cubos desde el slide

  Scenario: Click en "Siguiente" muestra siguiente cubo
    Given el slide está abierto con un cubo (ej: [Au])
    When el usuario hace click en la flecha "→"
    Then el contenido debe cambiar al siguiente cubo (ej: [Ct])
    And el cubo 3D debe actualizarse
    And la navegación debe ser cíclica

  Scenario: Click en "Anterior" muestra cubo anterior
    Given el slide está abierto con un cubo (ej: [Ct])
    When el usuario hace click en la flecha "←"
    Then el contenido debe cambiar al cubo anterior (ej: [Au])
    And el cubo 3D debe actualizarse
    And la navegación debe ser cíclica

  Scenario: Navegación cíclica (wrap around)
    Given el slide está abierto con el último cubo ([Ar])
    When el usuario hace click en "→"
    Then debe mostrar el primer cubo ([Au])
    And viceversa para "←" desde [Au]

  Scenario: Botón "Probar siguiente"
    Given el slide está abierto
    When el usuario hace click en "Probar siguiente"
    Then debe avanzar al siguiente cubo
    And debe tener el mismo comportamiento que la flecha "→"

  Scenario: Contenido se actualiza completamente
    Given el slide muestra [Au] (Aurum Cacao)
    When el usuario navega a [Ct] (Citrium)
    Then deben actualizarse: nombre, símbolo, descripción, historia, ingredientes, efecto
    And el color del cubo debe cambiar al del nuevo sabor
```

---

## 5. Componente SlidePanel — Props de Navegación

```typescript
interface SlidePanelProps {
  // ... existing props
  currentIndex: number // 0-8
  onNavigate: (direction: 'prev' | 'next') => void
}
```

---

## 6. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Flechas anterior/siguiente | ✅ Confirmada |
| 2 | "Probar siguiente" botón | ✅ Confirmada |
| 3 | Navegación cíclica | ✅ Confirmada |
| 4 | Cubo 3D se actualiza | ✅ Confirmada |

---

## 7. Criterios de Aceptación

- [x] Flechas "Anterior" / "Siguiente"
- [x] Botón "Probar siguiente"
- [x] Navegación cíclica
- [x] Cubo actual se actualiza en slide

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-06/24*
*Proyecto: QUBIC — Cacao Lab*