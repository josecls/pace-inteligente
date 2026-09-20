import { useEffect, useState } from 'react'
import { goToCheckout } from '../lib/checkout'
import { PRODUCT_NAME, PRODUCT_PRICE } from '../lib/constants'

export function MobileBuyBar() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const hero = document.getElementById('hero')
    if (!hero) return

    const observer = new IntersectionObserver(
      ([entry]) => setVisible(!entry.isIntersecting),
      { threshold: 0, rootMargin: '0px' },
    )

    observer.observe(hero)
    return () => observer.disconnect()
  }, [])

  if (!visible) return null

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-navy/95 px-4 py-3 backdrop-blur-md md:hidden"
      role="region"
      aria-label="Barra de compra"
    >
      <div className="flex items-center justify-between gap-3">
        <p className="min-w-0 text-sm font-medium text-white">
          <span className="block truncate">{PRODUCT_NAME}</span>
          <span className="font-heading text-base font-bold text-turquoise">
            {PRODUCT_PRICE}
          </span>
        </p>
        <button
          type="button"
          data-cta-location="mobile-bar"
          onClick={() => goToCheckout('mobile-bar')}
          className="shrink-0 rounded-xl bg-coral px-5 py-3 text-sm font-semibold text-white"
        >
          Comprar
        </button>
      </div>
    </div>
  )
}
