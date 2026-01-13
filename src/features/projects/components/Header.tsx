import { Search, Plus } from "lucide-react";

interface HeaderProps {
  projectCount: number;
}

export const Header = ({ projectCount }: HeaderProps) => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-lg font-semibold text-neutral-100">
          Your Projects
        </h1>
        <p className="text-sm text-neutral-400 mt-1">
          {projectCount} active projects
        </p>
      </div>

      <div className="flex items-center gap-2">
        <div className="relative">
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-500"
          />
          <input
            type="search"
            placeholder="Search projects"
            className="pl-9 pr-3 py-2 text-sm rounded-lg bg-neutral-900 border border-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-600"
          />
        </div>
        <button className="inline-flex items-center gap-1.5 rounded-lg bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-400">
          <Plus size={14} /> New
        </button>
      </div>
    </header>
  );
}