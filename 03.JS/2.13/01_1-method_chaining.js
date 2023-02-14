// --> Hello
let helloTest = "H-e-l-l-o";
let helloTestArr = helloTest.split("-");
console.log(helloTestArr);

//revers
let reversHelloTestArr = helloTestArr.reverse();
console.log(reversHelloTestArr);

// let helloStr = helloTestArr.join("*");
// console.log(helloStr);

let resultStr = reversHelloTestArr.join("");
console.log(resultStr);

let finalStr = helloTest.split("-").reverse().join("");
console.log(finalStr);

const obj = {
  arr: ["a", "b", "c"],
  number: 10,
};

let testStr = obj.arr.reverse().join("");
console.log(testStr);

// 실습

const kdtCurriculm = ["HTML", "CSS", "JS", "BACKEND", "REACT"];
const result1 = kdtCurriculm.shift().split("").reverse().join("");
const result2 = kdtCurriculm.pop().split("").reverse().join("");

console.log(result1);
console.log(result2);
