"use client"

import { ArrowUpRight, CheckCircle2, ChevronDown, Dot, Phone } from "lucide-react"
import Link from "next/link";

export default function HomepageHero() {

  const social_links = [
    { id:0, label: "Email", href: "mailto:leonddarko@gmail.com" },
    { id:1, label: "LinkedIn", href: "https://www.linkedin.com/in/leonddarko" },
    // { label: "Facebook", href: "https://www.facebook.com/yourprofile" },
    { id:2, label: "GitHub", href: "https://github.com/leonddarko" },
  ];

  return (
    <>
      <div
      id="top"
        className={`relative h-screen bg-slate-950 bg-[url('/assets/leon_hero_img.jpg')] bg-cover bg-top rounded-b-3xl shadow-xl transition-all`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent rounded-b-3xl" />

        {/* Content */}
        <div className="absolute z-10 h-1/2 flex flex-col justify-center items-center gap-1 px-6 md:px-16 pb-20 space-y-3 bottom-0 w-full">

          <Dot size={25} className=" text-gray-200 leading-2" />
          <div className="text-center">
            <h1
              className="text-white text-4xl font-black leading-tight"
              style={{ animation: 'fadeInUp 1.5s ease forwards' }}
            >
              LEON DARKO
            </h1>
            <p
              className="text-white/70 text-base"
              style={{ animation: 'fadeInUp 1.5s ease forwards' }}
            >
              Full-Stack Web Developer & Content Creator
            </p>
          </div>

          <div className="flex justify-center items-start  gap-2">
            {social_links.map(({id, label, href }) => (
              <>
                <a
                  key={id}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-xs hover:text-amber-800 transition-colors"
                >
                  {label}
                </a>
                <ArrowUpRight size={12} className="text-white" />
              </>
            ))}
          </div>

          <div style={{ animation: 'fadeInUp 1.5s ease forwards' }} className=" flex justify-center items-center gap-2">
            <a href="/#about">
              <div className="p-1.5 backdrop-blur-md bg-slate-600/50 shadow-sm rounded-full hover:bg-slate-800/70 transition-all animate-bounce">
                <ChevronDown size={20} className="text-white" />
              </div>
            </a>

            <Link
              href="/resume.pdf"
              target="_blank"
            >
              <button
                className="inline-block backdrop-blur-lg bg-slate-700/50 hover:bg-slate-800/70 shadow-sm text-white px-10 py-2 rounded-full font-semibold hover:scale-105 transition hover:cursor-pointer"
              >
                View Full Resume
              </button>
            </Link>

            <a href="tel:+233558317206">
              <div className="p-2 backdrop-blur-md bg-slate-600/50 shadow-sm rounded-full hover:bg-slate-800/70 transition-all hover:animate-ping">
                <Phone size={18} className="text-white" />
              </div>
            </a>

          </div>
        </div>
      </div>
    </>
  )
}