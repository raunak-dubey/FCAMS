import { motion } from "motion/react";
import { ChevronLeft, ChevronRight, LayoutDashboard, Folder, Settings } from "lucide-react";
import { Button } from "@/shared/ui/button/button";
import { cn } from "@/shared/lib/cn";

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const items = [
  { icon: LayoutDashboard, label: "Dashboard" },
  { icon: Folder, label: "Projects" },
  { icon: Settings, label: "Settings" },
]

export const Sidebar = ({ collapsed, onToggle }: SidebarProps) => {
  return (
    <motion.aside
      animate={{ width: collapsed ? 72 : 240 }}
      transition={{ type: "spring", stiffness: 260, damping: 24 }}
      className="
        h-screen
        border-r border-neutral-800
        bg-neutral-950
        flex flex-col
      "
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <span className="text-sm font-medium text-neutral-100">
            FCAMS
          </span>
        )}

        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className="
            rounded-md
            text-neutral-400
            hover:text-rose-400
            hover:bg-neutral-900
          "
        >
          {collapsed ? (
            <ChevronRight size={16} />
          ) : (
            <ChevronLeft size={16} />
          )}
        </Button>
      </div>

      {/* Navigation */}
      <nav className="mt-2 flex flex-col gap-1 px-2">
        {items.map(({ icon: Icon, label }) => (
          <button
            key={label}
            className={cn(
              "flex items-center gap-3 rounded-md px-5 py-2 text-sm cursor-pointer",
              "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-100",
              "transition-colors"
            )}
          >
            <Icon className="size-4 text-rose-500" />
            {!collapsed && <span>{label}</span>}
          </button>
        ))}
      </nav>
    </motion.aside>
  );
};