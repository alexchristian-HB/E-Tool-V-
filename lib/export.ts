import { computeTotals, lineHours } from "./estimate"
import type { EstimationInputs, SelectedModule } from "./types"

interface ExportPayload {
  project: { name: string; client: string; notes: string }
  platform: string
  selected: SelectedModule[]
  inputs: EstimationInputs
}

function download(filename: string, content: string, type: string) {
  const blob = new Blob([content], { type })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = filename
  a.click()
  URL.revokeObjectURL(url)
}

function safeName(name: string) {
  return (name || "HB-Estimation").replace(/[^a-z0-9-_]+/gi, "-").replace(/-+/g, "-")
}

export function exportJson(payload: ExportPayload) {
  const totals = computeTotals(payload.selected, payload.platform, payload.inputs)
  const data = {
    tool: "HB Estimation Tool",
    version: "1.0",
    project: payload.project,
    platform: payload.platform,
    selected: payload.selected,
    inputs: payload.inputs,
    totalHours: totals.total,
  }
  download(`${safeName(payload.project.name)}.json`, JSON.stringify(data, null, 2), "application/json")
}

export function exportCsv(payload: ExportPayload) {
  const head = "Screen,Module,Sub Modules,Description,Complexity,Hours\n"
  const body = payload.selected
    .map((x) =>
      [
        x.screen,
        x.name,
        x.submodules.join(" | "),
        x.description,
        x.complexity,
        lineHours(x, payload.platform),
      ]
        .map((v) => `"${String(v).replaceAll('"', '""')}"`)
        .join(","),
    )
    .join("\n")
  download(`${safeName(payload.project.name)}-features.csv`, head + body, "text/csv")
}
