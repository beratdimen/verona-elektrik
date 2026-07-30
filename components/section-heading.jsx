import Reveal from '@/components/reveal'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  light = false,
}) {
  const alignment = align === 'center' ? 'items-center text-center mx-auto' : 'items-start text-left'
  return (
    <Reveal className={`flex max-w-2xl flex-col gap-4 ${alignment}`}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 self-start rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary data-[center=true]:self-center" data-center={align === 'center'}>
          <span className="size-1.5 rounded-full bg-primary" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`text-pretty text-3xl font-extrabold tracking-tight sm:text-4xl md:text-[2.75rem] md:leading-[1.1] ${light ? 'text-white' : 'text-foreground'}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`text-pretty leading-relaxed ${light ? 'text-white/70' : 'text-muted-foreground'}`}>
          {description}
        </p>
      )}
    </Reveal>
  )
}
