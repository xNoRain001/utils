
import keys from './keys'
import each from './each'
import isNull from './is-null'
import getType from './get-type'
import isArray from './is-array'
import isObject from './is-object'
import isNumber from './is-number'
import isString from './is-string'
import isBigInt from './is-bigint'
import isSymbol from './is-symbol'
import isBoolean from './is-boolean'
import isFunction from './is-function'
import isUndefined from './is-undefined'
import isArrayLike from './is-array-like'
import isPlainObject from './is-plain-object'

const methods = {
  keys,
  each,
  isNull,
  isArray,
  getType,
  isObject,
  isNumber,
  isString,
  isBigInt,
  isSymbol,
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
