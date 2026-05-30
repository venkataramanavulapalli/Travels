import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

const MOODS = [
  {
    id: 'peaceful',
    label: 'Peaceful',
    emoji: '🌿',
    desc: 'Still waters. Quiet mornings. Nature breathing.',
    color: 'from-emerald-500/20 to-teal-500/10',
    glow: 'rgba(16,185,129,0.5)',
    border: 'border-emerald-500/30',
    destinations: ['Bali', 'Kyoto', 'Northern Lights'],
    bg: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
  },
  {
    id: 'adventurous',
    label: 'Adventurous',
    emoji: '⚡',
    desc: 'Wild hearts. Uncharted trails. Pure adrenaline.',
    color: 'from-amber-500/20 to-orange-500/10',
    glow: 'rgba(245,158,11,0.5)',
    border: 'border-amber-500/30',
    destinations: ['Patagonia', 'Queenstown', 'Nepal'],
    bg: 'https://images.unsplash.com/photo-1508193638397-1c4234db14d8?w=800&q=80',
  },
  {
    id: 'romantic',
    label: 'Romantic',
    emoji: '🌹',
    desc: 'Golden sunsets. Cobblestone streets. Stolen moments.',
    color: 'from-rose-500/20 to-pink-500/10',
    glow: 'rgba(244,63,94,0.5)',
    border: 'border-rose-500/30',
    destinations: ['Santorini', 'Paris', 'Venice'],
    bg: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
  },
  {
    id: 'dreamy',
    label: 'Dreamy',
    emoji: '🌙',
    desc: 'Surreal beauty. Moonlit waters. Living a poem.',
    color: 'from-violet-500/20 to-purple-500/10',
    glow: 'rgba(139,92,246,0.5)',
    border: 'border-violet-500/30',
    destinations: ['Maldives', 'Iceland', 'Northern Norway'],
    bg: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
  },
  {
    id: 'lonely',
    label: 'Solitude',
    emoji: '🌊',
    desc: 'Just you and the horizon. Beautiful emptiness.',
    color: 'from-slate-500/20 to-blue-500/10',
    glow: 'rgba(100,116,139,0.5)',
    border: 'border-slate-500/30',
    destinations: ['Faroe Islands', 'Mongolia', 'Antarctica'],
    bg: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80',
  },
  {
    id: 'spiritual',
    label: 'Spiritual',
    emoji: '🕌',
    desc: 'Ancient temples. Sacred energy. Soul searching.',
    color: 'from-yellow-500/20 to-amber-500/10',
    glow: 'rgba(234,179,8,0.5)',
    border: 'border-yellow-500/30',
    destinations: ['Varanasi', 'Kyoto', 'Machu Picchu'],
    bg: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
  },
  {
    id: 'luxury',
    label: 'Luxury',
    emoji: '✨',
    desc: 'Overwater villas. Private chefs. Pure indulgence.',
    color: 'from-sky-500/20 to-blue-500/10',
    glow: 'rgba(14,165,233,0.5)',
    border: 'border-sky-500/30',
    destinations: ['Maldives', 'Dubai', 'Amalfi Coast'],
    bg: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
  },
  {
    id: 'cyberpunk',
    label: 'Cyberpunk',
    emoji: '🌆',
    desc: 'Neon nights. Digital dreams. Vertical cities.',
    color: 'from-cyan-500/20 to-indigo-500/10',
    glow: 'rgba(6,182,212,0.5)',
    border: 'border-cyan-500/30',
    destinations: ['Tokyo', 'Hong Kong', 'Seoul'],
    bg: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
  },
]

