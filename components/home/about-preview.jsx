import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Reveal from "@/components/reveal";
import CtaButton from "@/components/cta-button";

const points = [
  "Anahtar teslim proje yönetimi",
  "A sınıfı panel ve inverter garantisi",
  "Yasal süreç ve ruhsatlandırma desteği",
  "7/24 teknik servis ve izleme",
];

export default function AboutPreview() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="relative">
          <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
            <Image
              src="/images/about.png"
              alt="Sahada güneş panellerini inceleyen mühendisler"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-2 flex items-center gap-4 rounded-2xl border border-border bg-background p-5 shadow-xl sm:right-6">
            <span className="text-4xl font-extrabold text-primary">
              80<span className="text-2xl">MW+</span>
            </span>
            <span className="text-sm font-medium leading-tight text-muted-foreground">
              Kurulu
              <br />
              güç kapasitesi
            </span>
          </div>
        </Reveal>

        <div className="flex flex-col gap-6">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <span className="size-1.5 rounded-full bg-primary" />
              Hakkımızda
            </span>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="text-balance text-3xl font-extrabold tracking-tight sm:text-4xl">
              Temiz enerjide güvenilir çözüm ortağınız
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <p className="text-pretty leading-relaxed text-muted-foreground">
              Verona Elektrik Enerji olarak, işletmelere ve bireysel
              yatırımcılara keşiften devreye almaya kadar uçtan uca güneş
              enerjisi çözümleri sunuyoruz. Deneyimli mühendis kadromuzla enerji
              maliyetlerinizi düşürüyor, sürdürülebilir bir geleceğe katkı
              sağlıyoruz.
            </p>
          </Reveal>
          <Reveal delay={220}>
            <ul className="grid gap-3 sm:grid-cols-2">
              {points.map((p) => (
                <li
                  key={p}
                  className="flex items-start gap-2.5 text-sm font-medium"
                >
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={280}>
            <CtaButton href="/hakkimizda" variant="outline">
              Daha Fazla Bilgi
              <ArrowRight className="size-4" />
            </CtaButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
