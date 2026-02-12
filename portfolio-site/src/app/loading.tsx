import * as React from "react"

import { LoadingSpinner } from "@/components/ui/loading-spinner"

export default function Loading() {
  return (
    <main className="min-h-dvh grid place-items-center bg-background">
      <div className="flex flex-col items-center gap-4 text-center">
        <LoadingSpinner size="lg" className="text-primary" />
        <p className="text-sm text-muted-foreground">Loading your portfolio…</p>
      </div>
    </main>
  )
}
