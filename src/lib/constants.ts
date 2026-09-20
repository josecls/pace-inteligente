export const PRODUCT_NAME = 'Pace Inteligente'
export const PRODUCT_PRICE = 'R$ 4,99'
export const PRODUCT_PRICE_VALUE = 4.99

export const FOOTER_LINKS = {
  terms: import.meta.env.VITE_TERMS_URL ?? '#',
  privacy: import.meta.env.VITE_PRIVACY_URL ?? '#',
  contact: import.meta.env.VITE_CONTACT_URL ?? '#',
} as const
