// 배열기본
const kdt = ["조성희", "양재연", "김계환", "김범석", "김정혁"];

// kdt.push("장경은");
// console.log(kdt);

// console.log(kdt.pop());
// console.log(kdt);

// console.log(kdt.unshift("이효석"));
// console.log(kdt);

// console.log(kdt.shift());
// console.log(kdt);

// 반복문
// for (let i = 0; i < kdt.length; i++) {
//   console.log(kdt[i]);
// }

kdt.push("김계환");
console.log(kdt);

kdt.pop();
console.log(kdt);

kdt.unshift("김계환");
console.log(kdt);

kdt.shift();
console.log(kdt);

for (let i = 0; i < kdt.length; i++) {
  // console.log(kdt[i]);
  console.log(`KDT 1번째`);
}
