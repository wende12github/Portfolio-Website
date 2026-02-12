import * as React from "react"

import { cn } from "@/lib/utils"

interface LoadingSpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "xs" | "sm" | "md" | "lg" | "xl"
}

const sizeMap: Record<NonNullable<LoadingSpinnerProps["size"]>, string> = {
  xs: "size-4 border-2",
  sm: "size-6 border-2",
  md: "size-8 border-3",
  lg: "size-10 border-4",
  xl: "size-12 border-4",
}

function LoadingSpinner({ className, size = "md", ...props }: LoadingSpinnerProps) {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-busy="true"
      className={cn(
        "relative inline-block rounded-full border-t-primary border-muted-foreground/20 animate-spin",
        sizeMap[size],
        className
      )}
      {...props}
    >
      <span className="sr-only">Loading</span>
    </div>
  )
}

export { LoadingSpinner }
