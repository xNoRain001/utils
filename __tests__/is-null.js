const x = require('../dist/index.min.js')

const examples = {
  'false': '',
  'false': 'foo',
  'false': 10,
  'false': 10.5,
  'false': true,
  'false': false,
  'true': null,
  'false': undefined,
  'false': Symbol(''),
  'false': BigInt(1),
  'false': () => {},
  'false': {},
  'false': [],
  'false': NaN
}

test('is null', () => {
  for (const key in examples) {
    expect(String(x.isNull(examples[key]))).toBe(key)
  }
})
