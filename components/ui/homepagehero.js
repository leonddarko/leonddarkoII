"use client";

import { ArrowUpRight, ChevronDown, Phone } from "lucide-react";
import Link from "next/link";

export default function HomepageHero() {
  const socialLinks = [
    { id: 0, label: "Email", href: "mailto:leonddarko@gmail.com" },
    {
      id: 1,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/leonddarko",
    },
    {
      id: 2,
      label: "GitHub",
      href: "https://github.com/leonddarko",
    },
  ];

  return (
    <section
      id="top"
      className="relative h-screen overflow-hidden rounded-b-[2rem] bg-slate-950 shadow-2xl"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-top"
        style={{
          backgroundImage: "url('/assets/leon_hero_img.jpg')",
        }}
      />

      {/* Cinematic Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-slate-950/20 to-slate-950" />

      {/* Bottom Vignette */}
      <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

      {/* Hero Content */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex flex-col items-center px-6 pb-10 text-center md:pb-14">

        {/* Name */}
        <h1
          className="text-4xl font-black tracking-[-0.04em] text-white sm:text-5xl md:text-6xl"
          style={{
            animation: "fadeInUp 1s ease forwards",
          }}
        >
          LEON DARKO
        </h1>

        {/* Title */}
        <p
          className="mt-2 text-base font-light tracking-wide text-white/50 sm:text-lg md:text-3xl"
          style={{
            animation: "fadeInUp 1.2s ease forwards",
          }}
        >
          Full-Stack Web Developer
        </p>

        {/* Social Links */}
        <div className="mt-6 flex items-center gap-5">
          {socialLinks.map(({ id, label, href }) => (
            <a
              key={id}
              href={href}
              target={href.startsWith("mailto:") ? undefined : "_blank"}
              rel={
                href.startsWith("mailto:")
                  ? undefined
                  : "noopener noreferrer"
              }
              className="group flex items-center gap-1 text-xs text-white/50 transition-colors duration-300 hover:text-white"
            >
              {label}
              <ArrowUpRight
                size={11}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-8 flex items-center gap-3">

          {/* Scroll */}
          <a
            href="#about"
            aria-label="Scroll to About section"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <ChevronDown
              size={18}
              className="text-white/70 transition-transform duration-300 group-hover:translate-y-0.5 group-hover:text-white"
            />
          </a>

          {/* Resume */}
          <Link
            href="/resume.pdf"
            target="_blank"
            className="rounded-full border border-white/10 bg-white/[0.09] px-7 py-3 text-xs font-semibold tracking-wide text-white shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/[0.15] hover:shadow-2xl"
          >
            View Full Resume
          </Link>

          {/* Call */}
          <a
            href="tel:+233558317206"
            aria-label="Call Leon Darko"
            className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.06] backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10"
          >
            <Phone
              size={17}
              className="text-white/70 transition-colors group-hover:text-white"
            />
          </a>
        </div>
      </div>
    </section>
  );
}