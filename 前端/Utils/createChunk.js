// 创建切片
function createChunk(file, size) {
  //file是大文件，size是切片的大小(也就是小文件的大小)
  const chunkList = []
  let cur = 0
  while (cur < file.size) {
    chunkList.push({
      file: file.slice(cur, cur + size), //使用slice()进行切片
    })
    cur += size
  }
  return chunkList
}
