import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface Project {
  id: string;
  name: string;
}

interface ProjectsState {
  items: Project[];
  hydrated: boolean;
}

const initialState: ProjectsState = {
  items: [],
  hydrated: false,
};

const projectsSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    hydrateProjects(state, action: PayloadAction<Project[]>) {
      state.items = action.payload;
      state.hydrated = true;
    },
    addProject(state, action: PayloadAction<{ name: string }>) {
      state.items.push({
        id: crypto.randomUUID(),
        name: action.payload.name,
      });
    },
  },
});

export const { addProject, hydrateProjects } = projectsSlice.actions;
export default projectsSlice.reducer;
