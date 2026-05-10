# HIST-19: Editar perfil — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario
**Quiero** Editar mis datos
**Para** Mantener mi información actualizada

**Objetivo:** Permitir al usuario modificar sus datos personales.

---

## 2. BDD (Gherkin)

```gherkin
Feature: Editar perfil

  Scenario: Editar nombre
    Given el usuario está en su perfil
    When hace click en "Editar perfil"
    Then debe poder cambiar su nombre
    And al guardar debe actualizarse

  Scenario: Editar email (requiere verificación)
    Given el usuario cambia su email
    When hace click en "Guardar"
    Then debe enviarse email de verificación
    And el email anterior debe seguir activo hasta verificar el nuevo

  Scenario: Cambiar contraseña
    Given el usuario está en "Editar perfil"
    When introduce contraseña actual y nueva contraseña
    Then debe actualizarse la contraseña
    And debe mantener la sesión
```

---

## 3. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Editar nombre | ✅ Confirmada |
| 2 | Editar email (requiere verificación) | ✅ Confirmada |
| 3 | Cambiar contraseña | ✅ Confirmada |
| 4 | Botón "Guardar cambios" | ✅ Confirmada |

---

## 4. Criterios de Aceptación

- [x] Editar nombre
- [x] Editar email (requiere verificación)
- [x] Cambiar contraseña
- [x] Botón "Guardar cambios"

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-19/24*
*Proyecto: QUBIC — Cacao Lab*