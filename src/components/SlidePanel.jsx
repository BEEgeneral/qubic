import { useEffect, useState } from 'react'

export default function SlidePanel({ flavor, index, total, isOpen, onClose, onNext, onPrev }) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true)
    } else {
      const timer = setTimeout(() => setIsVisible(false), 400)
      return () => clearTimeout(timer)
    }
  }, [isOpen])

  if (!isVisible && !isOpen) return null

  const indexPadded = String(index + 1).padStart(2, '0')
  const totalPadded = String(total).padStart(2, '0')
  const bitId = `BIT-${String(index + 1).padStart(2, '0')}`

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[480px] bg-carbon-black border-l border-off-white/10 z-50 transition-transform duration-400 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ transitionDuration: '400ms' }}
      >
        {flavor && (
          <div className="h-full flex flex-col">
            <div className="p-6 border-b border-off-white/10 flex justify-between items-center">
              <span className="text-xs tracking-[0.3em] text-aurum-gold/60">
                Nodo {indexPadded} / {totalPadded} · {bitId}
              </span>
              <button
                onClick={onClose}
                className="w-8 h-8 rounded-full bg-off-white/10 flex items-center justify-center hover:bg-off-white/20 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="text-center mb-8">
                <span
                  className="text-5xl font-bold text-aurum-gold block mb-4"
                  style={{ textShadow: '0 0 30px rgba(201, 168, 76, 0.4)' }}
                >
                  {flavor.symbol}
                </span>
                <h2 className="text-2xl font-bold text-off-white mb-2">{flavor.fullName}</h2>
                <span className="text-3xl text-aurum-gold font-light">{flavor.cacao}</span>
              </div>

              <div className="mb-8">
                <p className="text-[10px] tracking-[0.3em] text-off-white/40 mb-2">INGREDIENTES</p>
                <p className="text-sm text-off-white/80 leading-relaxed">{flavor.ingredients}</p>
              </div>

              <div className="mb-8">
                <p className="text-[10px] tracking-[0.3em] text-off-white/40 mb-3">SABOR</p>
                <p className="text-base text-off-white leading-relaxed">{flavor.description}</p>
              </div>

              <div className="mb-8">
                <p className="text-[10px] tracking-[0.3em] text-off-white/40 mb-2">TONO</p>
                <span className="inline-block px-4 py-2 bg-aurum-gold/10 border border-aurum-gold/30 rounded-full text-aurum-gold text-sm">
                  {flavor.tono}
                </span>
              </div>

              <div className="border-t border-off-white/10 pt-6 mt-6">
                <p className="text-[10px] tracking-[0.3em] text-off-white/40 mb-3">NOTAS</p>
                <p className="text-sm text-off-white/60 leading-relaxed">
                  Notas de cata incluyen {flavor.fullName.toLowerCase()} con {flavor.tono.toLowerCase()} de fondo.
                  Estructura cremosa con final persistente.
                </p>
              </div>
            </div>

            <div className="p-6 border-t border-off-white/10 flex items-center justify-between gap-4">
              <button
                onClick={onPrev}
                className="w-12 h-12 rounded-full bg-off-white/10 flex items-center justify-center hover:bg-off-white/20 transition-colors"
              >
                <span className="text-xl">◀</span>
              </button>

              <div className="flex-1 flex justify-center">
                <span className="text-xs tracking-[0.2em] text-off-white/40">
                  {index + 1} / {total}
                </span>
              </div>

              <button
                onClick={onNext}
                className="w-12 h-12 rounded-full bg-off-white/10 flex items-center justify-center hover:bg-off-white/20 transition-colors"
              >
                <span className="text-xl">▶</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}