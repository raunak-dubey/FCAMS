import { useAppDispatch } from "@/shared/store/hooks"
import { openCommand } from "@/features/projects/store/ui.slice"
import { Button } from "@/shared/ui/button/Button"

interface HeaderProps {
  projectCount: number
}

export const Header = ({ projectCount }: HeaderProps) => {
  const dispatch = useAppDispatch()

  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <h1 className="text-lg font-semibold text-neutral-100">
          Your Projects
        </h1>
        <p className="text-sm text-neutral-400">
          {projectCount} active projects
        </p>
      </div>

      <Button
        onClick={() => dispatch(openCommand())}
        className="flex gap-2 px-4 py-3 sm:py-2"
      >
        <span>Search projects…</span>
        <kbd className="hidden sm:inline rounded bg-neutral-800 px-1.5 py-0.5 text-xs">
          Ctrl ⇧ P
        </kbd>
      </Button>
    </header>
  )
}