// ─────────────────────────────────────────────────
//  Footer.jsx
// ─────────────────────────────────────────────────

import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      Designed &amp; Built by{' '}
      <span className={styles.accent}>Bharath S</span>
      &nbsp;·&nbsp;
      2025
      &nbsp;·&nbsp;
      Erode, Tamil Nadu
    </footer>
  )
}
