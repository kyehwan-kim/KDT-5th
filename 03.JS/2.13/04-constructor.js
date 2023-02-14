// function Kdt(name, gender) {
//   this.name = name;
//   this.gender = gender;
//   this.showName = function () {
//     console.log(`성함은 ${this.name} 입니다.`);
//   };
// }

// let user1 = new Kdt("김계환", "M");
// let user2 = new Kdt("장경은", "M");
// let user3 = new Kdt("조성희", "F");

// console.log(user1);
// console.log(user2);
// console.log(user3);

// user1.showName();
// user2.showName();
// user3.showName();

//생성자 함수 실습
function Kdt(name, gender) {
  this.name = name;
  this.gender = gender;
  this.showInfo = function () {
    console.log(`참여자의 성함은 ${this.name}이고, 성별은 ${this.gender} 입니다.`);
  };

  // this.showInfo = () => {
  //   console.log(`참여자의 성함은 ${this.name}이고, 성별은 ${this.gender} 입니다.`);
  // };
}

let student1 = new Kdt("조성희", "여성");
let student2 = new Kdt("양재연", "남성");
let student3 = new Kdt("김계환", "남성");
let student4 = new Kdt("김범석", "남성");
let student5 = new Kdt("김정혁", "남성");

student1.showInfo();
student2.showInfo();
student3.showInfo();
student4.showInfo();
student5.showInfo();
