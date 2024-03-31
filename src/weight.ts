import { randRangeInt } from './randomizer'

interface Options {
  seed?: string
}

export function saikoroWeight<T>(arr: Array<{ value: T; weight: number }>, { seed }: Options = {}) {
  const max = arr.reduce((acc, { weight }) => acc + weight, 0)
  const random = randRangeInt(0, max, seed)
  return () => {
    if (arr.length === 0) return undefined
    const r = random()
    let sum = 0
    for (const { value, weight } of arr) {
      sum += weight
      if (r >= sum) {
        return value
      }
    }
    return undefined
  }
}
