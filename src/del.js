import each from './each'
import isString from './is-string'

const del = (target, keys) => {
  if (isString(keys)) {
    delete target[keys]
  } else {
    each(keys, key => delete target[key])
  }
}

export default del
