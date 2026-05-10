# HIST-01: Visualizar página principal — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Visitante
**Quiero** Ver la página principal
**Para** Conocer Qubic y navegar por el producto

**Objetivo:** Permitir que cualquier visitante acceda y entienda Qubic sin necesidad de registro.

---

## 2. Scope

### Incluye
- Estructura SPA con scroll vertical
- Una sola pantalla completa (desktop: todo visible sin scroll interno de secciones)
- Navbar sticky en la parte superior
- Navbar incluye link "Nosotros" (historia de Leire)
- Navbar incluye "Fundadora: Leire, 14 años" (subtle badge)
- Hero section con título, subtítulo, tagline inspirador y CTA (100vh en desktop, viewport en mobile)
- Tagline de Leire: "El chocolate es física cuántica deliciosa"
- Mosaico visual de 9 cubos 3D rotando
- Footer con redes sociales, newsletter y breve texto de la historia de Leire
- Countdown del próximo drop en hero
- Responsive: carrusel horizontal en mobile
- Page scroll normal (no smooth scroll entre secciones - es una sola pantalla)

### Excluye
- Login/registro (no requerido para ver)
- Carrito funcional (sin productos aún)
- Checkout
- Perfil de usuario
- Proceso de compra

---

## 3. Actores
- **Visitante:** Usuario sin cuenta que accede a la web
- **Usuario autenticado:** Puede navegar, pero el enfoque es para visitantes

---

## 4. Precondiciones
- El usuario accede a la URL base `/`
- El navegador soporta CSS3 y JavaScript
- Conexión a internet disponible

---

## 5. Trigger
- Carga de la página (`window.onload` o similar)
- Navegación via links internos (smooth scroll)

---

## 6. Flujo Principal

```
┌─────────────────────────────────────────────────────────────┐
│                        NAVBAR (sticky)                       │
│  [LOGO]     Inicio | Catálogo | Personaliza | Drops    [🛒]│
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                         HERO (100vh)                        │
│                                                              │
│                    ┌─────────────────┐                       │
│                    │     QUBIC      │                       │
│                    │                 │                       │
│                    │Hack the Flavor  │                       │
│                    │Assemble Pleasure│                       │
│                    └─────────────────┘                       │
│                                                              │
│              [ Personaliza tu kit ]                          │
│                                                              │
│              ┌──────────────────────────┐                   │
│              │   DROP EN: 02d 14h 32m   │                   │
│              └──────────────────────────┘                   │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                    MOSAICO DE CUBOS                         │
│                                                              │
│      ┌───────┐  ┌───────┐  ┌───────┐                       │
│      │ [Au]  │  │ [Ct]  │  │ [Gn]  │                       │
│      └───────┘  └───────┘  └───────┘                       │
│      ┌───────┐  ┌───────┐  ┌───────┐                       │
│      │ [Vt]  │  │ [Fc]  │  │ [Mt]  │                       │
│      └───────┘  └───────┘  └───────┘                       │
│      ┌───────┐  ┌───────┐  ┌───────┐                       │
│      │ [Dy]  │  │ [Vf]  │  │ [Ar]  │                       │
│      └───────┘  └───────┘  └───────┘                       │
│                                                              │
│                  Scroll ↓ para interactuar                   │
│                                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│                         FOOTER                               │
│                                                              │
│     [ Redes sociales: IG | TT | FB ]                        │
│                                                              │
│     Newsletter: [________________] [Suscribirme]            │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 7. Flujos Alternativos

| Escenario | Descripción |
|-----------|-------------|
| Scroll normal | Page scroll para navegar (no smooth scroll entre secciones) |
| Click en link | Navega a sección con anchor links (si hay anchors definidos) |
| Click en cubo | Abre slide lateral de detalle |
| Resize ventana | Adaptación de 3×3 a carrusel según breakpoint |

---

## 8. Estados de UI

| Estado | Comportamiento |
|--------|----------------|
| **Default** | Todo visible, cubos rotando suavemente |
| **Navbar scrolled** | Background opacity aumenta (blur opcional) |
| **Cubo hover** | Scale 1.05, sombra aumenta |
| **Cubo click** | Abre SlidePanel con detalle |
| **Mobile** | Mosaico se convierte en carrusel horizontal |
| **Countdown a 0** | Muestra "DROP ACTIVO" con badge animado |

---

## 9. BDD (Gherkin)

```gherkin
Feature: Visualizar página principal

  Scenario: Visitante accede a la página principal
    Given el usuario accede a la URL "/"
    When la página carga completamente
    Then debe visualizar el navbar sticky con logo, links y carrito
    And debe visualizar el hero con título "QUBIC"
    And debe visualizar el mosaico de 9 cubos rotando
    And debe visualizar el countdown del próximo drop
    And debe visualizar el footer con redes y newsletter

  Scenario: Page scroll normal
    Given el usuario está en desktop
    When hace scroll en la página
    Then el scroll es normal del browser
    And no hay animaciones de smooth scroll entre secciones
    And todo está en una sola pantalla completa

  Scenario: Mosaico responde a hover
    Given el usuario está en la sección mosaico
    When hace hover sobre un cubo
    Then el cubo debe escalar a 1.05
    And la sombra debe aumentar sutilmente

  Scenario: Click en cubo abre slide
    Given el usuario visualiza el mosaico
    When hace click en cualquier cubo
    Then debe abrirse un slide panel desde la derecha
    And el fondo debe oscurecerse con overlay

  Scenario: Responsive en mobile
    Given el usuario accede desde dispositivo mobile (<768px)
    When la página carga
    Then el mosaico debe mostrarse como carrusel horizontal
    And el navbar debe colapsar a hamburger menu

  Scenario: Countdown llega a cero
    Given hay un drop programado
    When el countdown llega a 0
    Then debe cambiar a "DROP ACTIVO AHORA"
    And el badge debe tener animación de pulse
