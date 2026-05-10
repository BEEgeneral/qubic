# HIST-03: Visualizar mosaico de cubos — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Visitante
**Quiero** Ver el mosaico de cubos de chocolate
**Para** Descubrir los productos disponibles de Qubic

**Objetivo:** Presentar visualmente los 9 elementos/sabores del catálogo en un grid 3×3 interactivo.

---

## 2. Scope

### Incluye
- Grid 3×3 con 9 cubos visibles
- Cubos 3D renderizados con rotación continua
- Scroll intercambio de posiciones (shuffle visual)
- Hover: elevación sutil (scale + sombra)
- Click: abre slide lateral de detalle
- Responsive: carrusel horizontal en mobile
- Badge "NEW" en productos en drop
- Indicador visual si está en carrito

### Excluye
- Sistema de filtros (no hay filtros según decisión)
- Página de detalle separada (slide panel)
- Carrito funcional aquí

---

## 3. Actores
- **Visitante:** Ve los cubos sin cuenta
- **Usuario autenticado:** Puede añadir a matriz

---

## 4. Precondiciones
- Página cargada
- Sección mosaico visible en viewport

---

## 5. Trigger
- Scroll hacia la sección mosaico
- Al hacer hover sobre un cubo
- Al hacer click en un cubo

---

## 6. Flujo Principal

```
Desktop:
┌─────────┐  ┌─────────┐  ┌─────────┐
│   [Au]  │  │   [Ct]  │  │   [Gn]  │   ← Fila 1
│  Aurum  │  │ Citrium │  │Gingetron│
└─────────┘  └─────────┘  └─────────┘
┌─────────┐  ┌─────────┐  ┌─────────┐
│   [Vt]  │  │   [Fc]  │  │   [Mt]  │   ← Fila 2
│Violetium│  │ Fumum   │  │Mentholium│
└─────────┘  └─────────┘  └─────────┘
┌─────────┐  ┌─────────┐  ┌─────────┐
│   [Dy]  │  │   [Vf]  │  │   [Ar]  │   ← Fila 3
│ Duality │  │ Vinum   │  │ Acidum  │
└─────────┘  └─────────┘  └─────────┘
         ↓ scroll intercambia posiciones
```

---

## 7. Flujos Alternativos

| Escenario | Descripción |
|-----------|-------------|
| Scroll | Los cubos intercambian posiciones aleatoriamente |
| Hover | Elevación sutil + sombra aumenta |
| Click | Abre slide panel de detalle |
| Mobile | Carrusel horizontal con swipe |

---

## 8. Estados de UI

| Estado | Visual |
|--------|--------|
| **Default** | Cubo con color del sabor, rotando |
| **Hover** | scale 1.05, shadow aumenta |
| **Selected** | Glow del color del sabor |
| **In Drop** | Badge "NEW" en esquina |
| **In Cart** | Indicador check en esquina |

---

## 9. BDD (Gherkin)

```gherkin
Feature: Visualizar mosaico de cubos

  Scenario: Mosaico carga con 9 cubos
    Given el usuario está en la sección mosaico
    When la sección entra en viewport
    Then deben aparecer 9 cubos en grid 3×3
    And cada cubo debe mostrar su símbolo y color distintivo
    And todos los cubos deben tener rotación continua

  Scenario: Scroll intercambia posiciones de cubos
    Given el usuario hace scroll en la página
    When el scroll pasa un threshold (ej: 50px)
    Then los cubos deben intercambiar posiciones
    And el efecto debe ser suave (shuffle visual)
    And la rotación debe continuar sin interrupciones

  Scenario: Hover en cubo muestra elevación
    Given el usuario está en el mosaico
    When hace hover sobre un cubo específico
    Then el cubo debe escalar a 1.05
    And la sombra debe aumentar sutilmente
    And los cubos vecinos no deben afectarse

  Scenario: Click abre slide de detalle
    Given el usuario visualiza el mosaico
    When hace click en cualquier cubo
    Then debe abrirse el slide panel desde la derecha
    And el cubo seleccionado debe tener glow
    And el slide debe mostrar información del cubo

  Scenario: Responsive mobile carrusel
    Given el usuario accede desde mobile (<768px)
    When la página carga la sección mosaico
    Then el grid 3×3 debe convertirse en carrusel horizontal
    And el usuario puede hacer swipe para navegar
    And el carrusel debe tener indicadores de posición

  Scenario: Cubo con badge NEW en drop
    Given existe un drop activo o próximo
    And el cubo es parte del drop
    When el mosaico se renderiza
    Then el cubo debe mostrar badge "NEW"
    And el badge debe estar animado (pulse)
```

