export default function Footer() {
  return (
    <footer className="bg-carbon-black border-t border-off-white/10 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm tracking-[0.3em] text-off-white/40 mb-2">
            Qubic Atelier · Est. 2026
          </p>
          <p className="text-xs text-off-white/30">
            Made with Emergent
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <button
            className="px-6 py-3 bg-off-white/5 border border-off-white/20 rounded-full text-sm text-off-white/60 hover:bg-off-white/10 hover:border-off-white/30 transition-all"
            onClick={() => alert('Wake up the servers!')}
          >
            Wake up servers
          </button>
        </div>

        <div className="text-center">
          <p className="text-[10px] tracking-[0.2em] text-off-white/20">
            © 2026 QUBIC · ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  )
}