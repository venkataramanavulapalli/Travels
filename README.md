# TravelAura 🌍
### Premium Futuristic Cinematic Tourism Web App

---

## Tech Stack
- **React 18** + **Vite** (fast build)
- **React Router v6** (multi-page routing)
- **TailwindCSS** (utility styling)
- **Lucide React** (icons)
- **Google Fonts** (Playfair Display + DM Sans + Space Mono)

---

## Project Structure

```
travelaura/
├── index.html                  ← Root HTML
├── package.json                ← Dependencies
├── vite.config.js              ← Vite config
├── tailwind.config.js          ← Tailwind theme
├── postcss.config.js
├── src/
│   ├── main.jsx                ← Entry point
│   ├── App.jsx                 ← Router + scroll reveal
│   ├── index.css               ← Global styles + design tokens
│   ├── components/
│   │   ├── Navbar.jsx          ← Fixed navbar with mobile menu
│   │   ├── Footer.jsx          ← Dark premium footer
│   │   └── DestinationCard.jsx ← Reusable card component
│   └── pages/
│       ├── Home.jsx            ← Landing page (hero, trending, features)
│       ├── Explore.jsx         ← Browse + filter destinations
│       ├── Destination.jsx     ← Detail page (Tokyo example)
│       ├── Planner.jsx         ← AI trip planner UI
│       ├── WorldMap.jsx        ← Interactive map view
│       ├── Journal.jsx         ← Travel journal / memories
│       ├── Mood.jsx            ← Mood-based exploration
│       └── Login.jsx           ← Login / Signup page
```

---

## Setup & Run Locally

### 1. Install Node.js
Download from: https://nodejs.org (v18+ recommended)

### 2. Install dependencies
```bash
cd travelaura
npm install
```

### 3. Start dev server
```bash
npm run dev
```
Open: http://localhost:5173

### 4. Build for production
```bash
npm run build
```
Output goes to `/dist` folder.

---

## Deploy to Vercel (Recommended — FREE)

1. Create account at https://vercel.com
2. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Inside the project folder:
   ```bash
   vercel
   ```
4. Follow the prompts → your site goes live instantly.

**Or deploy via GitHub:**
1. Push this folder to a GitHub repo
2. Go to vercel.com → "New Project" → Import your repo
3. Vercel auto-detects Vite → click Deploy

---

## Deploy to Netlify (Alternative — FREE)

1. Run `npm run build`
2. Go to https://netlify.com
3. Drag and drop the `/dist` folder
4. Done — live in seconds.

---

## Pages & Routes

| Route | Page |
|-------|------|
| `/` | Home / Landing |
| `/explore` | Browse Destinations |
| `/destination/:id` | Destination Detail |
| `/planner` | AI Trip Planner |
| `/map` | World Map |
| `/journal` | Travel Journal |
| `/mood` | Mood Explorer |
| `/login` | Login / Signup |

---

## Customization

- **Colors**: Edit `tailwind.config.js` → `colors.aura`
- **Fonts**: Edit `index.html` Google Fonts link + `tailwind.config.js`
- **Destinations data**: Edit arrays inside each page file
- **Images**: All use Unsplash CDN — swap URLs with your own

---

## Backend Integration (Future)

The frontend is fully built. To add a real backend:
1. Build with **Node.js + Express** or **Next.js API routes**
2. Database: **MongoDB** with Mongoose
3. Auth: **JWT** or **Clerk** / **Auth0**
4. Maps: Replace SVG map with **Mapbox GL JS**
5. Weather: **OpenWeather API**
6. AI Planner: Connect **OpenAI API** to `/planner` page

---

## Internship Notes

Built with:
- Responsive design (mobile, tablet, desktop)
- Glassmorphism UI system
- Scroll reveal animations
- CSS-only particle effects
- Dynamic routing
- Reusable component architecture
- Design tokens via Tailwind theme

**Made for Learning Tree internship project.**
