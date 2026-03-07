'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

import { getProductData } from '@/data/products'

export default function Footer() {

  const { t, i18n } = useTranslation('footer')

  const locale = i18n.resolvedLanguage ?? 'es'
  const categories = getProductData(locale)

  return (
    <footer className="bg-[var(--km-white)] border-t border-black/10 mt-24">

      <div className="container-km py-16 grid grid-cols-1 md:grid-cols-4 gap-12">

        {/* BRAND */}
        <div className="space-y-4">

          <Image
            src="/logo.png"
            alt="Krauss Machinery"
            width={160}
            height={44}
          />

          <p className="text-sm text-[var(--km-gray)]">
            {t('description')}
          </p>

        </div>

        {/* NAVEGACIÓN */}
        <div>

          <h4 className="font-title text-sm uppercase tracking-widest text-[var(--km-black)] mb-4">
            {t('navigation')}
          </h4>

          <ul className="space-y-3 text-sm text-[var(--km-gray-dark)]">

            <li>
              <Link href="/" className="nav-underline">
                {t('home')}
              </Link>
            </li>

            <li>
              <Link href="/productos" className="nav-underline">
                {t('products')}
              </Link>
            </li>

            <li>
              <Link href="/nosotros" className="nav-underline">
                {t('about')}
              </Link>
            </li>

            <li>
              <Link href="/contacto" className="nav-underline">
                {t('contactPage')}
              </Link>
            </li>

          </ul>

        </div>

        {/* PRODUCTOS */}
        <div>

          <h4 className="font-title text-sm uppercase tracking-widest text-[var(--km-black)] mb-4">
            {t('products')}
          </h4>

          <ul className="space-y-3 text-sm text-[var(--km-gray-dark)]">

            {categories.slice(0, 4).map((category) => (
              <li key={category.slug}>
                <Link
                  href={`/productos/${category.slug}`}
                  className="nav-underline"
                >
                  {category.title}
                </Link>
              </li>
            ))}

            <li>
              <Link
                href="/productos"
                className="text-[var(--km-red)] font-semibold hover:underline"
              >
                {t('viewAllProducts')}
              </Link>
            </li>

          </ul>

        </div>

        {/* CONTACTO */}
        <div className="space-y-6">

          <div>

            <h4 className="font-title text-sm uppercase tracking-widest text-[var(--km-black)] mb-4">
              {t('contact')}
            </h4>

            <ul className="space-y-3 text-sm text-[var(--km-gray-dark)]">

              <li className="flex items-center gap-2">
                <FiPhone className="text-[var(--km-red)]" />
                +52 000 000 0000
              </li>

              <li className="flex items-center gap-2">
                <FiMail className="text-[var(--km-red)]" />
                ventas@kraussmachinery.com
              </li>

              <li className="flex items-center gap-2">
                <FiMapPin className="text-[var(--km-red)]" />
                {t('country')}
              </li>

            </ul>

          </div>

          <Link
            href="/contacto"
            className="btn-primary w-full justify-center"
          >
            {t('requestQuote')}
          </Link>

        </div>

      </div>

      {/* LEGAL */}
      <div className="border-t border-black/10">

        <div className="container-km py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--km-gray)]">

          <span>
            © {new Date().getFullYear()} Krauss Machinery. {t('rights')}
          </span>

          <span>
            {t('credits')}
          </span>

        </div>

      </div>

    </footer>
  )
}