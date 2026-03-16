// ─────────────────────────────────────────────────
//  Background.jsx
//  Animated ambient orbs + subtle grid overlay
// ─────────────────────────────────────────────────

import styles from './Background.module.css'

const ORBS = [
  { width: 700, height: 700, color: '#7c3aed88', top: '-250px', left: '-180px',  duration: '14s', delay: '0s'  },
  { width: 550, height: 550, color: '#0d947288', bottom: '-180px', right: '-150px', duration: '11s', delay: '-4s' },
  { width: 420, height: 420, color: '#be185d66', top: '35%',    left: '45%',     duration: '9s',  delay: '-7s' },
  { width: 300, height: 300, color: '#d9770655', top: '60%',    left: '10%',     duration: '13s', delay: '-2s' },
]

export default function Background() {
  return (
    <div className={styles.scene}>
      <div className={styles.grid} />
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className={styles.orb}
          style={{
            width:      orb.width,
            height:     orb.height,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            top:        orb.top,
            left:       orb.left,
            bottom:     orb.bottom,
            right:      orb.right,
            animationDuration: orb.duration,
            animationDelay:    orb.delay,
          }}
        />
      ))}
    </div>
  )
}
