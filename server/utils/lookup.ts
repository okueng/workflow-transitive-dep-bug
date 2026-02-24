import { CATEGORIES, type CategoryId } from '../../shared/constants'

export function lookupCategory(id: CategoryId): string {
  return CATEGORIES[id]
}