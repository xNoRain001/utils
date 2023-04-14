const x = require('../dist/index.min.js')

const examples = {
  'false': '',
  'false': 'foo',
  'false': 10,
  'false': 10.5,
  'true': true,
  'true': false,
  'false': null,
  'false': undefined,
  'false': Symbol(''),
  'false': BigInt(1),
  'false': () => {},
  'false': {},
  'false': [],
  'false': NaN
}

test('is boolean', () => {
  for (const key in examples) {
    expect(String(x.isBoolean(examples[key]))).toBe(key)
  }
})
