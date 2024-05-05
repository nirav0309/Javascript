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

const map = new Map();
map.set('a', 1);
map.set('b', 2);
map.set('c', 3);

for (let key of map.keys()) {
    console.log(key + ': ' + map.get(key));
}

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