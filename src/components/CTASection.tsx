'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'

export default function CTASection() {
  const { t } = useTranslation('cta')

  return (
    <section className="bg-[var(--km-black)] py-32">
      
      {/* Igual sistema de padding que el Hero */}
      <div className="w-full px-6 md:px-16 lg:px-24">
        
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-20">
          
          {/* Text */}
          <div className="max-w-2xl space-y-6">
            <span className="subtitle text-[var(--km-red)]">
              {t('subtitle')}
            </span>

            <h2 className="font-title text-3xl md:text-4xl lg:text-[40px] text-white font-black uppercase leading-tight">
              {t('title_line1')}
              <br className="hidden sm:block" />
              {t('title_line2')}
            </h2>

            <p className="text-neutral-400 text-base md:text-lg">
              {t('description')}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-8 lg:ml-20">
            
            <Link
              href="/contacto"
              className="btn-primary justify-center
                         px-8 py-4
                         lg:px-14 lg:py-5"
            >
              {t('button_quote')}
            </Link>

            <Link
              href="/productos"
              className="inline-flex items-center justify-center
                         border border-white
                         text-white
                         px-8 py-4
                         lg:px-14 lg:py-5
                         font-semibold
                         transition-all duration-300
                         hover:bg-white hover:text-[var(--km-black)]"
            >
              {t('button_products')}
            </Link>

          </div>

        </div>
      </div>
    </section>
  )
}