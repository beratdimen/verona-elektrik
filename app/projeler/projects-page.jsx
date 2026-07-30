"use client";

import { useMemo, useState } from "react";

import PageHeader from "@/components/page-header";
import ProjectCard from "@/components/project-card";
import Reveal from "@/components/reveal";
import CtaBand from "@/components/cta-band";

import { projects, projectFilters } from "@/data/projects";

export default function ProjectsPage() {
  const [filter, setFilter] = useState("hepsi");

  const filteredProjects = useMemo(() => {
    return filter === "hepsi"
      ? projects
      : projects.filter((p) => p.status === filter);
  }, [filter]);

  return (
    <main>
      <PageHeader
        title="Projelerimiz"
        description="Türkiye'nin farklı noktalarında başarıyla tamamladığımız ve yapımı devam eden güneş enerjisi projelerimizi keşfedin."
        breadcrumbs={[{ label: "Projeler" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <Reveal>
          <div className="mb-10 flex flex-wrap justify-center gap-3">
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

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, i) => (
            <Reveal key={project.slug} delay={(i % 3) * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand
        title="Sıradaki projemiz sizin olabilir"
        description="İşletmeniz veya yatırımınız için en uygun güneş enerjisi çözümünü birlikte planlayalım."
      />
    </main>
  );
}
