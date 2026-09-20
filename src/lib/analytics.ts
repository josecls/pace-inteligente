import type { CTALocation } from './checkout'
import { PRODUCT_PRICE_VALUE } from './constants'

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
    _fbq?: (...args: unknown[]) => void
  }
}

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID as string | undefined

let pixelInitialized = false

export function initMetaPixel(): void {
  if (!PIXEL_ID || pixelInitialized) return

  pixelInitialized = true

  const n = (window.fbq = function (...args: unknown[]) {
    if (n.callMethod) {
      n.callMethod(...args)
    } else {
      n.queue.push(args)
    }
  }) as typeof window.fbq & {
    callMethod?: (...args: unknown[]) => void
    queue: unknown[][]
    loaded?: boolean
    version?: string
  }

  if (!window._fbq) window._fbq = n
  n.queue = n.queue ?? []
  n.loaded = true
  n.version = '2.0'

  const script = document.createElement('script')
  script.async = true
  script.src = 'https://connect.facebook.net/en_US/fbevents.js'
  document.head.appendChild(script)

  window.fbq?.('init', PIXEL_ID)
  window.fbq?.('track', 'PageView')
  window.fbq?.('track', 'ViewContent', {
    content_name: 'Pace Inteligente',
    content_type: 'product',
    value: PRODUCT_PRICE_VALUE,
    currency: 'BRL',
  })
}

export function trackInitiateCheckout(location: CTALocation): void {
  if (!PIXEL_ID) return
  window.fbq?.('track', 'InitiateCheckout', {
    content_name: 'Pace Inteligente',
    content_type: 'product',
    value: PRODUCT_PRICE_VALUE,
    currency: 'BRL',
    cta_location: location,
  })
}

export function trackPurchase(): void {
  if (!PIXEL_ID) return
  window.fbq?.('track', 'Purchase', {
    content_name: 'Pace Inteligente',
    content_type: 'product',
    value: PRODUCT_PRICE_VALUE,
    currency: 'BRL',
  })
}
