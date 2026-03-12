'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { Globe } from 'lucide-react'
import '@/i18n/i18n'

const languages = [
  {
    code: 'es',
    flag: '🇲🇽',
    nameKey: 'spanish',
  },
  {
    code: 'en',
    flag: '🇺🇸',
    nameKey: 'english',
  },
]

export default function LanguageSwitch() {
  const { i18n, t } = useTranslation('common')
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
        text-sm font-medium
        bg-white
      "
      >
        <Globe size={16} className="text-black/70" />

        <span className="hidden sm:block">
          {t('language')}
        </span>

        <span className="text-base">
          {current.flag}
        </span>

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
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.15 }}
            className="
            absolute right-0 mt-3
            w-48
            bg-white
            border border-black/10
            shadow-xl
            z-50
            overflow-hidden
          "
          >
            <div className="px-4 py-2 text-xs uppercase tracking-wider text-black/40 border-b border-black/10">
              {t('selectLanguage')}
            </div>

            {languages.map((lang) => {
              const active = lang.code === i18n.language

              return (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`
                  flex items-center justify-between
                  w-full px-4 py-3
                  text-sm
                  hover:bg-black/5
                  transition
                  ${active ? 'bg-black/5 font-semibold' : ''}
                `}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">
                      {lang.flag}
                    </span>

                    {t(lang.nameKey)}
                  </div>

                  {active && (
                    <span className="text-green-600 text-xs">
                      ✓
                    </span>
                  )}
                </button>
              )
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}