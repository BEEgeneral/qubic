import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const taglineRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const countdownRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from(titleRef.current, { y: 100, opacity: 0, duration: 1.2 })
      .from(taglineRef.current, { y: 50, opacity: 0, duration: 0.8 }, '-=0.6')
      .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
      .from(ctaRef.current, { scale: 0.8, opacity: 0, duration: 0.5 }, '-=0.2')
      .from(countdownRef.current, { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')

    gsap.to(titleRef.current, {
      rotateY: 360,
      duration: 20,
      repeat: -1,
      ease: 'none'
    })
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center px-4 pt-20">
      {/* Logo 3D */}
      <div className="relative w-40 h-40 mb-8 perspective-1000">
        <div
          ref={titleRef}
          className="w-full h-full bg-gradient-to-br from-aurum-gold to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <span className="text-6xl font-black text-carbon-black tracking-widest">Q</span>
        </div>
        <div className="absolute inset-0 bg-aurum-gold/20 blur-xl rounded-2xl -z-10" />
      </div>

      {/* Tagline de Leire */}
      <p
        ref={taglineRef}
        className="text-lg md:text-xl text-aurum-gold italic mb-4 text-center max-w-xl"
      >
        "El chocolate es física cuántica deliciosa"
        <span className="block text-sm text-off-white/50 mt-1">— Leire, 14 años, fundadora</span>
      </p>

      {/* Título Principal */}
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider text-center mb-6">
        <span className="text-off-white">HACK THE </span>
        <span className="text-aurum-gold">FLAVOR</span>
      </h1>

      {/* Subtítulo */}
      <p ref={subtitleRef} className="text-xl md:text-2xl text-off-white/70 text-center mb-12">
        Assemble your Pleasure
      </p>

      {/* CTA */}
      <button
        ref={ctaRef}
        className="bg-aurum-gold text-carbon-black px-8 py-4 text-lg font-bold rounded-lg
                   hover:scale-105 hover:shadow-lg hover:shadow-aurum-gold/30 transition-all duration-300"
        onClick={() => document.getElementById('catalogo')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Personaliza tu Matrix
      </button>

      {/* Countdown */}
      <div ref={countdownRef} className="mt-16 text-center">
        <div className="inline-block bg-carbon-black/50 backdrop-blur-md border border-aurum-gold/20 rounded-xl px-8 py-4">
          <p className="text-off-white/50 text-sm mb-2">PRÓXIMO DROP EN</p>
          <div className="flex gap-4 text-center">
            <div>
              <span className="text-3xl font-bold text-aurum-gold">02</span>
              <p className="text-xs text-off-white/50">DÍAS</p>
            </div>
            <span className="text-2xl text-off-white/30">:</span>
            <div>
              <span className="text-3xl font-bold text-aurum-gold">14</span>
              <p className="text-xs text-off-white/50">HORAS</p>
            </div>
            <span className="text-2xl text-off-white/30">:</span>
            <div>
              <span className="text-3xl font-bold text-aurum-gold">32</span>
              <p className="text-xs text-off-white/50">MIN</p>
            </div>
            <span className="text-2xl text-off-white/30">:</span>
            <div>
              <span className="text-3xl font-bold text-neon-fluor">15</span>
              <p className="text-xs text-off-white/50">SEG</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-off-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-aurum-gold rounded-full mt-2 animate-bounce" />
        </div>
      </div>
    </section>
  )
}