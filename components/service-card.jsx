import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Icon from '@/components/icon'

export default function ServiceCard({ service }) {
  return (
    <Link
      href={`/hizmetler/${service.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={service.image}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent opacity-60" />
        <span className="absolute left-4 top-4 inline-flex size-11 items-center justify-center rounded-2xl bg-background/95 text-primary shadow-sm backdrop-blur">
          <Icon name={service.icon} className="size-5" />
        </span>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold tracking-tight transition-colors group-hover:text-primary">
            {service.title}
          </h3>
          <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
        <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
          {service.short}
        </p>
      </div>
    </Link>
  )
}
