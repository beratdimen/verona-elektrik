"use client";

import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/site";

export default function FloatingWhatsapp() {
  const message =
    "Merhaba, web siteniz üzerinden ulaşıyorum. Teklif almak istiyorum.";

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp Teklif Al"
      className="fixed bottom-6 right-6 z-[9999] transition-all duration-300"
    >
      <div className="flex items-center gap-3 rounded-full bg-[#25D366] px-5 py-3 text-white shadow-2xl transition-all duration-300 hover:scale-105 hover:bg-[#1ebe5d]">
        <MessageCircle className="h-6 w-6" />

        <div className="hidden sm:flex flex-col leading-tight">
          <span className="text-xs opacity-90">Hemen Yazın</span>
          <span className="font-semibold">Teklif Al</span>
        </div>
      </div>

      {/* Ping animasyonu */}
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#25D366]/40"></span>
    </a>
  );
}
