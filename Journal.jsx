import { useState } from 'react'
import { BookOpen, Plus, Heart, Camera, MapPin, Calendar, Grid, List } from 'lucide-react'

const JOURNAL_ENTRIES = [
  {
    id: 1,
    title: 'Lost in Shibuya at Midnight',
    location: 'Tokyo, Japan',
    date: 'Dec 2024',
    mood: 'Adventurous',
    moodEmoji: '⚡',
    image: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=800&q=80',
    caption: 'The crossing was alive with a thousand strangers who all somehow moved in perfect sync. I stood in the middle and let the world flow around me.',
    size: 'large',
    liked: true,
  },
  {
    id: 2,
    title: 'Sunrise at Senso-ji',
    location: 'Asakusa, Tokyo',
    date: 'Dec 2024',
    mood: 'Peaceful',
    moodEmoji: '🌿',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=600&q=80',
    caption: 'Before the crowds arrived, it was just me and a thousand years of history.',
    size: 'small',
    liked: false,
  },
  {
    id: 3,
    title: 'Blue Domes at Golden Hour',
    location: 'Oia, Santorini',
    date: 'Oct 2024',
    mood: 'Romantic',
    moodEmoji: '🌹',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=600&q=80',
    caption: 'Some sunsets change you. This was one of those.',
    size: 'medium',
    liked: true,
  },
  {
    id: 4,
    title: 'Tea Terrace Morning',
    location: 'Ubud, Bali',
    date: 'Sep 2024',
    mood: 'Dreamy',
    moodEmoji: '🌙',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=80',
    caption: 'Mist rising over the rice fields while I drank the best coffee of my life.',
    size: 'small',
    liked: false,
  },
  {
    id: 5,
    title: 'Dancing with the Sky',
    location: 'Tromsø, Norway',
    date: 'Jan 2024',
    mood: 'Spiritual',
    moodEmoji: '🕌',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    caption: 'I didn\'t know colors could move like that. The aurora borealis doesn\'t just light the sky — it transforms it.',
    size: 'large',
    liked: true,
  },
  {
    id: 6,
    title: 'Lost City in the Clouds',
    location: 'Machu Picchu, Peru',
    date: 'Aug 2024',
    mood: 'Adventurous',
    moodEmoji: '⚡',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=600&q=80',
    caption: 'After 4 hours of hiking, I understood why the Incas chose this place.',
    size: 'medium',
    liked: true,
  },
]

