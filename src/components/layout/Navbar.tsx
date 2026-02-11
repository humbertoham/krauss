'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import {
  FiMenu,
  FiX,
  FiChevronDown,
  FiPhone,
  FiMail,
} from 'react-icons/fi'

import { categories } from '@/data/products'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)

  return (
    <>
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 bg-[var(--km-white)] border-b border-black/10">
        <div className="container-km h-20 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Krauss Machinery"
              width={150}
              height={42}
              priority
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="nav-underline font-title text-sm tracking-wideTitle text-[var(--km-gray-dark)] hover:text-[var(--km-black)] transition"
            >
              Inicio
            </Link>

            {/* PRODUCTOS */}
            <div className="relative group">
              <Link
              href="/productos"
                className="inline-flex items-center gap-1 font-title text-sm tracking-wideTitle text-[var(--km-gray-dark)] hover:text-[var(--km-black)] transition"
              >
                <span className="nav-underline">Productos</span>
                <FiChevronDown className="text-xs mt-[1px]" />
              </Link>

              {/* DROPDOWN */}
              <div
                className="invisible opacity-0 group-hover:visible group-hover:opacity-100
                           absolute top-full left-0 mt-6 w-[420px]
                           bg-[var(--km-white)] border border-black/10 shadow-strong
                           p-6 grid grid-cols-2 gap-4
                           transition-all duration-200 z-50"
              >
                {categories.map((category) => (
  <Link
    key={category.slug}
    href={`/productos/${category.slug}`}
    className="nav-underline text-sm text-[var(--km-gray-dark)] hover:text-[var(--km-red)] transition"
  >
    {category.title}
  </Link>
))}

              </div>
            </div>

            <Link
              href="/nosotros"
              className="nav-underline font-title text-sm tracking-wideTitle text-[var(--km-gray-dark)] hover:text-[var(--km-black)] transition"
            >
              Sobre Nosotros
            </Link>

            <Link
              href="/contacto"
              className="nav-underline font-title text-sm tracking-wideTitle text-[var(--km-gray-dark)] hover:text-[var(--km-black)] transition"
            >
              Contáctanos
            </Link>

            {/* CTA */}
            <Link
              href="/contacto"
              className="btn-primary flex items-center gap-2"
            >
              <FiPhone />
              Cotizar
            </Link>
          </nav>

          {/* MOBILE TOGGLE */}
          {!menuOpen && (
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden"
              aria-label="Abrir menú"
            >
              <FiMenu size={28} />
            </button>
          )}
        </div>
      </header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-90 bg-[var(--km-white)]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* HEADER */}
            <div className="container-km h-20 flex items-center justify-between border-b border-black/10">
              <Image
                src="/logo.png"
                alt="Krauss Machinery"
                width={150}
                height={42}
              />
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Cerrar menú"
              >
                <FiX size={28} />
              </button>
            </div>

            {/* CONTENT */}
            <div className="container-km py-10 flex flex-col gap-6">
              <Link
                href="/"
                className="nav-underline font-title text-2xl text-[var(--km-black)]"
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </Link>

              {/* PRODUCTS MOBILE */}
              <button
                onClick={() => setProductsOpen(!productsOpen)}
                className="flex items-center justify-between font-title text-2xl text-[var(--km-black)]"
              >
                <span className="nav-underline">Productos</span>
                <FiChevronDown
                  className={`transition ${
                    productsOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="pl-4 flex flex-col gap-3 overflow-hidden"
                  >
                   {categories.map((category) => (
  <Link
    key={category.slug}
    href={`/productos/${category.slug}`}
    onClick={() => {
      setMenuOpen(false)
      setProductsOpen(false)
    }}
    className="nav-underline text-sm text-[var(--km-gray-dark)] hover:text-[var(--km-red)] transition"
  >
    {category.title}
  </Link>
))}

                  </motion.div>
                )}
              </AnimatePresence>

              <Link
                href="/nosotros"
                className="nav-underline font-title text-2xl text-[var(--km-black)]"
                onClick={() => setMenuOpen(false)}
              >
                Sobre Nosotros
              </Link>

              <Link
                href="/contacto"
                className="nav-underline font-title text-2xl text-[var(--km-black)]"
                onClick={() => setMenuOpen(false)}
              >
                Contáctanos
              </Link>

              {/* FOOTER */}
              <div className="pt-10 border-t border-black/10 space-y-4">
                <div className="flex items-center gap-2 text-sm text-[var(--km-gray-dark)]">
                  <FiPhone className="text-[var(--km-red)]" />
                  +52 000 000 0000
                </div>

                <div className="flex items-center gap-2 text-sm text-[var(--km-gray-dark)]">
                  <FiMail className="text-[var(--km-red)]" />
                  ventas@kraussmachinery.com
                </div>

                <Link
                  href="/contacto"
                  className="btn-primary w-full justify-center"
                  onClick={() => setMenuOpen(false)}
                >
                  Solicitar Cotización
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
