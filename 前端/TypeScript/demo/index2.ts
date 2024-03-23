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

enum Color {
  Red = "red",
  Green = "green",
  Blue = "blue",
}

enum Shape {
  Circle,
  Square,
  Triangle,
}

type UnionEnum<T, U> = {
  [K in keyof T | keyof U]: K extends keyof T ? T[K] : K extends keyof U ? U[K] : never;
};

// 使用UnionEnum自动合并Color和Shape枚举
type Combined = UnionEnum<Color, Shape>;
let combined: Combined = Shape.Square;
console.log(combined);

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
