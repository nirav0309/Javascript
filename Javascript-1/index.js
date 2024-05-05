// const, let, var
// const number = 50 //global scope

// // const { allowedNodeEnvironmentFlags } = require("process");
// // const { arrayBuffer } = require("stream/consumers");

// // const { write } = require("fs");

// function print() {
//   const square = number * number
//    let largerNumber = 80 //local scope
//   if (number < 60) {

//     const anotherLargerNumber = 100 // block scope

//     console.log(square)

//   }
//   console.log(largerNumber)

//   console.log(anotherLargerNumber)
// }

// print()

// let x = 10;
// console.log(++x);
// console.log(x++);
// console.log(x);

// let xyz = "b" + "a" + + "a" + "a";
// let a = xyz.toLowerCase();
// console.log(a);

// var number = 50

// function print() {
//   var square = number * number
//   console.log(square)
// }

// console.log(number) // 50

// print()

// const shape = {
//   radius: 10,
//   diameter() {
//     return this.radius * 2;
//   },
//   perimeter: () => 2 * Math.PI * this.radius,
// };

// console.log(shape.diameter());
// console.log(shape.perimeter());

// var value=50;//global variable
// function a(){
// alert(value);
// }
// function b(){
// alert(value);
// }

// a();

// let  x = 10;
// // Here x is 10

// {
//   let x = 2;
//   // Here x is 2

// }
// console.log(x);
//  let x = 10 ;
// let y = 10;

// let z = x&&y;
// console.log(z);

// const x = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const a = [x, x, x, x, x];

// for (let i = 0, j = 9; i <= j; i++, j--) {
//   //                              ^
//   console.log(`a[${i}][${j}]= ${a[i][j]}`);
// }

// function checkOddOrEven(n) {
//     if(n&1 == 1) {
//         return "Number is odd";
//     }
//     return "Number is even";
// }

// console.log(checkOddOrEven(123));
// console.log(checkOddOrEven(246));

// let a = 9;
// let b = "1";
// let c = 9

// console.log(a==b);
// console.log(b==c);
// console.log(a==c);

// let a = 1;
// let b = "1";
// let c = true

// console.log(a!=b);
// console.log(b!=c);
// console.log(a!=c);

// const number = 50;

// function print(){

//   let sqr = number * number;

//   if (number < 60){

//     var newnumber = 80;
//     const largenumber = 100;

//    console.log(sqr);
//   }

//    console.log(newnumber);
//   console.log(largenumber);
// }
// print()

// let a = 0;
// let b="1";
// let c = true;
// let d = null;
// let e = undefined;

// console.log(a!==b);
// console.log(a!==c);
// console.log(d!==e);

// console.log(3n>2);
// console.log(5n>4);
// console.log(undefined>null);
// console.log(null>undefined)

// console.log("3">=1);
// console.log("2">=3);
// console.log(true>=false);
// console.log("3">="2");
// console.log(3>=2);

// console.log("3"<4);
// console.log("2"<3);
// console.log(true<false);

// let x = 10;
// console.log(++x);
// console.log(x);

// function a() {
//   console.log("welcome")
//   return true;
// }
// function b() {
//   console.log("Hello")
//   return true;
// }
// console.log(a() || b());
// let a = 1;
// let b = 2;
// let c = new String("Hello");
// let d = new String("Hello");
// let e = "Hello";
// console.log(typeof(c))
// console.log(a!=b);
// console.log(c!==d);
// console.log(c!=e);

// console.log(!true);
// console.log(!false);
// console.log(!"20");
// console.log(!"");
// console.log(!null);

// let a = 10;
// a += 20;
// console.log(a)

// console.log(!"hello");

// let grade = "b";
// let result;
// switch (grade) {
//   case "a":
//     result = "a grade";
//     break;

//   case "c":
//     result = "b grade";
//     break;

//   default:
//     result = "no grade";

// }
//  console.log(result);

// JavaScript program to illustrate for loop
// let x;

// for loop begins when x=2
// and runs till x <=4
// for (x = 0; x <= 4; x++) {
//   console.log("Value of x:" + x);
// }

