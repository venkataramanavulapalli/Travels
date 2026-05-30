import { Link } from 'react-router-dom'
import { Compass, Twitter, Instagram, Youtube, Github, Mail, ArrowRight } from 'lucide-react'

const footerLinks = {
  Discover: [
    { label: 'Explore Destinations', path: '/explore' },
    { label: 'AI Trip Planner', path: '/planner' },
    { label: 'World Map', path: '/map' },
    { label: 'Mood Explorer', path: '/mood' },
  ],
  Experience: [
    { label: 'Travel Journal', path: '/journal' },
    { label: 'Trending Places', path: '/explore' },
    { label: 'Hidden Gems', path: '/explore' },
    { label: 'Luxury Travel', path: '/explore' },
  ],
  Company: [
    { label: 'About TravelAura', path: '/' },
    { label: 'Careers', path: '/' },
    { label: 'Press Kit', path: '/' },
    { label: 'Contact Us', path: '/' },
  ],
}

const socials = [
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 mt-32">
      {/* Top section */}
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5 group mb-6 w-fit">
              <div className="w-9 h-9 rounded-xl flex items-center justify-center neon-border"
                style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.2), rgba(168,85,247,0.2))' }}>
                <Compass className="w-5 h-5 text-sky-400" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">
                Travel<span className="text-gradient-blue">Aura</span>
              </span>
            </Link>
            <p className="font-body text-white/50 text-sm leading-relaxed mb-8 max-w-xs">
              The future of travel discovery. Explore breathtaking destinations,
              plan immersive journeys, and experience the world like never before.
            </p>
            {/* Newsletter */}
            <div>
              <p className="font-mono text-xs text-sky-400/70 tracking-widest uppercase mb-3">Newsletter</p>
              <div className="flex gap-2">
                <div className="flex-1 glass neon-border rounded-full px-4 py-2.5 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-white/30 flex-shrink-0" />
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="bg-transparent text-sm font-body text-white/70 placeholder-white/25 outline-none w-full"
                  />
                </div>
                <button className="btn-primary py-2.5 px-4 rounded-full flex items-center justify-center">
                  <span><ArrowRight className="w-4 h-4" /></span>
                </button>
              </div>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <p className="font-mono text-xs text-sky-400/70 tracking-widest uppercase mb-5">{category}</p>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="font-body text-sm text-white/45 hover:text-white/80 transition-colors duration-300"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30">
            © 2025 TravelAura. All rights reserved. Crafted with passion for explorers.
          </p>
          <div className="flex items-center gap-4">
            {socials.map(({ icon: Icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="w-8 h-8 glass neon-border rounded-full flex items-center justify-center text-white/40 hover:text-sky-400 hover:border-sky-400/40 transition-all duration-300"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
