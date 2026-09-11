"use client"

import { Trash2 } from "lucide-react"
import { PLATFORM_OPTIONS, PRIMARY_PLATFORMS } from "@/lib/modules"
import { Button } from "@/components/ui/button"
import { EmptyState, PageHeader, StatCard } from "./layout-bits"
import { ModuleCard } from "./module-card"
import { ComplexityBadge, Hours, Select, TextInput, SectionTitle } from "./primitives"
import { SearchFilters } from "./search-filters"
import { useEstimator } from "./store"

export function EstimateView() {
  const {
    project,
    setProject,
    platform,
    setPlatform,
    selected,
    removeModule,
    updateModule,
    lineHoursFor,
    totals,
    filtered,
    setPage,
  } = useEstimator()

  return (
    <div>
      <PageHeader
        title="Build an estimation"
        subtitle="Pick reusable modules, tune complexity and quantity, then export a feature-level estimate your BA team can defend."
      />

      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
        <StatCard label="Selected modules" value={selected.length} />
        <StatCard label="Module effort" value={totals.baseTotal.toLocaleString("en-US")} unit="h" />
        <StatCard label="Input additions" value={totals.total - totals.baseTotal} unit="h" />
        <StatCard label="Current estimate" value={totals.total.toLocaleString("en-US")} unit="h" emphasis />
      </div>

      <SectionTitle>Project setup</SectionTitle>
      <div className="rounded-lg border border-border bg-card p-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <TextInput
            value={project.name}
            onChange={(e) => setProject({ name: e.target.value })}
            placeholder="Estimation name"
            aria-label="Estimation name"
          />
          <TextInput
            value={project.client}
            onChange={(e) => setProject({ client: e.target.value })}
            placeholder="Client / project"
            aria-label="Client"
          />
          <Select value={platform} onChange={(e) => setPlatform(e.target.value)} aria-label="Primary platform">
            {PRIMARY_PLATFORMS.map((k) => (
              <option key={k} value={k}>
                {PLATFORM_OPTIONS[k].label}
              </option>
            ))}
          </Select>
        </div>
        <p className="mt-3 rounded-md border border-border bg-secondary/50 p-3 text-xs leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">Role multiplier:</span> each additional role adds a
          login / dashboard / access overhead baseline. Use the library to add role-specific workflows where their
          dashboards or permissions differ materially.
        </p>
      </div>

      <SectionTitle action={<Button variant="ghost" size="sm" onClick={() => setPage("library")}>Browse full library</Button>}>
        Quick module picker
      </SectionTitle>
      <SearchFilters placeholder="Search login, payment, booking, CMS, KYC…" />
      <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {filtered.slice(0, 12).map((m) => (
          <ModuleCard key={m.id} m={m} />
        ))}
      </div>

      <SectionTitle>Selected scope</SectionTitle>
      {selected.length === 0 ? (
        <EmptyState title="No modules selected yet">
          Search the picker above and add the flows you need. Each line becomes a row in your feature listing.
        </EmptyState>
      ) : (
        <div className="overflow-hidden rounded-lg border border-border">
          {selected.map((x, i) => (
            <div
              key={x.uid}
              className={`flex flex-wrap items-center gap-3 bg-card p-3 ${i > 0 ? "border-t border-border" : ""}`}
            >
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span className="truncate text-sm font-semibold text-foreground">{x.name}</span>
                  <ComplexityBadge level={x.complexity} />
                </div>
                <div className="truncate text-xs text-muted-foreground">
                  {x.screen} · {x.submodules.slice(0, 4).join(", ")}
                  {x.submodules.length > 4 ? "…" : ""}
                </div>
              </div>
              <Select
                value={x.complexity}
                onChange={(e) => updateModule(x.uid, { complexity: e.target.value as typeof x.complexity })}
                className="w-32"
                aria-label={`Complexity for ${x.name}`}
              >
                <option>Basic</option>
                <option>Medium</option>
                <option>Advanced</option>
              </Select>
              <TextInput
                type="number"
                min={1}
                value={x.qty}
                onChange={(e) => updateModule(x.uid, { qty: Math.max(1, Number(e.target.value) || 1) })}
                className="w-16 text-center"
                aria-label={`Quantity for ${x.name}`}
              />
              <div className="flex w-24 items-center justify-end gap-2">
                <Hours value={lineHoursFor(x)} className="text-sm font-semibold text-foreground" />
                <Button variant="ghost" size="icon-sm" onClick={() => removeModule(x.uid)} aria-label={`Remove ${x.name}`}>
                  <Trash2 className="size-3.5 text-muted-foreground" />
                </Button>
              </div>
            </div>
          ))}
          <div className="flex items-center justify-between border-t border-border bg-secondary/40 px-3 py-2.5">
            <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Module subtotal</span>
            <Hours value={totals.baseTotal} className="text-sm font-bold text-foreground" />
          </div>
        </div>
      )}
    </div>
  )
}