---

## 10. Mockup ASCII — Mosaico Desktop

```
                    SECCIÓN MOSAICO

        ╔═════════╗  ╔═════════╗  ╔═════════╗
       ╔╝ [Au]   ╚╗ ╔╝ [Ct]   ╚╗ ╔╝ [Gn]   ╚╗
       ║ Aurum   ║ ║ Citrium  ║ ║ Gingetron║
       ╚═════════╝ ╚═════════╝ ╚═════════╝

        ╔═════════╗  ╔═════════╗  ╔═════════╗
       ╔╝ [Vt]   ╚╗ ╔╝ [Fc]   ╚╗ ╔╝ [Mt]   ╚╗
       ║Violetium║ ║ Fumum   ║ ║Mentholium║
       ╚═════════╝ ╚═════════╝ ╚═════════╝

        ╔═════════╗  ╔═════════╗  ╔═════════╗
       ╔╝ [Dy]   ╚╗ ╔╝ [Vf]   ╚╗ ╔╝ [Ar]   ╚╗
       ║ Duality ║ ║ Vinum    ║ ║ Acidum   ║
       ╚═════════╝ ╚═════════╝ ╚═════════╝
              ↓ scroll intercambia ↓
```

### Mobile Carrusel

```
    ◀  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐  ▶
       │  [Au]   │ │  [Ct]   │ │  [Gn]   │ │  [Vt]   │
       └─────────┘ └─────────┘ └─────────┘ └─────────┘
              ● ○ ○ ○ ○ ○ ○ ○ ○  (indicadores)
```

---

## 11. Tabla Periódica de Sabores

| Símbolo | Nombre | Color HEX | Efecto Sensorial |
|---------|--------|-----------|------------------|
| [Au] | Aurum Cacao | #C9A84C | Explosión de núcleo líquido |
| [Ct] | Citrium | #FFB347 | Efervescencia eléctrica |
| [Gn] | Gingetron | #8B4513 | Calor especiado progresivo |
| [Vt] | Violetium | #9B59B6 | Floral y suave |
| [Fc] | Fumum Carbon | #2C3E50 | Textura volcánica |
| [Mt] | Mentholium | #A8E6CF | Frío glacial |
| [Dy] | Duality | #556B2F | Equilibrio amargo-tostado |
| [Vf] | Vinum Fico | #722F37 | Estado líquido uva fermentada |
| [Ar] | Acidum Rubus | #E74C3C | Pulso de acidez frutal |

---

## 12. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Grid 3×3 fijo en desktop | ✅ Confirmada |
| 2 | Cubos 3D rotando continuamente | ✅ Confirmada |
| 3 | Scroll intercambia posiciones | ✅ Confirmada |
| 4 | Hover: elevación sutil | ✅ Confirmada |
| 5 | Click abre slide | ✅ Confirmada |
| 6 | Responsive: carrusel mobile | ✅ Confirmada |
| 7 | Badge "NEW" en drop | ✅ Confirmada |
| 8 | Sin filtros (ver todos) | ✅ Confirmada |
| 9 | Cubos en diferentes planos Z | ✅ Confirmada |
| 10 | Transiciones 500ms | ✅ Confirmada |

---

## 13. Componente MosaicGrid — Props

```typescript
interface MosaicGridProps {
  cubes: CubeData[] // 9 elementos
  onCubeClick: (cubeId: string) => void
  isInDrop?: (cubeId: string) => boolean
  isInCart?: (cubeId: string) => boolean
}

interface CubeData {
  id: string
  symbol: string // [Au], [Ct], etc
  name: string
  color: string // hex
}
```

---

## 14. Notas Técnicas

- **Grid desktop:** CSS Grid con 3 columnas
- **Rotación cubos:** CSS `transform: rotateY()` con `animation: rotate 20s linear infinite`
- **Shuffle effect:** JavaScript interval que cambia `transform: translate()` de cada cubo
- **Mobile carrusel:** CSS `overflow-x: auto` + `scroll-snap-type: x mandatory`
- **Hover scale:** CSS `transform: scale(1.05)` con `transition: 300ms ease`

---

## 15. Criterios de Aceptación

- [x] Grid visual 3×3 (matriz de 9 cubos)
- [x] Cada cubo muestra sabor y símbolo
- [x] Scroll intercambia posiciones de cubos (efecto shuffle)
- [x] Hover/tap en cubo → efecto visual sutil
- [x] Responsive: 3×3 desktop, carrusel en mobile
- [x] Cubos rotan ligeramente de forma continua
- [x] Badge "NEW" en productos en drop

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-03/24*
*Proyecto: QUBIC — Cacao Lab*