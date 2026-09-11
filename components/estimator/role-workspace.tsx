"use client"

import { useMemo, useState } from "react"
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  CircleAlert,
  FileText,
  LayoutDashboard,
  Library,
  LockKeyhole,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  Users,
} from "lucide-react"
import { MODULES } from "@/lib/modules"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const projectRows = [
  { name: "MediTrust Patient Portal", client: "MediTrust Health", status: "AI draft ready", owner: "Priya N.", hours: 286, updated: "Today" },
  { name: "Atlas Commerce Replatform", client: "Atlas Retail Group", status: "Tech review", owner: "Marcus T.", hours: 412, updated: "Yesterday" },
  { name: "FinEdge Identity Upgrade", client: "FinEdge UK", status: "Approved", owner: "Leah M.", hours: 198, updated: "Sep 08" },
]

const wbsRows = [
  { module: "Authentication", sub: "Face recognition login", description: "Biometric login with liveness check and fallback password flow", hours: 32, source: "AI matched", custom: true },
  { module: "Identity verification", sub: "Online ID verification", description: "Verify Indian, US, or UK identity documents through an online provider", hours: 44, source: "Custom", custom: true },
  { module: "User management", sub: "Role-based access", description: "Admin, clinician, patient, and support permissions", hours: 28, source: "Standard", custom: false },
  { module: "Notifications", sub: "Email and SMS alerts", description: "Configurable appointment and security notifications", hours: 18, source: "Standard", custom: false },
]

const roles = ["Business Analyst", "Tech Manager", "Sales", "Super Admin"]

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    "AI draft ready": "bg-amber-50 text-amber-700 ring-amber-200",
    "Tech review": "bg-blue-50 text-blue-700 ring-blue-200",
    Approved: "bg-emerald-50 text-emerald-700 ring-emerald-200",
    Draft: "bg-slate-100 text-slate-600 ring-slate-200",
  }
  return <span className={cn("inline-flex rounded-full px-2.5 py-1 text-[11px] font-semibold ring-1", styles[status] ?? styles.Draft)}>{status}</span>
}

function Sidebar({ view, setView, role }: { view: string; setView: (view: string) => void; role: string }) {
  const items = [
    { id: "projects", label: "Projects", icon: LayoutDashboard },
    { id: "intake", label: "Project intake", icon: FileText },
    { id: "wbs", label: "WBS review", icon: Check },
    ...(role === "Tech Manager" || role === "Super Admin" ? [{ id: "library", label: "Module library", icon: Library }] : []),
  ]
  return (
    <aside className="hidden w-[232px] shrink-0 flex-col border-r border-slate-200 bg-slate-950 text-slate-300 lg:flex">
      <div className="flex h-16 items-center gap-3 border-b border-slate-800 px-5">
        <div className="flex size-8 items-center justify-center rounded-lg bg-blue-500 text-sm font-black text-white">HB</div>
        <div><div className="text-sm font-bold text-white">HB Estimation</div><div className="text-[10px] tracking-widest text-slate-500">WORKSPACE</div></div>
      </div>
      <div className="px-3 py-5">
        <div className="mb-2 px-3 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-600">Workspace</div>
        <nav className="space-y-1">{items.map((item) => { const Icon = item.icon; return <button key={item.id} onClick={() => setView(item.id)} className={cn("flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition", view === item.id ? "bg-blue-500/15 font-semibold text-blue-300" : "text-slate-400 hover:bg-slate-900 hover:text-white")}><Icon className="size-4" />{item.label}</button> })}</nav>
      </div>
      <div className="mt-auto border-t border-slate-800 p-3"><button className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-400 hover:bg-slate-900 hover:text-white"><Settings2 className="size-4" />Workspace settings</button></div>
    </aside>
  )
}

function Topbar({ role, setRole }: { role: string; setRole: (role: string) => void }) {
  return <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-5 sm:px-8"><div className="flex items-center gap-3 lg:hidden"><div className="flex size-8 items-center justify-center rounded-lg bg-blue-600 text-xs font-black text-white">HB</div><span className="text-sm font-bold text-slate-900">HB Estimation</span></div><div className="hidden items-center gap-2 text-sm text-slate-500 sm:flex"><span>Workspace</span><span>/</span><span className="font-semibold text-slate-900">Project operations</span></div><div className="flex items-center gap-3"><div className="relative hidden sm:block"><Search className="absolute left-3 top-2.5 size-4 text-slate-400" /><input className="h-9 w-48 rounded-lg border border-slate-200 bg-slate-50 pl-9 pr-3 text-xs outline-none focus:border-blue-400" placeholder="Search projects..." /></div><div className="relative"><select value={role} onChange={(e) => setRole(e.target.value)} className="h-9 appearance-none rounded-lg border border-slate-200 bg-white py-0 pl-3 pr-8 text-xs font-semibold text-slate-700 outline-none"><option disabled>Role preview</option>{roles.map((r) => <option key={r}>{r}</option>)}</select><ChevronDown className="pointer-events-none absolute right-2 top-3 size-3.5 text-slate-400" /></div><div className="flex size-8 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">PN</div></div></header>
}

