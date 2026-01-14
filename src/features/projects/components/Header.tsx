import { useAppDispatch } from "@/shared/store/hooks";
import { openCommand } from "@/features/projects/store/ui.slice";

interface HeaderProps {
  projectCount: number;
}

export const Header = ({ projectCount }: HeaderProps) => {
  const dispatch = useAppDispatch();
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-lg font-semibold tracking-tight text-neutral-100">
          Your Projects
        </h1>
        <p className="mt-1 text-sm text-neutral-400">
          {projectCount} active projects
        </p>
      </div>

      <button
        onClick={() => dispatch(openCommand())}
        className="relative flex items-center gap-2 rounded-md border border-neutral-800 bg-neutral-900 px-3 py-2 text-sm text-background"
        aria-label="Open command palette"
      >
        <span>Search projects…</span>
        <kbd className="ml-4 rounded bg-neutral-800 px-1.5 py-0.5 text-xs">
          Ctrl ⇧ P
        </kbd>
      </button>
    </header>
  );
};
