# 1. 冒泡排序

冒泡排序：比较相邻的元素，如果第一个比第二个大，就交换它们两个，直到没有需要交换为止。即排序完成。

时间复杂度：平均 O(n²)   最好 O(n)   最坏 O(n²)

空间复杂度： O(1)

稳定性：稳定

![image](https://camo.githubusercontent.com/6ed9aac334bc78d74ce9cb253d1f348df3ce1b459ab6290d7ff890b2cd030e42/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f333130303733362d643338323831613930663035616666312e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970)

```js
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

function bubbleSort(arr) {
  let len = arr.length
  if (len >= 1) {
    for (let i = 0; i < len - 1; i++) {
      for (let j = 0; j < len - 1 - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j + 1]
          arr[j + 1] = arr[j]
          arr[j] = temp
        }
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr))
```

### 冒泡排序优化版(结果不正确，待修改)

```js
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

function bubbleSort(arr) {
  let len = arr.length
  let lastExchangeIndex = 0
  //无序数列的边界，每次比较只需要比到这里为止
  let sortBorder = len - 1
  if (len >= 1) {
    for (let i = 0; i < len; i++) {
      //有序标记，每一轮的初始是true
      let isSorted = true
      for (let j = 0; j < sortBorder - i; j++) {
        if (arr[j] > arr[j + 1]) {
          let temp = arr[j + 1]
          arr[j + 1] = arr[j]
          arr[j] = temp
          //有元素交换，所以不是有序，标记变为false
          isSorted = false
          //把无序数列的边界更新为最后一次交换元素的位置
          lastExchangeIndex = j
        }
      }
      sortBorder = lastExchangeIndex
      if (isSorted) {
        //有序,跳出循环
        break
      }
    }
  }
  return arr
}

console.log(bubbleSort(arr))
```

# 2. 选择排序

选择排序：首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。以此类推，直到所有元素均排序完毕。

时间复杂度：平均 O(n²)   最好 O(n²)   最坏 O(n²)

空间复杂度： O(1)

稳定性：不稳定

![image](https://camo.githubusercontent.com/833a5598a641ad1e425334f7f8289178c2dc793be6d300b367cd4e00ef9299f5/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f333130303733362d366262356438363933626339396131362e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970)

```js
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

function selectionSort(arr) {
  let len = arr.length
  let minIndex, temp
  for (let i = 0; i < len - 1; i++) {
    minIndex = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIndex]) {
        // 寻找最小的数
        minIndex = j
        // 将最小数的索引保存
      }
    }
    temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}

console.log(selectionSort(arr))
```

### 选择排序优化版

```js
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

function selectionSort(arr) {
  let len = arr.length
  let left = 0
  let right = len - 1
  while (left < right) {
    let max = left //记录无序区最大元素下标
    let min = left //记录无序区最小元素下标
    let j = 0
    for (j = left + 1; j <= right; j++) {
      //找最大元素下标
      if (arr[j] < arr[min]) {
        min = j
      }
      //找最小元素下标
      if (arr[j] > arr[max]) {
        max = j
      }
    }
    //最小值如果是第一个则没有必要交换
    if (min != left) {
      let tmp = arr[left]
      arr[left] = arr[min]
      arr[min] = tmp
    }
    //这里很重要，如果最大元素下标是left,前面已经和最小元素交换了，此时最大元素下标应该是min
    if (max == left) {
      max = min
    }
    //最大值如果是最后一个则没必要交换
    if (max != right) {
      let tmp = arr[right]
      arr[right] = arr[max]
      arr[max] = tmp
    }
    left++
    right--
  }
  return arr
}

console.log(selectionSort(arr))
```

# 3. 插入排序

插入排序：它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。

时间复杂度：平均 O(n²)   最好 O(n)   最坏 O(n²)

空间复杂度： O(1)

稳定性：稳定

![image](https://camo.githubusercontent.com/f68565926909bd9c44ffac9a2cc272906de3bd881f87cfdac727be95bf376e6e/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f333130303733362d353531363036323636643932383261352e676966)

```js
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

function insertSort(arr) {
  const len = arr.length
  let preIndex, current
  for (let i = 1; i < len; i++) {
    preIndex = i - 1
    current = arr[i]
    while (preIndex >= 0 && arr[preIndex] > current) {
      arr[preIndex + 1] = arr[preIndex]
      preIndex--
    }
    arr[preIndex + 1] = current
  }
  return arr
}

console.log(insertSort(arr))
```

# 4. 快速排序

快速排序：快速排序使用分治的思想，通过一趟排序将要排序的数据分割成独立的两部分，其中一部分的所有数据都比另外一部分的所有数据都要小，然后再按此方法对这两部分数据分别进行快速排序，整个排序过程可以递归进行，以此达到整个数据变成有序序列。

具体算法描述如下：

(1)选择基准：在待排序列中，按照某种方式挑出一个元素，作为 "基准"（pivot）

选择基准的方式 1.固定位置   2.随机选取基准   3.三数取中(左中右)   参考文章

(2)分割操作：以该基准在序列中的实际位置，把序列分成两个子序列。此时，在基准左边的元素都比该基准小，在基准右边的元素都比基准大

(3)递归地对两个序列进行快速排序，直到序列为空或者只有一个元素。

时间复杂度：平均 O(nlogn)  最好 O(nlogn)   最坏 O(n²)

空间复杂度： O(nlogn)

稳定性：不稳定

![image](https://camo.githubusercontent.com/5df9aef8bf6ace3a4b7016669b0787ab4bdb70c631795329c4a1a9725824e3b1/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f333130303733362d386635666430663635656536366463352e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970)

```js
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

function quickSort(arr, left, right) {
  let len = arr.length,
    partitionIndex,
    lt = typeof left != "number" ? 0 : left,
    rt = typeof right != "number" ? len - 1 : right
  if (lt < rt) {
    partitionIndex = partition(arr, lt, rt)
    quickSort(arr, lt, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, rt)
  }
  return arr
}

function partition(arr, left, right) {
  // 分区操作
  let pivot = left,
    // 设定基准值（pivot）
    index = pivot + 1
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, pivot, index - 1)
  return index - 1
}

function swap(arr, i, j) {
  let temp = arr[i]
  arr[i] = arr[j]
  arr[j] = temp
}
console.log(quickSort(arr))
```

# 5. 归并排序

归并排序（Merge Sort）： 该算法是采用分治法（Divide and Conquer）的一个非常典型的应用。将已有序的子序列合并，得到完全有序的序列；即先使每个子序列有序，再使子序列段间有序。若将两个有序表合并成一个有序表，称为 2-路归并。

具体算法描述如下：

把长度为 n 的输入序列分成两个长度为 n/2 的子序列；
对这两个子序列分别采用归并排序；
将两个排序好的子序列合并成一个最终的排序序列。
时间复杂度：平均 O(nlogn)  最好 O(nlogn)   最坏 O(nlogn)

空间复杂度： O(n)

稳定性：稳定

![image](https://camo.githubusercontent.com/7da76771b5b5dc57ea68060977903f6d13e61afbac53a85ef736e36a8575a0a9/68747470733a2f2f75706c6f61642d696d616765732e6a69616e7368752e696f2f75706c6f61645f696d616765732f333130303733362d336662313563393563316233636536612e6769663f696d6167654d6f6772322f6175746f2d6f7269656e742f7374726970)

```js
const arr = [3, 44, 38, 5, 47, 15, 36, 26, 27, 2, 46, 4, 19, 50, 48]

function mergeSort(arr) {
  // 采用自上而下的递归方法
  let len = arr.length
  if (len < 2) {
    return arr
  }
  let middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle)
  return merge(mergeSort(left), mergeSort(right))
}
function merge(left, right) {
  let result = []
  while (left.length > 0 && right.length > 0) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }
  while (left.length) {
    result.push(left.shift())
  }
  while (right.length) {
    result.push(right.shift())
  }
  return result
}

console.log(mergeSort(arr))
```

# 备注

参考链接：https://github.com/daily-interview/fe-interview/issues/2

# 其他

| 排序算法    | 平均时间 | 最坏情况       | 稳定度 | 额外空间 | 备注                           |
| ----------- | -------- | -------------- | ------ | -------- | ------------------------------ |
| 冒泡        | O(n^2)   | O(n^2)         | 稳定   | O(1)     | n 小的时候比较好               |
| 交换        | O(n^2)   | O(n^2)         | 不稳定 | O(1)     | n 小的时候比较好               |
| 选择        | O(n^2)   | O(n^2)         | 不稳定 | O(1)     | n 小的时候比较好               |
| 插入        | O(n^2)   | O(n^2)         | 稳定   | O(1)     | 大部分已经排序时比较好         |
| 基数        | O(logRB) | O(logRB)       | 稳定   | O(n)     | B 是真书(0-9) R 是基数(个十百) |
| Shell(希尔) | O(nlogn) | O(n^s) (1<s<2) | 不稳定 | O(1)     | s 是所选分组                   |
| 快排        | O(nlogn) | O(n^2)         | 不稳定 | O(nlogn) | n 大时候较好                   |
| 归并        | O(nlogn) | O(nlogn)       | 稳定   | O(1)     | n 大时候较好                   |
| 堆          | O(nlogn) | O(nlogn)       | 不稳定 | O(1)     | n 大时候较好                   |
