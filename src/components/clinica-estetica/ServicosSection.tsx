'use client'

import { motion } from 'framer-motion'

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] as const } },
}

const servicos = [
  {
    nome: 'Bioestimuladores de Colágeno',
    desc: 'Estimule a produção natural de colágeno para uma pele mais firme, luminosa e jovem com efeito progressivo.',
    preco: 'A partir de R$ 980',
  },
  {
    nome: 'Preenchimento Facial',
    desc: 'Ácido hialurônico de última geração para restaurar volumes, contornos e projeções com naturalidade incomparável.',
    preco: 'A partir de R$ 1.200',
  },
  {
    nome: 'Toxina Botulínica',
    desc: 'Aplicação precisa para suavizar linhas de expressão e criar um olhar mais descansado e sofisticado.',
    preco: 'A partir de R$ 750',
  },
  {
    nome: 'Radiofrequência Facial',
    desc: 'Tecnologia de microagulhamento com RF que reestrutura o tecido cutâneo de dentro para fora.',
    preco: 'A partir de R$ 600',
  },
  {
    nome: 'Peeling Químico Premium',
    desc: 'Renovação celular profunda com ácidos de alta concentração e protocolos exclusivos para cada tipo de pele.',
    preco: 'A partir de R$ 450',
  },
  {
    nome: 'Lipo de Papada (Enzimática)',
    desc: 'Dissolução precisa de gordura localizada na região cervical com microinjeções de alta performance.',
    preco: 'A partir de R$ 1.500',
  },
]

export default function ServicosSection() {
  return (
    <section id="serviços" className="py-28 md:py-36" style={{ backgroundColor: 'var(--cream)' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12">

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
              Tratamentos
            </span>
            <div className="w-6 h-px" style={{ backgroundColor: 'var(--gold)' }} />
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-cormorant)',
              fontWeight: 300,
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              color: 'var(--dark)',
              lineHeight: 1.1,
            }}
          >
            O que oferecemos
          </h2>
        </motion.div>

        {/* Grid — gap 1px creates divider effect */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '1px', backgroundColor: 'rgba(201,169,110,0.2)' }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {servicos.map((s, i) => (
            <motion.div
              key={s.nome}
              variants={itemVariants}
              className="card-top-line relative p-8 transition-colors duration-300 cursor-default"
              style={{ backgroundColor: 'var(--white)', overflow: 'hidden' }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--cream)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = 'var(--white)')}
            >
              {/* Decorative number */}
              <span
                className="absolute top-4 right-4 select-none pointer-events-none leading-none"
                style={{
                  fontFamily: 'var(--font-cormorant)',
                  fontSize: '3rem',
                  fontWeight: 300,
                  color: 'var(--gold)',
                  opacity: 0.18,
                }}
                aria-hidden="true"
              >
                0{i + 1}
              </span>

              <h3
                className="mb-3 pr-10"
                style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: '1.5rem', color: 'var(--dark)', lineHeight: 1.2 }}
              >
                {s.nome}
              </h3>

              <p
                className="mb-5 text-[0.85rem] leading-[1.7]"
                style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--muted)' }}
              >
                {s.desc}
              </p>

              <div className="flex items-center justify-between mt-auto">
                <span
                  className="text-[0.82rem] tracking-[0.05em]"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--gold)' }}
                >
                  {s.preco}
                </span>

                {/* "Saiba mais" link with gap transition */}
                <a
                  href="#agendar"
                  className="group inline-flex items-center text-[0.72rem] uppercase tracking-[0.1em] transition-colors duration-200 cursor-pointer"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, color: 'var(--gold)' }}
                >
                  Saiba mais
                  <span
                    className="ml-1 transition-all duration-200 group-hover:ml-2"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
