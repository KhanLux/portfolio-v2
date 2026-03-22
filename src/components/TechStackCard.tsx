import type { CSSProperties } from "react"
import { techs } from "../data/techStack"
import type { Tech } from "../data/techStack"

export default function TechStackCard() {
  return (
    <section
      id="tech"
      className="bento-card col-span-1 md:col-span-2 p-6"
      aria-label="Tech stack"
    >
      <div className="gradient-border" />

      <h3 className="text-slate-500 mb-6 text-label" style={{ letterSpacing: "0.25em" }}>
        Expertise & Stack
      </h3>

      <div className="flex flex-wrap gap-2">
        {techs.map((tech) => (
          <TechPill key={tech.name} tech={tech} />
        ))}
      </div>
    </section>
  )
}

function TechPill({ tech }: { tech: Tech }) {
  return (
    <div
      className="tech-pill flex items-center gap-2.5 px-3 py-2 rounded-xl transition-all duration-200 cursor-default"
      style={
        {
          background: "#1a1a1a",
          border: "1px solid rgba(255,255,255,0.06)",
          "--tech-color": tech.color,
        } as CSSProperties
      }
    >
      <img
        src={tech.icon}
        alt={tech.name}
        width={20}
        height={20}
        loading="lazy"
        className="shrink-0"
      />
      <span className="text-on-surface text-xs font-medium">{tech.name}</span>
    </div>
  )
}
