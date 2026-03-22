import { profile } from "../data/profile"

export default function ContactCard() {
  return (
    <section
      id="contact"
      className="bento-card col-span-1 md:col-span-2 p-8 flex flex-col justify-center card-cta-gradient relative overflow-hidden"
      aria-label="Contact"
    >
      {/* Dot grid texture */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />

      {/* Frosted glass circle decoration */}
      <div
        className="absolute -top-10 -right-10 w-48 h-48 rounded-full pointer-events-none"
        style={{
          background: "rgba(255,255,255,0.06)",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl text-white mb-2 font-headline font-extrabold">
          Let&apos;s work together
        </h3>
        <p className="text-white/70 text-sm mb-6">
          Have a project in mind? I&apos;d love to hear about it.
        </p>
        <a
          href={profile.email}
          className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white font-bold text-[#001a42] text-xs uppercase tracking-widest hover:scale-105 transition-transform duration-300 shadow-xl font-label"
        >
          Get in touch
          <span className="material-symbols-outlined text-[16px]">
            arrow_forward
          </span>
        </a>
      </div>
    </section>
  )
}
