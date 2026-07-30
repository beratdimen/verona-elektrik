import SectionHeading from "@/components/section-heading";
import Reveal from "@/components/reveal";
import Icon from "@/components/icon";
import { whyUs } from "@/data/content";

export default function WhyUs() {
  return (
    <section
      id="neden-biz"
      className="relative overflow-hidden bg-foreground py-20 text-white lg:py-28"
    >
      <div className="pointer-events-none absolute -left-40 top-0 size-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-0 size-96 rounded-full bg-secondary/20 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          light
          eyebrow="Neden Biz"
          title="Neden Verona Elektrik Enerji?"
          description="Sadece kurulum değil, uzun vadeli bir enerji ortaklığı sunuyoruz. İşte bizi tercih etmeniz için nedenler."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <Reveal key={item.title} delay={(i % 3) * 80}>
              <div className="group flex h-full flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-white/10">
                <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/15 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon name={item.icon} className="size-6" />
                </span>
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-pretty text-sm leading-relaxed text-white/60">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
