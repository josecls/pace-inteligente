import { trackInitiateCheckout } from './analytics'

export type CTALocation = 'header' | 'hero' | 'benefits' | 'offer' | 'final' | 'mobile-bar'

const CHECKOUT_URL = import.meta.env.VITE_LOWIFY_CHECKOUT_URL as string | undefined

function mergeUtmParams(checkoutUrl: string): string {
  const currentParams = new URLSearchParams(window.location.search)
  const utmKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content']

  try {
    const url = new URL(checkoutUrl)
    const existing = url.searchParams

    for (const key of utmKeys) {
      const value = currentParams.get(key)
      if (value && !existing.has(key)) {
        existing.set(key, value)
      }
    }

    return url.toString()
  } catch {
    return checkoutUrl
  }
}

export function goToCheckout(location: CTALocation): void {
  trackInitiateCheckout(location)

  if (!CHECKOUT_URL) {
    console.warn(
      '[Pace Inteligente] VITE_LOWIFY_CHECKOUT_URL não configurada. Redirecionando para #oferta.',
    )
    const el = document.getElementById('oferta')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    } else {
      window.location.hash = 'oferta'
    }
    return
  }

  window.location.href = mergeUtmParams(CHECKOUT_URL)
}
