import { categories as es } from './products.es'
import { categories as en } from './products.en'

export function getProductData(locale: string) {
  return locale === 'en' ? en : es
}