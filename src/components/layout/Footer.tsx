'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi'

import { categories } from '@/data/products'


export default function Footer() {
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
            Especialistas en maquinaria industrial y de construcción.
            Soluciones confiables para elevar la productividad de tu empresa.
          </p>
        </div>

        {/* NAVEGACIÓN */}
        <div>
          <h4 className="font-title text-sm uppercase tracking-widest text-[var(--km-black)] mb-4">
            Navegación
          </h4>
          <ul className="space-y-3 text-sm text-[var(--km-gray-dark)]">
            <li>
              <Link href="/" className="nav-underline">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/productos" className="nav-underline">
                Productos
              </Link>
            </li>
            <li>
              <Link href="/nosotros" className="nav-underline">
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="nav-underline">
                Contáctanos
              </Link>
            </li>
          </ul>
        </div>

      {/* PRODUCTOS */}
<div>
  <h4 className="font-title text-sm uppercase tracking-widest text-[var(--km-black)] mb-4">
    Productos
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

    {/* Ver todos */}
    <li>
      <Link
        href="/productos"
        className="text-[var(--km-red)] font-semibold hover:underline"
      >
        Ver todos los productos →
      </Link>
    </li>
  </ul>
</div>


        {/* CONTACTO + CTA */}
        <div className="space-y-6">
          <div>
            <h4 className="font-title text-sm uppercase tracking-widest text-[var(--km-black)] mb-4">
              Contacto
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
                México
              </li>
            </ul>
          </div>

          <Link
            href="/contacto"
            className="btn-primary w-full justify-center"
          >
            Solicitar Cotización
          </Link>
        </div>
      </div>

      {/* LEGAL */}
      <div className="border-t border-black/10">
        <div className="container-km py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[var(--km-gray)]">
          <span>
            © {new Date().getFullYear()} Krauss Machinery. Todos los derechos reservados.
          </span>

          <span>
            Diseño y desarrollo profesional
          </span>
        </div>
      </div>
    </footer>
  )
}
