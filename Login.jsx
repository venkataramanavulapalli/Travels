import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Mail, Lock, User, Eye, EyeOff, Compass, ArrowRight } from 'lucide-react'

const BG_IMAGES = [
  'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200&q=90',
  'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=1200&q=90',
  'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1200&q=90',
]

export default function Login() {
  const [mode, setMode] = useState('login')
  const [showPass, setShowPass] = useState(false)
  const [bgIndex] = useState(Math.floor(Math.random() * BG_IMAGES.length))
  const [form, setForm] = useState({ name: '', email: '', password: '' })
  const [focused, setFocused] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`${mode === 'login' ? 'Logging in' : 'Signing up'} — connect your backend here.`)
  }

  return (
    <div className="min-h-screen flex">
      {/* ── LEFT: Cinematic Image ── */}
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
        <img
          src={BG_IMAGES[bgIndex]}
          alt="Travel"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#030712]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/60 via-transparent to-transparent" />

        {/* Overlay content */}
        <div className="absolute bottom-16 left-10 right-10">
          <div className="glass neon-border rounded-2xl p-6 max-w-sm">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex gap-0.5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="w-3.5 h-3.5 rounded-full text-yellow-400">★</div>
                ))}
              </div>
            </div>
            <p className="font-body text-sm text-white/70 italic mb-4">
              "TravelAura completely changed how I discover destinations. It's like Netflix, but for travel."
            </p>
            <div className="flex items-center gap-3">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=60&q=80"
                alt="User"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-sky-400/30"
              />
              <div>
                <p className="font-body text-sm font-semibold">Sofia Reyes</p>
                <p className="font-body text-xs text-white/40">Barcelona, Spain</p>
              </div>
            </div>
          </div>
        </div>

        {/* Floating stats */}
        <div className="absolute top-1/3 left-10 glass neon-border rounded-2xl p-4">
          <p className="font-display text-3xl font-bold text-sky-400">190+</p>
          <p className="font-body text-xs text-white/50">Countries explored</p>
        </div>
      </div>

      {/* ── RIGHT: Auth Form ── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-12 pt-28 lg:pt-12 relative">
        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(14,165,233,0.06) 0%, transparent 70%)' }} />
          <div className="absolute bottom-1/4 left-1/4 w-48 h-48 rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)' }} />
        </div>

        <div className="w-full max-w-md relative z-10">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 mb-10">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center neon-border"
              style={{ background: 'linear-gradient(135deg, rgba(14,165,233,0.2), rgba(168,85,247,0.2))' }}>
              <Compass className="w-5 h-5 text-sky-400" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              Travel<span className="text-gradient-blue">Aura</span>
            </span>
          </Link>

          {/* Tab switcher */}
          <div className="flex glass neon-border rounded-full p-1 mb-8 w-fit">
            {['login', 'signup'].map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`px-8 py-2.5 rounded-full font-body text-sm font-medium transition-all duration-300 capitalize ${
                  mode === m ? 'bg-sky-500 text-white' : 'text-white/50 hover:text-white'
                }`}
              >
                {m === 'login' ? 'Sign In' : 'Sign Up'}
              </button>
            ))}
          </div>

          <h1 className="font-display text-3xl font-bold mb-2">
            {mode === 'login' ? 'Welcome back' : 'Start exploring'}
          </h1>
          <p className="font-body text-sm text-white/40 mb-8">
            {mode === 'login' ? 'Sign in to continue your journey.' : 'Create an account and discover the world.'}
          </p>

          {/* Social login */}
          <div className="flex gap-3 mb-8">
            {[
              { name: 'Google', icon: '🇬', bg: 'from-red-500/10 to-orange-500/10', border: 'border-red-500/20' },
              { name: 'Apple', icon: '🍎', bg: 'from-gray-500/10 to-slate-500/10', border: 'border-white/10' },
              { name: 'GitHub', icon: '🐱', bg: 'from-purple-500/10 to-violet-500/10', border: 'border-purple-500/20' },
            ].map((social) => (
              <button
                key={social.name}
                className={`flex-1 glass border ${social.border} rounded-xl py-3 font-body text-sm text-white/60 hover:text-white hover:border-opacity-60 transition-all duration-300 bg-gradient-to-br ${social.bg} flex items-center justify-center gap-2`}
              >
                <span>{social.icon}</span>
                <span className="hidden sm:inline">{social.name}</span>
              </button>
            ))}
          </div>

          {/* Divider */}
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/8" />
            <span className="font-mono text-xs text-white/25 tracking-widest">OR</span>
            <div className="flex-1 h-px bg-white/8" />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <FormField
                icon={User}
                placeholder="Full Name"
                value={form.name}
                onChange={(v) => setForm({ ...form, name: v })}
                focused={focused === 'name'}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused(null)}
              />
            )}

            <FormField
              icon={Mail}
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={(v) => setForm({ ...form, email: v })}
              focused={focused === 'email'}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused(null)}
            />

            <div className={`glass rounded-2xl flex items-center gap-3 px-5 py-4 transition-all duration-300 border ${
              focused === 'pass' ? 'border-sky-400/50 neon-glow' : 'border-white/8 hover:border-white/15'
            }`}>
              <Lock className={`w-4 h-4 flex-shrink-0 transition-colors ${focused === 'pass' ? 'text-sky-400' : 'text-white/30'}`} />
              <input
                type={showPass ? 'text' : 'password'}
                placeholder="Password"
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                onFocus={() => setFocused('pass')}
                onBlur={() => setFocused(null)}
                className="flex-1 bg-transparent font-body text-sm text-white/80 placeholder-white/25 outline-none"
              />
              <button type="button" onClick={() => setShowPass(!showPass)} className="text-white/30 hover:text-white/60 transition-colors">
                {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            {mode === 'login' && (
              <div className="text-right">
                <button type="button" className="font-body text-xs text-sky-400/70 hover:text-sky-400 transition-colors">
                  Forgot password?
                </button>
              </div>
            )}

            <button type="submit" className="btn-primary w-full py-4 rounded-2xl text-sm flex items-center justify-center gap-2 mt-2">
              <span className="flex items-center gap-2">
                {mode === 'login' ? 'Sign In' : 'Create Account'}
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>
          </form>

          <p className="text-center mt-6 font-body text-sm text-white/30">
            {mode === 'login' ? "Don't have an account?" : 'Already have an account?'}{' '}
            <button onClick={() => setMode(mode === 'login' ? 'signup' : 'login')} className="text-sky-400 hover:text-sky-300 transition-colors font-medium">
              {mode === 'login' ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}

function FormField({ icon: Icon, type = 'text', placeholder, value, onChange, focused, onFocus, onBlur }) {
  return (
    <div className={`glass rounded-2xl flex items-center gap-3 px-5 py-4 transition-all duration-300 border ${
      focused ? 'border-sky-400/50 neon-glow' : 'border-white/8 hover:border-white/15'
    }`}>
      <Icon className={`w-4 h-4 flex-shrink-0 transition-colors ${focused ? 'text-sky-400' : 'text-white/30'}`} />
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={onFocus}
        onBlur={onBlur}
        className="flex-1 bg-transparent font-body text-sm text-white/80 placeholder-white/25 outline-none"
      />
    </div>
  )
}
