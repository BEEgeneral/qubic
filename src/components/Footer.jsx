export default function Footer() {
  return (
    <footer className="bg-[#1C1C1C] border-t border-white/10 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <p className="text-sm tracking-[0.3em] text-white/40 mb-2">
            Qubic Atelier · Est. 2026
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <a
            href="https://emergentagent.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            Made with Emergent
          </a>
        </div>

        <div className="text-center">
          <p className="text-[10px] tracking-[0.2em] text-white/20">
            © 2026 QUBIC · ALL RIGHTS RESERVED
          </p>
        </div>
      </div>
    </footer>
  )
}