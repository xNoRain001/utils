const { toString } = Object.prototype
const isPlainObject = v => toString.call(v).slice(8, -1) === 'Object'

export default isPlainObject
