# HIST-05: Abrir detalle de cubo (Slide Lateral) — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Visitante/Usuario
**Quiero** Ver el detalle de un cubo
**Para** Conocer su historia, sabor, ingredientes y efectos sensoriales

**Objetivo:** Permitir al usuario explorar en profundidad cada elemento/sabor del catálogo.

---

## 2. Scope

### Incluye
- Slide panel desde la derecha
- Overlay oscuro de fondo
- Cubo 3D girando lentamente (~10s por rotación)
- Contenido: nombre, símbolo, descripción, historia, origen
- Lista de ingredientes
- Efectos sensoriales del sabor
- Botón "Añadir a mi matriz"
- Cerrar: overlay + X + swipe abajo (mobile)
- Compatible con touch en mobile

### Excluye
- Navegación a otra página (todo inline)
- Sistema de compra aquí (solo "añadir a matriz")
- Comparación de cubos lado a lado

---

## 3. Actores
- **Visitante:** Puede ver el slide pero no añadir a matriz (requiere login)
- **Usuario autenticado:** Puede añadir a su matriz

---

## 4. Precondiciones
- Mosaico cargado con cubos visibles
- Click en un cubo específico

---

## 5. Trigger
- Click/tap en cualquier cubo del mosaico
- Cerrar: click en overlay, click en X, swipe down (mobile)

---

## 6. Flujo Principal

```
┌─────────────────────────────────────────────┐
│                                             │
│  ← Clic en cubo                            │
│                                             │
│                                             ▼
│                         ┌──────────────────────────┐
│   ┌─────────┐          │  ╔══════════════════╗   │
│   │ [Au]    │          │  ║   [Au] AURUM      ║   │
│   │ Aurum   │    →     │  ║   ════════════════║   │
│   └─────────┘          │  ║                   ║   │
│                        │  ║  "El oro líquido  ║   │
│                        │  ║   del cacao"     ║   │
│                        │  ║                   ║   │
│                        │  ║  Ingredientes:    ║   │
│                        │  ║  - Cacao 85%      ║   │
│                        │  ║  - Azafrán        ║   │
│                        │  ║  - Miel           ║   │
│                        │  ║                   ║   │
│                        │  ║  Efecto:          ║   │
│                        │  ║  Explosión de     ║   │
│                        │  ║  núcleo líquido   ║   │
│                        │  ║                   ║   │
│                        │  ║ [←] [Añadir] [→] ║   │
│                        │  ╚══════════════════╝   │
│                         └──────────────────────────┘
│                              Slide Panel (derecha)
└─────────────────────────────────────────────┘
```

---

## 7. Flujos Alternativos

| Escenario | Descripción |
|-----------|-------------|
| Cerrar overlay | Click en el overlay oscuro cierra el slide |
| Cerrar con X | Botón X en esquina superior derecha |
| Swipe down (mobile) | Arrastrar hacia abajo cierra el slide |
| Navegar entre cubos | Flechas permiten ver anterior/siguiente |
| Sin cuenta | "Añadir a mi matriz" muestra modal de login |

---

## 8. Estados de UI

| Estado | Comportamiento |
|--------|----------------|
| **Closed** | Slide hidden, overlay hidden |
| **Opening** | Slide entra desde derecha (500ms), overlay fade in |
| **Open** | Slide visible, cubo 3D rotando, overlay visible |
| **Closing** | Slide sale hacia derecha, overlay fade out |

---

## 9. BDD (Gherkin)

```gherkin
Feature: Abrir detalle de cubo (Slide Panel)

  Scenario: Click en cubo abre slide
    Given el usuario está en el mosaico
    When hace click en un cubo específico
    Then el slide panel debe aparecer desde la derecha
    And el overlay debe aparecer con opacity 0→0.8
    And el slide debe tener animación de 500ms

  Scenario: Cubo 3D gira en el slide
    Given el slide está abierto con un cubo específico
    Then el cubo 3D debe estar visible
    And debe rotar continuamente (10s por ciclo)
    And la rotación debe ser suave (sin saltos)

  Scenario: Contenido del slide
    Given el slide está abierto
    Then debe mostrar: símbolo, nombre, descripción
    And debe mostrar: historia, origen del sabor
    And debe mostrar: ingredientes
    And debe mostrar: efectos sensoriales

  Scenario: Botón "Añadir a mi matriz"
    Given el slide está abierto
    Then debe haber un botón "Añadir a mi matriz"
    And el botón debe estar disabled si el usuario no está logueado
    When el usuario hace click en el botón (logued)
    Then debe añadir el cubo a la matriz actual
    And debe mostrar feedback visual (glow en carrito)

  Scenario: Cerrar slide con overlay
    Given el slide está abierto
    When el usuario hace click en el overlay
    Then el slide debe cerrarse
    And el overlay debe desaparecer

  Scenario: Cerrar slide con X
    Given el slide está abierto
    When el usuario hace click en el botón X
    Then el slide debe cerrarse
    And el overlay debe desaparecer

  Scenario: Cerrar slide con swipe down (mobile)
    Given el usuario está en mobile y el slide está abierto
    When el usuario hace swipe hacia abajo
    Then el slide debe cerrarse
    And el gesto debe ser detectado con threshold de 100px

  Scenario: Navegación entre cubos
    Given el slide está abierto
    When el usuario hace click en "Anterior" o "Siguiente"
    Then el contenido debe cambiar al cubo correspondiente
    And el cubo 3D debe actualizarse
    And la navegación debe ser cíclica (9→1→2...)
```

