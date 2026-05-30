import { useState } from 'react'
import { Sparkles, DollarSign, Calendar, Users, Zap, MapPin, Clock, ChevronDown } from 'lucide-react'

const TRAVEL_STYLES = ['Relaxed', 'Adventure', 'Cultural', 'Party', 'Romance', 'Solo']
const TRAVELER_TYPES = ['Solo', 'Couple', 'Family', 'Friends Group', 'Business']
const MOODS = ['Peaceful 🌿', 'Adventurous 🏔️', 'Romantic 🌹', 'Dreamy 🌙', 'Spiritual 🕌', 'Luxury ✨', 'Cyberpunk 🌆']

const SAMPLE_ITINERARIES = {
  peaceful: [
    { day: 1, title: 'Arrival in Bali', icon: '✈️', places: ['Airport transfer', 'Ubud resort check-in', 'Sunset rice terrace walk', 'Organic dinner'] },
    { day: 2, title: 'Temple & Healing', icon: '⛩️', places: ['Tirta Empul water temple', 'Traditional massage', 'Cooking class', 'Night meditation'] },
    { day: 3, title: 'Nature Immersion', icon: '🌿', places: ['Mount Batur sunrise trek', 'Tegalalang rice terraces', 'Jungle swing', 'Candle-lit farewell dinner'] },
  ],
  adventure: [
    { day: 1, title: 'Touch Down in Queenstown', icon: '🏔️', places: ['Arrival & briefing', 'Bungee jump Kawarau Bridge', 'Skyline gondola', 'Steakhouse dinner'] },
    { day: 2, title: 'Extreme Thrills', icon: '⚡', places: ['Skydive over Remarkables', 'Jet boat Shotover River', 'Mountain biking', 'Recovery hot spring'] },
    { day: 3, title: 'Milford Sound', icon: '🚤', places: ['Scenic helicopter ride', 'Milford Sound cruise', 'Kayaking', 'Lake Wakatipu sunset'] },
  ],
  luxury: [
    { day: 1, title: 'Maldives Arrival', icon: '🛥️', places: ['Private seaplane transfer', 'Overwater villa check-in', 'Champagne sunset cruise', 'Underwater restaurant dinner'] },
    { day: 2, title: 'Ocean Paradise', icon: '🐠', places: ['Private snorkel reef tour', 'Couples spa', 'Private beach picnic', 'Stargazing deck'] },
    { day: 3, title: 'Exclusive Experiences', icon: '💎', places: ['Private island breakfast', 'Dolphin cruise', 'Chef\'s table dinner', 'Night swimming with bioluminescence'] },
  ],
}

