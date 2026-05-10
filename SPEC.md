# QUBIC — Especificación Maestra

> *Hack the Flavor. Assemble your Pleasure.*

---

## Índice de Specs

| # | Historia | Archivo | Estado |
|---|----------|---------|--------|
| 01 | Visualizar página principal | SPEC_01.md | ✅ |
| 02 | Navegar por el menú | SPEC_02.md | ✅ |
| 03 | Visualizar mosaico de cubos | SPEC_03.md | ✅ |
| 04 | Sin filtros (ver todos) | SPEC_04.md | ✅ |
| 05 | Abrir detalle de cubo | SPEC_05.md | ✅ |
| 06 | Navegar entre cubos | SPEC_06.md | ✅ |
| 07 | Crear matriz personalizada | SPEC_07.md | ✅ |
| 08 | Guardar matriz | SPEC_08.md | ✅ |
| 09 | Cargar matriz guardada | SPEC_09.md | ✅ |
| 10 | Añadir matriz al carrito | SPEC_10.md | ✅ |
| 11 | Ver y gestionar carrito | SPEC_11.md | ✅ |
| 12 | Aplicar descuento | SPEC_12.md | ✅ |
| 13 | Iniciar proceso de pago | SPEC_13.md | ✅ |
| 14 | Validar y confirmar pedido | SPEC_14.md | ✅ |
| 15 | Registro de usuario | SPEC_15.md | ✅ |
| 16 | Inicio de sesión | SPEC_16.md | ✅ |
| 17 | Recuperación de contraseña | SPEC_17.md | ✅ |
| 18 | Ver mi perfil | SPEC_18.md | ✅ |
| 19 | Editar perfil | SPEC_19.md | ✅ |
| 20 | Gestionar direcciones | SPEC_20.md | ✅ |
| 21 | Ver próximo drop | SPEC_21.md | ✅ |
| 22 | Reservar en drop | SPEC_22.md | ✅ |
| 23 | Maridaje sonoro | SPEC_23.md | ✅ |
| 24 | Ver confirmación de pedido | SPEC_24.md | ✅ |

---

## 1. Visión del Producto

**QUBIC** es una experiencia de e-commerce para chocolates artesanales de lujo presentados como kits de ensamblaje sensorial 3×3.

**Fundadora:** Leire, 14 años. Una adolescente que transformó su pasión por la física cuántica y la química molecular en chocolate. Todo empezó con un video viral de 60 segundos explicando por qué el chocolate brilla. 5M de vistas en 48 horas. Qubic nació de la curiosidad, no del negocio.

### Tagline de Leire
> *"El chocolate es física cuántica deliciosa"*
> — Leire, 14 años, fundadora

### Interacciones Core

- **SPA** con scroll vertical
- **Cubos 3D** rotando continuamente
- **Scroll** intercambia posiciones entre cubos
- **Click** en cubo → slide lateral con detalle (3D rotando)
- **Configurar** matriz 3×3 → checkout en slide

### Modelo de Negocio

**Qubic no es una tienda — es un evento semanal.**

Inspirado en Supreme: escasez controlada, ritual de compra, exclusividad real.

- **Cadencia:** Semanal, anuncio cada domingo
- **Ventana:** 24-48 horas máximo
- **Unidades:** Número fijo y público
- **Contador:** Tiempo real durante el drop

---

## 2. Diseño Visual

### Paleta de Colores

| Variable CSS | Hex | Uso |
|-------------|-----|-----|
| `--carbon-black` | `#1C1C1C` | Fondo, estructura |
| `--aurum-gold` | `#C9A84C` | Acentos premium, glow |
| `--neon-fluor` | `#C8FF00` | Detalles interactivos |
| `--off-white` | `#E0DDD8` | Texto sobre oscuro |

### Tipografía

- **Font principal:** Sans-serif técnica con tracking extendido, peso medium
- **Símbolos:** Formato tabla periódica ([Au], [Ct], [Fc]…)
- **Nomenclatura:** Códigos serialización BIT-0X

### Estilo Visual

Mezcla entre lujo minimalista y manual técnico de ingeniería:
- Textura matte industrial, cartón prensado oscuro
- Cubos 3D con materiales realistas (no cartoon)
- Animaciones suaves de 500ms

---

## 3. Arquitectura SPA

### Estructura de Página

