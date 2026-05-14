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
        className={`fixed inset-0 bg-black/80 z-50 transition-opacity duration-400 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />

      <div
        className={`fixed top-0 right-0 h-full w-full md:w-[480px] bg-[#1C1C1C] border-l border-white/10 z-50 transition-transform duration-500 ease-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        {flavor && (
          <div className="h-full flex flex-col p-8">
            <div className="text-center mb-6">
              <span
                className="text-6xl font-bold text-[#C9A84C] block"
                style={{ textShadow: '0 0 40px rgba(201, 168, 76, 0.5)' }}
              >
                {flavor.symbol}
              </span>
            </div>

            <div className="text-center mb-6">
              <p className="text-xs tracking-[0.3em] text-white/40 mb-2">
                Nodo {indexPadded} / {totalPadded} · {bitId}
              </p>
              <h2 className="text-2xl font-bold text-white mb-2">{flavor.fullName}</h2>
              <span className="text-4xl text-[#C9A84C] font-light">{flavor.cacao}</span>
            </div>

            <div className="mb-6">
              <p className="text-xs text-white/40 tracking-wider mb-1">INGREDIENTES</p>
              <p className="text-sm text-white/80">{flavor.ingredients}</p>
            </div>

            <div className="mb-6 flex-1">
              <p className="text-sm text-white/80 leading-relaxed">{flavor.description}</p>
            </div>

            <div className="mb-6">
              <p className="text-xs text-white/40 tracking-wider mb-2">TONO</p>
              <span className="inline-block text-[#C9A84C] text-sm">
                {flavor.tono}
              </span>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/10">
              <button
                onClick={onPrev}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="text-lg">◀</span>
              </button>

              <div className="flex-1 flex justify-center">
                <span className="text-xs tracking-[0.2em] text-white/40">
                  {index + 1} / {total}
                </span>
              </div>

              <button
                onClick={onNext}
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
              >
                <span className="text-lg">▶</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}