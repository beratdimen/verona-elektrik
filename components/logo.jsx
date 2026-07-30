import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

export default function Logo({ light = false, className = "" }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 ${className}`}
      aria-label={`${site.name} ana sayfa`}
    >
      <Image
        src="/images/logo/logo.jpeg"
        alt="GüneşVolt Logo"
        width={48}
        height={48}
        className="rounded-md object-contain"
        priority
      />

      <span className="flex flex-col leading-none">
        <span
          className={`text-lg font-extrabold tracking-tight ${
            light ? "text-white" : "text-foreground"
          }`}
        >
          Verona<span className="text-primary">Elektrik</span>
        </span>

        <span
          className={`text-[10px] font-medium uppercase tracking-[0.2em] ${
            light ? "text-white/60" : "text-muted-foreground"
          }`}
        >
          Enerji
        </span>
      </span>
    </Link>
  );
}
