import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Sidebar } from "@/features/projects/components/Sidebar";
import { Header } from "@/features/projects/components/Header";
import { ProjectCard } from "@/features/projects/components/ProjectCard";

export const ProjectsPage = () => {
  const [collapsed, setCollapsed] = useState(false);

  const projects = [
    "FCAMS Dashboard",
    "Landing Page",
    "Auth Service",
    "Internal Admin",
    "Design System",
  ];

  return (
    <div className="flex bg-neutral-950 text-neutral-300">
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((v) => !v)}
      />

      <main className="flex-1 p-6 max-w-6xl mx-auto">
        <Header projectCount={projects.length} />

        <section
          aria-label="Project list"
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {projects.map((project) => (
              <ProjectCard key={project} name={project} />
            ))}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
}