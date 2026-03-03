'use client'

import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/data/products'

export default function ProductsSection() {
  const featuredCategories = categories.slice(0, 3)

  return (
    <section id="productos" className="py-24 bg-[var(--km-white)]">
      
      {/* Contenedor alineado a la izquierda */}
      <div className="w-full px-6 md:px-16 lg:px-24">

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="subtitle">
            Nuestro Catálogo
          </span>

          <h2 className="title-secondary font-black mt-3">
            MAQUINARIA PARA CADA NECESIDAD
          </h2>

          <p className="text-body mt-4">
            Contamos con una amplia gama de equipos industriales y de
            construcción diseñados para maximizar eficiencia, seguridad y
            rendimiento en cada operación.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
          {featuredCategories.map((category) => (
            <div
              key={category.slug}
              className="group relative overflow-hidden
                         border border-black/10
                         bg-white
                         shadow-soft
                         transition-all duration-300
                         hover:shadow-xl"
            >
              {/* Image */}
              <div className="relative h-64 md:h-72 xl:h-80 overflow-hidden">
                <Image
                  src={category.imageP}
                  alt={category.title}
                  fill
                  className="object-contain object-center
                             transition-transform duration-500
                             group-hover:scale-105"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition pointer-events-none" />

              {/* Content */}
              <div className="relative p-8 flex flex-col gap-5">
                <h3 className="font-title text-xl text-[var(--km-black)]">
                  {category.title}
                </h3>

                <Link
                  href={`/productos/${category.slug}`}
                  className="inline-flex items-center justify-center
                             border border-[var(--km-black)]
                             text-[var(--km-black)]
                             px-5 py-3
                             text-sm font-semibold
                             transition-all duration-300
                             hover:bg-[var(--km-black)]
                             hover:text-white
                             w-fit"
                >
                  Ver categoría
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Ver todos */}
        <div className="mt-20 text-center">
          <Link
            href="/productos"
            className="btn-primary"
          >
            Ver todos los productos
          </Link>
        </div>

      </div>
    </section>
  )
}