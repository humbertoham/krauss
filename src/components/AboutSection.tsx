'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import '@/i18n/i18n'

export default function AboutSection() {

  const { t } = useTranslation('about')

  return (
    <section
      id="nosotros"
      className="relative min-h-[80vh] w-full overflow-hidden bg-[var(--km-white)]"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/layout/about.png')",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-[80vh] py-24">
        <div className="w-full px-6 md:px-16 lg:px-24">
          <div className="max-w-3xl space-y-6 text-left">

            {/* Subtitle */}
            <span className="subtitle">
              {t('subtitle')}
            </span>

            {/* Title */}
            <h2 className="title-secondary font-black">
              {t('title1')}{' '}
              <span className="block sm:inline">
                {t('title2')}
              </span>
            </h2>

            {/* Description */}
            <p className="text-base font-normal text-black/50 max-w-xl">
              {t('description')}
            </p>

            {/* Button */}
            <div className="pt-4">
              <Link
                href="/nosotros"
                className="w-fit bg-[var(--km-red)] text-white
                           px-6 py-3 font-semibold
                           transition-all duration-300
                           hover:opacity-90"
              >
                {t('button')}
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}