'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const headlineRef = useRef<HTMLDivElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const overlayRef = useRef<HTMLDivElement>(null)

  const whatsapp =
    'https://wa.me/5585999999999?text=Olá!%20Gostaria%20de%20agendar%20uma%20consulta.'

  useEffect(() => {
    let gsap: typeof import('gsap').gsap
    let ScrollTrigger: typeof import('gsap/ScrollTrigger').ScrollTrigger

    async function init() {
      const gsapMod = await import('gsap')
      const stMod = await import('gsap/ScrollTrigger')
      gsap = gsapMod.gsap
      ScrollTrigger = stMod.ScrollTrigger
      gsap.registerPlugin(ScrollTrigger)

      // Entrance animation
      gsap.fromTo(
        headlineRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', delay: 0.3 },
      )
      gsap.fromTo(
        subRef.current,
        { opacity: 0, y: 24 },
        { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out', delay: 0.7 },
      )
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', delay: 1.1 },
      )

      // Parallax on overlay
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          yPercent: 20,
          ease: 'none',
          scrollTrigger: {
            trigger: '#hero',
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }
    }

    init()
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div ref={overlayRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/hero-bg.jpg"
          alt="Ambiente sofisticado da Lumière Clinic"
          fill
          priority
          className="object-cover object-center"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABgUEB//EACIQAAIBBAIDAQAAAAAAAAAAAAECAwAEERIhMUFRYf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCVR2tLLZvFaShGVPChmyBgnYA+Kjz8Xb6Bq1/TjXE1Klxb3EkfQqMeXB5eWOv3I2HvXt6TFmT3z5H7muoiJnzLJJ+P/9k="
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(10,10,8,0.88) 0%, rgba(10,10,8,0.65) 60%, rgba(10,10,8,0.45) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full pt-20">
        <div className="max-w-2xl">
          {/* Pre-headline */}
          <p
            className="text-[10px] tracking-[0.55em] uppercase mb-8"
            style={{ color: 'var(--clinica-gold)', fontFamily: 'var(--font-jost)', fontWeight: 300 }}
          >
            Clínica Estética Premium · Fortaleza, CE
          </p>

          {/* Main headline */}
          <div ref={headlineRef} style={{ opacity: 0 }}>
            <h1
              className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[1.0] mb-6"
              style={{ fontFamily: 'var(--font-cormorant)', fontWeight: 300 }}
            >
              Beleza que{' '}
              <em
                className="not-italic"
                style={{ color: 'var(--clinica-gold)', fontStyle: 'italic' }}
              >
                ilumina
              </em>
              <br />
              quem você
              <br />
              realmente é.
            </h1>
          </div>

          {/* Subheadline */}
          <p
            ref={subRef}
            className="text-base md:text-lg leading-relaxed mb-10 max-w-md"
            style={{
              color: 'var(--clinica-offwhite-2)',
              fontFamily: 'var(--font-jost)',
              fontWeight: 300,
              opacity: 0,
            }}
          >
            Tratamentos estéticos de alto padrão com tecnologia de ponta e a
            assinatura de quem entende de beleza de verdade.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4" style={{ opacity: 0 }}>
            {/* Primary CTA */}
            <a
              href={whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center px-8 py-4 text-[11px] tracking-[0.35em] uppercase transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: 'var(--clinica-gold)',
                color: 'var(--clinica-black)',
                fontFamily: 'var(--font-jost)',
                fontWeight: 500,
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--clinica-gold-light)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'var(--clinica-gold)')}
            >
              Agendar Consulta
            </a>

            {/* Ghost CTA */}
            <a
              href="#servicos"
              className="inline-flex items-center justify-center px-8 py-4 text-[11px] tracking-[0.35em] uppercase border transition-all duration-300 cursor-pointer"
              style={{
                borderColor: 'rgba(240,235,224,0.35)',
                color: 'var(--clinica-offwhite)',
                fontFamily: 'var(--font-jost)',
                fontWeight: 300,
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'var(--clinica-gold)'
                el.style.color = 'var(--clinica-gold)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement
                el.style.borderColor = 'rgba(240,235,224,0.35)'
                el.style.color = 'var(--clinica-offwhite)'
              }}
            >
              Nossos Tratamentos
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span
          className="text-[9px] tracking-[0.4em] uppercase"
          style={{ color: 'var(--clinica-gold)', fontFamily: 'var(--font-jost)' }}
        >
          Scroll
        </span>
        <div
          className="w-px h-12 animate-pulse"
          style={{ background: 'linear-gradient(to bottom, var(--clinica-gold), transparent)' }}
        />
      </div>
    </section>
  )
}
