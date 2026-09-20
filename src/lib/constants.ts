export const PRODUCT_NAME = 'Pace Inteligente'
export const PRODUCT_PRICE = 'R$ 4,99'
export const PRODUCT_PRICE_VALUE = 4.99

export const FOOTER_LINKS = {
  terms: import.meta.env.VITE_TERMS_URL ?? '/termos',
  privacy: import.meta.env.VITE_PRIVACY_URL ?? '/privacidade',
  contact: import.meta.env.VITE_CONTACT_URL ?? '/contato',
} as const

export const CONTACT_INFO = {
  email: import.meta.env.VITE_CONTACT_EMAIL as string | undefined,
  whatsappUrl: import.meta.env.VITE_CONTACT_WHATSAPP as string | undefined,
} as const

export function isInternalLink(href: string): boolean {
  return href.startsWith('/') && !href.startsWith('//')
}
