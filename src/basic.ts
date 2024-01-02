import { rand, randRange, randRangeInt } from './randomizer'

interface Options {
  type?: 'integer' | 'float'
  seed?: string
  min?: number
  max?: number
}

export function saikoro({ type = 'float', seed, min, max }: Options = {}) {
  const isRange = min !== undefined && max !== undefined
  if (!isRange) return rand(seed)
  return type === 'float' ? randRange(min, max, seed) : randRangeInt(min, max, seed)
}
