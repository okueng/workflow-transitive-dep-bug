export const LABELS = {
    x: 'X-ray',
    y: 'Yankee',
    z: 'Zulu',
  } as const
  
  export type LabelKey = keyof typeof LABELS