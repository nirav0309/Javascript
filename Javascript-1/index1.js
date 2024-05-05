//------------------------29-03-2024 object and its methods--------------
// const obj = {
//   name= "xyz",
//   value: "sefs"
// }
// const obj1 = Object.getOwnPropertyDescriptor(obj, "name");
// console.log(obj1);

// const obj1 = {};
// Object.defineProperties(obj1,{
//   "name":{
//   value:200,
//   writable:true,
//   }
// });
// console.log("Name: " + obj1.name);

// obj1.name = 3000;
// console.log("Name: " + obj1.name)



// const obj = {};
// Object.defineProperty(obj, "name",{
//   value:200,
//   writable:true,
// });
// console.log("Name: " + obj.name);

// obj.name = 30000;
// console.log("Name: " + obj.name)

// const obj = {
//   name: "xyz",
//   value: "sefs",
// }
// console.log(Object.entries(obj))

// const obj = {name: "xyz", value: "sefs"}
// Object.freeze(obj);
// obj.name = "abc";
// console.log(obj.name)
// obj.newname = "behfuebs"
// console.log(obj.newname);

// const obj = {name: "xyz", value: "sefs"};
// const obj1 = Object.getOwnPropertyDescriptor(obj, "name")
// console.log(obj1);

// const obj = {a:1, b:2, c:3}

// console.log(Object.getOwnPropertyNames(obj))

// const object1 = {
//   a: "bvgfyf",
//   b: 1,
//   c: 2,
// };
// console.log(Object.getOwnPropertyNames(object1));

// const object1 = {name: "java"};
// console.log(Object.is(object1, object1));

//  const obj = {value:20}
// console.log(Object.getOwnPropertyDescriptors(obj));

//------------------------01-04-2024 object and its methods------------------------
// const obj = {a:1, b:2, c:3}//Object.getOwnPropertyNames()
// console.log(Object.getOwnPropertyNames(obj))

// const obj = { //object.create()
//   name : "xyz",
//   id : 20,
//   fun(){
//     console.log("Name: " + this.name)
//   }
// }

// const obj1 = Object.create(obj);
// obj1.name = "abc";
// obj1.fun();

// const obj = Symbol('name');//Object.getOwnPropertySymbols()
// const obj1 = Symbol("id");

// const obj2 = {
//   "pro1" : "abc",
//   [obj1]: "value1",
//   [obj1]: "valu2"
// }

// const sym = Object.getOwnPropertySymbols(obj2)
// console.log(sym)

// let animal = {
//   eats: "a fjbef"
// };
   // create a new object with animal as a prototype
// console.log(Object.getPrototypeOf(animal))

// const arr = [1,2,3,4,5];//print 6,7,8,9,10 arrayyyyyyyyyyyyyyyyyyyyyyyyyyyyyyyy

// console.log(arr.map(e=>e+=5))

// for (let i =0; i<arr.length; i++){
//   arr[i] += 5;
// }
// console.log(arr);

// const arr = [, 2, null, 3, 4, undefined, 5]; //remove the first index, null and undefiend how to remove
// const res = arr.filter(e => e !== null && e !== undefined && e !=="");
// console.log(res);
// console.log(arr.filter(Boolean));
// const arr1 = [];
// for (i=0; i<arr.length;  i++){
//   if(arr[i]){
//     arr1.push(arr[i])
//   }
// }
// console.log(arr1)

// const arr1 = [1,2,3,3,4,5,5,6,6]//remove duplicates
// const arr2 = Array.from(new Set(arr1));
// console.log(arr2);

// function removeDuplicates(arr)
// {
//   return arr.filter((item, index) => arr.indexOf(item) === index);
// }
// console.log(removeDuplicates(arr1))

// const obj = {a:1, b:2, c:3}
// Object.preventExtensions(obj);
// obj.d = 4;
// console.log(obj)

// const obj = {};

// Object.defineProperty(obj, "name",{
//   value: "abc",
// })

// console.log(obj.name);

// Object.preventExtensions(obj)

// obj.name = "xyz"
// console.log(obj.name)

// const obj = {}
// console.log(Object.isExtensible(obj))

// Object.preventExtensions(obj);
// console.log(Object.isExtensible(obj))

// let obj={}

// Object.defineProperty(obj, "id", {
//   value: 123,
// });

