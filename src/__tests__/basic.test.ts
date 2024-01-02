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

  test('with seed "ichiql"', async () => {
    const random = saikoro({ seed: 'ichiql' })
    expect(random()).toBe(0.5064641993958503)
    expect(random()).toBe(0.808414347935468)
    expect(random()).toBe(0.40375220961868763)
    expect(random()).toBe(0.14509637863375247)
    expect(random()).toBe(0.4145654779858887)
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
