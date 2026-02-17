'use client'

import { useMemo, useState } from 'react'
import { Product, ProductCategory } from '@/data/products'

type ProductComparisonProps = {
  category: ProductCategory
  currentProduct: Product
}

export default function ProductComparison({
  category,
  currentProduct,
}: ProductComparisonProps) {
  // 🔥 Producto por default (el primero distinto al actual)
  const defaultComparison = category.products.find(
    (p) => p.slug !== currentProduct.slug
  )

  const [selectedSlug, setSelectedSlug] = useState<string>(
    defaultComparison?.slug || ''
  )

  const comparisonProduct = useMemo(() => {
    return category.products.find((p) => p.slug === selectedSlug)
  }, [selectedSlug, category.products])

  const allSpecLabels = useMemo(() => {
    const labels = new Set<string>()

    currentProduct.specs.forEach((s) => labels.add(s.label))
    comparisonProduct?.specs.forEach((s) => labels.add(s.label))

    return Array.from(labels)
  }, [currentProduct, comparisonProduct])

  if (!comparisonProduct) return null

  return (
    <section className="py-24 bg-[var(--km-white)] border-t border-black/10">
      <div className="container-km">
        <div className="mb-12">
          <h2 className="title-secondary">
            Comparar Especificaciones
          </h2>

          <p className="text-body mt-4">
            Comparando <strong>{currentProduct.model}</strong> con{' '}
            <strong>{comparisonProduct.model}</strong>.
          </p>
        </div>

        {/* SELECTOR */}
        <div className="mb-10 max-w-sm">
          <select
            value={selectedSlug}
            onChange={(e) => setSelectedSlug(e.target.value)}
            className="w-full border border-black/20 px-4 py-3 outline-none focus:border-[var(--km-red)] transition"
          >
            {category.products
              .filter((p) => p.slug !== currentProduct.slug)
              .map((product) => (
                <option key={product.slug} value={product.slug}>
                  {product.model}
                </option>
              ))}
          </select>
        </div>

        {/* TABLA */}
        <div className="overflow-x-auto border border-black/10">
          <table className="w-full text-sm">
            <thead className="bg-[var(--km-black)] text-white">
              <tr>
                <th className="text-left px-6 py-4">Especificación</th>
                <th className="text-left px-6 py-4">
                  {currentProduct.model}
                </th>
                <th className="text-left px-6 py-4">
                  {comparisonProduct.model}
                </th>
              </tr>
            </thead>

            <tbody>
              {/* Capacidad */}
              <tr className="border-t border-black/10">
                <td className="px-6 py-4 font-semibold">
                  Capacidad (kg)
                </td>
                <td className="px-6 py-4">
                  {currentProduct.capacityKg.toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  {comparisonProduct.capacityKg.toLocaleString()}
                </td>
              </tr>

              {/* Ruedas */}
              <tr className="border-t border-black/10 bg-gray-50">
                <td className="px-6 py-4 font-semibold">
                  Ruedas
                </td>
                <td className="px-6 py-4">
                  {currentProduct.wheels}
                </td>
                <td className="px-6 py-4">
                  {comparisonProduct.wheels}
                </td>
              </tr>

              {/* Specs dinámicos */}
              {allSpecLabels.map((label, index) => {
                const spec1 = currentProduct.specs.find(
                  (s) => s.label === label
                )
                const spec2 = comparisonProduct.specs.find(
                  (s) => s.label === label
                )

                return (
                  <tr
                    key={label}
                    className={`border-t border-black/10 ${
                      index % 2 === 0 ? '' : 'bg-gray-50'
                    }`}
                  >
                    <td className="px-6 py-4 font-semibold">
                      {label}
                    </td>
                    <td className="px-6 py-4">
                      {spec1?.value ?? '—'}
                    </td>
                    <td className="px-6 py-4">
                      {spec2?.value ?? '—'}
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
