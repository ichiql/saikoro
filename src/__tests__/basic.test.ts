import { describe, expect, test } from 'vitest'
import saikoro from '..'

function checkValue(value: number, min: number = 0, max: number = 1) {
  expect(value).toBeGreaterThanOrEqual(min)
  if (min < max) expect(value).toBeLessThanOrEqual(max)
}

describe('Saikoro Basic', () => {
  test('basic', async () => {
    const random = saikoro()
    checkValue(random())
    checkValue(random())
    checkValue(random())
    checkValue(random())
    checkValue(random())
  })

  test('with seed "nantokaworks"', async () => {
    const random = saikoro({ seed: 'nantokaworks' })
    expect(random()).toBe(0.14878266444429755)
    expect(random()).toBe(0.6606966687832028)
    expect(random()).toBe(0.7268656345549971)
    expect(random()).toBe(0.9279048922471702)
    expect(random()).toBe(0.7912824773229659)
  })

  test('with range 1 ~ 10, 1000 times', async () => {
    const min = 1
    const max = 10
    const random = saikoro({ min, max })

    for (let i = 0; i < 1000; i++) {
      checkValue(random(), min, max)
    }
  })

  test('with range(int) 1 ~ 10, 1000 times', async () => {
    const min = 1
    const max = 10
    const random = saikoro({ type: 'integer', min, max })

    for (let i = 0; i < 1000; i++) {
      checkValue(random(), min, max)
    }
  })
})
