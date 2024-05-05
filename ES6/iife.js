// (function (){
//     console.log("hello")
// })();

// (()=>{
//     console.log("hello2")
// })();

(function(value){
    var greet = 'Hello';
    console.log(greet+ ' ' + value);
  })('IIFEs');

  (function (){
    var  counter = 0;
     return {
        inc: function(){
        counter++
        return counter;
     }
        }
  })();

  inc();
  console.log(counter.inc())

  
  

// void function (){
//     function msg(){
//         console.log("hello");
//     }
//     msg()
// }();

// var d = new Date();
// var arr = ["sun", "mon", "tue", "wen", "thu", "fri", "sat"];
// console.log(arr[d.getDay()]);

// function fun() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("resolved");
//     }, 2000);
//   });
// }
// fun().then((val) => {
//   console.log(val);
// });

// async function fun1(){
//     console.log("before")
//     await fun();
//     console.log("after fun");
// }
// fun1()