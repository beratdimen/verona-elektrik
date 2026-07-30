import PageHeader from "@/components/page-header";
import ServiceCard from "@/components/service-card";
import Reveal from "@/components/reveal";
import CtaBand from "@/components/cta-band";
import { services } from "@/data/services";

export const metadata = {
  title: "Hizmetlerimiz | Verona Elektrik Enerji",
  description:
    "Çatı GES, Arazi GES, sulama sistemleri, araç şarj istasyonları, on-grid ve off-grid sistemler, teknik servis ve yasal süreç yönetimi.",
};

export default function HizmetlerPage() {
  return (
    <main>
      <PageHeader
        title="Hizmetlerimiz"
        description="Güneş enerjisi yolculuğunuzun her aşamasında yanınızdayız. Keşiften devreye almaya, bakımdan yasal süreçlere kadar tüm ihtiyaçlarınız için anahtar teslim çözümler."
        breadcrumbs={[{ label: "Hizmetler" }]}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 3) * 80}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand />
    </main>
  );
}
