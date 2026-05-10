import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function MatrixBuilder({ flavors, matrix, onCellClick, onConfirm, onReset, isComplete }) {
  const builderRef = useRef(null)
  const cellsRef = useRef([])

  useEffect(() => {
    if (!builderRef.current) return

    gsap.from(builderRef.current, {
      y: 50,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out'
    })
  }, [])

  useEffect(() => {
    cellsRef.current.forEach((cell, i) => {
      if (!cell) return

      if (matrix[i]) {
        const flavor = flavors.find(f => f.id === matrix[i])
        gsap.to(cell, {
          backgroundColor: flavor?.color || '#333',
          duration: 0.3
        })
      } else {
        gsap.to(cell, {
          backgroundColor: 'transparent',
          duration: 0.3
        })
      }
    })
  }, [matrix, flavors])

  const filledCount = matrix.filter(m => m !== null).length

  return (
    <section ref={builderRef} className="py-20 px-4 bg-gradient-to-b from-carbon-black to-neutral-900">
      <div className="max-w-xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-2">Tu Matrix Personalizada</h2>
        <p className="text-off-white/50 text-center mb-8">
          Selecciona 9 cubos para crear tu kit
        </p>

        {/* Matrix Grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {matrix.map((cell, index) => {
            const flavor = cell ? flavors.find(f => f.id === cell) : null

            return (
              <button
                key={index}
                ref={el => cellsRef.current[index] = el}
                onClick={() => onCellClick(index)}
                className={`
                  aspect-square rounded-xl border-2 border-dashed transition-all duration-300
                  flex items-center justify-center text-2xl font-bold
                  ${cell ? 'border-solid border-aurum-gold/50' : 'border-off-white/30 hover:border-aurum-gold'}
                `}
                style={{
                  backgroundColor: flavor ? `${flavor.color}20` : 'transparent'
                }}
              >
                {flavor ? (
                  <span style={{ color: flavor.color }}>{flavor.symbol}</span>
                ) : (
                  <span className="text-off-white/30 text-sm">+</span>
                )}
              </button>
            )
          })}
        </div>

        {/* Progress bar "3 max" */}
        <div className="mb-6">
          <div className="flex justify-between text-sm text-off-white/50 mb-2">
            <span>Progreso</span>
            <span>{filledCount}/9</span>
          </div>
          <div className="h-2 bg-off-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-aurum-gold transition-all duration-300"
              style={{ width: `${(filledCount / 9) * 100}%` }}
            />
          </div>
        </div>

        {/* 3 max indicator */}
        <div className="text-center mb-8">
          <span className="inline-block px-4 py-2 bg-neon-fluor/10 text-neon-fluor text-sm rounded-full">
            Máximo 3 kits idénticos por pedido
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={onReset}
            className="flex-1 py-3 px-6 rounded-lg border border-off-white/20 text-off-white/70 hover:bg-off-white/5 transition-colors"
          >
            Resetear
          </button>
          <button
            onClick={onConfirm}
            disabled={!isComplete}
            className={`
              flex-1 py-3 px-6 rounded-lg font-bold transition-all duration-300
              ${isComplete
                ? 'bg-neon-fluor text-carbon-black hover:scale-105 hover:shadow-lg hover:shadow-neon-fluor/30'
                : 'bg-off-white/20 text-off-white/30 cursor-not-allowed'
              }
            `}
          >
            Confirmar Matrix
          </button>
        </div>

        {!isComplete && (
          <p className="text-center text-off-white/50 text-sm mt-4">
            Completa los 9 cubos para continuar
          </p>
        )}
      </div>
    </section>
  )
}