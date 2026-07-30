import { MessageCircle, Phone } from 'lucide-react'
import Reveal from '@/components/reveal'
import CtaButton from '@/components/cta-button'
import { site, whatsappLink } from '@/data/site'

export default function CtaBand({
  title = 'Projeniz için ücretsiz teklif alın',
  description = 'Uzman ekibimiz ihtiyacınıza en uygun güneş enerjisi çözümünü belirlesin. WhatsApp üzerinden hemen iletişime geçin.',
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-[2rem] bg-primary px-6 py-14 text-center sm:px-12 lg:py-20">
        <div className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-white/10 blur-2xl" />
        <div className="pointer-events-none absolute -bottom-20 -right-10 size-72 rounded-full bg-accent/30 blur-3xl" />

        <div className="relative mx-auto flex max-w-2xl flex-col items-center gap-6">
          <h2 className="text-balance text-3xl font-extrabold tracking-tight text-primary-foreground sm:text-4xl">
            {title}
          </h2>
          <p className="text-pretty leading-relaxed text-primary-foreground/85">
            {description}
          </p>
          <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
            <CtaButton
              href={whatsappLink()}
              external
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              <MessageCircle className="size-5 text-primary" />
              WhatsApp&apos;tan Teklif Al
            </CtaButton>
            <CtaButton href={`tel:${site.phone.replace(/\s/g, '')}`} external variant="ghostLight" size="lg">
              <Phone className="size-5" />
              {site.phone}
            </CtaButton>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
