export default function Hero() {
  return (
    <div className="space-y-3">
      <div className="text-[9px] tracking-[0.4em] uppercase opacity-60">
        Drop · Edición Limitada · 750 unidades
      </div>

      <h1 className="text-[36px] md:text-[44px] xl:text-[52px] leading-[0.92] font-light tracking-tight" style={{ fontFamily: 'Georgia, serif' }}>
        La Tabla<br />
        <span style={{ color: '#C9A84C' }}>Periódica</span><br />
        del Cacao.
      </h1>

      <p className="text-[11px] md:text-xs opacity-75 max-w-sm leading-relaxed">
        Nueve elementos de chocolate de autor. Una sola tirada — cuando se acaba, se acaba.
      </p>

      <div className="flex items-center gap-3 text-[10px] tracking-[0.3em] uppercase">
        <span className="inline-block w-2 h-2 rounded-full" style={{ background: '#C8FF00' }}></span>
        <span style={{ color: '#C8FF00' }}>Drop en vivo</span>
      </div>

      <div className="space-y-1">
        <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
          <div className="h-full transition-all duration-700" style={{ width: '100%', background: 'linear-gradient(90deg, #C9A84C, #C8FF00)' }}></div>
        </div>
        <div className="flex justify-between text-[9px] tracking-[0.3em] uppercase opacity-60">
          <span>750 disponibles</span>
          <span>0 vendidas</span>
        </div>
      </div>

      <div className="space-y-2 pt-4">
        <div className="py-2 flex items-baseline justify-between">
          <div>
            <div className="text-[9px] tracking-[0.3em] uppercase opacity-60">Tech-Folder</div>
            <div className="text-[8px] tracking-[0.25em] uppercase opacity-40 mt-0.5">USD · Envío gratis</div>
          </div>
          <span className="text-3xl" style={{ fontFamily: 'Georgia, serif', color: '#C9A84C' }}>$89</span>
        </div>
        <button className="w-full py-3 text-xs tracking-wider bg-[#C9A84C] text-[#1C1C1C] font-semibold hover:bg-[#D4B55A] transition-colors">
          Adquirir la Matriz →
        </button>
      </div>
    </div>
  )
}