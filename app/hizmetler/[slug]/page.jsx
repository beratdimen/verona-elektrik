import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle2, ArrowRight, MessageCircle } from "lucide-react";
import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";
import Icon from "@/components/icon";
import CtaButton from "@/components/cta-button";
import CtaBand from "@/components/cta-band";
import { services, getService } from "@/data/services";
import { site, whatsappLink } from "@/data/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Hizmet Bulunamadı | Verona Elektrik Enerji" };
  return {
    title: `${service.title} | Verona Elektrik Enerji`,
    description: service.short,
  };
}

export default async function HizmetDetailPage({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);
  const message = `Merhaba, ${service.title} hizmetiniz hakkında teklif almak istiyorum.`;

  return (
    <main>
      <PageHeader
        title={service.title}
        description={service.short}
        breadcrumbs={[
          { label: "Hizmetler", href: "/hizmetler" },
          { label: service.title },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
              />
              <span className="absolute left-5 top-5 inline-flex size-12 items-center justify-center rounded-2xl bg-background/95 text-primary shadow-sm backdrop-blur">
                <Icon name={service.icon} className="size-6" />
              </span>
            </div>
          </Reveal>

          <div className="flex flex-col gap-6">
            <Reveal>
              <h2 className="text-balance text-2xl font-extrabold tracking-tight sm:text-3xl">
                {service.title} nedir?
              </h2>
            </Reveal>
            <Reveal delay={80}>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </Reveal>
            <Reveal delay={160}>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-sm font-medium"
                  >
                    <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                    {f}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={220}>
              <div className="flex flex-wrap gap-3 pt-2">
                <CtaButton
                  href={whatsappLink(message)}
                  external
                  variant="primary"
                >
                  <MessageCircle className="size-5" />
                  Bu Hizmet İçin Teklif Al
                </CtaButton>
                <CtaButton href="/iletisim" variant="outline">
                  İletişime Geç
                  <ArrowRight className="size-4" />
                </CtaButton>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid gap-4 rounded-3xl border border-border bg-muted/40 p-6 sm:grid-cols-3 sm:p-8">
          {service.stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80} className="text-center">
              <div className="font-mono text-3xl font-extrabold text-primary sm:text-4xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Süreç */}
      <section className="bg-muted/40 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              Nasıl Çalışıyoruz
            </span>
            <h2 className="mt-4 text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              {service.title} süreci
            </h2>
          </Reveal>

          <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 80}>
                <li className="relative flex h-full flex-col gap-3 rounded-3xl border border-border bg-card p-6">
                  <span className="inline-flex size-11 items-center justify-center rounded-2xl bg-primary font-mono text-lg font-bold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-base font-bold">{step.title}</h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {step.desc}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Diğer hizmetler */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
          Diğer hizmetlerimiz
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              href={`/hizmetler/${s.slug}`}
              className="group flex min-w-0 items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon name={s.icon} className="size-6" />
              </span>

              <div className="min-w-0 flex-1">
                <h3 className="truncate font-bold transition-colors group-hover:text-primary">
                  {s.title}
                </h3>

                <p className="line-clamp-2 text-sm text-muted-foreground">
                  {s.short}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title={`${service.title} için hemen teklif alın`}
        description={`${site.name} uzmanları, ihtiyacınıza en uygun ${service.title.toLowerCase()} çözümünü sizin için tasarlasın.`}
      />
    </main>
  );
}
