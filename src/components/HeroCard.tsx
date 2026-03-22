import { motion } from "framer-motion"
import { profile } from "../data/profile"

export default function HeroCard() {
  return (
    <motion.section
      className="bento-card bg-glow-blue col-span-1 md:col-span-2 row-span-1 md:row-span-2 p-10 flex flex-col justify-center items-start"
      aria-label="Introduction"
    >
      <div className="gradient-border" />

      {/* Avatar */}
      <div className="relative mb-8">
        <div
          className="w-24 h-24 rounded-full p-[3px]"
          style={{
            background: "linear-gradient(135deg, #adc6ff, #d0bcff, #4cd7f6)",
            boxShadow:
              "0 0 40px -5px rgba(77,142,255,0.6), 0 0 80px -20px rgba(208,188,255,0.3)",
          }}
        >
          <div className="w-full h-full rounded-full bg-[#0e0e0e] flex items-center justify-center">
            <span
              className="text-2xl text-white tracking-widest"
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 800 }}
            >
              KC
            </span>
          </div>
        </div>
      </div>

      {/* Availability */}
      <div className="flex items-center gap-3 mb-4">
        <span className="pulse-dot" />
        <span
          className="text-[#4cd7f6]"
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "10px",
            letterSpacing: "0.2em",
            textTransform: "uppercase",
          }}
        >
          {profile.available ? "Available for work" : "Not available"}
        </span>
      </div>

      {/* Name */}
      <h1
        className="text-[38px] leading-[1.1] text-white mb-2"
        style={{ fontFamily: "Syne, sans-serif", fontWeight: 800 }}
      >
        {profile.name}
      </h1>

      {/* Role — gradient text */}
      <h2
        className="text-2xl font-bold mb-6 bg-clip-text"
        style={{
          fontFamily: "Syne, sans-serif",
          background: "linear-gradient(90deg, #adc6ff, #4cd7f6)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        {profile.role}
      </h2>

      {/* Tagline */}
      <p className="text-[#c2c6d6] text-lg max-w-sm leading-relaxed">
        {profile.tagline}
      </p>
    </motion.section>
  )
}
