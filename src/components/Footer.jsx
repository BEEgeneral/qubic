import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Footer() {
  const footerRef = useRef(null)

  useEffect(() => {
    if (!footerRef.current) return

    gsap.from(footerRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 90%'
      }
    })
  }, [])

  return (
    <footer ref={footerRef} className="bg-carbon-black border-t border-off-white/10 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Historia de Leire */}
        <div className="text-center mb-12 max-w-2xl mx-auto">
          <h3 className="text-xl font-bold mb-4">Leire, 14 años</h3>
          <p className="text-off-white/60 text-sm leading-relaxed mb-4">
            Qubic nació de la curiosidad de una adolescente que amaba la física cuántica
            y decidió explicarla a través del chocolate. Todo empezó con un video de 60 segundos
            que cambió todo.
          </p>
          <a
            href="#historia"
            className="text-aurum-gold text-sm hover:underline"
          >
            Leer la historia completa →
          </a>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-12">
          <a href="#" className="w-10 h-10 rounded-full bg-off-white/10 flex items-center justify-center hover:bg-aurum-gold hover:text-carbon-black transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-off-white/10 flex items-center justify-center hover:bg-aurum-gold hover:text-carbon-black transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="#" className="w-10 h-10 rounded-full bg-off-white/10 flex items-center justify-center hover:bg-aurum-gold hover:text-carbon-black transition-colors">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8h-3v4h3v12h5v-12h3l1-4h-4V8c0-.55-.45-1-1-1H9v-4z"/>
            </svg>
          </a>
        </div>

        {/* Newsletter */}
        <div className="max-w-md mx-auto mb-12">
          <p className="text-center text-sm text-off-white/50 mb-4">
            Suscríbete para recibir notificación de drops
          </p>
          <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-off-white/10 border border-off-white/20 text-off-white placeholder-off-white/30 focus:outline-none focus:border-aurum-gold"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-aurum-gold text-carbon-black rounded-lg font-bold hover:scale-105 transition-transform"
            >
              Suscribirme
            </button>
          </form>
        </div>

        {/* Copyright */}
        <div className="text-center text-off-white/30 text-sm">
          <p>© 2026 Qubic — Leire, 14 años</p>
          <p className="mt-2">Hack the Flavor. Assemble your Pleasure.</p>
        </div>
      </div>
    </footer>
  )
}