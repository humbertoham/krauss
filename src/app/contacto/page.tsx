'use client'

import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi'

export default function ContactPage() {
  const { t } = useTranslation('contact')

  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [product, setProduct] = useState('')
  const [message, setMessage] = useState('')

  const phoneNumber = '520000000000' // cambia por tu número real

  const handleWhatsApp = () => {
    const text = t('whatsapp.message_template', {
      name,
      company,
      product,
      message,
    })

    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank')
  }

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] w-full overflow-hidden flex items-center justify-center text-center">
        
          {/* Background image */}
         <div
  className="absolute inset-0 bg-cover bg-center md:hidden"
  style={{
    backgroundImage: "url('/images/movil/contacto.jpg')",
  }}
/>

{/* Background desktop */}
<div
  className="absolute inset-0 bg-cover bg-center hidden md:block"
  style={{
    backgroundImage: "url('/images/layout/contacto.jpg')",
  }}
/>
        {/* Content */}
        <div className="relative z-10 px-6 w-full max-w-[1600px] mx-auto">

          <span className="text-[var(--km-red)] tracking-[0.35em] text-sm font-black uppercase">
            {t('hero.subtitle')}
          </span>

          <h1
            className="
              mt-6
              text-white
              text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl
              font-black
              tracking-[0.05em]
              leading-[1.05]
              w-full
              uppercase
            "
          >
            {t('hero.title_line1')}
            <br className="block" />
            {t('hero.title_line2')}
          </h1>

          {/* Decorative line */}
          <div className="h-[5px] bg-white mx-auto mt-10 w-full max-w-[1000px]" />

          <p className="text-white/90 text-lg md:text-xl mt-10 max-w-[1000px] mx-auto leading-relaxed">
            {t('hero.description')}
          </p>

        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24 bg-[var(--km-white)]">
        <div className="container-km">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* FORM */}
            <div>
              <h2 className="title-secondary mb-6">
                {t('form.title')}
              </h2>

              <div className="space-y-5">

                <input
                  type="text"
                  placeholder={t('form.name_placeholder')}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-black/20 px-4 py-3 outline-none"
                />

                <input
                  type="text"
                  placeholder={t('form.company_placeholder')}
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full border border-black/20 px-4 py-3 outline-none"
                />

                <input
                  type="text"
                  placeholder={t('form.product_placeholder')}
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full border border-black/20 px-4 py-3 outline-none"
                />

                <textarea
                  placeholder={t('form.message_placeholder')}
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full border border-black/20 px-4 py-3 outline-none resize-none"
                />

                <button
                  onClick={handleWhatsApp}
                  className="btn-primary flex items-center gap-2"
                >
                  <FiSend />
                  {t('form.button_whatsapp')}
                </button>

              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-8">

              <h2 className="title-secondary">
                {t('info.title')}
              </h2>

              <ul className="space-y-4 text-[var(--km-gray-dark)]">

                <li className="flex items-center gap-3">
                  <FiPhone className="text-[var(--km-red)]" />
                  +52 000 000 0000
                </li>

                <li className="flex items-center gap-3">
                  <FiMail className="text-[var(--km-red)]" />
                  ventas@kraussmachinery.com
                </li>

                <li className="flex items-center gap-3">
                  <FiMapPin className="text-[var(--km-red)]" />
                  {t('info.country')}
                </li>

              </ul>

              <div className="border border-black/10 p-6 bg-white">
                <p className="text-body">
                  {t('info.note')}
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>
    </>
  )
}