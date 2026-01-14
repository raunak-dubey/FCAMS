import { configureStore } from "@reduxjs/toolkit"
import projectsReducer from "@/features/projects/store/projects.slice"
import uiReducer from "@/features/projects/store/ui.slice"
import { persistProjects } from "@/features/projects/store/persist.listener"

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistProjects.middleware),
})

// Types inferred from store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch