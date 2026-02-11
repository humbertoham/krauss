'use client'

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-[var(--km-black)] py-20">
      <div className="container-km">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10">
          {/* Text */}
          <div className="max-w-2xl space-y-4">
            <span className="subtitle text-[var(--km-red)]">
              Cotización sin Compromiso
            </span>

            <h2 className="font-title text-3xl md:text-4xl text-white">
              ¿Listo para Equipar tu Operación con
              <br />
              Maquinaria Confiable?
            </h2>

            <p className="text-white/90 text-base md:text-lg">
              Nuestro equipo te asesora para encontrar la maquinaria ideal
              según tus necesidades operativas, presupuesto y tiempos de
              entrega.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              href="/contacto"
              className="btn-primary justify-center"
            >
              Solicitar Cotización
            </Link>

            <Link
              href="/productos"
              className="inline-flex items-center justify-center
                         border border-white
                         text-white
                         px-6 py-3
                         font-semibold
                         transition-all duration-300
                         hover:bg-white hover:text-[var(--km-black)]"
            >
              Ver Productos
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
