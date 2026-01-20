// app/components/sections/AboutSection.tsx
"use client"

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative bg-slate-950 py-32 px-6 md:px-16 text-center"
    >
      <div className="max-w-3xl mx-auto flex flex-col items-center space-y-6">
        <span className="text-xs tracking-widest text-white/40">
          ABOUT ME
        </span>

        <h2 className="font-notoserif text-4xl md:text-5xl font-black text-white leading-tight">
          I design & build digital experiences with intention.
        </h2>

        <p className="text-white/70 text-base md:text-lg leading-relaxed">
          I’m a full-stack web developer with over 5 years of real-world experience building reliable, fast, and practical web applications. I help businesses turn ideas, manual processes, and old systems into clean and modern digital tools that actually work. I handle both front-end and back-end development, and I also use AI to automate tasks, speed up development, and improve efficiency, while keeping performance, clarity, and long term use front and center.
        </p>

        <div className="h-px w-24 bg-white/20" />
      </div>
    </section>
  )
}
