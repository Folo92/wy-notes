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
