'use client'

import Image from 'next/image'
import Link from 'next/link'
import StatsSection from '@/components/StatsSection'
import CTASection from '@/components/CTASection'

export default function AboutPage() {
  return (
    <>
      {/* HERO ABOUT */}
      <section className="relative py-24 w-full overflow-hidden">
        {/* Background image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/layout/about.jpg')" }}
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 h-full flex items-center pt-20">
          <div className="container-km">
            <div className="max-w-3xl bg-[rgba(28,28,28,0.92)] p-10 shadow-strong">
              <span className="subtitle text-[var(--km-red)]">
                Sobre Nosotros
              </span>

              <h1 className="title-primary text-white mt-4">
                Experiencia, Confianza y
                <br />
                Maquinaria de Alto Desempeño
              </h1>

              <p className="text-white/90 text-lg mt-6 max-w-xl">
                En Krauss Machinery trabajamos con un enfoque claro: ofrecer
                soluciones confiables en maquinaria industrial y de
                construcción que impulsen la productividad de nuestros
                clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT CONTENT */}
      <section className="py-24 bg-[var(--km-white)]">
        <div className="container-km">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div className="space-y-6">
              <h2 className="title-secondary">
                Quiénes Somos
              </h2>

              <p className="text-body max-w-xl">
                Somos una empresa especializada en la comercialización de
                maquinaria industrial y de construcción, enfocada en brindar
                equipos de calidad, asesoría técnica y soluciones adaptadas a
                las necesidades operativas de cada cliente.
              </p>

              <p className="text-body max-w-xl">
                Nuestro compromiso es acompañar a nuestros clientes desde la
                selección del equipo hasta su operación, garantizando
                confiabilidad, respaldo técnico y una relación comercial a
                largo plazo.
              </p>

              <Link
                href="/contacto"
                className="inline-flex items-center justify-center
                           border border-[var(--km-black)]
                           text-[var(--km-black)]
                           px-6 py-3
                           font-semibold
                           transition-all duration-300
                           hover:bg-[var(--km-black)]
                           hover:text-white"
              >
                Contáctanos
              </Link>
            </div>

            {/* Image */}
            <div className="relative h-80 lg:h-[420px]">
              <Image
                src="/images/layout/machinary.jpg"
                alt="Maquinaria industrial Krauss Machinery"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 bg-black/5">
        <div className="container-km">
          <div className="max-w-2xl mb-14">
            <span className="subtitle">
              Nuestros Valores
            </span>

            <h2 className="title-secondary mt-3">
              Lo que Nos Define
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'Compromiso',
                text: 'Acompañamos a nuestros clientes en cada etapa del proceso con atención personalizada.',
              },
              {
                title: 'Calidad',
                text: 'Trabajamos únicamente con equipos que cumplen altos estándares de desempeño y seguridad.',
              },
              {
                title: 'Confianza',
                text: 'Construimos relaciones sólidas basadas en transparencia y resultados.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="border border-black/10 bg-white p-8"
              >
                <h3 className="font-title text-lg text-[var(--km-black)] mb-4">
                  {value.title}
                </h3>

                <p className="text-body">
                  {value.text}
                </p>
              </div>
            ))}
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
