'use client'

import { useEffect, useState } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const whatsappHref =
    'https://wa.me/5585999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Lumière%20Clinic.'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0a0a08]/90 backdrop-blur-md border-b border-[rgba(200,180,140,0.15)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          aria-label="Lumière Clinic — página inicial"
          className="flex flex-col leading-none cursor-pointer"
        >
          <span
            className="font-display text-[22px] tracking-[0.18em] uppercase"
            style={{ color: 'var(--clinica-gold)', fontFamily: 'var(--font-cormorant)' }}
          >
            Lumière
          </span>
          <span
            className="text-[9px] tracking-[0.45em] uppercase"
            style={{ color: 'var(--clinica-offwhite)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
          >
            Clinic
          </span>
        </a>

        {/* Nav links — desktop only */}
        <ul className="hidden md:flex items-center gap-10">
          {['Sobre', 'Serviços', 'Depoimentos'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[11px] tracking-[0.35em] uppercase transition-colors duration-200 cursor-pointer"
                style={{ color: 'var(--clinica-offwhite)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--clinica-gold)')}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--clinica-offwhite)')}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[10px] tracking-[0.35em] uppercase px-6 py-2.5 border transition-all duration-300 cursor-pointer"
          style={{
            borderColor: 'var(--clinica-gold)',
            color: 'var(--clinica-gold)',
            fontFamily: 'var(--font-jost)',
            fontWeight: 400,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.backgroundColor = 'var(--clinica-gold)'
            el.style.color = 'var(--clinica-black)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.backgroundColor = 'transparent'
            el.style.color = 'var(--clinica-gold)'
          }}
        >
          Agendar
        </a>
      </nav>
    </header>
  )
}
