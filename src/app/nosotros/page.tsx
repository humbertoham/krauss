'use client'

import Image from 'next/image'
import Link from 'next/link'
import StatsSection from '@/components/StatsSection'
import CTASection from '@/components/CTASection'

import { Handshake, BadgeCheck, ShieldCheck } from 'lucide-react'


export default function AboutPage() {

  
  const values = [
    {
      title: 'COMPROMISO',
      text: 'Acompañamos a nuestros clientes en cada etapa del proceso con atención personalizada.',
      icon: Handshake,
    },
    {
      title: 'CALIDAD',
      text: 'Trabajamos únicamente con equipos que cumplen altos estándares de desempeño y seguridad.',
      icon: BadgeCheck,
    },
    {
      title: 'CONFIANZA',
      text: 'Construimos relaciones sólidas basadas en transparencia y resultados.',
      icon: ShieldCheck,
    },
  ]


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
      Sobre Nosotros
    </span>

    <h1 className="
      mt-6
      text-white
       text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
      font-black
      tracking-[0.04em]
      leading-[1.05]
      uppercase
    ">
      Experiencia, Confianza y
      <br className="hidden md:block" />
      Maquinaria de Alto Desempeño
    </h1>

    {/* Línea decorativa más larga */}
    <div className="h-[5px] bg-white mx-auto mt-10 w-full max-w-[1100px]" />

    <p className="text-white/90 text-base md:text-lg mt-10 max-w-[1100px] mx-auto leading-relaxed">
      En Krauss Machinery trabajamos con un enfoque claro: ofrecer
      soluciones confiables en maquinaria industrial y de construcción
      que impulsen la productividad de nuestros clientes.
    </p>

  </div>
</section>

      {/* ABOUT CONTENT */}
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
            

            {/* Title (mismo tamaño original) */}
            <h2 className="title-secondary font-black">
               QUIÉNES SOMOS
            </h2>

            {/* Description */}
            <p className="text-base font-normal text-black/50 max-w-xl">
              Somos una empresa especializada en la comercialización de maquinaria industrial y de construcción, enfocada en brindar equipos de calidad, asesoría técnica y soluciones adaptadas a las necesidades operativas de cada cliente.
            </p>
            <p className="text-base font-normal text-black/50 max-w-xl">
            Nuestro compromiso es acompañar a nuestros clientes desde la selección del equipo hasta su operación, garantizando confiabilidad, respaldo técnico y una relación comercial a largo plazo.
            </p>

            {/* Botón original */}
            <div className="pt-4">
               <Link
                href="/contacto"
                className="w-fit bg-[var(--km-red)] text-white
                           px-6 py-3 font-semibold
                           transition-all duration-300
                           hover:opacity-90"
              >
                Contáctanos
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
            Nuestros Valores
          </span>

          <h2 className="mt-3 text-4xl  text-[var(--km-black)] uppercase font-black tracking-[0.03em]">
            LO QUE NOS DEFINE
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value) => {
            const Icon = value.icon

            return (
              <div
                key={value.title}
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
