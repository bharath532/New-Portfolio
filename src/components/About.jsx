// ─────────────────────────────────────────────────
//  About.jsx
//  Bio text + stats grid
// ─────────────────────────────────────────────────

import { useState } from 'react'
import { useInView } from '../hooks'
import { personal, stats } from '../data/portfolioData'
import styles from './About.module.css'

export default function About() {
  const [ref, visible] = useInView()

  return (
    <section id="about" className="section">

      {/* Section heading */}
      <p className="section-tag">01 — about</p>
      <h2 className="section-title">Who I Am</h2>

      {/* Content grid */}
      <div
        ref={ref}
        className={`${styles.grid} fade-up ${visible ? 'visible' : ''}`}
      >
        {/* Bio */}
        <div className={styles.bio}>
          {personal.bio.map((paragraph, i) => (
            <p key={i} className={styles.paragraph}>{paragraph}</p>
          ))}
        </div>

        {/* Stats */}
        <div className={styles.statsGrid}>
          {stats.map(stat => (
            <StatCard key={stat.label} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>

    </section>
  )
}

/* ── Stat Card ── */
function StatCard({ value, label }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      className={`${styles.statCard} glass ${hovered ? styles.statCardHovered : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className={styles.statValue}>{value}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  )
  
}