export default function Planner() {
  const [budget, setBudget] = useState(2000)
  const [duration, setDuration] = useState(5)
  const [style, setStyle] = useState('Relaxed')
  const [travelerType, setTravelerType] = useState('Solo')
  const [adventureLevel, setAdventureLevel] = useState(50)
  const [mood, setMood] = useState('Peaceful 🌿')
  const [generated, setGenerated] = useState(false)
  const [loading, setLoading] = useState(false)

  const itineraryKey = mood.includes('Peaceful') ? 'peaceful' : mood.includes('Adventure') ? 'adventure' : 'luxury'
  const itinerary = SAMPLE_ITINERARIES[itineraryKey]

  const handleGenerate = () => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setGenerated(true)
    }, 2200)
  }

  return (
    <div className="pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-12 reveal">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-purple-500 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <p className="section-label mb-0">Powered by AI</p>
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-black mb-3">
            AI Trip <span className="text-gradient italic">Planner</span>
          </h1>
          <p className="font-body text-white/50 text-lg">Tell us what you want. We'll craft your perfect journey.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* ── LEFT INPUT PANEL ── */}
          <div className="lg:col-span-2 space-y-6 reveal">
            {/* Budget */}
            <div className="glass neon-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <DollarSign className="w-4 h-4 text-emerald-400" />
                <p className="font-mono text-xs text-white/50 tracking-widest uppercase">Total Budget</p>
              </div>
              <div className="flex items-end justify-between mb-3">
                <span className="font-display text-3xl font-bold text-white">${budget.toLocaleString()}</span>
                <span className="font-body text-xs text-white/30">per person</span>
              </div>
              <input
                type="range"
                min={500}
                max={10000}
                step={100}
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-1.5 rounded-full appearance-none cursor-pointer"
                style={{ background: `linear-gradient(to right, #0ea5e9 0%, #0ea5e9 ${((budget - 500) / 9500) * 100}%, rgba(255,255,255,0.1) ${((budget - 500) / 9500) * 100}%, rgba(255,255,255,0.1) 100%)` }}
              />
              <div className="flex justify-between mt-2">
                <span className="font-mono text-xs text-white/25">$500</span>
                <span className="font-mono text-xs text-white/25">$10,000</span>
              </div>
            </div>

            {/* Duration */}
            <div className="glass neon-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Calendar className="w-4 h-4 text-sky-400" />
                <p className="font-mono text-xs text-white/50 tracking-widest uppercase">Trip Duration</p>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setDuration(Math.max(1, duration - 1))}
                  className="w-10 h-10 glass neon-border rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors text-lg"
                >–</button>
                <div className="flex-1 text-center">
                  <span className="font-display text-4xl font-bold">{duration}</span>
                  <span className="font-body text-white/40 ml-2">days</span>
                </div>
                <button
                  onClick={() => setDuration(Math.min(30, duration + 1))}
                  className="w-10 h-10 glass neon-border rounded-full flex items-center justify-center text-white/60 hover:text-white transition-colors text-lg"
                >+</button>
              </div>
            </div>

            {/* Travel Style */}
            <div className="glass neon-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-4 h-4 text-purple-400" />
                <p className="font-mono text-xs text-white/50 tracking-widest uppercase">Travel Style</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {TRAVEL_STYLES.map((s) => (
                  <button
                    key={s}
                    onClick={() => setStyle(s)}
                    className={`px-4 py-2 rounded-full font-body text-xs font-medium transition-all duration-300 ${
                      s === style ? 'bg-sky-500 text-white' : 'glass border border-white/10 text-white/50 hover:border-sky-400/30 hover:text-white'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>

            {/* Traveler Type */}
            <div className="glass neon-border rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-4 h-4 text-amber-400" />
                <p className="font-mono text-xs text-white/50 tracking-widest uppercase">Traveling As</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {TRAVELER_TYPES.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTravelerType(t)}
                    className={`px-4 py-2 rounded-full font-body text-xs font-medium transition-all duration-300 ${
                      t === travelerType ? 'bg-amber-500 text-white' : 'glass border border-white/10 text-white/50 hover:border-amber-400/30 hover:text-white'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </div>

            {/* Adventure Level */}
            <div className="glass neon-border rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <p className="font-mono text-xs text-white/50 tracking-widest uppercase">Adventure Level</p>
                <span className="font-mono text-sm text-sky-400">{adventureLevel}%</span>
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="font-body text-xs text-white/30">Chill</span>
                <input
                  type="range"
                  min={0}
                  max={100}
                  value={adventureLevel}
                  onChange={(e) => setAdventureLevel(Number(e.target.value))}
                  className="flex-1 h-1.5 rounded-full appearance-none cursor-pointer"
                  style={{ background: `linear-gradient(to right, #a855f7 0%, #0ea5e9 ${adventureLevel}%, rgba(255,255,255,0.1) ${adventureLevel}%, rgba(255,255,255,0.1) 100%)` }}
                />
                <span className="font-body text-xs text-white/30">Wild</span>
              </div>
            </div>

            {/* Mood */}
            <div className="glass neon-border rounded-2xl p-6">
              <p className="font-mono text-xs text-white/50 tracking-widest uppercase mb-4">Your Mood</p>
              <div className="flex flex-wrap gap-2">
                {MOODS.map((m) => (
                  <button
                    key={m}
                    onClick={() => setMood(m)}
                    className={`px-4 py-2 rounded-full font-body text-xs font-medium transition-all duration-300 ${
                      m === mood ? 'bg-purple-500 text-white' : 'glass border border-white/10 text-white/50 hover:border-purple-400/30 hover:text-white'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Generate Button */}
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="w-full btn-primary py-4 rounded-2xl text-base flex items-center justify-center gap-3 disabled:opacity-60"
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  <span>AI is crafting your trip...</span>
                </>
              ) : (
                <>
                  <span><Sparkles className="w-5 h-5" /></span>
                  <span>Generate My Itinerary</span>
                </>
              )}
            </button>
          </div>

          {/* ── RIGHT OUTPUT PANEL ── */}
          <div className="lg:col-span-3 reveal">
            {!generated && !loading && (
              <div className="h-full flex items-center justify-center glass neon-border rounded-3xl p-12">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-sky-500/10 border border-sky-400/20 flex items-center justify-center mx-auto mb-6 animate-pulse">
                    <Sparkles className="w-10 h-10 text-sky-400/50" />
                  </div>
                  <p className="font-display text-2xl font-bold text-white/30 mb-3">Your AI itinerary</p>
                  <p className="font-body text-sm text-white/20">Fill in your preferences and click Generate to create your personalized trip plan.</p>
                </div>
              </div>
            )}

            {loading && (
              <div className="h-full flex items-center justify-center glass neon-border rounded-3xl p-12">
                <div className="text-center">
                  <div className="relative w-20 h-20 mx-auto mb-8">
                    <div className="w-20 h-20 border-2 border-sky-400/20 rounded-full" />
                    <div className="absolute inset-0 border-2 border-t-sky-400 rounded-full animate-spin" />
                    <div className="absolute inset-3 border-2 border-t-purple-400 rounded-full animate-spin" style={{ animationDirection: 'reverse', animationDuration: '0.8s' }} />
                    <Sparkles className="absolute inset-0 m-auto w-6 h-6 text-sky-400" />
                  </div>
                  <p className="font-display text-xl text-white/60 mb-2">Crafting your journey...</p>
                  <p className="font-body text-sm text-white/30">Analyzing {mood} destinations for {duration} days on ${budget.toLocaleString()} budget</p>
                </div>
              </div>
            )}

            {generated && !loading && (
              <div className="space-y-6">
                {/* Trip summary card */}
                <div className="glass neon-border rounded-2xl p-6"
                  style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.05), rgba(168,85,247,0.05))' }}>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="section-label mb-1">AI Generated Trip</p>
                      <h2 className="font-display text-2xl font-bold">
                        {mood.includes('Peaceful') ? 'Bali' : mood.includes('Adventure') ? 'Queenstown' : 'Maldives'}
                        <span className="text-gradient italic"> Escape</span>
                      </h2>
                    </div>
                    <div className="text-right">
                      <p className="font-display text-2xl font-bold text-emerald-400">${budget.toLocaleString()}</p>
                      <p className="font-body text-xs text-white/40">{duration} days · {travelerType}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {[style, mood.split(' ')[0], `${adventureLevel}% Adventure`].map((tag) => (
                      <span key={tag} className="glass px-3 py-1.5 rounded-full font-mono text-xs text-sky-400 border border-sky-400/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Itinerary Timeline */}
                <div className="space-y-4">
                  {itinerary.map((day, i) => (
                    <div key={day.day} className="glass neon-border rounded-2xl overflow-hidden card-hover">
                      <div className="flex items-center gap-4 p-5 border-b border-white/5">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                          style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.15), rgba(168,85,247,0.15))' }}>
                          {day.icon}
                        </div>
                        <div className="flex-1">
                          <p className="font-mono text-xs text-sky-400/60 tracking-widest uppercase mb-0.5">Day {day.day}</p>
                          <h3 className="font-display text-lg font-bold">{day.title}</h3>
                        </div>
                        <div className="flex items-center gap-1.5 text-white/30">
                          <Clock className="w-4 h-4" />
                          <span className="font-mono text-xs">Full day</span>
                        </div>
                      </div>
                      <div className="p-5">
                        <div className="flex flex-col gap-2">
                          {day.places.map((place, j) => (
                            <div key={place} className="flex items-center gap-3">
                              <div className="w-1.5 h-1.5 rounded-full bg-sky-400/50 flex-shrink-0" />
                              <span className="font-body text-sm text-white/60">{place}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cost estimate */}
                <div className="glass neon-border rounded-2xl p-6">
                  <p className="section-label mb-5">Cost Breakdown</p>
                  {[
                    { label: 'Flights', amount: Math.round(budget * 0.35), color: 'bg-sky-500' },
                    { label: 'Accommodation', amount: Math.round(budget * 0.3), color: 'bg-purple-500' },
                    { label: 'Food & Dining', amount: Math.round(budget * 0.2), color: 'bg-amber-500' },
                    { label: 'Activities', amount: Math.round(budget * 0.15), color: 'bg-emerald-500' },
                  ].map(({ label, amount, color }) => (
                    <div key={label} className="mb-4">
                      <div className="flex justify-between mb-1.5">
                        <span className="font-body text-sm text-white/60">{label}</span>
                        <span className="font-mono text-sm">${amount.toLocaleString()}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                        <div className={`h-full ${color} rounded-full`} style={{ width: `${(amount / budget) * 100}%` }} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex gap-3">
                  <button className="btn-primary flex-1 py-3 text-sm"><span>Save This Trip</span></button>
                  <button onClick={() => setGenerated(false)} className="btn-outline flex-1 py-3 text-sm">Regenerate</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
