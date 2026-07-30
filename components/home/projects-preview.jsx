import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/section-heading'
import ProjectCard from '@/components/project-card'
import Reveal from '@/components/reveal'
import CtaButton from '@/components/cta-button'
import { projects } from '@/data/projects'

export default function ProjectsPreview() {
  const featured = projects.slice(0, 3)
  return (
    <section id="projeler" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <SectionHeading
          align="left"
          eyebrow="Projelerimiz"
          title="Hayata geçirdiğimiz santraller"
          description="Fabrikalardan tekstil tesislerine, kamp alanlarından tiny house köylerine kadar farklı ölçeklerde tamamladığımız ve devam eden projelerimiz."
        />
        <Reveal>
          <CtaButton href="/projeler" variant="outline">
            Tüm Projeler
            <ArrowRight className="size-4" />
          </CtaButton>
        </Reveal>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}
