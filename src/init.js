import del from './del'
import keys from './keys'
import each from './each'
import last from './last'
import isNull from './is-null'
import getType from './get-type'
import isArray from './is-array'
import isObject from './is-object'
import isNumber from './is-number'
import isString from './is-string'
import isBigInt from './is-bigint'
import isSymbol from './is-symbol'
import parseUrl from './parse-url'
import isBoolean from './is-boolean'
import isFunction from './is-function'
import isUndefined from './is-undefined'
import isArrayLike from './is-array-like'
import isPlainObject from './is-plain-object'

const methods = {
  del,
  keys,
  each,
  last,
  isNull,
  isArray,
  getType,
  isObject,
  isNumber,
  isString,
  isBigInt,
  isSymbol,
  parseUrl,
  isBoolean,
  isFunction,
  isArrayLike,
  isUndefined,
  isPlainObject
}

const init = x => {
  const keys = Object.keys(methods)

  for (let i = 0, l = keys.length; i < l; i++) {
    const method = keys[i]
    x[method] = methods[method]
  }
}

export default init