export default function Mood() {
  const [hoveredMood, setHoveredMood] = useState(null)
  const [selectedMood, setSelectedMood] = useState(null)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const pts = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 4 + 1}px`,
      duration: `${Math.random() * 20 + 10}s`,
      delay: `${Math.random() * 15}s`,
    }))
    setParticles(pts)
  }, [])

  const activeMood = selectedMood || hoveredMood

  return (
    <div className="pt-24 min-h-screen relative overflow-hidden">
      {/* Dynamic background */}
      <div
        className="fixed inset-0 transition-all duration-1000 pointer-events-none z-0"
        style={{
          background: activeMood
            ? `radial-gradient(ellipse at center, ${activeMood.glow.replace('0.5', '0.08')} 0%, transparent 70%)`
            : 'transparent',
        }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            animationDuration: p.duration,
            animationDelay: p.delay,
            background: activeMood ? activeMood.glow.replace('0.5', '0.4') : 'rgba(14,165,233,0.4)',
          }}
        />
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <p className="section-label text-center mb-4">Emotional Discovery</p>
          <h1 className="font-display text-5xl md:text-7xl xl:text-8xl font-black leading-tight mb-6">
            How do you want
            <br />
            to <span className="text-gradient italic">feel?</span>
          </h1>
          <p className="font-body text-white/50 text-lg max-w-lg mx-auto">
            Every destination carries an emotion. Choose yours and we'll find the perfect match.
          </p>
        </div>

        {/* Mood Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 reveal">
          {MOODS.map((mood) => (
            <button
              key={mood.id}
              onClick={() => setSelectedMood(selectedMood?.id === mood.id ? null : mood)}
              onMouseEnter={() => setHoveredMood(mood)}
              onMouseLeave={() => setHoveredMood(null)}
              className={`group relative rounded-3xl p-6 text-left transition-all duration-500 border ${mood.border} bg-gradient-to-br ${mood.color} overflow-hidden ${
                selectedMood?.id === mood.id ? 'scale-105' : 'hover:scale-105'
              }`}
              style={{
                boxShadow: hoveredMood?.id === mood.id || selectedMood?.id === mood.id
                  ? `0 0 40px ${mood.glow.replace('0.5', '0.3')}, 0 0 80px ${mood.glow.replace('0.5', '0.1')}`
                  : 'none',
              }}
            >
              {/* Background image on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                style={{
                  backgroundImage: `url(${mood.bg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />

              <div className="relative z-10">
                <div className="text-4xl mb-4">{mood.emoji}</div>
                <h3 className="font-display text-xl font-bold mb-2">{mood.label}</h3>
                <p className="font-body text-xs text-white/50 leading-relaxed">{mood.desc}</p>

                {selectedMood?.id === mood.id && (
                  <div className="mt-4 flex items-center gap-1.5 font-mono text-xs text-sky-400">
                    Selected <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Matching destinations panel */}
        {activeMood && (
          <div className="reveal">
            <div className={`glass border ${activeMood.border} rounded-3xl p-8 relative overflow-hidden`}
              style={{ animation: 'fadeUp 0.4s ease' }}>
              <div
                className="absolute inset-0 opacity-5"
                style={{ backgroundImage: `url(${activeMood.bg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
              />
              <div className="relative z-10">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
                  <div>
                    <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: activeMood.glow }}>
                      {activeMood.emoji} {activeMood.label} Escapes
                    </p>
                    <h2 className="font-display text-3xl font-bold">
                      Perfect matches for your soul
                    </h2>
                  </div>
                  <Link to="/explore" className="btn-primary text-sm">
                    <span className="flex items-center gap-2">See All <ArrowRight className="w-4 h-4" /></span>
                  </Link>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                  {activeMood.destinations.map((dest) => (
                    <div key={dest} className={`glass border ${activeMood.border} rounded-2xl p-5 card-hover`}>
                      <div className="text-2xl mb-3">{activeMood.emoji}</div>
                      <h3 className="font-display text-xl font-bold mb-1">{dest}</h3>
                      <p className="font-body text-xs text-white/40 mb-4">Curated for {activeMood.label.toLowerCase()} travelers</p>
                      <Link to="/explore" className="flex items-center gap-1.5 font-body text-xs font-semibold transition-colors"
                        style={{ color: activeMood.glow }}>
                        Explore <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  ))}
                </div>

                <div className="mt-8 text-center">
                  <Link to="/planner" className="btn-outline text-sm inline-block">
                    Plan a {activeMood.label} Trip with AI
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
