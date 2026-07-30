import { Phone, Mail, MapPin, Clock, MessageCircle } from "lucide-react";

import CtaButton from "@/components/cta-button";
import Reveal from "@/components/reveal";
import { site, whatsappLink } from "@/data/site";

const items = [
  {
    icon: Phone,
    title: "Telefon",
    value: site.phone,
    href: `tel:${site.phone.replace(/\s/g, "")}`,
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Hemen Yazın",
    href: whatsappLink(),
  },
  {
    icon: Mail,
    title: "E-posta",
    value: site.email,
    href: `mailto:${site.email}`,
  },
  {
    icon: MapPin,
    title: "Adres",
    value: site.address,
  },
];

const workingHours = [
  "Pazartesi - Cuma | 08:30 - 18:00",
  "Cumartesi | 09:00 - 14:00",
  "Pazar | Kapalı",
];

export default function ContactInfo() {
  return (
    <section
      id="iletisim"
      className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20"
    >
      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        {/* İletişim Bilgileri */}
        <div className="grid gap-5 sm:grid-cols-2">
          {items.map((item, i) => {
            const Icon = item.icon;

            const Card = (
              <div className="group flex h-full gap-4 rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg">
                <span className="inline-flex size-14 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all group-hover:bg-primary group-hover:text-primary-foreground">
                  <Icon className="size-6" />
                </span>

                <div>
                  <p className="text-sm text-muted-foreground">{item.title}</p>

                  <h3 className="mt-1 font-bold leading-relaxed">
                    {item.value}
                  </h3>
                </div>
              </div>
            );

            return (
              <Reveal key={item.title} delay={i * 80}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                  >
                    {Card}
                  </a>
                ) : (
                  Card
                )}
              </Reveal>
            );
          })}
        </div>

        {/* Çalışma Saatleri */}
        <Reveal delay={300}>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="inline-flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Clock className="size-6" />
              </span>

              <div>
                <h3 className="text-lg font-bold">Çalışma Saatleri</h3>

                <p className="text-sm text-muted-foreground">
                  Mesai saatleri içerisinde bize ulaşabilirsiniz.
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              {workingHours.map((hour) => (
                <div
                  key={hour}
                  className="rounded-2xl border border-border bg-muted/40 px-4 py-3 text-sm font-medium"
                >
                  {hour}
                </div>
              ))}
            </div>

            <div className="mt-8">
              <CtaButton href={whatsappLink()} external className="w-full">
                <MessageCircle className="size-5" />
                WhatsApp'tan Teklif Al
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Harita */}
      <Reveal delay={400}>
        <div className="mt-12 overflow-hidden rounded-3xl border border-border shadow-sm">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.6673004262198!2d28.538012790133056!3d41.01065464541724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14b55d5efecb6e67%3A0xb6562387d502475a!2sverona%20elektrik!5e0!3m2!1sen!2str!4v1785435509701!5m2!1sen!2str"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Verona Elektrik Enerji Konumu"
            className="w-full"
          />
        </div>
      </Reveal>
    </section>
  );
}
