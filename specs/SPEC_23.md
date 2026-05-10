# HIST-23: Acceder a maridaje sonoro — Especificación Funcional

> *Hack the Flavor. Assemble your Pleasure.*

## 1. Historia Enriquecida

**Como** Usuario
**Quiero** Escanear QR del producto
**Para** Escuchar la sintonía de sabor

**Objetivo:** Ofrecer una experiencia inmersiva que combina chocolate con audio.

---

## 2. Scope

### Incluye
- QR visible en packaging físico
- Link abre página web de maridaje
- Audio player con play/pause
- Descripción del maridaje
- Opción de descargar audio
- Sintonía única por combinación de nodos

### Excluye
- Playlist completa
- Compras desde la página de maridaje

---

## 3. Flujo

```
Packaging físico → QR code → Página web → Audio player → Enjoy!
```

---

## 4. BDD (Gherkin)

```gherkin
Feature: Maridaje sonoro

  Scenario: Escanear QR y acceder
    Given el usuario tiene el kit físico
    When escanea el QR del packaging
    Then debe abrirse la página de maridaje
    And debe mostrar la sintonía correspondiente

  Scenario: Audio player
    Given la página de maridaje está abierta
    Then debe haber un reproductor de audio
    And debe tener botones play/pause
    And debe mostrar progreso de la pista

  Scenario: Descripción del maridaje
    Given la página está abierta
    Then debe mostrar descripción del pairing
    And debe explicar por qué estos sabores van juntos

  Scenario: Descargar audio
    Given la pista está cargada
    When el usuario hace click en "Descargar"
    Then debe descargarse el archivo de audio
```

---

## 5. Mockup ASCII — Página Maridaje

```
┌─────────────────────────────────────────────────────────────┐
│  🎵 MARIDAJE — Matrix One #BIT-0X-042                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  Tu matriz:                                                 │
│  ┌───┐ ┌───┐ ┌───┐                                        │
│  │Au │ │Ct │ │Gn │                                        │
│  └───┘ └───┘ └───┘                                        │
│  ┌───┐ ┌───┐ ┌───┐                                        │
│  │Vt │ │Fc │ │Mt │                                        │
│  └───┘ └───┘ └───┘                                        │
│  ┌───┐ ┌───┐ ┌───┐                                        │
│  │Dy │ │Vf │ │Ar │                                        │
│  └───┘ └───┘ └───┘                                        │
│                                                             │
│  ─────────────────────────────────────────────────────     │
│                                                             │
│  DESCRIPCIÓN DEL MARIDAJE                                   │
│  "Esta combinación equilibra la acidez del [Ar] con        │
│   la cremosidad del [Mt], creando un contraste que          │
│   evolve hacia el ahumado del [Fc]..."                      │
│                                                             │
│  ─────────────────────────────────────────────────────     │
│                                                             │
│         ┌────────────────────────────────────┐             │
│         │  ▶  ════════════════  2:34 / 4:12  │             │
│         │  🔊 ════════════════════           │             │
│         └────────────────────────────────────┘             │
│                                                             │
│         [⟳ Escuchar de nuevo]   [⇩ Descargar]             │
│                                                             │
│  ─────────────────────────────────────────────────────     │
│                                                             │
│  ⚠️ Para mejor experiencia, usa auriculares.                │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## 6. Validación de Asunciones

| # | Asunción | Decisión |
|---|----------|----------|
| 1 | QR visible en packaging físico | ✅ Confirmada |
| 2 | Link abre página web de maridaje | ✅ Confirmada |
| 3 | Audio player con play/pause | ✅ Confirmada |
| 4 | Descripción del maridaje | ✅ Confirmada |
| 5 | Opción de descargar audio | ✅ Confirmada |
| 6 | Sintonía única por combinación | ✅ Confirmada |

---

## 7. Criterios de Aceptación

- [x] QR visible en packaging físico
- [x] Link abre página web de maridaje
- [x] Audio player con play/pause
- [x] Descripción del maridaje
- [x] Opción de descargar audio

---

*Documento generado: 2026-05-10*
*Fuente: spec-clarger → spec-refiner*
*Historia: HIST-23/24*
*Proyecto: QUBIC — Cacao Lab*