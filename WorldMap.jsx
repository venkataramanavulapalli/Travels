import { useState } from 'react'
import { Search, Star, MapPin, Heart, Navigation } from 'lucide-react'
import { Link } from 'react-router-dom'

const MAP_DESTINATIONS = [
  { id: 'tokyo', name: 'Tokyo', country: 'Japan', x: 82, y: 35, rating: 4.9, image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=400&q=80', category: 'City' },
  { id: 'paris', name: 'Paris', country: 'France', x: 47, y: 28, rating: 4.8, image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=400&q=80', category: 'City' },
  { id: 'maldives', name: 'Maldives', country: 'Indian Ocean', x: 70, y: 52, rating: 5.0, image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=400&q=80', category: 'Beach' },
  { id: 'rio', name: 'Rio', country: 'Brazil', x: 33, y: 62, rating: 4.7, image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=400&q=80', category: 'City' },
  { id: 'santorini', name: 'Santorini', country: 'Greece', x: 52, y: 32, rating: 4.9, image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=400&q=80', category: 'Island' },
  { id: 'dubai', name: 'Dubai', country: 'UAE', x: 61, y: 38, rating: 4.7, image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=400&q=80', category: 'City' },
  { id: 'bali', name: 'Bali', country: 'Indonesia', x: 79, y: 56, rating: 4.8, image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&q=80', category: 'Island' },
  { id: 'machu-picchu', name: 'Machu Picchu', country: 'Peru', x: 24, y: 57, rating: 4.8, image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=400&q=80', category: 'Historical' },
  { id: 'aurora', name: 'Northern Lights', country: 'Iceland', x: 42, y: 15, rating: 5.0, image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=400&q=80', category: 'Nature' },
  { id: 'swiss-alps', name: 'Swiss Alps', country: 'Switzerland', x: 50, y: 27, rating: 4.8, image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80', category: 'Nature' },
]

const ROUTE_LINES = [
  { from: 'paris', to: 'santorini' },
  { from: 'santorini', to: 'dubai' },
  { from: 'dubai', to: 'maldives' },
  { from: 'maldives', to: 'bali' },
  { from: 'bali', to: 'tokyo' },
]

export default function WorldMap() {
  const [hoveredDest, setHoveredDest] = useState(null)
  const [query, setQuery] = useState('')
  const [favorites, setFavorites] = useState(['tokyo', 'maldives'])

  const filtered = MAP_DESTINATIONS.filter(
    (d) => d.name.toLowerCase().includes(query.toLowerCase()) || d.country.toLowerCase().includes(query.toLowerCase())
  )

  const getCoords = (id) => MAP_DESTINATIONS.find((d) => d.id === id)

  const toggleFav = (id) => {
    setFavorites((prev) => prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id])
  }

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-10 reveal">
          <p className="section-label">Interactive Map</p>
          <h1 className="font-display text-5xl md:text-6xl font-black mb-3">
            World <span className="text-gradient italic">Explorer</span>
          </h1>
          <p className="font-body text-white/50">Hover destinations to preview. Click to explore.</p>
        </div>

        {/* Search */}
        <div className="glass neon-border rounded-2xl px-5 py-3.5 flex items-center gap-3 max-w-md mb-8 reveal">
          <Search className="w-5 h-5 text-white/30" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search on the map..."
            className="bg-transparent font-body text-sm text-white/80 placeholder-white/25 outline-none flex-1"
          />
        </div>

        {/* Map Container */}
        <div className="relative glass neon-border rounded-3xl overflow-hidden reveal" style={{ height: '540px' }}>
          {/* Dark map background */}
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(135deg, #030a1a 0%, #060d1f 50%, #03101e 100%)',
            }}
          >
            {/* Grid lines */}
            <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#0ea5e9" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            {/* Latitude/longitude arcs */}
            <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100" preserveAspectRatio="none">
              {[20, 40, 60, 80].map((y) => (
                <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="#0ea5e9" strokeWidth="0.2" />
              ))}
              {[20, 40, 60, 80].map((x) => (
                <line key={x} x1={x} y1="0" x2={x} y2="100" stroke="#0ea5e9" strokeWidth="0.2" />
              ))}
              <ellipse cx="50" cy="50" rx="45" ry="40" fill="none" stroke="#0ea5e9" strokeWidth="0.3" />
              <ellipse cx="50" cy="50" rx="30" ry="40" fill="none" stroke="#0ea5e9" strokeWidth="0.2" />
            </svg>

            {/* Route lines */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              {ROUTE_LINES.map(({ from, to }) => {
                const f = getCoords(from)
                const t = getCoords(to)
                if (!f || !t) return null
                const mx = (f.x + t.x) / 2
                const my = Math.min(f.y, t.y) - 10
                return (
                  <path
                    key={`${from}-${to}`}
                    d={`M ${f.x} ${f.y} Q ${mx} ${my} ${t.x} ${t.y}`}
                    fill="none"
                    stroke="rgba(14,165,233,0.4)"
                    strokeWidth="0.3"
                    strokeDasharray="0.8 0.8"
                  />
                )
              })}
            </svg>

            {/* Destination Markers */}
            {filtered.map((dest) => (
              <div
                key={dest.id}
                className="absolute cursor-pointer group"
                style={{ left: `${dest.x}%`, top: `${dest.y}%`, transform: 'translate(-50%, -50%)' }}
                onMouseEnter={() => setHoveredDest(dest)}
                onMouseLeave={() => setHoveredDest(null)}
              >
                {/* Pulse ring */}
                <div className="absolute -inset-3 rounded-full border border-sky-400/20 animate-ping" style={{ animationDuration: '2s' }} />
                {/* Marker */}
                <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-all duration-300 ${
                  favorites.includes(dest.id) ? 'bg-red-400 border-red-400' : 'bg-sky-400 border-sky-400'
                } group-hover:scale-150`}>
                  <div className="w-1.5 h-1.5 rounded-full bg-white" />
                </div>
                {/* Name label */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                  <span className="glass neon-border px-2 py-0.5 rounded font-mono text-xs text-sky-400">{dest.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Hover Preview Card */}
          {hoveredDest && (
            <div className="absolute top-4 right-4 glass-strong neon-border rounded-2xl overflow-hidden w-56 pointer-events-none"
              style={{ animation: 'fadeUp 0.2s ease' }}>
              <img src={hoveredDest.image} alt={hoveredDest.name} className="w-full h-32 object-cover" />
              <div className="p-4">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-display text-base font-bold">{hoveredDest.name}</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                    <span className="font-mono text-xs text-white/70">{hoveredDest.rating}</span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-white/40">
                  <MapPin className="w-3 h-3" />
                  <span className="font-body text-xs">{hoveredDest.country}</span>
                </div>
              </div>
            </div>
          )}

          {/* Legend */}
          <div className="absolute bottom-4 left-4 glass rounded-xl p-3">
            <p className="font-mono text-xs text-white/30 tracking-widest mb-2">LEGEND</p>
            <div className="flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-sky-400" />
                <span className="font-body text-xs text-white/50">Destination</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <span className="font-body text-xs text-white/50">Favorite</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-6 h-0.5 bg-sky-400/40" style={{ background: 'repeating-linear-gradient(90deg, rgba(14,165,233,0.4) 0, rgba(14,165,233,0.4) 4px, transparent 4px, transparent 8px)' }} />
                <span className="font-body text-xs text-white/50">Route</span>
              </div>
            </div>
          </div>
        </div>

        {/* Destination list */}
        <div className="mt-10 reveal">
          <div className="flex items-center justify-between mb-6">
            <p className="section-label mb-0">All Destinations</p>
            <span className="font-mono text-xs text-white/25">{filtered.length} places</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {filtered.map((dest) => (
              <div key={dest.id} className="glass neon-border rounded-2xl overflow-hidden card-hover group">
                <div className="relative h-28">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 to-transparent" />
                  <button
                    onClick={() => toggleFav(dest.id)}
                    className="absolute top-2 right-2 w-7 h-7 glass rounded-full flex items-center justify-center"
                  >
                    <Heart className={`w-3.5 h-3.5 ${favorites.includes(dest.id) ? 'text-red-400 fill-red-400' : 'text-white/40'}`} />
                  </button>
                </div>
                <div className="p-3">
                  <h3 className="font-display text-sm font-bold mb-0.5">{dest.name}</h3>
                  <p className="font-body text-xs text-white/40 mb-2">{dest.country}</p>
                  <Link to={`/destination/${dest.id}`} className="flex items-center gap-1 font-body text-xs text-sky-400 hover:text-sky-300 transition-colors">
                    <Navigation className="w-3 h-3" /> Explore
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
