import { randRangeInt } from './randomizer'

interface Options {
  seed?: string
  min?: number
  max?: number
}

export function saikoroArray<T>(arr: Array<T>, { seed, min, max }: Options = {}) {
  const isRange = min !== undefined && max !== undefined
  const random = isRange ? randRangeInt(min, max, seed) : randRangeInt(0, arr.length - 1, seed)
  return () => arr[random()]
}
