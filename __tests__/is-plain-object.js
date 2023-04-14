const x = require('../dist/index.min.js')

const examples = {
  'false': '',
  'false': 'foo',
  'false': 10,
  'false': 10.5,
  'false': true,
  'false': false,
  'false': null,
  'false': undefined,
  'false': Symbol(''),
  'false': BigInt(1),
  'false': () => {},
  'true': {},
  'false': [],
  'false': NaN
}

test('is plain object', () => {
  for (const key in examples) {
    expect(String(x.isPlainObject(examples[key]))).toBe(key)
  }
})
