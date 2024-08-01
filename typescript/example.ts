const xyz1: number = 20;
console.log(xyz1);

//string and number type
const xyz = (): { name: string; age: number } => {
  return { name: "xyz", age: 20 };
};

console.log(xyz());

//function with return promise
async function getFavoriteNumber(): Promise<number> {
  return 26;
}

console.log(getFavoriteNumber());

//object types
const printName = (obj: { name: string; last?: string }) => {
  if (obj.last !== undefined) {
    console.log(obj.name + " " + obj.last.toUpperCase());
  }
  console.log(obj.name + " " + obj.last?.toUpperCase());
};
printName({ name: "alex", last: "volkov" });

// function printName(obj: { first: string; last?: string }) {
// //   console.log(obj.last.toUpperCase());

//   if (obj.last !== undefined) {

//     console.log(obj.first +" "+obj.last.toUpperCase());
//   }

//   console.log(obj.last?.toUpperCase());
// }
// printName({first: "xyz", last: "some last name"})

//union type
const UnionType = (id: number | string | boolean) => {
  console.log(id);
};
UnionType(20);
UnionType("some text");
UnionType(true);

//type alias
type Point = {
  x: number;
  y: number;
};

function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });

//interfaces

interface Shape {
  value1: number;
  value2: number;
  cal(): number;
}

const interfaceFunction = (pt: Shape) => {
  console.log("using interface", pt.value1);
  console.log("using interface", pt.value2);
  console.log(pt.cal());
};

interfaceFunction({
  value1: 200,
  value2: 200,
  cal() {
    return Math.PI * 2 * 2;
  },
});

//literal type
const literalFun = (name: string |  "xyz1" | "xyz2") => {
console.log(name)
}

literalFun("xyz2")

//literal inference
const obj = {counter : 0}
if (obj) {
    obj.counter = 1
    console.log(obj)
}

