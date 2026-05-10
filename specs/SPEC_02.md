# HIST-02: Navegar por el menú — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Visitante
**Quiero** Usar el menú de navegación
**Para** Acceder a diferentes secciones de Qubic

**Objetivo:** Permitir navegación fluida entre secciones sin recargar la página.

---

## 2. Scope

### Incluye
- Logo Qubic clickeable (vuelve al hero/top)
- Links de navegación: Inicio, Catálogo, Personaliza, Drops, Nosotros
- Icono carrito a la derecha
- Menú collapsible en mobile (hamburger)
- Scroll smooth al hacer click en link
- Indicador visual de sección activa

### Excluye
- Funcionalidad de carrito (solo icono visual)
- Dropdown de submenús
- Búsqueda en navbar
- Notificaciones

---

## 3. Actores
- **Visitante:** Navega sin cuenta
- **Usuario autenticado:** Puede ver su estado (avatar/login)

---

## 4. Precondiciones
- Página principal cargada
- Navbar visible en viewport

---

## 5. Trigger
- Click en link del navbar
- Click en hamburger menu (mobile)
- Scroll que cambia sección visible

---

## 6. Flujo Principal

```
┌─────────────────────────────────────────────────────────────┐
│ [Q] QUBIC          Inicio | Catálogo | Personaliza | Drops │
│                                                              │
│                                      [🛒] [👤]              │
└─────────────────────────────────────────────────────────────┘
```

**Comportamiento:**
1. Click en "Catálogo" → smooth scroll a sección mosaico
2. Click en "Personaliza" → smooth scroll a sección configurador
3. Click en logo → smooth scroll hacia arriba (hero)
4. Click en carrito → abre panel lateral de carrito

---

## 7. Flujos Alternativos

| Escenario | Descripción |
|-----------|-------------|
| Mobile | Links colapsan en hamburger, click expande menú |
| Scroll entre secciones | Navbar muestra indicador de sección activa |
| Click en logo | Redirige al top de la página |

---

## 8. Estados de UI

| Estado | Comportamiento |
|--------|----------------|
| **Default** | Navbar transparente sobre hero |
| **Scrolled** | Navbar con background solid (blur opcional) |
| **Link hover** | Color cambia a `--neon-fluor` |
| **Link active** | Underline o color destacado |
| **Mobile collapsed** | Hamburger icon visible, click expande |
| **Mobile expanded** | Menú full-width con links apilados |

---

## 9. BDD (Gherkin)

```gherkin
Feature: Navegar por el menú

  Scenario: Click en link realiza smooth scroll
    Given el usuario está en el hero
    When hace click en "Catálogo" en el navbar
    Then el scroll debe ser suave hacia la sección mosaico
    And la URL debe actualizar con hash (#catalogo)
    And el link "Catálogo" debe mostrarse como activo

  Scenario: Click en logo vuelve al hero
    Given el usuario está en cualquier sección
    When hace click en el logo QUBIC
    Then el scroll debe ser suave hacia el top de la página
    And el link "Inicio" debe mostrarse como activo

  Scenario: Navbar cambia estilo al hacer scroll
    Given el usuario hace scroll hacia abajo
    When el scroll supera 100px
    Then el navbar debe tener background solid
    And puede agregar blur o sombra

  Scenario: Menú mobile hamburger
    Given el usuario accede desde mobile (<768px)
    When la página carga
    Then el navbar debe mostrar hamburger icon
    And los links deben estar ocultos
    When el usuario clickea el hamburger
    Then el menú debe expandirse full-width
    And los links deben aparecer apilados verticalmente

  Scenario: Carrito muestra badge con cantidad
    Given el usuario tiene items en el carrito
    When el navbar se renderiza
    Then el icono carrito debe mostrar badge con número
    And el badge debe estar en la esquina superior derecha del icono

  Scenario: Indicador de sección activa
    Given el usuario hace scroll por la página
    When la sección visible cambia
    Then el link correspondiente en el navbar debe mostrarse como activo
    And los otros links deben estar inactivos
```

---

## 10. Mockup ASCII — Navbar Desktop

```
┌──────────────────────────────────────────────────────────────┐
│ 🟫 QUBIC    Inicio | Catálogo | Personaliza | Drops | Nosotros  │  [🛒(3)]  [👤]│
└──────────────────────────────────────────────────────────────┘
   ↑                                                         ↑
   │                                                          └─ carrito + badge
   └─ logo clickeable (scroll to top)
```

### Navbar Mobile

```
┌────────────────────────────────┐
│ 🟫 QUBIC              [☰] [🛒]│  ← hamburger cerrado
└────────────────────────────────┘

┌────────────────────────────────┐
│ 🟫 QUBIC              [✕]     │  ← hamburger abierto
├────────────────────────────────┤
│     Inicio                      │
│     Catálogo                    │
│     Personaliza                 │
│     Drops                       │
│     Nosotros                    │
│     ─────────────────           │
│     [👤] Mi cuenta              │
│     [🛒] Carrito (3)            │
└────────────────────────────────┘
```

---

## 11. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Logo izquierda | ✅ Confirmada |
| 2 | Links centro: Inicio, Catálogo, Personaliza, Drops, Nosotros | ✅ Confirmada |
| 3 | Icono carrito derecha | ✅ Confirmada |
| 4 | Menú collapsible en mobile | ✅ Confirmada |
| 5 | Scroll smooth al hacer click | ✅ Confirmada |
| 6 | Badge carrito muestra cantidad | ✅ Confirmada |
| 7 | Indicador sección activa | ✅ Confirmada |
| 8 | Navbar sticky | ✅ Confirmada |
| 9 | Logo clickeable (scroll to top) | ✅ Confirmada |
| 10 | Smooth scroll 500ms | ✅ Confirmada |

---

## 12. Componente Navbar — Props

```typescript
interface NavbarProps {
  cartItemsCount: number
  isAuthenticated: boolean
  userAvatar?: string
  onCartClick: () => void
  onLoginClick: () => void
}

interface NavLink {
  label: string
  href: string
  sectionId: string
}
```

---

## 13. Notas Técnicas

- **Navbar altura:** 64px desktop, 56px mobile
- **Scroll threshold:** 100px para cambiar estilo
- **Smooth scroll duration:** 500ms ease
- **Mobile breakpoint:** 768px
- **Active link detection:** IntersectionObserver o scroll position
- **Logo click:** `window.scrollTo({ top: 0, behavior: 'smooth' })`

---

## 14. Criterios de Aceptación

- [x] Logo Qubic a la izquierda (scroll to top)
- [x] Links: Inicio, Catálogo, Personaliza, Drops, Nosotros
- [x] Icono carrito a la derecha con badge de cantidad
- [x] Menú collapsible en mobile (hamburger)
- [x] Scroll smooth al hacer click en link
- [x] Indicador visual de sección activa
- [x] Navbar sticky al hacer scroll

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-02/24*
*Proyecto: QUBIC — Cacao Lab*