import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowDown, Play, Star, Zap, Map, BookOpen, Brain, ChevronRight } from 'lucide-react'
import DestinationCard from '../components/DestinationCard'

const heroDestinations = [
  {
    id: 'santorini',
    name: 'Santorini',
    country: 'Greece',
    category: 'Island',
    rating: 4.9,
    subtitle: 'Infinite blue and white silence',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800&q=80',
    tag: 'Trending',
  },
  {
    id: 'bali',
    name: 'Bali',
    country: 'Indonesia',
    category: 'Nature',
    rating: 4.8,
    subtitle: 'Island of gods and terraced dreams',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
    tag: 'Popular',
  },
  {
    id: 'aurora',
    name: 'Aurora Borealis',
    country: 'Iceland',
    category: 'Nature',
    rating: 5.0,
    subtitle: 'Dancing lights across the arctic sky',
    image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
    tag: 'Magical',
  },
]

const trendingDestinations = [
  {
    id: 'tokyo',
    name: 'Tokyo',
    country: 'Japan',
    category: 'City',
    rating: 4.9,
    subtitle: 'Neon dreams and ancient temples',
    image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=800&q=80',
    tag: 'Futuristic',
  },
  {
    id: 'maldives',
    name: 'Maldives',
    country: 'Indian Ocean',
    category: 'Beach',
    rating: 5.0,
    subtitle: 'Overwater villas above crystal glass',
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=800&q=80',
    tag: 'Luxury',
  },
  {
    id: 'machu-picchu',
    name: 'Machu Picchu',
    country: 'Peru',
    category: 'Historical',
    rating: 4.8,
    subtitle: 'Lost city in the clouds',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800&q=80',
    tag: 'Historical',
  },
  {
    id: 'dubai',
    name: 'Dubai',
    country: 'UAE',
    category: 'City',
    rating: 4.7,
    subtitle: 'Desert jewel touching the sky',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80',
    tag: 'Luxury',
  },
]

const features = [
  {
    icon: Brain,
    title: 'AI Trip Planning',
    desc: 'Smart itineraries tailored to your mood, budget, and travel style using advanced AI.',
    color: 'from-sky-500 to-blue-600',
  },
  {
    icon: Map,
    title: 'Immersive Previews',
    desc: 'Cinematic destination walkthroughs before you ever book a flight.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Zap,
    title: 'Mood-Based Discovery',
    desc: 'Tell us how you want to feel — we find the perfect destination.',
    color: 'from-amber-400 to-orange-500',
  },
  {
    icon: BookOpen,
    title: 'Smart Travel Journal',
    desc: 'Document memories in a cinematic scrapbook that feels like a magazine.',
    color: 'from-emerald-400 to-teal-500',
  },
]

const testimonials = [
  {
    name: 'Arjun Mehta',
    location: 'Mumbai, India',
    text: 'TravelAura planned my Tokyo trip better than any travel agent ever could. The AI recommendations were spot on.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
  },
  {
    name: 'Sofia Reyes',
    location: 'Barcelona, Spain',
    text: "The cinematic destination previews made me feel like I was already there. Booked Santorini after 10 minutes.",
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
  },
  {
    name: 'James Chen',
    location: 'San Francisco, USA',
    text: 'Finally a travel platform that feels as beautiful as the places it shows. Absolutely stunning experience.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80',
    rating: 5,
  },
]

