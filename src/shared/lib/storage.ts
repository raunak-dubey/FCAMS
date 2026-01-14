import localforage from "localforage"


// Configure one DB for your app
localforage.config({
name: "project-manager",
storeName: "projects", // table-like store
})


const PROJECTS_KEY = "projects"


export async function saveProjects(projects: unknown) {
await localforage.setItem(PROJECTS_KEY, projects)
}


export async function loadProjects<T>() {
return (await localforage.getItem<T>(PROJECTS_KEY))
}