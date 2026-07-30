'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import SectionHeading from '@/components/section-heading'
import Reveal from '@/components/reveal'
import { faq } from '@/data/content'

function FaqItem({ item, isOpen, onToggle }) {
  return (
    <div
      className={`overflow-hidden rounded-2xl border transition-colors ${
        isOpen ? 'border-primary/40 bg-primary/[0.03]' : 'border-border bg-card'
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-base font-semibold">{item.q}</span>
        <span
          className={`inline-flex size-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
            isOpen ? 'rotate-45 bg-primary text-primary-foreground' : 'bg-muted text-foreground'
          }`}
        >
          <Plus className="size-4" />
        </span>
      </button>
      <div
        className={`grid transition-all duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <p className="px-6 pb-5 text-pretty leading-relaxed text-muted-foreground">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FaqSection() {
  const [open, setOpen] = useState(0)

  return (
    <section id="sss" className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="S.S.S."
          title="Sık sorulan sorular"
          description="Aklınıza takılan soruların yanıtlarını burada bulabilirsiniz. Bulamadığınız sorular için bize ulaşın."
        />

        <div className="mt-12 flex flex-col gap-3">
          {faq.map((item, i) => (
            <Reveal key={i} delay={i * 40}>
              <FaqItem
                item={item}
                isOpen={open === i}
                onToggle={() => setOpen(open === i ? -1 : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
