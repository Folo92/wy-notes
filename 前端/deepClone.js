const deepClone = (obj) => {
  const arr = []
  for (let i = 0; i < 1000; i++) {
    arr.push(JSON.parse(JSON.stringify(obj)))
  }
  return arr
}

const { testLog } = require("./testLog.js")
const obj = {
  a: "asdfgghjks1w",
  b: "2023-02-05 12:15:25",
  c: null,
  d: "asdfgghjks1w",
  e: "asdfgghjks1w",
  f: "2023-02-05 12:15:25",
}

testLog(deepClone, [obj])
