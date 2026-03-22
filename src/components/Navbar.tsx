import { useState } from "react"
import { profile } from "../data/profile"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/75 backdrop-blur-xl border-b border-white/5">
      <nav className="flex justify-between items-center w-full px-6 py-4 max-w-[1200px] mx-auto">
        <div
          className="text-xl font-extrabold tracking-tighter text-slate-100"
          style={{ fontFamily: "Syne, sans-serif" }}
        >
          {profile.name}
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {[
            ["Work", "#work"],
            ["Tech", "#tech"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              className="text-[#c2c6d6] hover:text-slate-100 transition-colors"
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "11px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              {label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            className="ml-2 px-5 py-2 bg-white/5 hover:bg-white/10 text-[#adc6ff] border border-[#adc6ff]/20 rounded-lg transition-all"
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "11px",
              textTransform: "uppercase",
              letterSpacing: "0.15em",
            }}
          >
            Resume
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-slate-100 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {[
            ["Work", "#work"],
            ["Tech", "#tech"],
            ["About", "#about"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-[#c2c6d6] hover:text-slate-100 transition-colors"
              style={{
                fontFamily: "Space Mono, monospace",
                fontSize: "12px",
                textTransform: "uppercase",
                letterSpacing: "0.15em",
              }}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
