//求集合的交集
function getSetIntersection(a, b) {
  return new Set([...a].filter((i) => b.has(i)))
}
console.log(getSetIntersection(new Set([1, 2, 3, 4]), new Set([2, 4, 6, 8])))

//求数组的交集
function getArrayIntersection(a, b) {
  return a.filter((i) => b.indexOf(i) > -1)
}
console.log(getArrayIntersection([1, 2, 3, 4], [2, 4, 6, 8]))
