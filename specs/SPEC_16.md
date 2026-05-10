# HIST-16: Inicio de sesión — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario registrado
**Quiero** Iniciar sesión
**Para** Acceder a mi cuenta

**Objetivo:** Permitir a usuarios existentes acceder a su cuenta.

---

## 2. BDD (Gherkin)

```gherkin
Feature: Inicio de sesión

  Scenario: Abrir modal de login
    Given el usuario no está logueado
    When hace click en "Iniciar sesión"
    Then debe aparecer el modal de login

  Scenario: Llenar credenciales
    Given el modal está abierto
    When el usuario llena: email, contraseña
    Then debe poder hacer click en "Iniciar sesión"

  Scenario: Login exitoso
    Given las credenciales son correctas
    When el usuario hace click en "Iniciar sesión"
    Then el modal debe cerrarse
    And el navbar debe actualizarse (avatar/login → logout)
    And el usuario debe estar logueado

  Scenario: Credenciales inválidas
    Given el usuario introduce email o contraseña incorrectos
    When hace click en "Iniciar sesión"
    Then debe mostrar error "Credenciales inválidas"
    And el usuario debe permanecer en el modal

  Scenario: Recordarme
    Given el modal está abierto
    When el usuario marca "Recordarme"
    And hace login exitoso
    Then la sesión debe persistir por más tiempo

  Scenario: "¿Olvidaste tu contraseña?"
    Given el modal está abierto
    When el usuario hace click en el link
    Then debe aparecer modal de recuperación
```

---

## 3. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Modal de login | ✅ Confirmada |
| 2 | Campos: email, contraseña | ✅ Confirmada |
| 3 | Checkbox "Recordarme" | ✅ Confirmada |
| 4 | Link "¿Olvidaste tu contraseña?" | ✅ Confirmada |
| 5 | Error: credenciales inválidas | ✅ Confirmada |
| 6 | Éxito: cierra modal, actualiza navbar | ✅ Confirmada |

---

## 4. Criterios de Aceptación

- [x] Modal de login
- [x] Campos: email, contraseña
- [x] Checkbox "Recordarme"
- [x] Link "¿Olvidaste tu contraseña?"
- [x] Error: credenciales inválidas
- [x] Éxito: cierra modal, actualiza navbar

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-16/24*
*Proyecto: QUBIC — Cacao Lab*