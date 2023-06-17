function arrayFrom(length, callback = (_, i) => i) {
  return Array.from({ length: length }, callback)
}

module.exports = arrayFrom
