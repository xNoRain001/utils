import each from "./each"

const parseUrl = (url = location.href) => {
  const res = {
    protocol: '',
    hostname: '',
    pathname: '/',
    rawSearch: '',
    hash: ''
  }
  const regexps = {
    protocol: /(.*?)\/\//,
    hostname: /([^/]*)\/?/,
    pathname: /([^?#]*)/,
    rawSearch: /\?([^#]*)#?/,
    hash: /(.*)/
  }

  each(res, (_, key) => {
    url = url.replace(regexps[key], (_, $1) => {
      res[key] += $1

      return ''
    })
  })

  const search = {}

  res.rawSearch.replace(/(.*?)=([^&]*)&?/g, (_, $1, $2) => {
    search[$1] = $2
  })
  res.search = search

  return res
}

export default parseUrl
