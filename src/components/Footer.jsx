export default function Footer() {
  return (
    <footer className="relative z-30 border-t border-white/5 backdrop-blur-sm bg-black/30">
      <div className="px-6 md:px-10 py-4 flex justify-end">
        <a
          href="https://emergentagent.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] text-white/30 hover:text-white/60 transition-colors tracking-wider"
        >
          Made with Emergent
        </a>
      </div>
    </footer>
  )
}