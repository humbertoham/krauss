'use client'

import { FiMessageCircle } from 'react-icons/fi'

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/520000000000?text=Hola,%20me%20gustaría%20recibir%20información%20sobre%20sus%20equipos."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Abrir chat de WhatsApp"
      className="
        fixed bottom-6 right-6 z-50
        w-14 h-14
        rounded-full
        bg-[var(--km-red)]
        flex items-center justify-center
        text-white
        shadow-strong
        transition-all duration-300
        hover:scale-105 hover:shadow-xl
      "
    >
      <FiMessageCircle size={26} />
    </a>
  )
}
