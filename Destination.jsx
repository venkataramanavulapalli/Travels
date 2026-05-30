import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import {
  Star, MapPin, Clock, DollarSign, Sun, Cloud, Thermometer,
  Camera, Utensils, Train, Heart, Share2, ArrowLeft, ChevronRight
} from 'lucide-react'

const DESTINATIONS_DATA = {
  tokyo: {
    name: 'Tokyo',
    country: 'Japan',
    tagline: 'Where neon dreams meet ancient souls',
    rating: 4.9,
    reviews: 12840,
    heroImage: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1600&q=90',
    nightImage: 'https://images.unsplash.com/photo-1536098561742-ca998e48cbcc?w=1600&q=90',
    category: 'Cyberpunk City',
    bestSeason: 'March – May & Oct – Nov',
    budget: { low: '$60', mid: '$150', luxury: '$400+' },
    weather: { temp: '14°C', condition: 'Partly Cloudy', humidity: '68%' },
    description: 'Tokyo is the world\'s most dazzling metropolis — a place where ancient Shinto shrines stand beside neon-lit skyscrapers, where the world\'s best sushi costs $5 at a train station, and where you can lose yourself in a video game arcade until 4 AM. It is simultaneously the most futuristic and most traditionally Japanese city on Earth.',
    gallery: [
      'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?w=600&q=80',
      'https://images.unsplash.com/photo-1547981609-4b6bfe67ca0b?w=600&q=80',
      'https://images.unsplash.com/photo-1555400038-63f5ba517a47?w=600&q=80',
      'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=600&q=80',
      'https://images.unsplash.com/photo-1551641506-ee5bf4cb45f1?w=600&q=80',
      'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600&q=80',
    ],
    attractions: [
      { name: 'Shibuya Crossing', type: 'Landmark', time: '1–2 hrs', icon: '🚦' },
      { name: 'Senso-ji Temple', type: 'Cultural', time: '2–3 hrs', icon: '⛩️' },
      { name: 'Shinjuku Gyoen', type: 'Nature', time: '2 hrs', icon: '🌸' },
      { name: 'teamLab Planets', type: 'Experience', time: '2–3 hrs', icon: '✨' },
      { name: 'Akihabara District', type: 'Shopping', time: '3–4 hrs', icon: '🎮' },
      { name: 'Tsukiji Outer Market', type: 'Food', time: '1–2 hrs', icon: '🍣' },
    ],
    itinerary: [
      { day: 1, title: 'Arrival & Shinjuku Night', places: ['Hotel check-in', 'Shinjuku Gyoen', 'Kabukicho neon streets', 'Rooftop bar'] },
      { day: 2, title: 'Traditional Tokyo', places: ['Senso-ji Temple', 'Asakusa market', 'Ueno Park', 'Akihabara evening'] },
      { day: 3, title: 'Modern & Futuristic', places: ['teamLab Planets', 'Shibuya Crossing', 'Harajuku', 'Roppongi art night'] },
      { day: 4, title: 'Food & Farewell', places: ['Tsukiji breakfast', 'Ginza shopping', 'Mount Fuji day trip', 'Farewell dinner'] },
    ],
    tips: [
      'Get a Suica IC card for seamless metro travel',
      'Carry cash — many small shops don\'t accept cards',
      'Book teamLab and popular restaurants weeks ahead',
      'Learn 5 Japanese phrases — locals will love you for it',
      'Visit konbini (convenience stores) for amazing cheap meals',
    ],
  },
  santorini: {
    name: 'Santorini',
    country: 'Greece',
    tagline: 'Infinite blue domes above the Aegean sea',
    rating: 4.9,
    reviews: 9210,
    heroImage: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1600&q=90',
    nightImage: 'https://images.unsplash.com/photo-1601581875309-fafbf2d3ed3a?w=1600&q=90',
    category: 'Luxury Island',
    bestSeason: 'April – October',
    budget: { low: '$80', mid: '$200', luxury: '$600+' },
    weather: { temp: '24°C', condition: 'Sunny', humidity: '55%' },
    description: 'Santorini is the jewel of the Cyclades — a crescent-shaped island forged by a volcanic eruption, adorned with white-washed buildings and iconic blue domes that cascade down cliffsides into the caldera below. Sunsets here are considered among the most beautiful on Earth.',
    gallery: [
      'https://images.unsplash.com/photo-1601581875039-e899893d520c?w=600&q=80',
      'https://images.unsplash.com/photo-1533104816931-20fa691ff6ca?w=600&q=80',
      'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?w=600&q=80',
      'https://images.unsplash.com/photo-1504512485720-7d83a16ee930?w=600&q=80',
    ],
    attractions: [
      { name: 'Oia Village', type: 'Scenic', time: '3–4 hrs', icon: '🏛️' },
      { name: 'Caldera View', type: 'Landmark', time: '1 hr', icon: '🌊' },
      { name: 'Red Beach', type: 'Nature', time: '2 hrs', icon: '🏖️' },
      { name: 'Wine Tasting', type: 'Food', time: '2–3 hrs', icon: '🍷' },
    ],
    itinerary: [
      { day: 1, title: 'Fira & Sunset Views', places: ['Fira exploration', 'Caldera walk', 'Sunset cocktails'] },
      { day: 2, title: 'Oia Magic', places: ['Morning hike to Oia', 'Blue dome photography', 'Famous Oia sunset'] },
      { day: 3, title: 'Beach & Wine', places: ['Red Beach', 'Akrotiri ruins', 'Wine tasting tour'] },
    ],
    tips: [
      'Book sunset-facing rooms months in advance',
      'Visit Oia early morning to avoid crowds',
      'Rent an ATV to explore the island freely',
      'Try local Assyrtiko wine — it\'s world-class',
    ],
  },
}

