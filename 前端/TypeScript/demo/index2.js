var Direction;
(function (Direction) {
    Direction[Direction["EAST"] = 0] = "EAST";
    Direction[Direction["SOUTH"] = 1] = "SOUTH";
    Direction[Direction["WEST"] = 2] = "WEST";
    Direction[Direction["NORTH"] = 3] = "NORTH";
})(Direction || (Direction = {}));
var dir = Direction.NORTH;
var gender = 1 /* Gender.FEMALE */;
var E;
(function (E) {
    E[E["A"] = 1] = "A";
    E[E["B"] = 2] = "B";
    E[E["C"] = 3] = "C";
})(E || (E = {}));
var SectionArea;
(function (SectionArea) {
    SectionArea[SectionArea["A1"] = 3.14] = "A1";
    SectionArea[SectionArea["A2"] = 12.56] = "A2";
    SectionArea[SectionArea["A3"] = 28.259999999999998] = "A3";
})(SectionArea || (SectionArea = {}));
var StringEnumDemo;
(function (StringEnumDemo) {
    StringEnumDemo["A"] = "aaa";
    StringEnumDemo["B"] = "bbb";
})(StringEnumDemo || (StringEnumDemo = {}));
var MixEnum;
(function (MixEnum) {
    MixEnum["A"] = "aaa";
    MixEnum[MixEnum["B"] = 2] = "B";
})(MixEnum || (MixEnum = {}));
var Color;
(function (Color) {
    Color["Red"] = "red";
    Color["Green"] = "green";
    Color["Blue"] = "blue";
})(Color || (Color = {}));
var Shape;
(function (Shape) {
    Shape[Shape["Circle"] = 0] = "Circle";
    Shape[Shape["Square"] = 1] = "Square";
    Shape[Shape["Triangle"] = 2] = "Triangle";
})(Shape || (Shape = {}));
var combined = Shape.Square;
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
