//add event listener 10-04-2024
// document.getElementById("btn").addEventListener("click", fun);
// function fun(){
//     document.getElementById("msg").innerHTML = "Hello World! <br>"+ "This is add event listener";  //change the
// }


//alternative of  addEventListener is onclick, which works the same

// document.getElementById("btn").addEventListener("click", ()=>{
//     document.getElementById("msg").innerHTML = "Hello World "
// })
// document.getElementById("btn").removeEventListener("click", ()=>{
//     document.getElementById("msg").innerHTML;
// })

//adding multiple events on same element
// const btn = document.getElementById("btn");
// btn.addEventListener("mouseover", fun);
// btn.addEventListener("click", fun1)
// btn.addEventListener("mouseout", fun2);
// function fun(){
//     document.getElementById("msg").innerHTML = "This is mouseover function";
// }
// function fun1(){
//     document.getElementById("msg1").innerHTML = "This is click function";
// }
// function fun2(){
//     document.getElementById("msg1").innerHTML = "This is mouseout function";
// }

// //for input field text print extra
// document.getElementById("btn").addEventListener("click", fun);
// function fun(){
//    var i = document.getElementById("name").value;
//     document.write("This is input value : " , i)
// }

// document.getElementById("demo").addEventListener("click" , fun);
// function fun(){
//     document.getElementById("demo").style.color="red";
// }

// //form validation
// function formValidation() {
//   const name = document.myForm.name.value;
//   const psw = document.myForm.password.value;
//   const cnf = document.myForm.confirm.value;
//   const num = document.myForm.num.value;
//   if (name == null || name == "") {
//     //  alert("Name must be filled out");
//     document.getElementById("msg").innerHTML = "Pls enter a name";
//     return false;
//   } else if (!isNaN(name)) {
//     document.getElementById("msg").innerHTML = "Number not allow";
//     return false;
//   } else if (psw.length < 4) {
//     document.getElementById("msg1").innerHTML =
//       "Password contain at least 4 char";
//     return false;
//   } else if (psw !== cnf) {
//     document.getElementById("msg2").innerHTML = "Password did not match";
//     return false;
//   } else if (isNaN(num)) {
//     document.getElementById("msg3").innerHTML = "Enter value is not a number";
//     return false;
//   }
// }