const SAVED_DESTINATIONS = [
  { name: 'Maldives', country: 'Indian Ocean', image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=200&q=80' },
  { name: 'Swiss Alps', country: 'Switzerland', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=80' },
  { name: 'Amalfi', country: 'Italy', image: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=200&q=80' },
]

export default function Journal() {
  const [entries, setEntries] = useState(JOURNAL_ENTRIES)
  const [viewMode, setViewMode] = useState('masonry')

  const toggleLike = (id) => {
    setEntries((prev) => prev.map((e) => e.id === id ? { ...e, liked: !e.liked } : e))
  }

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12 reveal">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="w-6 h-6 text-purple-400" />
            <p className="section-label mb-0">My Journal</p>
          </div>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h1 className="font-display text-5xl md:text-6xl font-black">
              Travel <span className="text-gradient italic">Memories</span>
            </h1>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setViewMode(viewMode === 'masonry' ? 'grid' : 'masonry')}
                className="glass neon-border rounded-full p-2.5 text-white/40 hover:text-sky-400 transition-colors"
              >
                {viewMode === 'masonry' ? <Grid className="w-4 h-4" /> : <List className="w-4 h-4" />}
              </button>
              <button className="btn-primary py-2.5 text-sm flex items-center gap-2">
                <span className="flex items-center gap-2"><Plus className="w-4 h-4" /> New Memory</span>
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6 reveal">
            {/* Profile */}
            <div className="glass neon-border rounded-2xl p-6 text-center">
              <div className="w-16 h-16 rounded-full mx-auto mb-3 overflow-hidden ring-2 ring-sky-400/30">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" alt="Profile" className="w-full h-full object-cover" />
              </div>
              <h3 className="font-display text-lg font-bold mb-1">Traveler</h3>
              <p className="font-body text-xs text-white/40 mb-4">World Explorer</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                {[
                  { value: '12', label: 'Trips' },
                  { value: '24', label: 'Countries' },
                  { value: '6', label: 'Journals' },
                ].map((stat) => (
                  <div key={stat.label} className="glass rounded-xl py-2">
                    <div className="font-display text-lg font-bold text-sky-400">{stat.value}</div>
                    <div className="font-mono text-xs text-white/30">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Saved Destinations */}
            <div className="glass neon-border rounded-2xl p-5">
              <p className="font-mono text-xs text-sky-400/70 tracking-widest uppercase mb-4">Saved</p>
              <div className="space-y-3">
                {SAVED_DESTINATIONS.map((dest) => (
                  <div key={dest.name} className="flex items-center gap-3">
                    <img src={dest.image} alt={dest.name} className="w-10 h-10 rounded-xl object-cover flex-shrink-0" />
                    <div>
                      <p className="font-body text-sm font-semibold">{dest.name}</p>
                      <p className="font-body text-xs text-white/40">{dest.country}</p>
                    </div>
                    <Heart className="w-4 h-4 text-red-400 fill-red-400 ml-auto flex-shrink-0" />
                  </div>
                ))}
              </div>
            </div>

            {/* Moods used */}
            <div className="glass neon-border rounded-2xl p-5">
              <p className="font-mono text-xs text-sky-400/70 tracking-widest uppercase mb-4">My Moods</p>
              <div className="flex flex-wrap gap-2">
                {['Adventurous ⚡', 'Peaceful 🌿', 'Romantic 🌹', 'Dreamy 🌙', 'Spiritual 🕌'].map((mood) => (
                  <span key={mood} className="glass px-3 py-1.5 rounded-full font-body text-xs text-white/60 border border-white/8">
                    {mood}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Masonry Grid */}
          <div className="lg:col-span-3 reveal">
            <div
              className={viewMode === 'masonry'
                ? 'columns-1 sm:columns-2 gap-5 space-y-5'
                : 'grid grid-cols-1 sm:grid-cols-2 gap-5'
              }
            >
              {entries.map((entry) => (
                <JournalCard key={entry.id} entry={entry} onLike={toggleLike} masonry={viewMode === 'masonry'} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function JournalCard({ entry, onLike, masonry }) {
  const height = masonry
    ? entry.size === 'large' ? '380px' : entry.size === 'medium' ? '280px' : '220px'
    : '280px'

  return (
    <div className={`group relative rounded-2xl overflow-hidden card-hover ${masonry ? 'break-inside-avoid mb-5' : ''}`} style={{ height }}>
      <img src={entry.image} alt={entry.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
      <div className="cinematic-overlay absolute inset-0" />

      {/* Mood tag */}
      <div className="absolute top-4 left-4 glass px-3 py-1 rounded-full border border-white/10">
        <span className="font-body text-xs text-white/70">{entry.moodEmoji} {entry.mood}</span>
      </div>

      {/* Like button */}
      <button
        onClick={() => onLike(entry.id)}
        className="absolute top-4 right-4 w-8 h-8 glass rounded-full flex items-center justify-center transition-all duration-300"
      >
        <Heart className={`w-4 h-4 ${entry.liked ? 'text-red-400 fill-red-400' : 'text-white/40'}`} />
      </button>

      {/* Content */}
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="font-display text-lg font-bold mb-1 leading-snug">{entry.title}</h3>
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-1.5 text-white/40">
            <MapPin className="w-3 h-3" />
            <span className="font-body text-xs">{entry.location}</span>
          </div>
          <div className="flex items-center gap-1.5 text-white/30">
            <Calendar className="w-3 h-3" />
            <span className="font-body text-xs">{entry.date}</span>
          </div>
        </div>
        {entry.size !== 'small' && (
          <p className="font-body text-xs text-white/50 italic leading-relaxed line-clamp-2">"{entry.caption}"</p>
        )}
      </div>
    </div>
  )
}
