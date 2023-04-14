const x = require('../dist/index.min.js')

const examples = {
  'false': '',
  'false': 'foo',
  'true': 10,
  'true': 10.5,
  'false': true,
  'false': false,
  'false': null,
  'false': undefined,
  'false': Symbol(''),
  'false': BigInt(1),
  'false': () => {},
  'false': {},
  'false': [],
  'true': NaN
}

test('is number', () => {
  for (const key in examples) {
    expect(String(x.isNumber(examples[key]))).toBe(key)
  }
})
