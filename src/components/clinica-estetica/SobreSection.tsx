'use client'

import { useEffect, useRef } from 'react'

const diferenciais = [
  {
    title: 'Tecnologia Suíça',
    description: 'Equipamentos de última geração importados dos maiores centros de inovação estética do mundo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: 'Protocolos Exclusivos',
    description: 'Tratamentos desenvolvidos e personalizados por nossa equipe médica especializada para cada perfil.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    title: 'Experiência Completa',
    description: 'Ambiente pensado para o seu conforto: do acolhimento à finalização, cada detalhe importa.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    title: 'Resultados Comprovados',
    description: 'Mais de 2.400 pacientes satisfeitas em 8 anos de história, com resultados naturais e duradouros.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-6 h-6" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
]

export default function SobreSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const textEl = sectionRef.current?.querySelector('.sobre-text')
      const gridItems = sectionRef.current?.querySelectorAll('.sobre-card')

      if (textEl) {
        gsap.fromTo(
          textEl,
          { opacity: 0, x: -40 },
          {
            opacity: 1,
            x: 0,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: { trigger: textEl, start: 'top 80%' },
          },
        )
      }

      if (gridItems?.length) {
        gsap.fromTo(
          gridItems,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.12,
            ease: 'power3.out',
            scrollTrigger: { trigger: gridItems[0], start: 'top 82%' },
          },
        )
      }
    }
    init()
  }, [])

  return (
    <section id="sobre" ref={sectionRef} className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text block */}
          <div className="sobre-text" style={{ opacity: 0 }}>
            <p
              className="text-[10px] tracking-[0.5em] uppercase mb-5"
              style={{ color: 'var(--clinica-gold)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
            >
              Sobre a Clínica
            </p>

            <h2
              className="text-4xl md:text-5xl lg:text-[3.5rem] leading-[1.1] mb-8"
              style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, color: 'var(--clinica-offwhite)' }}
            >
              Onde a ciência
              <br />
              encontra a{' '}
              <em style={{ color: 'var(--clinica-gold)', fontStyle: 'italic' }}>beleza</em>.
            </h2>

            <div className="divider-gold mb-8" />

            <p
              className="text-[15px] leading-[1.85] mb-6"
              style={{ color: 'var(--clinica-muted)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
            >
              A Lumière Clinic nasceu com um propósito claro: oferecer estética de
              alto padrão em Fortaleza, com o rigor científico de uma clínica médica e
              a sensibilidade estética de um atelier de luxo.
            </p>

            <p
              className="text-[15px] leading-[1.85]"
              style={{ color: 'var(--clinica-muted)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
            >
              Nossa equipe é formada por médicos especialistas, biomédicos e
              esteticistas que unem décadas de experiência à mais avançada tecnologia
              disponível no mercado global.
            </p>
          </div>

          {/* 2x2 diferenciais grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {diferenciais.map((item) => (
              <div
                key={item.title}
                className="sobre-card p-6 border transition-all duration-300 cursor-default group"
                style={{
                  borderColor: 'var(--clinica-border)',
                  backgroundColor: 'rgba(255,255,255,0.02)',
                  opacity: 0,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'var(--clinica-border-hover)'
                  el.style.backgroundColor = 'rgba(200,180,140,0.05)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'var(--clinica-border)'
                  el.style.backgroundColor = 'rgba(255,255,255,0.02)'
                }}
              >
                <div
                  className="mb-4 transition-colors duration-300"
                  style={{ color: 'var(--clinica-gold)' }}
                >
                  {item.icon}
                </div>
                <h3
                  className="text-base mb-2"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontWeight: 500,
                    color: 'var(--clinica-offwhite)',
                    letterSpacing: '0.03em',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: 'var(--clinica-muted)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
                >
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
