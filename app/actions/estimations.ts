"use server"

import { sql } from "@/lib/db"
import type { EstimationRecord, SelectedModule } from "@/lib/types"

interface SaveInput {
  id?: string | null
  name: string
  client: string
  notes: string
  platform: string
  selected: SelectedModule[]
  roles: number
  websitePages: number
  mobileApps: number
  totalHours: number
}

function rowToRecord(r: Record<string, unknown>): EstimationRecord {
  return {
    id: r.id as string,
    name: r.name as string,
    client: r.client as string,
    notes: r.notes as string,
    platform: r.platform as string,
    selected: (r.selected as SelectedModule[]) ?? [],
    roles: Number(r.roles),
    websitePages: Number(r.website_pages),
    mobileApps: Number(r.mobile_apps),
    totalHours: Number(r.total_hours),
    createdAt: new Date(r.created_at as string).toISOString(),
    updatedAt: new Date(r.updated_at as string).toISOString(),
  }
}

export async function listEstimations(): Promise<EstimationRecord[]> {
  const rows = await sql`
    SELECT id, name, client, notes, platform, selected, roles, website_pages,
           mobile_apps, total_hours, created_at, updated_at
    FROM estimations
    ORDER BY updated_at DESC
  `
  return rows.map(rowToRecord)
}

export async function getEstimation(id: string): Promise<EstimationRecord | null> {
  const rows = await sql`
    SELECT id, name, client, notes, platform, selected, roles, website_pages,
           mobile_apps, total_hours, created_at, updated_at
    FROM estimations
    WHERE id = ${id}
    LIMIT 1
  `
  return rows.length ? rowToRecord(rows[0]) : null
}

export async function saveEstimation(input: SaveInput): Promise<EstimationRecord> {
  const id = input.id || crypto.randomUUID()
  const selectedJson = JSON.stringify(input.selected)
  const rows = await sql`
    INSERT INTO estimations (
      id, name, client, notes, platform, selected, roles, website_pages,
      mobile_apps, total_hours, updated_at
    ) VALUES (
      ${id}, ${input.name}, ${input.client}, ${input.notes}, ${input.platform},
      ${selectedJson}::jsonb, ${input.roles}, ${input.websitePages},
      ${input.mobileApps}, ${input.totalHours}, now()
    )
    ON CONFLICT (id) DO UPDATE SET
      name = EXCLUDED.name,
      client = EXCLUDED.client,
      notes = EXCLUDED.notes,
      platform = EXCLUDED.platform,
      selected = EXCLUDED.selected,
      roles = EXCLUDED.roles,
      website_pages = EXCLUDED.website_pages,
      mobile_apps = EXCLUDED.mobile_apps,
      total_hours = EXCLUDED.total_hours,
      updated_at = now()
    RETURNING id, name, client, notes, platform, selected, roles, website_pages,
              mobile_apps, total_hours, created_at, updated_at
  `
  return rowToRecord(rows[0])
}

export async function deleteEstimation(id: string): Promise<void> {
  await sql`DELETE FROM estimations WHERE id = ${id}`
}
