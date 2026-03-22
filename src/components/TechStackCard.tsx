import type { CSSProperties } from "react"
import { motion } from "framer-motion"
import { techs } from "../data/techStack"
import type { Tech } from "../data/techStack"

export default function TechStackCard() {
  return (
    <section
      id="tech"
      className="bento-card p-6 overflow-hidden"
      aria-label="Tech stack"
    >
      <div className="gradient-border" />

      <h3 className="text-slate-500 mb-6 text-label" style={{ letterSpacing: "0.25em" }}>
        Expertise & Stack
      </h3>

      <div
        className="overflow-hidden"
        style={{
          maskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 6%, black 94%, transparent 100%)",
        }}
      >
        <motion.div
          className="flex gap-2 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 25,
            repeat: Infinity,
            repeatType: "loop",
          }}
        >
          {techs.map((tech) => (
            <TechPill key={tech.name} tech={tech} />
          ))}
          {techs.map((tech) => (
            <TechPill key={`${tech.name}-dup`} tech={tech} ariaHidden />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function TechPill({ tech, ariaHidden }: { tech: Tech; ariaHidden?: boolean }) {
  return (
    <div
      aria-hidden={ariaHidden}
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
