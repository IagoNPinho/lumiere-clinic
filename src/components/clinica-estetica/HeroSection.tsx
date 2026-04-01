'use client'

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const WA = 'https://wa.me/5585999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.25, 0.46, 0.45, 0.94] as const },
})

const stats = [
  { value: '2.400+', label: 'Pacientes Atendidas' },
  { value: '8', label: 'Anos de Excelência' },
  { value: '98%', label: 'Taxa de Satisfação' },
]

export default function HeroSection() {
  const cardRef = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    setTilt({
      x: -((y / rect.height) - 0.5) * 12,
      y: ((x / rect.width) - 0.5) * 18,
    })
  }

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 })

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full pt-20 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0 items-center">

          {/* ─── LEFT COLUMN ─────────────────────────────────────── */}
          <div className="flex flex-col justify-center">

            {/* Section tag */}
            <motion.div {...fadeUp(0.2)} className="flex items-center gap-3 mb-7">
              <div className="w-8 h-px" style={{ backgroundColor: 'var(--gold)' }} />
              <span
                className="text-[0.72rem] uppercase tracking-[0.22em]"
                style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--gold)' }}
              >
                Clínica Estética · Fortaleza, CE
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              {...fadeUp(0.4)}
              className="leading-[1.04] mb-6"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 300,
                fontSize: 'clamp(3rem, 5vw, 5.5rem)',
                color: 'var(--dark)',
              }}
            >
              Beleza que<br />
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>ilumina</em><br />
              quem você é.
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              {...fadeUp(0.6)}
              className="mb-10 max-w-[420px] leading-[1.7]"
              style={{
                fontFamily: 'var(--font-dm-sans)',
                fontWeight: 300,
                fontSize: '1rem',
                color: 'var(--muted)',
              }}
            >
              Tratamentos estéticos de alto padrão com tecnologia de ponta e a
              assinatura de quem entende de beleza de verdade.
            </motion.p>

            {/* Buttons */}
            <motion.div {...fadeUp(0.8)} className="flex flex-wrap items-center gap-4 mb-14">
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-clip inline-flex items-center px-8 py-3.5 text-[0.82rem] uppercase tracking-[0.08em] transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: 'var(--dark)',
                  color: 'var(--white)',
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 400,
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.backgroundColor = 'var(--gold)'
                  el.style.transform = 'translateY(-2px)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLAnchorElement
                  el.style.backgroundColor = 'var(--dark)'
                  el.style.transform = 'translateY(0)'
                }}
              >
                Agendar Consulta
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center pb-0.5 text-[0.85rem] transition-colors duration-300 cursor-pointer"
                style={{
                  borderBottom: '1px solid var(--gold)',
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 300,
                  color: 'var(--dark)',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--gold)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'var(--dark)')}
              >
                Nossos Tratamentos
              </a>
            </motion.div>

            {/* Stats bar */}
            <motion.div
              {...fadeUp(1.0)}
              className="grid grid-cols-3 border-t"
              style={{ borderColor: 'rgba(201,169,110,0.3)' }}
            >
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="pt-5 pr-6 flex flex-col"
                >
                  <span
                    className="leading-none mb-1"
                    style={{
                      fontFamily: 'var(--font-cormorant)',
                      fontWeight: 300,
                      fontSize: '2.2rem',
                      color: 'var(--dark)',
                    }}
                  >
                    {s.value}
                  </span>
                  <span
                    className="text-[0.72rem] uppercase tracking-[0.1em]"
                    style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--muted)' }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ─── RIGHT COLUMN ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative hidden lg:flex items-center justify-center"
            style={{ minHeight: '580px' }}
          >
            {/* Angled background shape */}
            <div
              className="absolute inset-0"
              style={{
                clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0 100%)',
                background: 'linear-gradient(135deg, #F0E8DC 0%, #E8D5B0 50%, #D4B896 100%)',
              }}
              aria-hidden="true"
            />

            {/* Floating badge 1 — top left */}
            <div
              className="absolute top-16 left-12 z-20 flex items-center gap-3 px-4 py-3"
              style={{
                backgroundColor: 'var(--white)',
                border: '0.5px solid var(--gold)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                backdropFilter: 'blur(8px)',
                animation: 'float 4s ease-in-out infinite',
              }}
              aria-label="Avaliação 4.9 no Google"
            >
              <span
                className="leading-none"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--gold)' }}
              >
                4.9★
              </span>
              <span
                className="text-[0.7rem] uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--muted)' }}
              >
                Avaliação<br />no Google
              </span>
            </div>

            {/* Floating badge 2 — bottom right */}
            <div
              className="absolute bottom-16 right-6 z-20 flex items-center gap-3 px-4 py-3"
              style={{
                backgroundColor: 'var(--white)',
                border: '0.5px solid var(--gold)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
                backdropFilter: 'blur(8px)',
                animation: 'float-delayed 4.5s ease-in-out infinite',
              }}
              aria-label="Resposta em até 2 horas no WhatsApp"
            >
              <span
                className="leading-none"
                style={{ fontFamily: 'var(--font-cormorant)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--gold)' }}
              >
                2h
              </span>
              <span
                className="text-[0.7rem] uppercase tracking-wide"
                style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--muted)' }}
              >
                Resposta no<br />WhatsApp
              </span>
            </div>

            {/* 3D tilt card */}
            <div
              ref={cardRef}
              className="relative z-10 cursor-default"
              style={{ perspective: '800px', width: '300px' }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              <div
                style={{
                  transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
                  transformStyle: 'preserve-3d',
                  transition: tilt.x === 0 && tilt.y === 0
                    ? 'transform 600ms cubic-bezier(0.23,1,0.32,1)'
                    : 'transform 80ms linear',
                  backgroundColor: 'var(--white)',
                  border: '0.5px solid rgba(201,169,110,0.35)',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.12)',
                  padding: '2rem',
                }}
              >
                {/* Card badge */}
                <div
                  className="inline-flex items-center gap-2 px-3 py-1.5 mb-6"
                  style={{ backgroundColor: 'var(--gold-muted)', border: '0.5px solid var(--gold)' }}
                >
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: 'var(--gold)' }}
                    aria-hidden="true"
                  />
                  <span
                    className="text-[0.65rem] uppercase tracking-[0.15em]"
                    style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, color: 'var(--gold)' }}
                  >
                    Protocolo Premium 2025
                  </span>
                </div>

                {/* Decorative circles */}
                <div className="relative h-28 mb-6" aria-hidden="true">
                  <div
                    className="absolute top-0 left-0 w-20 h-20 rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, var(--gold), transparent)', animation: 'float 3s ease-in-out infinite' }}
                  />
                  <div
                    className="absolute top-4 left-10 w-14 h-14 rounded-full opacity-15"
                    style={{ background: 'radial-gradient(circle, var(--rose-deep), transparent)', animation: 'float-delayed 4s ease-in-out infinite' }}
                  />
                  <div
                    className="absolute top-2 left-24 w-10 h-10 rounded-full opacity-25"
                    style={{ background: 'radial-gradient(circle, var(--gold-light), transparent)', animation: 'float 5s ease-in-out infinite' }}
                  />
                </div>

                {/* Card footer */}
                <div>
                  <p
                    className="text-[0.65rem] uppercase tracking-[0.15em] mb-2"
                    style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--muted)' }}
                  >
                    Tratamento em destaque
                  </p>
                  <div className="w-8 h-px mb-3" style={{ backgroundColor: 'var(--gold)' }} aria-hidden="true" />
                  <p
                    style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: '1.4rem', color: 'var(--dark)', lineHeight: 1.2 }}
                  >
                    Bioestimuladores<br />de Colágeno
                  </p>
                  <p
                    className="mt-2 text-[0.78rem] leading-relaxed"
                    style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--muted)' }}
                  >
                    Firmeza e luminosidade progressiva com resultado natural.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
