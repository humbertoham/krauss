'use client'

import { notFound } from 'next/navigation'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import { getProductData } from '@/data/products'

import ProductCarousel from '@/components/ProductCarousel'
import RelatedProducts from '@/components/RelatedProducts'
import ProductQuoteForm from '@/components/ProductQuoteForm'
import ProductComparison from '@/components/ProductComparison'
import CategoryFunctions from '@/components/CategoryFunctions'
import ProductConfigurationShowcase from '@/components/ProductConfigurationShowcase'
import * as React from 'react'
import ImageCarousel from '@/components/ImageCarousel'


type PageProps = {
  params: Promise<{
    categoria: string
    producto: string
  }>
}

export default function ProductPage({ params }: PageProps) {

  const { categoria, producto } = React.use(params)

  const { t, i18n } = useTranslation('product_page')

  const locale = i18n.resolvedLanguage ?? 'es'
  const categories = getProductData(locale)

  const category = categories.find((c) => c.slug === categoria)
  if (!category) notFound()

  const product = category.products.find((p) => p.slug === producto)
  if (!product) notFound()

  const whatsappMessage = encodeURIComponent(
    `Hola, me gustaría cotizar el producto ${product.name} (${product.model}).`
  )

  const whatsappLink = `https://wa.me/520000000000?text=${whatsappMessage}`

  return (
    <>
      <section className="py-24 bg-[var(--km-white)]">

        <div className="container-km">

          {/* BREADCRUMB */}
          <div className="mb-8 text-sm text-[var(--km-gray-dark)]">

            <Link href="/productos" className="hover:underline">
              {t('breadcrumb.products')}
            </Link>

            <span className="mx-2">/</span>

            <Link href={`/productos/${category.slug}`} className="hover:underline">
              {category.title}
            </Link>

            <span className="mx-2">/</span>

            <span className="text-[var(--km-black)] font-semibold">
              {product.model}
            </span>

          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* CAROUSEL */}
            <ProductCarousel images={product.images} name={product.name} />

            {/* INFO */}
            <div>

              <span className="subtitle text-[var(--km-red)]">
                {category.title}
              </span>

              <h1 className="title-primary mt-4">
                {product.name}
              </h1>

              {/* TAGS */}
              <div className="mt-3 flex flex-wrap gap-3 text-sm">

                <span className="inline-flex items-center border border-black/10 px-3 py-1">
                  <strong className="mr-2">{t('labels.model')}:</strong>
                  {product.model}
                </span>

                <span className="inline-flex items-center border border-black/10 px-3 py-1">
                  <strong className="mr-2">{t('labels.capacity')}:</strong>
                  {product.capacityKg.toLocaleString()} kg
                </span>

                <span className="inline-flex items-center border border-black/10 px-3 py-1">
                  <strong className="mr-2">{t('labels.wheels')}:</strong>
                  {product.wheels}
                </span>

              </div>

              <p className="italic text-[var(--km-gray-dark)] mt-6">
                {product.tagline}
              </p>

              <p className="text-body mt-6">
                {product.description}
              </p>

              {product.descB && (
  <p className="text-body ">
    {product.descB}
  </p>
)}

              {/* SPECS */}
              <div className="mt-10 border-t border-black/10 pt-8">

                <h2 className="font-title text-xl mb-6">
                  {t('specs.title')}
                </h2>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">

                  {product.specs.map((spec) => (
                    <li
                      key={spec.label}
                      className="flex justify-between border-b border-black/10 pb-2 text-sm"
                    >
                      <span className="font-semibold">{spec.label}</span>
                      <span className="text-[var(--km-gray-dark)]">{spec.value}</span>
                    </li>
                  ))}

                </ul>

              </div>

              {/* CTA */}
              <div className="mt-10 pb-4 flex flex-col sm:flex-row gap-3">

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  {t('cta.quote')}
                </a>

                <Link
                  href={`/productos/${category.slug}`}
                  className="inline-flex items-center justify-center border border-[var(--km-black)]
                             px-6 py-3 font-semibold transition-all duration-300
                             hover:bg-[var(--km-black)] hover:text-white"
                >
                  {t('cta.back', { category: category.title })}
                </Link>

              </div>

            </div>

          </div>

        </div>

        {/* COMPONENTS */}
        <ProductConfigurationShowcase product={product} />

           {category.slug === 'montacargas-electrico' && (
  <ImageCarousel />
)}

        <ProductComparison
          category={category}
          currentProduct={product}
        />

        <CategoryFunctions category={category} />

        <ProductQuoteForm
          categoryTitle={category.title}
          productName={product.name}
          productModel={product.model}
        />
        
    
        
        <RelatedProducts
          category={category}
          currentProductSlug={product.slug}
        />

      </section>
    </>
  )
}