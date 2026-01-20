// app/components/sections/CTASection.tsx
"use client"

import Link from "next/link"

export default function CTASection() {
    return (
        <section
            id="contact"
            className="relative bg-black py-40 px-6 md:px-16 text-center overflow-hidden"
        >
            {/* Ambient Glow */}
            <div className="absolute inset-0 flex justify-center">
                <div className="w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px]" />
            </div>

            <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center space-y-8">
                <span className="text-xs tracking-widest text-white/40">
                    LET’S WORK TOGETHER
                </span>

                <h2 className="font-notoserif text-4xl md:text-5xl font-black text-white leading-tight">
                    Have a project in mind?
                </h2>

                <p className="text-white/70 text-base md:text-lg max-w-xl">
                    I’m available for freelance work, collaborations, and long-term
                    projects. Let’s build something thoughtful and impactful.
                </p>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-4 pt-6">
                    <Link
                        href="mailto:leonddarko@gmail.com"
                        className="inline-flex items-center justify-center
              rounded-full px-10 py-3 font-semibold
              text-white bg-slate-800 hover:bg-slate-800/90
              transition hover:scale-105"
                    >
                        Get in touch
                    </Link>

                    <Link
                        href="/resume.pdf"
                        target="_blank"
                        className="inline-flex items-center justify-center
              rounded-full px-10 py-3 font-semibold
              text-white border border-slate-800/20
              hover:bg-slate-800/70 transition"
                    >
                        View Full resume
                    </Link>
                </div>
            </div>
        </section>
    )
}
