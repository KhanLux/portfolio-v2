import type { CSSProperties } from "react"
import { projects } from "../data/projects"

export default function ProjectsCard() {
  return (
    <section
      id="work"
      className="bento-card col-span-1 md:col-span-2 row-span-1 md:row-span-2 p-8 flex flex-col"
      aria-label="Featured projects"
    >
      <div className="gradient-border" />

      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-white text-xl font-headline font-bold">
          Selected Projects
        </h3>
        <span className="material-symbols-outlined text-outline-variant text-[20px]">
          folder_special
        </span>
      </div>

      {/* Project list */}
      <div className="flex flex-col gap-6 flex-1">
        {projects.map((project, i) => (
          <article key={project.title}>
            {/* Divider between items */}
            {i > 0 && (
              <div
                className="h-px mb-6"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)",
                }}
              />
            )}

            <div
              className="relative pl-5 group cursor-pointer"
              style={
                {
                  borderLeft: `3px solid ${project.accent}`,
                  "--accent": project.accent,
                } as CSSProperties
              }
            >
              {/* Title + badge */}
              <div className="flex items-start justify-between mb-1.5 gap-2">
                <h4 className="project-title text-base text-white transition-colors duration-200 font-headline font-bold">
                  {project.title}
                </h4>
                <div className="flex gap-1.5 shrink-0 mt-0.5">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[9px] font-bold uppercase font-label"
                      style={{
                        background: project.accent + "18",
                        color: project.accent,
                        letterSpacing: "0.08em",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <p className="text-on-surface-variant text-xs leading-relaxed mb-3">
                {project.description}
              </p>

              {/* Links row */}
              <div className="flex items-center gap-4">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors text-xs font-label"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <span className="material-symbols-outlined text-[14px]">
                    code
                  </span>
                  GitHub
                </a>
                {project.demoUrl != null && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-slate-500 hover:text-primary transition-colors text-xs font-label"
                    aria-label={`View ${project.title} demo`}
                  >
                    <span className="material-symbols-outlined text-[14px]">
                      open_in_new
                    </span>
                    Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* View archive */}
      <a
        href="#"
        className="mt-auto pt-4 text-xs text-slate-500 hover:text-white transition-colors flex items-center gap-2 font-label"
      >
        VIEW ARCHIVE
        <span className="material-symbols-outlined text-[14px]">
          arrow_forward
        </span>
      </a>
    </section>
  )
}
