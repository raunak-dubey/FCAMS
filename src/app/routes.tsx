import { BrowserRouter, Routes, Route } from "react-router";
import { ProjectsPage } from "@/features/projects";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ProjectsPage />} />
      </Routes>
    </BrowserRouter>
  );
}