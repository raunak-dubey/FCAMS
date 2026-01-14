import { type ReactNode } from "react";

export function IconBox({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-10 w-10 items-center justify-center rounded-md bg-neutral-800">
      {children}
    </div>
  );
}