// console.log(Object.getOwnPropertyDescriptor(obj, "id")); //doubtttttttttttttttt

// const obj = {
//   name: 'fjbf',
//   id: 120,
// }
// Object.seal(obj); //Object.seal()

// obj.age = 29;

// console.log(obj)
// console.log(obj.age)

// const obj = {
//   name: 'fjbfj',
//   age: 20,
// }

// Object.preventExtensions(obj);
// Object.seal(obj);

// console.log(obj)

// obj.age = 29;
// console.log(obj.age)

// const obj = {
//  name: "nibjea",
//   age:20,
// }
// const obj1 = Object.create(obj)
// console.log(Object.getPrototypeOf(obj1) === obj);
// Object.setPrototypeOf(obj1, {})

// // create an object
// const obj = {
//     name: "Jack",
//     address : "London",
//     age: 22,
// }

// // defines the key girlFriend and
// // sets enumerable as false
// Object.defineProperty(obj, "girlFriend", {
//     value: "Jessica",
//     enumerable : false,
// })

// // // prints the both enumerable and non-enumerable keys
// console.log(Object.getOwnPropertyNames(obj));

// // Output: [ 'name', 'address', 'age', 'girlFriend' ]

// // print only the enumerable keys of obj
// console.log(Object.keys(obj));

// // Output: [ 'name', 'address', 'age' ]


// const obj = {
//   name: 'John',
//   age: 30
// };

// // seal the obj object
// Object.seal(obj);

// // throws an error in strict mode
// // silently fails in non-strict mode
// obj.address = "New York";

// console.log(obj.address);
// // Output: undefined

// //isSealed()
// console.log(Object.isSealed(obj))

// const obj = {99: 'z', 69: 'd', 48: 'f', 19: 'x', 29: 'b', 39: 'c'}
// console.log(Object.keys(obj));
// console.log(Object.values(obj));

// const obj = {
//   a:2, b:1, c:3
// }

// const obj1 = Object.assign({a:20, d:4}, obj);
// console.log(obj1.a, obj1.d)

// const obj = {
//   name: 'xyz',
//   age: 20,
//  fun(){
//     console.log("Name: " + this.name)
//   }}
// const obj1 = Object.create(obj);

// obj1.fun();

// const obj = {}
// Object.defineProperties(obj, {
//   "name":{
//     value:"xyz",
//     value:"xyz1",
//     writable:true,
//   },
//   "id":{
//     value:20,
//     value:200,
//     writable: true,
//   }
// })

// console.log("Name: " + obj.name)
// console.log("id: " + obj.id)
// console.log("\nchanges property")
// obj.name = "nirav";
// console.log("Name: " + obj.name)

// obj.id = 3000;
// console.log("id: " + obj.id)

// const obj = {}

// Object.defineProperty(obj, "name",{
//   value: "new world",
//   writable: false,
// });

// console.log("Name: " + obj.name)
// console.log("\nchanges property")
// obj.name = "old world";
// console.log("Name: " + obj.name)

// const obj  = {
//   // name: "nirav",
//   // id: 20,
//   20: "b",
//   3: "c",
//   320:"a"
// }
// // console.log(Object.entries(obj.name))
// // console.log(Object.entries(obj.id)) //doubt
// console.log(Object.entries(obj) [2])

// const obj = {name:"ffsf"}

// const obj1 = Object.getPrototypeOf(obj)
// console.log(obj1)

//------------------------02-04-2024 object and its methods--------------

// const obj = {
//   name: "xyz",
//   age:20,
// }

// Object.freeze(obj);
// console.log(Object.isFrozen(obj))

// obj.name = "abc";
// obj.newname = "behfuebs"
// console.log(obj.name, obj.newname)

// const obj ={
//   name: "xyz",
//   age: 20,
// }

// console.log(Object.getOwnPropertyDescriptor(obj, "name"))
// console.log(Object.getOwnPropertyDescriptors(obj))

// const obj1 = Object.getOwnPropertyDescriptors(obj, "name" )
// console.log(obj1.enumerable)
// const obj1 = Object.getOwnPropertyDescriptor(obj )
// console.log(obj1.name.enumerable)

// const obj = {
//   name: "xyz",
//   age: 20,
// }

