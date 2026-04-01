'use client'

import { useEffect, useState } from 'react'

const NAV_LINKS = ['Sobre', 'Serviços', 'Depoimentos']
const WA = 'https://wa.me/5585999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Lumière%20Clinic.'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={
        scrolled
          ? {
              backdropFilter: 'blur(16px)',
              backgroundColor: 'rgba(248,244,238,0.88)',
              borderBottom: '0.5px solid rgba(201,169,110,0.25)',
            }
          : { backgroundColor: 'transparent' }
      }
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

        {/* Logo */}
        <a href="#hero" aria-label="Lumière Clinic — início" className="flex flex-col leading-none cursor-pointer">
          <span
            className="text-[20px] tracking-[0.18em] uppercase"
            style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, color: 'var(--dark)' }}
          >
            Lumière{' '}
            <span style={{ color: 'var(--gold)' }}>Clinic</span>
          </span>
        </a>

        {/* Links — desktop */}
        <ul className="hidden md:flex items-center gap-10">
          {NAV_LINKS.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-[0.72rem] uppercase tracking-[0.12em] transition-colors duration-300 cursor-pointer"
                style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'var(--muted)' }}
                onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--gold)')}
                onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--muted)')}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={WA}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-clip inline-flex items-center px-6 py-2.5 text-[0.72rem] uppercase tracking-[0.1em] transition-all duration-300 cursor-pointer"
          style={{
            backgroundColor: 'var(--gold)',
            color: 'var(--white)',
            fontFamily: 'var(--font-dm-sans)',
            fontWeight: 400,
          }}
          onMouseEnter={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.backgroundColor = 'var(--rose-deep)'
            el.style.transform = 'translateY(-1px)'
          }}
          onMouseLeave={(e) => {
            const el = e.currentTarget as HTMLAnchorElement
            el.style.backgroundColor = 'var(--gold)'
            el.style.transform = 'translateY(0)'
          }}
        >
          Agendar
        </a>
      </nav>
    </header>
  )
}
