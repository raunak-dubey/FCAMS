import { type ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "ghost";
}

export function Button({
  variant = "default",
  className = "",
  ...props
}: ButtonProps) {
  const base =
    "inline-flex items-center rounded-md text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-rose-500";

  const variants = {
    default:
      "bg-neutral-900 text-neutral-100 border border-neutral-800 hover:border-rose-500/40",
    ghost:
      "bg-transparent text-neutral-300 hover:bg-neutral-900",
  };

  return (
    <button
    {...props}
      className={`${base} ${variants[variant]} ${className}`}
    />
  );
}