// Object.defineProperty(obj, 'prop1',{
//   value:20
// })

// console.log(Object.getOwnPropertyNames(obj))
// console.log(Object.keys(obj))
// console.log(Object.values(obj))

// const obj1 = Symbol("xyz1")
// const obj2 = Symbol("xyz2")

// const obj = {
//   "property ": "abc",
//   [obj1]: "value1",
//   [obj2]: "value2"
// }
// const sym = Object.getOwnPropertySymbols(obj)

// console.log(sym)

// const obj = {
//   name: "xyz",
//   age: 20,
// }
// const obj2 = {
//   name: "xyz",
//   age: 20,

// }

// const obj1 = Object.getPrototypeOf( obj)
// console.log(obj1)

// console.log(Object.is(obj.age, obj2.age))

//--------02-04-2024 Date, math, numbers and boolean objects and its methods-------

// const date = new Date();
// console.log(date.getFullYear()+" "+date.getMonth()+" "+date.getDate()+" "+date.getHours()+" "+date.getMinutes()+" "+date.getSeconds()+" "+date.getMilliseconds())

// var date1=new Date();
// console.log("Today's day: "+date1.getTime());
// date1.setMonth(3)
// console.log("Today's hour: "+date1.getHours());

// var today=new Date();
// var h=today.getHours();
// var m=today.getMinutes();
// var s=today.getSeconds();
// console.log("Todays time: "+ " "+ h+":"+m+":"+s)

// var date=new Date();
// var day=date.getDate();
// var month=date.getMonth()+1;
// var year=date.getFullYear();
// console.log("Date is:"+day+"/"+month+"/"+year)

// var date=new Date();
// console.log(date);
// console.log(date.toDateString());

// const d = new Date();
// d.setMonth(5)
// console.log(d.getMonth());

// console.log(Math.sqrt(16))

// console.log(Number.isFinite(NaN, Infinity, -Infinity))

// var xyz = new Number(10)
// const xyz1 = -10.4;
// console.log(isFinite(xyz))
// console.log(Number.isInteger(xyz1))

// const obj =98.6721
// console.log(obj.toExponential())

// const bool = false;
// console.log(bool + " " + typeof bool)
// var res1 = bool.toString();
// var res2 = bool.valueOf();
// console.log(res1+" " +typeof res1)
// console.log(res2)

// let obj = {
//     'Students': [{
//         "name": "Raj",
//         "Age": "15",
//         "RollNumber": "123",
//         "Marks": "99",

//     }, {
//         "name": "Aman",
//         "Age": "14",
//         "RollNumber": "223",
//         "Marks": "69",
//     },
//     {
//         "name": "Vivek",
//         "Age": "13",
//         "RollNumber": "253",
//         "Marks": "89",
//     },
//     ]
// };

// const obj1 = obj.Students;
// console.log(obj1.map(e=>e.name))

// const data = [
//   { roll_no: "1", name: "prerna", moNo: "9874152630" },
//   { roll_no: "2", name: "mansi", moNo: "963251425" },
//   { roll_no: "3", name: "geeta", moNo: "7825621123" },
// ];

// const res = data;
// console.log(Array.from(data.name))
// const res = Array.from(data.name)
// console.log(res)

// data.forEach(data =>{
//   console.log(data)
// })

// const res = data.values();
// for (var i of res){
//   console.log(i)
// }

// const res = data.every(e=>e.moNo)
// console.log(res)


// const res = data;
// const fnd = res.find(e=> e.name == "prerna")
// console.log(fnd.name)//find perticuler data 
// // const re1 = Array.from(fnd.name)
// // console.log(re1)

// const res = data.toString()
// data.forEach(res =>{
//   console.log(res.name)
// });

// console.log(typeof res)

//

// var arr=["AngularJS","Node.js","JQuery","Bootstrap", "javascript"]
// const res = arr.entries();
// for (var i of res)
// {
//   console.log(i)
// }

// for(i=0; i<data.length; i++){
//   console.log(data[i].moNo)
// }

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, , 10]

// // for(i=0; i<arr.length; i++){
// //   console.log(i)
// // }

// arr.forEach(elm => {
//   console.log(elm)
// })

// const  arr = [1,2,4,55,null, , 3]
// for(let i=0; i<arr.length;i++){
//   console.log(arr[i])
// }

