import { Link } from 'react-router-dom'

interface LogoProps {
  className?: string
  light?: boolean
}

export function Logo({ className = '', light = false }: LogoProps) {
  return (
    <Link
      to="/"
      className={`font-heading text-sm font-extrabold tracking-[0.18em] uppercase sm:text-base ${light ? 'text-white' : 'text-navy'} ${className}`}
    >
      Pace Inteligente
    </Link>
  )
}
