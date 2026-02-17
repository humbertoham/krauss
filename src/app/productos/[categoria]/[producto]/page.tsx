import { notFound } from 'next/navigation'
import Link from 'next/link'
import { categories } from '@/data/products'
import ProductCarousel from '@/components/ProductCarousel'
import RelatedProducts from '@/components/RelatedProducts'
import ProductQuoteForm from '@/components/ProductQuoteForm'
import ProductComparison from '@/components/ProductComparison'
import CategoryFunctions from '@/components/CategoryFunctions'
import ProductConfigurationShowcase from '@/components/ProductConfigurationShowcase'


type PageProps = {
  params: Promise<{
    categoria: string
    producto: string
  }>
}

export default async function ProductPage({ params }: PageProps) {
  const { categoria, producto } = await params

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
          {/* Breadcrumb */}
          <div className="mb-8 text-sm text-[var(--km-gray-dark)]">
            <Link href="/productos" className="hover:underline">
              Productos
            </Link>
            <span className="mx-2">/</span>
            <Link href={`/productos/${category.slug}`} className="hover:underline">
              {category.title}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-[var(--km-black)] font-semibold">{product.model}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Carousel (usa images[]) */}
            <ProductCarousel images={product.images} name={product.name} />

            {/* Info */}
            <div>
              <span className="subtitle text-[var(--km-red)]">{category.title}</span>

              <h1 className="title-primary mt-4">{product.name}</h1>

              <div className="mt-3 flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center border border-black/10 px-3 py-1">
                  <strong className="mr-2">Modelo:</strong> {product.model}
                </span>
                <span className="inline-flex items-center border border-black/10 px-3 py-1">
                  <strong className="mr-2">Capacidad:</strong>{' '}
                  {product.capacityKg.toLocaleString()} kg
                </span>
                <span className="inline-flex items-center border border-black/10 px-3 py-1">
                  <strong className="mr-2">Ruedas:</strong> {product.wheels}
                </span>
              </div>

              <p className="italic text-[var(--km-gray-dark)] mt-6">{product.tagline}</p>

              <p className="text-body mt-6">{product.description}</p>

              {/* Specs */}
              <div className="mt-10 border-t border-black/10 pt-8">
                <h2 className="font-title text-xl mb-6">Especificaciones Técnicas</h2>

                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {product.specs.map((spec) => (
                    <li key={spec.label} className="flex justify-between border-b border-black/10 pb-2 text-sm">
                      <span className="font-semibold">{spec.label}</span>
                      <span className="text-[var(--km-gray-dark)]">{spec.value}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-col sm:flex-row gap-3">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center justify-center"
                >
                  Solicitar Cotización
                </a>

                <Link
                  href={`/productos/${category.slug}`}
                  className="inline-flex items-center justify-center border border-[var(--km-black)]
                             px-6 py-3 font-semibold transition-all duration-300
                             hover:bg-[var(--km-black)] hover:text-white"
                >
                  Volver a {category.title}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <ProductConfigurationShowcase product={product} />

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
