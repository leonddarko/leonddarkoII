// app/components/layout/Footer.tsx
"use client"

import { Rocket } from "lucide-react"
import Link from "next/link"

export default function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-slate-950 border-t border-white/5 py-12 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center space-y-4">
        {/* <span className="text-white font-semibold tracking-wide">
          Leon Darko
        </span> */}
        {/* 
        <span className="text-sm text-white/50">
          Full-Stack Developer & Content Creator
        </span> */}

        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
        group
        fixed bottom-6 right-6 z-50
        p-3
        rounded-full
        bg-slate-800/70
        backdrop-blur-xl
        border border-white/10
        shadow-lg shadow-black/20
        transition-all duration-300
        hover:scale-110
        hover:bg-amber-600
        active:scale-95
      "
        >
          <Rocket
            size={22}
            className="
          -rotate-45
          text-white
          transition-transform duration-300
          group-hover:-translate-y-1
        "
          />
        </button>
        
        {/* Social / External Links */}
        <div className="flex items-center gap-6 pt-2">
          <Link
            href="mailto:leonddarko@gmail.com"
            className="text-xs text-white/50 hover:text-amber-800 transition "
          >
            Email
          </Link>
          <Link
            href="https://www.linkedin.com/in/leonddarko"
            target="_blank"
            className="text-xs text-white/50 hover:text-amber-800 transition "
          >
            LinkedIn
          </Link>
          <Link
            href="https://github.com/leonddarko"
            target="_blank"
            className="text-xs text-white/50 hover:text-amber-800 transition "
          >
            GitHub
          </Link>
        </div>

        <span className="text-xs text-white/30 pt-0.5">
          © {new Date().getFullYear()} Leon Darko. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
