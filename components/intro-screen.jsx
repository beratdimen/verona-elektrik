"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function IntroScreen() {
  const [mounted, setMounted] = useState(false);
  const [hide, setHide] = useState(false);
  const [remove, setRemove] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const seen = sessionStorage.getItem("ve-intro-seen");

    if (seen) {
      setRemove(true);
      return;
    }

    setMounted(true);
    document.body.style.overflow = "hidden";

    const t1 = setTimeout(() => setHide(true), 2600);

    const t2 = setTimeout(() => {
      setRemove(true);
      document.body.style.overflow = "";
      sessionStorage.setItem("ve-intro-seen", "1");
    }, 3400);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      document.body.style.overflow = "";
    };
  }, []);

  if (remove || !mounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex items-center justify-center overflow-hidden bg-[#09090b] transition-all duration-700 ${
        hide ? "pointer-events-none -translate-y-full opacity-0" : "opacity-100"
      }`}
      aria-hidden="true"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(250,204,21,.15),transparent_65%)]" />

      <div className="intro-glow absolute h-[520px] w-[520px] rounded-full bg-primary/20 blur-3xl" />

      {/* Grid Effect */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        {/* Logo */}
        <div className="intro-logo rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur">
          <Image
            src="/images/logo/logo.jpeg"
            alt="Verona Elektrik Enerji"
            width={110}
            height={110}
            priority
            className="rounded-2xl object-contain"
          />
        </div>

        {/* Company Name */}
        <div className="mt-8 overflow-hidden">
          <h1 className="intro-title text-center text-4xl font-black tracking-tight text-white sm:text-6xl">
            Verona <span className="text-primary">Elektrik</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div className="overflow-hidden">
          <p className="intro-company mt-2 text-center text-lg font-medium text-white/70">
            Enerji
          </p>
        </div>

        {/* Slogan */}
        <p className="intro-sub mt-6 text-center text-xs uppercase tracking-[0.45em] text-white/50 sm:text-sm">
          Enerjiyi Geleceğe Taşıyoruz
        </p>

        {/* Loading Bar */}
        <div className="intro-bar mt-10 h-[4px] w-56 overflow-hidden rounded-full bg-white/10">
          <span className="intro-bar-fill block h-full rounded-full bg-primary" />
        </div>
      </div>

      <style jsx>{`
        @keyframes logoIn {
          0% {
            opacity: 0;
            transform: scale(0.65) rotate(-10deg);
          }
          70% {
            opacity: 1;
            transform: scale(1.05);
          }
          100% {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes titleUp {
          from {
            opacity: 0;
            transform: translateY(70px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes barFill {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        @keyframes glowPulse {
          0%,
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.15);
            opacity: 0.35;
          }
        }

        .intro-logo {
          animation: logoIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .intro-title {
          animation: titleUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.35s both;
        }

        .intro-company {
          animation: titleUp 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.55s both;
        }

        .intro-sub {
          animation: fadeIn 0.8s ease 0.9s both;
        }

        .intro-bar {
          animation: fadeIn 0.5s ease 1s both;
        }

        .intro-bar-fill {
          animation: barFill 1.6s ease 1.1s forwards;
        }

        .intro-glow {
          animation: glowPulse 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
