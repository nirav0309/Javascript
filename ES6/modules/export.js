function test1() {
  let add = (x, y) => x + y;
  console.log(add(2, 3));
}


async function test2() {
  try {
    const promise1 = new Promise((resolve, reject) => {
      const num1 = Math.random();
      if (num1 <= 0.5) {
        resolve("Promise1 is fulfilled!");
      } else {
        reject("Promise1 failed!");
      }
    });
    const promise2 = new Promise((resolve, reject) => {
      const num2 = Math.floor(Math.random() * 100);
      if (num2 >= 50) {
        resolve("Number is greater then 50: " + num2);
      } else {
        reject("Number is less then 50: " + num2);
      }
    });

    let P1Wait = await promise1;
    console.log("Output of promise1 :" + P1Wait);
    let P2wait = await promise2;
    console.log("Output of promise2: " + P2wait);
  } catch (e) {
    console.log(e);
  }
}


function test3() {
    return  "hello"
}
console.log(test3())

export {test1, test2, test3}

// export default test1;


