import { motion } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 240 }}
      className="h-screen bg-neutral-950 border-r border-neutral-800 flex flex-col"
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <span className="text-sm font-semibold text-neutral-100">
            Projects
          </span>
        )}
        <button
          onClick={onToggle}
          aria-label="Toggle sidebar"
          className="p-1.5 rounded-md hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-neutral-600"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </button>
      </div>
    </motion.aside>
  );
}