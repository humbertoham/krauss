export type Product = {
  slug: string
  model: string
  name: string
  tagline: string
  capacityKg: number
  wheels: number
  shortDescription: string
  description: string
  descB : string
  images: string[]
  specs: { label: string; value: string }[]

  heroImage?: string
  configurations?: ProductConfigurationItem[]
}

export type ProductConfigurationItem = {
  title: string
  image: string
}

export type CategoryAdvantage = {
  title: string
  description: string
  icon: string
}

export type CategoryFunction = {
  title: string
  description: string
}

export type ProductCategory = {
  slug: string
  title: string
  description: string
  image: string
  imageP: string
  imageM: string
  products: Product[]
  advantages: CategoryAdvantage[]
  functions?: CategoryFunction[]
}