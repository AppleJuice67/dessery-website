import { useState, useEffect } from "react"
import { NAV_LINKS } from "../../data/siteData"

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-pink-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-full bg-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform">
            D
          </div>
          <div className="leading-tight">
            <span
              className="block text-xl font-bold text-pink-500"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Dessery
            </span>
            <span className="block text-[9px] uppercase tracking-widest text-rose-muted font-semibold -mt-0.5 opacity-70">
              Dessert Gallery
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link-hover text-sm font-semibold text-[#3d1810] hover:text-pink-500 transition-colors"
            >
              {link}
            </a>
          ))}
        </nav>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-1 bg-pink-500 hover:bg-pink-600 text-white text-sm font-bold px-5 py-2 rounded-full transition-all btn-primary-glow"
          >
            Order Now
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-pink-500 p-1"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-pink-100 px-6 pb-5 pt-3">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm font-semibold text-[#3d1810] hover:text-pink-500 border-b border-pink-50 last:border-0"
            >
              {link}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 block text-center bg-pink-500 text-white text-sm font-bold px-5 py-2.5 rounded-full"
          >
            Order Now
          </a>
        </div>
      )}
    </header>
  )
}
