'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiSend } from 'react-icons/fi'

type ProductQuoteFormProps = {
  categoryTitle: string
  productName: string
  productModel: string
}

export default function ProductQuoteForm({
  categoryTitle,
  productName,
  productModel,
}: ProductQuoteFormProps) {

  const { t } = useTranslation('products')

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const phoneNumber = '520000000000'

  const handleWhatsApp = () => {

    const text = `
${t('quoteForm.whatsappIntro')}

${t('quoteForm.category')}: ${categoryTitle}
${t('quoteForm.product')}: ${productName}
${t('quoteForm.model')}: ${productModel}

${t('quoteForm.name')}: ${name}
${t('quoteForm.company')}: ${company}
${t('quoteForm.phone')}: ${phone}

${t('quoteForm.additionalMessage')}:
${message}
    `.trim()

    const encodedText = encodeURIComponent(text)

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedText}`,
      '_blank'
    )
  }

  return (
    <section className="py-24 bg-[var(--km-white)] border-t border-black/10">

      <div className="container-km max-w-4xl">

        <div className="mb-12">

          <h2 className="title-secondary font-black text-normal">
            {t('quoteForm.title')}
          </h2>

          <p className="text-body mt-4">
            {t('quoteForm.description', { product: productName })}
          </p>

        </div>

        <div className="space-y-5">

          {/* PRODUCT INFO */}
          <div className="border border-black/10 p-5 bg-gray-50">

            <p className="text-sm">
              <strong>{t('quoteForm.category')}:</strong> {categoryTitle}
            </p>

            <p className="text-sm">
              <strong>{t('quoteForm.product')}:</strong> {productName}
            </p>

            <p className="text-sm">
              <strong>{t('quoteForm.model')}:</strong> {productModel}
            </p>

          </div>

          <input
            type="text"
            placeholder={t('quoteForm.name')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-black/20 px-4 py-3 outline-none focus:border-[var(--km-red)] transition"
          />

          <input
            type="text"
            placeholder={t('quoteForm.company')}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border border-black/20 px-4 py-3 outline-none focus:border-[var(--km-red)] transition"
          />

          <input
            type="text"
            placeholder={t('quoteForm.phone')}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-black/20 px-4 py-3 outline-none focus:border-[var(--km-red)] transition"
          />

          <textarea
            placeholder={t('quoteForm.message')}
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-black/20 px-4 py-3 outline-none resize-none focus:border-[var(--km-red)] transition"
          />

          <button
            onClick={handleWhatsApp}
            className="btn-primary flex items-center gap-2"
          >
            <FiSend />
            {t('quoteForm.button')}
          </button>

        </div>

      </div>

    </section>
  )
}