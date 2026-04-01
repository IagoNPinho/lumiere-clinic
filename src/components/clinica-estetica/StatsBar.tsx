'use client'

import { useEffect, useRef } from 'react'

const stats = [
  { value: '2.400+', label: 'Pacientes Atendidas' },
  { value: '8', label: 'Anos de Excelência' },
  { value: '98%', label: 'Taxa de Satisfação' },
]

export default function StatsBar() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const items = sectionRef.current?.querySelectorAll('.stat-item')
      if (!items) return

      gsap.fromTo(
        items,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
          },
        },
      )
    }
    init()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative py-16"
      style={{ borderTop: '1px solid var(--clinica-border)', borderBottom: '1px solid var(--clinica-border)' }}
    >
      {/* Subtle gold glow bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 100% at 50% 50%, rgba(200,180,140,0.04) 0%, transparent 70%)' }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-0">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="stat-item flex flex-col items-center text-center sm:border-r last:border-r-0"
              style={{
                borderColor: 'var(--clinica-border)',
                opacity: 0,
              }}
            >
              <span
                className="text-5xl md:text-6xl mb-2"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontWeight: 300,
                  color: 'var(--clinica-gold)',
                  letterSpacing: '-0.02em',
                }}
              >
                {stat.value}
              </span>
              <span
                className="text-[10px] tracking-[0.4em] uppercase"
                style={{
                  color: 'var(--clinica-muted)',
                  fontFamily: 'var(--font-jost)',
                  fontWeight: 300,
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
