import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function SlidePanel({ flavor, isOpen, onClose, onNext, onPrev, onAddToMatrix }) {
  const panelRef = useRef(null)
  const overlayRef = useRef(null)
  const cubeRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      gsap.to(panelRef.current, { x: 0, duration: 0.5, ease: 'power3.out' })
      gsap.to(overlayRef.current, { opacity: 0.8, duration: 0.3 })

      gsap.to(cubeRef.current, {
        rotateY: 360,
        duration: 10,
        repeat: -1,
        ease: 'none'
      })
    } else {
      gsap.to(panelRef.current, { x: '100%', duration: 0.4, ease: 'power2.in' })
      gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 })
    }
  }, [isOpen])

  const handleClose = () => {
    gsap.to(panelRef.current, { x: '100%', duration: 0.4, ease: 'power2.in' })
    gsap.to(overlayRef.current, { opacity: 0, duration: 0.3 })
    setTimeout(onClose, 400)
  }

  if (!flavor) return null

  return (
    <>
      {/* Overlay */}
      <div
        ref={overlayRef}
        className="fixed inset-0 bg-black z-50 opacity-0"
        onClick={handleClose}
      />

      {/* Panel */}
      <div
        ref={panelRef}
        className="fixed top-0 right-0 h-full w-full md:w-[500px] bg-carbon-black z-50 overflow-y-auto"
        style={{ transform: 'translateX(100%)' }}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-off-white/10 flex items-center justify-center hover:bg-off-white/20 transition-colors z-10"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="p-8 pt-20">
          {/* Cube 3D */}
          <div className="relative w-48 h-48 mx-auto mb-8 perspective-1000">
            <div
              ref={cubeRef}
              className="w-full h-full rounded-xl"
              style={{
                backgroundColor: flavor.color,
                transformStyle: 'preserve-3d'
              }}
            />
            <div
              className="absolute inset-0 blur-xl -z-10"
              style={{ backgroundColor: flavor.color }}
            />
          </div>

          {/* Symbol & Name */}
          <div className="text-center mb-8">
            <span className="text-4xl font-bold text-aurum-gold">{flavor.symbol}</span>
            <h2 className="text-2xl font-bold mt-2">{flavor.name}</h2>
          </div>

          {/* Description */}
          <p className="text-off-white/70 text-center mb-8 leading-relaxed">
            "{flavor.description}"
          </p>

          {/* Info sections */}
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-aurum-gold uppercase tracking-wider mb-2">Historia</h3>
              <p className="text-off-white/60 text-sm">{flavor.history}</p>
            </div>

            <div>
              <h3 className="text-sm font-bold text-aurum-gold uppercase tracking-wider mb-2">Ingredientes</h3>
              <ul className="space-y-1">
                {flavor.ingredients.map((ing, i) => (
                  <li key={i} className="text-sm text-off-white/60 flex items-center gap-2">
                    <span className="w-1 h-1 bg-aurum-gold rounded-full" />
                    {ing}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-aurum-gold uppercase tracking-wider mb-2">Efecto Sensorial</h3>
              <p className="text-off-white/80">{flavor.effect}</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={onPrev}
              className="w-12 h-12 rounded-full bg-off-white/10 flex items-center justify-center hover:bg-off-white/20 transition-colors"
            >
              ←
            </button>

            <button
              onClick={() => onAddToMatrix(flavor.id)}
              className="flex-1 bg-neon-fluor text-carbon-black py-3 px-6 rounded-lg font-bold hover:scale-105 transition-transform"
            >
              Añadir a mi Matrix
            </button>

            <button
              onClick={onNext}
              className="w-12 h-12 rounded-full bg-off-white/10 flex items-center justify-center hover:bg-off-white/20 transition-colors"
            >
              →
            </button>
          </div>

          <button
            onClick={onNext}
            className="w-full mt-4 py-2 text-center text-sm text-aurum-gold hover:underline"
          >
            Probar siguiente →
          </button>
        </div>
      </div>
    </>
  )
}