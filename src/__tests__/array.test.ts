import { describe, expect, test } from 'vitest'
import { saikoroArray } from '..'

const chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

describe('Saikoro Array', () => {
  test('array randomize, 1000 times', async () => {
    const random = saikoroArray(chars)
    for (let i = 0; i < 1000; i++) {
      expect(chars.includes(random())).toBeTruthy()
    }
  })
})
