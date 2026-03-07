'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation('hero')

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/layout/hero.jpg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen pt-24">
        
        {/* Contenedor alineado totalmente a la izquierda */}
        <div className="w-full px-6 md:px-16 lg:px-24">
          
          <div className="max-w-3xl space-y-6 text-left">

            {/* Subtitle */}
            <p className="uppercase tracking-[0.2em] text-sm md:text-base text-[var(--km-red)] font-semibold">
              {t('subtitle')}
            </p>

            {/* Title */}
            <h1
              className="text-white font-extrabold leading-tight
                         text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {t('title_line1')}{' '}
              <span className="block sm:inline">
                {t('title_line2')}
              </span>
            </h1>

            {/* Description */}
            <p className="text-white/90 text-base sm:text-lg max-w-xl">
              {t('description')}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 items-start">

              <Link
                href="/productos"
                className="w-fit bg-[var(--km-red)] text-white
                           px-6 py-3 font-semibold
                           transition-all duration-300
                           hover:opacity-90"
              >
                {t('button_products')}
              </Link>

              <Link
                href="/contacto"
                className="w-fit border border-white text-white
                           px-6 py-3 font-semibold
                           transition-all duration-300
                           hover:bg-white hover:text-[var(--km-black)]"
              >
                {t('button_quote')}
              </Link>

            </div>

          </div>
        </div>
      </div>
    </section>
  )
}