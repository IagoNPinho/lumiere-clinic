'use client'

export default function Footer() {
  return (
    <footer
      className="py-10"
      style={{
        backgroundColor: 'var(--dark)',
        borderTop: '0.5px solid rgba(201,169,110,0.15)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* Logo */}
          <div className="flex flex-col items-center md:items-start leading-none">
            <span
              className="text-[1.2rem] tracking-[0.15em] uppercase"
              style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300, color: 'var(--white)' }}
            >
              Lumière{' '}
              <span style={{ color: 'var(--gold)' }}>Clinic</span>
            </span>
          </div>

          {/* Horários */}
          <div className="text-center">
            <p
              className="text-[0.72rem] tracking-wide"
              style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'rgba(255,255,255,0.35)' }}
            >
              Fortaleza, CE · Seg–Sex: 09h–18h · Sáb: 09h–14h
            </p>
          </div>

          {/* Crédito */}
          <p
            className="text-[0.72rem] uppercase tracking-[0.15em]"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'rgba(255,255,255,0.25)' }}
          >
            Desenvolvido por{' '}
            <a
              href="https://nexify.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors duration-200 cursor-pointer"
              style={{ color: 'rgba(255,255,255,0.25)' }}
              onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = 'var(--gold)')}
              onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.25)')}
            >
              Nexify
            </a>
          </p>
        </div>

        <div
          className="mt-6 pt-5 text-center"
          style={{ borderTop: '0.5px solid rgba(201,169,110,0.1)' }}
        >
          <p
            className="text-[0.68rem] tracking-wide"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'rgba(255,255,255,0.2)' }}
          >
            © {new Date().getFullYear()} Lumière Clinic. Todos os direitos reservados. · Política de Privacidade
          </p>
        </div>
      </div>
    </footer>
  )
}
