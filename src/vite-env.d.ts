/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LOWIFY_CHECKOUT_URL?: string
  readonly VITE_META_PIXEL_ID?: string
  readonly VITE_SITE_URL?: string
  readonly VITE_TERMS_URL?: string
  readonly VITE_PRIVACY_URL?: string
  readonly VITE_CONTACT_URL?: string
  readonly VITE_CONTACT_EMAIL?: string
  readonly VITE_CONTACT_WHATSAPP?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
