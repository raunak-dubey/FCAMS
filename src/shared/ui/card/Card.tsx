import { cn } from "@/shared/lib/cn"

export const Card = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        "rounded-md border border-neutral-800 bg-neutral-900",
        className
      )}
    />
  )
}