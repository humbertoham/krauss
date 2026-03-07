'use client'

import { useTranslation } from 'react-i18next'
import { FiTruck, FiUsers, FiTool, FiGlobe } from 'react-icons/fi'

type StatItem = {
  value: string
  label: string
}

export default function StatsSection() {
  const { t } = useTranslation('stats')

  const stats = t('items', { returnObjects: true }) as StatItem[]

  const icons = [FiTruck, FiUsers, FiTool, FiGlobe]

  return (
    <section className="py-24 bg-[var(--km-black)]">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-14 text-center">
          
          {stats.map((stat, index) => {
            const Icon = icons[index]

            return (
              <div
                key={index}
                className="flex flex-col items-center gap-5"
              >
                {/* Icon */}
                <div className="text-[var(--km-red)]">
                  <Icon size={46} />
                </div>

                {/* Value */}
                <span className="font-extrabold text-4xl md:text-5xl text-white">
                  {stat.value}
                </span>

                {/* Label */}
                <span className="text-sm md:text-base text-white/80 uppercase tracking-[0.18em] font-semibold">
                  {stat.label}
                </span>
              </div>
            )
          })}

        </div>
      </div>
    </section>
  )
}