// arr.forEach(e=>{
//   console.log(e)
// })

//---------------04-04-2024------------------------------------------------
// const data = [
//   { roll_no: "1", name: "prerna", moNo: "9874152630" },
//   { roll_no: "2", name: "mansi", moNo: "963251425" },
//   { roll_no: "3", name: "geeta", moNo: "7825621123" },
// ];


// for(i=0;i<data.length;i++)
//   {
//     console.log(data[i])
//   }

// var arr=["AngularJS","Node.js","JQuery","Bootstrap", "javascript"]
// var res = arr.copyWithin()
// console.log(res)

// let cars = [
//   {
//     color: "purple",
//     type: "minivan",
//     capacity: 7,
//   },
//   {
//     color: "red",
//     type: "station wagon",
//     capacity: 5,
//   },
// ];

// let car = {
//   color: "red",
//   type: "cabrio",
//   capacity: 2,
// };

// cars.unshift(car)//unshift
// console.log(cars)

// var res = cars.splice(1,0,car);
// console.log(cars)

// let car1 = cars.find(e=>e.color === "red" && e.type === "station wagon")
// console.log(car1)

// let car1 = cars.filter((e) => e.color === "red");
// console.log(car1);


// let size = cars.map((car) => {
//   if(car.capacity<=2){
//     return "small";
//   }
//   if(car.capacity<=5){
//     return "mid"
//   }
//   if(car.capacity<=7){
//     return "big"
//   }
// });
// console.log(size);



// var obj = {
//     webSiteName: 'StackOverFlow',
//     find: 'anything',
//     onDays: ['sun'     // Object "obj" contains array "onDays" 
//                ,'mon',
//                'tue',
//                'wed',
//                'thu',
//                'fri',
//                'sat',
//                 {name : "jack", age : 34},
//                  // array "onDays"contains array object "manyNames"
//                 {manyNames : ["Narayan", "Payal", "Suraj"]}, 
             
