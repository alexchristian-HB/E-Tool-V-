"use client"

import { CheckCircle2 } from "lucide-react"
import { useEstimator } from "./store"

export function ToastHost() {
  const { toasts } = useEstimator()
  return (
    <div className="pointer-events-none fixed bottom-4 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center gap-2">
      {toasts.map((t) => (
        <div
          key={t.id}
          role="status"
          className="pointer-events-auto flex items-center gap-2 rounded-lg border border-border bg-card px-3.5 py-2 text-sm font-medium text-foreground shadow-lg"
        >
          <CheckCircle2 className="size-4 text-primary" />
          {t.message}
        </div>
      ))}
    </div>
  )
}