const DEFAULT_DEST = DESTINATIONS_DATA.tokyo

const tabs = ['Explore', 'Gallery', 'Things To Do', 'Itinerary', 'Travel Tips']

export default function Destination() {
  const { id } = useParams()
  const dest = DESTINATIONS_DATA[id] || DEFAULT_DEST
  const [activeTab, setActiveTab] = useState('Explore')
  const [isNight, setIsNight] = useState(false)
  const [liked, setLiked] = useState(false)

  return (
    <div className="min-h-screen">
      {/* ── CINEMATIC HERO ── */}
      <section className="relative h-screen overflow-hidden">
        <img
          src={isNight ? dest.nightImage : dest.heroImage}
          alt={dest.name}
          className="w-full h-full object-cover transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-[#030712]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#030712]/50 to-transparent" />

        {/* Back button */}
        <Link
          to="/explore"
          className="absolute top-24 left-6 glass neon-border rounded-full px-4 py-2 flex items-center gap-2 font-body text-sm text-white/70 hover:text-white transition-all duration-300 z-10"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Explore
        </Link>

        {/* Day / Night toggle */}
        <button
          onClick={() => setIsNight(!isNight)}
          className="absolute top-24 right-6 glass neon-border rounded-full px-5 py-2 font-mono text-xs tracking-widest text-white/60 hover:text-white transition-all duration-300 z-10"
        >
          {isNight ? '☀️  Day Mode' : '🌙  Night Mode'}
        </button>

        {/* Hero content */}
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-20 z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="glass neon-border px-3 py-1 rounded-full font-mono text-xs text-sky-400 tracking-widest uppercase">
                {dest.category}
              </span>
              <div className="flex items-center gap-1.5">
                <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                <span className="font-mono text-sm text-white/80">{dest.rating}</span>
                <span className="font-body text-sm text-white/40">({dest.reviews.toLocaleString()} reviews)</span>
              </div>
            </div>
            <h1 className="font-display text-6xl md:text-8xl font-black leading-none mb-3">{dest.name}</h1>
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="w-4 h-4 text-sky-400" />
              <span className="font-body text-white/60">{dest.country}</span>
            </div>
            <p className="font-display text-xl italic text-white/60 max-w-lg">{dest.tagline}</p>
          </div>
        </div>

        {/* Action buttons */}
        <div className="absolute bottom-20 right-6 md:right-16 flex flex-col gap-3 z-10">
          <button
            onClick={() => setLiked(!liked)}
            className={`w-12 h-12 rounded-full glass neon-border flex items-center justify-center transition-all duration-300 ${liked ? 'text-red-400 border-red-400/40' : 'text-white/40 hover:text-red-400'}`}
          >
            <Heart className={`w-5 h-5 ${liked ? 'fill-red-400' : ''}`} />
          </button>
          <button className="w-12 h-12 rounded-full glass neon-border flex items-center justify-center text-white/40 hover:text-sky-400 transition-all duration-300">
            <Share2 className="w-5 h-5" />
          </button>
          <button className="w-12 h-12 rounded-full glass neon-border flex items-center justify-center text-white/40 hover:text-sky-400 transition-all duration-300">
            <Camera className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* ── INFO STRIP ── */}
      <div className="sticky top-16 z-30 glass border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-6 py-4 overflow-x-auto" style={{ scrollbarWidth: 'none' }}>
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-shrink-0 font-body text-sm font-medium transition-all duration-300 pb-1 border-b-2 ${
                  activeTab === tab
                    ? 'text-sky-400 border-sky-400'
                    : 'text-white/40 border-transparent hover:text-white/70'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTENT SECTIONS ── */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Quick stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 reveal">
          {[
            { icon: Sun, label: 'Best Season', value: dest.bestSeason, color: 'text-amber-400' },
            { icon: Thermometer, label: 'Temperature', value: dest.weather.temp, color: 'text-sky-400' },
            { icon: Cloud, label: 'Condition', value: dest.weather.condition, color: 'text-blue-400' },
            { icon: DollarSign, label: 'Budget/Day', value: `${dest.budget.low} – ${dest.budget.luxury}`, color: 'text-emerald-400' },
          ].map(({ icon: Icon, label, value, color }) => (
            <div key={label} className="glass neon-border rounded-2xl p-5">
              <Icon className={`w-5 h-5 ${color} mb-3`} />
              <p className="font-mono text-xs text-white/30 tracking-widest uppercase mb-1">{label}</p>
              <p className="font-body text-sm font-semibold text-white">{value}</p>
            </div>
          ))}
        </div>

        {/* Description */}
        {(activeTab === 'Explore') && (
          <div className="reveal">
            <p className="section-label">About</p>
            <h2 className="font-display text-3xl font-bold mb-6">The <span className="text-gradient italic">Experience</span></h2>
            <p className="font-body text-white/60 leading-relaxed text-base max-w-3xl mb-16">{dest.description}</p>

            {/* Budget breakdown */}
            <p className="section-label mb-6">Budget Guide</p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-16">
              {[
                { tier: 'Budget', price: dest.budget.low, desc: 'Hostels, street food, local transport', color: 'from-emerald-500/20 to-teal-500/10' },
                { tier: 'Mid-Range', price: dest.budget.mid, desc: 'Hotels, restaurants, day tours', color: 'from-sky-500/20 to-blue-500/10' },
                { tier: 'Luxury', price: dest.budget.luxury, desc: 'Premium hotels, fine dining, private tours', color: 'from-purple-500/20 to-pink-500/10' },
              ].map((b) => (
                <div key={b.tier} className={`glass neon-border rounded-2xl p-6 bg-gradient-to-br ${b.color}`}>
                  <p className="font-mono text-xs text-white/40 tracking-widest uppercase mb-2">{b.tier}</p>
                  <p className="font-display text-2xl font-bold mb-2">{b.price}<span className="font-body text-sm text-white/40 font-normal">/day</span></p>
                  <p className="font-body text-xs text-white/50">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Gallery */}
        {activeTab === 'Gallery' && (
          <div className="reveal">
            <p className="section-label">Visual Journey</p>
            <h2 className="font-display text-3xl font-bold mb-8">Photo <span className="text-gradient italic">Gallery</span></h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {dest.gallery.map((img, i) => (
                <div
                  key={i}
                  className={`rounded-2xl overflow-hidden card-hover ${i === 0 ? 'col-span-2 row-span-2' : ''}`}
                  style={{ height: i === 0 ? '400px' : '190px' }}
                >
                  <img src={img} alt={`${dest.name} ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Things To Do */}
        {activeTab === 'Things To Do' && (
          <div className="reveal">
            <p className="section-label">Attractions</p>
            <h2 className="font-display text-3xl font-bold mb-8">Must-See <span className="text-gradient italic">Places</span></h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {dest.attractions.map((attr) => (
                <div key={attr.name} className="glass neon-border rounded-2xl p-6 card-hover">
                  <div className="text-3xl mb-4">{attr.icon}</div>
                  <h3 className="font-display text-lg font-bold mb-1">{attr.name}</h3>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="glass px-2.5 py-0.5 rounded-full font-mono text-xs text-sky-400 border border-sky-400/20">{attr.type}</span>
                    <div className="flex items-center gap-1 text-white/40">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="font-body text-xs">{attr.time}</span>
                    </div>
                  </div>
                  <button className="flex items-center gap-1.5 font-body text-xs text-sky-400 hover:text-sky-300 transition-colors">
                    Learn more <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Itinerary */}
        {activeTab === 'Itinerary' && (
          <div className="reveal">
            <p className="section-label">Day by Day</p>
            <h2 className="font-display text-3xl font-bold mb-8">Your <span className="text-gradient italic">Journey</span></h2>
            <div className="relative">
              <div className="absolute left-6 top-0 bottom-0 w-px bg-sky-400/20" />
              <div className="space-y-8">
                {dest.itinerary.map((day) => (
                  <div key={day.day} className="relative pl-16">
                    <div className="absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center border border-sky-400/30 bg-sky-500/10">
                      <span className="font-mono text-sm text-sky-400 font-bold">{day.day}</span>
                    </div>
                    <div className="glass neon-border rounded-2xl p-6">
                      <h3 className="font-display text-xl font-bold mb-4">{day.title}</h3>
                      <div className="flex flex-wrap gap-2">
                        {day.places.map((place) => (
                          <span key={place} className="glass px-3 py-1.5 rounded-full font-body text-xs text-white/70 border border-white/8">
                            {place}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Travel Tips */}
        {activeTab === 'Travel Tips' && (
          <div className="reveal">
            <p className="section-label">Insider Knowledge</p>
            <h2 className="font-display text-3xl font-bold mb-8">Pro <span className="text-gradient italic">Tips</span></h2>
            <div className="space-y-4 max-w-2xl">
              {dest.tips.map((tip, i) => (
                <div key={i} className="glass neon-border rounded-2xl p-5 flex items-start gap-4 card-hover">
                  <div className="w-8 h-8 rounded-full bg-sky-500/20 border border-sky-400/30 flex items-center justify-center flex-shrink-0">
                    <span className="font-mono text-xs text-sky-400">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <p className="font-body text-sm text-white/70 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Nearby / Plan CTA */}
        <div className="mt-20 glass neon-border rounded-3xl p-10 text-center relative overflow-hidden reveal">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-purple-500/5" />
          <div className="relative z-10">
            <p className="section-label text-center mb-3">Ready?</p>
            <h2 className="font-display text-3xl font-bold mb-4">Plan your trip to <span className="text-gradient italic">{dest.name}</span></h2>
            <p className="font-body text-white/50 mb-8 max-w-md mx-auto">Let our AI create a personalized itinerary based on your budget, mood, and travel style.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/planner" className="btn-primary"><span>Plan with AI</span></Link>
              <Link to="/explore" className="btn-outline">Browse More</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
