import { MODULES as RAW_MODULES, PLATFORM_OPTIONS as RAW_PLATFORM_OPTIONS } from "./modules-data"
import type { EstModule, PlatformOption } from "./types"

export const MODULES = RAW_MODULES as unknown as EstModule[]
export const PLATFORM_OPTIONS = RAW_PLATFORM_OPTIONS as unknown as Record<string, PlatformOption>

/** Platforms exposed as a "primary platform" choice in the UI. */
export const PRIMARY_PLATFORMS = ["web", "backend", "mobile", "ios", "android", "flutter"] as const

export const CATEGORIES = ["All", ...Array.from(new Set(MODULES.map((m) => m.category)))]
