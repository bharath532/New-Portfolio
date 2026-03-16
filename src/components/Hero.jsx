// ─────────────────────────────────────────────────
//  Hero.jsx
//  Landing section — photo, name, typewriter role
// ─────────────────────────────────────────────────

import { useTypewriter } from '../hooks'
import { personal, typewriterRoles } from '../data/portfolioData'
import BHARATH_PHOTO from '../assets/photo'
import styles from './Hero.module.css'

export default function Hero() {
  const role = useTypewriter(typewriterRoles)

  return (
    <section className={styles.hero}>
      <div className={styles.inner}>

        {/* ── Left: Text ── */}
        <div className={styles.content}>

          {/* Availability badge */}
          <div className={styles.eyebrow}>
            <span className={styles.statusDot} />
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>Open to full-time opportunities</span>
          </div>

          {/* Name */}
          <div className={styles.nameBlock}>
            <span className={styles.nameHello}>Hello, I&apos;m</span>
            <h1 className={styles.name}>
              <span className={styles.nameB}>B</span>
              <span className={styles.nameHarath}>harath</span>
              {' '}
              <span className={styles.nameS}>S</span>
            </h1>
            <div className={styles.nameUnderline} />
          </div>

          {/* Typewriter role */}
          <div className={styles.roleRow}>
            <span className={styles.rolePrefix}>&gt;_</span>
            <span className={styles.roleText}>{role}</span>
            <span className={styles.cursor}>|</span>
          </div>

          {/* Bio */}
          <p className={styles.bio}>
            Full Stack Developer trained in the MERN stack with hands-on internship
            experience building responsive web applications. Skilled in deploying live
            projects on Netlify and Render. Currently preparing for JLPT N5 for
            opportunities in Japan.
          </p>

          {/* CTA Buttons */}
          <div className={styles.buttons}>
            <a href="#projects" className={`${styles.btn} ${styles.btnNeon}`}>
              View Projects ✦
            </a>
            <a href="#contact" className={`${styles.btn} ${styles.btnGlass}`}>
              Get in Touch
            </a>
            <a
              href={personal.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className={`${styles.btn} ${styles.btnResume}`}
            >
              ⬇ Resume
            </a>
          </div>
        </div>

        {/* ── Right: Photo ── */}
        <div className={styles.photoSide}>
          <div className={styles.photoWrap}>
            <div className={styles.ringOuter} />
            <div className={styles.ringGlow}  />
            <img
              src={BHARATH_PHOTO}
              alt="Bharath S"
              className={styles.photo}
            />
            <div className={styles.photoBadge}>
              <span className={styles.photoBadgeDot} />
              Available
            </div>
          </div>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollHint}>
        <div className={styles.scrollLine} />
        <span className={styles.scrollLabel}>scroll</span>
      </div>
    </section>
  )
}