// console.log(12>>2)
// var xyz;
// console.log(xyz);

// console.log(xyz);

// let text = "";
// let i = 0;
// while (i < 10) {
//   text += "The number is " + i;
//   i++;
// }
// console.log(text);

// let c = { greeting: 'Hey!' };
// let d;

// d = c;
// c.greeting = 'Hello';
// console.log(d.greeting);

// let xyz = {id:100, name:"nirav"};
// console.log(xyz.id+" "+xyz.name);

// creating an object constructor
// and assigning values to it

/*object*/
// const obj1 = { a: 1 };

// // creating a target object and copying values and
// // properties to it using object.assign() method
// // Here, obj1 is the source object
// const new_obj = Object.assign({}, obj1);

// // Displaying the target object
// console.log(new_obj);

// function fruits() {
//   this.name = 'fruit';
//   this.season = 'winter';
// }

// function apple(){
//   fruits.call(this);
// }
//  apple.prototype = Object.create(fruits.prototype);
// const app = new apple();
// console.log(app.name, app.season);
// console.log(app.season);

// var arr=["AngularJS","Node.js","JQuery","Bootstrap"]
// // place at 0th position, the element between 1st and 2nd position.
// var result=arr.copyWithin(1,2,3);

// console.log(result);

// var arr = [1,2,3];
// function wrap(){
// return wrapp.apply(null, arr);

// };
// console.log(wrapp);

// var arr=['John','Michael','Embrose','Herry','Lewis'];
// var itr=arr.entries();
// console.log("After applying the entries method:");
// for(var e of itr) //for loop using var.
// {
//   console.log(e);
// }

// var number = [ 12, 14, 19];
// var num = number.entries();
// for(var e of num){
//   console.log(e);
// }

// var num = [20, 40, 50, 40, 60];
// function check(value){
//   return value > 20;
// }
// console.log(num.every(check)) //every give boolean value in return
// function num(element){
//   return element > 10;
// }

// let a = [11,22,33,44].every(num)
// console.log(a);

// var name = [3,5,9,8];
// let num = name.copyWithin(1,2,3);
// console.log(num);

// var arr = [1,2,3,4,5,6]
// var res = arr.map(x=>x*2);
// console.log(res);

/*---map---*/

// var arr = [1,2,3,4,5,6,7]
// arr.map(e => console.log(e));

// var arr = [30,30,30,40,50];
// var num = arr.map(myfunction);
// function myfunction(num){
//   return num*2;
// }
// console.log(num)

// for (var e of num){
//   console.log(e);
// }

// var cars = {name:'honda', model:'city'};
// function newcars(say){
//   console.log(say+' '+ this.name +' '+this.model);
// }
// newcars.apply(cars, ['my new car']);

// var animal = {name:'v', breed:'dog'};
// function say(greet){
//   console.log(greet+' '+this.name +' '+this.breed);
// }
// var ani = say.bind(animal, 'hello,');
// ani();

// var arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr.map((e) => e*5));

/*---date:6 26-03-2024----*/

// var arr = [1,2,3,4,5,6,7,8,9,10];
// var res = arr.fill(15, 1,5);
// console.log(res);

// var arr = Array.from('12345');
// console.log(arr);

// console.log(Array.from('hello world'))

// console.log(Array.from({length:9}, (v,i) => i));

// var filt = [1,2,3,4,5,6,7,8,9,10];
// var filtermethod = filt.filter(x=>x>5);
// console.log(filtermethod);
// console.log(filt.filter(x=>x>9))

// function test(value){
//   return value > 5
// }
// var res = [1,2,3,4,5,6,7,8,9,10];
// console.log(res.filter(test));

// var test = ['java', 'javascript', 'node js'];
// console.log(test.fill('python', 0));

// var findmethod = [1,2,3,4,6,6,6,8,9,10];
// var res = findmethod.find(x=>x>6)
// var res1 = findmethod.findIndex(x=>x>5)
// console.log(res);
// console.log(res1);

