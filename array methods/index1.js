//1
const arr1 = [
  { name: "cat", id: "20" },
  { name: "dog", id: "50" },
 { name: "deer", id: "40" },
];
const arr2 = [{name:'xyz1', id:"30"}];
console.log("concat : ", arr1.concat(arr2))

//2
const arr3 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
const res1 = arr3.entries()
for(let item of res1){
    console.log("entries :",item)
}

//3
const arr4 = [
    { name: "cat", id:"20" },
    { name: "dog", id:"50" },
    { name: "deer",id: "40" },
  ];
console.log( "every :" , arr4.every((e)=>e.id == 50))

//4
const arr5 = [[2,3,4,5],[2,3,4]]
const res3 = arr5.flatMap(e=>e.map(v => v * 2));
console.log("flatMap:",res3);

//40
const arr40 = [1,2,[2,3,4,5],[2,47,4,3],[2,3,4],3,5]
console.log("flat:",arr40.flat())

//5
const arr6 = [
  { name: "cat", id: "20" },
  { name: "dog", id: "50" },
  { name: "deer", id: "40" },
];
console.log("fill : ", arr6.fill(  { name: "potato", id: "100" }));

//6
// // const arr7 = "hello world!"
const arr7 = [
  { name: "cat", id: "20" },
  { name: "dog", id: "50" },
  { name: "deer", id: "40" },
];
console.log("from : ",Array.from(arr7))

7
const arr8 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
console.log("filter : ",arr8.filter(e=>e.id === "50"))

//8
const arr9 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
console.log("find : ",arr9.find(e=>e.id === "40"))

//9
const arr10 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
console.log("findindex : ", arr10.findIndex(e=>e.id === "50"))

//10
const arr11= [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
arr11.forEach(obj =>
    console.log("foreach : ",obj)
)

//11
const arr12 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
const ar2 = ["name", "id", arr12]
console.log("includes :", ar2.includes(arr12))

//12
const arr13 ={ "name": [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ]};
console.log("isarray : ",Array.isArray(arr13))

//13 
const arr14 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
console.log("join : ",arr14.join("--"))

//14
const arr15 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];

const res4 = arr15.keys()
for(var item of res4){
    console.log("keys : ",item) 
}

//15 //doubt
const arr16 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
console.log("indexof : ",arr16.indexOf("dog"));

//16 //doubt
const arr17 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
console.log("lastindexof : ",arr17.lastIndexOf("dog"));

//17
const arr18 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
console.log("map : ",arr18.map(e=>e.id > "40"))

//18
console.log("of : ",Array.of(1,2,4,6,7,"xyz"))

//19
const arr19 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
console.log("pop : ",arr19.pop()
)

//20 
const arr20 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
const ar3 = { name: "bee", id: "90" }
arr20.push(ar3)
console.log("push : ",arr20)

//21
const arr21 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
console.log("reverse :",arr21.reverse())

//22
const arr22 = [
    { name: "cat", id: 20 },
    { name: "dog", id: 50 },
    { name: "deer", id: 40 },
  ];

const res5 = arr22.reduce((elm, val) => elm + val.id, 0)
console.log("reduce : ",res5)

//23
const arr23 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
console.log("some : ",arr23.some(el=>el.id ==="20"));

//24
const arr24 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
console.log("shift : ",arr24.shift());

//25
const arr25 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
const ar4 = { name: "bee", id: "90" }
arr25.unshift(ar4)
console.log("unshift : ",arr25)

//26  need to check again slice and splice
const arr26 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];

console.log("slice : ",arr26.slice(2))

//27 //doubt 
const arr27 = [
    { name: "cat", id: "90" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];

console.log("sort : ",arr27.sort());

//28
const arr28 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
arr28.splice(0,1,{ name: "bee", id: "90" });
console.log("splice : ",arr28);

//29
const arr29 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
const res6 = arr29.values()
for(let item of res6){
    console.log("values : ",item)
}

//30
const arr30 = 100000
console.log("tostring : ",arr30.toString())

//31
const arr31 = 100000
console.log("tolocalestring : ",arr31.toLocaleString())

//32
const arr32 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
  console.log("length : ",arr32.length)

//33
const arr33 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];

  console.log("at : ",arr33.at(2))

//34 //pending not working on vs code
// const arr34 = [
//     { name: "cat", id: "20" },
//     { name: "dog", id: "50" },
//     { name: "deer", id: "40" },
//  ];
//  console.log("with : ",arr34.with(2, { name: "bee", id: "90" }))

//35
const arr35 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];

  console.log("copywithin : " ,arr35.copyWithin(0,1,2))

36
const arr36 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
const spd = [{ name: "deer", id: "40" }]
console.log("spread : ", ...spd,...arr36)

//37
const arr37 = [
        { name: "cat", id: 20 },
        { name: "dog", id: 50 },
        { name: "deer", id: 40 },
      ];
    const res7 = arr37.reduceRight((elm, val) => elm + val.id, 0)
    console.log("reduceRight : ", res7)

// //38
const arr38 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
console.log("findLast : ",arr38.findLast(e=>e.id === "20"))

//39
const arr39 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
console.log("findLastIndex : ",arr39.findLastIndex(e=>e.id === "40"))

//41 //pending not working on va code
// const arr41 = [
//     { name: "cat", id: "20" },
//     { name: "dog", id: "50" },
//     { name: "deer", id: "40" },
//   ];
//  const spl = arr41.toSpliced(0, 1)
// //  console.log("toSplice : ", spl)

42
const arr42 = [
    { name: "cat", id: "20" },
    { name: "dog", id: "50" },
    { name: "deer", id: "40" },
  ];
console.log( "delete :" , delete arr42[2])
