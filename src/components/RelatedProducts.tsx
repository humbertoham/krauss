'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ProductCategory } from '@/data/products'

type RelatedProductsProps = {
  category: ProductCategory
  currentProductSlug: string
}

export default function RelatedProducts({
  category,
  currentProductSlug,
}: RelatedProductsProps) {
  const related = category.products
    .filter((product) => product.slug !== currentProductSlug)
    .slice(0, 3)

  if (related.length === 0) return null

  return (
    <section className="mt-24">
      <div className="container-km">
        <div className="max-w-2xl mb-12">
          <h2 className="title-secondary">
            Productos Similares
          </h2>

          <p className="text-body mt-4">
            Otros equipos disponibles dentro de la categoría{' '}
            <strong>{category.title}</strong>.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {related.map((product) => (
            <div
              key={product.slug}
              className="group border border-black/10 bg-white flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl"
            >
              {/* Imagen */}
              <div className="relative h-56 overflow-hidden bg-gray-100">
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Contenido */}
              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs text-[var(--km-red)] font-semibold tracking-wide">
                    {product.model}
                  </span>

                  <h3 className="font-title text-lg text-[var(--km-black)] mt-1 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-sm text-[var(--km-gray-dark)] mb-3">
                    {product.shortDescription}
                  </p>

                  <p className="text-sm font-semibold text-black">
                    Capacidad: {product.capacityKg.toLocaleString()} kg
                  </p>
                </div>

                {/* CTA */}
                <div className="mt-6">
                  <Link
                    href={`/productos/${category.slug}/${product.slug}`}
                    className="inline-flex items-center justify-center
                               border border-[var(--km-black)]
                               text-[var(--km-black)]
                               px-4 py-2
                               font-semibold
                               transition-all duration-300
                               hover:bg-[var(--km-black)]
                               hover:text-white w-full"
                  >
                    Ver producto
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTÓN VER MÁS */}
        <div className="mt-12 flex justify-center">
          <Link
            href={`/productos/${category.slug}`}
            className="inline-flex items-center justify-center
                       border border-[var(--km-black)]
                       px-8 py-3
                       font-semibold
                       transition-all duration-300
                       hover:bg-[var(--km-black)]
                       hover:text-white"
          >
            Ver más de {category.title}
          </Link>
        </div>
      </div>
    </section>
  )
}
