const x = require('../dist/index.min.js')

const input = [
  {
    source: {
      foo: 'foo',
      bar: 'bar'
    },
    deletedKeys: ['foo']
  },
  {
    source: {
      foo: 'foo',
      bar: 'bar'
    },
    deletedKeys: ['foo', 'bar']
  }
]

const output = [
  { bar: 'bar' },
  {}
]

test('del', () => {
  x.each(input, ({ source, deletedKeys }, index) => {
    x.del(source, deletedKeys)
    expect(source).toStrictEqual(output[index])
  })
})
