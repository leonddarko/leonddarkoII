// app/components/sections/AboutSection.tsx
"use client"

import Image from "next/image"

const technologies = [
  {
    id: 0,
    name: "React",
    img: "/assets/tech/reactjs.webp"
  },
  {
    id: 1,
    name: "Next.js",
    img: "/assets/tech/nextjs.webp"
  },
  {
    id: 3,
    name: "Expressjs",
    img: "/assets/tech/expressjs.webp"
  },
  {
    id: 4,
    name: "Tailwind CSS",
    img: "/assets/tech/tailwindcss.png"
  },
  {
    id: 4.1,
    name: "DaisyUI",
    img: "/assets/tech/daisyUI.png"
  },
  {
    id: 5,
    name: "HTML5",
    img: "/assets/tech/html5.webp"
  },
  {
    id: 6,
    name: "Node",
    img: "/assets/tech/nodejs.png"
  },
  {
    id: 7,
    name: "Mongoose",
    img: "/assets/tech/mongoosejs.webp"
  },
  {
    id: 8,
    name: "GitHub",
    img: "/assets/tech/github.png"
  },
  {
    id: 9,
    name: "WordPress",
    img: "/assets/tech/wordpress.png"
  },
  {
    id: 10,
    name: "Vercel",
    img: "/assets/tech/vercel.png"
  },
  {
    id: 11,
    name: "Firebase",
    img: "/assets/tech/firebase.webp"
  },
  {
    id: 12,
    name: "AWS",
    img: "/assets/tech/aws.webp"
  },
  {
    id: 13,
    name: "ChatGPt",
    img: "/assets/tech/openai.webp"
  },
  {
    id: 14,
    name: "Gemini",
    img: "/assets/tech/gemini.png"
  },
]

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

        <div className=" flex flex-wrap justify-center items-center gap-4 max-w-md">

          {technologies.map((item) => (
            <div key={item.id} className="flex justify-start items-center gap-1 rounded-full">
              <Image
                className="border border-white/50 rounded-full bg-slate-50"
                src={item.img}
                alt={item.name}
                width={15}
                height={15}
              />
              <div className="badge badge-xs border border-none bg-slate-800 text-white backdrop-blur-lg shadow-md">{item.name}</div>
            </div>
          ))
          }
        </div>

        <div className="h-px w-24 bg-white/20" />
      </div>
    </section>
  )
}
