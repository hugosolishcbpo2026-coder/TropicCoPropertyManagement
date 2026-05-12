import React, { useEffect, useRef } from 'react'

/**
 * Floating diamond particles with parallax drift, refraction shimmer and
 * subtle gold/emerald glow. Pure canvas, no library dependency.
 */
export default function DiamondParticles({ count = 28, className = '' }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    let width, height
    const particles = []

    const resize = () => {
      width = canvas.clientWidth
      height = canvas.clientHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    const seed = () => {
      particles.length = 0
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          z: Math.random() * 0.7 + 0.3, // depth
          size: Math.random() * 6 + 3,
          vy: -(Math.random() * 0.25 + 0.05),
          vx: (Math.random() - 0.5) * 0.18,
          rot: Math.random() * Math.PI,
          vr: (Math.random() - 0.5) * 0.01,
          tint: Math.random() < 0.18 ? 'coral' : Math.random() < 0.5 ? 'gold' : 'ivory',
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    const drawDiamond = (p, t) => {
      const s = p.size * p.z
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rot)
      const flicker = 0.55 + Math.sin(t * 0.002 + p.phase) * 0.35

      const gradient = ctx.createLinearGradient(-s, -s, s, s)
      if (p.tint === 'coral') {
        gradient.addColorStop(0, `rgba(255,180,160,${0.85 * flicker})`)
        gradient.addColorStop(1, `rgba(255,90,54,${0.25 * flicker})`)
      } else if (p.tint === 'gold') {
        gradient.addColorStop(0, `rgba(248,239,205,${0.9 * flicker})`)
        gradient.addColorStop(1, `rgba(168,113,34,${0.25 * flicker})`)
      } else {
        gradient.addColorStop(0, `rgba(255,255,255,${0.9 * flicker})`)
        gradient.addColorStop(1, `rgba(200,224,210,${0.18 * flicker})`)
      }

      // Glow halo
      ctx.shadowBlur = 14 * p.z
      ctx.shadowColor =
        p.tint === 'coral'
          ? 'rgba(255,90,54,0.6)'
          : p.tint === 'gold'
            ? 'rgba(219,172,59,0.55)'
            : 'rgba(180,255,220,0.4)'

      ctx.beginPath()
      ctx.moveTo(0, -s)
      ctx.lineTo(s, 0)
      ctx.lineTo(0, s)
      ctx.lineTo(-s, 0)
      ctx.closePath()
      ctx.fillStyle = gradient
      ctx.fill()

      // Inner facet
      ctx.shadowBlur = 0
      ctx.beginPath()
      ctx.moveTo(0, -s)
      ctx.lineTo(0, s)
      ctx.moveTo(-s, 0)
      ctx.lineTo(s, 0)
      ctx.strokeStyle = `rgba(255,255,255,${0.18 * flicker})`
      ctx.lineWidth = 0.6
      ctx.stroke()

      ctx.restore()
    }

    const loop = (t) => {
      ctx.clearRect(0, 0, width, height)
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy
        p.rot += p.vr
        if (p.y < -20) p.y = height + 20
        if (p.x < -20) p.x = width + 20
        if (p.x > width + 20) p.x = -20
        drawDiamond(p, t)
      }
      rafRef.current = requestAnimationFrame(loop)
    }

    const onResize = () => {
      resize()
      seed()
    }

    resize()
    seed()
    rafRef.current = requestAnimationFrame(loop)
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      aria-hidden="true"
    />
  )
}
