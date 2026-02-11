'use client'

import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/layout/hero.jpg')",
        }}
      />

      {/* Overlay profesional (no difuminado) */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center pt-20">
        <div className="container-km">
          <div className="max-w-3xl space-y-6">
            {/* Subtitle */}
            <span className="subtitle text-white/90">
              Maquinaria Industrial y de Construcción
            </span>

            {/* Title */}
            <h1 className="title-primary text-white">
              Soluciones Confiables en
              <br />
              Maquinaria Pesada
            </h1>

            {/* Description */}
            <p className="text-lg text-white/90 max-w-xl">
              Equipos de alto rendimiento para optimizar tus operaciones.
              Montacargas, plataformas elevadoras y maquinaria industrial
              diseñada para los retos más exigentes.
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Link href="/productos" className="btn-primary">
                Ver Productos
              </Link>

              <Link
                href="/contacto"
                className="inline-flex items-center justify-center
                           border border-white
                           text-white
                           px-6 py-3
                           font-semibold
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
