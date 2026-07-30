import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/section-heading'
import ServiceCard from '@/components/service-card'
import Reveal from '@/components/reveal'
import CtaButton from '@/components/cta-button'
import { services } from '@/data/services'

export default function ServicesSection() {
  return (
    <section id="hizmetler" className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Hizmetlerimiz"
          title="Uçtan uca güneş enerjisi çözümleri"
          description="Çatı ve arazi santrallerinden sulama sistemlerine, araç şarj istasyonlarından teknik servise kadar tüm ihtiyaçlarınız için tek adres."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 4) * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <CtaButton href="/hizmetler" variant="primary" size="lg">
            Tüm Hizmetleri İncele
            <ArrowRight className="size-5" />
          </CtaButton>
        </div>
      </div>
    </section>
  )
}
