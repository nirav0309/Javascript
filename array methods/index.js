// const arr1 = [
//   { name: "cat", id: "20" },
//   { name: "dog", id: "50" },
//  { name: "deer", id: "40" },
// ];

// const arr2 = [{name:'xyz1', id:"30"}]
// console.log("ans1:" + arr1.concat(arr2))

// const res1 = arr1.entries()
// for(let item of res1){
//     console.log("ans2: "+item)
// }

// function xyz1(element, value){
// return  value >10;
// }

// const res2 = arr1.every(xyz1)
// console.log(res2)

// const arr3 = [[2,3,4,5],[2,3,4]]
// console.log("ans: " + arr3.flat())
// const res4 = arr3.flatMap(e=>e.map(v => v * 2));
// console.log(res4);

let complexArray = [
  {
    name: "John",
    age: 30,
    address: {
      street: "123 Main St",
      city: "New York",
      country: "USA",
    },
    hobbies: ["reading", "traveling", "cooking"],
    friends: [
      { name: "Alice", age: 28 },
      { name: "Bob", age: 32 },
      { name: "Emily", age: 29 },
    ],
  },
  {
    name: "Emily",
    age: 25,
    address: {
      street: "456 Elm St",
      city: "Los Angeles",
      country: "USA",
    },
    hobbies: ["painting", "hiking", "photography"],
    friends: [
      { name: "David", age: 27 },
      { name: "Sophia", age: 26 },
      { name: "Michael", age: 24 },
    ],
  },
];

const arr = complexArray.find((e) => e);
console.log(arr);

const arr1 = arr.hobbies;
  arr1.forEach((e) => {
    if (e =="reading") {
      console.log(arr.name);
    }
  })


// const res = complexArray.filter(e=>e.hobbies.includes("reading"))
// console.log(res)
