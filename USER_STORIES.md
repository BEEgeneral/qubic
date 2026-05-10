# QUBIC - Historias de Usuario

## Metodología: Kanban
## Tipo: SPA E-commerce (Single Page Application)
## Estilo: Organic/Natural

---

## EP-01: Navegación y Estructura

### HIST-01: Visualizar página principal
**Como** Visitante
**Quiero** Ver la página principal
**Para** Conocer Qubic y navegar por el producto

**Criterios de Aceptación:**
- [ ] Una sola pantalla (SPA) con scroll vertical
- [ ] Menú sticky horizontal en la parte superior
- [ ] Hero section con título, subtítulo y CTA
- [ ] Mosaico visual de 9 cubos de chocolate
- [ ] Footer minimal con redes sociales y newsletter
- [ ] Scroll suave entre secciones

**Tasks:**
- [ ] Implementar estructura HTML semántica
- [ ] Configurar router para SPA
- [ ] Estilar menú sticky
- [ ] Crear hero section

---

### HIST-02: Navegar por el menú
**Como** Visitante
**Quiero** Usar el menú de navegación
**Para** Acceder a diferentes secciones

**Criterios de Aceptación:**
- [ ] Logo Qubic a la izquierda
- [ ] Links: Inicio, Catálogo, Personaliza, Drops, Nosotros
- [ ] Icono carrito a la derecha con badge de cantidad
- [ ] Menú collapsible en mobile
- [ ] Scroll smooth al hacer click en link

**Tasks:**
- [ ] Crear componente Navbar
- [ ] Implementar scroll suave
- [ ] Responsive mobile menu

---

## EP-02: Mosaico de Cubos (Catálogo Visual)

### HIST-03: Visualizar mosaico de cubos
**Como** Visitante
**Quiero** Ver el mosaico de cubos de chocolate
**Para** Descubrir los productos disponibles

**Criterios de Aceptación:**
- [ ] Grid visual 3×3 (matriz de 9 cubos)
- [ ] Cada cubo muestra sabor y símbolo
- [ ] Scroll intercambia posiciones de cubos (efecto shuffle)
- [ ] Hover/tap en cubo → efecto visual sutil
- [ ] Cubos agotados marcados visualmente
- [ ] Responsive: 3×3 desktop, stack en mobile

**Tasks:**
- [ ] Crear componente MosaicGrid
- [ ] Implementar efecto de intercambio por scroll
- [ ] Animaciones de hover
- [ ] Responsive layout

---

### HIST-04: Filtrar cubos por sabor
**Como** Visitante
**Quiero** Filtrar el mosaico por sabor
**Para** Encontrar rápidamente lo que busco

**Criterios de Aceptación:**
- [ ] Filtros visibles cerca del mosaico
- [ ] Opciones: Todos, [Au] Aurum, [Mt] Mentholium, [Ct] Citrium, [Dy] Duality, [Fc] Fumum, [Ar] Acidum
- [ ] Click en filtro → mosaico muestra solo matching
- [ ] Indicador visual de filtro activo
- [ ] Botón "Ver todos" para reset

**Tasks:**
- [ ] Crear componente FlavorFilter
- [ ] Lógica de filtrado
- [ ] Estados visuales de filtro

---

## EP-03: Detalle de Cubo (Slide Lateral)

### HIST-05: Abrir detalle de cubo
**Como** Visitante/Usuario
**Quiero** Ver el detalle de un cubo
**Para** Conocer su historia, sabor e ingredientes

**Criterios de Aceptación:**
- [ ] Click en cubo → slide lateral desde derecha
- [ ] Overlay oscuro de fondo
- [ ] Cubo 3D girando lentamente (~10s por rotación)
- [ ] Contenido: nombre, símbolo, descripción, historia, origen
- [ ] Lista de ingredientes
- [ ] Efectos sensoriales del sabor
- [ ] Botón "Añadir a mi matriz"
- [ ] Cerrar con X o click fuera
- [ ] Compatible con touch en mobile

**Tasks:**
- [ ] Crear componente SlidePanel
- [ ] Implementar cubo 3D (Three.js/CSS 3D)
- [ ] Animación de entrada/salida
- [ ] Overlay backdrop
- [ ] Touch support

