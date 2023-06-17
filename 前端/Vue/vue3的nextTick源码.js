// http://www.hunt007.com/wiki/99151.html

const resolvedPromise = /*#__PURE__*/ Promise.resolve()
let currentFlushPromise = null
let currentPreFlushParentJob = null
const RECURSION_LIMIT = 100
function nextTick(fn) {
  const p = currentFlushPromise || resolvedPromise
  return fn ? p.then(this ? fn.bind(this) : fn) : p
}
