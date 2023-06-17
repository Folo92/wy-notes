const removeKey = (obj, keyName) => {
  return JSON.parse(
    JSON.stringify(obj, (key, value) => {
      if (key === keyName) return undefined
      return value
    })
  )
}

module.exports = removeKey
