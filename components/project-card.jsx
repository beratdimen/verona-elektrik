import Image from 'next/image'
import Link from 'next/link'
import { MapPin, ArrowUpRight } from 'lucide-react'

export default function ProjectCard({ project }) {
  const isDone = project.status === 'tamamlanan'
  return (
    <Link
      href={`/projeler/${project.slug}`}
      className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent" />

        <span
          className={`absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
            isDone
              ? 'bg-primary text-primary-foreground'
              : 'bg-accent text-accent-foreground'
          }`}
        >
          <span className="size-1.5 rounded-full bg-current" />
          {isDone ? 'Tamamlandı' : 'Devam Ediyor'}
        </span>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
          <div className="text-white">
            <h3 className="text-lg font-bold leading-tight">{project.title}</h3>
            <p className="mt-1 flex items-center gap-1.5 text-sm text-white/80">
              <MapPin className="size-3.5" />
              {project.location}
            </p>
          </div>
          <ArrowUpRight className="size-6 shrink-0 text-white transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </div>
      </div>

      <div className="flex items-center justify-between gap-3 px-5 py-4 text-sm">
        <span className="font-medium text-muted-foreground">{project.type}</span>
        <span className="rounded-full bg-secondary/10 px-2.5 py-1 font-semibold text-secondary">
          {project.power}
        </span>
      </div>
    </Link>
  )
}
