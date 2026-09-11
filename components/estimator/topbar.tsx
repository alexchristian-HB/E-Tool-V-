"use client"

import { useState } from "react"
import { FileDown, FileJson, FilePlus2, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { exportCsv, exportJson } from "@/lib/export"
import { Select } from "./primitives"
import { SaveDialog } from "./save-dialog"
import { useEstimator, type Page } from "./store"

const PAGE_LABELS: Record<Page, string> = {
  estimate: "Estimator",
  library: "Module Library",
  features: "Feature Listing",
  inputs: "Estimation Inputs",
  saved: "Saved Estimations",
}

export function Topbar() {
  const { page, setPage, project, platform, selected, roles, websitePages, mobileApps, newEstimation, flash } =
    useEstimator()
  const [saveOpen, setSaveOpen] = useState(false)

  const payload = {
    project,
    platform,
    selected,
    inputs: { roles, websitePages, mobileApps },
  }

  function handleExport(kind: "json" | "csv") {
    if (selected.length === 0) {
      flash("Add modules before exporting")
      return
    }
    if (kind === "json") exportJson(payload)
    else exportCsv(payload)
    flash(kind === "json" ? "JSON exported" : "Feature CSV exported")
  }

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-border bg-background/85 px-4 backdrop-blur-md sm:px-6">
      <div className="min-w-0 flex-1">
        <div className="truncate text-sm font-semibold text-foreground">{project.name || "Untitled Estimation"}</div>
        <div className="truncate text-xs text-muted-foreground">
          {project.client ? project.client : "No client set"} · {PAGE_LABELS[page]}
        </div>
      </div>

      <Select
        value={page}
        onChange={(e) => setPage(e.target.value as Page)}
        className="w-auto lg:hidden"
        aria-label="Switch view"
      >
        {(Object.keys(PAGE_LABELS) as Page[]).map((p) => (
          <option key={p} value={p}>
            {PAGE_LABELS[p]}
          </option>
        ))}
      </Select>

      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" onClick={newEstimation} className="hidden sm:inline-flex">
          <FilePlus2 className="size-4" /> New
        </Button>
        <Button variant="outline" size="sm" onClick={() => handleExport("csv")} className="hidden md:inline-flex">
          <FileDown className="size-4" /> CSV
        </Button>
        <Button variant="outline" size="sm" onClick={() => handleExport("json")} className="hidden md:inline-flex">
          <FileJson className="size-4" /> JSON
        </Button>
        <Button size="sm" onClick={() => setSaveOpen(true)}>
          <Save className="size-4" /> Save
        </Button>
      </div>

      <SaveDialog open={saveOpen} onClose={() => setSaveOpen(false)} />
    </header>
  )
}
