import type { Metadata } from 'next'
import { Cormorant_Garamond, Jost } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jost = Jost({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600'],
  variable: '--font-jost',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://lumiereclinic.com.br'),
  title: 'Lumière Clinic | Estética Premium em Fortaleza, CE',
  description:
    'Transforme sua beleza com os tratamentos estéticos mais exclusivos de Fortaleza. Lumière Clinic — onde ciência e luxo se encontram. Agende sua consulta.',
  keywords: [
    'clínica estética Fortaleza',
    'estética premium Fortaleza',
    'tratamentos estéticos CE',
    'botox Fortaleza',
    'preenchimento Fortaleza',
    'skincare premium',
    'Lumière Clinic',
  ],
  openGraph: {
    title: 'Lumière Clinic | Estética Premium em Fortaleza',
    description:
      'Tratamentos exclusivos que unem ciência avançada e luxo atemporal. Agende sua consulta hoje.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  )
}
