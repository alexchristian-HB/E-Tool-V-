"use client"

import { useState } from "react"
import { FolderOpen, Loader2, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { EstimationRecord } from "@/lib/types"
import { EmptyState, PageHeader } from "./layout-bits"
import { Chip, Hours } from "./primitives"
import { useEstimator } from "./store"

function fmtDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })
}

function SavedCard({ r }: { r: EstimationRecord }) {
  const { loadRecord, removeRecord, currentId } = useEstimator()
  const [deleting, setDeleting] = useState(false)
  const isCurrent = currentId === r.id

  async function handleDelete() {
    if (!confirm(`Delete "${r.name}"? This cannot be undone.`)) return
    setDeleting(true)
    try {
      await removeRecord(r.id)
    } finally {
      setDeleting(false)
    }
  }

  return (
    <div className="flex flex-col rounded-lg border border-border bg-card p-4 shadow-xs">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2">
            <h3 className="truncate text-sm font-semibold text-foreground">{r.name}</h3>
            {isCurrent && <Chip tone="accent">Open</Chip>}
          </div>
          <p className="truncate text-xs text-muted-foreground">{r.client || "No client"}</p>
        </div>
        <div className="text-right">
          <div className="font-mono text-lg font-bold text-primary">
            <Hours value={r.totalHours} />
          </div>
        </div>
      </div>

      <div className="mt-3 flex flex-wrap items-center gap-2 text-[11px] text-muted-foreground">
        <Chip tone="outline">{r.selected.length} modules</Chip>
        <Chip tone="outline">{r.platform}</Chip>
        <span>Updated {fmtDate(r.updatedAt)}</span>
      </div>

      {r.notes && <p className="mt-2 line-clamp-2 text-xs leading-relaxed text-muted-foreground">{r.notes}</p>}

      <div className="mt-4 flex gap-2 border-t border-border pt-3">
        <Button size="sm" onClick={() => loadRecord(r)} className="flex-1">
          <FolderOpen className="size-3.5" /> Open
        </Button>
        <Button variant="destructive" size="icon-sm" onClick={handleDelete} disabled={deleting} aria-label={`Delete ${r.name}`}>
          {deleting ? <Loader2 className="size-3.5 animate-spin" /> : <Trash2 className="size-3.5" />}
        </Button>
      </div>
    </div>
  )
}

export function SavedView() {
  const { saved, savedLoading, newEstimation } = useEstimator()

  return (
    <div>
      <PageHeader
        title="Saved estimations"
        subtitle="Stored in the shared team database. Open one to keep editing, or start fresh."
        actions={
          <Button variant="outline" onClick={newEstimation}>
            <Plus className="size-4" /> New estimation
          </Button>
        }
      />

      {savedLoading ? (
        <div className="flex items-center justify-center gap-2 py-16 text-sm text-muted-foreground">
          <Loader2 className="size-4 animate-spin" /> Loading saved estimations…
        </div>
      ) : saved.length === 0 ? (
        <EmptyState title="No saved estimations yet">
          Build an estimate and hit Save. It will show up here for the whole team, on any device.
        </EmptyState>
      ) : (
        <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {saved.map((r) => (
            <SavedCard key={r.id} r={r} />
          ))}
        </div>
      )}
    </div>
  )
}
