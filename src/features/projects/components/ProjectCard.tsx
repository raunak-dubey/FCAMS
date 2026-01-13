import { motion } from "motion/react";
import { Folder } from "lucide-react";

interface ProjectCardProps {
  name: string;
}

export const ProjectCard = ({ name }: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -2 }}
      className="group rounded-xl border border-neutral-800 bg-neutral-900 p-4 transition-shadow hover:shadow-lg"
    >
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-neutral-800 p-2 group-hover:bg-neutral-700 transition">
          <Folder size={16} />
        </div>
        <div>
          <h3 className="text-sm font-medium text-neutral-100">{name}</h3>
          <p className="text-xs text-neutral-400 mt-1">
            Last updated recently
          </p>
        </div>
      </div>
    </motion.div>
  );
}