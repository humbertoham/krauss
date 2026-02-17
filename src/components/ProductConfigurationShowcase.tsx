'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Product } from '@/data/products'

type Props = {
  product: Product
}

export default function ProductConfigurationShowcase({ product }: Props) {
  if (!product.heroImage || !product.configurations?.length) {
    return null
  }

  const [activeIndex, setActiveIndex] = useState(0)
  const activeConfig = product.configurations[activeIndex]

  return (
    <section className="py-32 bg-[var(--km-white)] border-t border-black/10">
      <div className="container-km">

        {/* Header */}
        <div className="mb-16 max-w-3xl">
          <span className="subtitle text-[var(--km-red)]">
            Personalización
          </span>

          <h2 className="title-secondary mt-4">
            Configuración
          </h2>

          <p className="text-body mt-6">
            Explore las diferentes opciones disponibles para adaptar el equipo a sus necesidades operativas.
          </p>
        </div>

        {/* Botones arriba del grid */}
        <div className="flex flex-wrap gap-4 mb-12">
          {product.configurations.map((config, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 border text-sm font-semibold transition-all duration-300
                ${
                  activeIndex === index
                    ? 'bg-[var(--km-black)] text-white border-[var(--km-black)]'
                    : 'border-black/20 hover:bg-[var(--km-black)] hover:text-white'
                }
              `}
            >
              {config.title}
            </button>
          ))}
        </div>

        {/* Grid de imágenes */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* IZQUIERDA — HERO */}
          <div className="relative h-[500px] border border-black/10 overflow-hidden">
            <Image
              src={product.heroImage}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          {/* DERECHA — Imagen dinámica */}
          <div className="relative h-[500px] border border-black/10 overflow-hidden">
            <Image
              key={activeConfig.image}
              src={activeConfig.image}
              alt={activeConfig.title}
              fill
              className="object-cover transition-opacity duration-300"
            />
          </div>

        </div>

      </div>
    </section>
  )
}
