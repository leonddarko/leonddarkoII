// app/components/sections/CTASection.tsx
"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function CTASection() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-950 px-6 py-32 md:px-16 md:py-40"
    >
      {/* Ambient Light */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-[140px]" />

      {/* Subtle Grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center text-center">

        {/* Eyebrow */}
        <div className="mb-7 flex items-center gap-2">
          <span className="h-px w-6 bg-white/20" />

          <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-white/40">
            Let’s work together
          </span>

          <span className="h-px w-6 bg-white/20" />
        </div>

        {/* Heading */}
        <h2 className="max-w-3xl text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl md:text-6xl">
          Have a project in mind?
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-xl text-sm leading-7 text-white/45 sm:text-base">
          From ideas to polished digital products, I build thoughtful,
          practical solutions that are made to work.
        </p>

        {/* Actions */}
        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">

          {/* Primary */}
          <Link
            href="mailto:leonddarko@gmail.com"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white px-7 py-3 text-xs font-semibold tracking-wide text-slate-950 shadow-xl transition-all duration-300 hover:bg-white/90 hover:shadow-2xl"
          >
            Get in touch

            <ArrowUpRight
              size={14}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

          {/* Secondary */}
          <Link
            href="/resume.pdf"
            target="_blank"
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/[0.04] px-7 py-3 text-xs font-semibold tracking-wide text-white/80 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
          >
            View full resume
          </Link>
        </div>

        {/* Bottom Detail */}
        <div className="mt-16 flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <span>Leon Darko</span>
          <span>·</span>
          <span>Full-Stack Web Developer</span>
        </div>
      </div>
    </section>
  );
}