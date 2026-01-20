// app/components/sections/ProjectsSection.tsx
"use client"

import Link from "next/link"

// https://truenorthprintsdatabase.vercel.app/

const projects = [
  {
    title: "Manual Entry & Tracker Platform",
    description:
      "A high-performance data entry and processing platform built with Next.js and Tailwind for True North Media Monitoring Ltd.",
    stack: ["Next.js", "JavaScript", "Tailwind CSS", "Vercel"],
    link: "https://manual-entry-tracker.vercel.app/",
  },
    {
    title: "True North Prints Database Platform",
    description:
      "Also a high-performance data entry and processing platform built with Next.js and Tailwind for True North Media Monitoring Ltd.",
    stack: ["Next.js", "JavaScript", "Tailwind CSS", "Vercel"],
    link: "https://truenorthprintsdatabase.vercel.app/",
  },
  {
    title: "Aukiss Media",
    description:
      "A magazine-style webapp for curated article and other information relevant to Aukiss Media.",
    stack: ["HTML", "CSS", "JavaScript", "Express"],
    link: "https://aukissmedia.vercel.app/",
  },
  {
    title: "Djanie Chocolate",
    description:
      "An e-commerce website for Djanie Chocolate company. A Premium Dark Chocolate producer.",
    stack: ["WordPress"],
    link: "#",
  },
  {
    title: "NMIMR HEPMAL Project Webapp",
    description:
      "An informational and blog-style website for HEPMAL Project.",
    stack: ["HTML", "CSS", "JavaScript"],
    link: "https://hepmal.web.app/",
  },
]

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="bg-slate-950 py-32 px-6 md:px-16 text-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-16">
        <h2 className="text-white font-notoserif text-4xl font-black">
          Selected Projects
        </h2>

        {/* Horizontal Scroll Container */}
        <div className="w-full overflow-x-auto">
          <div
            className="
              flex gap-4 px-2 pb-4
              snap-x snap-mandatory
              scroll-smooth
            "
          >
            {projects.map((project, i) => (
              <Link
                key={i}
                href={project.link}
                target="_blank"
                className="
                  snap-center
                  min-w-[85%] sm:min-w-[60%] md:min-w-[45%]
                  rounded-3xl
                  bg-slate-800/60
                  border border-white/5
                  backdrop-blur-lg shadow-lg
                  p-10
                  transition
                  hover:bg-slate-800
                  hover:scale-[1.01]
                  focus:outline-none
                "
              >
                <h3 className="text-white text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="text-white/70 mt-4">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="mt-6 flex flex-wrap justify-center gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="
                        text-xs px-3 py-1 rounded-full
                        bg-white/5 border border-white/5
                        text-white/70 backdrop-blur-md
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Hint */}
        <span className="text-xs text-white/40">
          Scroll horizontally to explore →
        </span>
      </div>
    </section>
  )
}
