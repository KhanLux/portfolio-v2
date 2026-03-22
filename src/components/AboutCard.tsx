import { profile } from "../data/profile"

export default function AboutCard() {
  return (
    <section
      id="about"
      className="bento-card bg-glow-purple col-span-1 row-span-1 md:row-span-2 p-8 flex flex-col"
      aria-label="About me"
    >
      <div className="gradient-border" />

      {/* Icon */}
      <div className="mb-6 p-3 bg-surface-container-high w-fit rounded-xl">
        <span className="material-symbols-outlined text-primary text-2xl">
          terminal
        </span>
      </div>

      <h2 className="text-xl text-white mb-4 font-headline font-bold">
        About
      </h2>

      <p className="text-on-surface-variant text-sm leading-relaxed mb-6">
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
        <span className="material-symbols-outlined text-error text-[18px]">
          location_on
        </span>
        <span className="text-label-sm text-on-surface-variant">
          {profile.location}
        </span>
      </div>
    </section>
  )
}
