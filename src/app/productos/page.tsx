'use client'

import Link from 'next/link'
import Image from 'next/image'
import { categories } from '@/data/products'
import WhyUs from '@/components/WhyUs'
import WhatsAppForm from '@/components/WhatsAppForm'
export default function ProductsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative py-24 w-full overflow-hidden">
         <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/layout/products.jpg')" }}
        />
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center pt-20">
          <div className="container-km">
            <div className="max-w-3xl bg-[rgba(28,28,28,0.92)] p-10 shadow-strong">
              <span className="subtitle text-[var(--km-red)]">
                Productos
              </span>

              <h1 className="title-primary text-white mt-4">
                Categorías de Maquinaria
              </h1>

              <p className="text-white/90 text-lg mt-6 max-w-xl">
                Explora nuestras categorías de maquinaria industrial y de
                construcción. Nuestro equipo puede asesorarte para encontrar
                el equipo ideal según tus necesidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section className="py-24 bg-[var(--km-white)]">
        <div className="container-km">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {categories.map((category) => (
              <div
                key={category.slug}
                className="group border border-black/10 bg-white overflow-hidden"
              >
                {/* Image */}
                <div className="relative h-56">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col justify-between gap-4">
                  <div>
                    <h2 className="font-title text-lg text-[var(--km-black)] mb-2">
                      {category.title}
                    </h2>

                    <p className="text-sm text-[var(--km-gray-dark)]">
                      {category.description}
                    </p>
                  </div>

                  <Link
                    href={`/productos/${category.slug}`}
                    className="inline-flex items-center justify-center
                               border border-[var(--km-black)]
                               text-[var(--km-black)]
                               px-4 py-2
                               font-semibold
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
        </div>
      </section>
      <WhyUs/>
      <WhatsAppForm phoneNumber="521234567890" />

    </>
  )
}
