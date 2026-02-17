'use client'

import { useState } from 'react'

type Props = {
  phoneNumber: string // formato internacional sin +
  context?: string // opcional: categoría o producto
}

export default function WhatsAppForm({
  phoneNumber,
  context,
}: Props) {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = () => {
    if (!name || !phone) {
      setError('Por favor completa tu nombre y teléfono.')
      return
    }

    setError('')

    const text = `
Hola, me gustaría recibir información.

${context ? `Interés: ${context}\n` : ''}

Nombre: ${name}
Empresa: ${company}
Teléfono: ${phone}

Mensaje:
${message}
    `.trim()

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
            Contáctanos
          </span>

          <h2 className="title-secondary mt-4">
            Solicita Información
          </h2>

          <p className="text-body mt-6">
            Completa el formulario y nuestro equipo se pondrá en
            contacto contigo vía WhatsApp.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-6">
          <input
            type="text"
            placeholder="Nombre completo *"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-black/20 px-5 py-4 outline-none focus:border-[var(--km-red)] transition"
          />

          <input
            type="text"
            placeholder="Empresa (opcional)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border border-black/20 px-5 py-4 outline-none focus:border-[var(--km-red)] transition"
          />

          <input
            type="tel"
            placeholder="Teléfono de contacto *"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-black/20 px-5 py-4 outline-none focus:border-[var(--km-red)] transition"
          />

          <textarea
            placeholder="Mensaje adicional (opcional)"
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
            Enviar por WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}
