import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const NAV_LINKS = ['Inicio', 'Catálogo', 'Personaliza', 'Drops', 'Nosotros']

export default function Navbar({ cartItemsCount = 0, onCartClick, onLoginClick, onRegisterClick }) {
  const navbarRef = useRef(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50
      setScrolled(isScrolled)

      gsap.to(navbarRef.current, {
        backgroundColor: isScrolled ? 'rgba(28, 28, 28, 0.95)' : 'transparent',
        backdropFilter: isScrolled ? 'blur(10px)' : 'none',
        duration: 0.3
      })
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    gsap.from(navbarRef.current, {
      y: -100,
      opacity: 0,
      duration: 0.8,
      ease: 'power3.out'
    })
  }, [])

  return (
    <nav
      ref={navbarRef}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="w-10 h-10 bg-aurum-gold rounded-lg flex items-center justify-center font-bold text-carbon-black">
            Q
          </div>
          <span className="text-xl font-semibold tracking-wider">QUBIC</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-off-white/80 hover:text-neon-fluor transition-colors text-sm tracking-wider"
              style={{ opacity: 0, animation: `fadeIn 0.5s ${i * 0.1}s forwards` }}
            >
              {link}
            </a>
          ))}
        </div>

        {/* Badge Leire + Cart */}
        <div className="flex items-center gap-4">
          <span className="hidden md:inline text-xs text-off-white/50 italic">
            Leire, 14 años
          </span>

          <button
            onClick={onCartClick}
            className="relative p-2 hover:scale-110 transition-transform"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            {cartItemsCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-neon-fluor text-carbon-black text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartItemsCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-carbon-black/95 backdrop-blur-lg border-t border-off-white/10">
          <div className="px-4 py-6 space-y-4">
            {NAV_LINKS.map((link, i) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="block text-off-white/80 hover:text-neon-fluor py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link}
              </a>
            ))}
            <div className="pt-4 border-t border-off-white/10">
              <button
                onClick={onLoginClick}
                className="block w-full text-left py-2 text-off-white/60"
              >
                Iniciar sesión
              </button>
              <button
                onClick={onRegisterClick}
                className="block w-full text-left py-2 text-aurum-gold"
              >
                Registrarse
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}