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

  const feminineKeywords = ['carretilla', 'plataforma', 'pala']

  const isFeminine = feminineKeywords.some((word) =>
    category.title.toLowerCase().startsWith(word)
  )

  const article = isFeminine ? 'nuestra' : 'nuestro'

  return (
    <section className="py-32 bg-[var(--km-white)] border-t border-black/10">
      <div className="container-km">

        {/* HEADER */}
        <div className="mb-20 text-left">
          <span className="text-[var(--km-red)] uppercase tracking-[0.25em] text-sm font-black">
            ¿POR QUÉ ELEGIR KRAUSS?
          </span>

          <h2 className="mt-6 text-4xl md:text-5xl font-black uppercase text-[var(--km-black)] leading-tight">
            VENTAJAS DE {article.toUpperCase()} {category.title.toUpperCase()}
          </h2>

          <p className="mt-8 text-lg md:text-xl text-[var(--km-gray-dark)] max-w-4xl">
            Equipos diseñados para ofrecer rendimiento, seguridad y eficiencia
            en cada operación industrial.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {category.advantages.map((adv, index) => {
            const Icon = iconMap[adv.icon] || FiSettings

            return (
              <div
                key={index}
                className="group flex gap-8 p-10 border border-black/10 bg-white transition-all duration-300 hover:shadow-strong hover:-translate-y-1"
              >
                <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center bg-[var(--km-black)] text-white text-3xl">
                  <Icon />
                </div>

                <div>
                  <h3 className="text-xl font-black uppercase text-[var(--km-black)] mb-4">
                    {adv.title.toUpperCase()}
                  </h3>

                  <p className="text-base md:text-lg text-[var(--km-gray-dark)] leading-relaxed">
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