//               ]
//    };
   
   // const res = obj.onDays;
   // console.log(res[obj.onDays.length - 1].manyNames);
   
   // const obj1 = obj.onDays;
   // for (let i in obj1){
   //     console.log(obj1[i].manyNames)
   //   }
   
   
   // for (let i in obj){
   //   console.log(obj[i])
   // }
   
   // const obj1 = obj.onDays; //anssssss
   // const res = obj1.filter(e=>{
   //   console.log(e.manyNames)
   // })
   
   // const obj1 = obj.onDays; //anssssss
   // const res = obj1.filter(e=>e.manyNames).map(e=>e.manyNames)
   // console.log(res)
   
   // const obj1 = obj.onDays;
   // console.log( obj1.map((e)=>e.manyNames).find((e)=> e) )
   
   // console.log(res.filter(e=>e.manyNames))
   
   // const obj1 = obj.onDays;
   // console.log(obj1)
   
   // console.log( obj.onDays[0])
   
   // console.log(obj1.filter(e=>{ //ans
   //   if(e.name === "jack"){
   //     return e.name;
   //   }
   // } ))
   
   // for (let keys in obj){
   //   console.log(keys.manyNames)
   // }
   
   
   // const a = [[2,3,4,5],[2,3,4]]
   // // const b = a.flat()
   // // console.log(b)
   
   // // const res = b.map(e=>{
   // //   return e * 2
   // // })
   // // console.log(res)
   
   // // const res = a.flatMap(x=>x.map(e=>e*2)) 
   // // console.log(res)
   
   
   // const arr = [1,2,99,56,78,9]
   // const arr1 = arr.entries();
   
   // for(var e of arr1){
   //   console.log(e)
   // }
   
   
   // const res = Array.from(arr)
   // console.log(res)
   
   // console.log(arr.find(e=>e))//return first element found on array
   
   // const res = arr.reduce(function(a,b){
   //   return a+b;
   // })
   // console.log(res)
   
   // for (let i in arr){
   //   console.log(arr[i])
   // }
   
   // for(let i of arr){
   //   console.log(i)
   // }
   
   // const res = arr.includes(2)
   // console.log(res)
   
   // arr.forEach(e=>console.log(e+1))
   
   // console.log(arr.indexOf(2))
   
   // const res = Array.isArray(arr)
   // console.log(res)
   
   // const res = arr.join(" ");
   // console.log(res)
   
   // const res = Array.of("xyz")
   // // console.log(res)
   
   // const re1 = arr.splice(1,0, res);
   // console.log(arr)
   
   // console.log(arr.some(e=>e>5))//any elm pass the test return true
   
   // const a = [1,2,3,4,5,6,7,8,9]
   
   // let aim = 0;
   // while(aim<10)
   // {
   //   console.log(aim)
   //   aim++;
   // }
   
   // console.log(arr.sort())
   
   // const res = [24,60]
   
   // console.log(res.splice(0,3, arr))
   
   // let object =[ { 1: "prerna", 3: "mansi", 5: "geeta" } ];
   // const obj= object.find(e=>e.name)
   // console.log(obj.1)
   // const res = object;
   // console.log(res.find(e=> e)
   
   
   
   
   // const data = [
   //   { roll_no: "1", name: "prerna", moNo: "9874152630",hobby:false},
   //   { roll_no: "2", name: "mansi", moNo: "963251425",hobby:true},
   //   { roll_no: "3", name: "geeta", moNo: "7825621123" ,hobby:false},
   // ];
   
   
   // const data1 = { roll_no: "4", name: "meet", moNo: "9874152630" }
   
   // // const arr = data;
   // data.push( data1)
   // console.log(data)
   
   // const dataId = 2;
   
   // console.log(data.filter(e=>(e.roll_no == dataId)))
   
   // const res = data.find(e=>(e.hobby == true))//map, find, some, every
   // console.log(res)
   
   // data.forEach(e=>{
   //  console.log(e)
   // })
   
   
   // data.forEach(e=>{
   //   if(e.roll_no==dataId){
   //     console.log(e)
   //   }
   // })
   
   // const res = data.find(e=>e.roll_no == dataId)
   // console.log(res)
   
   // const a = [...data,data1]
   // console.log(a)
   
   // const arr = [1,2,3,4,5,6,7,8,9]
   // arr.splice(0,1, "xyz")
   // console.log(arr)
   
   // const ressss = arr.split(1)
   // console.log(ressss)
   
   // const arr34 = [
   //   { name: "cat", id: "20" },
   //   { name: "dog", id: "50" },
   //   { name: "deer", id: "40" },
   // ];
   // console.log("with : ",arr34.with(2, { name: "bee", id: "90" }))
   
   
   // const arr27 = [
   //     { name: "cat", id: "90" },
   //     { name: "dog", id: "50" },
   //     { name: "deer", id: "40" },
   //   ];
   
   // console.log("sort : ",arr27.sort());
   
   
   // const arr41 = [
   //   { name: "cat", id: "20" },
   //   { name: "dog", id: "50" },
   //   { name: "deer", id: "40" },
   // ];
   // const spl = arr41.toSpliced(0, 1)
   // console.log("tosplice : ", spl)
   
   // const arrr = [1,2,3,4,5]
   // console.log(arrr.copyWithin(0, 2,3))
   
   // var arr=["AngularJS","Node.js","JQuery","Bootstrap"]
   // // place at 0th position, the element between 1st and 2nd position.
   // var result=arr.copyWithin(3,2);
   // console.log(result)
   
   // const cat = [1,2,3,4,5,6,7,8,9]
   // console.log(cat.filter(e=>(e%2==0)))
   // console.log(cat.filter(e=>(e%2!==0)))
   
   // const obj = {
   //   name: "xyz",
   //   id: 20
   // }
   
   // const res = Object.getPrototypeOf(obj)
   // console.log(res)
   
   // const obj = {
//   name: 'John',
//   age: 30,
// method: function() {
//     console.log(this.name+this.age);
//   }
// }

// const obj2 = {
//   name:"nirav",
//   age:20,
  
// }

// console.log(obj.method.call(obj2))


// function fun(name, id){
//   this.name = name;
//   this.id = id;
// }
// function fun1(name, id){
//   fun.call(this,name,id)
// }
// console.log(new fun1("nirav", 20).name)

// function fun(name, id){
//   console.log(`Hello, ${name}`)
// }

// fun("nirav", 20){
//   this.name = name;
// }

// const y = "1223"
// var url = ()=>{
//   const y = "123";
//   console.log(y)
// }
// console.log(y)