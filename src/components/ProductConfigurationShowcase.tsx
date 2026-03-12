'use client'

import { useState } from 'react'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import type { Product } from '@/data/product-types'

type Props = {
  product: Product
}

export default function ProductConfigurationShowcase({ product }: Props) {

  const { t } = useTranslation('products')

  if (!product.heroImage || !product.configurations?.length) {
    return null
  }

  const [activeIndex, setActiveIndex] = useState(0)
  const activeConfig = product.configurations[activeIndex]

  return (
    <section className="pb-32 pt-8 bg-[var(--km-white)] border-t border-black/10">
      <div className="container-km">

        {/* HEADER */}
        <div className="mb-16 max-w-3xl">

        

          <h2 className="title-secondary mt-4">
            {t('configuration.title')}
          </h2>

          <p className="text-body mt-6">
            {t('configuration.description')}
          </p>

        </div>

        {/* BOTONES */}
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

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* HERO */}
          <div className="relative h-[500px] border bg-white border-black/10 overflow-hidden">

            <Image
              src={product.heroImage}
              alt={product.name}
              fill
              className="object-contain lg:object-cover"
            />

          </div>

          {/* CONFIG IMAGE */}
          <div className="relative h-[500px] border bg-white border-black/10 overflow-hidden">

            <Image
              key={activeConfig.image}
              src={activeConfig.image}
              alt={activeConfig.title}
              fill
             className="object-contain lg:object-cover transition-opacity duration-300"
            />

          </div>

        </div>

      </div>
    </section>
  )
}