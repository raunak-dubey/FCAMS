import { useEffect, useState } from "react"
import { AnimatePresence } from "motion/react"
import { Sidebar } from "@/features/projects/components/Sidebar"
import { Header } from "@/features/projects/components/Header"
import { ProjectCard } from "@/features/projects/components/ProjectCard"
import { CommandPalette } from "../components/CommandPalette"
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks"
import { loadProjects } from "@/shared/lib/storage"
import { hydrateProjects, type Project } from "../store/projects.slice"

export const ProjectsPage = () => {
  const dispatch = useAppDispatch()
  const { items, hydrated } = useAppSelector((s) => s.projects)
  const [collapsed, setCollapsed] = useState(false)

  useEffect(() => {
    if (hydrated) return
    loadProjects<Project[]>().then((data) => {
      dispatch(hydrateProjects(data ?? []))
    })
  }, [hydrated, dispatch])

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-300 sm:flex">
      <CommandPalette />

      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((v) => !v)}
      />

      <main className="mx-auto w-full max-w-6xl p-4 sm:p-6">
        <Header projectCount={items.length} />

        <section
          aria-label="Project list"
          className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence>
            {items.map((item) => (
              <ProjectCard key={item.id} name={item.name} />
            ))}
          </AnimatePresence>
        </section>

        {items.length === 0 && hydrated && (
          <div className="mt-16 text-center text-neutral-400">
            <p className="text-sm">No projects yet</p>
            <p className="mt-1 text-xs">
              Press <kbd className="rounded bg-neutral-800 px-1">Ctrl ⇧ P</kbd>
            </p>
          </div>
        )}
      </main>
    </div>
  )
}