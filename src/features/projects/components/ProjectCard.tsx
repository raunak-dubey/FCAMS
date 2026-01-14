import { motion } from "motion/react"
import { Folder } from "lucide-react"
import { Card } from "@/shared/ui/card/Card"
import { IconBox } from "@/shared/ui/icon/IconBox"

interface ProjectCardProps {
  name: string
}

export const ProjectCard = ({ name }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        className="
          group p-4
          transition hover:border-rose-500/40 hover:text-rose-500
        "
      >
        <div className="flex gap-3">
          <IconBox
          >
            <Folder size={16} />
          </IconBox>

          <div>
            <h3 className="text-sm font-medium text-neutral-100">
              {name}
            </h3>
            <p className="mt-1 text-xs text-neutral-400">
              Last updated recently
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  )
}