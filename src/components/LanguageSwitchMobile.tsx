'use client'

import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import '@/i18n/i18n'

const languages = [
  {
    code: 'es',
    label: 'Español',
    flag: '🇲🇽',
  },
  {
    code: 'en',
    label: 'English',
    flag: '🇺🇸',
  },
]

export default function LanguageSwitchMobile() {
  const { i18n } = useTranslation()

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng)
  }

  return (
    <div className="pt-6 border-t border-black/10">
      <p className="text-xs tracking-widest uppercase text-black/50 mb-3">
        Language
      </p>

      <div className="grid grid-cols-2 gap-3">
        {languages.map((lang) => {
          const active = i18n.language === lang.code

          return (
            <motion.button
              key={lang.code}
              whileTap={{ scale: 0.95 }}
              onClick={() => changeLanguage(lang.code)}
              className={`
                flex items-center justify-center gap-2
                py-3
                border
                text-sm font-semibold
                transition
                ${
                  active
                    ? 'border-[var(--km-red)] text-[var(--km-red)] bg-[var(--km-red)]/5'
                    : 'border-black/10 hover:border-black/30'
                }
              `}
            >
              <span className="text-lg">{lang.flag}</span>
              {lang.label}
            </motion.button>
          )
        })}
      </div>
    </div>
  )
}