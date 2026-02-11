'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'

const faqs = [
  {
    question: '¿Qué tipo de maquinaria ofrecen?',
    answer:
      'Ofrecemos maquinaria industrial y de construcción como montacargas, plataformas elevadoras, miniexcavadoras, cargadoras compactas y equipos especializados para distintas industrias.',
  },
  {
    question: '¿Venden o también rentan equipos?',
    answer:
      'Principalmente nos enfocamos en la venta de maquinaria, sin embargo, podemos asesorarte sobre opciones según tus necesidades operativas y disponibilidad.',
  },
  {
    question: '¿Cómo puedo solicitar una cotización?',
    answer:
      'Puedes solicitar una cotización directamente desde nuestro sitio web en la sección de contacto, o comunicarte con nuestro equipo por teléfono o correo electrónico.',
  },
  {
    question: '¿Ofrecen garantía en los equipos?',
    answer:
      'Sí. Todos nuestros equipos cuentan con garantía conforme a las especificaciones del fabricante y respaldo técnico especializado.',
  },
  {
    question: '¿Realizan envíos a toda la República?',
    answer:
      'Sí, realizamos envíos a toda la República Mexicana. Los tiempos y costos de entrega dependen del tipo de equipo y la ubicación.',
  },
  {
    question: '¿Cuentan con refacciones y servicio técnico?',
    answer:
      'Contamos con soporte técnico y asesoría para refacciones, mantenimiento y operación de los equipos que comercializamos.',
  },
]

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-[var(--km-white)]">
      <div className="container-km">
        {/* Header */}
        <div className="max-w-2xl mb-14">
          <span className="subtitle">
            Preguntas Frecuentes
          </span>

          <h2 className="title-secondary mt-3">
            Resolvemos tus Dudas
          </h2>

          <p className="text-body mt-4">
            Aquí respondemos las preguntas más comunes sobre nuestros equipos,
            procesos de compra y soporte técnico.
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-3xl space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={faq.question}
                className="border border-black/10 bg-white"
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-4
                             px-6 py-5 text-left"
                >
                  <span className="font-title text-base text-[var(--km-black)]">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[var(--km-red)]"
                  >
                    <FiChevronDown size={20} />
                  </motion.span>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-[var(--km-gray-dark)] leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
