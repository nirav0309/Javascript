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

const ShowStudentData = () => {
  let xyz = document.querySelector("Tbody");
  //   console.log(xyz);
  xyz.innerHTML = "";
  Data.forEach((element) => {
    const row = `<tr>
              <td>${element.name}</td>
              <td>${element.email}</td>
              <td>${element.phone}</td>
              <td>${element.gender}</td>
              <td id = "edit" ><button onclick="editStudent(${element.id})">Edit</button> <button onclick="deleteStudent(${element.id})">Delete</button></td>
            </tr>`;

    xyz.innerHTML += row;
  });
};
ShowStudentData();

function saveData() {
  let name = document.querySelector("#name1").value;
  let email = document.querySelector("#email1").value;
  let phone = document.querySelector("#phone1").value;
  let gender = document.querySelector('input[name="gender1"]:checked');

  let newDate = {
    name: name,
    email: email,
    phone: phone,
    gender: gender,
    id: Data.length + 1,
  };
  Data.push(newDate);
  document.querySelector("#myModal1").style.display = "none";
  ShowStudentData();
}

function editStudent(id) {
  let student = Data.find((e) => e.id === id);

  document.querySelector("#name2").value = student.name;
  document.querySelector("#email2").value = student.email;
  document.querySelector("#phone2").value = student.phone;

  document.querySelector("#studentId").value = student.id;
  document.querySelector("#myModal2").style.display = "block";
}

function UpdateData() {
  let id = parseInt(document.querySelector("#studentId").value);
  let name = document.querySelector("#name2").value;
  let email = document.querySelector("#email2").value;
  let phone = document.querySelector("#phone2").value;

  let student = Data.findIndex((e) => e.id === id);

  Data[student] = { name, email, phone, id };
  document.querySelector("#myModal2").style.display = "none";

  ShowStudentData();
}

function deleteStudent(id) {
  Data = Data.filter((e) => e.id !== id);
  ShowStudentData();
}

function addData() {
  let show = document.getElementById("myModal1");
  show.style.display = "block";
}
