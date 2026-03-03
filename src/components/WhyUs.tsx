'use client'

type Feature = {
  title: string
  description: string
}

const features: Feature[] = [
  {
    title: 'CALIDAD CERTIFICADA',
    description:
      'Nuestros equipos cumplen con estándares internacionales de fabricación y exportación, garantizando seguridad y confiabilidad.',
  },
  {
    title: 'PRECIOS COMPETITIVOS DE FÁBRICA',
    description:
      'Capacidad de producción directa que nos permite ofrecer soluciones industriales a costos optimizados.',
  },
  {
    title: 'ASESORÍA ESPECIALIZADA',
    description:
      'Nuestro equipo técnico analiza sus necesidades operativas para recomendar el equipo ideal.',
  },
  {
    title: 'CONFIGURACIÓN PERSONALIZADA',
    description:
      'Adaptamos capacidades, alturas y accesorios para cumplir con los requerimientos específicos de cada cliente.',
  },
  {
    title: 'SOPORTE POSTVENTA',
    description:
      'Acompañamiento continuo para garantizar el rendimiento y la vida útil del equipo.',
  },
  {
    title: 'ENFOQUE EN EFICIENCIA OPERATIVA',
    description:
      'Soluciones diseñadas para reducir tiempos, optimizar recursos y maximizar productividad.',
  },
]

export default function WhyUs() {
  return (
    <section className="py-36 bg-[var(--km-black)] text-white">
      
      {/* Contenedor más ancho */}
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header más alineado a la izquierda */}
        <div className="mb-24">
          <span className="subtitle text-[var(--km-red)] tracking-widest text-sm">
            KRAUSS MACHINERY
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-black uppercase tracking-wide">
            ¿POR QUÉ ELEGIRNOS?
          </h2>

          <p className="text-white/80 mt-6 text-lg leading-relaxed max-w-4xl">
            Ofrecemos soluciones industriales confiables, eficientes y
            personalizadas, respaldadas por experiencia técnica y
            compromiso con la calidad.
          </p>
        </div>

        {/* Grid real de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((item, index) => (
            <div
              key={index}
              className="border border-white/10 p-10 min-h-[220px]
                         transition-all duration-300
                         hover:border-[var(--km-red)]
                         hover:-translate-y-1"
            >
              <h3 className="text-lg font-black uppercase mb-5 tracking-wide">
                {item.title}
              </h3>

              <p className="text-white/70 text-base leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}