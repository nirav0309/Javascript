// let a = "2d0";

// let res;
// switch (a%2) {
//     case 0:
//         res = "even"
//         break;
//     case 1:
//         res = "odd"
//         break;

//     default:
//         res = "NaN"
//         break;
// }
// console.log(res)

// for(i=0;i<=10;i++){
//     if(i == 6){
//         break;
//     }
//     console.log(i)
// }

// let i = 0;
// while(i <= 5){
//     console.log(i)
//     i++;
// }

// let num = 1;
// while(num < 100){
//     console.log(num)
//     num *= 2
// }

// let number = 1;
// while (number < 100) {
//     console.log(number);
//     number *= 2;
// }

// let input = "";
// while(!input){
//     input = prompt("enter something");
//     console.log(input)
// }

// let a = 0;
// do {
//     console.log(a)
//     a++
// } while (a <=20);

// let randomNum;
// do {
//     randomNum = Math.random();
//     console.log("random num: " + randomNum);
// } while (randomNum <= 0.5)
// console.log("number is greater then or equal to generated number")

// const map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// for (let key of map.keys()) {
//     console.log(key + ': ' + map.get(key));
// }

// const x = () =>{
//       console.log("hello")
//     }
//     x()

//     const y = () =>{
//       x()
//     }
//     y()

//     y = () =>{
//       console.log("hvfg")
//     }
//     y()

//     const y = (a,b) =>{
//       return a + b;
//     }
//     console.log(y(9,9))

//     y = (a,b) =>{
//       return a - b;
//     }
//     console.log(y(9,9))


//ex1
var obj = {
  webSiteName: "StackOverFlow",
  find: "anything",
  onDays: [
    "sun", // Object "obj" contains array "onDays"
    "mon",
    "tue",
    "wed",
    "thu",
    "fri",
    "sat",
    { name: "jack", age: 34 },
    // array "onDays"contains array object "manyNames"
    { manyNames: ["Narayan", "Payal", "Suraj"] },
  ],
};


// let str = "Payal";

// const arr = obj.onDays;
// console.log(arr);

// const arr1 = arr.find((e) => e.manyNames);
// const arr2 = arr1.manyNames;

// arr2.forEach((element) => {
//   console.log(element);
// });

// console.log(str === arr2[1])

// console.log(arr2.find(e=>e === "Payal"))

// for(i=0; i<arr2.length; i++){
//    console.log(arr2[i])
// }


// const a = arr.find(e=>e.name)
// console.log(a.name)



//ex2
// const obj1 = {
//     age:20,
//     add: "xyz",
//     sub: {sub1:"math", sub2:"eng", sub3:"hindi"},
//     name: "xhyxff",

// }

// const s = "eng"
// const xyz1 = obj1.sub
// const res = xyz1.match(s)
// console.log(xyz1)


const library = {
    name: "My Awesome Library",
    books: [
      {
        title: "The Lord of the Rings",
        author: "J.R.R. Tolkien",
        genres: ["Fantasy", "Adventure"]
      },
      {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genres: ["Romance", "Drama"]
      },
      [ // Notice this nested array within a book object
        {
          title: "A Confederacy of Dunces",
          author: "John Kennedy Toole",
          genres: ["Comedy", "Satire"]
        },
        {
          title: "To Kill a Mockingbird",
          author: "Harper Lee",
          genres: ["Drama", "Historical Fiction"]
        }
      ]
    ]
  };

  const arr = library.books
  //console.log(arr)

//  const arr1 = arr.find(e=>e[0])
//  console.log(arr1)

// console.log(arr.find(e=>e).genres.find(e=>e == "Adventure"))


// n = 2;
// if((n & 1) === 0){
// //  console.log("even")
// return "even";
// }else{
//   return "odd";
//   // console.log("odd")
// }


