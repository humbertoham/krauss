'use client'

import {
  FiSettings,
  FiFeather,
  FiTool,
  FiMonitor,
  FiShield,
  FiTrendingUp,
  FiMove,
  FiLayers,
  FiMaximize,
} from 'react-icons/fi'

import { ProductCategory } from '@/data/products'

type Props = {
  category: ProductCategory
}

const iconMap: Record<string, any> = {
  eco: FiFeather,
  precision: FiSettings,
  custom: FiTool,
  interface: FiMonitor,
  durable: FiShield,
  ergonomic: FiMove,
  capacity: FiTrendingUp,
  compact: FiLayers,
  maintenance: FiShield,
  adjustable: FiSettings,
  versatile: FiTool,
  space: FiMaximize,
}

export default function CategoryAdvantages({ category }: Props) {
  if (!category.advantages?.length) return null

  // 🔥 Determinar artículo dinámicamente
  const feminineKeywords = [
    'carretilla',
    'plataforma',
    'pala',
  ]

  const isFeminine = feminineKeywords.some((word) =>
    category.title.toLowerCase().startsWith(word)
  )

  const article = isFeminine ? 'nuestra' : 'nuestro'

  return (
    <section className="py-28 bg-[var(--km-white)] border-t border-black/10">
      <div className="container-km">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="subtitle text-[var(--km-red)]">
            ¿Por qué elegir Krauss?
          </span>

          <h2 className="title-secondary mt-4">
            Ventajas de {article} {category.title}
          </h2>

          <p className="text-body mt-6">
            Equipos diseñados para ofrecer rendimiento, seguridad y eficiencia
            en cada operación industrial.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {category.advantages.map((adv, index) => {
            const Icon = iconMap[adv.icon] || FiSettings

            return (
              <div
                key={index}
                className="group flex gap-6 p-8 border border-black/10 bg-white transition-all duration-300 hover:shadow-strong hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center bg-[var(--km-black)] text-white text-2xl">
                  <Icon />
                </div>

                <div>
                  <h3 className="font-title text-lg text-[var(--km-black)] mb-3">
                    {adv.title}
                  </h3>

                  <p className="text-[var(--km-gray-dark)] text-sm leading-relaxed">
                    {adv.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
