import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)
  const logoRef = useRef(null)
  const taglineRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const ctaRef = useRef(null)
  const countdownRef = useRef(null)
  const scrollIndicatorRef = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

    tl.from(logoRef.current, { scale: 0, rotation: -180, duration: 1.2, transformOrigin: 'center center' })
      .from(taglineRef.current, { y: 50, opacity: 0, duration: 0.8 }, '-=0.6')
      .from(titleRef.current, { y: 80, opacity: 0, duration: 0.8 }, '-=0.5')
      .from(subtitleRef.current, { y: 30, opacity: 0, duration: 0.6 }, '-=0.4')
      .from(ctaRef.current, { scale: 0.5, opacity: 0, duration: 0.5 }, '-=0.2')
      .from(countdownRef.current, { y: 20, opacity: 0, duration: 0.5 }, '-=0.3')
      .from(scrollIndicatorRef.current, { opacity: 0, duration: 0.5 }, '-=0.2')

    gsap.to(logoRef.current, {
      rotateY: 360,
      duration: 8,
      repeat: -1,
      ease: 'none',
      transformOrigin: 'center center'
    })

    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut'
    })
  }, [])

  return (
    <section ref={heroRef} className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 relative">
      {/* Logo 3D */}
      <div className="relative mb-8" style={{ perspective: 800 }}>
        <div
          ref={logoRef}
          className="w-40 h-40 bg-gradient-to-br from-[#C9A84C] to-amber-600 rounded-2xl flex items-center justify-center shadow-2xl"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <span className="text-6xl font-black text-[#1C1C1C] tracking-widest select-none">Q</span>
        </div>
        <div className="absolute inset-0 bg-[#C9A84C]/30 blur-xl rounded-2xl -z-10" style={{ transform: 'translateZ(-20px)' }} />
      </div>

      {/* Tagline de Leire */}
      <div ref={taglineRef} className="text-center mb-4">
        <p className="text-lg md:text-xl text-[#C9A84C] italic">
          "El chocolate es física cuántica deliciosa"
        </p>
        <span className="block text-sm text-[#E0DDD8]/50 mt-1">— Leire, 14 años, fundadora</span>
      </div>

      {/* Título Principal */}
      <h1 ref={titleRef} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider text-center mb-6">
        <span className="text-[#E0DDD8]">HACK THE </span>
        <span className="text-[#C9A84C]">FLAVOR</span>
      </h1>

      {/* Subtítulo */}
      <p ref={subtitleRef} className="text-xl md:text-2xl text-[#E0DDD8]/70 text-center mb-12">
        Assemble your Pleasure
      </p>

      {/* CTA */}
      <button
        ref={ctaRef}
        className="bg-[#C9A84C] text-[#1C1C1C] px-8 py-4 text-lg font-bold rounded-lg
                   hover:scale-105 hover:shadow-lg transition-all duration-300 cursor-pointer"
        style={{ boxShadow: '0 0 30px rgba(201, 168, 76, 0.3)' }}
        onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
      >
        Personaliza tu Matrix
      </button>

      {/* Countdown */}
      <div ref={countdownRef} className="mt-16 text-center">
        <div className="inline-block bg-[#1C1C1C]/50 backdrop-blur-md border border-[#C9A84C]/20 rounded-xl px-8 py-4">
          <p className="text-[#E0DDD8]/50 text-sm mb-2">PRÓXIMO DROP EN</p>
          <div className="flex gap-4 text-center">
            <div>
              <span className="text-3xl font-bold text-[#C9A84C]">02</span>
              <p className="text-xs text-[#E0DDD8]/50">DÍAS</p>
            </div>
            <span className="text-2xl text-[#E0DDD8]/30">:</span>
            <div>
              <span className="text-3xl font-bold text-[#C9A84C]">14</span>
              <p className="text-xs text-[#E0DDD8]/50">HORAS</p>
            </div>
            <span className="text-2xl text-[#E0DDD8]/30">:</span>
            <div>
              <span className="text-3xl font-bold text-[#C9A84C]">32</span>
              <p className="text-xs text-[#E0DDD8]/50">MIN</p>
            </div>
            <span className="text-2xl text-[#E0DDD8]/30">:</span>
            <div>
              <span className="text-3xl font-bold text-[#C8FF00]">15</span>
              <p className="text-xs text-[#E0DDD8]/50">SEG</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollIndicatorRef} className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-[#E0DDD8]/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#C9A84C] rounded-full mt-2" />
        </div>
      </div>
    </section>
  )
}