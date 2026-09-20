import { Link } from 'react-router-dom'
import { isInternalLink } from '../lib/constants'

interface FooterLinkProps {
  href: string
  children: React.ReactNode
}

export function FooterLink({ href, children }: FooterLinkProps) {
  const className = 'hover:text-white transition-colors'

  if (isInternalLink(href)) {
    return (
      <Link to={href} className={className}>
        {children}
      </Link>
    )
  }

  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  )
}