---

### HIST-06: Navegar entre cubos desde el slide
**Como** Usuario
**Quiero** Ver siguiente/anterior cubo sin cerrar
**Para** Explorar más sabores rápidamente

**Criterios de Aceptación:**
- [ ] Flechas "Anterior" / "Siguiente"
- [ ] Botón "Probar siguiente"
- [ ] Navegación cíclica
- [ ] Cubo actual se actualiza en slide

**Tasks:**
- [ ] Implementar navegación en slide
- [ ] Actualizar contenido dinámicamente

---

## EP-04: Configurador de Matriz

### HIST-07: Crear matriz personalizada
**Como** Usuario
**Quiero** Seleccionar 9 cubos para mi kit
**Para** Armar mi matriz 3×3 personalizada

**Criterios de Aceptación:**
- [ ] Grid 3×3 visual interactivo
- [ ] Click en celda → abrir selector de sabores
- [ ] Selector muestra los 6 tipos disponibles
- [ ] Celda cambia al sabor seleccionado
- [ ] Vista previa de matriz completa
- [ ] Validación: exactamente 9 seleccionados
- [ ] Botón "Confirmar matriz"

**Tasks:**
- [ ] Crear componente MatrixBuilder
- [ ] Grid interactivo 3×3
- [ ] Selector de sabor por celda
- [ ] Validación y feedback

---

### HIST-08: Guardar matriz
**Como** Usuario autenticado
**Quiero** Guardar mi configuración de matriz
**Para** Comprarla más tarde

**Criterios de Aceptación:**
- [ ] Botón "Guardar matriz"
- [ ] Modal para nombrar la configuración
- [ ] Guardado en perfil → "Mis matrices"
- [ ] Máximo 10 matrices guardadas
- [ ] Confirmación visual al guardar

**Tasks:**
- [ ] Endpoint para guardar matriz
- [ ] Modal de nombre
- [ ] Límite de 10 matrices

---

### HIST-09: Cargar matriz guardada
**Como** Usuario autenticado
**Quiero** Cargar una matriz guardada
**Para** Modificarla o comprarla

**Criterios de Aceptación:**
- [ ] Acceso desde perfil → "Mis matrices"
- [ ] Listado con nombre y fecha
- [ ] Click → carga en configurador
- [ ] Opción eliminar (con confirmación)
- [ ] Editar nombre de matriz

**Tasks:**
- [ ] Listado de matrices guardadas
- [ ] Función cargar/eliminar

---

## EP-05: Carrito

### HIST-10: Añadir matriz al carrito
**Como** Usuario
**Quiero** Añadir mi matriz personalizada al carrito
**Para** Proceder al pago

**Criterios de Aceptación:**
- [ ] Botón "Añadir al carrito" tras confirmar matriz
- [ ] Toast/notification de confirmación
- [ ] Badge carrito se actualiza
- [ ] Sonido/animación sutil
- [ ] Validación: matriz completa

**Tasks:**
- [ ] Store de carrito
- [ ] Toast notifications
- [ ] Badge counter

---

### HIST-11: Ver y gestionar carrito
**Como** Usuario
**Quiero** Ver mi carrito
**Para** Revisar productos antes de pagar

**Criterios de Aceptación:**
- [ ] Panel lateral o modal de carrito
- [ ] Lista: matriz personalizada (preview 3×3), nombre, precio
- [ ] Cantidad editable (+/-)
- [ ] Eliminar producto
- [ ] Subtotal y total
- [ ] Botón "Ir a pagar"
- [ ] Botón "Seguir comprando"

**Tasks:**
- [ ] Componente Cart
- [ ] Editar cantidad
- [ ] Eliminar items
- [ ] Calcular totales

---

### HIST-12: Aplicar descuento
**Como** Usuario
**Quiero** Aplicar un código de descuento
**Para** Obtener reducción en el precio

**Criterios de Aceptación:**
- [ ] Campo para código
- [ ] Botón "Aplicar"
- [ ] Éxito: muestra descuento aplicado
- [ ] Error: código inválido o expirado
- [ ] Un código por pedido

