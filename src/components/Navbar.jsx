// ─────────────────────────────────────────────────
//  Navbar.jsx
//  Sticky nav — desktop links + mobile hamburger
// ─────────────────────────────────────────────────

import { useState } from 'react'
import { useScrolled } from '../hooks'
import styles from './Navbar.module.css'

const NAV_LINKS = ['About', 'Experience', 'Skills', 'Projects', 'Contact']

export default function Navbar({ activeSection }) {
  const scrolled   = useScrolled(20)
  const [open, setOpen] = useState(false)

  const handleLinkClick = () => setOpen(false)

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>

        {/* Logo */}
        <div className={styles.logo}>&lt; BS /&gt;</div>

        {/* Desktop links */}
        <ul className={styles.links}>
          {NAV_LINKS.map(link => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`${styles.link} ${activeSection === link.toLowerCase() ? styles.active : ''}`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className={`${styles.hamburger} ${open ? styles.open : ''}`}
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <span className={styles.bar} />
          <span className={styles.bar} />
          <span className={styles.bar} />
        </button>

      </nav>

      {/* Mobile dropdown menu */}
      <div className={`${styles.mobileMenu} ${open ? styles.open : ''}`}>
        {NAV_LINKS.map(link => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={`${styles.mobileLink} ${activeSection === link.toLowerCase() ? styles.active : ''}`}
            onClick={handleLinkClick}
          >
            {link}
          </a>
        ))}
      </div>
    </>
  )
}
