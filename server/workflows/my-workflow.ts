import { CATEGORIES } from '../../shared/constants'

export async function myWorkflow() {
  "use workflow"
  const result = await listCategories()
  return result
}

async function listCategories(): Promise<string[]> {
  "use step"
  return Object.values(CATEGORIES)
}