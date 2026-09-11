export type Complexity = "Basic" | "Medium" | "Advanced"

export interface EstModule {
  id: string
  category: string
  name: string
  screen: string
  complexity: Complexity
  baseHours: number
  platforms: string[]
  submodules: string[]
  description: string
  tags: string[]
}

export interface PlatformOption {
  label: string
  factor: number
}

/** A module that has been added to an estimation, with per-line overrides. */
export interface SelectedModule extends EstModule {
  uid: string
  qty: number
}

export interface EstimationInputs {
  roles: number
  websitePages: number
  mobileApps: number
}

export interface EstimationRecord {
  id: string
  name: string
  client: string
  notes: string
  platform: string
  selected: SelectedModule[]
  roles: number
  websitePages: number
  mobileApps: number
  totalHours: number
  createdAt: string
  updatedAt: string
}
