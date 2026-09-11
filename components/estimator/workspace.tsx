"use client"

import { Dialog } from "./dialog"
import { EstimateView } from "./estimate-view"
import { FeaturesView } from "./features-view"
import { InputsView } from "./inputs-view"
import { LibraryView } from "./library-view"
import { ModuleDetail } from "./module-detail"
import { SavedView } from "./saved-view"
import { Sidebar } from "./sidebar"
import { EstimatorProvider, useEstimator } from "./store"
import { ToastHost } from "./toast-host"
import { Topbar } from "./topbar"

function Content() {
  const { page, detail, setDetail } = useEstimator()
  return (
    <div className="flex min-h-screen bg-background">
      <Sidebar />
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-4 py-6 sm:px-6 lg:px-8">
          {page === "estimate" && <EstimateView />}
          {page === "library" && <LibraryView />}
          {page === "features" && <FeaturesView />}
          {page === "inputs" && <InputsView />}
          {page === "saved" && <SavedView />}
        </main>
      </div>

      <Dialog open={!!detail} onClose={() => setDetail(null)} labelledBy="module-detail-title">
        <ModuleDetail />
      </Dialog>
      <ToastHost />
    </div>
  )
}

export function Workspace() {
  return (
    <EstimatorProvider>
      <Content />
    </EstimatorProvider>
  )
}
