const x = require('../dist/index.min.js')

const examples = {
  'http://www.foo.com': {
    protocol: 'http:',
    hostname: 'www.foo.com',
    pathname: '/',
    rawSearch: '',
    search: {},
    hash: ''
  },
  'https://www.foo.com': {
    protocol: 'https:',
    hostname: 'www.foo.com',
    pathname: '/',
    rawSearch: '',
    search: {},
    hash: ''
  },
  'http://www.foo.com/bar?a=1#index': {
    protocol: 'http:',
    hostname: 'www.foo.com',
    pathname: '/bar',
    rawSearch: 'a=1',
    search: { a: "1" },
    hash: 'index'
  }
}

test('parse url', () => {
  x.each(examples, (value, key) => {
    expect(x.parseUrl(key)).toStrictEqual(value)
  })
})
