import { useState, useEffect } from 'react'

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 2,
    hours: 14,
    minutes: 32,
    seconds: 15
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let newSeconds = prev.seconds - 1
        let newMinutes = prev.minutes
        let newHours = prev.hours
        let newDays = prev.days

        if (newSeconds < 0) {
          newSeconds = 59
          newMinutes--
        }
        if (newMinutes < 0) {
          newMinutes = 59
          newHours--
        }
        if (newHours < 0) {
          newHours = 23
          newDays--
        }
        if (newDays < 0) {
          newDays = 0
          newHours = 0
          newMinutes = 0
          newSeconds = 0
        }

        return {
          days: newDays,
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds
        }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const pad = (n) => n.toString().padStart(2, '0')

  return (
    <div className="flex gap-3 md:gap-6 items-center">
      <div className="text-center">
        <span className="text-2xl md:text-4xl font-bold text-aurum-gold">{pad(timeLeft.days)}</span>
        <p className="text-[10px] md:text-xs text-off-white/40 mt-1 tracking-wider">DÍAS</p>
      </div>
      <span className="text-xl md:text-3xl text-off-white/20">:</span>
      <div className="text-center">
        <span className="text-2xl md:text-4xl font-bold text-aurum-gold">{pad(timeLeft.hours)}</span>
        <p className="text-[10px] md:text-xs text-off-white/40 mt-1 tracking-wider">HORAS</p>
      </div>
      <span className="text-xl md:text-3xl text-off-white/20">:</span>
      <div className="text-center">
        <span className="text-2xl md:text-4xl font-bold text-aurum-gold">{pad(timeLeft.minutes)}</span>
        <p className="text-[10px] md:text-xs text-off-white/40 mt-1 tracking-wider">MIN</p>
      </div>
      <span className="text-xl md:text-3xl text-off-white/20">:</span>
      <div className="text-center">
        <span className="text-2xl md:text-4xl font-bold text-neon-fluor">{pad(timeLeft.seconds)}</span>
        <p className="text-[10px] md:text-xs text-off-white/40 mt-1 tracking-wider">SEG</p>
      </div>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-carbon-black via-transparent to-carbon-black pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center">
        <div className="mb-6">
          <span className="text-sm tracking-[0.5em] text-aurum-gold/60">QUBIC</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-wider text-off-white mb-2">
          QUBIC
        </h1>

        <div className="flex items-center gap-4 mb-8">
          <span className="text-xl md:text-2xl text-aurum-gold font-light tracking-widest">
            Matrix One
          </span>
          <span className="px-3 py-1 bg-aurum-gold/20 text-aurum-gold text-xs tracking-wider rounded-full border border-aurum-gold/40">
            999 unidades
          </span>
        </div>

        <div className="text-center mb-10">
          <p className="text-off-white/40 text-sm tracking-[0.3em] mb-4">LOTE ÚNICO · 999</p>
        </div>

        <div className="mb-12 px-8 py-6 bg-off-white/5 border border-off-white/10 rounded-2xl backdrop-blur-sm">
          <p className="text-[10px] tracking-[0.4em] text-off-white/50 mb-4">PRÓXIMO DROP</p>
          <CountdownTimer />
          <p className="text-[10px] tracking-[0.2em] text-off-white/30 mt-3">UTC</p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <div className="flex items-baseline gap-2">
            <span className="text-4xl md:text-5xl font-bold text-off-white">$89</span>
          </div>
          <span className="text-xs tracking-[0.3em] text-aurum-gold/80">ENVÍO MUNDIAL GRATIS</span>
        </div>

        <div className="mt-10 flex items-center gap-3">
          <span className="w-2 h-2 bg-neon-fluor rounded-full animate-pulse" />
          <span className="text-sm tracking-wider text-off-white/60">Drop · Edición Limitada · 999 unidades</span>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 border border-off-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-aurum-gold rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}