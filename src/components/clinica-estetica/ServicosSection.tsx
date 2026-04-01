'use client'

import { useEffect, useRef } from 'react'

const servicos = [
  {
    nome: 'Bioestimuladores de Colágeno',
    descricao: 'Estimule a produção natural de colágeno para uma pele mais firme, luminosa e jovem com efeito progressivo.',
    preco: 'A partir de R$ 980',
  },
  {
    nome: 'Preenchimento Facial',
    descricao: 'Ácido hialurônico de última geração para restaurar volumes, contornos e projeções com naturalidade incomparável.',
    preco: 'A partir de R$ 1.200',
  },
  {
    nome: 'Toxina Botulínica',
    descricao: 'Aplicação precisa para suavizar linhas de expressão e criar um olhar mais descansado e sofisticado.',
    preco: 'A partir de R$ 750',
  },
  {
    nome: 'Radiofrequência Facial',
    descricao: 'Tecnologia de microagulhamento com RF que reestrutura o tecido cutâneo de dentro para fora.',
    preco: 'A partir de R$ 600',
  },
  {
    nome: 'Peeling Químico Premium',
    descricao: 'Renovação celular profunda com ácidos de alta concentração e protocolos exclusivos para cada tipo de pele.',
    preco: 'A partir de R$ 450',
  },
  {
    nome: 'Lipo de Papada (Enzimática)',
    descricao: 'Dissolução precisa de gordura localizada na região cervical com microinjeções de alta performance.',
    preco: 'A partir de R$ 1.500',
  },
]

export default function ServicosSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const title = sectionRef.current?.querySelector('.servicos-title')
      const items = sectionRef.current?.querySelectorAll('.servico-row')

      if (title) {
        gsap.fromTo(
          title,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', scrollTrigger: { trigger: title, start: 'top 85%' } },
        )
      }
      if (items?.length) {
        gsap.fromTo(
          items,
          { opacity: 0, x: -20 },
          {
            opacity: 1,
            x: 0,
            duration: 0.7,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: { trigger: items[0], start: 'top 82%' },
          },
        )
      }
    }
    init()
  }, [])

  return (
    <section
      id="serviços"
      ref={sectionRef}
      className="py-28 md:py-36"
      style={{ backgroundColor: 'var(--clinica-black-soft)' }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="servicos-title text-center mb-20" style={{ opacity: 0 }}>
          <p
            className="text-[10px] tracking-[0.5em] uppercase mb-5"
            style={{ color: 'var(--clinica-gold)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
          >
            Tratamentos
          </p>
          <h2
            className="text-4xl md:text-5xl lg:text-[3.5rem]"
            style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, color: 'var(--clinica-offwhite)', lineHeight: 1.1 }}
          >
            O que oferecemos
          </h2>
        </div>

        {/* Services list */}
        <div className="max-w-4xl mx-auto">
          {servicos.map((s, i) => (
            <div
              key={s.nome}
              className="servico-row group flex flex-col sm:flex-row sm:items-center justify-between py-7 border-b cursor-pointer transition-all duration-300"
              style={{ borderColor: 'var(--clinica-border)', opacity: 0 }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'var(--clinica-border-hover)'
                const arrow = el.querySelector('.servico-arrow') as HTMLSpanElement | null
                if (arrow) arrow.style.transform = 'translateX(6px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'var(--clinica-border)'
                const arrow = el.querySelector('.servico-arrow') as HTMLSpanElement | null
                if (arrow) arrow.style.transform = 'translateX(0)'
              }}
            >
              <div className="flex-1 mb-3 sm:mb-0 sm:pr-8">
                <h3
                  className="text-xl md:text-2xl mb-1 transition-colors duration-200 group-hover:text-[var(--clinica-gold)]"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontWeight: 400,
                    color: 'var(--clinica-offwhite)',
                    lineHeight: 1.2,
                  }}
                >
                  {s.nome}
                </h3>
                <p
                  className="text-[13px] leading-relaxed max-w-lg"
                  style={{ color: 'var(--clinica-muted)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
                >
                  {s.descricao}
                </p>
              </div>

              <div className="flex items-center gap-6 shrink-0">
                <span
                  className="text-[12px] tracking-wide"
                  style={{ color: 'var(--clinica-gold)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
                >
                  {s.preco}
                </span>
                <span
                  className="servico-arrow transition-transform duration-300"
                  style={{ color: 'var(--clinica-gold)' }}
                  aria-hidden="true"
                >
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-5 h-5">
                    <path d="M4 10h12M11 5l5 5-5 5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