```
┌─────────────────────────────────────────────────────────────┐
│  NAVBAR (sticky, altura: 64px)                             │
│  Logo | Nav links (Incluye "Nosotros") | Carrito            │
│  Badge: "Leire, 14 años" (sutil, visible en desktop)         │
├─────────────────────────────────────────────────────────────┤
│  HERO (100vh)                                               │
│  Título QUBIC + Tagline de Leire                            │
│  Subtítulo + CTA + Countdown drop                           │
│  "El chocolate es física cuántica deliciosa"                 │
│  — Leire, 14 años, fundadora                                 │
├─────────────────────────────────────────────────────────────┤
│  MOSAICO DE CUBOS (min-height: 80vh)                       │
│  Grid 3×3, cubos 3D rotando                                │
│  Scroll intercambia posiciones                             │
├─────────────────────────────────────────────────────────────┤
│  CONFIGURADOR DE MATRIZ (visible tras CTA)                  │
│  Grid 3×3 interactivo para seleccionar 9 cubos              │
├─────────────────────────────────────────────────────────────┤
│  FOOTER (min-height: 40vh)                                 │
│  Redes + Newsletter + Breve historia de Leire               │
│  Link: "Leer la historia completa →"                        │
└─────────────────────────────────────────────────────────────┘
```

### Responsive

| Breakpoint | Layout mosaico |
|------------|---------------|
| >= 768px | Grid 3×3 fijo |
| < 768px | Carrusel horizontal |

---

## 4. Tabla Periódica de Sabores (9 Elementos)

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

## 5. Componentes Core

### 5.1 Navbar
- **Estados:** Default (transparente), Scrolled (background solid)
- **Elementos:** Logo (izq), Links centro, Carrito (der)
- **Mobile:** Hamburger menu

### 5.2 Hero
- **Elementos:** Título QUBIC, Subtítulo, CTA "Personaliza tu kit", Countdown drop
- **Countdown:** DD:HH:MM:SS, actualiza cada segundo
- **Drop activo:** Muestra "DROP ACTIVO AHORA" con badge animado

### 5.3 MosaicGrid
- **Grid:** 3×3 (9 cubos)
- **Cubos:** 3D, rotan continuamente (20s por ciclo)
- **Scroll:** Intercambia posiciones (shuffle visual)
- **Hover:** scale 1.05, sombra aumenta
- **Click:** Abre SlidePanel

### 5.4 SlidePanel
- **Apertura:** Slide desde derecha (500ms)
- **Overlay:** `rgba(0,0,0,0.8)`
- **Cierre:** Overlay + X + Swipe down (mobile)
- **Contenido:** Cubo 3D rotando, nombre, símbolo, descripción, historia, ingredientes, efectos
- **Navegación:** Flechas ◀ ▶ para cambiar cubo
- **Acción:** Botón "Añadir a mi matriz"

### 5.5 MatrixBuilder
- **Grid:** 3×3 interactivo
- **Selector:** Click en celda → muestra 9 opciones de sabor
- **Validación:** Exactamente 9 elementos
- **Límite:** Barra "3 max" (máx 3 kits idénticos por pedido)
- **Botones:** "Guardar matriz" + "Confirmar matriz"

### 5.6 CartPanel
- **Lista:** Preview 3×3, nombre, precio
- **Cantidad:** Editable (+/-), máx 3
- **Eliminar:** Icono 🗑️
- **Descuentos:** Campo código + aplicar
- **Totales:** Subtotal, envío, IVA, total

### 5.7 CheckoutSlide (Bottom Sheet)
- **Apertura:** Slide desde abajo
- **Secciones:** Resumen matriz, datos envío, método envío, método pago, total
- **Envío:** Nombre, dirección, ciudad, CP
- **Métodos envío:** Estándar (3-5 días), Exprés (24-48h)
- **Métodos pago:** Tarjeta, PayPal
- **Validación:** Todos los campos obligatorios
- **Confirmación:** Animación especial → Redirect /success

### 5.8 AuthModals
- **Registro:** Nombre, email, contraseña, confirmar, verificación email
- **Login:** Email, contraseña, "Recordarme", "¿Olvidaste tu contraseña?"
- **Recuperación:** Email → link (expira 24h)

### 5.9 ProfilePage
- **Datos:** Nombre, email, fecha registro
- **Historial pedidos:** Fecha, estado, total
- **Mis matrices:** Listado, cargar, editar, eliminar (máx 10)
- **Direcciones:** CRUD (máx 5), predeterminada

