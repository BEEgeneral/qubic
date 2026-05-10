import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function RegisterModal({ isOpen, onClose, onSwitchToLogin }) {
  const modalRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      gsap.to(modalRef.current, { scale: 1, opacity: 1, duration: 0.3, ease: 'power3.out' })
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 })
    } else {
      gsap.to(modalRef.current, { scale: 0.8, opacity: 0, duration: 0.2 })
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.2 })
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/80 z-50 opacity-0"
        onClick={onClose}
      />

      <div
        ref={modalRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-carbon-black rounded-2xl z-50 p-8 opacity-0"
        style={{ transform: 'translate(-50%, -50%) scale(0.8)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-off-white/10 rounded-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Crear cuenta</h2>

        <form className="space-y-4">
          <div>
            <input
              type="text"
              placeholder="Nombre"
              required
              className="w-full px-4 py-3 rounded-lg bg-off-white/10 border border-off-white/20 focus:border-aurum-gold focus:outline-none"
            />
          </div>
          <div>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-off-white/10 border border-off-white/20 focus:border-aurum-gold focus:outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña (min 8 caracteres)"
              required
              minLength={8}
              className="w-full px-4 py-3 rounded-lg bg-off-white/10 border border-off-white/20 focus:border-aurum-gold focus:outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Confirmar contraseña"
              required
              className="w-full px-4 py-3 rounded-lg bg-off-white/10 border border-off-white/20 focus:border-aurum-gold focus:outline-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-neon-fluor text-carbon-black py-3 rounded-lg font-bold hover:scale-105 transition-transform"
          >
            Crear cuenta
          </button>
        </form>

        <p className="text-center text-off-white/50 text-sm mt-6">
          ¿Ya tienes cuenta?{' '}
          <button onClick={onSwitchToLogin} className="text-aurum-gold hover:underline">
            Inicia sesión
          </button>
        </p>
      </div>
    </>
  )
}

export function LoginModal({ isOpen, onClose, onSwitchToRegister }) {
  const modalRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      gsap.to(modalRef.current, { scale: 1, opacity: 1, duration: 0.3, ease: 'power3.out' })
      gsap.to(overlayRef.current, { opacity: 1, duration: 0.3 })
    } else {
      gsap.to(modalRef.current, { scale: 0.8, opacity: 0, duration: 0.2 })
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.2 })
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black/80 z-50 opacity-0"
        onClick={onClose}
      />

      <div
        ref={modalRef}
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-carbon-black rounded-2xl z-50 p-8 opacity-0"
        style={{ transform: 'translate(-50%, -50%) scale(0.8)' }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-off-white/10 rounded-lg"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>

        <form className="space-y-4">
          <div>
            <input
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 rounded-lg bg-off-white/10 border border-off-white/20 focus:border-aurum-gold focus:outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              required
              className="w-full px-4 py-3 rounded-lg bg-off-white/10 border border-off-white/20 focus:border-aurum-gold focus:outline-none"
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="accent-aurum-gold" />
              <span className="text-off-white/50">Recordarme</span>
            </label>
            <button type="button" className="text-aurum-gold hover:underline">
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-neon-fluor text-carbon-black py-3 rounded-lg font-bold hover:scale-105 transition-transform"
          >
            Iniciar sesión
          </button>
        </form>

        <p className="text-center text-off-white/50 text-sm mt-6">
          ¿No tienes cuenta?{' '}
          <button onClick={onSwitchToRegister} className="text-aurum-gold hover:underline">
            Regístrate
          </button>
        </p>
      </div>
    </>
  )
}