let Data = [
  {
    name: "test1",
    email: "test1@gmail.com",
    phone: "1234567890",
    gender: "male",
    id: 1,
  },
  {
    name: "test2",
    email: "test2@gmail.com",
    phone: "1789042684",
    gender: "female",
    id: 2,
  },
  {
    name: "test3",
    email: "test3@gmail.com",
    phone: "5219525791",
    gender: "male",
    id: 3,
  },
  {
    name: "test",
    email: "test4@gmail.com",
    phone: "5319525791",
    gender: "male",
    id: 4,
  },
];

function ShowStudentData() {
  let TBody = document.getElementById("TableBody");
  TBody.innerHTML = "";

  Data.forEach((e) => {
    const row = `<tr>
              <td>${e.name}</td>
              <td>${e.email}</td>
              <td>${e.phone}</td>
              <td>${e.gender}</td>
              <td id = "edit" ><button onclick="editStudent(${e.id})">Edit</button> <button onclick="deleteStudent(${e.id})">Delete</button></td>
            </tr>`;
    TBody.innerHTML += row;
  });
}

function formValidation() {
  let name = document.querySelector("#name1").value;
  let email = document.querySelector("#email1").value;
  let phone = document.querySelector("#phone1").value;
  let gender = document.querySelector('input[name="gender1"]:checked');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{0,3}$/;

  let e1 = document.getElementById("error1");
  let e2 = document.getElementById("error2");
  let e3 = document.getElementById("error3");
  let e4 = document.getElementById("error4");

  e1.textContent = "";
  e2.textContent = "";
  e3.textContent = "";
  e4.textContent = "";

  let status = true;

  if (name == null || name == "") {
    e1.textContent = "Name is required";
    status = false;
  }

  if (!emailRegex.test(email)) {
    e2.textContent = "Email is not valid";
    status = false;
  }

  if (phone.length != 10) {
    e3.textContent = "Phone numbers should be 10 digits in length";
    status = false;
  }
  if (!gender) {
    e4.textContent = "select at least one option";
    status = false;
  }

  return status;
}
function saveData() {
  if (formValidation()) {
    let name = document.querySelector("#name1").value;
    let email = document.querySelector("#email1").value;
    let phone = document.querySelector("#phone1").value;
    let gender = document.querySelector('input[name="gender1"]:checked').value;

    const newData = {
      name: name,
      email: email,
      phone: phone,
      gender: gender,
      id: Data.length + 1,
    };

    Data.push(newData);

    document.querySelector("#myModal1").style.display = "none";
  }
  ShowStudentData();
}

function editStudent(id) {
  let student = Data.find((e) => e.id === id);

  document.querySelector("#name2").value = student.name;
  document.querySelector("#email2").value = student.email;
  document.querySelector("#phone2").value = student.phone;

  let RadioButton = document.querySelectorAll('input[name = "gender2"]');
  RadioButton.forEach((e) => {
    if (e.value === student.gender) {
      e.checked = true;
    } else {
      e.checked = false;
    }
  });

  document.querySelector("#studentId").value = student.id;
  document.querySelector("#myModal2").style.display = "block";
}

function formValidation1() {
  let name = document.querySelector("#name2").value;
  let email = document.querySelector("#email2").value;
  let phone = document.querySelector("#phone2").value;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{0,3}$/;

  let e1 = document.getElementById("error11");
  let e2 = document.getElementById("error22");
  let e3 = document.getElementById("error33");  

  e1.textContent = "";
  e2.textContent = "";
  e3.textContent = "";

  let status = true;

  if (name == null || name == "") {
    e1.textContent = "Name is required";
    status = false;
  }

  if (!emailRegex.test(email)) {
    e2.textContent = "Email is not valid";
    status = false;
  }

  if (phone.length != 10) {
    e3.textContent = "Phone numbers should be 10 digits in length";
    status = false;
  }

  return status;
}

function UpdateData() {
  let iserror = formValidation1();
  if (!iserror) {
    return;
  }

  let id = parseInt(document.querySelector("#studentId").value);
  let name = document.querySelector("#name2").value;
  let email = document.querySelector("#email2").value;
  let phone = document.querySelector("#phone2").value;

  let gender = document.querySelectorAll(`input[name = "gender2"]`);
  let genderSelected = "";
  gender.forEach((e) => {
    if (e.checked) {
      genderSelected = e.value;
    }
  });

  let student = Data.findIndex((e) => e.id === id);
  // console.log(Data[student]) //to check data 
  Data[student] = { id, name, email, phone, gender: genderSelected };

  document.querySelector("#myModal2").style.display = "none";

  ShowStudentData();
}

