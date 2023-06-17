// 图片懒加载其实就是用一个自定义属性存储图片的src，当且仅当图片出现或进入可视范围才去加载它。
// 下面是两种方法实现图片懒加载：

/* getBoundClientRect 的实现方式，监听 scroll 事件 */
let imgList = [...document.querySelectorAll("img")]
let num = imgList.length

const lazyLoad = (function () {
  let count = 0
  return function () {
    let deleteIndexList = []
    imgList.forEach((img, index) => {
      let rect = img.getBoundingClientRect()
      if (rect.top < window.innerHeight) {
        img.src = img.dataset.src
        deleteIndexList.push(index)
        count++
        if (count === num) {
          document.removeEventListener("scroll", lazyLoad)
        }
      }
    })
    imgList = imgList.filter((_, index) => !deleteIndexList.includes(index))
  }
})()

/* intersectionObserver 实现方式，实例化一个 IntersectionObserver，并使其观擦所有 img 标签 */
const lazyLoad2 = function () {
  let observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.src = entry.target.dataset.src
        observer.unobserve(entry.target)
      }
    })
  })
  imgList.forEach((img) => {
    observer.observe(img)
  })
}

// intersectionObserver 详情请看：
// https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver
