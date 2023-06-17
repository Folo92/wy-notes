// 给你两个字符串：ransomNote 和 magazine ，判断 ransomNote 能不能由 magazine 里面的字符构成。
// 如果可以，返回 true ；否则返回 false 。
// magazine 中的每个字符只能在 ransomNote 中使用一次。

/**
 * 借助哈希表
 * Accepted
 * 128/128 cases passed (80 ms)
 * Your runtime beats 55.88 % of javascript submissions
 * Your memory usage beats 64.71 % of javascript submissions (43.6 MB)
 */
var canConstruct = function (ransomNote, magazine) {
  const map = new Map()
  for (let c of magazine) {
    map.set(c, (map.get(c) || 0) + 1)
  }
  for (let c of ransomNote) {
    if (!map.has(c)) return false
    map.get(c) > 1 ? map.set(c, map.get(c) - 1) : map.delete(c)
  }
  return true
}

/**
 * 使用数组存储26个字符：ransomNote 和 magazine 由小写英文字母组成
 * Accepted
 * 128/128 cases passed (64 ms)
 * Your runtime beats 94.05 % of javascript submissions
 * Your memory usage beats 59.17 % of javascript submissions (43.8 MB)
 */
var canConstruct2 = function (ransomNote, magazine) {
  let cnt = new Array(26).fill(0)
  for (let c of magazine) {
    cnt[c.charCodeAt() - "a".charCodeAt()]++
  }
  for (let c of ransomNote) {
    cnt[c.charCodeAt() - "a".charCodeAt()]--
    if (cnt[c.charCodeAt() - "a".charCodeAt()] < 0) return false
  }
  return true
}

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct3 = function (ransomNote, magazine) {
  const arr = ransomNote.split("")
  let len
  for (let item of arr) {
    len = magazine.length
    magazine = magazine.replace(item, "")
    if (magazine.length == len) return false
  }
  return true
}

const { testLog } = require("../testLog.js")

const arr = [{ ransomNote: "aab", magazine: "aaabda" }]
arr.forEach(({ ransomNote, magazine }) => {
  testLog(canConstruct, [ransomNote, magazine])
})
arr.forEach(({ ransomNote, magazine }) => {
  testLog(canConstruct2, [ransomNote, magazine])
})
arr.forEach(({ ransomNote, magazine }) => {
  testLog(canConstruct3, [ransomNote, magazine])
})
