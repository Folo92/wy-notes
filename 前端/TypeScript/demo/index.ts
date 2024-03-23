const hello = (name) => {
  console.log(`Hello,${name}`);
};
hello("TypeScript");

let arr1: Array<number> = [1, 2, 3];
let arr2: number[] = [1, 2, 3];
let arr3: Array<string> = ["A", "B", "C"];
let arr4: string[] = ["A", "B", "C"];
let arr5: Array<boolean | string | number> = [1, "A", true];
let arr6: (boolean | string | number)[] = [1, "A", true];
let arr7: Array<any> = [1, "A", null];
let arr8: any[] = [1, "A", null];

// let tuple1: [boolean, string, number] = [true, "A"];
// let tuple1: [boolean, string, number] = [true, "A", 2333, 666];
// let tuple1: [boolean, string, number] = [666, "A", 2333];
let tuple2: [boolean, string, number] = [true, "A", 2333];
console.log(tuple2[2]); // 2333

let demo = [
  {
    item: {
      name: "不可变",
    },
  },
  2333,
] as const;

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

enum Gender {
  MALE,
  FEMALE,
}