// const foreachmethod = ['a', 'b', 'c'];
// foreachmethod.forEach(e => console.log(e));

// var incMethod = ['node js', 'python', 'java'];
// console.log(incMethod.includes('node js', 2));

// var arrindexof=["C","C","Python","C","Java"];
// var result= arrindexof.indexOf("C");
// console.log(result);

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(Array.isArray((arr)));

// var joinmethod = ['node js', 'python', 'java'];
// var res = joinmethod.join(' ');
// console.log(res);

// var keysmethod = ['node js', 'python', 'java']
// var iterator = keysmethod.keys();;
// console.log(iterator);

// for (let e of iterator){
//   console.log(e);
// }

// var valuesmethod = ['node js', 'python', 'java']
//   var iterator = valuesmethod.values();;
// console.log(iterator);

// for (let e of iterator){
//   console.log(e);
// }

// var popmethod = ['node js', 'python', 'java']
// console.log(popmethod.pop());

// var pushmethod = ['node js', 'python', 'java']
// pushmethod.push("js")
// console.log(pushmethod);

// var reversmethod = ['node js', 'python', 'java'];
// console.log(reversmethod.reverse());

// var reducermethod = [10,2,30];
// var res = reducermethod.reduce((a,b)=>a+b,0);
// console.log(res);

// var sm = [10,20,40,50];
// function check(value){
//   return value > 90;
// }
// var res = sm.some(check);
// console.log(res);

// var fil = ("this is smth");
// console.log(Array.from(fil));

// console.log(Array.from('hello  world'));

// var filt = [1,2,3,4,5,6,7,8,9,10];
// console.log(filt.filter((e)=>e>4));

// var srt = [1,20,3,4,5,6,7,8,9,100,0];
// var res = srt.sort();
// console.log(res);// we can also find index of sorted array res[2] it will return index of that sorted array

// var srt = [1,20,3,4,5,6,7,8,9];
// var res = srt.shift();//remmove first ele and return that ele
// console.log(res);
// console.log(srt);

// var srt = [1,2,20,3,4,5,6,7,8,9];
// var res = srt.unshift(1);//adds one or more elm at the begining of the array and return the updated array
// console.log(srt);
// console.log(res); //array length

// var srt = [1,20,3,4,5,6,7,8,9];
// var res = srt.sort();
// console.log(res);

// var localestr = ['node js', 'python', 'java'];
// console.log(localestr.toLocaleString())

// const arr = new Date();
// const str = arr.toString(); //UTC is the Coordinated Universal Time.
// const rtr = arr.toLocaleString();
// console.log(str);
// console.log(rtr);

// var d = [10203040];
// console.log(d.toLocaleString()); //"04.09.2016, 15:42:44"
// console.log(d.toString());

// var arr = [1,2,3,45,6,7];
// console.log(arr.filter((e)=>e>6));

// var str = ('hello');
// console.log(Array.from(str));

// console.log(Array.of(7))

// var arr = [1,2,3,4,5,6,7,8,9,10];
// console.log(arr.filter((e)=>e>4));

// var arr = [1,2,3,4,5];
// var res = arr.filter ((e)=>e>3);
// console.log(res)

// var arr=[2,4,6];
// var result=arr.map(x=>x*3);
// console.log(result);

/*-----------------27-03-2024, practice js array-----------------------------*/

// diff between finfindex and indexof, callback function and value
// var arr = [11,34,55, 20,40];
// console.log(arr.find(e=>e==11)); //return the value of elm
// console.log(arr.findIndex(e=>e==55));//return the index of elm
// console.log(arr.indexOf(20));//return the index value of elm

// var arr1 = ['js', 'java', 'pyt']
// console.log(arr1.lastIndexOf('java'));//return index value of elm, searching from back

// var arr2 = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr2.includes(2));//incliuds

// console.log(Array.isArray(arr2))//isArray

// console.log(arr2.fill(10,3));//fill

// var arr3 = ('hello world')
// console.log(Array.from(arr3));//from

// console.log(arr2.filter((e)=>e>3))//filter

