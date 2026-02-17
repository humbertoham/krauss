'use client'

type Feature = {
  title: string
  description: string
}

const features: Feature[] = [
  {
    title: 'Calidad certificada',
    description:
      'Nuestros equipos cumplen con estándares internacionales de fabricación y exportación, garantizando seguridad y confiabilidad.',
  },
  {
    title: 'Precios competitivos de fábrica',
    description:
      'Capacidad de producción directa que nos permite ofrecer soluciones industriales a costos optimizados.',
  },
  {
    title: 'Asesoría especializada',
    description:
      'Nuestro equipo técnico analiza sus necesidades operativas para recomendar el equipo ideal.',
  },
  {
    title: 'Configuración personalizada',
    description:
      'Adaptamos capacidades, alturas y accesorios para cumplir con los requerimientos específicos de cada cliente.',
  },
  {
    title: 'Soporte postventa',
    description:
      'Acompañamiento continuo para garantizar el rendimiento y la vida útil del equipo.',
  },
  {
    title: 'Enfoque en eficiencia operativa',
    description:
      'Soluciones diseñadas para reducir tiempos, optimizar recursos y maximizar productividad.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-32 bg-[var(--km-black)] text-white">
      <div className="container-km">
        {/* Header */}
        <div className="max-w-3xl mb-20">
          <span className="subtitle text-[var(--km-red)]">
            Krauss Machinery
          </span>

          <h2 className="title-secondary text-white mt-4">
            ¿Por qué elegirnos?
          </h2>

          <p className="text-white/80 mt-6 leading-relaxed">
            Ofrecemos soluciones industriales confiables, eficientes y
            personalizadas, respaldadas por experiencia técnica y
            compromiso con la calidad.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 p-8 transition-all duration-300 hover:border-[var(--km-red)]"
            >
              <h3 className="font-title text-lg mb-4">
                {item.title}
              </h3>

              <p className="text-white/70 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
