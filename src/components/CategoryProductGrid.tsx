'use client'

import { useMemo, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

import type { ProductCategory } from '@/data/product-types'

type Props = {
  category: ProductCategory
}

export default function CategoryProductGrid({ category }: Props) {

  const { t } = useTranslation('products')

  const [search, setSearch] = useState('')
  const [minCapacity, setMinCapacity] = useState('')
  const [maxCapacity, setMaxCapacity] = useState('')
  const [wheels, setWheels] = useState('')

  const filteredProducts = useMemo(() => {
    return category.products.filter((product) => {

      const matchesSearch =
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.model.toLowerCase().includes(search.toLowerCase())

      const matchesMin =
        !minCapacity || product.capacityKg >= Number(minCapacity)

      const matchesMax =
        !maxCapacity || product.capacityKg <= Number(maxCapacity)

      const matchesWheels =
        !wheels || product.wheels === Number(wheels)

      return matchesSearch && matchesMin && matchesMax && matchesWheels
    })
  }, [search, minCapacity, maxCapacity, wheels, category.products])

  return (
    <>
      {/* FILTROS */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-4 gap-4">

        <input
          type="text"
          placeholder={t('categoryGrid.search')}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border border-black/20 px-4 py-3 outline-none"
        />

        <input
          type="number"
          placeholder={t('categoryGrid.minCapacity')}
          value={minCapacity}
          onChange={(e) => setMinCapacity(e.target.value)}
          className="border border-black/20 px-4 py-3 outline-none"
        />

        <input
          type="number"
          placeholder={t('categoryGrid.maxCapacity')}
          value={maxCapacity}
          onChange={(e) => setMaxCapacity(e.target.value)}
          className="border border-black/20 px-4 py-3 outline-none"
        />

        <select
          value={wheels}
          onChange={(e) => setWheels(e.target.value)}
          className="border border-black/20 px-4 py-3 outline-none"
        >
          <option value="">
            {t('categoryGrid.wheelsAll')}
          </option>

          <option value="3">
            {t('categoryGrid.threeWheels')}
          </option>

          <option value="4">
            {t('categoryGrid.fourWheels')}
          </option>
        </select>

      </div>

      {/* RESULTADOS */}
      <div className="mb-6 text-sm text-[var(--km-gray-dark)]">
        {t('categoryGrid.results', { count: filteredProducts.length })}
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

        {filteredProducts.map((product) => {

          const image = product.images?.[0] ?? '/images/placeholder.png'

          return (
            <div
              key={product.slug}
              className="group border border-black/10 bg-white flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl"
            >

              <div className="relative h-56 overflow-hidden bg-white">

                <Image
                  src={image}
                  alt={product.name}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-contain object-center transition-transform duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-6 flex flex-col justify-between flex-1">

                <div>

                  <span className="text-xs text-[var(--km-red)] font-semibold tracking-wide">
                    {product.model}
                  </span>

                  <h3 className="font-title text-lg text-[var(--km-black)] mt-1 mb-2">
                    {product.name}
                  </h3>

                  <p className="text-sm text-[var(--km-gray-dark)] mb-3">
                    {product.shortDescription}
                  </p>

                  <p className="text-sm font-semibold text-black">
                    {t('categoryGrid.capacity')}:{' '}
                    {product.capacityKg.toLocaleString()} kg
                  </p>

                </div>

                <div className="mt-6">

                  <Link
                    href={`/productos/${category.slug}/${product.slug}`}
                    className="inline-flex items-center justify-center
                               border border-[var(--km-black)]
                               text-[var(--km-black)]
                               px-4 py-2
                               font-semibold
                               transition-all duration-300
                               hover:bg-[var(--km-black)]
                               hover:text-white w-full"
                  >
                    {t('categoryGrid.viewProduct')}
                  </Link>

                </div>

              </div>

            </div>
          )
        })}

      </div>
    </>
  )
}