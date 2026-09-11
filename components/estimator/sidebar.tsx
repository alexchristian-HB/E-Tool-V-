"use client"

import { Calculator, Database, ListChecks, Save, Settings2 } from "lucide-react"
import { cn } from "@/lib/utils"
import { MODULES } from "@/lib/modules"
import { useEstimator, type Page } from "./store"

const NAV: { key: Page; label: string; icon: typeof Calculator }[] = [
  { key: "estimate", label: "Estimator", icon: Calculator },
  { key: "library", label: "Module Library", icon: Database },
  { key: "features", label: "Feature Listing", icon: ListChecks },
  { key: "inputs", label: "Estimation Inputs", icon: Settings2 },
  { key: "saved", label: "Saved Estimations", icon: Save },
]

export function Sidebar() {
  const { page, setPage, selected, saved } = useEstimator()

  return (
    <aside className="hidden w-64 shrink-0 flex-col bg-sidebar text-sidebar-foreground lg:flex">
      <div className="flex h-16 items-center gap-2 border-b border-sidebar-border px-5">
        <div className="grid size-8 place-items-center rounded-md bg-sidebar-primary text-sidebar-primary-foreground">
          <Calculator className="size-4" />
        </div>
        <div className="leading-tight">
          <div className="text-sm font-bold tracking-tight">HB Estimation</div>
          <div className="text-[11px] text-sidebar-foreground/60">Sales + BA workspace</div>
        </div>
      </div>

      <nav className="flex flex-col gap-1 p-3">
        <div className="px-2 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-sidebar-foreground/45">
          Workspace
        </div>
        {NAV.map(({ key, label, icon: Icon }) => {
          const active = page === key
          const count =
            key === "estimate" || key === "features"
              ? selected.length
              : key === "saved"
                ? saved.length
                : null
          return (
            <button
              key={key}
              onClick={() => setPage(key)}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-2.5 py-2 text-sm font-medium transition-colors",
                active
                  ? "bg-sidebar-primary text-sidebar-primary-foreground"
                  : "text-sidebar-foreground/80 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
              )}
            >
              <Icon className="size-4 shrink-0" />
              <span className="flex-1 text-left">{label}</span>
              {count !== null && count > 0 && (
                <span
                  className={cn(
                    "rounded-full px-1.5 py-0.5 text-[10px] font-semibold tabular-nums",
                    active ? "bg-sidebar-primary-foreground/20" : "bg-sidebar-accent text-sidebar-accent-foreground",
                  )}
                >
                  {count}
                </span>
              )}
            </button>
          )
        })}
      </nav>

      <div className="mt-auto space-y-3 border-t border-sidebar-border p-4">
        <p className="text-[11px] leading-relaxed text-sidebar-foreground/55">
          {MODULES.length}+ reusable modules seeded from HB requirement patterns and common SaaS / ecommerce workflows.
        </p>
        <p className="text-[11px] leading-relaxed text-sidebar-foreground/45">
          Efforts are editable baselines. Final estimates should be validated during discovery.
        </p>
      </div>
    </aside>
  )
}
