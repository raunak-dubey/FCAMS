import * as React from "react"
import { createPortal } from "react-dom"
import { cn } from "@/shared/lib/cn"
import { Button } from "../button/Button"

/* ------------------------------------------------------------------ */
/* CommandDialog */
/* ------------------------------------------------------------------ */

interface CommandDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  children: React.ReactNode
}

export const CommandDialog = ({
  open,
  onOpenChange,
  children,
}: CommandDialogProps) => {
  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [open, onOpenChange])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/60 p-4 sm:items-center">
      <div
        className="w-full max-w-lg rounded-md bg-neutral-900 border border-neutral-800"
        role="dialog"
        aria-modal
      >
        {children}
      </div>
    </div>,
    document.body
  )
}

/* ------------------------------------------------------------------ */
/* CommandInput */
/* ------------------------------------------------------------------ */

interface CommandInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onValueChange?: (value: string) => void
}

export const CommandInput = React.forwardRef<
  HTMLInputElement,
  CommandInputProps
>(({ className, onValueChange, ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      onChange={(e) => onValueChange?.(e.target.value)}
      className={cn(
        "w-full bg-transparent px-3 py-3 text-sm outline-none",
        "text-neutral-100 placeholder:text-neutral-500",
        className
      )}
    />
  )
})
CommandInput.displayName = "CommandInput"

/* ------------------------------------------------------------------ */
/* CommandList */
/* ------------------------------------------------------------------ */

export const CommandList = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={cn(
      "max-h-[60vh] overflow-y-auto overscroll-contain",
      className
    )}
  />
)

/* ------------------------------------------------------------------ */
/* CommandGroup */
/* ------------------------------------------------------------------ */

interface CommandGroupProps {
  heading?: string
  children: React.ReactNode
}

export const CommandGroup = ({ heading, children }: CommandGroupProps) => (
  <div className="px-2 py-2">
    {heading && (
      <div className="px-2 pb-2 text-xs font-medium text-neutral-500">
        {heading}
      </div>
    )}
    <div className="flex flex-col gap-1">{children}</div>
  </div>
)

/* ------------------------------------------------------------------ */
/* CommandItem */
/* ------------------------------------------------------------------ */

interface CommandItemProps {
  children: React.ReactNode
  onSelect?: () => void
  className?: string
}

export const CommandItem = ({
  children,
  onSelect,
  className,
}: CommandItemProps) => {
  return (
    <Button
      type="button"
      onClick={onSelect}
      className={cn(
        "flex w-full items-center gap-2 text-left",
        className
      )}
    >
      {children}
    </Button>
  )
}

/* ------------------------------------------------------------------ */
/* CommandSeparator */
/* ------------------------------------------------------------------ */

export const CommandSeparator = () => (
  <div className="my-2 h-px bg-neutral-800" />
)

/* ------------------------------------------------------------------ */
/* CommandEmpty */
/* ------------------------------------------------------------------ */

export const CommandEmpty = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    {...props}
    className={cn("px-4 py-6 text-sm text-neutral-400", className)}
  />
)