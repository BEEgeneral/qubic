import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

export default function CheckoutSlide({ items, isOpen, onClose, onSuccess }) {
  const slideRef = useRef(null)
  const overlayRef = useRef(null)

  const [formData, setFormData] = useState({
    name: '', address: '', city: '', cp: '', shipping: 'standard', payment: 'card'
  })
  const [isConfirmed, setIsConfirmed] = useState(false)

  useEffect(() => {
    if (isOpen) {
      gsap.to(slideRef.current, { y: 0, duration: 0.5, ease: 'power3.out' })
      gsap.to(overlayRef.current, { opacity: 0.8, duration: 0.3 })
    } else {
      gsap.to(slideRef.current, { y: '100%', duration: 0.4, ease: 'power2.in' })
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 })
      setIsConfirmed(false)
    }
  }, [isOpen])

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const shippingCost = formData.shipping === 'express' ? 9.90 : 5.90
  const iva = (subtotal + shippingCost) * 0.21
  const total = subtotal + shippingCost + iva

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsConfirmed(true)

    gsap.to('.checkout-content', { opacity: 0, duration: 0.3 })

    setTimeout(() => {
      onSuccess()
    }, 2000)
  }

  if (!isOpen) return null

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black z-50 opacity-0"
        onClick={onClose}
      />

      <div
        ref={slideRef}
        className="fixed bottom-0 left-0 right-0 md:left-auto md:right-0 md:w-[500px] h-[85vh] bg-carbon-black z-50 rounded-t-3xl md:rounded-t-none overflow-y-auto"
        style={{ transform: 'translateY(100%)' }}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold">Checkout</h2>
            <button onClick={onClose} className="p-2 hover:bg-off-white/10 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {!isConfirmed ? (
            <form onSubmit={handleSubmit} className="checkout-content space-y-6">
              <div className="bg-off-white/5 rounded-xl p-4">
                <h3 className="font-semibold mb-3">Tu Matrix</h3>
                <div className="grid grid-cols-3 gap-2 mb-3">
                  {items[0]?.matrix.map((cell, i) => (
                    <div key={i} className="aspect-square bg-aurum-gold/20 rounded" />
                  ))}
                </div>
                <div className="text-sm text-off-white/50">
                  Cantidad: {items[0]?.quantity || 0} kit(s)
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Datos de envío</h3>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-off-white/10 border border-off-white/20 focus:border-aurum-gold focus:outline-none"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                  <input
                    type="text"
                    placeholder="Dirección"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-off-white/10 border border-off-white/20 focus:border-aurum-gold focus:outline-none"
                    value={formData.address}
                    onChange={e => setFormData({...formData, address: e.target.value})}
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Ciudad"
                      required
                      className="px-4 py-3 rounded-lg bg-off-white/10 border border-off-white/20 focus:border-aurum-gold focus:outline-none"
                      value={formData.city}
                      onChange={e => setFormData({...formData, city: e.target.value})}
                    />
                    <input
                      type="text"
                      placeholder="CP"
                      required
                      className="px-4 py-3 rounded-lg bg-off-white/10 border border-off-white/20 focus:border-aurum-gold focus:outline-none"
                      value={formData.cp}
                      onChange={e => setFormData({...formData, cp: e.target.value})}
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Método de envío</h3>
                <div className="space-y-2">
                  <label className="flex items-center gap-3 p-3 bg-off-white/5 rounded-lg cursor-pointer hover:bg-off-white/10">
                    <input
                      type="radio"
                      name="shipping"
                      value="standard"
                      checked={formData.shipping === 'standard'}
                      onChange={() => setFormData({...formData, shipping: 'standard'})}
                      className="accent-aurum-gold"
                    />
                    <span>Estándar (3-5 días) — €5.90</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 bg-off-white/5 rounded-lg cursor-pointer hover:bg-off-white/10">
                    <input
                      type="radio"
                      name="shipping"
                      value="express"
                      checked={formData.shipping === 'express'}
                      onChange={() => setFormData({...formData, shipping: 'express'})}
                      className="accent-aurum-gold"
                    />
                    <span>Exprés (24-48h) — €9.90</span>
                  </label>
                </div>
              </div>

              <div>
                <h3 className="font-semibold mb-3">Método de pago</h3>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, payment: 'card'})}
                    className={`p-4 rounded-lg border-2 transition-colors ${formData.payment === 'card' ? 'border-aurum-gold bg-aurum-gold/10' : 'border-off-white/20 hover:border-off-white/40'}`}
                  >
                    💳 Tarjeta
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({...formData, payment: 'paypal'})}
                    className={`p-4 rounded-lg border-2 transition-colors ${formData.payment === 'paypal' ? 'border-aurum-gold bg-aurum-gold/10' : 'border-off-white/20 hover:border-off-white/40'}`}
                  >
                    🅿️ PayPal
                  </button>
                </div>
              </div>

              <div className="border-t border-off-white/10 pt-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-off-white/50">Subtotal</span>
                    <span>€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-off-white/50">Envío</span>
                    <span>€{shippingCost.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-off-white/50">IVA (21%)</span>
                    <span>€{iva.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg font-bold pt-2 border-t border-off-white/10">
                    <span>Total</span>
                    <span className="text-aurum-gold">€{total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-neon-fluor text-carbon-black py-4 rounded-lg font-bold hover:scale-105 transition-transform"
              >
                Confirmar y pagar
              </button>
            </form>
          ) : (
            <div className="checkout-content flex flex-col items-center justify-center py-20">
              <div className="w-20 h-20 bg-aurum-gold rounded-full flex items-center justify-center mb-6">
                <span className="text-4xl">✓</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">¡Pedido Confirmado!</h3>
              <p className="text-off-white/50">Procesando tu order...</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}