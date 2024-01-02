import { cyrb128, sfc32 } from './randomizer'

interface Input {
  type?: 'integer' | 'float'
  seed?: string
  min?: number
  max?: number
}

export default function saikoro({ type = 'float', seed, min, max }: Input = {}) {
  const isRange = min !== undefined && max !== undefined
  if (!isRange) return basic(seed)
  return type === 'float' ? range(min, max, seed) : rangeInt(min, max, seed)
}

function basic(seed?: string) {
  if (seed === undefined) return () => Math.random()
  return sfc32(cyrb128(seed))
}

function range(min: number, max: number, seed?: string) {
  const random = basic(seed)
  return () => random() * (max - min) + min
}

function rangeInt(min: number, max: number, seed?: string) {
  const random = basic(seed)
  return () => Math.floor(random() * (max - min + 1)) + min
}

export { saikoro }
