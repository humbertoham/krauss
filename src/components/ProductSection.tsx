'use client'

import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/data/products'

export default function ProductsSection() {
  const featuredCategories = categories.slice(0, 3)

  return (
    <section id="productos" className="py-24 bg-[var(--km-white)]">
      <div className="container-km">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="subtitle">
            Nuestro Catálogo
          </span>

          <h2 className="title-secondary mt-3">
            Maquinaria para Cada Necesidad
          </h2>

          <p className="text-body mt-4">
            Contamos con una amplia gama de equipos industriales y de
            construcción diseñados para maximizar eficiencia, seguridad y
            rendimiento en cada operación.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {featuredCategories.map((category) => (
            <div
              key={category.slug}
              className="group relative overflow-hidden
                         border border-black/10
                         bg-white
                         shadow-soft"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-contain object-center  transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition pointer-events-none" />

              {/* Content */}
              <div className="relative p-6 flex flex-col gap-4">
                <h3 className="font-title text-lg text-[var(--km-black)]">
                  {category.title}
                </h3>

                <Link
                  href={`/productos/${category.slug}`}
                  className="inline-flex items-center justify-center
                             border border-[var(--km-black)]
                             text-[var(--km-black)]
                             px-4 py-2
                             text-sm font-semibold
                             transition-all duration-300
                             hover:bg-[var(--km-black)]
                             hover:text-white"
                >
                  Ver categoría
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Ver todos */}
        <div className="mt-16 text-center">
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
