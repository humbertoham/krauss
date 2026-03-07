'use client'

import { useTranslation } from 'react-i18next'

type Feature = {
  title: string
  description: string
}

export default function WhyUs() {
  const { t } = useTranslation('whyUs')

  const features = t('features', { returnObjects: true }) as Feature[]

  return (
    <section className="py-36 bg-[var(--km-black)] text-white">
      
      {/* Contenedor más ancho */}
      <div className="max-w-[1400px] mx-auto px-6">

        {/* Header */}
        <div className="mb-24">
          <span className="subtitle text-[var(--km-red)] tracking-widest text-sm">
            {t('subtitle')}
          </span>

          <h2 className="mt-6 text-3xl md:text-4xl font-black uppercase tracking-wide">
            {t('title')}
          </h2>

          <p className="text-white/80 mt-6 text-lg leading-relaxed max-w-4xl">
            {t('description')}
          </p>
        </div>

        {/* Grid */}
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