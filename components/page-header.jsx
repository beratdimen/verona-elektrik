import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export default function PageHeader({ title, description, breadcrumbs = [] }) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-muted/40 pt-28 pb-14 lg:pt-36 lg:pb-20">
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-0 size-72 rounded-full bg-secondary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav aria-label="Breadcrumb" className="mb-5">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
            <li>
              <Link href="/" className="transition-colors hover:text-primary">
                Anasayfa
              </Link>
            </li>
            {breadcrumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-1.5">
                <ChevronRight className="size-4 opacity-50" />
                {c.href ? (
                  <Link href={c.href} className="transition-colors hover:text-primary">
                    {c.label}
                  </Link>
                ) : (
                  <span className="font-medium text-foreground">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <h1 className="max-w-3xl text-balance text-4xl font-extrabold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}
