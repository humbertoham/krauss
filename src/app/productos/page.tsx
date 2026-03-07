'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import { getProductData } from '@/data/products'

import WhyUs from '@/components/WhyUs'
import WhatsAppForm from '@/components/WhatsAppForm'

export default function ProductsPage() {

  const { t, i18n } = useTranslation('products_page')

  const locale = i18n.resolvedLanguage ?? 'es'
  const categories = getProductData(locale)

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center text-center">

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/layout/products.jpg')" }}
        />

        <div className="relative z-10 px-6 w-full max-w-[1600px] mx-auto">

          <span className="text-[var(--km-red)] tracking-[0.35em] text-sm font-semibold uppercase">
            {t('hero.subtitle')}
          </span>

          <h1 className="
            mt-6
            text-white
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
            font-black
            tracking-[0.06em]
            leading-[1.05]
            w-full
          ">
            {t('hero.title')}
          </h1>

          <div className="h-[5px] bg-white mx-auto mt-10 w-full max-w-[1200px]" />

          <p className="text-white/85 text-base md:text-lg mt-10 max-w-[1200px] mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

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

                {/* IMAGE */}
                <div className="relative h-56">

                  <Image
                    src={category.imageP}
                    alt={category.title}
                    fill
                    className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                  />

                </div>

                {/* CONTENT */}
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
                    {t('viewCategory')}
                  </Link>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

      <WhyUs />

      <WhatsAppForm phoneNumber="521234567890" />

    </>
  )
}