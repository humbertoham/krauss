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
    <section className="relative py-24 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/layout/stats.jpg')", // cambia por tu imagen
        }}
      />

      {/* Overlay sólido */}
      <div className="absolute inset-0 bg-[rgba(28,28,28,0.85)]" />

      {/* Content */}
      <div className="relative z-10">
        <div className="container-km">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {stats.map((stat) => {
              const Icon = stat.icon

              return (
                <div
                  key={stat.label}
                  className="flex flex-col items-center text-center gap-4"
                >
                  {/* Icon */}
                  <div className="text-[var(--km-red)]">
                    <Icon size={42} />
                  </div>

                  {/* Value */}
                  <span className="font-title text-4xl text-white">
                    {stat.value}
                  </span>

                  {/* Label */}
                  <span className="text-sm text-white/80 uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
