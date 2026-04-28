// ─────────────────────────────────────────────────
//  App.jsx
//  Root component — composes all sections
// ─────────────────────────────────────────────────

import { useActiveSection } from './hooks'

import Background  from './components/Background'
import Navbar      from './components/Navbar'
import Hero        from './components/Hero'
import About       from './components/About'
import Experience  from './components/Experience'
import Skills      from './components/Skills'
import Projects    from './components/Projects'
import Contact     from './components/Contact'
import Footer      from './components/Footer'

const SECTION_IDS = ['about', 'experience', 'skills', 'projects', 'contact']

export default function App() {
  const activeSection = useActiveSection(SECTION_IDS)

  return (
    <>
      {/* Fixed ambient background */}
      <Background />

      {/* Sticky navigation */}
      <Navbar activeSection={activeSection} />

      {/* Main content */}
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
