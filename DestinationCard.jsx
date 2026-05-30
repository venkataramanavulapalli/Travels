import { Link } from 'react-router-dom'
import { Star, MapPin, ArrowUpRight } from 'lucide-react'

export default function DestinationCard({ destination, variant = 'default' }) {
  const {
    id = 'tokyo',
    name = 'Tokyo',
    country = 'Japan',
    category = 'City',
    rating = 4.9,
    subtitle = 'Where tradition meets neon-lit future',
    image = 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    tag,
  } = destination || {}

  if (variant === 'wide') {
    return (
      <Link
        to={`/destination/${id}`}
        className="group relative flex-shrink-0 w-72 md:w-80 rounded-3xl overflow-hidden card-hover cursor-pointer"
        style={{ height: '420px' }}
      >
        <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
        <div className="cinematic-overlay absolute inset-0" />
        {tag && (
          <div className="absolute top-4 left-4 glass neon-border px-3 py-1 rounded-full">
            <span className="font-mono text-xs text-sky-400 tracking-widest uppercase">{tag}</span>
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center gap-1.5 mb-2">
            <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
            <span className="font-mono text-xs text-white/80">{rating}</span>
            <span className="text-white/30 text-xs ml-1">· {category}</span>
          </div>
          <h3 className="font-display text-2xl font-bold text-white mb-1">{name}</h3>
          <p className="font-body text-xs text-white/50 mb-3">{subtitle}</p>
          <div className="flex items-center gap-1.5 text-white/40">
            <MapPin className="w-3.5 h-3.5" />
            <span className="font-body text-xs">{country}</span>
          </div>
        </div>
        <div className="absolute top-4 right-4 w-8 h-8 glass neon-border rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
          <ArrowUpRight className="w-4 h-4 text-sky-400" />
        </div>
      </Link>
    )
  }

  return (
    <Link
      to={`/destination/${id}`}
      className="group relative rounded-2xl overflow-hidden card-hover cursor-pointer block"
      style={{ height: '320px' }}
    >
      <img src={image} alt={name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
      <div className="cinematic-overlay absolute inset-0" />
      {tag && (
        <div className="absolute top-4 left-4 glass neon-border px-3 py-1 rounded-full">
          <span className="font-mono text-xs text-sky-400 tracking-widest uppercase">{tag}</span>
        </div>
      )}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <div className="flex items-center gap-1.5 mb-1.5">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span className="font-mono text-xs text-white/80">{rating}</span>
        </div>
        <h3 className="font-display text-xl font-bold text-white mb-0.5">{name}</h3>
        <div className="flex items-center gap-1.5 text-white/40">
          <MapPin className="w-3 h-3" />
          <span className="font-body text-xs">{country}</span>
        </div>
      </div>
      <div className="absolute inset-0 border border-transparent group-hover:border-sky-400/20 rounded-2xl transition-all duration-500" />
    </Link>
  )
}
