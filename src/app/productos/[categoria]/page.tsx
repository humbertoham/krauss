import { notFound } from 'next/navigation'
import Link from 'next/link'
import { categories } from '@/data/products'
import Image from 'next/image'
import CategoryProductGrid from '@/components/CategoryProductGrid'
import CategoryAdvantages from '@/components/CategoryAdvantages'

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
<section className="relative min-h-screen w-full overflow-hidden">

  {/* Background */}
  <div
    className="absolute inset-0 bg-cover 
           bg-[position:80%_center] 
           md:bg-center"
    style={{ backgroundImage: `url('${category.image}')` }}
  />


  {/* Content */}
  <div className="relative z-10 flex items-center min-h-screen pt-24">
    <div className="w-full px-6 md:px-16 lg:px-24">
      
      <div className="max-w-4xl text-left space-y-6">

        {/* Subtitle */}
        <p className="uppercase tracking-[0.2em] text-sm md:text-base text-[var(--km-red)] font-semibold">
          Categoría
        </p>

        {/* Title */}
        <h1
          className="text-white font-black leading-tight
                     text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
        >
          {category.title}
        </h1>

        {/* Description */}
        <p className="text-white/90 text-base sm:text-lg md:text-xl max-w-2xl">
          {category.description}
        </p>

        {/* Línea decorativa */}
        <div className="pt-6">
          <div className="h-[5px] w-1/2 bg-[var(--km-white)]" />
        </div>

      </div>

    </div>
  </div>

</section>
      {/* CONTENT */}
      <section className="py-24 bg-[var(--km-white)]">
        <div className="container-km">
          {/* Placeholder de productos */}
          <div className="max-w-2xl mb-12">
            <h2 className="title-secondary font-blakc">
              EQUIPOS DISPONIBLES
            </h2>

            <p className="text-body mt-4">
              A continuación se muestran los equipos disponibles dentro de la
              categoría <strong>{category.title}</strong>. Para información
              detallada y configuraciones específicas, contáctanos.
            </p>
          </div>

{/* Grid de productos reales */}
<CategoryProductGrid category={category} />



        </div>
      </section>
    <CategoryAdvantages category={category} />

     {/* CTA FINAL */}
<section className="bg-[var(--km-black)] py-24">
  <div className="container-km text-center">

    <h2 className="text-3xl md:text-4xl text-white font-black uppercase mb-8">
      ¿NECESITAS ASESORÍA ESPECIALIZADA?
    </h2>

    <p className="text-white/90 text-normal text-lg max-w-3xl mx-auto mb-10">
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
      SOLICITAR COTIZACIÓN
    </a>

  </div>
</section>
    </>
  )
}