// var arr4 = ['hello world', 'java', 'js']
// var res = arr4.join('-*-'); //join
// console.log(res)

// var itr = arr4.keys();//keys
// console.log(itr);
// for(let e of itr){
//   console.log(e);
// }

// var itr1 = arr4.values();//values
// console.log(itr1);
// for(let e of itr1){
//   console.log(e);
// }

// console.log(arr4.pop());//pop

// var res1 = arr4.push("python")//push
// console.log(arr4)

// console.log(arr4.reverse());//reverse

// console.log(arr4.shift());//shift

// var res2 = arr4.unshift("node js");//unshift
// console.log(arr4);

// console.log(arr4.sort());//sort

// console.log(arr4.slice(1,3));//slice

// const arr5 = [10000]
// console.log(arr5.toString());//tostring

// console.log(arr5.toLocaleString());//tolocalstring

/*---------------27-03-2024 strings and methods--------------------------------*/

// var str = new String("hello");
// var str1 = new String(" world")
// console.log(str.charAt(2));//charAt return char at specified index value

// console.log(str.charCodeAt(2));//charcodeat, return chr code of specified index value

// console.log(str.concat(str1))//concat, 1 or more strings

// var str3 = new String("Javatpoint Javascript Java");
// console.log(str3.indexOf("Java", 5));//indexof, for string like "Java"

// console.log(str3.indexOf("a"));//indexof, for char like "a"
// console.log(str3.lastIndexOf("a",20));//lastindexof, for char like "a"

// console.log(str3.lastIndexOf("Java"));//lastindexof, for string like "Java"

// var str4 = ("Javatpoint scripting. Scripting lang ");//syntax: string.search(regexp)
// console.log(str4.search("scripting"));//search, return the position of search char

// console.log(str4.search("Scripting"));//search is case sensitive
// console.log(str4.search(/Scripting/i));//we can ignoore case sensitive buy using i flag shown in ex.

// var str5 = "javatpoint java javascript"; //syntax: string.match(regexp);
// console.log(str5.match("java"));//match, return the matched regexp.
// console.log(str5.match(/java/g));//global flag return all the matching regexp.
// console.log(str5.match(/Java/g));//if no match found it will return null.
// console.log(str5.match(/Java/gi));//we can also ignore case sensitive by using i flag shown in ex.

// console.log(str5.replace("java", "python"));//replace only 1 string.
// console.log(str5.replace(/java/g, "python"));//replace all string using global flag.

// console.log(str5.substr(5, 10)); //substr,fetch the string based on starting position and length. first 5 is starting position and sec 5 is length, mean only 5 char is allow to be fetch.

// console.log(str5.substring(5, 10));

// var str = ('this is string');
// console.log(str.substr(4,7));
// console.log(str.substring(8,4));//the diff between substring and slice is if the start index is greater than end index then it will return empty string. and in substring start index is greater than end index then it will swapp the index and return the string from start index to end index.
// console.log(str.slice(4,1));

// var str6 = ("JAVASCRIPT js node js");
// console.log(str6.split(" "))

// var str7 =("box fox nox. inox world java script nodejs")
// console.log(str7.split(" ", 4));//split the word (" ")white space, we can also add the limit of the word.
// console.log(str7.split(""));//split the charcter ("")
//   var str = ("node js java javascript ")
// console.log(str.indexOf("java", 14))

// var web="Learn JavaScript on Javatpoint";

// console.log(web.substring(5,0));
// console.log(web.slice(5,0));

// var s1 = new String ("hello world!");
// console.log(s1.split(""));//split the string into array of substring using empty string.

// var s2 = new String ("   hello world!   ");
// var s3 = s2.trim();//trim,  the string.
// console.log(s3);

/*---------------28-03-2024 objects and methods--------------------------------*/

// //object literal
// var obj = {name:"ice", breed:"bulldog", color:"black"}
// console.log(obj.name+" "+obj.breed+" "+obj.color);

// //object instance
// var obj1 = new Object();
// obj1.name="winnie";
// obj1.breed="germen shapherd";
// obj1.color="gray";
// console.log(obj1.name+" "+obj1.breed+" "+obj1.color);

