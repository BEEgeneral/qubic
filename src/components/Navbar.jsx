export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 px-6 py-4">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium tracking-[0.3em] text-white/80">QUBIC</span>
        </div>
        <span className="text-xs text-white/40 tracking-wider hidden md:block">
          Qubic Atelier · Est. 2026
        </span>
      </div>
    </nav>
  )
}