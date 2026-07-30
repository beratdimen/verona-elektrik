import Link from 'next/link'

const variants = {
  primary:
    'bg-primary text-primary-foreground hover:bg-primary/90 shadow-sm shadow-primary/20',
  secondary:
    'bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-sm shadow-secondary/20',
  accent: 'bg-accent text-accent-foreground hover:bg-accent/90',
  outline:
    'border border-border bg-background text-foreground hover:border-primary hover:text-primary',
  ghostLight:
    'border border-white/30 text-white hover:bg-white/10',
}

const sizes = {
  md: 'h-11 px-5 text-sm gap-2',
  lg: 'h-12 px-6 text-base gap-2',
}

function classes({ variant = 'primary', size = 'md', className = '' }) {
  return `inline-flex items-center justify-center rounded-full font-semibold whitespace-nowrap transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`
}

export default function CtaButton({
  href,
  external = false,
  variant,
  size,
  className,
  children,
  ...props
}) {
  const cls = classes({ variant, size, className })

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls} {...props}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} className={cls} {...props}>
      {children}
    </Link>
  )
}