### 5.10 DropCountdown
- **Ubicación:** Hero
- **Formación:** DD:HH:MM:SS
- **Al llegar a 0:** "DROP ACTIVO AHORA"

### 5.11 MaridajePage
- **URL:** `/maridaje/:cubeIds` (post-compra)
- **Contenido:** Preview matriz, descripción pairing, audio player
- **Audio:** Play/pause, progreso, descargar

---

## 6. Estados de UI

| Componente | Estado | Visual |
|------------|--------|--------|
| **Cubo** | Default | Color del sabor, rotando |
| | Hover | scale 1.05, shadow aumenta |
| | Selected | Glow del color del sabor |
| | In Drop | Badge "NEW" animado |
| | In Cart | Indicador check corner |
| **Navbar** | Default | Transparente |
| | Scrolled | Background solid + blur |
| **SlidePanel** | Closed | Hidden |
| | Opening | Slide 100%→0, overlay 0→0.8 |
| | Open | Visible, cubo rotando |
| | Closing | Slide 0→100%, overlay 0.8→0 |
| **Checkout** | Default | Bottom sheet hidden |
| | Open | Slide desde abajo |

---

## 7. Validaciones

| Campo | Regla |
|-------|-------|
| Email | Formato válido, único en BD |
| Contraseña | Mínimo 8 caracteres |
| Nombre | 2-50 caracteres |
| CP | Formato español (5 dígitos) |
| Cantidad carrito | 1-3 por item |
| Matriz | Exactamente 9 elementos |
| Código descuento | Existe y no expirado |
| Matrices guardadas | Máximo 10 por usuario |
| Direcciones | Máximo 5 por usuario |

---

## 8. Flujo de Compra

```
1. Usuario ve mosaico
2. Click cubo → Slide detalle (explora, añade a matriz)
3. Click "Confirmar matriz" → abre carrito
4. En carrito: editable, aplica descuento
5. Click "Ir a pagar" → Checkout slide (bottom sheet)
6. Fill shipping → Select método envío → Select pago
7. Click "Confirmar y pagar"
8. Validación → Animación → Redirect /success
9. Email confirmación enviado
10. QR en packaging → Página maridaje
```

---

## 9. Rutas

| Ruta | Componente | Descripción |
|------|------------|-------------|
| `/` | HomePage | SPA completa |
| `/profile` | ProfilePage | Perfil usuario |
| `/maridaje/:ids` | MaridajePage | Audio post-compra |
| `/success` | SuccessPage | Confirmación pedido |

---

## 10. Animaciones y Transiciones

| Elemento | Animación | Duración |
|----------|-----------|----------|
| Slide panel | translateX 100% → 0 | 500ms ease |
| Overlay | opacity 0 → 1 | 300ms ease |
| Cubo hover | scale 1 → 1.05 | 300ms ease |
| Cubo rotate | rotateY 360deg | 20s linear infinite |
| Checkout bottom sheet | translateY 100% → 0 | 500ms ease |
| Glow effect | box-shadow pulse | 400ms |
| Countdown | Flip animation | 1s |

---

## 11. Glosario

| Término | Definición |
|---------|------------|
| **Matrix One** | Kit de 9 cubos 3×3 |
| **Drop** | Lanzamiento semanal de producto |
| **Sintonía de Sabor** | Audio de maridaje por QR |
| **BIT-0X** | Código de serialización en packaging |
| **Tech-Folder** | Packaging exterior |
| **Assembly Grid** | Bandeja 3×3 que aloja los cubos |
| **Happy Path** | Flujo de éxito (sin errores) |
| **Sad Path** | Flujo de error |

---

## 12. Integraciones Externas

| Servicio | Propósito |
|----------|-----------|
| Stripe/PayPal | Procesamiento de pago |
| SendGrid/Mailgun | Emails transaccionales |
| AWS S3 | Almacenamiento archivos audio |
| QR Generator | Generar QR para packaging |

---

## 13. Breakpoints

```css
/* Mobile first */
@media (max-width: 767px) {
  /* Carrusel horizontal, hamburger menu */
}

/* Tablet */
@media (min-width: 768px) and (max-width: 1024px) {
  /* Grid 3×3, navbar horizontal */
}

/* Desktop */
@media (min-width: 1025px) {
  /* Grid 3×3, navbar expandida */
}
```

