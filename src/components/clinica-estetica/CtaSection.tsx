'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const WA_NUMBER = '5585999999999'

const beneficios = [
  'Consulta de avaliação gratuita',
  'Atendimento de segunda a sábado',
  'Resposta em até 2 horas no WhatsApp',
]

export default function CtaSection() {
  const [form, setForm] = useState({ nome: '', whatsapp: '', tratamento: '' })
  const [sending, setSending] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSending(true)
    const texto = encodeURIComponent(
      `Olá! Vi o site da Lumière Clinic.\nNome: ${form.nome}\nWhatsApp: ${form.whatsapp}\nTratamento de interesse: ${form.tratamento || 'Não informado'}`,
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${texto}`, '_blank')
    setTimeout(() => setSending(false), 1500)
  }

  return (
    <section
      id="agendar"
      className="relative py-28 md:py-36 overflow-hidden"
      style={{ backgroundColor: 'var(--cream)' }}
    >
      {/* Orb decoration */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(201,169,110,0.12) 0%, transparent 70%)',
          animation: 'orb-pulse 4s ease-in-out infinite',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ─── Left: text ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px" style={{ backgroundColor: 'var(--gold)' }} />
              <span
                className="text-[0.72rem] uppercase tracking-[0.22em]"
                style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--gold)' }}
              >
                Sua Transformação
              </span>
            </div>

            <h2
              className="mb-5"
              style={{
                fontFamily: 'var(--font-cormorant)',
                fontWeight: 300,
                fontSize: 'clamp(2.2rem, 4vw, 3.5rem)',
                color: 'var(--dark)',
                lineHeight: 1.1,
              }}
            >
              Agende sua{' '}
              <em style={{ color: 'var(--gold)', fontStyle: 'italic' }}>consulta</em>
              <br />hoje mesmo
            </h2>

            <div className="w-14 h-px mb-5" style={{ backgroundColor: 'var(--gold)' }} aria-hidden="true" />

            <p
              className="mb-8 leading-[1.75]"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, fontSize: '0.95rem', color: 'var(--muted)' }}
            >
              Preencha o formulário ao lado e nossa equipe entrará em contato
              para confirmar seu horário e responder todas as suas dúvidas.
            </p>

            <ul className="flex flex-col gap-3">
              {beneficios.map((b) => (
                <li
                  key={b}
                  className="flex items-center gap-3"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, fontSize: '0.9rem', color: 'var(--muted)' }}
                >
                  <span style={{ color: 'var(--gold)', fontWeight: 500, flexShrink: 0 }}>✓</span>
                  {b}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* ─── Right: form ─────────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="p-8 md:p-10"
            style={{
              backgroundColor: 'var(--white)',
              border: '0.5px solid rgba(201,169,110,0.3)',
            }}
          >
            <h3
              className="mb-1"
              style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 400, fontSize: '1.8rem', color: 'var(--dark)' }}
            >
              Fale conosco
            </h3>
            <p
              className="mb-8 text-[0.82rem]"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--muted)' }}
            >
              Responderemos em até 2 horas no WhatsApp.
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
              {/* Nome */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="cta-nome"
                  className="text-[0.72rem] uppercase tracking-[0.12em]"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, color: 'var(--muted)' }}
                >
                  Nome completo
                </label>
                <input
                  id="cta-nome"
                  name="nome"
                  type="text"
                  required
                  autoComplete="name"
                  value={form.nome}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className="outline-none text-[0.85rem] transition-colors duration-200"
                  style={{
                    backgroundColor: 'var(--cream)',
                    border: '0.5px solid rgba(201,169,110,0.25)',
                    padding: '0.8rem 1rem',
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 300,
                    color: 'var(--dark)',
                  }}
                  onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = 'var(--gold)')}
                  onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = 'rgba(201,169,110,0.25)')}
                />
              </div>

              {/* WhatsApp */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="cta-whatsapp"
                  className="text-[0.72rem] uppercase tracking-[0.12em]"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, color: 'var(--muted)' }}
                >
                  WhatsApp com DDD
                </label>
                <input
                  id="cta-whatsapp"
                  name="whatsapp"
                  type="tel"
                  required
                  autoComplete="tel"
                  value={form.whatsapp}
                  onChange={handleChange}
                  placeholder="(85) 99999-9999"
                  className="outline-none text-[0.85rem] transition-colors duration-200"
                  style={{
                    backgroundColor: 'var(--cream)',
                    border: '0.5px solid rgba(201,169,110,0.25)',
                    padding: '0.8rem 1rem',
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 300,
                    color: 'var(--dark)',
                  }}
                  onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = 'var(--gold)')}
                  onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = 'rgba(201,169,110,0.25)')}
                />
              </div>

              {/* Tratamento */}
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="cta-tratamento"
                  className="text-[0.72rem] uppercase tracking-[0.12em]"
                  style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 400, color: 'var(--muted)' }}
                >
                  Tratamento de interesse
                </label>
                <select
                  id="cta-tratamento"
                  name="tratamento"
                  value={form.tratamento}
                  onChange={handleChange}
                  className="outline-none text-[0.85rem] transition-colors duration-200 cursor-pointer"
                  style={{
                    backgroundColor: 'var(--cream)',
                    border: '0.5px solid rgba(201,169,110,0.25)',
                    padding: '0.8rem 1rem',
                    fontFamily: 'var(--font-dm-sans)',
                    fontWeight: 300,
                    color: form.tratamento ? 'var(--dark)' : 'var(--muted)',
                    appearance: 'none',
                  }}
                  onFocus={(e) => ((e.target as HTMLSelectElement).style.borderColor = 'var(--gold)')}
                  onBlur={(e) => ((e.target as HTMLSelectElement).style.borderColor = 'rgba(201,169,110,0.25)')}
                >
                  <option value="" disabled>Selecione um tratamento</option>
                  <option value="Bioestimuladores de Colágeno">Bioestimuladores de Colágeno</option>
                  <option value="Preenchimento Facial">Preenchimento Facial</option>
                  <option value="Toxina Botulínica">Toxina Botulínica</option>
                  <option value="Radiofrequência Facial">Radiofrequência Facial</option>
                  <option value="Peeling Químico Premium">Peeling Químico Premium</option>
                  <option value="Lipo de Papada">Lipo de Papada (Enzimática)</option>
                  <option value="Não sei ainda, quero uma avaliação">Não sei ainda — quero avaliação</option>
                </select>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={sending}
                className="btn-clip w-full mt-2 py-4 text-[0.82rem] uppercase tracking-[0.08em] transition-all duration-300 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                style={{
                  backgroundColor: 'var(--gold)',
                  color: 'var(--white)',
                  fontFamily: 'var(--font-dm-sans)',
                  fontWeight: 400,
                  border: 'none',
                }}
                onMouseEnter={(e) => {
                  if (!sending) (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--rose-deep)'
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLButtonElement).style.backgroundColor = 'var(--gold)'
                }}
              >
                {sending ? 'Abrindo WhatsApp...' : 'Enviar pelo WhatsApp'}
              </button>

              <p
                className="text-center text-[0.72rem]"
                style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--muted)' }}
              >
                Seus dados são usados apenas para contato. Sem spam.
              </p>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
