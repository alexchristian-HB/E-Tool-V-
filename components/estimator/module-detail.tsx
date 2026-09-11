"use client"

import { Check, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { PLATFORM_OPTIONS } from "@/lib/modules"
import { Chip, ComplexityBadge, Hours, SectionTitle } from "./primitives"
import { useEstimator } from "./store"

export function ModuleDetail() {
  const { detail, setDetail, addModule } = useEstimator()
  if (!detail) return null
  const m = detail

  return (
    <div className="pr-6">
      <Chip>{m.category}</Chip>
      <h2 id="module-detail-title" className="mt-2 text-balance text-lg font-semibold text-foreground">
        {m.name}
      </h2>
      <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <span>{m.screen}</span>
        <span aria-hidden>•</span>
        <ComplexityBadge level={m.complexity} />
        <span aria-hidden>•</span>
        <Hours value={m.baseHours} className="font-semibold text-foreground" /> baseline
      </div>

      <SectionTitle>Included submodules</SectionTitle>
      <ul className="grid gap-1.5 sm:grid-cols-2">
        {m.submodules.map((s) => (
          <li key={s} className="flex items-start gap-2 text-sm text-foreground">
            <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
            <span>{s}</span>
          </li>
        ))}
      </ul>

      <SectionTitle>Supported platforms</SectionTitle>
      <div className="flex flex-wrap gap-1.5">
        {m.platforms.map((p) => (
          <Chip key={p} tone="accent">
            {PLATFORM_OPTIONS[p]?.label ?? p}
          </Chip>
        ))}
      </div>

      <SectionTitle>Description</SectionTitle>
      <p className="text-sm leading-relaxed text-muted-foreground">{m.description}</p>

      <div className="mt-4 rounded-lg border border-border bg-secondary/50 p-3 text-xs leading-relaxed text-muted-foreground">
        Baseline hours are a standard starting point, not a project-specific commitment. Connected modules can be added
        separately so the BA can explain exactly why an estimate increases.
      </div>

      <div className="mt-5 flex justify-end gap-2">
        <Button variant="outline" onClick={() => setDetail(null)}>
          Close
        </Button>
        <Button
          onClick={() => {
            addModule(m)
            setDetail(null)
          }}
        >
          <Plus className="size-4" /> Add to estimate
        </Button>
      </div>
    </div>
  )
}
