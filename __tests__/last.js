const x = require('../dist/index.min.js')

const input = [
  [1, 2, 3],
  ['foo', 'bar', true]
]

const output = [
  3,
  true
]

test('last', () => {
  x.each(input, (value, index) => {
    expect(x.last(value)).toBe(output[index])
  })
})
