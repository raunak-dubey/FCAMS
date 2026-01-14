import * as React from "react"
import { Folder, Plus } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks"
import { addProject } from "../store/projects.slice"
import { closeCommand, openCommand } from "../store/ui.slice"
import {
  CommandDialog,
  CommandInput,
  CommandList,
  CommandItem,
  CommandGroup,
  CommandSeparator,
  CommandEmpty,
} from "@/shared/ui/command/Command"

export const CommandPalette = () => {
  const dispatch = useAppDispatch()
  const open = useAppSelector((s) => s.ui.isCommandOpen)
  const projects = useAppSelector((s) => s.projects.items)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const [mode, setMode] = React.useState<"default" | "create">("default")
  const [value, setValue] = React.useState("")

  const query = value.trim().toLowerCase()

  const filteredProjects =
    query.length === 0
      ? projects
      : projects.filter((p) =>
        p.name.toLowerCase().includes(query)
      )

  const showEmpty =
    mode === "default" &&
    query.length > 0 &&
    filteredProjects.length === 0


  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "p") {
        e.preventDefault()
        dispatch(openCommand())
      }
    }

    if (open) {
      // small delay ensures portal + input are mounted
      requestAnimationFrame(() => {
        inputRef.current?.focus()
      })
    }

    if (!open) {
      setMode("default")
      setValue("")
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [dispatch, open])

  const handleCreate = () => {
    if (!value.trim()) return
    dispatch(addProject({ name: value.trim() }))
    setValue("")
    setMode("default")
    dispatch(closeCommand())
  }

  return (
    <CommandDialog
      open={open}
      onOpenChange={(v) =>
        v ? dispatch(openCommand()) : dispatch(closeCommand())
      }
    >
      <div className="rounded-md border border-neutral-800 bg-neutral-900 shadow-xl">
        <CommandInput
          ref={inputRef}
          placeholder={
            mode === "create"
              ? "Enter project name…"
              : "Type a command or search…"
          }
          value={value}
          onValueChange={setValue}
          onKeyDown={(e) => {
            if (mode === "create") {
              if (e.key === "Enter") {
                e.preventDefault()
                handleCreate()
              }

              if (e.key === "Escape") {
                e.preventDefault()
                setMode("default")
                setValue("")
              }

              if (e.key === "Backspace" && value.length === 0) {
                setMode("default")
              }
            }
          }}
        />

        <CommandList>
          {showEmpty && (
            <CommandEmpty className="py-6 text-center">
              No results found.
            </CommandEmpty>
          )}

          {mode === "default" && (
            <>
              <CommandGroup heading="Actions">
                <CommandItem
                  onSelect={() => {
                    setMode("create")
                    setValue("")
                  }}
                  className="px-3 py-2"
                >
                  <Plus className="size-4 text-rose-500" />
                  Create new project
                </CommandItem>
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Projects">
                {filteredProjects.map((project) => (
                  <CommandItem key={project.id} className="px-3 py-2">
                    <Folder className="size-4 text-rose-500" />
                    {project.name}
                  </CommandItem>
                ))}
              </CommandGroup>
            </>
          )}

          {mode === "create" && (
            <CommandGroup heading="Create project">
              <CommandItem onSelect={handleCreate} className="px-3 py-2">
                <Plus className="size-4 text-rose-500" />
                Press Enter to create “{value}”
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </div>
    </CommandDialog>
  )
}