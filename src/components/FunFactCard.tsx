import { motion } from "framer-motion"

const facts = [
  {
    icon: "sports_esports",
    label: "PC Gamer",
    color: "#adc6ff",
    bg: "rgba(173,198,255,0.07)",
    border: "rgba(173,198,255,0.2)",
  },
  {
    icon: "memory",
    label: "Linux Enthusiast",
    color: "#4cd7f6",
    bg: "rgba(76,215,246,0.07)",
    border: "rgba(76,215,246,0.2)",
  },
]

export default function FunFactCard() {
  return (
    <motion.section
      className="bento-card col-span-1 p-6 flex flex-col justify-center gap-3"
      aria-label="Fun facts"
    >
      <div className="gradient-border" />

      {facts.map((f) => (
        <div
          key={f.label}
          className="flex items-center gap-3 p-3 rounded-xl"
          style={{
            background: f.bg,
            borderLeft: `3px solid ${f.color}`,
            border: `1px solid ${f.border}`,
            borderLeftWidth: "3px",
          }}
        >
          <span
            className="material-symbols-outlined text-[18px]"
            style={{ color: f.color }}
          >
            {f.icon}
          </span>
          <span
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              color: "#e5e2e1",
            }}
          >
            {f.label}
          </span>
        </div>
      ))}
    </motion.section>
  )
}
