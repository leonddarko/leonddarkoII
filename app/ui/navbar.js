"use client"

import { ChevronDown, Code, Dot, Scissors } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export default function NavigationBar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navlinks = [
    { id: 0, path: "/#about", link: "ABOUT" },
    { id: 1, path: "/#experience", link: "EXPERIENCE" },
    { id: 2, path: "/#projects", link: "PROJECTS" },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <nav
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? "bg-slate-900/80 backdrop-blur-lg shadow-lg rounded-b-2xl"
          : "bg-transparent backdrop-blur-none shadow-none"}
      `}
    >
      <div
        className={`
          flex justify-between items-center px-6 md:px-10 transition-all duration-300
          ${scrolled ? "py-3" : "py-5"}
        `}
      >
        {/* Logo */}
        <Link href="/">
          <div className=" flex justify-start items-center gap-3">
            <Code
              size={20}
              className="text-gray-200 transition-all"
            />
            <div className="leading-tight">
              <span className="text-base md:text-xl font-black text-white block">
                LEON DARKO
              </span>
              <span className="text-xs text-white/50 block">DEVELOPER & CONTENT CREATOR</span>
            </div>
{/* 
            <div className="flex justify-center items-center gap-4">
              <div className="text-white text-xs">Linkedin</div>
              <div className="text-white text-xs">facebook</div>
              <div className="text-white text-xs">Github</div>
            </div> */}
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navlinks.map((item) => {
            const active = pathname === item.path
            return (
              <Link
                key={item.id}
                href={item.path}
                className={`flex items-center gap-0.5 transition-all font-medium
                  ${active
                    ? "text-white font-bold"
                    : "text-white/70 hover:text-white"}
                `}
              >
                <Dot size={20} className={active ? "text-white" : "hidden"} />
                {item.link}
              </Link>
            )
          })}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden p-2 rounded-full hover:bg-white/10 transition"
          aria-label="Toggle menu"
        >
          <ChevronDown
            size={20}
            className={`text-white transition-transform duration-300 ${menuOpen ? "rotate-180" : ""
              }`}
          />
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute right-6 top-full mt-2 w-72 bg-zinc-800/80 backdrop-blur-lg rounded-2xl shadow-xl p-3">
          <ul className="flex flex-col gap-2">
            {navlinks.map((item) => {
              const active = pathname === item.path
              return (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    onClick={() => setMenuOpen(false)}
                    className="flex justify-between items-center px-3 py-2 rounded-lg hover:bg-white/10 transition"
                  >
                    <span
                      className={`text-sm ${active ? "text-white font-bold" : "text-white/70"
                        }`}
                    >
                      {item.link}
                    </span>
                    <Dot size={20} className={active ? "text-white" : "hidden"} />
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </nav>
  )
}
