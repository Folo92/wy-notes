export function getPosition() {
  //getCurrentPosition与定时器setInterval类似多次请求，因为位置需要不间断的获取
  //直接navigator.geolocation表示单次获取位置
  navigator.geolocation.getCurrentPosition(
    function (position) {
      let result
      result += "经度" + position.coords.longitude
      result += "纬度" + position.coords.latitude
      result += "准确度" + position.coords.accuracy
      result += "海拔" + position.coords.altitude
      result += "海拔准确度" + position.coords.altitudeAcuracy
      result += "行进方向" + position.coords.heading
      result += "地面速度" + position.coords.speed
      result += "请求的时间" + new Date(position.timestamp)
      console.log(result)
    },
    function (err) {
      const msgOptions = {
        0: "不包括其他错误编号中的错误",
        1: "用户拒绝浏览器获取位置信息",
        2: "尝试获取用户信息，但失败了",
        3: "设置了timeout值，获取位置超时了",
      }
      console.log(msgOptions[err.code])
      // code：返回获取位置的状态
      // 0  :  不包括其他错误编号中的错误
      // 1  :  用户拒绝浏览器获取位置信息
      // 2  :  尝试获取用户信息，但失败了
      // 3  :   设置了timeout值，获取位置超时了
    },
    {
      enableHighAcuracy: false, //位置是否精确获取
      timeout: 5000, //获取位置允许的最长时间
      maximumAge: 1000, //多久更新获取一次位置
    }
  )
}