// //object constructor
// function obj3(name, breed, color){
//   this.name = name;
//   this.breed = breed;
//   this.color = color;

// this.changeColor = changeColor;
// function changeColor(otherColor){
//   this.color = otherColor;
// }
// }
// e = new obj3("brace", "poodle", "white plane");
// console.log(e.name+" "+e.breed+" "+e.color);

// e.changeColor("lightgray");
// console.log(e.name+" "+e.breed+" "+e.color);

// //syntax: Object.assing(tager, source);
// const obj1 = { a: 1, b: 2, c: 3 };
// const obj2 = { g: 10, h: 20, j: 30 };

// const ob1 = Object.assign({c:100, d:300},obj1);
// const ob2 = Object.assign({g:3, i:200},obj2);

// console.log(ob1.c , ob1.d);
// console.log(ob2.g, ob2.i);

// //syntax: Object.assing(tager, source);
// const obj1 = {a:12, b:15, c:23 };
// const obj2 = {g:22, h:25, j:30 }

// const prop = Object.assign({c:1, d:55}, obj1);
// const prop1 = Object.assign({g:25, i:59}, obj2);//we cannot over ride the value if already declared

// console.log(prop.c, prop.d);
// console.log(prop1.g, prop1.i);

//Object.create(prototype [, properties]);-------------
// const people = {
// intro: function()
// {
//   console.log(`My name is ${this.name}. And I am ${this.age} years old.`);
// //   console.log(this.name + " " + this.age)
//   }
// };

// const xyz = Object.create(people);
// xyz.name = "bruce";
// xyz.age = 35;
// xyz.intro();

//----------------------------
// function frt(){
//   this.name = "mango";
// }
// function fun(){
//   frt.call(this);
// }

// fun.prototype = Object.create(frt.prototype);
// const obj2 = new fun();
// console.log(obj2.name)

//-------------------
// function frt(){
//   this.name = "mango";
//   this.season = "summer";
// }
// function fun(){
//   frt.call(this);
// }

// fun.prototype = Object.create(frt.prototype);
// const obj3 = new fun();
// console.log(obj3.name, obj3.season);
// console.log(obj3.name)

// function xyz(name, color){
//   this.name=name;
//   this.color=color;

// this.changeColor = changeColor;

// function changeColor(otherColor){
//   this.color = otherColor;
// }
// }

// const obj = new xyz("mango", "yellow");
// console.log(obj.name+" "+obj.color);

// obj.changeColor("red");
// console.log(obj.name+" "+obj.color);

// const app = new Object();
// app.name = "xyz";
// app.color = "red";

// console.log(app.name+" "+app.color)

// const object1 = {};
// Object.defineProperties(object1, {
//   property:{
//     value: "xyz",
//     value: "nirav",
//   },
// });
// console.log(object1.property);

// let obj1 = {};
// Object.defineProperties(obj1,{
//   "name":{
//     value: "xyz",
//     writable: true,
//   },
//   "id":{
//     value:20,
//     writable: false
//   }
// });
// console.log("Original Properties:");
// console.log("prop1: " + obj1.name);
// console.log("prop1: " + obj1.id);

// console.log("\nchanged propertie:");
// obj1.name = "nirav";
// console.log("prop1: " + obj1.name);

// obj1.id = 300;
// console.log("prop1: " + obj1.id);

// //------------------Object.defineProperties()-----------------
// const object = {};
// Object.defineProperties(object,{
//   "name":{
//     value:"xyz",
//     writable:true,
//   },
//   "number":{
//     value:20,
//     writable:false,
//   },
// });
// // console.log("combined both properties: ")
// // console.log(object.name, object.number);

// console.log("before changes: ")
// console.log("name: "+""+object.name);
// console.log("number: "+""+object.number);

// console.log("\nafter changes: ")
// object.name = "nirav";
// console.log("name: "+object.name);

// object.number = "2000";
// console.log("number: "+object.number);

/*---------------29-03-2024 objects and methods--------------------------------*/

