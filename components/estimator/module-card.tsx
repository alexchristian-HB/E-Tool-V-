"use client"

import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { EstModule } from "@/lib/types"
import { Chip, Hours } from "./primitives"
import { useEstimator } from "./store"

export function ModuleCard({ m }: { m: EstModule }) {
  const { addModule, setDetail } = useEstimator()
  return (
    <button
      type="button"
      onClick={() => setDetail(m)}
      className="group flex flex-col rounded-lg border border-border bg-card p-4 text-left shadow-xs transition-all hover:border-ring/40 hover:shadow-md focus-visible:border-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/25"
    >
      <div className="mb-2 flex items-center justify-between gap-2">
        <Chip>{m.category}</Chip>
        <Hours value={m.baseHours} className="text-sm font-semibold text-foreground" />
      </div>
      <h3 className="text-pretty text-sm font-semibold leading-snug text-foreground">{m.name}</h3>
      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{m.description}</p>
      <div className="mt-3 flex flex-wrap gap-1">
        {m.tags.slice(0, 3).map((t) => (
          <Chip key={t} tone="outline">
            {t}
          </Chip>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-border pt-3">
        <span className="text-[11px] font-medium text-muted-foreground">{m.screen}</span>
        <Button
          size="sm"
          onClick={(e) => {
            e.stopPropagation()
            addModule(m)
          }}
        >
          <Plus className="size-3.5" /> Add
        </Button>
      </div>
    </button>
  )
}
