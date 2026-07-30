import Link from 'next/link'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'
import Logo from '@/components/logo'
import { site, whatsappLink } from '@/data/site'
import { services } from '@/data/services'

function SocialIcon({ src, label, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="inline-flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-primary"
    >
      <span
        aria-hidden="true"
        className="size-4 bg-white"
        style={{
          maskImage: `url(${src})`,
          WebkitMaskImage: `url(${src})`,
          maskRepeat: 'no-repeat',
          WebkitMaskRepeat: 'no-repeat',
          maskPosition: 'center',
          WebkitMaskPosition: 'center',
          maskSize: 'contain',
          WebkitMaskSize: 'contain',
        }}
      />
    </a>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="flex flex-col gap-5">
            <Logo light />
            <p className="max-w-xs text-sm leading-relaxed text-white/60">
              {site.description}
            </p>
            <div className="flex items-center gap-3">
              <SocialIcon src="/icons/instagram.svg" label="Instagram" href={site.social.instagram} />
              <SocialIcon src="/icons/linkedin.svg" label="LinkedIn" href={site.social.linkedin} />
              <SocialIcon src="/icons/youtube.svg" label="YouTube" href={site.social.youtube} />
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/50">
              Kurumsal
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              <li><Link href="/hakkimizda" className="transition-colors hover:text-primary">Hakkımızda</Link></li>
              <li><Link href="/projeler" className="transition-colors hover:text-primary">Projeler</Link></li>
              <li><Link href="/#neden-biz" className="transition-colors hover:text-primary">Neden Biz</Link></li>
              <li><Link href="/#sss" className="transition-colors hover:text-primary">Sık Sorulan Sorular</Link></li>
              <li><Link href="/iletisim" className="transition-colors hover:text-primary">İletişim</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/50">
              Hizmetler
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-white/70">
              {services.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <Link href={`/hizmetler/${s.slug}`} className="transition-colors hover:text-primary">
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white/50">
              İletişim
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{site.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-primary" />
                <a href={`tel:${site.phone.replace(/\s/g, '')}`} className="transition-colors hover:text-primary">
                  {site.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="size-4 shrink-0 text-primary" />
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-primary">
                  {site.email}
                </a>
              </li>
            </ul>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/90"
            >
              <MessageCircle className="size-4" />
              Teklif Al
            </a>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-white/50 sm:flex-row">
          <p>© {year} {site.name}. Tüm hakları saklıdır.</p>
          <p>{site.slogan}</p>
        </div>
      </div>
    </footer>
  )
}
