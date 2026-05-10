# HIST-17: Recuperación de contraseña — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario
**Quiero** Recuperar mi contraseña
**Para** Volver a acceder a mi cuenta

**Objetivo:** Permitir resetear la contraseña mediante email.

---

## 2. BDD (Gherkin)

```gherkin
Feature: Recuperación de contraseña

  Scenario: Solicitar recuperación
    Given el usuario hizo click en "¿Olvidaste tu contraseña?"
    When introduce su email
    Then debe enviarse un email con link de recuperación

  Scenario: Link de recuperación expira
    Given el usuario recibe el email
    When el link tiene más de 24h
    Then debe mostrar error "Link expirado"
    And debe sugerir solicitar uno nuevo

  Scenario: Restablecer contraseña
    Given el usuario hace click en link válido
    When introduce nueva contraseña
    Then debe actualizarse la contraseña
    And debe poder hacer login con la nueva
```

---

## 3. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | Campo email para enviar link | ✅ Confirmada |
| 2 | Link expira en 24h | ✅ Confirmada |
| 3 | Página para nueva contraseña | ✅ Confirmada |
| 4 | Confirmación de cambio exitoso | ✅ Confirmada |

---

## 4. Criterios de Aceptación

- [x] Campo email para enviar link
- [x] Email con link de recuperación (expira 24h)
- [x] Página para nueva contraseña
- [x] Confirmación de cambio exitoso

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-17/24*
*Proyecto: QUBIC — Cacao Lab*