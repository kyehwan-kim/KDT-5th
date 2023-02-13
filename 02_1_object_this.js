// const user = {
//   name: "김계환",
//   sayHello: function () {
//     console.log(`안녕하세요, ${this.name}님`);
//   },
// };

// user.sayHello();

// function sayHello() {
//   console.log(`Hello, I'm ${this.name}`);
// }

// const boy = {
//   name: "Mike",
//   sayHello,
// };

// const girl = {
//   name: "Jane",
//   sayHello,
// };

// boy.sayHello();
// girl.sayHello();

//실습-this

// const pororo = {
//   name: "뽀로로",
//   height: 110,
//   showName() {
//     console.log(`해당 객체의 이름은 ${this.name} 입니다`);
//   },
//   showHeight,
// };

// function showHeight() {
//   console.log(`해당 객체의 이름은 ${this.height} 입니다`);
// }

// pororo.showName();
// pororo.showHeight();

//화살표 함수와 this
let sayHello = () => {
  console.log(`Hello, I'm ${this.name}`);
  console.log(this);
};

let boy = {
  name: "Mike",
  sayHello,
};

let girl = {
  name: "Jane",
  sayHello,
};

boy.sayHello();
girl.sayHello();
