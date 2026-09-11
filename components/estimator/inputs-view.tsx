"use client"

import { PLATFORM_OPTIONS, PRIMARY_PLATFORMS } from "@/lib/modules"
import { PageHeader, StatCard } from "./layout-bits"
import { Hours, Select, TextInput, SectionTitle } from "./primitives"
import { useEstimator } from "./store"

function NumberField({
  label,
  hint,
  value,
  min,
  onChange,
}: {
  label: string
  hint: string
  value: number
  min: number
  onChange: (n: number) => void
}) {
  return (
    <label className="block space-y-1.5">
      <span className="text-sm font-medium text-foreground">{label}</span>
      <TextInput
        type="number"
        min={min}
        value={value}
        onChange={(e) => onChange(Math.max(min, Number(e.target.value) || min))}
      />
      <span className="block text-xs text-muted-foreground">{hint}</span>
    </label>
  )
}

export function InputsView() {
  const {
    platform,
    setPlatform,
    roles,
    setRoles,
    websitePages,
    setWebsitePages,
    mobileApps,
    setMobileApps,
    totals,
  } = useEstimator()

  const inputAdditions = totals.total - totals.baseTotal

  return (
    <div>
      <PageHeader
        title="Estimation inputs"
        subtitle="Fast project-level quantities that sit above the reusable modules."
      />

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatCard label="Role overhead" value={totals.roleHours} unit="h" />
        <StatCard label="Page overhead" value={totals.pageHours} unit="h" />
        <StatCard label="Mobile overhead" value={totals.mobileHours} unit="h" />
        <StatCard label="Input additions" value={inputAdditions} unit="h" emphasis />
      </div>

      <SectionTitle>Primary platform</SectionTitle>
      <div className="rounded-lg border border-border bg-card p-4">
        <Select value={platform} onChange={(e) => setPlatform(e.target.value)} className="sm:w-72" aria-label="Primary platform">
          {PRIMARY_PLATFORMS.map((k) => (
            <option key={k} value={k}>
              {PLATFORM_OPTIONS[k].label} · ×{PLATFORM_OPTIONS[k].factor}
            </option>
          ))}
        </Select>
        <p className="mt-2 text-xs text-muted-foreground">
          The platform factor scales every module line. Current factor:{" "}
          <span className="font-mono font-semibold text-foreground">×{PLATFORM_OPTIONS[platform]?.factor ?? 1}</span>
        </p>
      </div>

      <SectionTitle>Business inputs</SectionTitle>
      <div className="rounded-lg border border-border bg-card p-4">
        <div className="grid gap-4 sm:grid-cols-3">
          <NumberField
            label="User roles"
            hint="Each role beyond the first adds 18h of access overhead."
            value={roles}
            min={1}
            onChange={setRoles}
          />
          <NumberField
            label="Website pages"
            hint="2h per static / marketing page."
            value={websitePages}
            min={0}
            onChange={setWebsitePages}
          />
          <NumberField
            label="Mobile apps"
            hint="35h baseline per additional mobile app shell."
            value={mobileApps}
            min={0}
            onChange={setMobileApps}
          />
        </div>
        <div className="mt-4 flex items-center justify-between rounded-md border border-border bg-secondary/50 px-3 py-2.5">
          <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">Total input additions</span>
          <Hours value={inputAdditions} className="text-sm font-bold text-foreground" />
        </div>
        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
          These are intentionally simple multipliers. The detailed library is where BA teams should capture materially
          different workflows such as custom dashboards, user details, payment add-ons, approvals, integrations and
          vertical-specific records.
        </p>
      </div>
    </div>
  )
}
