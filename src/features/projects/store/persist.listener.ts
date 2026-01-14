import { createListenerMiddleware } from "@reduxjs/toolkit"
import { addProject, hydrateProjects } from "./projects.slice"
import { saveProjects } from "@/shared/lib/storage"
import type { RootState } from "@/shared/store"

export const persistProjects = createListenerMiddleware()

persistProjects.startListening({
  matcher: (action) =>
    addProject.match(action) || hydrateProjects.match(action),
  effect: async (_, api) => {
    const state = api.getState() as RootState
    await saveProjects(state.projects.items)
  },
})