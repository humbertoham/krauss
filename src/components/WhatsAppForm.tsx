'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'

type Props = {
  phoneNumber: string
  context?: string
}

export default function WhatsAppForm({
  phoneNumber,
  context,
}: Props) {
  const { t } = useTranslation('whatsappForm')

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!name || !phone) {
      setError(t('errors.required'))
      return
    }

    setError('')

    const contextLine = context
      ? t('whatsapp.context', { context })
      : ''

    const text = t('whatsapp.template', {
      name,
      company,
      phone,
      message,
      contextLine,
    })

    const encodedText = encodeURIComponent(text)

    window.open(
      `https://wa.me/${phoneNumber}?text=${encodedText}`,
      '_blank'
    )
  }

  return (
    <section className="py-32 bg-[var(--km-white)] border-t border-black/10">
      <div className="container-km max-w-3xl">

        {/* Header */}
        <div className="mb-14">
          <span className="subtitle text-[var(--km-red)]">
            {t('subtitle')}
          </span>

          <h2 className="title-secondary font-black mt-4">
            {t('title')}
          </h2>

          <p className="text-body mt-6">
            {t('description')}
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">

          <input
            type="text"
            placeholder={t('fields.name')}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-black/20 px-5 py-4 outline-none focus:border-[var(--km-red)] transition"
          />

          <input
            type="text"
            placeholder={t('fields.company')}
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border border-black/20 px-5 py-4 outline-none focus:border-[var(--km-red)] transition"
          />

          <input
            type="tel"
            placeholder={t('fields.phone')}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-black/20 px-5 py-4 outline-none focus:border-[var(--km-red)] transition"
          />

          <textarea
            placeholder={t('fields.message')}
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full border border-black/20 px-5 py-4 outline-none resize-none focus:border-[var(--km-red)] transition"
          />

          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            onClick={handleSubmit}
            className="w-full bg-[var(--km-black)] text-white py-4 font-semibold
                       transition-all duration-300 hover:bg-[var(--km-red)]"
          >
            {t('button')}
          </button>

        </div>
      </div>
    </section>
  )
}