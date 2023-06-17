// 有⼀个教室，有⼀排共N个座位，索引分别是 [0..N-1]	，考⽣会陆续进⼊教室考试。 你作为考官，要安排考⽣们的座位。
// 满⾜：每当⼀个学⽣进⼊时，你需要最⼤化他和最近其他⼈的距离；如果有多个这样的座位，安排到他到索引最⼩的那个座位。
// ⽐⽅说教室有5个座位，分别是 [0..4]：
// 第⼀名考⽣进⼊时坐在任何位置都⾏，但是要给他安排索引最⼩的位置，也就是返回位置0。
// 第⼆名学⽣进⼊时，要和旁边的⼈距离最远，也就是返回位置4。
// 第三名学⽣进⼊时，要和旁边的⼈距离最远，应该做到中间，也就是座位2。
// 如果再进⼀名学⽣，他可以坐在座位1或者3，取较⼩的索引1。 以此类推。

// var getSeat = function (n, stuIndex) {
//   if (stuIndex == 0) return 0
//   let seat = [0]
//   for (let i = 1; i <= stuIndex; i++) {
//     let temp = []
//     let max = 0
//     for (let j = 0; j < n; j++) {
//       if (seat.indexOf(j) == -1) {
//         seat.forEach((item) => {
//           temp.push({ index: j, val: Math.abs(j - item) })
//         })
//         temp.forEach((item) => {
//           if (item.val > max) max = item.val
//         })
//       }
//     }
//     temp.forEach((item) => {
//       if (item.val == max) {
//         seat.push(item.index)
//       }
//     })
//   }
//   return seat
// }

// 0 1 2 3 4 5 6 7 8 9 10 11
var getSeat = function (n, stuNum) {
  if (stuNum == 1) return 0
  if (stuNum == 2) return n - 1
  let seats = [0, n - 1]
  for (let i = 3; i < stuNum; i++) {
    let sortedSeats = seats.concat().sort((a, b) => a - b)
    let temp = []
    let maxGap = 0
    for (let j = 0; j < sortedSeats.length - 1; j++) {
      const gap = sortedSeats[j + 1] - sortedSeats[j]
      temp.push({ preSeat: sortedSeats[j], gap: gap % 2 == 0 ? gap : gap - 1 })
    }
    temp.forEach((item) => {
      if (item.gap > maxGap) maxGap = item.gap
    })
    if (maxGap <= 2) {
      for (let k = 0; k < n; k++) {
        if (seats.indexOf(k) == -1) seats.push(k)
      }
    } else {
      temp.forEach((item) => {
        const newSeat = item.preSeat + item.gap / 2
        if (item.gap == maxGap) seats.push(newSeat)
      })
    }
  }
  return seats
}

const n = 12
const stu = 12
console.log(getSeat(n, stu))
