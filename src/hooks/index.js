// ─────────────────────────────────────────────────
//  CUSTOM HOOKS
//  hooks/index.js
// ─────────────────────────────────────────────────

import { useState, useEffect, useRef } from 'react'

/**
 * useTypewriter
 * Cycles through an array of strings with a typing + deleting effect.
 *
 * @param {string[]} words  - Array of strings to cycle through
 * @param {number}   speed  - Typing speed in ms per character
 * @param {number}   pause  - Pause in ms after fully typing a word
 * @returns {string} The currently displayed text
 */
export function useTypewriter(words, speed = 100, pause = 1800) {
  const [display,  setDisplay]  = useState('')
  const [wordIdx,  setWordIdx]  = useState(0)
  const [charIdx,  setCharIdx]  = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]

    const timeout = setTimeout(() => {
      if (!deleting) {
        // Typing forward
        setDisplay(current.slice(0, charIdx + 1))

        if (charIdx + 1 === current.length) {
          // Finished typing — pause then start deleting
          setTimeout(() => setDeleting(true), pause)
        } else {
          setCharIdx(c => c + 1)
        }
      } else {
        // Deleting
        setDisplay(current.slice(0, charIdx - 1))

        if (charIdx - 1 === 0) {
          // Finished deleting — move to next word
          setDeleting(false)
          setWordIdx(w => (w + 1) % words.length)
          setCharIdx(0)
        } else {
          setCharIdx(c => c - 1)
        }
      }
    }, deleting ? speed / 2 : speed)

    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words, speed, pause])

  return display
}

/**
 * useInView
 * Fires once when the referenced element enters the viewport.
 * Returns [ref, isVisible].
 *
 * @param {number} threshold - IntersectionObserver threshold (0–1)
 * @returns {[React.RefObject, boolean]}
 */
export function useInView(threshold = 0.15) {
  const ref     = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()   // Only trigger once
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, visible]
}

/**
 * useScrolled
 * Returns true once the user has scrolled past a given pixel offset.
 *
 * @param {number} offset - Scroll distance in px to trigger
 * @returns {boolean}
 */
export function useScrolled(offset = 20) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > offset)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [offset])

  return scrolled
}

/**
 * useActiveSection
 * Tracks which section ID is currently in the viewport.
 *
 * @param {string[]} sectionIds - Array of element IDs to observe
 * @returns {string} The currently active section ID
 */
export function useActiveSection(sectionIds) {
  const [active, setActive] = useState(sectionIds[0])

  useEffect(() => {
    const elements = sectionIds
      .map(id => document.getElementById(id))
      .filter(Boolean)

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )

    elements.forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [sectionIds])

  return active
}
