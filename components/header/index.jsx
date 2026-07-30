"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MessageCircle } from "lucide-react";
import Logo from "@/components/logo";
import { site, whatsappLink } from "@/data/site";

const navLinks = [
  { label: "Hakkımızda", href: "/#hakkimizda" },
  { label: "Hizmetler", href: "/hizmetler" },
  { label: "Projeler", href: "/projeler" },
  { label: "Neden Biz", href: "/#neden-biz" },
  { label: "S.S.S.", href: "/#sss" },
  { label: "İletişim", href: "/#iletisim" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:h-20 lg:px-8">
        <Logo />

        <nav
          className="hidden items-center gap-1 lg:flex"
          aria-label="Ana menü"
        >
          {navLinks.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "text-primary"
                    : "text-foreground/80 hover:bg-muted hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm shadow-primary/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/90 sm:inline-flex"
          >
            <MessageCircle className="size-4" />
            Teklif Al
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition-colors hover:bg-muted lg:hidden"
            aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={open}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-x-0 top-16 z-40 origin-top overflow-hidden border-b border-border bg-background/95 backdrop-blur-md transition-all duration-300 lg:hidden ${
          open
            ? "max-h-[80vh] opacity-100"
            : "pointer-events-none max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 px-4 py-4" aria-label="Mobil menü">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-muted"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-base font-semibold text-primary-foreground"
          >
            <MessageCircle className="size-5" />
            WhatsApp&apos;tan Teklif Al
          </a>
        </nav>
      </div>
    </header>
  );
}
