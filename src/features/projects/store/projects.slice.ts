import { createSlice, type PayloadAction } from "@reduxjs/toolkit"

export interface Project {
  id: string
  name: string
}

interface ProjectsState {
  items: Project[]
}

const initialState: ProjectsState = {
  items: [
    { id: "1", name: "FCAMS Dashboard" },
    { id: "2", name: "Landing Page" },
  ],
}

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    addProject(state, action: PayloadAction<{ name: string }>) {
      state.items.push({
        id: crypto.randomUUID(),
        name: action.payload.name,
      })
    },
  },
})

export const { addProject } = projectsSlice.actions
export default projectsSlice.reducer
