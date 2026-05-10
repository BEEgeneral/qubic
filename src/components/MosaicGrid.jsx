import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function MosaicGrid({ flavors, onCubeClick, matrix }) {
  const gridRef = useRef(null)
  const cubesRef = useRef([])
  const [hoveredIndex, setHoveredIndex] = useState(null)

  useEffect(() => {
    if (!gridRef.current) return

    cubesRef.current.forEach((cube, i) => {
      if (!cube) return

      gsap.from(cube, {
        y: 100,
        opacity: 0,
        rotateY: 180,
        duration: 0.8,
        delay: i * 0.1,
        ease: 'power3.out'
      })

      gsap.to(cube, {
        rotateY: 360,
        duration: 20,
        repeat: -1,
        ease: 'none',
        delay: i * 2
      })
    })
  }, [])

  useEffect(() => {
    if (!gridRef.current) return

    ScrollTrigger.create({
      trigger: gridRef.current,
      start: 'top center',
      onEnter: () => {
        cubesRef.current.forEach((cube, i) => {
          if (!cube) return
          gsap.to(cube, {
            y: Math.random() * 20 - 10,
            x: Math.random() * 20 - 10,
            duration: 0.5 + Math.random() * 0.5,
            ease: 'power1.inOut'
          })
        })
      }
    })
  }, [])

  return (
    <div ref={gridRef} id="catalogo" className="max-w-4xl mx-auto">
      <div className="grid grid-cols-3 gap-4 md:gap-6">
        {flavors.map((flavor, index) => {
          const isInMatrix = matrix.includes(flavor.id)
          const isHovered = hoveredIndex === index

          return (
            <div
              key={flavor.id}
              ref={el => cubesRef.current[index] = el}
              className="relative aspect-square cursor-pointer perspective-1000"
              onClick={() => onCubeClick(flavor.id, index)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`
                  w-full h-full rounded-xl overflow-hidden transition-all duration-300
                  ${isHovered ? 'scale-105 shadow-2xl z-10' : ''}
                  ${isInMatrix ? 'ring-2 ring-neon-fluor' : ''}
                `}
                style={{
                  transformStyle: 'preserve-3d',
                  boxShadow: isHovered ? `0 20px 40px ${flavor.color}40` : `0 10px 20px rgba(0,0,0,0.3)`
                }}
              >
                <img
                  src={`./images/${flavor.id}.jpg`}
                  alt={flavor.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.style.backgroundColor = flavor.color
                  }}
                />

                <div
                  className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                />

                <div className="absolute inset-0 flex flex-col items-center justify-end p-4">
                  <span className="text-2xl font-bold text-white mb-1">
                    {flavor.symbol}
                  </span>
                  <span className="text-sm text-white/80">
                    {flavor.name}
                  </span>
                </div>

                {isInMatrix && (
                  <div className="absolute top-2 right-2 bg-neon-fluor text-carbon-black text-xs px-2 py-1 rounded-full font-bold">
                    ✓
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      <p className="text-center text-off-white/50 text-sm mt-8">
        Click en un cubo para ver su historia
      </p>
    </div>
  )
}