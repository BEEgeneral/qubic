# HIST-18: Ver mi perfil — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario autenticado
**Quiero** Ver mi perfil
**Para** Gestionar mis datos y configuraciones

**Objetivo:** Centralizar la información del usuario y acceso rápido a sus datos.

---

## 2. BDD (Gherkin)

```gherkin
Feature: Ver perfil de usuario

  Scenario: Acceder al perfil
    Given el usuario está logueado
    When hace click en su avatar o "Mi cuenta"
    Then debe mostrarse la página de perfil
    And debe mostrar: nombre, email, fecha de registro

  Scenario: Ver historial de pedidos
    Given el usuario está en su perfil
    Then debe poder ver "Historial de pedidos"
    And cada pedido debe mostrar: fecha, estado, total

  Scenario: Ver matrices guardadas
    Given el usuario está en su perfil
    Then debe poder ver "Mis matrices"
    And debe ver las matrices previamente guardadas

  Scenario: Ver direcciones
    Given el usuario está en su perfil
    Then debe poder ver "Mis direcciones"
    And debe ver las direcciones guardadas

  Scenario: Cerrar sesión
    Given el usuario está en su perfil
    When hace click en "Cerrar sesión"
    Then debe desloguearse
    And el navbar debe volver al estado de invitado
```

---

## 3. Mockup ASCII — Perfil

```
┌─────────────────────────────────────────────────────────────┐
│                        MI PERFIL                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────┐                                        │
│  │   [Avatar]      │   Nombre: Juan Pérez                   │
│  │                 │   Email: juan@email.com                │
│  │                 │   Desde: 15 Mar 2026                   │
│  └─────────────────┘                                        │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│  [📦] Historial de pedidos                                  │
│       └─ Ver pedidos anteriores                            │
│                                                             │
│  [🧊] Mis matrices                                          │
│       └─ Matrices guardadas (5/10)                         │
│                                                             │
│  [📍] Direcciones                                           │
│       └─ 2 direcciones guardadas                           │
│                                                             │
│  [⚙️] Configuración de cuenta                               │
│       └─ Editar perfil, cambiar contraseña                 │
│                                                             │
│  ─────────────────────────────────────────────────────────  │
│                                                             │
│              [        Cerrar sesión        ]                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 4. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Nombre, email, fecha de registro | ✅ Confirmada |
| 2 | Historial de pedidos (fecha, estado, total) | ✅ Confirmada |
| 3 | Mis matrices guardadas | ✅ Confirmada |
| 4 | Mis direcciones | ✅ Confirmada |
| 5 | Botón "Cerrar sesión" | ✅ Confirmada |

---

## 5. Criterios de Aceptación

- [x] Nombre, email, fecha de registro
- [x] Historial de pedidos (fecha, estado, total)
- [x] Mis matrices guardadas
- [x] Mis direcciones
- [x] Botón "Cerrar sesión"

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-18/24*
*Proyecto: QUBIC — Cacao Lab*