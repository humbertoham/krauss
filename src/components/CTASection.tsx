'use client'

import Link from 'next/link'

export default function CTASection() {
  return (
    <section className="bg-[var(--km-black)] py-32">
      
      {/* Igual sistema de padding que el Hero */}
      <div className="w-full px-6 md:px-16 lg:px-24">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-20">
          
          {/* Text */}
          <div className="max-w-2xl space-y-6">
            <span className="subtitle text-[var(--km-red)]">
              Cotización sin Compromiso
            </span>

            <h2 className="font-title text-3xl md:text-4xl lg:text-[40px] text-white font-black uppercase leading-tight">
              ¿LISTO PARA EQUIPAR TU OPERACIÓN CON
              <br className="hidden sm:block" />
              MAQUINARIA CONFIABLE?
            </h2>

            <p className="text-neutral-400 text-base md:text-lg">
              Nuestro equipo te asesora para encontrar la maquinaria ideal
              según tus necesidades operativas, presupuesto y tiempos de
              entrega.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-8 lg:ml-20">
            
            <Link
              href="/contacto"
              className="btn-primary justify-center
                         px-8 py-4
                         lg:px-14 lg:py-5"
            >
              Solicitar Cotización
            </Link>

            <Link
              href="/productos"
              className="inline-flex items-center justify-center
                         border border-white
                         text-white
                         px-8 py-4
                         lg:px-14 lg:py-5
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