"use client"

import { useEffect, useState } from "react"
import { Loader2, Save } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog } from "./dialog"
import { TextInput, TextArea } from "./primitives"
import { useEstimator } from "./store"

export function SaveDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const { project, currentId, persist, saving } = useEstimator()
  const [name, setName] = useState(project.name)
  const [client, setClient] = useState(project.client)
  const [notes, setNotes] = useState(project.notes)

  useEffect(() => {
    if (open) {
      setName(project.name)
      setClient(project.client)
      setNotes(project.notes)
    }
  }, [open, project])

  async function handleSave() {
    await persist({ name, client, notes })
    onClose()
  }

  return (
    <Dialog open={open} onClose={onClose} labelledBy="save-dialog-title">
      <h2 id="save-dialog-title" className="pr-6 text-lg font-semibold text-foreground">
        {currentId ? "Update estimation" : "Save estimation"}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Stored in the shared database so your team can open it from any device.
      </p>

      <div className="mt-4 space-y-3">
        <label className="block space-y-1.5">
          <span className="text-xs font-medium text-foreground">Estimation name</span>
          <TextInput value={name} onChange={(e) => setName(e.target.value)} placeholder="e.g. Acme Marketplace MVP" />
        </label>
        <label className="block space-y-1.5">
          <span className="text-xs font-medium text-foreground">Client / project</span>
          <TextInput value={client} onChange={(e) => setClient(e.target.value)} placeholder="Client name" />
        </label>
        <label className="block space-y-1.5">
          <span className="text-xs font-medium text-foreground">Notes</span>
          <TextArea
            rows={3}
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            placeholder="Scope assumptions, discovery notes, exclusions…"
          />
        </label>
      </div>

      <div className="mt-5 flex justify-end gap-2">
        <Button variant="outline" onClick={onClose} disabled={saving}>
          Cancel
        </Button>
        <Button onClick={handleSave} disabled={saving}>
          {saving ? <Loader2 className="size-4 animate-spin" /> : <Save className="size-4" />}
          {currentId ? "Update" : "Save"}
        </Button>
      </div>
    </Dialog>
  )
}
