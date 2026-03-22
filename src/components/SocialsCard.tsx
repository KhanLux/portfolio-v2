import { socials } from "../data/socials"

export default function SocialsCard() {
  return (
    <section
      className="bento-card col-span-1 p-6 flex flex-col"
      aria-label="Social links"
    >
      <div className="gradient-border" />

      <h3 className="text-label text-slate-500 mb-4">Connect</h3>

      <div className="flex flex-col gap-3">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors group"
          >
            <span className="material-symbols-outlined text-[18px]">
              {s.icon}
            </span>
            <span className="font-label text-xs">{s.label}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
