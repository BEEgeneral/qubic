export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-4 pt-20 relative">
      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-8">
          <span className="text-xs tracking-[0.5em] text-[#C9A84C]/60">QUBIC</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-light tracking-widest text-white mb-2">
          ® Matrix One
        </h1>

        <div className="flex items-center gap-3 mb-4">
          <span className="text-sm text-white/60 tracking-wider">Lote único · 750</span>
          <span className="px-3 py-1 bg-[#C9A84C]/20 text-[#C9A84C] text-xs tracking-wider rounded-full border border-[#C9A84C]/40">
            Drop activo
          </span>
        </div>

        <div className="mb-6">
          <p className="text-xs text-white/50 tracking-[0.2em]">Drop · Edición Limitada · 750 unidades</p>
        </div>

        <div className="mb-12">
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
            La Tabla Periódica<br />del Cacao.
          </h2>
        </div>

        <div className="mb-10 max-w-md">
          <p className="text-base text-white/70 leading-relaxed">
            Nueve elementos de chocolate de autor. Una sola tirada — cuando se acaba, se acaba.
          </p>
        </div>

        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 bg-[#C9A84C] rounded-full animate-pulse" />
          <span className="text-sm text-white/80">Drop en vivo</span>
          <span className="text-sm text-white/40">·</span>
          <span className="text-sm text-white/80">750 disponibles</span>
          <span className="text-sm text-white/40">·</span>
          <span className="text-sm text-white/60">0 vendidas</span>
        </div>

        <div className="flex items-center gap-2 mb-2">
          <span className="text-xs text-white/40 tracking-wider">Tech-Folder</span>
        </div>

        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-sm text-white/60">USD</span>
          <span className="text-sm text-white/60">·</span>
          <span className="text-sm text-white/60">Envío gratis</span>
        </div>

        <div className="mb-8">
          <span className="text-6xl md:text-7xl font-bold text-white">$89</span>
        </div>

        <button className="px-10 py-4 bg-[#C9A84C] text-[#1C1C1C] font-semibold text-lg rounded-full hover:bg-[#D4B55A] transition-colors">
          Adquirir la Matriz →
        </button>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 border border-white/20 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-[#C9A84C] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}