'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const diferenciais = [
  {
    num: '01',
    title: 'Tecnologia Suíça',
    desc: 'Equipamentos de última geração importados dos maiores centros de inovação estética do mundo.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-5 h-5" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Protocolos Exclusivos',
    desc: 'Tratamentos personalizados pela nossa equipe médica para cada perfil e necessidade individual.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-5 h-5" aria-hidden="true">
        <circle cx="12" cy="12" r="10" /><path d="M12 8v4l3 3" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Experiência Completa',
    desc: 'Ambiente pensado para o seu conforto: do acolhimento à finalização, cada detalhe importa.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-5 h-5" aria-hidden="true">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Resultados Comprovados',
    desc: 'Mais de 2.400 pacientes satisfeitas em 8 anos de história, com resultados naturais e duradouros.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.2} className="w-5 h-5" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
]

export default function SobreSection() {
  return (
    <section id="sobre" className="py-28 md:py-36" style={{ backgroundColor: 'var(--white)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ─── Left: text ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px" style={{ backgroundColor: 'var(--gold)' }} />
              <span
                className="text-[0.72rem] uppercase tracking-[0.22em]"
                style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--gold)' }}
              >
                Sobre a Clínica
              </span>
            </div>

            <h2
              className="mb-7"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 300,
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                color: 'var(--dark)',
                lineHeight: 1.1,
              }}
            >
              Onde a ciência encontra a{' '}
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>beleza</em>.
            </h2>

            <div className="w-14 h-px mb-7" style={{ backgroundColor: 'var(--gold)' }} aria-hidden="true" />

            <p
              className="mb-5 leading-[1.85]"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, fontSize: '0.95rem', color: 'var(--muted)' }}
            >
              A Lumière Clinic nasceu com um propósito claro: oferecer estética de
              alto padrão em Fortaleza, com o rigor científico de uma clínica médica e
              a sensibilidade estética de um atelier de luxo.
            </p>

            <p
              className="leading-[1.85]"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, fontSize: '0.95rem', color: 'var(--muted)' }}
            >
              Nossa equipe é formada por médicos especialistas, biomédicos e
              esteticistas que unem décadas de experiência à mais avançada tecnologia
              disponível no mercado global.
            </p>

            {/* Decorative stat */}
            <div
              className="mt-10 inline-flex flex-col p-6"
              style={{ border: '0.5px solid var(--gold)', backgroundColor: 'rgba(201,169,110,0.06)' }}
            >
              <span
                style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, fontSize: '2.8rem', color: 'var(--dark)', lineHeight: 1 }}
              >
                2.400+
              </span>
              <span
                className="mt-1 text-[0.72rem] uppercase tracking-[0.15em]"
                style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--muted)' }}
              >
                Pacientes transformadas
              </span>
            </div>
          </motion.div>

          {/* ─── Right: feature cards ────────────────────────────── */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-0"
            style={{ gap: '1px', backgroundColor: 'rgba(201,169,110,0.2)' }}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            {diferenciais.map((d) => (
              <motion.div
                key={d.num}
                variants={itemVariants}
                className="card-top-line relative p-7 transition-colors duration-300 cursor-default"
                style={{ backgroundColor: 'var(--white)', overflow: 'hidden' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--cream)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--white)')}
              >
                {/* Decorative number */}
                <span
                  className="absolute top-4 right-4 select-none pointer-events-none"
                  style={{
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '3rem',
                    fontWeight: 300,
                    color: 'var(--gold)',
                    opacity: 0.15,
                    lineHeight: 1,
                  }}
                  aria-hidden="true"
                >
                  {d.num}
                </span>

                <div className="mb-3" style={{ color: 'var(--gold)' }}>{d.icon}</div>

                <h3
                  className="mb-2"
                  style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: '1.3rem', color: 'var(--dark)' }}
                >
                  {d.title}
                </h3>

                <p
                  className="text-[0.85rem] leading-relaxed"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--muted)' }}
                >
                  {d.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