---

## 10. Mockup ASCII — Slide Panel

```
┌──────────────────────────────────────────────────────────────────┐
│                                                                  │
│  ┌──────────────────────────────────────────────┐               │
│  │                                        [X]  │               │
│  │                                              │               │
│  │           ╔══════════════════════╗           │               │
│  │           ║     ╔═══════════╗    ║           │               │
│  │           ║     ║  [Au]    ║    ║           │               │
│  │           ║     ╚═══════════╝    ║           │               │
│  │           ║       rotating       ║           │               │
│  │           ╚══════════════════════╝           │               │
│  │                                              │               │
│  │           ╔══════════════════════╗           │               │
│  │           ║   AURUM CACAO       ║           │               │
│  │           ╚══════════════════════╝           │               │
│  │                                              │               │
│  │  "El oro líquido del cacao. Un sabor        │               │
│  │   que awakening tus sentidos."               │               │
│  │                                              │               │
│  │  ─────────────────────────────────────       │               │
│  │                                              │               │
│  │  HISTORIA                                    │               │
│  │  Origins from the ancient Aztec recipe...    │               │
│  │                                              │               │
│  │  ─────────────────────────────────────       │               │
│  │                                              │               │
│  │  INGREDIENTES                                │               │
│  │  • Cacao 85%                                │               │
│  │  • Caramelo de azafrán                      │               │
│  │  • Miel artesanal                           │               │
│  │                                              │               │
│  │  ─────────────────────────────────────       │               │
│  │                                              │               │
│  │  EFECTO SENSORIAL                           │               │
│  │  💥 Explosión de núcleo líquido — efecto 24K  │               │
│  │                                              │               │
│  │                                              │               │
│  │  ┌──────┐  ┌─────────────────┐  ┌──────┐     │               │
│  │  │  ←   │  │  Añadir a mí   │  │  →   │     │               │
│  │  │      │  │    matriz      │  │      │     │               │
│  │  └──────┘  └─────────────────┘  └──────┘     │               │
│  └──────────────────────────────────────────────┘               │
│                                                                  │
│  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓  (overlay oscuro)    │
└──────────────────────────────────────────────────────────────────┘
```

---

## 11. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Slide desde derecha | ✅ Confirmada |
| 2 | Overlay oscuro | ✅ Confirmada |
| 3 | Cubo 3D girando (~10s) | ✅ Confirmada |
| 4 | Contenido: nombre, símbolo, descripción, historia | ✅ Confirmada |
| 5 | Ingredientes y efectos sensoriales | ✅ Confirmada |
| 6 | Botón "Añadir a mi matriz" | ✅ Confirmada |
| 7 | Cerrar: overlay + X + swipe abajo | ✅ Confirmada |
| 8 | Touch compatible mobile | ✅ Confirmada |

---

## 12. Componente SlidePanel — Props

```typescript
interface SlidePanelProps {
  cube: CubeData
  isOpen: boolean
  onClose: () => void
  onNext: () => void
  onPrev: () => void
  onAddToMatrix: (cubeId: string) => void
  isAuthenticated: boolean
  onLoginRequired: () => void
}

interface CubeData {
  id: string
  symbol: string
  name: string
  description: string
  history: string
  origin: string
  ingredients: string[]
  sensoryEffect: string
  color: string
}
```

---

## 13. Notas Técnicas

- **Slide animation:** `transform: translateX(100%)` → `translateX(0)`, 500ms ease
- **Overlay:** `background: rgba(0,0,0,0.8)`, `opacity` animation 300ms
- **Cubo rotation:** Same as mosaic, 20s cycle, continuous
- **Swipe detection:** Touch events con `touchstart`, `touchmove`, `touchend`
- **Swipe threshold:** 100px para cerrar

---

## 14. Criterios de Aceptación

- [x] Click en cubo → slide lateral desde derecha
- [x] Overlay oscuro de fondo
- [x] Cubo 3D girando lentamente (~10s por rotación)
- [x] Contenido: nombre, símbolo, descripción, historia, origen
- [x] Lista de ingredientes
- [x] Efectos sensoriales del sabor
- [x] Botón "Añadir a mi matriz"
- [x] Cerrar con X o click fuera
- [x] Compatible con touch en mobile
- [x] Navegación entre cubos (flechas)

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-05/24*
*Proyecto: QUBIC — Cacao Lab*