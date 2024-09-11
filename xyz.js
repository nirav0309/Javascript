// const xyz =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc1B1YmxpYyI6dHJ1ZSwic3VydmV5SWQiOiIxOTc2IiwiaXNEYXNoYm9hcmQiOnRydWUsImV4cCI6MTcyMDg2Mzk5OSwiaWF0IjoxNzIwNzc3NTk5fQ.4wcLuWqBJjEaKvGCi2FqssO8P-k3RyyazN4v2qbd-es";

//   console.log("xyz>>>", xyz)
// const value = encodeURIComponent(xyz).replace(/\./g, "+");
// console.log("value>>>>>>>", value)
// const decodeUrl = decodeURIComponent(value).replace(/\+/g, ".");
// console.log("decodedUrl>>>>>>>", decodeUrl)

// var token = xyz.split(".")
// const xyz1 = JSON.stringify(atob(token[0]))
// console.log(JSON.stringify(atob(token[1])))


// function myFun() {
//   const person1 = "who is he?";
//   if (person1) {
//     const meet = "he is just a friend";
//     const res = person1 === meet;
//     console.log(res + "," + " he's lying");
//   }
// }
// myFun();


// const array = Array.from({ length: 100 }, (item, index) => ({
//   id: index + 1,
//   name: `Item ${index + 1}`,
// }));

// function random(data, value) {
//   const randomNumber = [...data].sort(() => 0.5 - Math.random());
//   return randomNumber.slice(0, value);
// }

// const RandomItem = random(array, 5);
// console.log(RandomItem);

const generateRandomItems = (length) => {
  let result = [];
  const questionAnswerLength = questionAnswerData.length;

  for (let i = 0; i < length; i++) {
      let randomIndex;
      
    do {
      randomIndex = Math.floor(Math.random() * questionAnswerLength);
    } while (result.includes(questionAnswerData[randomIndex]));

    result.push(questionAnswerData[randomIndex]);
  }

  return result;
};

console.log("myData.>>>>", generateRandomItems(5));
