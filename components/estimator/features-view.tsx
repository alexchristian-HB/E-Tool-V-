"use client"

import { FileDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { exportCsv } from "@/lib/export"
import { EmptyState, PageHeader } from "./layout-bits"
import { ComplexityBadge, Hours } from "./primitives"
import { useEstimator } from "./store"

export function FeaturesView() {
  const { selected, platform, project, roles, websitePages, mobileApps, totals, lineHoursFor, setPage, flash } =
    useEstimator()

  function handleExport() {
    exportCsv({ project, platform, selected, inputs: { roles, websitePages, mobileApps } })
    flash("Feature CSV exported")
  }

  return (
    <div>
      <PageHeader
        title="Feature listing"
        subtitle="Client-facing BA-style output generated from the selected scope."
        actions={
          selected.length > 0 && (
            <Button onClick={handleExport}>
              <FileDown className="size-4" /> Export CSV
            </Button>
          )
        }
      />

      <div className="mb-4 flex flex-wrap items-center gap-x-6 gap-y-1 rounded-lg border border-primary/30 bg-primary/5 px-4 py-3">
        <div>
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Estimated effort</span>
          <div className="text-lg font-bold text-primary">
            <Hours value={totals.total} />
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          {selected.length} module {selected.length === 1 ? "line" : "lines"} · {project.name || "Untitled"}
        </div>
      </div>

      {selected.length === 0 ? (
        <EmptyState title="Nothing to list yet">
          Head to the{" "}
          <button className="font-medium text-primary underline-offset-2 hover:underline" onClick={() => setPage("estimate")}>
            Estimator
          </button>{" "}
          and add modules to generate a feature listing.
        </EmptyState>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-border">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-secondary/60 text-left">
                <th className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Screen</th>
                <th className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Module</th>
                <th className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Sub modules</th>
                <th className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Description</th>
                <th className="px-3 py-2.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground">Complexity</th>
                <th className="px-3 py-2.5 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">Hours</th>
              </tr>
            </thead>
            <tbody>
              {selected.map((x, i) => (
                <tr key={x.uid} className={`bg-card align-top ${i > 0 ? "border-t border-border" : ""}`}>
                  <td className="px-3 py-3 text-muted-foreground">{x.screen}</td>
                  <td className="px-3 py-3 font-semibold text-foreground">{x.name}</td>
                  <td className="px-3 py-3">
                    <ul className="list-disc space-y-0.5 pl-4 text-xs text-muted-foreground">
                      {x.submodules.map((s) => (
                        <li key={s}>{s}</li>
                      ))}
                    </ul>
                  </td>
                  <td className="max-w-xs px-3 py-3 text-xs leading-relaxed text-muted-foreground">{x.description}</td>
                  <td className="px-3 py-3">
                    <ComplexityBadge level={x.complexity} />
                  </td>
                  <td className="px-3 py-3 text-right font-semibold text-foreground">
                    <Hours value={lineHoursFor(x)} />
                  </td>
                </tr>
              ))}
              <tr className="border-t-2 border-border bg-secondary/40">
                <td colSpan={5} className="px-3 py-3 text-right text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Total estimated effort
                </td>
                <td className="px-3 py-3 text-right text-base font-bold text-primary">
                  <Hours value={totals.total} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  )
}
