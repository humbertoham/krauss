'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import '@/i18n/i18n'

const languages = [
  {
    code: 'es',
    label: 'ES',
    flag: '🇲🇽',
  },
  {
    code: 'en',
    label: 'EN',
    flag: '🇺🇸',
  },
]

export default function LanguageSwitch() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)

  const current =
    languages.find((l) => l.code === i18n.language) || languages[0]

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
    setOpen(false)
  }

  return (
    <div className="relative">
      {/* BUTTON */}
      <button
        onClick={() => setOpen(!open)}
        className="
        flex items-center gap-2
        h-9 px-3
        border border-black/10
        hover:border-black/30
        transition
        text-sm font-semibold
        bg-white
      "
      >
        <span className="text-base">{current.flag}</span>
        <span className="hidden sm:block">{current.label}</span>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          className="text-xs ml-1"
        >
          ▼
        </motion.span>
      </button>

      {/* DROPDOWN */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.96 }}
            transition={{ duration: 0.18 }}
            className="
            absolute right-0 mt-3
            w-32
            bg-white
            border border-black/10
            shadow-strong
            overflow-hidden
            z-50
          "
          >
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className="
                flex items-center gap-2
                w-full px-3 py-2
                text-sm
                hover:bg-black/5
                transition
              "
              >
                <span className="text-base">{lang.flag}</span>
                {lang.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}