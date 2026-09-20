import { goToCheckout, type CTALocation } from '../lib/checkout'

interface CTAButtonProps {
  children: React.ReactNode
  location: CTALocation
  variant?: 'coral' | 'turquoise' | 'outline-light'
  className?: string
}

const variants = {
  coral: 'bg-coral text-white hover:bg-coral/90 shadow-md shadow-coral/20',
  turquoise: 'bg-turquoise text-white hover:bg-turquoise/90 shadow-md shadow-turquoise/20',
  'outline-light':
    'border-2 border-white/80 text-white hover:bg-white/10 bg-transparent',
}

export function CTAButton({
  children,
  location,
  variant = 'coral',
  className = '',
}: CTAButtonProps) {
  return (
    <button
      type="button"
      data-cta-location={location}
      onClick={() => goToCheckout(location)}
      className={`inline-flex w-full items-center justify-center rounded-2xl px-6 py-4 text-base font-semibold transition-colors sm:w-auto sm:min-w-[220px] ${variants[variant]} ${className}`}
    >
      {children}
    </button>
  )
}
