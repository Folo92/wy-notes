const fs = require("fs")
const path = require("path")

function _mkdirSync(path) {
  if (fs.existsSync(path)) {
    console.log(path, "已存在")
  } else {
    fs.mkdirSync(path)
    console.log(path, "创建成功")
  }
}

function _mkfileSync(path, data = "") {
  if (fs.existsSync(path)) {
    console.log(path, "已存在")
  } else {
    fs.writeFileSync(path, data)
    console.log(path, "创建成功")
  }
}

class CreateProject {
  constructor(rootPath, projectName) {
    this.rootPath = rootPath
    this.projectName = projectName
    this.subFiles = ["images", "css", "js", "index.html"]
  }
  initProject() {
    const projectPath = path.join(this.rootPath, this.projectName)
    _mkdirSync(projectPath)
    this.subFiles.forEach((fileName) => {
      const filePath = path.join(projectPath, fileName)
      if (path.extname(fileName) === "") {
        _mkdirSync(filePath)
      } else {
        _mkfileSync(filePath)
      }
    })
  }
}

const cp = new CreateProject(__dirname, "abc")
cp.initProject()
