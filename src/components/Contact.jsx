// ─────────────────────────────────────────────────
//  Contact.jsx
//  Contact section with social / email links
// ─────────────────────────────────────────────────

import { useState } from 'react'
import { useInView } from '../hooks'
import { personal } from '../data/portfolioData'
import styles from './Contact.module.css'

const CONTACT_LINKS = [
  {
    href:   `mailto:${personal.email}`,
    label:  `✉ ${personal.email}`,
    accent: 'var(--a3)',
  },
  {
    href:   personal.github,
    label:  '🐙 GitHub',
    accent: 'var(--a1)',
  },
  {
    href:   personal.linkedin,
    label:  '💼 LinkedIn',
    accent: 'var(--a1)',
  },
  {
    href:   personal.portfolio,
    label:  '🌐 Portfolio',
    accent: 'var(--a2)',
  },
]

export default function Contact() {
  const [ref, visible] = useInView()

  return (
    <section id="contact" className="section">
      <div
        ref={ref}
        className={`${styles.card} glass fade-up ${visible ? 'visible' : ''}`}
      >
        <p className="section-tag" style={{ justifyContent: 'center' }}>
          05 — contact
        </p>

        <h2 className={styles.heading}>
          Let&apos;s Build Something Together ✦
        </h2>

        <p className={styles.subtext}>
          I&apos;m actively looking for full-time opportunities. Whether it&apos;s a
          question, a project, or just a hello — feel free to reach out!
        </p>

        <div className={styles.links}>
          {CONTACT_LINKS.map(link => (
            <ContactButton key={link.label} {...link} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ── Contact Button ── */
function ContactButton({ href, label, accent }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={styles.btn}
      style={{
        borderColor: hovered ? accent : 'rgba(180,142,255,0.28)',
        color:       hovered ? accent : 'var(--text)',
        background:  hovered ? `${accent}18` : 'rgba(255,255,255,0.04)',
        boxShadow:   hovered ? `0 0 24px ${accent}44` : 'none',
        transform:   hovered ? 'translateY(-3px)' : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </a>
  )
}
