import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { Sidebar } from "@/features/projects/components/Sidebar";
import { Header } from "@/features/projects/components/Header";
import { ProjectCard } from "@/features/projects/components/ProjectCard";
import { CommandPalette } from "../components/CommandPalette";
import { useAppSelector } from "@/shared/store/hooks";

export const ProjectsPage = () => {
  const [collapsed, setCollapsed] = useState(false);

    const projects = useAppSelector(
    (state) => state.projects.items
  )

  return (
    <div className="flex min-h-screen bg-neutral-950 text-neutral-300">
      <CommandPalette />
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((v) => !v)}
      />

      <main className="mx-auto w-full max-w-6xl p-6">
        <Header projectCount={projects.length} />

        <section
          aria-label="Project list"
          className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {projects.map((project) => (
              <ProjectCard key={project.id} name={project.name} />
            ))}
          </AnimatePresence>
        </section>
      </main>
    </div>
  );
};