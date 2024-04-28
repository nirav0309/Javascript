//instead this we can use => ElementById
// function xyz(){
//     var var1 = document.form1.name.value;
//     confirm("welcome: " + var1)

//     var span = document.getElementById("span").innerHTML = var1;
// }

//document and getElementById
// function xyz(){
//    var num =  document.getElementById('msg').value;
//    alert(num*num*num);
// };

// var el = document.getELementsByClassName("xyz");
// document.writeln(`on calling el, it will return array like object${el}`); // `` this back ticks know as a string interpolation

/*------------------dom 8-4-2024---------------*/
// //Element By Id
// function xyz(){
//     var i = document.getElementById("a").innerText = "xyzzzzz"
//    document.write(i);
// }

// //Elements By Class Name
// function xyz(){
//     var i = document.getElementsByClassName("a").innerText = "xyzzzzz"
//     document.write(i)
// }

// //Elements By Name
// function xyz(){
//     var i = document.getElementsByName("xyz");
//     alert("Total: "+ i.length)
// }

//Elements By Tag Name
// function xyz(){
//     var i = document.getElementsByTagName("p")
//     alert("Total: " + i.length)
// }

// //innerHTML
// var xyz1 = 1;
// function xyz(){
//    var i = "name: <input type='text'></input>"
// //    document.getElementById("msg").innerHTML = i
// if (xyz1) {
//     document.getElementById("msg").innerHTML = i;
//     xyz1 = 0;
//   } else {
//     document.getElementById("msg").innerHTML ="" ;
//     xyz1 = 1;
//   }
// }

// //innerText
//   var i = "name: <input type='text'></input>";
// var i = document.getElementById("msg")
// i.innerHTML = "New element"

// const example = document.getElementById("example");
// const text = example.text;
// console.log(text);
// document.getElementById("example").innerText = "hello"
 
/*------------------9-4-2024---------------*/
//form validation
// function formValidation() {
//   const name = document.myform.name.value;
//   const password = document.myform.password.value;
//   const confirmPsw = document.myform.cpassword.value;
//   const number = document.myform.number.value;
//   // const status = false;

//   if (name == null || name == "") {
//     // alert("Name can't be blank");
//     document.getElementById("xyz1").innerHTML = "Name can't be blank";
//     return false;
  
//   } else if (password.length < 4) {
//     // alert("Password must contain 4 char");
//     document.getElementById("xyz2").innerHTML =" Password must contain at  least 4 characters";
//     return false;
//   }
//   else if(password !== confirmPsw){
//     // alert('Passwords do not match');
//     document.getElementById("xyz3").innerHTML =  "Password do not match";
//     return false;
//   }
//   else if(isNaN(number)){
//     // alert("Number is invalid!");
//     document.getElementById("xyz4").innerHTML =  "Please enter a valid number";
//     return false;
//   }
// }


// // if i want to  show all error messages together,we can refer this code. 
//   if(name == null || name == ""){
//    document.getElementById("xyz1").innerHTML = "enter name";
//    status =false;
//   }
//   else{
//     document.getElementById("xyz1").innerHTML = "";
//     status = true;
//   }
// }


