const x = require('../dist/index.min.js')

const symbol = Symbol()

const input = [
  {},
  { foo: 'foo' },
  { foo: 'foo', bar: 'bar' },
  { [symbol]: 'foo' },
  { foo: 'foo', [symbol]: 'bar' }
]

const output = [
  [],
  ['foo'],
  ['foo', 'bar'],
  [symbol],
  ['foo', symbol]
]

test('keys', () => {
  for (let i = 0, l = input.length; i < l; i++) {
    expect(x.keys(input[i])).toStrictEqual(output[i])
  }
})
