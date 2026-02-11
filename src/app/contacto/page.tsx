'use client'

import { useState } from 'react'
import { FiPhone, FiMail, FiMapPin, FiSend } from 'react-icons/fi'

export default function ContactPage() {
  const [name, setName] = useState('')
  const [company, setCompany] = useState('')
  const [product, setProduct] = useState('')
  const [message, setMessage] = useState('')

  const phoneNumber = '520000000000' // 👈 CAMBIA por tu número real (formato internacional)

  const handleWhatsApp = () => {
    const text = `
Hola, mi nombre es ${name}.
Empresa: ${company}.
Producto de interés: ${product}.
Mensaje: ${message}
    `.trim()

    const encodedText = encodeURIComponent(text)
    window.open(`https://wa.me/${phoneNumber}?text=${encodedText}`, '_blank')
  }

  return (
    <>
      {/* HERO */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/60" />

        <div className="relative z-10 h-full flex items-center pt-20">
          <div className="container-km">
            <div className="max-w-3xl bg-[rgba(28,28,28,0.92)] p-10 shadow-strong">
              <span className="subtitle text-[var(--km-red)]">
                Contáctanos
              </span>

              <h1 className="title-primary text-white mt-4">
                Solicita Información o
                <br />
                Cotiza tu Equipo
              </h1>

              <p className="text-white/90 text-lg mt-6 max-w-xl">
                Nuestro equipo está listo para asesorarte y ayudarte a encontrar
                la maquinaria ideal para tu operación.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FORM SECTION */}
      <section className="py-24 bg-[var(--km-white)]">
        <div className="container-km">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* FORM */}
            <div>
              <h2 className="title-secondary mb-6">
                Envíanos un Mensaje
              </h2>

              <div className="space-y-5">
                <input
                  type="text"
                  placeholder="Nombre completo"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full border border-black/20 px-4 py-3 outline-none"
                />

                <input
                  type="text"
                  placeholder="Empresa (opcional)"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full border border-black/20 px-4 py-3 outline-none"
                />

                <input
                  type="text"
                  placeholder="Producto o equipo de interés"
                  value={product}
                  onChange={(e) => setProduct(e.target.value)}
                  className="w-full border border-black/20 px-4 py-3 outline-none"
                />

                <textarea
                  placeholder="Mensaje"
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
                  Enviar por WhatsApp
                </button>
              </div>
            </div>

            {/* CONTACT INFO */}
            <div className="space-y-8">
              <h2 className="title-secondary">
                Información de Contacto
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
                  México
                </li>
              </ul>

              <div className="border border-black/10 p-6 bg-white">
                <p className="text-body">
                  📌 Al enviar el formulario, serás redirigido a WhatsApp para
                  continuar la conversación de manera directa con nuestro
                  equipo comercial.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
