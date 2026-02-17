'use client'

import { useState } from 'react'
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
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')

  const phoneNumber = '520000000000' // 👈 CAMBIA ESTO

  const handleWhatsApp = () => {
    const text = `
Hola, me gustaría solicitar una cotización.

Categoría: ${categoryTitle}
Producto: ${productName}
Modelo: ${productModel}

Nombre: ${name}
Empresa: ${company}
Teléfono: ${phone}

Mensaje adicional:
${message}
    `.trim()

    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank')
  }

  return (
    <section className="py-24 bg-[var(--km-white)] border-t border-black/10">
      <div className="container-km max-w-4xl">
        <div className="mb-12">
          <h2 className="title-secondary">
            Solicitar Cotización
          </h2>

          <p className="text-body mt-4">
            Completa el formulario y recibirás atención personalizada para el equipo{' '}
            <strong>{productName}</strong>.
          </p>
        </div>

        <div className="space-y-5">
          {/* Producto info bloque visual */}
          <div className="border border-black/10 p-5 bg-gray-50">
            <p className="text-sm">
              <strong>Categoría:</strong> {categoryTitle}
            </p>
            <p className="text-sm">
              <strong>Producto:</strong> {productName}
            </p>
            <p className="text-sm">
              <strong>Modelo:</strong> {productModel}
            </p>
          </div>

          <input
            type="text"
            placeholder="Nombre completo"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border border-black/20 px-4 py-3 outline-none focus:border-[var(--km-red)] transition"
          />

          <input
            type="text"
            placeholder="Empresa (opcional)"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="w-full border border-black/20 px-4 py-3 outline-none focus:border-[var(--km-red)] transition"
          />

          <input
            type="text"
            placeholder="Teléfono de contacto"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border border-black/20 px-4 py-3 outline-none focus:border-[var(--km-red)] transition"
          />

          <textarea
            placeholder="Mensaje adicional (opcional)"
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
            Enviar Cotización por WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}
