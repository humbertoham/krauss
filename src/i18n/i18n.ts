'use client'

import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import es_about from './locales/es/about.json'
import en_about from './locales/en/about.json'
import es_hero from './locales/es/hero.json'
import en_hero from './locales/en/hero.json'
import es_faq from './locales/es/faq.json'
import en_faq from './locales/en/faq.json'
import es_cta from './locales/es/cta.json'
import en_cta from './locales/en/cta.json'
import es_stats from './locales/es/stats.json'
import en_stats from './locales/en/stats.json'
import es_contact from './locales/es/contact.json'
import en_contact from './locales/en/contact.json'
import es_aboutPage from './locales/es/aboutPage.json'
import en_aboutPage from './locales/en/aboutPage.json'
import es_whyUs from './locales/es/whyUs.json'
import en_whyUs  from './locales/en/whyUs.json'
import es_whatsappForm from './locales/es/whatsappForm.json'
import en_whatsappForm  from './locales/en/whatsappForm.json'
import es_products from './locales/es/products.json'
import en_products  from './locales/en/products.json'

import es_footer from './locales/es/footer.json'
import en_footer from './locales/en/footer.json'

import es_navbar from './locales/es/navbar.json'
import en_navbar from './locales/en/navbar.json'

import es_products_page from './locales/es/products-page.json'
import en_products_page  from './locales/en/products-page.json'

import es_product_page from './locales/es/product-page.json'
import en_product_page from './locales/en/product-page.json'

import es_category_page from './locales/es/category-page.json'
import en_category_page from './locales/en/category-page.json'

import es_common from './locales/es/common.json'
import en_common  from './locales/en/common.json'

import es_carousel from './locales/es/carousel.json'
import en_carousel from './locales/en/carousel.json'

const resources = {
  es: {
    about: es_about,
    hero: es_hero,
    faq: es_faq,
    cta: es_cta,
    stats: es_stats,
    contact: es_contact,
    aboutPage: es_aboutPage,
    whyUs: es_whyUs,
    whatsappForm: es_whatsappForm,
    products: es_products,
    footer: es_footer,
    navbar: es_navbar,
    products_page: es_products_page,
    product_page: es_product_page,
    category_page: es_category_page,
    common: es_common,
    carousel: es_carousel,
  },
  en: {
    about: en_about,
    hero: en_hero,
    faq: en_faq,
    cta: en_cta,
    stats: en_stats,
    contact: en_contact,
    aboutPage: en_aboutPage,
    whyUs: en_whyUs,
    whatsappForm: en_whatsappForm,
    products: en_products,
    footer: en_footer,
    navbar: en_navbar,
    products_page: en_products_page,
    product_page: en_product_page,
    category_page: en_category_page,
    common: en_common,
    carousel: en_carousel,
  }
}


if (!i18n.isInitialized) {
  i18n
    .use(initReactI18next)
    .init({
      resources,
      lng: 'es',
      fallbackLng: 'es',
      interpolation: {
        escapeValue: false,
      },
    })
}

export default i18n