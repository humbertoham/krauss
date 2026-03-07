'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronDown } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

type FAQItem = {
  question: string
  answer: string
}

export default function FAQSection() {
  const { t } = useTranslation('faq')
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = t('items', { returnObjects: true }) as FAQItem[]

  return (
    <section className="py-28 bg-[var(--km-white)]">
      
      {/* Alineado como Hero */}
      <div className="w-full px-6 md:px-16 lg:px-24">
        
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="subtitle">
            {t('subtitle')}
          </span>

          <h2 className="title-secondary font-black mt-3">
            {t('title')}
          </h2>

          <p className="text-body mt-4 text-base md:text-lg">
            {t('description')}
          </p>
        </div>

        {/* FAQ List */}
        <div className="max-w-4xl space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index

            return (
              <div
                key={index}
                className="border border-black/10 bg-white
                           transition-all duration-300
                           hover:border-black/30"
              >
                {/* Question */}
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full flex items-center justify-between gap-6
                             px-8 py-6 text-left"
                >
                  <span className="font-title text-lg md:text-xl text-[var(--km-black)]">
                    {faq.question}
                  </span>

                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="text-[var(--km-red)]"
                  >
                    <FiChevronDown size={24} />
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
                      <div className="px-8 pb-8 text-[var(--km-gray-dark)] text-base md:text-lg leading-relaxed">
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