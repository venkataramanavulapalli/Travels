import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Compass } from 'lucide-react'

const navLinks = [
  { label: 'Explore', path: '/explore' },
  { label: 'Destinations', path: '/destination/tokyo' },
  { label: 'AI Planner', path: '/planner' },
  { label: 'World Map', path: '/map' },
  { label: 'Mood', path: '/mood' },
  { label: 'Journal', path: '/journal' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => setMobileOpen(false), [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'glass border-b border-white/5 py-3' : 'py-6'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center neon-border transition-all duration-300 group-hover:neon-glow"
            style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.2), rgba(168,85,247,0.2))' }}>
            <Compass className="w-5 h-5 text-sky-400" />
          </div>
          <span className="font-display font-bold text-xl tracking-tight">
            Travel<span className="text-gradient-blue">Aura</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm font-medium tracking-wide transition-all duration-300 hover:text-sky-400 relative group ${
                location.pathname === link.path ? 'text-sky-400' : 'text-white/60'
              }`}
            >
              {link.label}
              <span className={`absolute -bottom-1 left-0 h-px bg-sky-400 transition-all duration-300 ${
                location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
              }`} />
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="btn-outline text-xs py-2 px-6">Sign In</Link>
          <Link to="/login" className="btn-primary text-xs py-2 px-6">
            <span>Get Started</span>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 glass rounded-lg neon-border"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-400 overflow-hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="glass border-t border-white/5 px-6 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`font-body text-sm font-medium tracking-wide transition-colors ${
                location.pathname === link.path ? 'text-sky-400' : 'text-white/70'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex gap-3 mt-2">
            <Link to="/login" className="btn-outline text-xs py-2 px-5 flex-1 text-center">Sign In</Link>
            <Link to="/login" className="btn-primary text-xs py-2 px-5 flex-1 text-center">
              <span>Get Started</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
