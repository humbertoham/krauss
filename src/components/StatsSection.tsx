'use client'

import { FiTruck, FiUsers, FiTool, FiGlobe } from 'react-icons/fi'

const stats = [
  {
    icon: FiTruck,
    value: '500+',
    label: 'Equipos Entregados',
  },
  {
    icon: FiUsers,
    value: '300+',
    label: 'Clientes Satisfechos',
  },
  {
    icon: FiTool,
    value: '10+',
    label: 'Años de Experiencia',
  },
  {
    icon: FiGlobe,
    value: 'Cobertura',
    label: 'Nacional',
  },
]

export default function StatsSection() {
  return (
    <section className="py-24 bg-[var(--km-black)]">
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-14 text-center">
          
          {stats.map((stat) => {
            const Icon = stat.icon

            return (
              <div
                key={stat.label}
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