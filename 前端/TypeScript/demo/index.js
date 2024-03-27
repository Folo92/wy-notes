var hello = function (name) {
    console.log("Hello,".concat(name));
};
hello("TypeScript");
var arr1 = [1, 2, 3];
var arr2 = [1, 2, 3];
var arr3 = ["A", "B", "C"];
var arr4 = ["A", "B", "C"];
var arr5 = [1, "A", true];
var arr6 = [1, "A", true];
var arr7 = [1, "A", null];
var arr8 = [1, "A", null];
// let tuple1: [boolean, string, number] = [true, "A"];
// let tuple1: [boolean, string, number] = [true, "A", 2333, 666];
// let tuple1: [boolean, string, number] = [666, "A", 2333];
var tuple2 = [true, "A", 2333];
console.log(tuple2[2]); // 2333
var demo = [
    {
        item: {
            name: "不可变",
        },
    },
    2333,
];
// error: 无法为“name”赋值，因为它是只读属性。
demo[0].item.name = 1;
// error: 类型“readonly [{ readonly item: { readonly name: "不可变"; }; }, 2]”上不存在属性“push”。
demo.push(2);
// error: 属性“splice”在类型“readonly [{ readonly item: { readonly name: "不可变"; }; }, 2]”上不存在。
demo.splice(0, 1);
// error: 类型“readonly [{ readonly item: { readonly name: "不可变"; }; }, 2]”上不存在属性“pop”。
demo.pop();
// error: 类型“readonly [{ readonly item: { readonly name: "不可变"; }; }, 2]”上不存在属性“unshift”。
demo.unshift();
function demo() {
    throw new Error("err");
}
function demo2() {
    while (true) { }
}
var obj01 = 1; // 正常运行
var obj02 = 1; // error 不能将类型“number”分配给类型“object”
// interface Foo {
//   a: number;
//   b: string;
// }
// const foo1: Foo = {}; // 报错：类型“{}”缺少类型“Foo”中的以下属性: a, b
// const foo2: Foo = {} as Foo;
// const canvasEle1 = document.getElementById("my-canvas");
// const context1 = canvasEle1.getContext("2d"); // 报错：类型“HTMLElement”上不存在属性“getContext”。
// const canvasEle2 = document.getElementById("my-canvas") as HTMLCanvasElement;
// const context2 = canvasEle2.getContext("2d"); // 现在不会报ts错误
// const foo = "abc" as number;
// interface Foo {
//   a: number;
//   b: string;
// }
// const foo = {};
// foo.a = 1; // 报错：类型“{}”上不存在属性“a”。
// foo.b = "hello"; // 报错：类型“{}”上不存在属性“b”。
function sum(a, b) {
    return a + b;
}
var arr = [3, 4];
console.log(sum.apply(void 0, arr)); // 报错：扩张参数必须具有元组类型或传递给 rest 参数。
var str;
str = "ABC"; // OK
str = null; // 报错（严格空值检查模式）
str = undefined; // 报错（严格空值检查模式）