function deleteStudent(id) {
  Data = Data.filter((e) => e.id !== id);
  ShowStudentData();
}

function addData() {
  document.querySelector("#myModal1").style.display = "block";
}

// function searchItem() {
//   let input = document.getElementById("search").value.toLowerCase();
//   let table = document.getElementById("myTable");
//   let tr = table.getElementsByTagName("tr");

//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       if (td.innerHTML.toLowerCase().indexOf(input) !== -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }

function searchItem() {
  let input = document.querySelector("#search").value.toLowerCase();
  let table = document.querySelector("#myTable");
  let tr = table.getElementsByTagName("tr");

  for (i = 0; i < tr.length; i++) {
    td1 = tr[i].getElementsByTagName("td")[0]; //first index i.e. name
    td2 = tr[i].getElementsByTagName("td")[1]; //second index i.e. email
    td3 = tr[i].getElementsByTagName("td")[2]; //third index i.e. phone
    
    // td4 = tr[i].getElementsByTagName("td")[3]; //fourth index i.e. gender if its works // doesn't working

    if (td1 || td2 || td3) {
      if (
        td1.textContent.toLowerCase().indexOf(input) !== -1 || //check if the result is greater then -1, and it indicates string match is found 
        td2.textContent.toLowerCase().indexOf(input) !== -1 ||
        td3.textContent.toLowerCase().indexOf(input) !== -1
      ) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

// const table = document.getElementById('myTable');
// const searchInput = document.getElementById('search');

// searchInput.addEventListener('keyup')

// document.querySelector('#myMODAL').on('show.bs.modal', function(event) {
//   var button = document.querySelector(event.relatedTarget); // Button that triggered the modal
//   document.querySelector('input[name="optradio"]:checked').prop('checked', false); //I'm doing this coz every time new popup opens radio button will be reset to none. If you don't need to do this remove this line
//   var ID = button.data('id');
//   document.querySelector('input[name="optradio"][value="'+ID+'"]').prop('checked',true);
// });

//search bar also pending -------
// function searchItem(){
//   var searchBar = document.querySelector("#search").value;
//   var table;
//   table = Array.from(document.getElementById("myTable").rows);

//   // table = Array.from().rows;
//   table.filter(e =>{
//     e.textContent.toLowerCase().indexOf(searchBar) === -1
//   }).map(x=>x.style.display = 'none')

//   table.filter(e =>{
//     e.textContent.toLowerCase().indexOf(searchBar) > -1
//   }).map(x=>x.style.display = '')

// }

//working
// const table = document.querySelector('#myTable');
// const searchInput = document.querySelector('#search');

// searchInput.addEventListener('keyup', function() {
//   const searchWord = this.value.toLowerCase();
//   const rows = table.querySelectorAll('th');

//   rows.forEach(function(row) {
//     const text = row.textContent.toLowerCase();

//     if (text.indexOf(searchWord) !== -1) {
//       row.style.display = '';
//     } else {
//       row.style.display = 'none';
//     }
//   });
// });

//working
// function searchItem() {
//   let input = document.getElementById("search").value.toLowerCase();
//   let table = document.getElementById("myTable");
//   let tr = table.getElementsByTagName("tr");

//   for (i = 0; i < tr.length; i++) {
//     td = tr[i].getElementsByTagName("td")[0];
//     if (td) {
//       if (td.innerHTML.toLowerCase().indexOf(input) !== -1) {
//         tr[i].style.display = "";
//       } else {
//         tr[i].style.display = "none";
//       }
//     }
//   }
// }

//pending
// window.addEventListener("click", function (event) {
//   let modal = this.document.querySelector("#modal").style.visibility;

//   if (event.target.modal == "") {
//     modal.style.visibility = "none";
//   }
// });

//now done
window.onclick = (e) => {
  let modal1 = document.querySelector("#myModal1");
  let modal2 = document.querySelector("#myModal2");
  if (e.target == modal1 || e.target == modal2) {
    modal1.style.display = "none";
    modal2.style.display = "none";
  }
};

ShowStudentData();
