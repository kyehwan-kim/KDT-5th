// const hwan = {
//   name: "김계환",
//   email: "clon0306@naver.com",
// };

// const 김계환 = {
//   name: "김계환",
//   email: "clon0306@naver.com",
// };

// console.log(hwan === 김계환);

const hwan = {
  name: "김계환",
  email: "clon0306@naver.com",
};

const hwanCopy = hwan;
hwanCopy.name = "HWAN";

console.log(hwanCopy);
console.log(hwan);

console.log(hwan === hwanCopy);
