"use client"

import { Search } from "lucide-react"
import { CATEGORIES } from "@/lib/modules"
import { Select, TextInput } from "./primitives"
import { useEstimator } from "./store"

export function SearchFilters({ placeholder }: { placeholder?: string }) {
  const { query, setQuery, category, setCategory } = useEstimator()
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <div className="relative flex-1">
        <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <TextInput
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={placeholder ?? "Search modules…"}
          className="pl-9"
          aria-label="Search modules"
        />
      </div>
      <Select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="sm:w-64"
        aria-label="Filter by category"
      >
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </Select>
    </div>
  )
}
