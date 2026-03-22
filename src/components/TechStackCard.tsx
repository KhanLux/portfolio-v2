import { motion } from "framer-motion"

interface Tech {
  name: string
  icon: string
  color: string
}

const techs: Tech[] = [
  {
    name: "Laravel",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
    color: "#FF2D20",
  },
  {
    name: "Angular",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    color: "#DD0031",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
    color: "#4479A1",
  },
  {
    name: "Docker",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    color: "#2496ED",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
  },
  {
    name: "PHP",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    color: "#777BB4",
  },
  {
    name: "Linux",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
    color: "#FCC624",
  },
]

export default function TechStackCard() {
  return (
    <motion.section
      id="tech"
      className="bento-card col-span-1 md:col-span-2 p-6"
      aria-label="Tech stack"
    >
      <div className="gradient-border" />

      <h3
        className="text-slate-500 mb-6"
        style={{
          fontFamily: "Space Mono, monospace",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.25em",
        }}
      >
        Expertise & Stack
      </h3>

      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <TechPill key={tech.name} tech={tech} />
        ))}
      </div>
    </motion.section>
  )
}

function TechPill({ tech }: { tech: Tech }) {
  return (
    <div
      className="group flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all duration-200 cursor-default"
      style={{
        background: "#1a1a1a",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = tech.color + "80"
        el.style.boxShadow = `0 0 16px ${tech.color}20`
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = "rgba(255,255,255,0.06)"
        el.style.boxShadow = "none"
      }}
    >
      <img
        src={tech.icon}
        alt={tech.name}
        width={20}
        height={20}
        loading="lazy"
        className="shrink-0"
      />
      <span className="text-[#d1d5db] text-xs font-medium">{tech.name}</span>
    </div>
  )
}
