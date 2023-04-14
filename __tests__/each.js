const x = require('../dist/index.min.js')

const input = [
  [1, 2, true, 'foo', Symbol('')],
  {
    foo: 'foo',
    bar: 'bar',
    [Symbol()]: 'symbol',
    baz: () => {},
    a: new Date(),
    b: /\d+/
  }

]

test('each', () => {
  for (let i = 0, l = input.length; i < l; i++) {
    const values = []
    const keys = []
    const _input = input[i]

    x.each(_input, (value, key) => {
      values.push(value)
      keys.push(key)
    })

    if (x.isArray(_input)) {
      expect(_input).toStrictEqual(values)
    } else {
      const res = {}

      for (let i = 0, l = keys.length; i < l; i++) {
        res[keys[i]] = values[i]
      }

      expect(_input).toStrictEqual(res)
    }
  }
})
