'use client'

import { useEffect, useRef } from 'react'

export default function CtaSection() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const whatsapp =
    'https://wa.me/5585999999999?text=Olá!%20Vi%20o%20site%20da%20Lumière%20Clinic%20e%20gostaria%20de%20agendar%20uma%20consulta.'

  useEffect(() => {
    async function init() {
      const { gsap } = await import('gsap')
      const { ScrollTrigger } = await import('gsap/ScrollTrigger')
      gsap.registerPlugin(ScrollTrigger)

      const content = sectionRef.current?.querySelector('.cta-content')
      if (content) {
        gsap.fromTo(
          content,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1.0,
            ease: 'power3.out',
            scrollTrigger: { trigger: content, start: 'top 80%' },
          
          },
        )
      }
    }
    init()
  }, [])

  return (
    <section
      id="agendar"
      ref={sectionRef}
      className="relative py-28 md:py-40 overflow-hidden"
      style={{ backgroundColor: 'var(--clinica-black-soft)' }}
    >
      {/* Decorative circles */}
      <div
        className="absolute -top-24 -left-24 w-72 h-72 rounded-full pointer-events-none"
        style={{
          border: '1px solid rgba(200,180,140,0.08)',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute -top-12 -left-12 w-48 h-48 rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(200,180,140,0.12)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -right-24 w-80 h-80 rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(200,180,140,0.07)' }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-10 -right-10 w-52 h-52 rounded-full pointer-events-none"
        style={{ border: '1px solid rgba(200,180,140,0.11)' }}
        aria-hidden="true"
      />

      {/* Glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(200,180,140,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 md:px-12 text-center">
        <div className="cta-content" style={{ opacity: 0 }}>
          <p
            className="text-[10px] tracking-[0.5em] uppercase mb-6"
            style={{ color: 'var(--clinica-gold)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
          >
            Sua Transformação Começa Aqui
          </p>

          <h2
            className="text-4xl sm:text-5xl md:text-6xl mb-6"
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              color: 'var(--clinica-offwhite)',
              lineHeight: 1.1,
            }}
          >
            Pronta para{' '}
            <em style={{ color: 'var(--clinica-gold)', fontStyle: 'italic' }}>brilhar</em>?
          </h2>

          <div className="divider-gold mx-auto mb-8" />

          <p
            className="text-[15px] leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: 'var(--clinica-muted)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
          >
            Agende sua consulta de avaliação gratuita e descubra o tratamento ideal
            para o seu perfil. Nossa equipe está pronta para te atender.
          </p>

          <a
            href={whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 text-[12px] tracking-[0.35em] uppercase font-medium transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: '#25d366',
              color: '#fff',
              fontFamily: 'var(--font-jost)',
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1ebe5c')}
            onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#25d366')}
          >
            {/* WhatsApp icon */}
            <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current shrink-0" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Falar no WhatsApp
          </a>

          <p
            className="mt-5 text-[11px] tracking-wide"
            style={{ color: 'var(--clinica-muted)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
          >
            Consulta de avaliação gratuita · Sem compromisso
          </p>
        </div>
      </div>
    </section>
  )
}
