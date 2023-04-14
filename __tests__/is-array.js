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
  'false': {},
  'true': [],
  'false': NaN
}

test('is array', () => {
  for (const key in examples) {
    expect(String(x.isArray(examples[key]))).toBe(key)
  }
})
