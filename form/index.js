function formValidation() {
  const myName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var status = false;

  if (myName == null || myName == "") {
    document.getElementById("error1").innerHTML = "Name is required";
    status = false;
  } else {
    document.getElementById("error1").innerHTML = "";
  }
  if (!emailRegex.test(email)) {
    document.getElementById("error2").innerHTML = "Enter a valid email address";
    status = false;
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
  return status;
}

function Register() {
  const myName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let Data = [];
 Data =  JSON.parse(localStorage.getItem("users")) || [];
  let Email = Data.some((e) => {
    return e.email === email;
  });
  if (Email) {
    alert("Email cannot be same");
  } else {
    Data.push({
      name: myName,
      email: email,
      password: password,
    });
    localStorage.setItem("users", JSON.stringify(Data));

    if (myName === "" || email === "" || password === "") {
      alert("Fill in all input fields");
    } else {
      window.location.href = "login.html";
    }
  }
}

let button = document.getElementById("btn1");
  button.addEventListener("click", () => {
  const myName = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  let Data = [];
  let users = JSON.parse(localStorage.getItem("users")) || Data;

  const userExists = users.some(
    (e) => e.name === myName && e.password === password
  );

  if (userExists) {
    alert("Login successful");
    localStorage.setItem("name", myName)
    window.location.href = "homepage.html";
  } else {
    alert("Login fail");
  }
});

//login page
// document.querySelector("#btn1").addEventListener("click", () => {
//   const myName = document.getElementById("name").value;
//   const email = document.getElementById("email").value;
//   const password = document.getElementById("password").value;
//   let Data = [];
//   Data = JSON.parse(localStorage.getItem("users")) || Data;
//   if (
//     Data.some((e) => {
//       return e.myName === myName && password === password;
//     })
//   ) {
//     alert("Login Successful");
//   } else {

//     window.location.href = "homepage.html"
//   }
// });
