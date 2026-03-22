import { motion } from "framer-motion"
import { socials } from "../data/socials"

export default function SocialsCard() {
  return (
    <motion.section
      className="bento-card col-span-1 p-6 flex flex-col"
      aria-label="Social links"
    >
      <div className="gradient-border" />

      <h3
        className="text-slate-500 mb-4"
        style={{
          fontFamily: "Space Mono, monospace",
          fontSize: "10px",
          textTransform: "uppercase",
          letterSpacing: "0.2em",
        }}
      >
        Connect
      </h3>

      <div className="flex flex-col gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-[#c2c6d6] hover:text-[#adc6ff] transition-colors group"
          >
            <span className="material-symbols-outlined text-[18px]">
              {s.icon}
            </span>
            <span
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "12px",
              }}
            >
              {s.label}
            </span>
          </a>
        ))}
      </div>
    </motion.section>
  )
}
