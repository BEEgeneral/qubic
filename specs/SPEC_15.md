# HIST-15: Registro de usuario — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Visitante
**Quiero** Registrarme
**Para** Guardar matrices y hacer pedidos

**Objetivo:** Permitir crear una cuenta en Qubic para acceder a funcionalidades personalizadas.

---

## 2. BDD (Gherkin)

```gherkin
Feature: Registro de usuario

  Scenario: Abrir modal de registro
    Given el usuario quiere registrarse
    When hace click en "Registrarse"
    Then debe aparecer el modal de registro
    And el modal debe tener campos apropiados

  Scenario: Llenar formulario de registro
    Given el modal está abierto
    When el usuario llena: nombre, email, contraseña, confirmar
    Then los campos deben validar en tiempo real
    And email debe tener formato válido
    And contraseña debe tener mínimo 8 caracteres

  Scenario: Registro exitoso
    Given todos los campos son válidos
    When el usuario hace click en "Registrarse"
    Then debe enviarse email de verificación
    And debe mostrarse mensaje "Revisa tu email"

  Scenario: Verificación de email
    Given el usuario recibe email de verificación
    When hace click en el link
    Then la cuenta debe activarse
    And el usuario debe poder hacer login
```

---

## 3. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Modal de registro | ✅ Confirmada |
| 2 | Campos: nombre, email, pass, confirmar pass | ✅ Confirmada |
| 3 | Validación: email válido, pass mínimo 8 caracteres | ✅ Confirmada |
| 4 | Email de verificación tras registro | ✅ Confirmada |
| 5 | Redirección a homepage tras verificación | ✅ Confirmada |

---

## 4. Criterios de Aceptación

- [x] Modal de registro
- [x] Campos: nombre, email, contraseña, confirmar contraseña
- [x] Validación: email válido, contraseña mínimo 8 caracteres
- [x] Email de verificación tras registro
- [x] Redirección a homepage tras verificación

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-15/24*
*Proyecto: QUBIC — Cacao Lab*