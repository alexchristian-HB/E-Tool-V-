"use client"

import { createContext, useCallback, useContext, useMemo, useState, type ReactNode } from "react"
import useSWR from "swr"
import {
  deleteEstimation,
  listEstimations,
  saveEstimation,
} from "@/app/actions/estimations"
import { computeTotals, lineHours } from "@/lib/estimate"
import { MODULES } from "@/lib/modules"
import type {
  Complexity,
  EstimationRecord,
  EstModule,
  SelectedModule,
} from "@/lib/types"

export type Page = "estimate" | "library" | "features" | "inputs" | "saved"

interface Project {
  name: string
  client: string
  notes: string
}

interface Toast {
  id: number
  message: string
}

interface EstimatorState {
  page: Page
  setPage: (p: Page) => void

  project: Project
  setProject: (p: Partial<Project>) => void

  platform: string
  setPlatform: (p: string) => void

  selected: SelectedModule[]
  addModule: (m: EstModule) => void
  removeModule: (uid: string) => void
  updateModule: (uid: string, patch: Partial<SelectedModule>) => void

  roles: number
  setRoles: (n: number) => void
  websitePages: number
  setWebsitePages: (n: number) => void
  mobileApps: number
  setMobileApps: (n: number) => void

  // search / filter (shared by estimate + library)
  query: string
  setQuery: (q: string) => void
  category: string
  setCategory: (c: string) => void
  filtered: EstModule[]

  // module detail dialog
  detail: EstModule | null
  setDetail: (m: EstModule | null) => void

  // derived
  lineHoursFor: (x: SelectedModule) => number
  totals: ReturnType<typeof computeTotals>

  // persistence
  currentId: string | null
  saved: EstimationRecord[]
  savedLoading: boolean
  saving: boolean
  persist: (meta: Project) => Promise<void>
  loadRecord: (r: EstimationRecord) => void
  removeRecord: (id: string) => Promise<void>
  newEstimation: () => void

  // toast
  toasts: Toast[]
  flash: (message: string) => void
  dismissToast: (id: number) => void
}

const Ctx = createContext<EstimatorState | null>(null)

export function useEstimator() {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error("useEstimator must be used within EstimatorProvider")
  return ctx
}

export function EstimatorProvider({ children }: { children: ReactNode }) {
  const [page, setPage] = useState<Page>("estimate")
  const [project, setProjectState] = useState<Project>({ name: "New Estimation", client: "", notes: "" })
  const [platform, setPlatform] = useState("web")
  const [selected, setSelected] = useState<SelectedModule[]>([])
  const [roles, setRoles] = useState(1)
  const [websitePages, setWebsitePages] = useState(0)
  const [mobileApps, setMobileApps] = useState(0)
  const [query, setQuery] = useState("")
  const [category, setCategory] = useState("All")
  const [detail, setDetail] = useState<EstModule | null>(null)
  const [currentId, setCurrentId] = useState<string | null>(null)
  const [saving, setSaving] = useState(false)
  const [toasts, setToasts] = useState<Toast[]>([])

  const { data: saved = [], isLoading: savedLoading, mutate } = useSWR(
    "estimations",
    listEstimations,
    { revalidateOnFocus: false },
  )

  const setProject = useCallback((p: Partial<Project>) => {
    setProjectState((prev) => ({ ...prev, ...p }))
  }, [])

  const flash = useCallback((message: string) => {
    const id = Date.now() + Math.random()
    setToasts((t) => [...t, { id, message }])
    setTimeout(() => setToasts((t) => t.filter((x) => x.id !== id)), 2600)
  }, [])

  const dismissToast = useCallback((id: number) => {
    setToasts((t) => t.filter((x) => x.id !== id))
  }, [])

  const addModule = useCallback(
    (m: EstModule) => {
      const uid = `${m.id}-${Date.now()}`
      setSelected((s) => [...s, { ...m, uid, qty: 1 }])
      flash(`${m.name} added to estimate`)
    },
    [flash],
  )

  const removeModule = useCallback((uid: string) => {
    setSelected((s) => s.filter((x) => x.uid !== uid))
  }, [])

  const updateModule = useCallback((uid: string, patch: Partial<SelectedModule>) => {
    setSelected((s) => s.map((x) => (x.uid === uid ? { ...x, ...patch } : x)))
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return MODULES.filter(
      (m) =>
        (category === "All" || m.category === category) &&
        (q === "" ||
          `${m.name} ${m.screen} ${m.description} ${m.tags.join(" ")}`.toLowerCase().includes(q)),
    )
  }, [query, category])

  const lineHoursFor = useCallback(
    (x: SelectedModule) => lineHours(x, platform),
    [platform],
  )

  const totals = useMemo(
    () => computeTotals(selected, platform, { roles, websitePages, mobileApps }),
    [selected, platform, roles, websitePages, mobileApps],
  )

  const persist = useCallback(
    async (meta: Project) => {
      setSaving(true)
      try {
        const record = await saveEstimation({
          id: currentId,
          name: meta.name || "Untitled Estimation",
          client: meta.client,
          notes: meta.notes,
          platform,
          selected,
          roles,
          websitePages,
          mobileApps,
          totalHours: totals.total,
        })
        setCurrentId(record.id)
        setProjectState({ name: record.name, client: record.client, notes: record.notes })
        await mutate()
        flash("Estimation saved")
      } catch (e) {
        console.log("[v0] save error", e)
        flash("Could not save. Please try again.")
      } finally {
        setSaving(false)
      }
    },
    [currentId, platform, selected, roles, websitePages, mobileApps, totals.total, mutate, flash],
  )

  const loadRecord = useCallback(
    (r: EstimationRecord) => {
      setCurrentId(r.id)
      setProjectState({ name: r.name, client: r.client, notes: r.notes })
      setPlatform(r.platform)
      setSelected(r.selected ?? [])
      setRoles(r.roles)
      setWebsitePages(r.websitePages)
      setMobileApps(r.mobileApps)
      setPage("estimate")
      flash(`Loaded "${r.name}"`)
    },
    [flash],
  )

  const removeRecord = useCallback(
    async (id: string) => {
      await deleteEstimation(id)
      if (currentId === id) setCurrentId(null)
      await mutate()
      flash("Estimation deleted")
    },
    [currentId, mutate, flash],
  )

  const newEstimation = useCallback(() => {
    setCurrentId(null)
    setProjectState({ name: "New Estimation", client: "", notes: "" })
    setPlatform("web")
    setSelected([])
    setRoles(1)
    setWebsitePages(0)
    setMobileApps(0)
    setPage("estimate")
    flash("Started a new estimation")
  }, [flash])

  const value: EstimatorState = {
    page,
    setPage,
    project,
    setProject,
    platform,
    setPlatform,
    selected,
    addModule,
    removeModule,
    updateModule,
    roles,
    setRoles,
    websitePages,
    setWebsitePages,
    mobileApps,
    setMobileApps,
    query,
    setQuery,
    category,
    setCategory,
    filtered,
    detail,
    setDetail,
    lineHoursFor,
    totals,
    currentId,
    saved,
    savedLoading,
    saving,
    persist,
    loadRecord,
    removeRecord,
    newEstimation,
    toasts,
    flash,
    dismissToast,
  }

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>
}

export function complexityFor(c: string): Complexity {
  return (["Basic", "Medium", "Advanced"].includes(c) ? c : "Basic") as Complexity
}
