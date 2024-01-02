# Saikoro

```shell
pnpm add saikoro
npm install saikoro
yarn add saikoro
```

seed 対応ランダマイザー

seed supported randomizer

```js
import saikoro  from 'saikoro'

const random = saikoro()
console.log(random())

~~~

const value = saikoro()()

~~~

const randomWithSeed= saikoro({ seed: 'seedForRandom' })
console.log(random())

~~~

const randomWithRange = saikoro({ min: 1, max 10 })
console.log(randomWithRange())

~~~

const randomIntWithRange = saikoro({ type: 'interger', min: 1, max 10 })
console.log(randomIntWithRange())


```
