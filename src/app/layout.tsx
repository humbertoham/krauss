import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'

import '@/i18n/i18n'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.kraussmachinery.com'), // 🔁 cambia luego
  title: {
    default: 'Krauss Machinery | Maquinaria Industrial y de Construcción',
    template: '%s | Krauss Machinery',
  },
  description:
    'Venta y asesoría en maquinaria industrial y de construcción: montacargas, carretillas elevadoras, plataformas, excavadoras y más. Atención especializada en México.',
  keywords: [
    'maquinaria industrial',
    'maquinaria de construcción',
    'montacargas',
    'carretillas elevadoras',
    'apiladores',
    'plataformas elevadoras',
    'miniexcavadoras',
    'venta de maquinaria',
  ],
  authors: [{ name: 'Krauss Machinery' }],
  creator: 'Krauss Machinery',
  publisher: 'Krauss Machinery',

  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://www.kraussmachinery.com', // 🔁 cambia luego
    siteName: 'Krauss Machinery',
    title: 'Krauss Machinery | Maquinaria Industrial y de Construcción',
    description:
      'Especialistas en maquinaria industrial y de construcción. Equipos confiables, asesoría experta y cotización personalizada.',
    images: [
      {
        url: '/card.png',
        width: 1200,
        height: 630,
        alt: 'Krauss Machinery – Maquinaria Industrial',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Krauss Machinery | Maquinaria Industrial',
    description:
      'Venta y asesoría en maquinaria industrial y de construcción.',
    images: ['/card.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },

  alternates: {
    canonical: 'https://www.kraussmachinery.com', // 🔁 cambia luego
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <link id="favicon" rel="icon" href="/favicon.ico" />
    <link id="apple-touch-icon" rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link id="favicon-32x32" rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link id="favicon-16x16" rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link id="android-192x192" rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
    <link id="android-512x512" rel="icon" type="image/png" sizes="512x512.png" href="/android-chrome-512x512.png"  />
    <link id="webmanifest" rel="manifest" href="/site.webmanifest" />
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
