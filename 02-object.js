// const hwan = {
//   name: "김계환",
//   age: 36,
// };

// // 접근
// console.log(hwan.name);
// console.log(hwan["age"]);

// // 추가
// hwan.gender = "M";
// console.log(hwan);

// hwan["head"] = "medium";
// console.log(hwan);

// delete hwan["head"];
// // delete hwan.head;
// console.log(hwan);

// 뽀로로 실습
const pororo = {
  name: "뽀로로",
  age: 7,
  height: 184,
  weight: 50,
  running() {
    console.log("뽀로로가 뛰어가넹");
  },
  say: function () {
    console.log("뽀로로는 귀엽넹");
  },
};

//object-method
pororo.running();
pororo.say();

//전체 정보 출력 실습
// for (let key in pororo) {
//   console.log(`key는 ${key}, key 안의 값은 ${pororo[key]}`);
// }

//for...in 반복문
// for (let key in pororo) {
//   console.log(key);
//   console.log("pororo.key", pororo.key);
//   console.log("pororo[key]", pororo[key]);
// }

//객체 존재 여부 확인
// console.log(pororo.haircolor);
// console.log("name" in pororo);
// console.log("height" in pororo);

// console.log(pororo.name);
// console.log(pororo["age"]);

// // 성별 추가
// // pororo.gender = "M";
// pororo["gender"] = "M";
// console.log(pororo);

// //키 추가
// // pororo["height"] = "184cm";
// pororo.height = "184cm";
// console.log(pororo);

// //성별 데이터 삭제
// // delete pororo.gender;
// delete pororo["gender"];
// console.log(pororo);
