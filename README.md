# Bharath S — Portfolio v2 (React + Vite)

A glassmorphism-style personal portfolio built with **React 18**, **Vite**, and **CSS Modules**.
Clean, readable, and fully separated into individual component files.

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev
# → Open http://localhost:5173

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## 📁 Project Structure

```
bharath-portfolio-v2/
│
├── index.html                    ← HTML entry point
├── vite.config.js                ← Vite configuration
├── package.json
│
└── src/
    ├── main.jsx                  ← React DOM entry
    ├── App.jsx                   ← Root component (composes all sections)
    │
    ├── assets/
    │   └── photo.js              ← Profile photo (base64 encoded)
    │
    ├── data/
    │   └── portfolioData.js      ← ✏️  All content lives here (name, bio, projects…)
    │
    ├── hooks/
    │   └── index.js              ← Custom hooks (useTypewriter, useInView, useScrolled…)
    │
    ├── styles/
    │   └── global.css            ← CSS variables, resets, keyframes, utility classes
    │
    └── components/
        ├── Background.jsx/.module.css   ← Floating orbs + grid
        ├── Navbar.jsx/.module.css       ← Sticky nav with active highlight
        ├── Hero.jsx/.module.css         ← Landing — photo, name, typewriter
        ├── About.jsx/.module.css        ← Bio + stats cards
        ├── Experience.jsx/.module.css   ← Work history cards
        ├── Skills.jsx/.module.css       ← Skill bars + pill tags
        ├── Projects.jsx/.module.css     ← Project cards with links
        ├── Contact.jsx/.module.css      ← Contact links
        └── Footer.jsx/.module.css       ← Footer
```

---

## ✏️ How to Customise

All content is in **one file**: `src/data/portfolioData.js`

| What to change       | Where                          |
|----------------------|--------------------------------|
| Name, email, links   | `personal` object              |
| Bio paragraphs       | `personal.bio` array           |
| Typewriter roles     | `typewriterRoles` array        |
| Stats                | `stats` array                  |
| Internship / jobs    | `experience` array             |
| Skill bars           | `skillBars` array              |
| Skill categories     | `skillCategories` array        |
| Projects             | `projects` array               |

To **add a new project**, just push a new object to the `projects` array:

```js
{
  number:      '03',
  title:       'My New Project',
  badge:       'Live on Vercel',
  description: 'What it does...',
  tags:        ['React', 'Node.js'],
  tags2:       ['Vercel'],
  github:      'https://github.com/...',
  live:        'https://...',
}
```

---

## 🌐 Deploy to Netlify

```bash
npm run build
# Drag the dist/ folder to https://app.netlify.com/drop
```

Or connect your GitHub repo for automatic deploys on every push.

---

## 🛠 Tech Stack

| Tool          | Purpose                     |
|---------------|-----------------------------|
| React 18      | UI framework                |
| Vite          | Build tool & dev server     |
| CSS Modules   | Scoped component styles     |
| IntersectionObserver | Scroll-triggered animations |