**Tasks:**
- [ ] Validación de código
- [ ] Mostrar descuento
- [ ] Feedback de error

---

## EP-06: Checkout (Slide de Pago)

### HIST-13: Iniciar proceso de pago
**Como** Usuario
**Quiero** Proceder al checkout
**Para** Completar mi compra

**Criterios de Aceptación:**
- [ ] Slide de pago aparece desde abajo (bottom sheet)
- [ ] Resumen visual de matriz 3×3 seleccionada
- [ ] Selector de cantidad (1-3 kits)
- [ ] Campos de envío: nombre, dirección, ciudad, código postal
- [ ] Selector método envío: Estándar (3-5 días) / Exprés (24-48h)
- [ ] Selector método pago: Tarjeta / PayPal
- [ ] Desglose: Subtotal + Envío + IVA = Total
- [ ] Botón "Confirmar y pagar"
- [ ] Cerrar con X (vuelve al configurador)

**Tasks:**
- [ ] Componente CheckoutSlide
- [ ] Formulario de envío
- [ ] Selectores de envío/pago
- [ ] Resumen visual

---

### HIST-14: Validar y confirmar pedido
**Como** Usuario
**Quiero** Confirmar mi pedido
**Para** Recibir mi kit en casa

**Criterios de Aceptación:**
- [ ] Validación de campos obligatorios
- [ ] Validación de método de pago
- [ ] Animación especial al confirmar
- [ ] Redirección a página de éxito
- [ ] Email de confirmación enviado
- [ ] Número de pedido visible

**Tasks:**
- [ ] Validación de formulario
- [ ] Integración pasarela pago
- [ ] Email confirmación
- [ ] Página de éxito

---

## EP-07: Autenticación

### HIST-15: Registro de usuario
**Como** Visitante
**Quiero** Registrarme
**Para** Guardar matrices y hacer pedidos

**Criterios de Aceptación:**
- [ ] Modal de registro
- [ ] Campos: nombre, email, contraseña, confirmar contraseña
- [ ] Validación: email válido, contraseña mínimo 8 caracteres
- [ ] Email de verificación tras registro
- [ ] Redirección a homepage tras verificación

**Tasks:**
- [ ] Componente RegisterModal
- [ ] Validación frontend
- [ ] Endpoint registro + verificación email

---

### HIST-16: Inicio de sesión
**Como** Usuario registrado
**Quiero** Iniciar sesión
**Para** Acceder a mi cuenta

**Criterios de Aceptación:**
- [ ] Modal de login
- [ ] Campos: email, contraseña
- [ ] Checkbox "Recordarme"
- [ ] Link "¿Olvidaste tu contraseña?"
- [ ] Error: credenciales inválidas
- [ ] Éxito: cierra modal, actualiza navbar

**Tasks:**
- [ ] Componente LoginModal
- [ ] Validación
- [ ] Remember me
- [ ] forgot password flow

---

### HIST-17: Recuperación de contraseña
**Como** Usuario
**Quiero** Recuperar mi contraseña
**Para** Volver a acceder a mi cuenta

**Criterios de Aceptación:**
- [ ] Campo email para enviar link
- [ ] Email con link de recuperación (expira 24h)
- [ ] Página para nueva contraseña
- [ ] Confirmación de cambio exitoso

**Tasks:**
- [ ] Endpoint forgot password
- [ ] Email con link
- [ ] Página reset password

---

## EP-08: Perfil de Usuario

### HIST-18: Ver mi perfil
**Como** Usuario autenticado
**Quiero** Ver mi perfil
**Para** Gestionar mis datos y configuraciones

**Criterios de Aceptación:**
- [ ] Nombre, email, fecha de registro
- [ ] Historial de pedidos (fecha, estado, total)
- [ ] Mis matrices guardadas
- [ ] Mis direcciones
- [ ] Botón "Cerrar sesión"

**Tasks:**
- [ ] Componente Profile
- [ ] Listar historial pedidos
- [ ] Listar matrices guardadas

---

