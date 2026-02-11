'use client'

import Link from 'next/link'
import Image from 'next/image'

export default function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-[var(--km-white)]">
      <div className="container-km">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <span className="subtitle">
              Sobre Nosotros
            </span>

            <h2 className="title-secondary">
              Experiencia y Confianza
              <br />
              en Maquinaria Industrial
            </h2>

            <p className="text-body max-w-xl">
              En Krauss Machinery nos especializamos en la comercialización de
              maquinaria industrial y de construcción, ofreciendo soluciones
              confiables, asesoría técnica y equipos de alto desempeño para
              empresas de distintos sectores.
            </p>

            <Link
              href="/nosotros"
              className="inline-flex items-center justify-center
                         border border-[var(--km-black)]
                         text-[var(--km-black)]
                         px-6 py-3
                         font-semibold
                         transition-all duration-300
                         hover:bg-[var(--km-black)]
                         hover:text-white"
            >
              Conoce Más
            </Link>
          </div>

          {/* Visual block */}
<div className="relative h-64 sm:h-80 lg:h-[480px] overflow-hidden">
  <Image
    src="/images/layout/about.jpg" // 👉 coloca la imagen en /public
    alt="Maquinaria industrial Krauss Machinery"
    fill
    className="object-cover"
  />

  {/* Overlay oscuro */}
  <div className="absolute inset-0 bg-black/50" />

  {/* Texto encima */}
  <div className="absolute inset-0 flex items-center justify-center">
    <span className="font-title text-white text-xl tracking-widest">
      KRAUSS MACHINERY
    </span>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}
