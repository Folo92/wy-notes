/**
 * @param {string} s
 * @return {string[]}
 */
var permutation = function (s) {
  let res = new Set()
  let vis = []
  let dfs = (t) => {
    if (t.length === s.length) {
      return res.add(t)
    }
    for (let i = 0; i < s.length; i++) {
      if (vis[i]) continue
      vis[i] = true
      dfs(t + s[i])
      vis[i] = false
    }
  }
  dfs("")
  return [...res]
}

const s = "abcd"
console.log(permutation(s))
