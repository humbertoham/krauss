'use client'

import { useTranslation } from 'react-i18next'
import type { ProductCategory } from '@/data/product-types'

type Props = {
  category: ProductCategory
}

export default function CategoryFunctions({ category }: Props) {

  const { t, i18n } = useTranslation('products')

  if (!category.functions?.length) return null

  let article = ''

  if (i18n.language.startsWith('es')) {
    const feminineKeywords = ['carretilla', 'plataforma', 'pala']

    const isFeminine = feminineKeywords.some((word) =>
      category.title.toLowerCase().startsWith(word)
    )

    article = isFeminine
      ? t('functions.articleFeminine')
      : t('functions.articleMasculine')
  }

  return (
    <section className="py-28 bg-gray-50 border-t border-black/10">
      <div className="container-km">

        {/* HEADER */}
        <div className="max-w-3xl mb-16">

          <span className="subtitle text-[var(--km-red)]">
            {t('functions.subtitle')}
          </span>

          <h2 className="title-secondary mt-4">

            {i18n.language.startsWith('es')
              ? t('functions.title', {
                  article,
                  category: category.title
                })
              : t('functions.title', {
                  category: category.title
                })
            }

          </h2>

          <p className="text-body mt-6">
            {t('functions.description')}
          </p>

        </div>

        {/* LISTA */}
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