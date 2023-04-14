const x = require('../dist/index.min.js')

const examples = {
  'true': '',
  'true': 'foo',
  'false': 10,
  'false': 10.5,
  'false': true,
  'false': false,
  'false': null,
  'false': undefined,
  'false': Symbol(''),
  'false': BigInt(1),
  'false': () => {},
  'false': {},
  'false': [],
  'false': NaN
}

test('is string', () => {
  for (const key in examples) {
    expect(String(x.isString(examples[key]))).toBe(key)
  }
})
