// app/components/sections/ExperienceSection.tsx
"use client"

const experiences = [
  {
    role: "Full-Stack Developer",
    company: "Freelance",
    period: "2020 — Present",
    description:
      "Building modern web applications using Next.js, Tailwind, and scalable backend systems.",
  },
  {
    role: "Content Creator",
    company: "TikTok / Youtube",
    period: "2025 — Present",
    description:
      "Sharing must-know Bible verses and breaking down God's word.",
  },
  {
    role: "Full-Stack Developer & I.T Support",
    company: "True North Media Monitoring",
    period: "Aug 2024 — Nov 2025",
    description:
      "Design and develop web-based applications to enhance workflow for the data capturers and streamline reporting processes for the Reports Team, including the Prints Database App, Manual Entry & Tracking App, the Compliance Summary App and the TrueNorth website. Updated and optimized existing recording scripts to support core operations of the business. Building and configuring servers to support the core operations of the business",
  },
  {
    role: "Full-Stack Developer",
    company: "Aukiss Media Systems Inc",
    period: "Sept 2022 — Nov 2023",
    description:
      "All-inclusive information technology support, application, and website development services",
  },
]

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="py-32 px-6 md:px-16 text-center"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="text-white font-notoserif text-4xl font-black mb-20">
          Experience
        </h2>

        <div className="relative space-y-20">
          <div className="absolute left-1/2 top-0 h-full w-px bg-white/10 -translate-x-1/2" />

          {experiences.map((item, i) => (
            <div key={i} className="relative flex flex-col items-center max-w-xl mx-auto">
              <div className="w-2 h-2 rounded-full bg-white mb-4" />

              <span className="text-xs text-white/40">
                {item.period}
              </span>

              <h3 className="text-white font-semibold mt-2">
                {item.role}
              </h3>

              <span className="text-white/60 text-sm">
                {item.company}
              </span>

              <p className="text-white/70 mt-4">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
