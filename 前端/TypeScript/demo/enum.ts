enum Direction {
  EAST,
  SOUTH,
  WEST,
  NORTH,
}
let dir: Direction = Direction.NORTH;

const enum Gender {
  MALE,
  FEMALE,
}
let gender: Gender = Gender.FEMALE;

enum E {
  A = 1 << 0,
  B = 1 << 1,
  C = A | B,
}
enum SectionArea {
  A1 = 3.14 * 1 * 1,
  A2 = 3.14 * 2 * 2,
  A3 = 3.14 * 3 * 3,
}

enum StringEnumDemo {
  A = "aaa",
  B = "bbb",
}

enum MixEnum {
  A = "aaa",
  B = 2,
}

/** 枚举合并 */

enum Color {
  RED = "red",
  GREEN = "green",
  BLUE = "blue",
}
enum Shape {
  CIRCLE,
  SQUARE,
  TRIANGLE,
}

type ColorShape = Color | Shape; // 类型联合
const ColorShape = { ...Color, ...Shape }; // 值合并

const obj1: ColorShape = Color.RED;
const obj2: ColorShape = Shape.SQUARE;
const obj3: ColorShape = ColorShape.GREEN;
const obj4: ColorShape = ColorShape.SQUARE;

// 再次定义同名枚举，可新增枚举值，但规则上不允许修改已存在的枚举值
enum Color {
  WHITE = "white",
  BLACK = "black",
  RED = "pink", // 报错：标识符“RED”重复。（强行编译后代码也可以生效，RED枚举值被新值覆盖）
}
const obj5: ColorShape = Color.BLACK;

const pi = 3.14;
console.log(pi);

// type UnionEnum<T, U> = {
//   [K in keyof T | keyof U]: K extends keyof T ? T[K] : K extends keyof U ? U[K] : never;
// };
// type Combined = UnionEnum<Color, Shape>;
// let combined: Combined = Shape.Square;
// console.log(combined);

// type Prefix<T extends { [K in keyof T]: string }, P extends string> = {
//   [K in keyof T & string as `${P}_${K}`]: `${P}_${T[K]}`;
// };

// function merged<
//   T1 extends { [K in keyof T1]: string },
//   P1 extends string,
//   T2 extends { [K in keyof T2]: string },
//   P2 extends string
// >(obj1: T1, prefix1: P1, obj2: T2, prefix2: P2): Prefix<T1, P1> & Prefix<T2, P2> {
//   const result = {} as any; // Going to have to cast somewhere anyways...

//   for (const [k, v] of Object.entries(obj1)) {
//     result[`${prefix1}_${k}`] = `${prefix1}_${v}`;
//   }

//   for (const [k, v] of Object.entries(obj2)) {
//     result[`${prefix2}_${k}`] = `${prefix2}_${v}`;
//   }

//   return result;
// }

// const Merged = merged(Color, "Color", Shape, "Shape");
// console.log(Merged);
