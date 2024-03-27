var user = {
    userName: "Jone",
    userId: "u1s1",
};
user.gender = 1; // 后添加可选属性
user.userId = "2333"; // 报错：无法为“userId”赋值，因为它是只读属性。
user.status = 2; // 报错：无法为“status”赋值，因为它是只读属性。
user.age = 18; // 额外属性
user.city = "nanjing"; // 额外属性
user[0] = "TEST"; // 索引 0 会被转为字符串"0"
user.username = "Tony";
// 有个办法可以变相绕过只读限制：将对象赋值给另一个变量
user = {
    userName: "Jone",
    userId: "2333",
    status: 2,
};
var fn = function (x, y) {
    return x + y;
};