---

## 14. Checklist de Implementación

### FASE 1: Estructura y Navbar
- [ ] Setup proyecto (React/Vue/Svelte + Tailwind)
- [ ] Router para SPA
- [ ] Navbar sticky
- [ ] Estilos base (variables CSS)
- [ ] Responsive breakpoints

### FASE 2: Hero y Mosaico
- [ ] Hero section con título y CTA
- [ ] Countdown component
- [ ] Cubo 3D básico (Three.js/CSS 3D)
- [ ] MosaicGrid con 9 cubos
- [ ] Rotación continua
- [ ] Hover effects
- [ ] Click handler
- [ ] Scroll shuffle effect

### FASE 3: Slide Panel
- [ ] Overlay + Slide desde derecha
- [ ] Contenido del slide
- [ ] Cubo 3D en slide
- [ ] Navegación entre cubos
- [ ] Cerrar: overlay + X + swipe down

### FASE 4: Matrix Builder
- [ ] Grid 3×3 interactivo
- [ ] Selector de sabores
- [ ] Barra "3 max"
- [ ] Validación 9 elementos

### FASE 5: Carrito y Checkout
- [ ] CartPanel
- [ ] Editar cantidad
- [ ] Aplicar descuento
- [ ] Checkout bottom sheet
- [ ] Formulario envío
- [ ] Selección método envío
- [ ] Selección método pago
- [ ] Confirmación + animación

### FASE 6: Auth
- [ ] RegisterModal
- [ ] LoginModal
- [ ] ForgotPassword flow
- [ ] Email verificación

### FASE 7: Perfil
- [ ] ProfilePage
- [ ] Historial pedidos
- [ ] Matrices guardadas
- [ ] CRUD direcciones

### FASE 8: Drops
- [ ] Countdown component
- [ ] Badge NEW
- [ ] Sistema reserva

### FASE 9: Maridaje
- [ ] Audio player
- [ ] Página maridaje

### FASE 10: Email y Notificaciones
- [ ] Email confirmación pedido
- [ ] Email verificación registro
- [ ] Email recuperación contraseña

---

## 15. Tech Stack Recomendado

| Capa | Tecnología |
|------|------------|
| **Frontend** | React/Vue/Svelte + Tailwind CSS |
| **3D** | Three.js o CSS 3D transforms |
| **State** | Zustand / Pinia / Context API |
| **Routing** | React Router / Vue Router |
| **Backend** | Node.js + Express o Next.js |
| **Database** | PostgreSQL + Prisma |
| **Auth** | JWT + bcrypt |
| **Email** | SendGrid / Nodemailer |
| **Payments** | Stripe / PayPal API |
| **Hosting** | Vercel / Netlify / Railway |

---

## 16. Métricas de Éxito

- Tiempo de carga < 3s
- Animaciones a 60fps
- Responsive en < 100ms
- Checkout completion rate > 70%
- Drop sellout rate objetivo: 100%

---

## 17. Storytelling — La Historia de Leire

### El Origen

**Leire** tenía 14 años cuando creó Qubic. No era popular. No tenía seguidores. Solo era una chica que amaba la física cuántica y se sentaba sola resolviendo ecuaciones mientras otros hablaban de cosas que ella no entendía.

### El Momento

Una tarde, templando chocolate mal una y otra vez, Leire vio algo bajo el microscopio: la estructura cristalina del cacao formaba patrones que recordaban a orbitales atómicos. **El chocolate era física cuántica hecha deliciosa.**

### El Video

En 60 segundos, explicó por qué el chocolate brilla. 5 millones de vistas en 48 horas.

### El Mensaje

*"Si amas algo, aprende todo sobre ello, y compártelo con el mundo."*

— Leire, 14 años, fundadora de Qubic

### Cómo se refleja en la web

| Elemento | Implementación |
|----------|----------------|
| **Navbar** | Badge "Leire, 14 años" + link "Nosotros" |
| **Hero** | Tagline: "El chocolate es física cuántica deliciosa" |
| **Footer** | Breve historia + "Leer más" |

---

*Documento consolidado: 2026-05-10*
*Total specs: 24*
*Validación: 20/20 asunciones procesadas*
*Proyecto: QUBIC — Cacao Lab*
*Fundadora: Leire, 14 años*
*Repositorio specs: `specs/SPEC_01.md` - `SPEC_24.md`*