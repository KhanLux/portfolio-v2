import { socials } from "../data/socials"

export default function Footer() {
  return (
    <footer className="w-full py-12 border-t border-white/5 bg-[#0a0a0a]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-6 md:px-16 w-full max-w-[1600px] mx-auto">
        <div className="text-label text-slate-400">
          © {new Date().getFullYear()} Kevin Collazos. Built with precision.
        </div>
        <div className="flex gap-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-label text-slate-500 hover:text-primary-container transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
