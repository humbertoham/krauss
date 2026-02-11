import { notFound } from 'next/navigation'
import Link from 'next/link'
import { categories } from '@/data/products'
import Image from 'next/image'

type PageProps = {
  params: Promise<{
    categoria: string
  }>
}

export default async function CategoryPage({ params }: PageProps) {
  const { categoria } = await params

  const category = categories.find(
    (cat) => cat.slug === categoria
  )

  if (!category) {
    notFound()
  }

  const whatsappMessage = encodeURIComponent(
    `Hola, me gustaría recibir información y una cotización sobre ${category.title}.`
  )

  const whatsappLink = `https://wa.me/520000000000?text=${whatsappMessage}`

  return (
    <>
      {/* HERO CATEGORÍA */}
      <section className="relative py-24  w-full overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${category.image}')` }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center pt-20">
          <div className="container-km">
            <div className="max-w-3xl bg-[rgba(28,28,28,0.92)] p-10 shadow-strong">
              <span className="subtitle text-[var(--km-red)]">
                Categoría
              </span>

              <h1 className="title-primary text-white mt-4">
                {category.title}
              </h1>

              <p className="text-white/90 text-lg mt-6 max-w-xl">
                {category.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="py-24 bg-[var(--km-white)]">
        <div className="container-km">
          {/* Placeholder de productos */}
          <div className="max-w-2xl mb-12">
            <h2 className="title-secondary">
              Equipos Disponibles
            </h2>

            <p className="text-body mt-4">
              A continuación se muestran los equipos disponibles dentro de la
              categoría <strong>{category.title}</strong>. Para información
              detallada y configuraciones específicas, contáctanos.
            </p>
          </div>

{/* Grid de productos reales */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
  {category.products.map((product) => (
    <div
      key={product.slug}
      className="group border border-black/10 bg-white flex flex-col overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      {/* Imagen principal */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <Image
          src={product.images[0]} // 🔥 ahora usamos images[0]
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Contenido */}
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
            Capacidad: {product.capacityKg.toLocaleString()} kg
          </p>
        </div>

        {/* CTA */}
        <div className="mt-6">
          <Link
            href={`/productos/${categoria}/${product.slug}`}
            className="inline-flex items-center justify-center
                       border border-[var(--km-black)]
                       text-[var(--km-black)]
                       px-4 py-2
                       font-semibold
                       transition-all duration-300
                       hover:bg-[var(--km-black)]
                       hover:text-white w-full"
          >
            Ver producto
          </Link>
        </div>
      </div>
    </div>
  ))}
</div>


        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-[var(--km-black)] py-20">
        <div className="container-km text-center">
          <h2 className="font-title text-3xl md:text-4xl text-white mb-6">
            ¿Necesitas Asesoría Especializada?
          </h2>

          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Nuestro equipo puede ayudarte a seleccionar el equipo ideal dentro
            de la categoría <strong>{category.title}</strong>, según tus
            necesidades operativas y presupuesto.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Solicitar Cotización
          </a>
        </div>
      </section>
    </>
  )
}
