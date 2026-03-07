'use client'

import Link from 'next/link'
import { useTranslation } from 'react-i18next'
import StatsSection from '@/components/StatsSection'
import CTASection from '@/components/CTASection'

import { Handshake, BadgeCheck, ShieldCheck } from 'lucide-react'

type ValueItem = {
  title: string
  text: string
}

export default function AboutPage() {
  const { t } = useTranslation('aboutPage')

  const values = t('values.items', { returnObjects: true }) as ValueItem[]

  const icons = [Handshake, BadgeCheck, ShieldCheck]

  return (
    <>
      {/* HERO SOBRE NOSOTROS */}
      <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center text-center">
        
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/layout/nosotros.jpg')" }}
        />

        {/* Content */}
        <div className="relative z-10 px-6 w-full max-w-[1400px] mx-auto">

          <span className="text-[var(--km-red)] tracking-[0.35em] text-sm font-black uppercase">
            {t('hero.subtitle')}
          </span>

          <h1
            className="
              mt-6
              text-white
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              font-black
              tracking-[0.04em]
              leading-[1.05]
              uppercase
            "
          >
            {t('hero.title_line1')}
            <br className="block" />
            {t('hero.title_line2')}
          </h1>

          <div className="h-[5px] bg-white mx-auto mt-10 w-full max-w-[1100px]" />

          <p className="text-white/90 text-base md:text-lg mt-10 max-w-[1100px] mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section
        id="nosotros"
        className="relative min-h-[80vh] w-full overflow-hidden bg-[var(--km-white)]"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/layout/about.png')",
          }}
        />

        <div className="relative z-10 flex items-center min-h-[80vh] py-24">
          <div className="w-full px-6 md:px-16 lg:px-24">
            <div className="max-w-3xl space-y-6 text-left">

              <h2 className="title-secondary font-black">
                {t('about_section.title')}
              </h2>

              <p className="text-base font-normal text-black/50 max-w-xl">
                {t('about_section.paragraph1')}
              </p>

              <p className="text-base font-normal text-black/50 max-w-xl">
                {t('about_section.paragraph2')}
              </p>

              <div className="pt-4">
                <Link
                  href="/contacto"
                  className="w-fit bg-[var(--km-red)] text-white
                             px-6 py-3 font-semibold
                             transition-all duration-300
                             hover:opacity-90"
                >
                  {t('about_section.button_contact')}
                </Link>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-28 bg-[#f3f3f3]">
        <div className="container-km">

          <div className="max-w-2xl mb-16">
            <span className="text-[var(--km-red)] font-semibold tracking-[0.15em] uppercase text-sm">
              {t('values.subtitle')}
            </span>

            <h2 className="mt-3 text-4xl text-[var(--km-black)] uppercase font-black tracking-[0.03em]">
              {t('values.title')}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {values.map((value, index) => {
              const Icon = icons[index]

              return (
                <div
                  key={index}
                  className="relative bg-white p-10"
                >
                  {/* Icon */}
                  <div className="absolute top-8 right-8">
                    <Icon
                      size={42}
                      strokeWidth={2}
                      className="text-[var(--km-red)]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-[var(--km-red)] font-black uppercase tracking-[0.05em] mb-5">
                    {value.title}
                  </h3>

                  {/* Text */}
                  <p className="text-gray-600 leading-relaxed">
                    {value.text}
                  </p>
                </div>
              )
            })}
          </div>

        </div>
      </section>

      {/* STATS */}
      <StatsSection />

      {/* CTA */}
      <CTASection />
    </>
  )
}