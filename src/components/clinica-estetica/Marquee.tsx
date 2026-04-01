const ITEMS = [
  'Harmonização Facial',
  'Toxina Botulínica',
  'Bioestimuladores',
  'Peeling Químico',
  'Laser CO₂',
  'Fios de PDO',
  'Preenchimento',
  'Radiofrequência',
]

export default function Marquee() {
  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div
      className="overflow-hidden py-4"
      style={{ backgroundColor: 'var(--dark)' }}
      aria-hidden="true"
    >
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: 'marquee 22s linear infinite' }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-[0.72rem] uppercase tracking-[0.22em] shrink-0"
            style={{ fontFamily: 'var(--font-dm-sans)', fontWeight: 300, color: 'rgba(255,255,255,0.4)' }}
          >
            <span style={{ color: 'var(--gold)', fontSize: '0.55rem' }}>◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
