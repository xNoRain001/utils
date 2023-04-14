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
  'true': () => {},
  'false': {},
  'false': [],
  'false': NaN
}

test('is function', () => {
  for (const key in examples) {
    expect(String(x.isFunction(examples[key]))).toBe(key)
  }
})
