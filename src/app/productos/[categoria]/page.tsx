'use client'
import * as React from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import { getProductData } from '@/data/products'

import CategoryProductGrid from '@/components/CategoryProductGrid'
import CategoryAdvantages from '@/components/CategoryAdvantages'

type PageProps = {
  params: Promise<{
    categoria: string
  }>
}

export default function CategoryPage({ params }: PageProps) {

  const { categoria } = React.use(params)

  const { t, i18n } = useTranslation('category_page')

  const locale = (i18n.resolvedLanguage ?? 'es').split('-')[0]
  const categories = getProductData(locale)

  const category = categories.find(
    (cat) => cat.slug === categoria
  )

  if (!category) notFound()

  const whatsappMessage = encodeURIComponent(
    `Hola, me gustaría recibir información y una cotización sobre ${category.title}.`
  )

  const whatsappLink = `https://wa.me/520000000000?text=${whatsappMessage}`

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen w-full overflow-hidden">

        <div
          className="absolute inset-0 bg-cover bg-[position:80%_center] md:bg-center"
          style={{ backgroundImage: `url('${category.image}')` }}
        />

        <div className="relative z-10 flex items-center min-h-screen pt-24">
          <div className="w-full px-6 md:px-16 lg:px-24">

            <div className="max-w-4xl text-left space-y-6">

              <p className="uppercase tracking-[0.2em] text-sm md:text-base text-[var(--km-red)] font-semibold">
                {t('hero.subtitle')}
              </p>

              <h1 className="text-white font-black leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                {category.title}
              </h1>

              <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl">
                {category.description}
              </p>

              <div className="pt-6">
                <div className="h-[5px] w-1/2 bg-[var(--km-white)]" />
              </div>

            </div>

          </div>
        </div>

      </section>

      {/* PRODUCTS */}
      <section className="py-24 bg-[var(--km-white)]">
        <div className="container-km">

          <div className="max-w-2xl mb-12">

            <h2 className="title-secondary font-black">
              {t('products.title')}
            </h2>

            <p className="text-body mt-4">
              {t('products.description', { category: category.title })}
            </p>

          </div>

          <CategoryProductGrid category={category} />

        </div>
      </section>

      <CategoryAdvantages category={category} />

      {/* CTA */}
      <section className="bg-[var(--km-black)] py-24">

        <div className="container-km text-center">

          <h2 className="text-3xl md:text-4xl text-white font-black uppercase mb-8">
            {t('cta.title')}
          </h2>

          <p className="text-white/90 text-normal text-lg max-w-3xl mx-auto mb-10">
            {t('cta.description', { category: category.title })}
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            {t('cta.button')}
          </a>

        </div>

      </section>
    </>
  )
}