import axios from "axios"

axios.get("http://localhost:8000/download", { responseType: "blob" }).then((res) => {
  if (window.navigator.msSaveBlob) {
    //ie-兼容ie
    window.navigator.msSaveBlob(
      res.data,
      { type: "application/vnd.openxmlformats-officedocument.presentationml.presentation" },
      "test.ppt"
    )
  } else {
    let blobURL = URL.createObjectURL(res.data) //2,创建blob的本地ur1
    let link = document.createElement("a") //3,创建标签
    link.href = blobURL //4,设置href
    link.download = "test2.ppt" //5,设置download
    link.style.display = "none"
    link.click()
    URL.revokeObjectURL(blobURL)
  }
})
