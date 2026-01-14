import { motion } from "motion/react";
import { Folder } from "lucide-react";
import { Card } from "@/shared/ui/card/card";

interface ProjectCardProps {
  name: string;
}

export const ProjectCard = ({ name }: ProjectCardProps) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 6 }}
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
    >
      <Card
        className="
          group
          rounded-md
          border-neutral-800
          bg-neutral-900
          p-4
          transition
          hover:border-rose-500/40
        "
      >
        <div className="flex items-start gap-3">
          <div
            className="
              rounded-md
              bg-neutral-800
              p-2
              text-neutral-400
              transition
              group-hover:bg-rose-500/10
              group-hover:text-rose-400
            "
          >
            <Folder size={16} />
          </div>

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
  );
};