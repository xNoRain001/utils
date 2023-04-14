import keys from './keys'
import isArray from './is-array'
import isArrayLike from './is-array-like'
import isPlainObject from './is-plain-object'

const each = (target, cb) => {
  if (isArray(target) || isArrayLike(target)) {
    for (let i = 0, l = target.length; i < l; i++) {
      if (cb.call(target, target[i], i) === false) {
        break
      }
    }
  } else if (isPlainObject(target)) {
    const _keys = keys(target)

    for (let i = 0, l = _keys.length; i < l; i++) {
      const key = _keys[i]

      if (cb.call(target, target[key], key) === false) {
        break
      }
    }
  }

  return target
}

export default each
