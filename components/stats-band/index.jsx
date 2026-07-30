"use client";

import { useEffect, useRef, useState } from "react";
import { about } from "@/data/content";

function useCountUp(target, active) {
  const [value, setValue] = useState(0);
  const numeric = parseFloat(String(target).replace(/[^\d.]/g, "")) || 0;
  const suffix = String(target).replace(/[\d.\s]/g, "");

  useEffect(() => {
    if (!active) return;
    let raf;
    const duration = 1400;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(numeric * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [active, numeric]);

  const display =
    numeric % 1 === 0 ? Math.round(value).toString() : value.toFixed(0);
  return `${display}${suffix}`;
}

function StatItem({ stat, active }) {
  const display = useCountUp(stat.value, active);
  return (
    <div className="text-center">
      <div className="font-mono text-3xl font-extrabold text-primary-foreground sm:text-4xl md:text-5xl">
        {display}
      </div>
      <div className="mt-2 text-sm font-medium text-primary-foreground/80 sm:text-base">
        {stat.label}
      </div>
    </div>
  );
}

export function StatsBand() {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="bg-primary py-14 md:py-20">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 md:grid-cols-4">
        {about.stats.map((stat) => (
          <StatItem key={stat.label} stat={stat} active={active} />
        ))}
      </div>
    </section>
  );
}
