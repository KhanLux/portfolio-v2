export interface Project {
  title: string
  description: string
  tags: string[]
  accent: string
  repoUrl: string
  demoUrl?: string
}

export const projects: Project[] = [
  {
    title: "Sistema de Gestión Empresarial",
    description:
      "Complete ERP solution with role-based access control, real-time dashboards, and automated reporting pipelines for enterprise resource optimization.",
    tags: ["Laravel", "Angular", "MySQL"],
    accent: "#4d8eff",
    repoUrl: "#",
  },
  {
    title: "DevOps Dashboard",
    description:
      "Real-time container monitoring and deployment automation tool with CI/CD pipeline visualization and team alert management.",
    tags: ["React", "Docker", "TypeScript"],
    accent: "#4cd7f6",
    repoUrl: "#",
  },
  {
    title: "REST API Boilerplate",
    description:
      "High-performance scalable template for rapid backend microservice scaffolding with JWT auth, rate limiting, and OpenAPI documentation.",
    tags: ["PHP", "Laravel", "Redis"],
    accent: "#d0bcff",
    repoUrl: "#",
  },
]
