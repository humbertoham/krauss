'use client'

import { ProductCategory } from '@/data/products'

type Props = {
  category: ProductCategory
}

export default function CategoryFunctions({ category }: Props) {
  if (!category.functions?.length) return null

  // 🔥 Determinar artículo dinámicamente
  const feminineKeywords = [
    'carretilla',
    'plataforma',
    'pala',
  ]

  const isFeminine = feminineKeywords.some((word) =>
    category.title.toLowerCase().startsWith(word)
  )

  const article = isFeminine ? 'de la' : 'del'

  return (
    <section className="py-28 bg-gray-50 border-t border-black/10">
      <div className="container-km">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="subtitle text-[var(--km-red)]">
            Funcionalidad Operativa
          </span>

          <h2 className="title-secondary mt-4">
            Funciones {article} {category.title}
          </h2>

          <p className="text-body mt-6">
            Diseñadas para maximizar eficiencia, seguridad y rendimiento en cada operación industrial.
          </p>
        </div>

        {/* Lista */}
        <div className="space-y-10 max-w-4xl">
          {category.functions.map((func, index) => (
            <div
              key={index}
              className="border-l-4 border-[var(--km-red)] pl-6 py-2"
            >
              <h3 className="font-title text-lg text-[var(--km-black)] mb-2">
                {func.title}
              </h3>

              <p className="text-[var(--km-gray-dark)] leading-relaxed">
                {func.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
