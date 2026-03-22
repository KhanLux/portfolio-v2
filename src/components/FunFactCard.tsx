import { facts } from "../data/funFacts"

export default function FunFactCard() {
  return (
    <section
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
            border: `1px solid ${f.border}`,
            borderLeftWidth: "3px",
            borderLeftColor: f.color,
          }}
        >
          <span
            className="material-symbols-outlined text-[18px]"
            style={{ color: f.color }}
          >
            {f.icon}
          </span>
          <span className="text-on-surface text-label" style={{ letterSpacing: "0.1em" }}>
            {f.label}
          </span>
        </div>
      ))}
    </section>
  )
}
