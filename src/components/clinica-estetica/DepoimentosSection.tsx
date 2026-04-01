'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

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
  {
    texto:
      'Cheguei insegura com o primeiro procedimento e saí completamente apaixonada pelos resultados. A equipe é extremamente atenciosa e técnica. Nunca me senti em melhores mãos.',
    nome: 'Fernanda Queiroz',
    tempo: 'Paciente há 6 meses',
    inicial: 'F',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5 mb-5" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 16 16" className="w-3 h-3" aria-hidden="true" style={{ fill: 'var(--gold)' }}>
          <path d="M8 1.5l1.75 3.54 3.91.57-2.83 2.76.67 3.89L8 10.27l-3.5 1.99.67-3.89L2.34 5.61l3.91-.57z" />
        </svg>
      ))}
    </div>
  )
}

export default function DepoimentosSection() {
  return (
    <section
      id="depoimentos"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: 'var(--dark)' }}
    >
      {/* Big decorative quote */}
      <div
        className="absolute top-12 left-8 select-none pointer-events-none leading-none"
        style={{
          fontFamily: 'var(--font-cormorant)',
          fontSize: '18rem',
          fontWeight: 300,
          color: 'var(--gold)',
          opacity: 0.04,
          lineHeight: 1,
        }}
        aria-hidden="true"
      >
        &ldquo;
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <div className="inline-flex items-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ backgroundColor: 'var(--gold)' }} />
            <span
              className="text-[0.72rem] uppercase tracking-[0.22em]"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--gold)' }}
            >
              Depoimentos
            </span>
            <div className="w-6 h-px" style={{ backgroundColor: 'var(--gold)' }} />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: 'var(--white)',
              lineHeight: 1.1,
            }}
          >
            O que nossas pacientes dizem
          </h2>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-px"
          style={{ backgroundColor: 'rgba(201,169,110,0.15)' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {depoimentos.map((dep) => (
            <motion.div
              key={dep.nome}
              variants={itemVariants}
              className="flex flex-col p-8 transition-all duration-300 cursor-default"
              style={{ backgroundColor: 'rgba(255,255,255,0.04)' }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.backgroundColor = 'rgba(255,255,255,0.07)'
                el.style.transform = 'translateY(-4px)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLDivElement
                el.style.backgroundColor = 'rgba(255,255,255,0.04)'
                el.style.transform = 'translateY(0)'
              }}
            >
              <Stars />

              <p
                className="flex-1 text-[1.05rem] leading-[1.65] mb-8"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontStyle: 'italic',
                  fontWeight: 400,
                  color: 'rgba(255,255,255,0.85)',
                }}
              >
                &ldquo;{dep.texto}&rdquo;
              </p>

              <div className="flex items-center gap-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
                  style={{
                    background: 'linear-gradient(135deg, var(--gold), var(--rose-deep))',
                    fontFamily: 'var(--font-cormorant)',
                    fontSize: '1.1rem',
                    fontWeight: 400,
                    color: 'var(--white)',
                  }}
                  aria-hidden="true"
                >
                  {dep.inicial}
                </div>
                <div>
                  <p
                    className="text-sm leading-tight"
                    style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, color: 'var(--white)' }}
                  >
                    {dep.nome}
                  </p>
                  <p
                    className="text-[0.72rem] tracking-wide mt-0.5"
                    style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'rgba(255,255,255,0.35)' }}
                  >
                    {dep.tempo}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
