/**
 * 开启一个读写的事务
 * @param {*} help indexedDB 的 help
 * @param {Array} storeName 字符串的数组，对象仓库的名称
 * @param {string} type readwrite：读写事务；readonly：只读事务；versionchange：允许执行任何操作，包括删除和创建对象存储和索引。
 * @returns 读写事务
 */
const beginTran = (help, storeName, type = "readwrite") => {
  return new Promise((resolve, reject) => {
    const _tran = () => {
      const tranRequest = help._db.transaction(storeName, type)
      tranRequest.onerror = (event) => {
        console.log(type + " 事务出错：", event.target.error)
        reject(`${type} 事务出错：${event.target.error}`)
      }
      resolve(tranRequest)
      tranRequest.oncomplete = (event) => {
        // console.log('beginReadonly 事务完毕：', window.performance.now())
      }
    }

    if (help._db) {
      _tran() // 执行事务
    } else {
      // 注册一个回调事件
      help._regCallback.push(() => _tran())
    }
  })
}
export default beginTran

// 支持多个对象仓库
// storeName 是字符串数组，所以可以针对多个对象仓库同时开启事务，然后通过 tranRequest.objectStore(storeName) 来获取具体的对象仓库。
// 挂载到 help
// 因为是写在单独的js文件里面，所以还需要在 help 里面引入这个js文件，然后挂到 help 上面，以便实现 help.xxx 的调用形式，这样拿到help即可，不用 import
// 各种函数了。
