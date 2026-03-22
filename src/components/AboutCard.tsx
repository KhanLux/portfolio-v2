import { motion } from "framer-motion"
import { profile } from "../data/profile"

export default function AboutCard() {
  return (
    <motion.section
      id="about"
      className="bento-card bg-glow-purple col-span-1 row-span-1 md:row-span-2 p-8 flex flex-col"
      aria-label="About me"
    >
      <div className="gradient-border" />

      {/* Icon */}
      <div className="mb-6 p-3 bg-[#2a2a2a] w-fit rounded-xl">
        <span className="material-symbols-outlined text-[#adc6ff] text-2xl">
          terminal
        </span>
      </div>

      <h2
        className="text-xl text-white mb-4"
        style={{ fontFamily: "Syne, sans-serif", fontWeight: 700 }}
      >
        About
      </h2>

      <p className="text-[#c2c6d6] text-sm leading-relaxed mb-6">
        {profile.about}
      </p>

      {/* Divider */}
      <div
        className="h-px my-auto"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(77,142,255,0.3), transparent)",
        }}
      />

      {/* Location */}
      <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-3">
        <span className="material-symbols-outlined text-[#ffb4ab] text-[18px]">
          location_on
        </span>
        <span
          className="text-[#c2c6d6]"
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "11px",
            textTransform: "uppercase",
            letterSpacing: "0.15em",
          }}
        >
          {profile.location}
        </span>
      </div>
    </motion.section>
  )
}
