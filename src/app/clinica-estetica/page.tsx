import type { Metadata } from 'next'
import Navbar from '@/components/clinica-estetica/Navbar'
import HeroSection from '@/components/clinica-estetica/HeroSection'
import Marquee from '@/components/clinica-estetica/Marquee'
import SobreSection from '@/components/clinica-estetica/SobreSection'
import ServicosSection from '@/components/clinica-estetica/ServicosSection'
import DepoimentosSection from '@/components/clinica-estetica/DepoimentosSection'
import CtaSection from '@/components/clinica-estetica/CtaSection'
import Footer from '@/components/clinica-estetica/Footer'
import WhatsAppFloat from '@/components/clinica-estetica/WhatsAppFloat'

export const metadata: Metadata = {
  title: 'Lumière Clinic | Estética Premium em Fortaleza, CE',
  description:
    'Transforme sua beleza com os tratamentos estéticos mais exclusivos de Fortaleza. Bioestimuladores, preenchimento, toxina botulínica e mais. Agende sua consulta gratuita.',
  keywords: [
    'clínica estética Fortaleza',
    'estética premium Fortaleza',
    'bioestimuladores Fortaleza',
    'preenchimento facial CE',
    'botox Fortaleza',
    'skincare premium Ceará',
    'Lumière Clinic Fortaleza',
  ],
  openGraph: {
    title: 'Lumière Clinic | Estética Premium em Fortaleza',
    description:
      'Tratamentos exclusivos que unem ciência avançada e luxo atemporal. Consulta de avaliação gratuita.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Lumière Clinic — Estética Premium em Fortaleza' }],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function LumierePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <Marquee />
      <SobreSection />
      <ServicosSection />
      <DepoimentosSection />
      <CtaSection />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
