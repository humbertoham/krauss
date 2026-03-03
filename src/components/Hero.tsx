'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/layout/hero.jpg')",
        }}
      />


      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen pt-24">
        
        {/* Contenedor alineado totalmente a la izquierda */}
        <div className="w-full px-6 md:px-16 lg:px-24">
          
          <div className="max-w-3xl space-y-6 text-left">

            {/* Subtitle */}
            <p className="uppercase tracking-[0.2em] text-sm md:text-base text-[var(--km-red)] font-semibold">
              Maquinaria Industrial y de Construcción
            </p>

            {/* Title */}
            <h1
              className="text-white font-extrabold leading-tight en
                         text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Soluciones Confiables en{' '}
              <span className="block sm:inline">
                Maquinaria Pesada
              </span>
            </h1>

            {/* Description */}
            <p className="text-white/90 text-base sm:text-lg max-w-xl">
              Equipos de alto rendimiento para optimizar tus operaciones.
              Montacargas, plataformas elevadoras y maquinaria industrial diseñada
              para los retos más exigentes.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-start">

              <Link
                href="/productos"
                className="w-fit bg-[var(--km-red)] text-white
                           px-6 py-3 font-semibold
                           transition-all duration-300
                           hover:opacity-90"
              >
                Ver Productos
              </Link>

              <Link
                href="/contacto"
                className="w-fit border border-white text-white
                           px-6 py-3 font-semibold
                           transition-all duration-300
                           hover:bg-white hover:text-[var(--km-black)]"
              >
                Solicitar Cotización
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}