// const app = {a:1, b:2, c:3}

// const obj =Object.assign({a:1, d:5}, app);
// console.log(obj.a, obj.d)

// const app = {
//   name : "xyz",
//   id : 20,
//   color : "red",

// // display(){
// //   console.log("Name: " + this.name + " " + "Id: " + this.id + " " + "Color: " + this.color);
// // }
// };
// const obj = Object.create(app);
// obj.name ="nirav";
// console.log(obj.name, obj.color, obj.id)

// const obj = {
//   name: "xyz",
//   id: 20,
//   enumerable : true,
//   writable: true,

//   fun(){
//     console.log("Name: " + this.name);
//   }
// };
// const app = Object.create(obj);
// app.name = "nirav";
// app.fun();

// const obj = new Object();
// obj.name = "xyz";
// obj.color = "reds";

// console.log(obj.name + " " + obj.color)

// function xyz(name, color){
//   this.name = name;
//   this.color = color;

// this.changeName = changeName;
// function changeName(otherName){
//   this.name = otherName;
// }
// }
// const obj = new xyz("xyz", "red");
// console.log(obj.name, obj.color)

// obj.changeName ("nirav");
// console.log(obj.name, obj.color);

// const obj = {
//   name: "xyz",
//   id: 20,
//    function(){
//     console.log("Name: " + this.name);
//   }
// }
// const obj2 = Object.create(obj);
// console.log(obj2.name+" "+obj2.id);
// obj2.name = "nirav";
// console.log(obj2.name+" "+obj2.id);

// const obj = {};
// Object.defineProperties(obj, {
//   name:{
//     value: "xyz",
//     writable: true,
//     value:"xyzzzzz",
//   },
//   id:{
//     value: 20,
//     value: 30,
//     writable: true,
//   },
// });
// console.log("Original Properties: ");
// console.log("Name: " + obj.name);
// console.log("Id: " + obj.id);

// console.log("\nChanged Properties: ");
// obj.name = "nirav";
// console.log("Name: "+ obj.name);

// obj.id = 35;
// console.log("Id: " + obj.id);

// const obj = {};

// Object.defineProperties(obj,{
//   'name': {
//     value:2,
//     Writable: true,
//   },

// })
// console.log(obj.name);


// const obj = {};
// Object.defineProperty(obj, "name", {
//   value: 2,
//   Writable: true,
// });
// console.log(obj.name);


// const obj = {name:"nirav", id:200} //Object.entries()
// console.log(Object.entries(obj))
// console.log(Object.entries(obj.name))

// const obj1 = {100:"array", 20:"array",30:"array"}
// console.log(Object.entries(obj1))
// console.log(Object.entries(obj1.id))
// console.log(Object.entries(obj1.name))

// const arr = [1,2,3,4,5,6,7,8,9,10,10]

// function fun(a,b){
//   return a+b
// }
// console.log(arr.reduce(fun))//reduce array method

// const obj = {
//   name: "xyz",
//   id: 20,
//   color: "red",
// }
// // freeze the obj object
// const freeze = Object.freeze(obj);  //Object.freeze()

// // changes will fail silently
// obj.name = "xyz1";
// console.log(obj);

// // cannot add a new property
// obj.new_name = "hareira";
// console.log(obj.new_name);

// console.log(Math.random().toFixed(2))
// console.log(Math.random().toPrecision(3))

// const obj = {name:'nirav', age:20, color:'red'}
// console.log(Object.getPrototypeOf(obj))

//string interpolation
// const a = 5;
// const b = 10;
// console.log(`Fifteen is ${a + b} and
// not ${2 * a + b}.`); //if line break the output will be in new line.

// const arr = [ 1,2,3,4,5,6,7,8,9,10]
// const res = arr.map((e) => (e % 2 == 0 ? `Even :${e}` : `Odd :${e}`));
// console.log(res);

// const a = 5000;
// const res = a.toString()
// console.log(res, typeof(res))

// const arr = ["xyz", "xyz1", "xyz2"]
// arr.splice(1,1, "xyz3")
// console.log(arr)
