import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'

export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.3,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
    })

    // Hook Lenis into GSAP's ticker for synced scroll-triggered animations
    function raf(time) {
      lenis.raf(time * 1000)
    }
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // Expose globally for child components if needed
    window.__lenis = lenis

    return () => {
      gsap.ticker.remove(raf)
      lenis.destroy()
      delete window.__lenis
    }
  }, [])
}
