const keys = target => {
  return Object.keys(target).concat(Object.getOwnPropertySymbols(target))
}

export default keys
