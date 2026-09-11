"use client"

import { EmptyState, PageHeader } from "./layout-bits"
import { ModuleCard } from "./module-card"
import { SearchFilters } from "./search-filters"
import { useEstimator } from "./store"

export function LibraryView() {
  const { filtered } = useEstimator()
  return (
    <div>
      <PageHeader
        title="Module library"
        subtitle="Reusable estimation building blocks. Open any card to see its submodules, platforms and baseline effort."
      />
      <SearchFilters placeholder="Search the entire library…" />
      <div className="mt-2 text-xs text-muted-foreground">{filtered.length} modules</div>
      {filtered.length === 0 ? (
        <div className="mt-4">
          <EmptyState title="No modules match your search">Try a different keyword or category.</EmptyState>
        </div>
      ) : (
        <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
          {filtered.map((m) => (
            <ModuleCard key={m.id} m={m} />
          ))}
        </div>
      )}
    </div>
  )
}
