import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CartPanel({ items, isOpen, onClose, onUpdateQuantity, onRemove, onCheckout }) {
  const panelRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      gsap.to(panelRef.current, { x: 0, duration: 0.5, ease: 'power3.out' })
      gsap.to(overlayRef.current, { opacity: 0.8, duration: 0.3 })
    } else {
      gsap.to(panelRef.current, { x: '100%', duration: 0.4, ease: 'power2.in' })
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 })
    }
  }, [isOpen])

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black z-40 opacity-0"
        onClick={onClose}
      />

      <div
        ref={panelRef}
        className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-carbon-black z-50 overflow-y-auto"
        style={{ transform: 'translateX(100%)' }}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Mi Carrito</h2>
            <button onClick={onClose} className="p-2 hover:bg-off-white/10 rounded-lg">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-off-white/50">Tu carrito está vacío</p>
              <button
                onClick={onClose}
                className="mt-4 text-aurum-gold hover:underline"
              >
                Seguir comprando
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {items.map(item => (
                  <div key={item.id} className="bg-off-white/5 rounded-xl p-4">
                    <div className="flex gap-3">
                      <div className="w-20 h-20 grid grid-cols-3 gap-1 bg-carbon-black rounded-lg p-2">
                        {item.matrix.map((cell, i) => (
                          <div
                            key={i}
                            className="bg-aurum-gold/30 rounded"
                          />
                        ))}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-aurum-gold">€{item.price.toFixed(2)}</p>
                      </div>
                      <button
                        onClick={() => onRemove(item.id)}
                        className="text-off-white/30 hover:text-red-500"
                      >
                        🗑️
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      <span className="text-sm text-off-white/50">Cantidad</span>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-full bg-off-white/10 flex items-center justify-center hover:bg-off-white/20"
                        >
                          -
                        </button>
                        <span className="w-8 text-center">{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          disabled={item.quantity >= 3}
                          className="w-8 h-8 rounded-full bg-off-white/10 flex items-center justify-center hover:bg-off-white/20 disabled:opacity-30"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-off-white/10 pt-4">
                <div className="flex justify-between text-lg mb-6">
                  <span>Subtotal</span>
                  <span className="font-bold">€{subtotal.toFixed(2)}</span>
                </div>

                <button
                  onClick={onCheckout}
                  className="w-full bg-neon-fluor text-carbon-black py-4 rounded-lg font-bold hover:scale-105 transition-transform"
                >
                  Ir a pagar
                </button>

                <button
                  onClick={onClose}
                  className="w-full mt-3 py-3 text-center text-off-white/50 hover:text-off-white"
                >
                  Seguir comprando
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}