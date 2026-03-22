import { motion } from "framer-motion"

export default function TerminalCard() {
  return (
    <motion.section
      className="bento-card col-span-1 md:col-span-2 row-span-1 md:row-span-2 p-0 flex flex-col"
      aria-label="Code snippet"
    >
      <div className="gradient-border" />

      {/* Terminal header */}
      <div className="bg-[#2a2a2a] px-4 py-3 flex items-center justify-between border-b border-white/5 rounded-t-3xl shrink-0">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <span
          className="text-slate-500"
          style={{
            fontFamily: "Space Mono, monospace",
            fontSize: "10px",
          }}
        >
          kevin@work ~ bash
        </span>
        <div className="w-16" />
      </div>

      {/* Code body */}
      <div
        className="p-6 leading-relaxed text-[#adc6ff]/80 custom-scroll overflow-y-auto flex-1"
        style={{ fontFamily: "Space Mono, monospace", fontSize: "13px" }}
      >
        <span style={{ color: "#d0bcff" }}>class</span>{" "}
        <span style={{ color: "#4cd7f6" }}>Kevin</span>{" "}
        <span style={{ color: "#d0bcff" }}>extends</span>{" "}
        <span style={{ color: "#adc6ff" }}>Developer</span>{" "}
        {"{"}<br />
        {"  "}
        <span style={{ color: "#424754" }}>// Personal attributes</span>
        <br />
        {"  "}
        <span style={{ color: "#adc6ff" }}>constructor</span>
        {"() {"}<br />
        {"    "}
        <span style={{ color: "#d0bcff" }}>this</span>.
        <span style={{ color: "#e5e2e1" }}>name</span> ={" "}
        <span style={{ color: "#4cd7f6" }}>"Kevin Collazos"</span>;
        <br />
        {"    "}
        <span style={{ color: "#d0bcff" }}>this</span>.
        <span style={{ color: "#e5e2e1" }}>stack</span> = [
        <span style={{ color: "#4cd7f6" }}>"Full-Stack"</span>,{" "}
        <span style={{ color: "#4cd7f6" }}>"DevOps"</span>];
        <br />
        {"    "}
        <span style={{ color: "#d0bcff" }}>this</span>.
        <span style={{ color: "#e5e2e1" }}>location</span> ={" "}
        <span style={{ color: "#4cd7f6" }}>"Colombia"</span>;
        <br />
        {"  "}
        {"}"}
        <br />
        <br />
        {"  "}
        <span style={{ color: "#adc6ff" }}>buildGreatProducts</span>
        {"() {"}<br />
        {"    "}
        <span style={{ color: "#d0bcff" }}>return</span>{" "}
        <span style={{ color: "#4cd7f6" }}>"Scalable & Secure"</span>;
        <br />
        {"  "}
        {"}"}
        <br />
        {"}"}
      </div>
    </motion.section>
  )
}
