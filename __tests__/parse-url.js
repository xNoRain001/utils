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
  'http://www.foo.com/': {
    protocol: 'http:',
    hostname: 'www.foo.com',
    pathname: '/',
    rawSearch: '',
    search: {},
    hash: ''
  },
  'https://www.foo.com/': {
    protocol: 'https:',
    hostname: 'www.foo.com',
    pathname: '/',
    rawSearch: '',
    search: {},
    hash: ''
  },
  'https://www.foo.com/?': {
    protocol: 'https:',
    hostname: 'www.foo.com',
    pathname: '/',
    rawSearch: '',
    search: {},
    hash: ''
  },
  // 'https://www.foo.com/?debug': {
  //   protocol: 'https:',
  //   hostname: 'www.foo.com',
  //   pathname: '/',
  //   rawSearch: 'debug',
  //   search: { debug: '' },
  //   hash: ''
  // },
  // 'https://www.foo.com/?debug&dev': {
  //   protocol: 'https:',
  //   hostname: 'www.foo.com',
  //   pathname: '/',
  //   rawSearch: 'debug&dev',
  //   search: { debug: '', dev: '' },
  //   hash: ''
  // },
  'http://www.foo.com/bar?a=1': {
    protocol: 'http:',
    hostname: 'www.foo.com',
    pathname: '/bar',
    rawSearch: 'a=1',
    search: { a: '1' },
    hash: ''
  },
  'http://www.foo.com/bar?a=1#index': {
    protocol: 'http:',
    hostname: 'www.foo.com',
    pathname: '/bar',
    rawSearch: 'a=1',
    search: { a: '1' },
    hash: 'index'
  },
  'http://www.foo.com/bar?a=1&b=2#index': {
    protocol: 'http:',
    hostname: 'www.foo.com',
    pathname: '/bar',
    rawSearch: 'a=1&b=2',
    search: { a: '1', b: '2' },
    hash: 'index'
  }
}

test('parse url', () => {
  x.each(examples, (value, key) => {
    expect(x.parseUrl(key)).toStrictEqual(value)
  })
})