### HIST-19: Editar perfil
**Como** Usuario
**Quiero** Editar mis datos
**Para** Mantener información actualizada

**Criterios de Aceptación:**
- [ ] Editar nombre
- [ ] Editar email (requiere verificación)
- [ ] Cambiar contraseña
- [ ] Botón "Guardar cambios"

**Tasks:**
- [ ] Formulario editar perfil
- [ ] Cambio de contraseña
- [ ] Verificación email

---

### HIST-20: Gestionar direcciones
**Como** Usuario
**Quiero** Gestionar mis direcciones
**Para** Usarlas en pedidos

**Criterios de Aceptación:**
- [ ] Listado de direcciones
- [ ] Añadir nueva dirección
- [ ] Editar dirección
- [ ] Eliminar dirección
- [ ] Marcar como predeterminada
- [ ] Máximo 5 direcciones

**Tasks:**
- [ ] CRUD direcciones
- [ ] Predeterminada
- [ ] Validación formato

---

## EP-09: Drops Semanales

### HIST-21: Ver próximo drop
**Como** Usuario
**Quiero** Saber cuándo es el próximo drop
**Para** No perderme el lanzamiento

**Criterios de Aceptación:**
- [ ] Banner en hero con fecha y hora
- [ ] Cuenta regresiva visible
- [ ] Información del producto drop
- [ ] Newsletter signup para notificaciones

**Tasks:**
- [ ] Componente DropCountdown
- [ ] Banner hero
- [ ] Email signup

---

### HIST-22: Reservar en drop
**Como** Usuario
**Quiero** Reservar en un drop
**Para** Asegurarme producto limitado

**Criterios de Aceptación:**
- [ ] Producto drop visible antes del lanzamiento
- [ ] Botón "Reservar"
- [ ] Límite: 1 por usuario
- [ ] Confirmación de reserva
- [ ] Pago al confirmar disponibilidad del drop

**Tasks:**
- [ ] Sistema de reserva
- [ ] Límite por usuario
- [ ] Notificación cuando drop inicia

---

## EP-10: Maridaje Sonoro (QR)

### HIST-23: Acceder a maridaje sonoro
**Como** Usuario
**Quiero** Escanear QR del producto
**Para** Escuchar la sintonía de sabor

**Criterios de Aceptación:**
- [ ] QR visible en packaging físico
- [ ] Link abre página web de maridaje
- [ ] Audio player con play/pause
- [ ] Descripción del maridaje
- [ ] Opción de descargar audio

**Tasks:**
- [ ] Página de maridaje
- [ ] Audio player
- [ ] Descripción del pairing

---

## EP-11: Página de Éxito

### HIST-24: Ver confirmación de pedido
**Como** Usuario
**Quiero** Ver confirmación de mi pedido
**Para** Tener certeza de que se processó

**Criterios de Aceptación:**
- [ ] Página感谢 con número de pedido
- [ ] Resumen de productos comprados
- [ ] Dirección de envío
- [ ] Método de envío seleccionado
- [ ] Total pagado
- [ ] Email enviado con detalles
- [ ] CTA "Seguir comprando"

**Tasks:**
- [ ] Página Success
- [ ] Mostrar detalles pedido
- [ ] Email confirmación

---

## Estados Kanban

| To Do | In Progress | Review | Done |
|-------|-------------|--------|------|
| HIST-01 | | | |
| HIST-02 | | | |
| HIST-03 | | | |
| HIST-04 | | | |
| HIST-05 | | | |
| HIST-06 | | | |
| HIST-07 | | | |
| HIST-08 | | | |
| HIST-09 | | | |
| HIST-10 | | | |
| HIST-11 | | | |
| HIST-12 | | | |
| HIST-13 | | | |
| HIST-14 | | | |
| HIST-15 | | | |
| HIST-16 | | | |
| HIST-17 | | | |
| HIST-18 | | | |
| HIST-19 | | | |
| HIST-20 | | | |
| HIST-21 | | | |
| HIST-22 | | | |
| HIST-23 | | | |
| HIST-24 | | | |

---

*Documento creado: 2026-05-09*
*Metodología: Kanban*
*Total historias: 24*
