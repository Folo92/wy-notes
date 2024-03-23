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
var tuple1 = [666, "A", 2333]; // 报错
var tuple2 = [true, "A", 2333];
console.log(tuple2[2]); // 2333
