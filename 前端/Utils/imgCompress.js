function compressImage(file, maxWidth, maxHeight, quality) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      const img = new Image()
      img.src = reader.result
      img.onload = () => {
        let width = img.width
        let height = img.height
        if (width > maxWidth) {
          height *= maxWidth / width
          width = maxWidth
        }
        if (height > maxHeight) {
          width *= maxHeight / height
          height = maxHeight
        }
        const canvas = document.createElement("canvas")
        canvas.width = width
        canvas.height = height
        const ctx = canvas.getContext("2d")
        ctx.drawImage(img, 0, 0, width, height)
        canvas.toBlob(
          (blob) => {
            const compressedFile = new File([blob], file.name, {
              type: "image/jpeg",
              lastModified: Date.now(),
            })
            const reader = new FileReader()
            reader.readAsDataURL(compressedFile)
            reader.onload = () => {
              resolve(reader.result)
            }
            reader.onerror = reject
          },
          "image/jpeg",
          quality
        )
      }
      img.onerror = reject
    }
    reader.onerror = reject
  })
}

const fileInput = document.querySelector('input[type="file"]')
fileInput.addEventListener("change", async () => {
  const file = fileInput.files[0]
  const compressedDataUrl = await compressImage(file, 800, 600, 0.8)
  console.log(compressedDataUrl)
})
