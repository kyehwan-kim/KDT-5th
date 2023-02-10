// function helloFunc() {
//   console.log("Hello");
// }

// function returnFunc() {
//   console.log("Return");
//   return "return";
// }

// let str = helloFunc();
// console.log(str);

// let noNameFunc = function () {
//   console.log("No Name");
// };

// function sayHello(name) {
//   console.log(`Hello~ ${name}`);
// }

// sayHello("Mike");
// sayHello("Hwan");

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(10, 20));

function sqaure(num) {
  return num ** 2;
}

console.log(sqaure(37));

function sayHello(name = "friend") {
  console.log(`Hello, ${name}`);
}

sayHello();
sayHello("Mike");
