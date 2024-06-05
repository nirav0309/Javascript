function formValidation() {
  const myName = document.getElementById("name").value;
  const LastName = document.getElementById("LastName").value;
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let gen1 = document.getElementById("gender1");
  let gen2 = document.getElementById("gender2");

  let hobbyInput1 = document.getElementById("xyz1");
  let hobbyInput2 = document.getElementById("xyz2");
  let hobbyInput3 = document.getElementById("xyz3");

  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/;

  var status = false;
  if (myName == null || myName == "") {
    document.getElementById("error1").innerHTML = "FirstName is required";
    status = false;
  } else {
    document.getElementById("error1").innerHTML = "";
  }

  if (LastName == null || LastName == "") {
    document.getElementById("error4").innerHTML = "LastName is required";
    status = false;
  } else {
    document.getElementById("error4").innerHTML = "";
  }

  if (!emailRegex.test(email)) {
    document.getElementById("error2").innerHTML = "Enter a valid email address";
    status = true;
  } else {
    document.getElementById("error2").innerHTML = "";
  }

  if (password.length < 4) {
    document.getElementById("error3").innerHTML =
      "Password must contain at least 4 character";
    status = false;
  } else {
    document.getElementById("error3").innerHTML = "";
  }

  if (gen1.checked == false && gen2.checked == false) {
    document.getElementById("error5").innerHTML = "Select at least one option";
    status = true;
  } else {
    document.getElementById("error5").innerHTML = ""; 
  }

  if (
    hobbyInput1.checked == false &&
    hobbyInput2.checked == false &&
    hobbyInput3.checked == false
  ) {
    document.getElementById("error6").innerHTML = "Select at least one option";
    status = true;
  } else {
    document.getElementById("error6").innerHTML = "";
  }

  return status;
}

function LoginFormValidation() {
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{3,}$/;

  var status = false;
  if (!emailRegex.test(email)) {
    document.getElementById("error1").innerHTML = "Enter a valid email address";
    status = true;
  } else {
    document.getElementById("error1").innerHTML = "";
  }

  if (password.length < 4) {
    document.getElementById("error2").innerHTML =
      "Password must contain at least 4 character";
    status = false;
  } else {
    document.getElementById("error2").innerHTML = "";
  }

  return status;
}

function Register(e) {
  e.preventDefault();
  const isError = formValidation();
  if (isError) return;

  const myName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  let Data = [];
  Data = JSON.parse(localStorage.getItem("users")) || [];
  // let Email = Data.filter((e)=>{
  //   e.email !== email
  // })

  if (Data.some((e) => e.email === email)) {
    alert("Email cannot be same");
    return false;
  } else if (myName !== "" && email !== "" && password !== "") {
    Data.push({
      name: myName,
      email: email,
      password: password,
    });
    localStorage.setItem("users", JSON.stringify(Data));
    window.location.href = "login.html";
  } else {
    alert("Please fill out all fields");
  }
}

let button = document.getElementById("btn1");
button.addEventListener("click", (event) => {
  event.preventDefault();
  const isError = LoginFormValidation();
  if (isError) return;

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let Data = [];
  let users = JSON.parse(localStorage.getItem("users")) || Data;

  const userExists = users.some(
    (e) => e.email === email && e.password === password
  );

  if (userExists) {
    alert("Login successful");
    localStorage.setItem("email", email);
    window.location.href = "homepage.html";
  }
  else{
    alert("Login unsuccessful")
  }
});

function LoginPage() {
  window.location.href = "login.html";
}

// function HomepageInputValid(){
//   const input1 = document.myForm.name1.value;
//   const input2 = document.myForm.address1.value;
//   const input3 = document.myForm.number1.value;

//   var status = false;
//   if (input1 == null || input1 == "") {
//     document.getElementById("error1").innerHTML = "Name is required";
//     status = false;
//   } else {
//     document.getElementById("error1").innerHTML = "";
//   }
//   if (input2 == null || input2 == "") {
//     document.getElementById("error2").innerHTML = "Address is required";
//     status = false;
//   } else {
//     document.getElementById("error2").innerHTML = "";
//   }
//   if (input3 == null || input3 == "") {
//     document.getElementById("error3").innerHTML =
//       "Number should not be less then or greater then 10 ";
//     status = false;
//   } else {
//     document.getElementById("error3").innerHTML = "";
//   }
//   return status;
// }

function fun(event) {
  event.preventDefault();
  const input1 = document.myForm.name1.value;
  const input2 = document.myForm.address1.value;
  const input3 = document.myForm.number1.value;
 
  if(input1 == ""){
   alert("Name is required")
   return false;
  }else if(input2 == ""){
    alert("Address is required")
    return false;
  } else if(input3.length != 10){
    alert("Number should not be less then or greater then 10")
    return false;
  }

  // var status = false;
  // if (input1 == null || input1 == "") {
  //   document.getElementById("error1").innerHTML = "Name is required";
  //   status = false;
  // } 
  // else if (input3 !== 10) {
  //   document.getElementById("error3").innerHTML = "Number is 10";
  //   status = false;
  // } 
  // else if(input2 == null || input2 == ""){
  //   document.getElementById("error2").innerHTML = "Name is required";
  //   status = false;
  // }

  else {
    let myName = document.getElementById("name").value;
    let myAddress = document.getElementById("address").value;
    let myNumber = document.getElementById("number").value;
    let tr = document.createElement("tr");

    let td1 = tr.appendChild(document.createElement("td"));
    let td2 = tr.appendChild(document.createElement("td"));
    let td3 = tr.appendChild(document.createElement("td"));
    let td4 = tr.appendChild(document.createElement("td"));

    td1.innerHTML = myName;
    td2.innerHTML = myAddress;
    td3.innerHTML = myNumber;
    td4.innerHTML =
      '<button id="Delete" onclick="deleteItem(this)">Delete Row</button>' +
      '<button id="Edit" onclick="editItem(this)">Edit Row</button>';

    document.getElementById("myTable").appendChild(tr);
    clear();
  }
//  return status;
}

function deleteItem(param) {
  let del = param.parentNode.parentNode;
  del.parentNode.removeChild(del);
}

function clear() {
  document.getElementById("name").value = "";
  document.getElementById("address").value = "";
  document.getElementById("number").value = "";
}
//edit data using prompt---------------
function editItem(param) {
  let del = param.parentNode.parentNode;
  var xyz = document.querySelectorAll("td");
  let newName = prompt("Enter a name: ", xyz[0].innerHTML);
  let newAddress = prompt("Enter a Address: ", xyz[1].innerHTML);
  let newNumber = prompt("Enter a Number: ", xyz[2].innerHTML);

  if (newName != null && newAddress != null && !isNaN(newNumber)) {
    xyz[0].innerHTML = newName;
    xyz[1].innerHTML = newAddress;
    xyz[2].innerHTML = newNumber;
  } else {
    alert("Please enter valid number");
  }
}

function Login() {
  localStorage.removeItem("email");
  window.location.href = "login.html";
}
 
// window.history.forward()
// window.history.forward();
// function noBack()
// {
//     window.history.forward();
// }

