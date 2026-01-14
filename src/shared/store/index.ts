import { configureStore } from "@reduxjs/toolkit"
import projectsReducer from "@/features/projects/store/projects.slice"
import uiReducer from "@/features/projects/store/ui.slice"

export const store = configureStore({
  reducer: {
    projects: projectsReducer,
    ui: uiReducer,
  },
})

// Types inferred from store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch