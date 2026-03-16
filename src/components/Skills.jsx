// ─────────────────────────────────────────────────
//  Skills.jsx
//  Animated skill bars + categorised pill tags
// ─────────────────────────────────────────────────

import { useState } from 'react'
import { useInView } from '../hooks'
import { skillBars, skillCategories } from '../data/portfolioData'
import styles from './Skills.module.css'

export default function Skills() {
  return (
    <section id="skills" className="section">

      <p className="section-tag">03 — skills</p>
      <h2 className="section-title">Tech Stack</h2>

      {/* Animated proficiency bars */}
      <SkillBars />

      {/* Categorised pill tags */}
      <div className={styles.categories}>
        {skillCategories.map(cat => (
          <SkillCategory key={cat.name} category={cat} />
        ))}
      </div>

    </section>
  )
}

/* ── Skill Bars ── */
function SkillBars() {
  const [ref, visible] = useInView()

  return (
    <div ref={ref} className={styles.bars}>
      {skillBars.map((skill, i) => (
        <div key={skill.name} className={styles.barRow}>
          <span className={styles.barName}>{skill.name}</span>

          <div className={styles.barTrack}>
            <div
              className={styles.barFill}
              style={{
                width:             visible ? `${skill.pct}%` : '0%',
                transitionDelay:   `${i * 0.1}s`,
              }}
            >
              {/* Glowing tip */}
              <span className={styles.barTip} />
            </div>
          </div>

          <span className={styles.barPct}>{skill.pct}%</span>
        </div>
      ))}
    </div>
  )
}

/* ── Skill Category ── */
function SkillCategory({ category }) {
  const [ref, visible] = useInView()

  return (
    <div
      ref={ref}
      className={`${styles.category} fade-up ${visible ? 'visible' : ''}`}
    >
      {/* Category label + divider */}
      <div className={styles.catHeader}>
        <span className={styles.catName}>{category.name}</span>
        <span className={styles.catLine} />
      </div>

      {/* Pills */}
      <div className={styles.pills}>
        {category.items.map(item => (
          <SkillPill key={item} label={item} color={category.color} />
        ))}
      </div>
    </div>
  )
}

/* ── Skill Pill ── */
const PILL_COLORS = {
  purple: { text: '#b48eff', border: 'rgba(180,142,255,0.3)', bg: 'rgba(180,142,255,0.08)' },
  teal:   { text: '#4effd4', border: 'rgba(78,255,212,0.3)',  bg: 'rgba(78,255,212,0.06)'  },
  orange: { text: '#ffb347', border: 'rgba(255,179,71,0.3)',  bg: 'rgba(255,179,71,0.06)'  },
  pink:   { text: '#ff6eb4', border: 'rgba(255,110,180,0.3)', bg: 'rgba(255,110,180,0.06)' },
}

function SkillPill({ label, color }) {
  const [hovered, setHovered] = useState(false)
  const palette = PILL_COLORS[color] || PILL_COLORS.purple

  return (
    <span
      className={styles.pill}
      style={{
        color:      palette.text,
        border:     `1px solid ${palette.border}`,
        background: hovered ? palette.bg : 'rgba(255,255,255,0.03)',
        transform:  hovered ? 'translateY(-2px)' : 'none',
        boxShadow:  hovered ? `0 0 14px ${palette.text}44` : 'none',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {label}
    </span>
  )
}
