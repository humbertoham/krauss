'use client'

import Link from 'next/link'

export default function AboutSection() {
  return (
    <section
      id="nosotros"
      className="relative min-h-[80vh] w-full overflow-hidden bg-[var(--km-white)]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/layout/about.png')",
        }}
      />

    

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[80vh] py-24">
        <div className="w-full px-6 md:px-16 lg:px-24">
          <div className="max-w-3xl space-y-6 text-left">

            {/* Subtitle */}
            <span className="subtitle">
              Sobre Nosotros
            </span>

            {/* Title (mismo tamaño original) */}
            <h2 className="title-secondary font-black">
              EXPERIENCIA Y CONFIANZA EN{' '}
              <span className="block sm:inline">
                MAQUINARIA INDUSTRIAL
              </span>
            </h2>

            {/* Description */}
            <p className="text-base font-normal text-black/50 max-w-xl">
              En Krauss Machinery nos especializamos en la comercialización de
              maquinaria industrial y de construcción, ofreciendo soluciones
              confiables, asesoría técnica y equipos de alto desempeño para
              empresas de distintos sectores.
            </p>

            {/* Botón original */}
            <div className="pt-4">
               <Link
                href="/nosotros"
                className="w-fit bg-[var(--km-red)] text-white
                           px-6 py-3 font-semibold
                           transition-all duration-300
                           hover:opacity-90"
              >
                Conoce más
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}