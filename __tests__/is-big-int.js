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
  'true': BigInt(1),
  'false': () => {},
  'false': {},
  'false': [],
  'false': NaN
}

test('is big int', () => {
  for (const key in examples) {
    expect(String(x.isBigInt(examples[key]))).toBe(key)
  }
})
