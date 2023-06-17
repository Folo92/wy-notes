// 如果没有createBy属性，则去掉id和index属性
let arr = [
  { createBy: 1234, id: 1, index: 1, test1: "测试1", test2: "测试2" },
  { createBy: 1234, id: 1, index: 1, test1: "测试1", test2: "测试2" },
  { id: 1, index: 1, test1: "测试1", test2: "测试2" },
  { id: 1, index: 1, test1: "测试1", test2: "测试2" },
]

arr = arr.map(({ createBy, id, index, ...rest }) =>
  createBy !== undefined ? { createBy, id, index, ...rest } : { ...rest }
)

console.log(arr)
