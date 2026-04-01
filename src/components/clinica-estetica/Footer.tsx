export default function Footer() {
  return (
    <footer
      className="py-12 border-t"
      style={{
        backgroundColor: 'var(--clinica-black)',
        borderColor: 'var(--clinica-border)',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex flex-col items-center md:items-start leading-none">
            <span
              className="text-[20px] tracking-[0.18em] uppercase"
              style={{ color: 'var(--clinica-gold)', fontFamily: 'var(--font-cormorant)', fontWeight: 400 }}
            >
              Lumière
            </span>
            <span
              className="text-[8px] tracking-[0.45em] uppercase"
              style={{ color: 'var(--clinica-offwhite)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
            >
              Clinic
            </span>
          </div>

          {/* Localização */}
          <div className="text-center">
            <p
              className="text-[12px] tracking-wide"
              style={{ color: 'var(--clinica-muted)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
            >
              Fortaleza, Ceará · Brasil
            </p>
            <p
              className="text-[11px] tracking-wide mt-1"
              style={{ color: 'var(--clinica-muted)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
            >
              Seg – Sex: 09h às 18h · Sáb: 09h às 14h
            </p>
          </div>

          {/* Crédito Nexify */}
          <p
            className="text-[10px] tracking-[0.3em] uppercase"
            style={{ color: 'var(--clinica-muted)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
          >
            Desenvolvido por{' '}
            <span style={{ color: 'var(--clinica-gold)' }}>Nexify</span>
          </p>
        </div>

        <div
          className="mt-8 pt-6 border-t text-center"
          style={{ borderColor: 'var(--clinica-border)' }}
        >
          <p
            className="text-[10px] tracking-wide"
            style={{ color: 'var(--clinica-muted)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
          >
            © {new Date().getFullYear()} Lumière Clinic. Todos os direitos reservados. · Política de Privacidade
          </p>
        </div>
      </div>
    </footer>
  )
}
