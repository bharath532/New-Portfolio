// ─────────────────────────────────────────────────
//  Projects.jsx
//  Project cards with tags and links
// ─────────────────────────────────────────────────

import { useState } from 'react'
import { useInView } from '../hooks'
import { projects } from '../data/portfolioData'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className="section">

      <p className="section-tag">04 — projects</p>
      <h2 className="section-title">What I&apos;ve Built</h2>

      <div className={styles.list}>
        {projects.map(project => (
          <ProjectCard key={project.number} project={project} />
        ))}
      </div>

    </section>
  )
}

/* ── Single Project Card ── */
function ProjectCard({ project }) {
  const [ref, visible] = useInView()
  const [hovered, setHovered] = useState(false)

  return (
    <div
      ref={ref}
      className={`${styles.card} glass-strong fade-up ${visible ? 'visible' : ''} ${hovered ? styles.cardHovered : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Top shimmer line (visible on hover) */}
      <div className={`${styles.shimmerLine} ${hovered ? styles.shimmerLineVisible : ''}`} />

      {/* Header */}
      <div className={styles.header}>
        <div>
          <p className={styles.projectNum}>{project.number} / featured</p>
          <h3 className={styles.title}>{project.title}</h3>
        </div>
        <div className={styles.badge}>
          <span className={styles.badgeDot} />
          {project.badge}
        </div>
      </div>

      {/* Description */}
      <p className={styles.description}>{project.description}</p>

      {/* Tech tags */}
      <div className={styles.tags}>
        {project.tags.map(tag => (
          <span key={tag} className={styles.tagPrimary}>{tag}</span>
        ))}
        {project.tags2.map(tag => (
          <span key={tag} className={styles.tagSecondary}>{tag}</span>
        ))}
      </div>

      {/* Links */}
      <div className={styles.links}>
        <ProjectLink href={project.github} variant="github">
          ⬡ GitHub
        </ProjectLink>
        <ProjectLink href={project.live} variant="live">
          ↗ Live Demo
        </ProjectLink>
      </div>
    </div>
  )
}

/* ── Project Link Button ── */
function ProjectLink({ href, variant, children }) {
  const [hovered, setHovered] = useState(false)

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={`${styles.link} ${styles[`link_${variant}`]} ${hovered ? styles.linkHovered : ''}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  )
}
