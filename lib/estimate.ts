import { PLATFORM_OPTIONS } from "./modules"
import type { Complexity, EstimationInputs, SelectedModule } from "./types"

export function complexityFactor(c: Complexity): number {
  return c === "Basic" ? 1 : c === "Medium" ? 1.35 : 1.75
}

/** Hours for a single selected line, accounting for complexity, quantity and platform. */
export function lineHours(x: SelectedModule, platform: string): number {
  const factor = PLATFORM_OPTIONS[platform]?.factor ?? 1
  const h = x.baseHours * complexityFactor(x.complexity) * x.qty * factor
  return Math.round(h)
}

/** Additional overhead hours from project-level inputs. */
export function inputHours({ roles, websitePages, mobileApps }: EstimationInputs) {
  const roleHours = Math.max(0, roles - 1) * 18
  const pageHours = websitePages * 2
  const mobileHours = mobileApps * 35
  return { roleHours, pageHours, mobileHours, total: roleHours + pageHours + mobileHours }
}

export function computeTotals(
  selected: SelectedModule[],
  platform: string,
  inputs: EstimationInputs,
) {
  const baseTotal = selected.reduce((a, x) => a + lineHours(x, platform), 0)
  const added = inputHours(inputs)
  return {
    baseTotal,
    ...added,
    total: baseTotal + added.total,
  }
}

/** Formats an hour count with thousands separators. */
export function fmtHours(n: number): string {
  return Math.round(n).toLocaleString("en-US")
}
