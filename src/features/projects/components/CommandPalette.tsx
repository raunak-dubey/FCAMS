import * as React from "react"
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/shared/ui/command/command"
import { Folder, Plus } from "lucide-react"
import { useAppDispatch, useAppSelector } from "@/shared/store/hooks"
import { addProject } from "../store/projects.slice"
import { closeCommand, openCommand } from "../store/ui.slice"

export const CommandPalette = () => {
  const dispatch = useAppDispatch()
  const open = useAppSelector((s) => s.ui.isCommandOpen)


  const [mode, setMode] = React.useState<"default" | "create">("default")
  const [value, setValue] = React.useState("")
  // Keyboard shortcut
  React.useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key.toLowerCase() === "p") {
        e.preventDefault()
        dispatch(openCommand())
      }
    }
    window.addEventListener("keydown", handler)
    return () => window.removeEventListener("keydown", handler)
  }, [dispatch])

  const handleCreate = () => {
    if (!value.trim()) return
    dispatch(addProject({ name: value.trim() }))
    setValue("")
    setMode("default")
    dispatch(closeCommand())
  }

  return (
    <CommandDialog open={open} onOpenChange={(v) =>
      v ? dispatch(openCommand()) : dispatch(closeCommand())
    }
    >
      <div className="rounded-md border border-border bg-neutral-900 shadow-xl">
        <CommandInput
          placeholder={
            mode === "create"
              ? "Enter project name…"
              : "Type a command or search…"
          }
          value={value}
          onValueChange={setValue}
          onKeyDown={(e) => {
            if (e.key === "Enter" && mode === "create") {
              e.preventDefault()
              handleCreate()
            }
          }}
          className="border-none focus:ring-0 text-foreground"
        />

        <CommandList className="max-h-80">
          <CommandEmpty className="py-6 text-center text-sm text-neutral-300">
            No results found.
          </CommandEmpty>

          {mode === "default" && (
            <>
              <CommandGroup heading="Actions">
                <CommandItem
                  className="text-accent"
                  onSelect={() => {
                    setMode("create")
                    setValue("")
                  }}
                >
                  <Plus className="mr-2 size-4 text-rose-500" />
                  Create new project
                </CommandItem>
              </CommandGroup>

              <CommandSeparator />

              <CommandGroup heading="Projects">
                <CommandItem className="text-accent">
                  <Folder className="mr-2 size-4 text-rose-500" />
                  FCAMS Dashboard
                </CommandItem>
              </CommandGroup>
            </>
          )}

          {mode === "create" && (
            <CommandGroup heading="Create project">
              <CommandItem onSelect={handleCreate} className="text-accent">
                <Plus className="mr-2 size-4 text-rose-500" />
                Press Enter to create project "{value}"
              </CommandItem>
            </CommandGroup>
          )}
        </CommandList>
      </div>
    </CommandDialog>
  )
}