function ProjectsView({ setView }: { setView: (view: string) => void }) {
  return <div className="space-y-7"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Project operations</p><h1 className="text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">Good morning, Priya.</h1><p className="mt-2 text-sm text-slate-500">Review client scope, turn requirements into WBS, and keep estimates moving.</p></div><Button onClick={() => setView("intake")} className="gap-2 bg-blue-600 shadow-sm hover:bg-blue-700"><Plus className="size-4" />New project</Button></div><div className="grid gap-4 sm:grid-cols-3"><div className="rounded-xl border border-slate-200 bg-white p-5"><div className="mb-4 flex items-center justify-between"><span className="text-xs font-semibold text-slate-500">Active projects</span><BriefcaseBusiness className="size-4 text-blue-500" /></div><div className="text-3xl font-bold text-slate-950">12</div><div className="mt-1 text-xs text-emerald-600">+3 this month</div></div><div className="rounded-xl border border-slate-200 bg-white p-5"><div className="mb-4 flex items-center justify-between"><span className="text-xs font-semibold text-slate-500">Awaiting review</span><Bot className="size-4 text-amber-500" /></div><div className="text-3xl font-bold text-slate-950">4</div><div className="mt-1 text-xs text-slate-500">2 need your attention</div></div><div className="rounded-xl border border-slate-200 bg-white p-5"><div className="mb-4 flex items-center justify-between"><span className="text-xs font-semibold text-slate-500">Estimated hours</span><Sparkles className="size-4 text-indigo-500" /></div><div className="text-3xl font-bold text-slate-950">2,846</div><div className="mt-1 text-xs text-slate-500">Across active work</div></div></div><section className="overflow-hidden rounded-xl border border-slate-200 bg-white"><div className="flex items-center justify-between border-b border-slate-200 px-5 py-4"><div><h2 className="font-semibold text-slate-900">Recent projects</h2><p className="mt-1 text-xs text-slate-500">Your team&apos;s latest estimation activity</p></div><button className="text-xs font-semibold text-blue-600 hover:text-blue-700">View all</button></div><div className="overflow-x-auto"><table className="w-full min-w-[700px] text-left text-sm"><thead className="bg-slate-50 text-[10px] font-bold uppercase tracking-wider text-slate-500"><tr><th className="px-5 py-3">Project</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Owner</th><th className="px-5 py-3">Effort</th><th className="px-5 py-3">Updated</th><th className="px-5 py-3" /></tr></thead><tbody className="divide-y divide-slate-100">{projectRows.map((row) => <tr key={row.name} className="hover:bg-slate-50"><td className="px-5 py-4"><div className="font-semibold text-slate-900">{row.name}</div><div className="mt-1 text-xs text-slate-500">{row.client}</div></td><td className="px-5 py-4"><StatusBadge status={row.status} /></td><td className="px-5 py-4 text-xs text-slate-600">{row.owner}</td><td className="px-5 py-4 font-mono text-xs text-slate-700">{row.hours}h</td><td className="px-5 py-4 text-xs text-slate-500">{row.updated}</td><td className="px-5 py-4"><button className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100 hover:text-slate-700"><MoreHorizontal className="size-4" /></button></td></tr>)}</tbody></table></div></section></div>
}

function IntakeView({ setView }: { setView: (view: string) => void }) {
  const [uploaded, setUploaded] = useState(false)
  return <div className="mx-auto max-w-4xl space-y-7"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">New project</p><h1 className="text-2xl font-bold text-slate-950">Turn client scope into a WBS</h1><p className="mt-2 text-sm text-slate-500">Upload the brief, review AI suggestions, and send a clean estimate to technical review.</p></div><div className="flex items-center gap-2 text-xs font-semibold"><div className="flex items-center gap-2 text-blue-600"><span className="flex size-6 items-center justify-center rounded-full bg-blue-600 text-white">1</span>Project intake</div><div className="h-px w-12 bg-slate-200" /><div className="flex items-center gap-2 text-slate-400"><span className="flex size-6 items-center justify-center rounded-full border border-slate-200">2</span>AI review</div><div className="h-px w-12 bg-slate-200" /><div className="flex items-center gap-2 text-slate-400"><span className="flex size-6 items-center justify-center rounded-full border border-slate-200">3</span>Tech review</div></div><div className="grid gap-5 lg:grid-cols-[1fr_1.1fr]"><section className="rounded-xl border border-slate-200 bg-white p-5"><h2 className="font-semibold text-slate-900">Project details</h2><div className="mt-5 space-y-4"><label className="block"><span className="mb-1.5 block text-xs font-semibold text-slate-600">Project name</span><input className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-blue-400" defaultValue="MediTrust Patient Portal" /></label><label className="block"><span className="mb-1.5 block text-xs font-semibold text-slate-600">Client</span><input className="h-10 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none focus:border-blue-400" defaultValue="MediTrust Health" /></label><label className="block"><span className="mb-1.5 block text-xs font-semibold text-slate-600">Client brief / email</span><textarea className="min-h-32 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm leading-6 outline-none focus:border-blue-400" defaultValue="We need a secure patient portal with face recognition login, online identity verification for Indian, US, and UK users, appointment notifications, and role-based access for clinicians and support staff." /></label></div></section><section className="rounded-xl border border-slate-200 bg-white p-5"><div className="flex items-start justify-between"><div><h2 className="font-semibold text-slate-900">Client documents</h2><p className="mt-1 text-xs text-slate-500">PDF, DOCX, or TXT up to 25 MB</p></div><LockKeyhole className="size-4 text-slate-400" /></div><button onClick={() => setUploaded(true)} className="mt-5 flex min-h-44 w-full flex-col items-center justify-center rounded-xl border border-dashed border-blue-300 bg-blue-50/50 px-5 text-center transition hover:bg-blue-50"><UploadCloud className="size-8 text-blue-500" /><span className="mt-3 text-sm font-semibold text-slate-800">{uploaded ? "client-brief.txt uploaded" : "Drop a file here or browse"}</span><span className="mt-1 text-xs text-slate-500">Private to this project</span></button>{uploaded && <div className="mt-3 flex items-center gap-3 rounded-lg bg-emerald-50 p-3 text-xs text-emerald-700"><Check className="size-4" />Text extracted successfully <span className="ml-auto font-mono">2.4 KB</span></div>}<Button onClick={() => setView("wbs")} className="mt-5 w-full gap-2 bg-blue-600 hover:bg-blue-700"><Sparkles className="size-4" />Generate AI draft WBS<ArrowRight className="ml-auto size-4" /></Button><p className="mt-3 text-center text-[11px] text-slate-400">AI output is always reviewed before saving.</p></section></div></div>
}

function WbsView() {
  const [rows, setRows] = useState(wbsRows)
  const total = rows.reduce((sum, row) => sum + row.hours, 0)
  return <div className="space-y-6"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><div className="mb-2 flex items-center gap-2"><span className="text-xs font-bold uppercase tracking-[0.18em] text-blue-600">AI review</span><StatusBadge status="AI draft ready" /></div><h1 className="text-2xl font-bold text-slate-950">MediTrust Patient Portal</h1><p className="mt-2 text-sm text-slate-500">Review detected modules and assumptions before sending to technical review.</p></div><div className="flex gap-2"><Button variant="outline" className="gap-2"><FileText className="size-4" />View source</Button><Button className="gap-2 bg-blue-600 hover:bg-blue-700"><Check className="size-4" />Approve draft</Button></div></div><div className="grid gap-4 sm:grid-cols-4"><div className="rounded-lg border border-slate-200 bg-white p-4"><div className="text-xs text-slate-500">WBS rows</div><div className="mt-1 text-xl font-bold text-slate-900">{rows.length}</div></div><div className="rounded-lg border border-slate-200 bg-white p-4"><div className="text-xs text-slate-500">Total effort</div><div className="mt-1 font-mono text-xl font-bold text-slate-900">{total}h</div></div><div className="rounded-lg border border-amber-200 bg-amber-50 p-4"><div className="text-xs text-amber-700">Custom requirements</div><div className="mt-1 text-xl font-bold text-amber-800">{rows.filter((r) => r.custom).length}</div></div><div className="rounded-lg border border-slate-200 bg-white p-4"><div className="text-xs text-slate-500">AI confidence</div><div className="mt-1 text-xl font-bold text-emerald-600">92%</div></div></div><div className="overflow-hidden rounded-xl border border-slate-200 bg-white"><div className="flex items-center justify-between border-b border-slate-200 px-5 py-4"><div><h2 className="font-semibold text-slate-900">Work breakdown structure</h2><p className="mt-1 text-xs text-slate-500">All rows are editable before approval. Tech Manager can adjust final effort.</p></div><Button variant="outline" size="sm" className="gap-2"><Plus className="size-3.5" />Add row</Button></div><div className="overflow-x-auto"><table className="w-full min-w-[900px] text-left text-sm"><thead className="bg-slate-50 text-[10px] font-bold uppercase tracking-wider text-slate-500"><tr><th className="w-44 px-5 py-3">Module</th><th className="w-48 px-5 py-3">Sub module</th><th className="px-5 py-3">Description</th><th className="w-24 px-5 py-3">Efforts</th><th className="w-28 px-5 py-3">Source</th><th className="w-10 px-5 py-3" /></tr></thead><tbody className="divide-y divide-slate-100">{rows.map((row, index) => <tr key={row.sub} className={cn("align-top hover:bg-slate-50", row.custom && "bg-amber-50/30")}><td className="px-5 py-4 font-semibold text-slate-900">{row.module}</td><td className="px-5 py-4 font-medium text-slate-700">{row.sub}</td><td className="px-5 py-4 text-xs leading-5 text-slate-600">{row.description}{row.custom && <div className="mt-2 flex items-center gap-1 text-[11px] font-semibold text-amber-700"><CircleAlert className="size-3" />Non-standard requirement</div>}</td><td className="px-5 py-4"><input type="number" value={row.hours} onChange={(e) => setRows(rows.map((item, i) => i === index ? { ...item, hours: Number(e.target.value) } : item))} className="h-8 w-16 rounded border border-slate-200 px-2 font-mono text-xs outline-none focus:border-blue-400" /></td><td className="px-5 py-4"><span className={cn("rounded-md px-1.5 py-1 text-[10px] font-semibold", row.custom ? "bg-amber-100 text-amber-700" : "bg-slate-100 text-slate-600")}>{row.source}</span></td><td className="px-5 py-4"><button className="text-slate-400 hover:text-slate-700"><MoreHorizontal className="size-4" /></button></td></tr>)}</tbody></table></div></div><div className="rounded-xl border border-indigo-100 bg-indigo-50/60 p-5"><div className="flex gap-3"><Bot className="mt-0.5 size-5 shrink-0 text-indigo-600" /><div><h3 className="text-sm font-semibold text-indigo-950">AI notes and assumptions</h3><p className="mt-1 text-xs leading-5 text-indigo-900/70">The client references face recognition and online ID verification for multiple regions. These were classified as custom requirements because the standard library does not include a region-aware identity provider integration. All project roles can see this note.</p></div></div></div></div>
}

function LibraryView() {
  const [query, setQuery] = useState("")
  const filtered = useMemo(() => MODULES.filter((m) => `${m.name} ${m.category}`.toLowerCase().includes(query.toLowerCase())).slice(0, 8), [query])
  return <div className="space-y-6"><div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-blue-600">Governance</p><h1 className="text-2xl font-bold text-slate-950">Standard module library</h1><p className="mt-2 text-sm text-slate-500">Manage the reusable building blocks and default effort values.</p></div><Button className="gap-2 bg-blue-600 hover:bg-blue-700"><Plus className="size-4" />Add module</Button></div><div className="rounded-xl border border-slate-200 bg-white"><div className="flex items-center gap-3 border-b border-slate-200 p-4"><Search className="size-4 text-slate-400" /><input value={query} onChange={(e) => setQuery(e.target.value)} className="w-full text-sm outline-none" placeholder="Search modules or categories..." /><span className="text-xs text-slate-400">150+ modules</span></div><div className="divide-y divide-slate-100">{filtered.map((m) => <div key={m.id} className="flex items-center gap-4 px-5 py-4"><div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600"><Library className="size-4" /></div><div className="min-w-0 flex-1"><div className="font-semibold text-slate-900">{m.name}</div><div className="mt-1 text-xs text-slate-500">{m.category} · {m.description}</div></div><span className="font-mono text-xs text-slate-700">{m.baseHours}h</span><button className="text-slate-400"><MoreHorizontal className="size-4" /></button></div>)}</div></div></div>
}

export function RoleWorkspace() {
  const [role, setRole] = useState("Business Analyst")
  const [view, setView] = useState("projects")
  return <div className="min-h-screen bg-slate-50 text-slate-900"><div className="flex min-h-screen"><Sidebar view={view} setView={setView} role={role} /><div className="min-w-0 flex-1"><Topbar role={role} setRole={setRole} /><main className="mx-auto max-w-[1440px] px-5 py-7 sm:px-8">{view === "projects" && <ProjectsView setView={setView} />}{view === "intake" && <IntakeView setView={setView} />}{view === "wbs" && <WbsView />}{view === "library" && <LibraryView />}</main></div></div></div>
}
