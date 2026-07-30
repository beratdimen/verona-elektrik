"use client";

import { useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";

import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";
import Reveal from "@/components/reveal";
import CtaButton from "@/components/cta-button";

import { projects, projectFilters } from "@/data/projects";

export default function Projects({ preview = false, showHeader = true }) {
  const [filter, setFilter] = useState("hepsi");

  const filteredProjects = useMemo(() => {
    const list =
      filter === "hepsi"
        ? projects
        : projects.filter((p) => p.status === filter);

    return list.slice(0, 3);
  }, [filter]);

  return (
    <section
      id="projeler"
      className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      {showHeader && (
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            align="left"
            eyebrow="Projelerimiz"
            title="Hayata Geçirdiğimiz Projeler"
            description="Türkiye'nin birçok noktasında başarıyla tamamladığımız ve devam eden güneş enerjisi projelerimizi inceleyin."
          />

          {preview && (
            <Reveal>
              <CtaButton href="/projeler" variant="outline">
                Tüm Projeler
                <ArrowRight className="size-4" />
              </CtaButton>
            </Reveal>
          )}
        </div>
      )}

      {/* Filtreler */}

      <Reveal>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {projectFilters.map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                filter === item.key
                  ? "bg-primary text-primary-foreground"
                  : "border border-border bg-background hover:border-primary hover:text-primary"
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 3) * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
