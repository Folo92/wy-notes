import _vueToObject from "./_toObject.js.js"

/**
 * 添加对象
 * @param { IndexedDBHelp } help 访问数据库的实例
 * @param { string } storeName 仓库名称（表名）
 * @param { Object } model 对象
 * @param { IDBTransaction } tranRequest 如果使用事务的话，需要传递开启事务时创建的连接对象
 * @returns 新对象的ID
 */
export default function addModel(help, storeName, model, tranRequest = null) {
  // 取对象的原型，便于保存 reactive
  const _model = _vueToObject(model)
  // 定义一个 Promise 的实例
  return new Promise((resolve, reject) => {
    // 定义个函数，便于调用
    const _add = (__tran) => {
      __tran
        .objectStore(storeName) // 获取store
        .add(_model).onsuccess = // 添加对象
        (event) => {
          // 成功后的回调
          resolve(event.target.result) // 返回对象的ID
        }
    }
    if (tranRequest === null) {
      help.beginWrite([storeName]).then((tran) => {
        // 自己开一个事务
        _add(tran)
      })
    } else {
      // 使用传递过来的事务
      _add(tranRequest)
    }
  })
}
