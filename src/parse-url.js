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
    protocol: /^(.*?)\/\//,
    hostname: /^([^/]*)\/?/,
    pathname: /^([^?#]*)/,
    rawSearch: /^\?([^#]*)#?/,
    hash: /(.*)/
  }

  each(res, (_, key) => {
    url = url.replace(regexps[key], (_, $1) => {
      res[key] += $1

      return ''
    })
  })

  const search = {}
  const { rawSearch } = res

  res.search = search

  if (rawSearch) {
    // TODO: http://example.com/?bebug
    rawSearch.replace(/([^=]+?)=([^&]+?)&?/g, (_, $1, $2) => {
      search[$1] = $2 || ''
    })
  }

  return res
}

export default parseUrl
