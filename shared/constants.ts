import { LABELS } from './helpers'

export const CATEGORIES = {
  A: LABELS.x,
  B: LABELS.y,
  C: LABELS.z,
} as const

export type CategoryId = keyof typeof CATEGORIES