import { useEffect } from 'react'
import { PRODUCT_NAME, PRODUCT_PRICE_VALUE } from '../lib/constants'

interface SEOHeadProps {
  title?: string
  description?: string
  path?: string
  noindex?: boolean
}

const DEFAULT_TITLE = 'Pace Inteligente | Corra com mais estratégia'
const DEFAULT_DESCRIPTION =
  'Entenda pace, esforço e recuperação com um guia visual e prático para corredores iniciantes e recreativos.'

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name'
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.rel = rel
    document.head.appendChild(el)
  }
  el.href = href
}

export function SEOHead({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  noindex = false,
}: SEOHeadProps) {
  useEffect(() => {
    const siteUrl = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, '')
    const canonical = siteUrl ? `${siteUrl}${path}` : undefined
    const ogImage = siteUrl
      ? `${siteUrl}/assets/product-square.webp`
      : '/assets/product-square.webp'

    document.title = title
    setMeta('description', description)
    setMeta('robots', noindex ? 'noindex, nofollow' : 'index, follow')

    if (canonical) setLink('canonical', canonical)

    setMeta('og:title', title, true)
    setMeta('og:description', description, true)
    setMeta('og:type', 'website', true)
    setMeta('og:image', ogImage, true)
    if (canonical) setMeta('og:url', canonical, true)

    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', ogImage)

    const existing = document.getElementById('json-ld-product')
    existing?.remove()

    if (!noindex) {
      const script = document.createElement('script')
      script.id = 'json-ld-product'
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: PRODUCT_NAME,
        description: DEFAULT_DESCRIPTION,
        image: ogImage,
        offers: {
          '@type': 'Offer',
          priceCurrency: 'BRL',
          price: PRODUCT_PRICE_VALUE.toFixed(2),
          availability: 'https://schema.org/InStock',
        },
      })
      document.head.appendChild(script)
    }

    return () => {
      document.getElementById('json-ld-product')?.remove()
    }
  }, [title, description, path, noindex])

  return null
}