```

---

## 10. Mockup ASCII — Hero Section

```
┌────────────────────────────────────────────────────────────────┐
│ [Q] QUBIC  Inicio | Catálogo | Personaliza | Drops | Nosotros │ 🛒 │
│                            "Leire, 14 años" badge            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                        ████████╗                               │
│                        ╚══███═══╝                               │
│                          ████                                  │
│                     ╔═══███═══╗                                │
│                   ╔███░░░░░███╗                                │
│                  ██░░   ░   ░██                                │
│                  █░  Q U B I C █                                │
│                   █░         █                                 │
│                   ╚█░░░░░░░█╝                                  │
│                     ╚██████╝                                    │
│                                                                │
│         "El chocolate es física cuántica deliciosa"           │
│           — Leire, 14 años, fundadora                          │
│                                                                │
│              Hack the Flavor. Assemble your Pleasure.         │
│                                                                │
│              ┌─────────────────────────────────┐               │
│              │     [ Personaliza tu kit ]      │               │
│              └─────────────────────────────────┘               │
│                                                                │
│              ┌─────────────────────────────┐                   │
│              │   DROP EN: 02d 14h 32m 15s   │                   │
│              └─────────────────────────────┘                   │
└────────────────────────────────────────────────────────────────┘
```

---

## 11. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | SPA con scroll vertical | ✅ Confirmada |
| 2 | Desktop: una pantalla completa (sin scroll interno de secciones) | ✅ Confirmada |
| 3 | Mobile: one page con scroll vertical normal | ✅ Confirmada |
| 4 | Navbar sticky altura ~64px | ✅ Confirmada |
| 5 | Logo izquierda / links centro / carrito derecha | ✅ Confirmada |
| 6 | Hero 100vh con título y CTA | ✅ Confirmada |
| 7 | Mosaico 3×3 visible | ✅ Confirmada |
| 8 | Footer con redes + newsletter | ✅ Confirmada |
| 9 | Carrusel horizontal en mobile | ✅ Confirmada |
| 10 | Cubos rotan ligeramente | ✅ Confirmada |
| 11 | Click en cubo → slide lateral | ✅ Confirmada |
| 12 | Sin autenticación requerida | ✅ Confirmada |
| 13 | Countdown en hero | ✅ Confirmada |

---

## 12. Integraciones

| Sistema | Descripción |
|---------|-------------|
| Router SPA | Navegación interna con hash anchors |
| Scroll behavior | CSS scroll-behavior: smooth |
| Responsive | Media queries en breakpoints 768px, 1024px |
| Animation | CSS/JS para rotación continua de cubos |
| Countdown | JavaScript timer actualizando cada segundo |

---

## 13. Notas Técnicas

- **Navbar height:** 64px desktop, 56px mobile
- **Hero min-height:** 100vh (vh = viewport height)
- **Cubo rotation:** 20s por ciclo, ease-in-out, infinito
- **Scroll smooth:** `scroll-behavior: smooth` en CSS
- **Breakpoints:** Mobile <768px, Tablet 768-1024px, Desktop >1024px
- **Overlay backdrop:** `rgba(0,0,0,0.8)` al abrir slide

---

## 14. Criterios de Aceptación

- [x] Una sola pantalla (SPA) con scroll vertical
- [x] Desktop: pantalla completa (todo visible sin scroll interno)
- [x] Mobile: scroll vertical normal
- [x] Menú sticky horizontal en la parte superior
- [x] Hero section con título, subtítulo y CTA
- [x] Mosaico visual de 9 cubos de chocolate (rotando)
- [x] Footer minimal con redes sociales y newsletter
- [x] Countdown del próximo drop en hero
- [x] Responsive: carrusel horizontal en mobile
- [x] Click en cubo abre slide lateral (para implementación posterior)
- [x] Navbar incluye link "Nosotros" y badge "Leire, 14 años"
- [x] Hero incluye tagline de Leire
- [x] Footer incluye breve historia de Leire + link "Leer más"

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-01/24*
*Proyecto: QUBIC — Cacao Lab*