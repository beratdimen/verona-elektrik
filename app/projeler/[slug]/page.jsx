import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  CheckCircle2,
  ArrowRight,
  MessageCircle,
  MapPin,
  Calendar,
  Zap,
  BadgeCheck,
} from "lucide-react";

import PageHeader from "@/components/page-header";
import Reveal from "@/components/reveal";
import CtaButton from "@/components/cta-button";
import CtaBand from "@/components/cta-band";

import { projects, getProject } from "@/data/projects";
import { site, whatsappLink } from "@/data/site";
import ProjectGallery from "@/components/project-gallery";

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) {
    return {
      title: "Proje Bulunamadı | Verona Elektrik Enerji",
    };
  }

  return {
    title: `${project.title} | Verona Elektrik Enerji`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;

  const project = getProject(slug);

  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  const isDone = project.status === "tamamlanan";

  const message = `Merhaba, "${project.title}" projeniz hakkında bilgi almak istiyorum.`;

  return (
    <main>
      <PageHeader
        title={project.title}
        description={project.summary}
        breadcrumbs={[
          {
            label: "Projeler",
            href: "/projeler",
          },
          {
            label: project.title,
          },
        ]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="relative">
              <ProjectGallery images={project.images} title={project.title} />

              <span
                className={`absolute left-5 top-5 z-10 rounded-full px-4 py-2 text-sm font-semibold ${
                  isDone
                    ? "bg-primary text-primary-foreground"
                    : "bg-accent text-accent-foreground"
                }`}
              >
                {isDone ? "Tamamlandı" : "Devam Ediyor"}
              </span>
            </div>
          </Reveal>

          <div className="flex flex-col gap-7">
            <Reveal>
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm">
                  <MapPin className="size-4 text-primary" />

                  {project.location}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm">
                  <Calendar className="size-4 text-primary" />

                  {project.year}
                </span>

                <span className="inline-flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm">
                  <Zap className="size-4 text-primary" />

                  {project.power}
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h2 className="text-3xl font-extrabold tracking-tight">
                Proje Hakkında
              </h2>
            </Reveal>

            <Reveal delay={120}>
              <p className="leading-8 text-muted-foreground">
                {project.description}
              </p>
            </Reveal>

            <Reveal delay={180}>
              <div>
                <h3 className="mb-5 text-xl font-bold">Öne Çıkan Özellikler</h3>

                <ul className="grid gap-4">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={250}>
              <div className="flex flex-wrap gap-3">
                <CtaButton href={whatsappLink(message)} external>
                  <MessageCircle className="size-5" />
                  Benzer Proje Yaptırmak İstiyorum
                </CtaButton>

                <CtaButton href="/iletisim" variant="outline">
                  İletişime Geç
                  <ArrowRight className="size-4" />
                </CtaButton>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid gap-4 rounded-3xl border border-border bg-muted/40 p-6 sm:grid-cols-2 lg:grid-cols-4">
          {project.stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 70} className="text-center">
              <div className="text-3xl font-extrabold text-primary">
                {stat.value}
              </div>

              <div className="mt-2 text-sm text-muted-foreground">
                {stat.label}
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-muted/40 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Reveal className="mx-auto max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <BadgeCheck className="size-4" />
              Proje Bilgileri
            </span>

            <h2 className="mt-5 text-3xl font-extrabold">Teknik Detaylar</h2>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal>
              <div className="rounded-3xl border bg-card p-8">
                <h3 className="text-lg font-bold">Proje Tipi</h3>

                <p className="mt-2 text-muted-foreground">{project.type}</p>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-3xl border bg-card p-8">
                <h3 className="text-lg font-bold">Kurulu Güç</h3>

                <p className="mt-2 text-muted-foreground">{project.power}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-extrabold">Diğer Projelerimiz</h2>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {others.map((item) => (
            <Link
              key={item.slug}
              href={`/projeler/${item.slug}`}
              className="group rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg"
            >
              <h3 className="font-bold group-hover:text-primary">
                {item.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {item.summary}
              </p>

              <span className="mt-5 inline-flex items-center gap-2 font-semibold text-primary">
                Projeyi İncele
                <ArrowRight className="size-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBand
        title="Siz de projelerinizi güneş enerjisiyle güçlendirin"
        description={`${site.name} uzman ekibi, işletmenize özel en verimli güneş enerjisi çözümünü tasarlasın.`}
      />
    </main>
  );
}
