import { useEffect, useRef } from 'react'

/**
 * DiamondParticles — performant Canvas particle field.
 * Renders floating gold diamonds with subtle parallax, twinkle and depth.
 * No DOM elements per particle = silky 60fps even at 80+ particles.
 */
export default function DiamondParticles({ count = 60, className = '' }) {
  const canvasRef = useRef(null)
  const rafRef = useRef(0)
  const particlesRef = useRef([])
  const dprRef = useRef(1)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const init = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      dprRef.current = dpr
      const rect = canvas.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)

      particlesRef.current = Array.from({ length: count }).map(() => ({
        x: Math.random() * rect.width,
        y: Math.random() * rect.height,
        size: 1 + Math.random() * 3.5,
        depth: 0.3 + Math.random() * 0.7, // for parallax + opacity
        vx: (Math.random() - 0.5) * 0.15,
        vy: -0.05 - Math.random() * 0.18,
        rot: Math.random() * Math.PI * 2,
        vRot: (Math.random() - 0.5) * 0.01,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.015 + Math.random() * 0.025,
      }))
    }

    const drawDiamond = (x, y, size, rot, opacity, depth) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rot)

      // Outer glow
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, size * 4)
      grad.addColorStop(0, `rgba(248, 239, 205, ${opacity * 0.8})`)
      grad.addColorStop(0.4, `rgba(219, 172, 59, ${opacity * 0.3})`)
      grad.addColorStop(1, 'rgba(219, 172, 59, 0)')
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(0, 0, size * 4, 0, Math.PI * 2)
      ctx.fill()

      // Diamond shape
      ctx.fillStyle = `rgba(248, 239, 205, ${opacity * depth})`
      ctx.beginPath()
      ctx.moveTo(0, -size)
      ctx.lineTo(size, 0)
      ctx.lineTo(0, size)
      ctx.lineTo(-size, 0)
      ctx.closePath()
      ctx.fill()

      // Inner facet highlight
      ctx.fillStyle = `rgba(255, 255, 255, ${opacity * 0.6})`
      ctx.beginPath()
      ctx.moveTo(0, -size)
      ctx.lineTo(size * 0.4, 0)
      ctx.lineTo(0, 0)
      ctx.closePath()
      ctx.fill()

      ctx.restore()
    }

    const tick = () => {
      const rect = canvas.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      particlesRef.current.forEach((p) => {
        p.x += p.vx * p.depth
        p.y += p.vy * p.depth
        p.rot += p.vRot
        p.twinklePhase += p.twinkleSpeed

        // Wrap
        if (p.y < -10) p.y = rect.height + 10
        if (p.x < -10) p.x = rect.width + 10
        if (p.x > rect.width + 10) p.x = -10

        const twinkle = 0.4 + Math.abs(Math.sin(p.twinklePhase)) * 0.6
        drawDiamond(p.x, p.y, p.size * p.depth, p.rot, twinkle, p.depth)
      })

      rafRef.current = requestAnimationFrame(tick)
    }

    const onResize = () => {
      // reset transform before re-initializing to avoid compounded scaling
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      init()
    }

    init()
    tick()
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', onResize)
    }
  }, [count])

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
      aria-hidden="true"
    />
  )
}
