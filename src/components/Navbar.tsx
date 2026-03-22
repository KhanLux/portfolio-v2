import { useEffect, useState } from "react"
import { profile } from "../data/profile"
import { navLinks } from "../data/navigation"

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    if (!menuOpen) return
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false)
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [menuOpen])

  return (
    <header className="fixed top-0 w-full z-50 bg-[#0a0a0a]/75 backdrop-blur-xl border-b border-white/5">
      <nav className="flex justify-between items-center w-full px-6 md:px-16 py-4 max-w-[1600px] mx-auto">
        <div className="text-xl font-extrabold tracking-tighter text-slate-100 font-headline">
          {profile.name}
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="text-on-surface-variant hover:text-slate-100 transition-colors text-label-sm"
            >
              {label}
            </a>
          ))}
          <a
            href={profile.resumeUrl}
            className="ml-2 px-5 py-2 bg-white/5 hover:bg-white/10 text-primary border border-primary/20 rounded-lg transition-all text-label-sm"
          >
            Resume
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-slate-400 hover:text-slate-100 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#111111] border-t border-white/5 px-6 py-4 flex flex-col gap-4">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="text-on-surface-variant hover:text-slate-100 transition-colors text-label-md"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}
