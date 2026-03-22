import Navbar from "./components/Navbar"
import BentoGrid from "./components/BentoGrid"

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <BentoGrid />
      </main>
      <footer className="w-full py-12 border-t border-white/5 bg-[#0a0a0a]">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 px-8 w-full max-w-[1200px] mx-auto">
          <div
            className="text-slate-400"
            style={{
              fontFamily: "Space Mono, monospace",
              fontSize: "10px",
              textTransform: "uppercase",
              letterSpacing: "0.2em",
            }}
          >
            © 2024 Kevin Collazos. Built with precision.
          </div>
          <div className="flex gap-8">
            {["Github", "LinkedIn", "Twitter"].map((link) => (
              <a
                key={link}
                href="#"
                className="text-slate-500 hover:text-[#4d8eff] transition-colors"
                style={{
                  fontFamily: "Space Mono, monospace",
                  fontSize: "10px",
                  textTransform: "uppercase",
                  letterSpacing: "0.2em",
                }}
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  )
}
