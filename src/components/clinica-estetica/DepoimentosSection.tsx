'use client'

import { useEffect, useRef } from 'react'

const depoimentos = [
  {
    texto:
      'A Lumière transformou completamente minha relação com o espelho. O resultado do bioestimulador foi tão natural que as pessoas percebem a diferença, mas não conseguem explicar o porquê. É exatamente isso que eu queria.',
    nome: 'Isabela Fontenele',
    tempo: 'Paciente há 3 anos',
    inicial: 'I',
  },
  {
    texto:
      'Já fui a outras clínicas antes, mas o nível de atenção e personalização aqui é incomparável. Cada sessão parece um ritual. O preenchimento ficou perfeito — harmonioso, sem exageros.',
    nome: 'Mariana Castelo Branco',
    tempo: 'Paciente há 1 ano',
    inicial: 'M',
  },
]

function StarRow() {
  return (
    <div className="flex gap-1 mb-5" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="w-3.5 h-3.5 fill-current" aria-hidden="true" style={{ color: 'var(--clinica-gold)' }}>
          <path d="M8 1.5l1.75 3.54 3.91.57-2.83 2.76.67 3.89L8 10.27l-3.5 1.99.67-3.89L2.34 5.61l3.91-.57z" />
        </svg>
      ))}
    </div>
  )
}

export default function DepoimentosSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const title = sectionRef.current?.querySelector('.dep-title')
      const cards = sectionRef.current?.querySelectorAll('.dep-card')

      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: title, start: 'top 85%' } },
        )
      }
      if (cards?.length) {
        gsap.fromTo(
          cards,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: cards[0], start: 'top 82%' },
          },
        )
      }
    }
    init()
  }, [])

  return (
    <section id="depoimentos" ref={sectionRef} className="py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="dep-title text-center mb-20" style={{ opacity: 0 }}>
          <p
            className="text-[10px] tracking-[0.5em] uppercase mb-5"
            style={{ color: 'var(--clinica-gold)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
          >
            Depoimentos
          </p>
          <h2
            className="text-4xl md:text-5xl"
            style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, color: 'var(--clinica-offwhite)', lineHeight: 1.1 }}
          >
            O que nossas pacientes dizem
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {depoimentos.map((dep) => (
            <div
              key={dep.nome}
              className="dep-card p-8 border flex flex-col"
              style={{
                borderColor: 'var(--clinica-border)',
                backgroundColor: 'rgba(255,255,255,0.02)',
                opacity: 0,
              }}
            >
              {/* Stars */}
              <StarRow />

              {/* Quote mark */}
              <div
                className="text-6xl leading-none mb-4 -mt-2 select-none"
                style={{ fontFamily: 'var(--font-cormorant)', color: 'var(--clinica-gold)', opacity: 0.35 }}
                aria-hidden="true"
              >
                &ldquo;
              </div>

              {/* Text */}
              <p
                className="flex-1 text-[15px] leading-[1.85] mb-8"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'var(--clinica-offwhite)',
                }}
              >
                {dep.texto}
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-sm font-medium"
                  style={{
                    backgroundColor: 'rgba(200,180,140,0.15)',
                    color: 'var(--clinica-gold)',
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '18px',
                    fontWeight: 500,
                  }}
                  aria-hidden="true"
                >
                  {dep.inicial}
                </div>
                <div>
                  <p
                    className="text-sm"
                    style={{ color: 'var(--clinica-offwhite)', fontFamily: 'var(--font-jost)', fontWeight: 400 }}
                  >
                    {dep.nome}
                  </p>
                  <p
                    className="text-[11px] tracking-wide"
                    style={{ color: 'var(--clinica-muted)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
                  >
                    {dep.tempo}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
