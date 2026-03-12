'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function Hero() {
  const { t } = useTranslation('hero')

  return (
    <section className="relative w-full md:pt-0 md:pb-0 md:min-h-[100vh] pt-28 pb-56 overflow-hidden">

      {/* Background mobile */}
      <div
        className="absolute inset-0 bg-cover bg-center md:hidden"
        style={{
          backgroundImage: "url('/images/movil/hero.jpg')",
        }}
      />

      {/* Background desktop */}
      <div
        className="absolute inset-0 bg-cover bg-center hidden md:block"
        style={{
          backgroundImage: "url('/images/layout/hero.jpeg')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center md:min-h-[100vh]  md:pt-24">

        <div className="w-full px-5 md:px-16 lg:px-24">

          <div className="max-w-3xl space-y-4 md:space-y-6 text-left">

            {/* Subtitle */}
            <p className="uppercase tracking-[0.18em] text-xs sm:text-sm md:text-base text-[var(--km-red)] font-semibold">
              {t('subtitle')}
            </p>

            {/* Title */}
            <h1
              className="
              text-white font-extrabold
              leading-[1.1]
              text-3xl sm:text-4xl md:text-6xl lg:text-7xl
            "
            >
              {t('title_line1')}{' '}
              <span className="block sm:inline">
                {t('title_line2')}
              </span>
            </h1>

            {/* Description */}
            <p className="text-white/90 text-sm sm:text-base md:text-lg max-w-md md:max-w-xl">
              {t('description')}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 items-start">

              <Link
                href="/productos"
                className="
                w-fit
                bg-[var(--km-red)] text-white
                px-5 py-2.5 md:px-6 md:py-3
                text-sm md:text-base
                font-semibold
                transition-all duration-300
                hover:opacity-90
                "
              >
                {t('button_products')}
              </Link>

              <Link
                href="/contacto"
                className="
                w-fit
                border border-white text-white
                px-5 py-2.5 md:px-6 md:py-3
                text-sm md:text-base
                font-semibold
                transition-all duration-300
                hover:bg-white hover:text-[var(--km-black)]
                "
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