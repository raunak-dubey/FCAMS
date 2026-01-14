import { motion } from "motion/react"
import {
  ChevronLeft,
  ChevronRight,
  LayoutDashboard,
  Folder,
  Settings,
} from "lucide-react"
import { cn } from "@/shared/lib/cn"
import { Button } from "@/shared/ui/button/Button"

interface SidebarProps {
  collapsed: boolean
  onToggle: () => void
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
        hidden sm:flex
        h-screen flex-col
        border-r border-neutral-800
        bg-neutral-950
      "
    >
      <div className="flex items-center justify-between p-4">
        {!collapsed && (
          <span className="text-sm font-medium text-neutral-100">
            FCAMS
          </span>
        )}

        <Button
          onClick={onToggle}
          className="
            rounded-md p-2
            text-neutral-400
            hover:bg-neutral-900 hover:text-rose-400
          "
          variant="ghost"
        >
          {collapsed ? <ChevronRight size={16} /> : <ChevronLeft size={16} />}
        </Button>
      </div>

      <nav className="mt-2 flex flex-col gap-1 px-2">
        {items.map(({ icon: Icon, label }) => (
          <Button
            key={label}
            className={cn(
              "gap-3 rounded-md px-4 py-2 text-sm",
              "text-neutral-400 hover:bg-neutral-900 hover:text-neutral-100"
            )}
            variant="ghost"
          >
            <Icon className="size-4 text-rose-500" />
            {!collapsed && <span>{label}</span>}
          </Button>
        ))}
      </nav>
    </motion.aside>
  )
}