import Image from 'next/image'
import { MessageCircle, ArrowRight, Sun } from 'lucide-react'
import CtaButton from '@/components/cta-button'
import { whatsappLink } from '@/data/site'

const stats = [
  { label: 'Tamamlanan Proje', value: '150+' },
  { label: 'Kurulu Güç', value: '80 MW+' },
  { label: 'Yıl Tecrübe', value: '10+' },
]

export default function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <Image
        src="/images/hero-solar.png"
        alt="Güneş enerjisi santrali panelleri"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pt-28 pb-16 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <span className="hero-anim inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm" style={{ animationDelay: '0.1s' }}>
            <Sun className="size-4 text-accent" />
            Yenilenebilir Enerji Çözümleri
          </span>

          <h1
            className="hero-anim mt-6 text-balance text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl"
            style={{ animationDelay: '0.2s' }}
          >
            Güneşin Gücünü{' '}
            <span className="text-accent">Enerjiye</span> Dönüştürüyoruz
          </h1>

          <p
            className="hero-anim mt-6 max-w-xl text-pretty text-lg leading-relaxed text-white/80"
            style={{ animationDelay: '0.35s' }}
          >
            Çatı ve arazi GES, sulama sistemleri, araç şarj istasyonları ve enerji
            depolama çözümlerinde anahtar teslim hizmet. Enerjinizi güneşten üretin,
            geleceğe yatırım yapın.
          </p>

          <div
            className="hero-anim mt-9 flex flex-wrap items-center gap-3"
            style={{ animationDelay: '0.5s' }}
          >
            <CtaButton href={whatsappLink()} external variant="primary" size="lg">
              <MessageCircle className="size-5" />
              Ücretsiz Teklif Al
            </CtaButton>
            <CtaButton href="/projeler" variant="ghostLight" size="lg">
              Projelerimiz
              <ArrowRight className="size-5" />
            </CtaButton>
          </div>

          <dl
            className="hero-anim mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-white/15 pt-8"
            style={{ animationDelay: '0.65s' }}
          >
            {stats.map((s) => (
              <div key={s.label} className="flex flex-col">
                <dt className="order-2 text-sm text-white/60">{s.label}</dt>
                <dd className="order-1 text-2xl font-extrabold text-white sm:text-3xl">
                  {s.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <style>{`
        @keyframes hero-in {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hero-anim { opacity: 0; animation: hero-in 0.8s cubic-bezier(0.22,1,0.36,1) both; }
      `}</style>
    </section>
  )
}
