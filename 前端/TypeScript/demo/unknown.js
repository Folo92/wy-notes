// let value: unknown;
// // 错误：不能直接访问unknown类型的属性
// // console.log(value.toString());
// // 正确：先类型检查
// if (value instanceof String) {
//   console.log(value.toString());
// }
// // 正确：使用类型断言
// console.log((value as String).toString());
// // 正确：使用类型守卫操作符
// if (typeof value === "string") {
//   console.log(value.toString());
// }
// // 正确：使用`unknown`类型的特殊函数
// function handleUnknownValue(value: unknown) {
//   if (typeof value === "string") {
//     console.log(value.toUpperCase());
//   } else if (typeof value === "number") {
//     console.log(value.toFixed(2));
//   } else {
//     console.log(value);
//   }
// }
// // 正确：unknown可以赋值给any类型
// let anyValue: any;
// anyValue = value;
// // 正确：unknown可以作为函数返回类型
// function getValue(): unknown {
//   // 假设的逻辑
//   return Math.random() > 0.5 ? "hello" : 42;
// }
// // 正确：unknown可以作为函数参数类型
// function setValue(value: unknown) {
//   // 处理逻辑
// }
// // 正确：unknown可以用在泛型中
// function identity<T>(value: T): T {
//   return value;
// }
// let unknownIdentity: unknown = identity("hello");
var value1;
value1 = true; // OK
value1 = 42; // OK
value1 = "Hello World"; // OK
value1 = []; // OK
value1 = {}; // OK
value1 = Math.random; // OK
value1 = null; // OK
value1 = undefined; // OK
value1 = new TypeError(); // OK
value1 = Symbol("type"); // OK
function processValue(value) {
    // return value.toUpperCase();
    // 使用 typeof 进行类型检查
    if (typeof value === "string") {
        return value.toUpperCase(); // 在这里，TypeScript 知道 value 的类型是 string
    }
    else {
        return "".concat(value, "\u4E0D\u662Fstring\u7C7B\u578B"); // 在这里，TypeScript 知道 value 的类型不是 string
    }
}
console.log(processValue("black")); // 输出: BLACK
console.log(processValue(666)); // 输出: 666不是string类型
var value11 = 123;
var value22 = 123;
console.log(value11 === value22);
console.log(value11 !== value22);
console.log(value11 == value22);
console.log(value11 != value22);
console.log(value11 >= value22); // 严格模式报错
console.log(value11 > value22); // 严格模式报错
