export default function Navbar() {
  return (
    <header className="relative z-30 flex items-center justify-between px-6 md:px-10 py-4 border-b border-white/5 backdrop-blur-sm bg-black/30">
      <div className="flex items-baseline gap-3">
        <span className="text-2xl tracking-tight text-[#C9A84C]" style={{ fontFamily: 'Georgia, serif' }}>Qubic</span>
        <span className="text-[10px] tracking-[0.3em] opacity-50 uppercase">® Matrix One</span>
      </div>
      <div className="hidden md:flex items-center gap-6 text-[10px] tracking-[0.3em] uppercase">
        <span className="opacity-60">Lote único · 750 / 750</span>
        <span style={{ color: '#C8FF00' }}>● Drop activo</span>
      </div>
    </header>
  )
}