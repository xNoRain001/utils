const x = require('../dist/index.min.js')

const examples = {
  'string': '',
  'string': 'foo',
  'number': 10,
  'number': 10.5,
  'boolean': true,
  'boolean': false,
  'object': null,
  'undefined': undefined,
  'symbol': Symbol(''),
  'bigint': BigInt(1),
  'function': () => {},
  'object': {},
  'array': [],
  'date': new Date(),
  'regexp': /foo/,
  'regexp': new RegExp(),
  'number': NaN
}

test('get type', () => {
  for (const key in examples) {
    expect(x.getType(examples[key])).toBe(key)
  }
})