export default function Home() {
  const [currentHero, setCurrentHero] = useState(0)
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHero((prev) => (prev + 1) % heroDestinations.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const pts = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 1}px`,
      duration: `${Math.random() * 15 + 10}s`,
      delay: `${Math.random() * 10}s`,
    }))
    setParticles(pts)
  }, [])

  const hero = heroDestinations[currentHero]

  return (
    <div>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0 transition-all duration-1000">
          <img
            key={hero.id}
            src={hero.image}
            alt={hero.name}
            className="w-full h-full object-cover"
            style={{ animation: 'fadeIn 1s ease' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#030712] via-[#030712]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/30" />
        </div>

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
            }}
          />
        ))}

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-28">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-12 bg-sky-400" />
              <span className="section-label mb-0">Premium Travel Platform</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl xl:text-8xl font-black leading-none mb-6">
              Travel
              <br />
              <span className="text-gradient italic">Beyond</span>
              <br />
              The Ordinary
            </h1>
            <p className="font-body text-lg text-white/60 max-w-md mb-10 leading-relaxed">
              Discover breathtaking destinations curated by AI. From hidden gems to iconic wonders —
              your next adventure starts here.
            </p>
            <div className="flex flex-wrap gap-4 mb-16">
              <Link to="/explore" className="btn-primary">
                <span>Explore Now</span>
              </Link>
              <button className="btn-outline flex items-center gap-3">
                <div className="w-7 h-7 rounded-full flex items-center justify-center border border-white/20">
                  <Play className="w-3 h-3 fill-white" />
                </div>
                Watch Experience
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-10">
              {[
                { value: '190+', label: 'Countries' },
                { value: '2.4M', label: 'Travelers' },
                { value: '4.9★', label: 'Rating' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="font-display text-2xl font-bold text-white">{stat.value}</div>
                  <div className="font-body text-xs text-white/40 tracking-widest uppercase mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating destination cards (right side, desktop only) */}
        <div className="hidden xl:flex absolute right-16 top-1/2 -translate-y-1/2 flex-col gap-4 z-10">
          {heroDestinations.map((dest, i) => (
            <button
              key={dest.id}
              onClick={() => setCurrentHero(i)}
              className={`glass neon-border rounded-2xl p-3 flex items-center gap-3 transition-all duration-500 cursor-pointer text-left w-56 ${
                i === currentHero ? 'border-sky-400/40 bg-white/8' : 'hover:bg-white/6'
              }`}
            >
              <img src={dest.image} alt={dest.name} className="w-12 h-12 rounded-xl object-cover flex-shrink-0" />
              <div>
                <div className="font-display text-sm font-bold">{dest.name}</div>
                <div className="font-body text-xs text-white/40">{dest.country}</div>
                <div className="flex items-center gap-1 mt-0.5">
                  <Star className="w-2.5 h-2.5 text-yellow-400 fill-yellow-400" />
                  <span className="font-mono text-xs text-white/60">{dest.rating}</span>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-mono text-xs text-white/30 tracking-widest">SCROLL</span>
          <ArrowDown className="w-4 h-4 text-white/30" />
        </div>
      </section>

      {/* ── TRENDING DESTINATIONS ── */}
      <section className="py-28 max-w-7xl mx-auto px-6 ambient-bg">
        <div className="mb-14 reveal">
          <p className="section-label">Handpicked for you</p>
          <div className="flex items-end justify-between flex-wrap gap-4">
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight">
              Trending <span className="text-gradient italic">Destinations</span>
            </h2>
            <Link to="/explore" className="flex items-center gap-2 font-body text-sm text-sky-400/70 hover:text-sky-400 transition-colors">
              View all <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Category tabs */}
        <div className="flex gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none reveal">
          {['All', 'Mountains', 'Beaches', 'Cities', 'Historical', 'Hidden Gems', 'Futuristic'].map((cat) => (
            <button
              key={cat}
              className={`flex-shrink-0 px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-300 ${
                cat === 'All'
                  ? 'bg-sky-500 text-white'
                  : 'glass neon-border text-white/60 hover:text-white hover:border-sky-400/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 reveal">
          {trendingDestinations.map((dest) => (
            <DestinationCard key={dest.id} destination={dest} />
          ))}
        </div>
      </section>

      {/* ── WHY TRAVELAURA ── */}
      <section className="py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal">
              <p className="section-label">Why us</p>
              <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6">
                Travel smarter.
                <br />
                <span className="text-gradient italic">Live deeper.</span>
              </h2>
              <p className="font-body text-white/50 text-base leading-relaxed mb-10 max-w-md">
                TravelAura combines cinematic beauty with intelligent travel tools.
                We don't just show you places — we make you feel them before you arrive.
              </p>
              <Link to="/explore" className="btn-primary">
                <span>Start Exploring</span>
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 reveal">
              {features.map(({ icon: Icon, title, desc, color }) => (
                <div key={title} className="glass neon-border rounded-2xl p-6 card-hover">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 shadow-lg`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold mb-2">{title}</h3>
                  <p className="font-body text-sm text-white/50 leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── EXPERIENCE SHOWCASE ── */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 mb-10 reveal">
          <p className="section-label">Gallery</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">
            Cinematic <span className="text-gradient italic">Moments</span>
          </h2>
        </div>
        <div className="scroll-x px-6">
          {[
            { src: 'https://images.unsplash.com/photo-1483729558449-99ef09a8c325?w=800&q=80', label: 'Rio de Janeiro' },
            { src: 'https://images.unsplash.com/photo-1568454537842-d933259bb258?w=800&q=80', label: 'Swiss Alps' },
            { src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80', label: 'Patagonia' },
            { src: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800&q=80', label: 'Paris' },
            { src: 'https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80', label: 'Amalfi Coast' },
            { src: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?w=800&q=80', label: 'Amsterdam' },
          ].map((img) => (
            <div
              key={img.label}
              className="group relative rounded-3xl overflow-hidden flex-shrink-0"
              style={{ width: '300px', height: '420px' }}
            >
              <img src={img.src} alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="cinematic-overlay absolute inset-0" />
              <div className="absolute bottom-6 left-6">
                <p className="font-display text-xl font-bold">{img.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-28 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 reveal">
            <p className="section-label">Travelers say</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold">
              Real stories, <span className="text-gradient italic">real wonder</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 reveal">
            {testimonials.map((t) => (
              <div key={t.name} className="glass neon-border rounded-3xl p-7 card-hover">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <p className="font-body text-white/70 text-sm leading-relaxed mb-6 italic">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-sky-400/30" />
                  <div>
                    <p className="font-body text-sm font-semibold">{t.name}</p>
                    <p className="font-body text-xs text-white/40">{t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center glass neon-border rounded-3xl py-16 px-8 relative overflow-hidden reveal">
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-purple-500/5" />
          <div className="relative z-10">
            <p className="section-label text-center mb-4">Ready to explore?</p>
            <h2 className="font-display text-4xl md:text-5xl font-black mb-5">
              Your next adventure<br /><span className="text-gradient italic">awaits you</span>
            </h2>
            <p className="font-body text-white/50 mb-10 max-w-md mx-auto">
              Join 2.4 million travelers who experience the world differently with TravelAura.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/planner" className="btn-primary"><span>Plan My Trip</span></Link>
              <Link to="/mood" className="btn-outline">Explore by Mood</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
