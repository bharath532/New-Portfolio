// ─────────────────────────────────────────────────
//  Experience.jsx
//  Work history / internship cards
// ─────────────────────────────────────────────────

import { useState } from 'react'
import { useInView } from '../hooks'
import { experience } from '../data/portfolioData'
import styles from './Experience.module.css'

export default function Experience() {
  return (
    <section id="experience" className="section">

      <p className="section-tag">02 — experience</p>
      <h2 className="section-title">Work History</h2>

      <div className={styles.list}>
        {experience.map((job, i) => (
          <ExperienceCard key={i} job={job} />
        ))}
      </div>

    </section>
  )
}

/* ── Single Experience Card ── */
function ExperienceCard({ job }) {
  const [ref, visible] = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className={`${styles.card} glass fade-up ${visible ? 'visible' : ''} ${hovered ? styles.cardHovered : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left accent bar */}
      <div className={styles.accentBar} />

      {/* Header */}
      <div className={styles.header}>
        <div>
          <h3 className={styles.company}>{job.company}</h3>
          <p  className={styles.role}>{job.role}</p>
        </div>
        <span className={styles.period}>
          {job.period} · {job.location}
        </span>
      </div>

      {/* Bullet points */}
      <ul className={styles.points}>
        {job.points.map((point, i) => (
          <li key={i} className={styles.point}>
            <span className={styles.bullet}>▸</span>
            {point}
          </li>
        ))}
      </ul>
    </div>
  )
}
