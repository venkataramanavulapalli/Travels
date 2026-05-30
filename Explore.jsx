import { useState, useMemo } from 'react'
import { Search, SlidersHorizontal, Star, MapPin, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const ALL_DESTINATIONS = [
  { id: 'tokyo', name: 'Tokyo', country: 'Japan', category: 'Cyberpunk Cities', rating: 4.9, desc: 'Where neon dreams meet ancient temples in the world\'s most electric city.', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80' },
  { id: 'maldives', name: 'Maldives', country: 'Indian Ocean', category: 'Beaches', rating: 5.0, desc: 'Overwater bungalows above impossibly turquoise lagoons.', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80' },
  { id: 'machu-picchu', name: 'Machu Picchu', country: 'Peru', category: 'Historical', rating: 4.8, desc: 'The lost Incan city perched high in the Andean clouds.', image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80' },
  { id: 'santorini', name: 'Santorini', country: 'Greece', category: 'Luxury', rating: 4.9, desc: 'Infinite blue domes and white-washed walls above the Aegean.', image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80' },
  { id: 'aurora', name: 'Northern Lights', country: 'Iceland', category: 'Nature', rating: 5.0, desc: 'The most spectacular light show on Earth dances overhead.', image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80' },
  { id: 'swiss-alps', name: 'Swiss Alps', country: 'Switzerland', category: 'Snow', rating: 4.8, desc: 'Pristine peaks and chocolate-box villages in perfect harmony.', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80' },
  { id: 'dubai', name: 'Dubai', country: 'UAE', category: 'Luxury', rating: 4.7, desc: 'A desert jewel reaching for the sky with impossible ambition.', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80' },
  { id: 'bali', name: 'Bali', country: 'Indonesia', category: 'Nature', rating: 4.8, desc: 'Island of gods, rice terraces, and infinite spiritual energy.', image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80' },
  { id: 'patagonia', name: 'Patagonia', country: 'Argentina', category: 'Adventure', rating: 4.9, desc: 'Wild, untamed landscapes at the edge of the world.', image: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80' },
  { id: 'amalfi', name: 'Amalfi Coast', country: 'Italy', category: 'Luxury', rating: 4.8, desc: 'Cliffside villages tumbling into sapphire Mediterranean waters.', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80' },
  { id: 'kyoto', name: 'Kyoto', country: 'Japan', category: 'Historical', rating: 4.9, desc: 'A thousand temples and geisha streets frozen in timeless grace.', image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800&q=80' },
  { id: 'rio', name: 'Rio de Janeiro', country: 'Brazil', category: 'Beaches', rating: 4.7, desc: 'Where Christ watches over carnival, beaches and rainforest.', image: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80' },
]

const CATEGORIES = ['All', 'Nature', 'Snow', 'Beaches', 'Cyberpunk Cities', 'Historical', 'Luxury', 'Adventure']

export default function Explore() {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
  const [sortBy, setSortBy] = useState('rating')

  const filtered = useMemo(() => {
    return ALL_DESTINATIONS
      .filter((d) => {
        const matchCat = activeCategory === 'All' || d.category === activeCategory
        const matchQuery = d.name.toLowerCase().includes(query.toLowerCase()) ||
          d.country.toLowerCase().includes(query.toLowerCase())
        return matchCat && matchQuery
      })
      .sort((a, b) => sortBy === 'rating' ? b.rating - a.rating : a.name.localeCompare(b.name))
  }, [query, activeCategory, sortBy])

  return (
    <div className="pt-24 min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="reveal">
          <p className="section-label">Browse destinations</p>
          <h1 className="font-display text-5xl md:text-6xl font-black mb-4">
            Explore the <span className="text-gradient italic">World</span>
          </h1>
          <p className="font-body text-white/50 text-lg max-w-xl">
            {ALL_DESTINATIONS.length} breathtaking destinations waiting to be discovered.
          </p>
        </div>

        {/* Search + Sort */}
        <div className="flex flex-col sm:flex-row gap-4 mt-10 reveal">
          <div className="flex-1 glass neon-border rounded-2xl px-5 py-3.5 flex items-center gap-3">
            <Search className="w-5 h-5 text-white/30 flex-shrink-0" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search destinations or countries..."
              className="bg-transparent font-body text-sm text-white/80 placeholder-white/25 outline-none flex-1"
            />
          </div>
          <div className="glass neon-border rounded-2xl px-5 py-3.5 flex items-center gap-3">
            <SlidersHorizontal className="w-4 h-4 text-white/40" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-transparent font-body text-sm text-white/70 outline-none cursor-pointer"
            >
              <option value="rating" className="bg-[#060d1f]">Sort: Top Rated</option>
              <option value="name" className="bg-[#060d1f]">Sort: A–Z</option>
            </select>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex gap-3 mt-6 overflow-x-auto pb-2 reveal" style={{ scrollbarWidth: 'none' }}>
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex-shrink-0 px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                cat === activeCategory
                  ? 'bg-sky-500 text-white shadow-lg'
                  : 'glass neon-border text-white/60 hover:text-white hover:border-sky-400/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <p className="font-mono text-xs text-white/30 tracking-widest">
          {filtered.length} DESTINATIONS FOUND
        </p>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 pb-20">
        {filtered.length === 0 ? (
          <div className="text-center py-32">
            <p className="font-display text-2xl text-white/30 mb-3">No destinations found</p>
            <p className="font-body text-sm text-white/20">Try a different search or category</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((dest, i) => (
              <ExploreCard key={dest.id} dest={dest} index={i} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function ExploreCard({ dest, index }) {
  return (
    <div
      className="group relative rounded-2xl overflow-hidden card-hover reveal"
      style={{ animationDelay: `${index * 60}ms`, height: '380px' }}
    >
      <img
        src={dest.image}
        alt={dest.name}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="cinematic-overlay absolute inset-0" />

      {/* Category tag */}
      <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full border border-white/10">
        <span className="font-mono text-xs text-white/60 tracking-widest uppercase">{dest.category}</span>
      </div>

      {/* Rating */}
      <div className="absolute top-4 right-4 glass px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
        <span className="font-mono text-xs text-white/80">{dest.rating}</span>
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-display text-xl font-bold text-white mb-1">{dest.name}</h3>
        <div className="flex items-center gap-1.5 text-white/50 mb-3">
          <MapPin className="w-3 h-3" />
          <span className="font-body text-xs">{dest.country}</span>
        </div>
        <p className="font-body text-xs text-white/50 leading-relaxed mb-4 line-clamp-2">{dest.desc}</p>

        <Link
          to={`/destination/${dest.id}`}
          className="flex items-center gap-2 glass neon-border rounded-full px-4 py-2 w-fit text-xs font-body font-semibold text-sky-400 hover:bg-sky-500/20 transition-all duration-300"
        >
          Explore <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Hover border */}
      <div className="absolute inset-0 border border-transparent group-hover:border-sky-400/20 rounded-2xl transition-all duration-500" />
    </div>
  )
}
