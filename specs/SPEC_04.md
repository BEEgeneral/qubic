# HIST-04: Sin filtros (ver todos los cubos) — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Visitante
**Quiero** Ver todos los cubos sin filtrar
**Para** Explorar el catálogo completo de una vista

**Objetivo:** Mostrar todos los 9 cubos/sabores sin opción de filtrado, para una experiencia inmersiva.

---

## 2. Scope

### Incluye
- Visualización de los 9 cubos sin filtros
- Cada cubo visible con su símbolo, nombre y color
- Navegación por scroll o carrusel
- Sin tabs, botones o secciones de filtrado

### Excluye
- Sistema de filtros por sabor
- Búsqueda por texto
- Ordenamiento por criterios
- Ocultar cubos por cualquier criterio

---

## 3. Decisión de Diseño

**NO hay filtros.** Según validación de asunción #8, el usuario prefiere ver todos los cubos sin filtrar.

**Razón:** La experiencia visual del mosaico es más importante que la utilidad de filtrado. El usuario puede explorar tocando/clickeando cada cubo.

---

## 4. BDD (Gherkin)

```gherkin
Feature: Ver todos los cubos sin filtros

  Scenario: Mosaico muestra los 9 cubos siempre
    Given el usuario está en la sección mosaico
    Then debe ver los 9 cubos sin excepción
    And no debe haber filtros visibles
    And todos los cubos deben estar en grid 3×3 (desktop)

  Scenario: Sin opción de filtrar por sabor
    Given el usuario visualiza el mosaico
    Then no debe existir ningún filtro
    And no debe existir tabs de categorías
    And no debe existir búsqueda de texto

  Scenario: Experiencia inmersiva
    Given el usuario accede a la página
    When llega a la sección mosaico
    Then la experiencia debe ser de descubrimiento
    And el usuario explora los cubos uno por uno
    And no hay opción de "esconder" cubos
```

---

## 5. Implementación

```css
/* Sin filtros - el mosaico es la única navegación */
.mosaic-section {
  /* No hay .filter-bar, .tabs, .search */
}

.mosaic-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}
```

---

## 6. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Sin filtros (ver todos los cubos) | ✅ Confirmada |

---

## 7. Criterios de Aceptación

- [x] Sin filtros visibles en la página
- [x] Los 9 cubos siempre visibles
- [x] Experiencia de descubrimiento sin restricciones

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-04/24*
*Proyecto: QUBIC — Cacao Lab*