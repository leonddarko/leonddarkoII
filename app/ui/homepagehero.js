"use client"

import { CheckCircle2, ChevronDown } from "lucide-react"
import Link from "next/link";

export default function HomepageHero() {

  const social_links = [
    { label: "Email", href: "mailto:leonddarko@gmail.com" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/leonddarko" },
    // { label: "Facebook", href: "https://www.facebook.com/yourprofile" },
    { label: "GitHub", href: "https://github.com/leonddarko" },
  ];

  return (
    <>
      <div
        className={`relative h-screen bg-black bg-[url('/assets/leon_hero_img.jpg')] bg-cover bg-top rounded-b-3xl shadow-xl transition-all`}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent rounded-b-3xl" />

        {/* Content */}
        <div className="absolute z-10 h-1/3 flex flex-col justify-end items-center gap-1 px-6 md:px-16 pb-20 space-y-3 bottom-0 w-full">

          <CheckCircle2 size={25} className=" text-gray-200 leading-2" />
          <div className="text-center">
            <h1
              className="text-white font-notoserif text-5xl font-black leading-tightblack"
              style={{ animation: 'fadeInUp 1.5s ease forwards' }}
            >
              Leon Darko
            </h1>
            <p
              className="text-white/70 font-notosans"
              style={{ animation: 'fadeInUp 1.5s ease forwards' }}
            >
              Full-Stack Web Developer & Content Creator
            </p>
          </div>

          <div className="flex justify-center items-center gap-4">
            {social_links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 text-xs hover:text-yellow-500 transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          <div style={{ animation: 'fadeInUp 1.5s ease forwards' }} className=" flex justify-center items-center gap-2">
            <a href="/#about">
              <div className="p-2 backdrop-blur-md bg-zinc-600/50 shadow-sm rounded-full hover:bg-zinc-800/70 transition-all animate-bounce">
                <ChevronDown size={20} className="text-white" />
              </div>
            </a>

            <Link
              href="/resume.pdf"
              target="_blank"
            >
              <button
                className="inline-block backdrop-blur-lg bg-zinc-700/50 hover:bg-zinc-800/70 shadow-sm text-white px-10 py-2 rounded-full font-semibold hover:scale-105 transition hover:cursor-pointer"
              >
                View Full Resume
              </button>
            </Link>

          </div>
        </div>
      </div>
    </>
  )
}